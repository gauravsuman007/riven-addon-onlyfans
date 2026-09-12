"""The OnlyFans add-on's implementation.

Named for the add-on rather than something generic like ``backend`` on
purpose: the host imports every add-on into one interpreter, so two add-ons
that both called their package ``backend`` would collide in ``sys.modules``
and one would silently run the other's code.
"""
