import { mount as svelteMount, unmount } from "svelte";

import App from "./App.svelte";
import "./styles.css";

/*
    The contract with the host.

    It hands over a bare element, the sub-path below /x/onlyfans, the prefix
    its API is mounted under, and a navigate function. Everything inside the
    element is this add-on's; nothing outside it is touched. `update` exists so
    that following a link within the add-on does not tear the page down and
    rebuild it -- which would throw away scroll position and every account
    already loaded.
*/
// `.svelte.js`, not `.js`: runes outside a component are only compiled in a
// file with this extension. As a plain `.js` the `$state` below survives into
// the bundle as an undefined call and the page dies on mount -- and it builds
// cleanly either way, so nothing warns you.
export default function mount({ target, path, api, navigate }) {
    const props = $state({ path: path ?? "", api, navigate });
    const app = svelteMount(App, { target, props });

    return {
        update(next) {
            props.path = next ?? "";
        },
        destroy() {
            unmount(app);
        }
    };
}
