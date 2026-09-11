# Priyanshu Mishra's portfolio

Next.js App Router portfolio with a Markdown blog.

## Local development

Use Node.js 22.13 or newer, then run `npm ci` and `npm run dev`.

## Production

Run `npm run build`, then `npm start`. Homepage, blog listing, and published posts are generated during the build. Unpublished or unknown post URLs return 404.

## Vercel

Import this GitHub repository into Vercel, choose the Next.js framework preset, and keep the root directory as `./`. Use the default build and output settings. No environment variables are required. Vercel assigns a `vercel.app` URL; future production-branch pushes redeploy the site once the integration is enabled.

## Writing

See [content/README.md](content/README.md). Add Markdown files in `content/posts/`, set `draft: false`, and rebuild to publish them.
