# Farhad Bagherlo — Portfolio

A premium static portfolio for GitHub Pages. Everything is local: HTML, CSS, JavaScript, SVG project artwork and profile photo.

## Publish on GitHub Pages

1. Create a repository named `YOUR-USERNAME.github.io`.
2. Upload everything from this folder to the repository root.
3. Open **Settings → Pages**.
4. Select **Deploy from a branch → main → /(root)**.
5. Open `https://YOUR-USERNAME.github.io`.

## Custom domain

In **Settings → Pages → Custom domain**, enter your domain. Then configure DNS at your domain provider according to GitHub Pages' current custom-domain documentation.

## Contact form → Telegram

The site intentionally does NOT put a Telegram bot token in browser JavaScript.

A Cloudflare Worker is included in `worker/worker.js` as a small secure relay:

Browser → Cloudflare Worker → Telegram Bot API → your Telegram chat

### Worker setup

1. Create a Cloudflare Worker.
2. Use `worker/worker.js` as its code.
3. Create Worker secrets:
   - `TELEGRAM_BOT_TOKEN`
   - `TELEGRAM_CHAT_ID`
4. Deploy the Worker.
5. Copy the Worker URL into `script.js` by replacing:
   `YOUR_CLOUDFLARE_WORKER_URL`
6. Publish the portfolio again.

Do not commit your Telegram bot token to GitHub.

## Editing

Main content is already filled with the information supplied for Farhad Bagherlo. Project descriptions are intentionally professional but conservative; they do not claim technical details that were not provided.

## Included project artwork

The five project images are minimal SVG illustrations made for this portfolio, so there are no external image-hosting dependencies.


## Updated profile details
- 18+ years of software engineering experience
- Email: bagherlo@live.com
- LinkedIn: https://www.linkedin.com/in/farhad-bagherlo-98077886/
- Stack Overflow: https://stackoverflow.com/users/4826138/farhad-bagherlo
- Toshanet and Lackora are presented under Selected Work rather than the social links section.
