# YouTube to Invidious Redirector

Automatically redirects YouTube video links to [inv.nadeko.net](https://inv.nadeko.net) — an ad-free Invidious frontend — and copies the original YouTube URL to your clipboard so you can easily share it.

## Features

- Redirects `youtube.com/watch`, `youtu.be`, `/shorts/`, and `/embed/` links to inv.nadeko.net
- Copies the original YouTube URL to your clipboard on every redirect — handy when you need to quickly scrub or jump around in a video, since Invidious can be slow for that. Just paste the link into Brave (which also blocks ads) for a smoother experience

## Local Installation

1. Open Firefox and go to `about:debugging#/runtime/this-firefox`
2. Click **Load Temporary Add-on**
3. Select `manifest.json` from this directory

## Changelog

### 1.1
- Copy original YouTube URL to clipboard on redirect

### 1.0
- Initial release: redirect YouTube links to inv.nadeko.net
