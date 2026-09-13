/*
    Every request goes through the host's proxy at the prefix it gave us, so
    this never needs to know the backend's address, and the API key never
    reaches the browser.

    Failures come back as null rather than thrown. Each caller here renders
    into a page that has other sections still working, and an exception would
    take all of them down to report that one list did not load.
*/
let base = "";

export function configure(prefix) {
    base = prefix;
}

async function get(path, params) {
    const url = new URL(`${base}${path}`, window.location.origin);

    for (const [key, value] of Object.entries(params ?? {})) {
        if (value !== undefined && value !== null && value !== "") {
            url.searchParams.set(key, String(value));
        }
    }

    try {
        const response = await fetch(url);
        if (!response.ok) return null;
        return await response.json();
    } catch {
        return null;
    }
}

async function post(path, params) {
    const url = new URL(`${base}${path}`, window.location.origin);

    for (const [key, value] of Object.entries(params ?? {})) {
        if (value != null) url.searchParams.set(key, String(value));
    }

    try {
        const response = await fetch(url, { method: "POST" });
        return response.ok ? await response.json() : null;
    } catch {
        return null;
    }
}

/*
    One endpoint behind every list on the page. A rail is a page of the index
    in a particular order -- `carried`, `popular`, `trending`, `rising`, `new`
    or `random` -- so the full grid, each rail, and the search results are all
    this call with different arguments.
*/
export const listAccounts = (params) => get("/accounts", params);

/*
    The rows of the landing page, and their order. Fetched rather than written
    into this component so the television builds the same set from the same
    list -- see `onlyfans_addon/rails.py`, which exists because a rail was
    added here and the TV silently went on drawing the page before it.
*/
export const listRails = () => get("/rails");
export const getAccount = (handle) => get(`/accounts/${encodeURIComponent(handle)}`);
/*
    Performers whose videos are titled like this one's. Content-based, because
    collaborative filtering needs more than one user; an empty list is a normal
    answer for an account the sampling pass has not reached yet.
*/
export const similarAccounts = (handle) =>
    get(`/accounts/${encodeURIComponent(handle)}/similar`);
export const accountVideos = (handle, site, page) =>
    get(`/accounts/${encodeURIComponent(handle)}/videos`, { site, page });
export const accountGalleries = (handle, site, page) =>
    get(`/accounts/${encodeURIComponent(handle)}/galleries`, { site, page });
/*
    Loose images -- the post-per-item archives' feed, which has no albums.
    Distinct from galleries on purpose; a site answers one or the other, and
    the mixed grid asks both.
*/
export const accountImages = (handle, site, page) =>
    get(`/accounts/${encodeURIComponent(handle)}/images`, { site, page });
/*
    The text under one post, fetched a card at a time.

    Separate from `accountVideos` because it is a request per video on the
    site's side: the grid page carries no captions, only the video's own page
    does. The list endpoint says which sites have any (`has_text`), so this is
    only ever called where there is something to get.
*/
export const videoInfo = (site, videoId) =>
    get("/videoinfo", { site, video_id: videoId });

export const galleryImages = (site, galleryId) =>
    get(`/galleries/${encodeURIComponent(site)}/${encodeURIComponent(galleryId)}`);

export const saveAccount = (handle, saved) =>
    saved
        ? post(`/accounts/${encodeURIComponent(handle)}/save`)
        : fetch(`${base}/accounts/${encodeURIComponent(handle)}/save`, { method: "DELETE" });

/*
    Images and video are addressed by position and id, never by URL. The real
    ones carry short-lived tokens and these hosts check Referer, so a raw
    <img src> or <video src> pointed at them would 403 or expire. The backend
    resolves and proxies; these just build the local address.
*/
export const imageUrl = (site, galleryId, index) =>
    `${base}/image?site=${encodeURIComponent(site)}&gallery_id=${encodeURIComponent(galleryId)}&index=${index}`;

export const photoUrl = (site, handle, page, index, thumb = false) =>
    `${base}/photo?site=${encodeURIComponent(site)}&handle=${encodeURIComponent(handle)}` +
    `&page=${page}&index=${index}${thumb ? "&thumb=true" : ""}`;

export const streamUrl = (site, videoId, index = 0) =>
    `${base}/stream?site=${encodeURIComponent(site)}&video_id=${encodeURIComponent(videoId)}&index=${index}`;

/*
    THE RAIL LAYOUT IS THE HOST'S, not this add-on's.

    So these two go to `/api/v1/rails/...` directly rather than through
    `base`, which is this add-on's own mount. There is one stored arrangement
    per page and the television reads the same one; a copy kept here would be
    a second answer that the two surfaces could disagree about.

    The page key is the host's shape for an add-on's own page: "x/" and the
    add-on's key.
*/
const LAYOUT = "/api/v1/rails/x/onlyfans";

export async function getLayout() {
    try {
        const response = await fetch(LAYOUT);
        if (!response.ok) return [];
        return (await response.json()).rails ?? [];
    } catch {
        // An unreachable layout is an UNARRANGED page, never an empty one.
        return [];
    }
}

export async function saveLayout(rails) {
    try {
        const response = await fetch(LAYOUT, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(rails)
        });
        return response.ok;
    } catch {
        return false;
    }
}
