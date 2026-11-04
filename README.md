# tobeyuj.github.io

The website for Retro Quest: Seven Cities, served by GitHub Pages at
https://tobeyuj.github.io/

- `index.html`: the game's home page
- `privacy.html`: the privacy policy (the URL both app stores need)
- `support.html`: the support page (the URL the App Store needs)
- `play/`: where every post shared from the game links (tobeyuj.github.io/play).
  When the game is in the stores, the store links go here. Its post pictures
  (`assets/post-*.webp`) are drawn by the game itself:
  `retro-quest/tools/render_share_samples.gd`, run windowed, then halved to 540x675.
- `app-ads.txt`: AdMob's authorized seller file; it must stay at the site root

It's plain HTML and CSS with no build step. Edit a file, commit and push to
`main`, and GitHub Pages publishes it within a minute or two. When the privacy
policy changes, update its effective date too.

Copyright 2026 Uriah Tobey. All rights reserved. The art, text and game material
here aren't licensed for reuse.
