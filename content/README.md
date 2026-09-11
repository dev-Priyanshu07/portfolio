# Writing posts

1. Duplicate `posts/my-first-post.md` with a lowercase, hyphenated filename, such as `posts/why-i-build.md`.
2. Set `title`, `date` (quoted YYYY-MM-DD), and a short `description` in the frontmatter.
3. Write the article below the closing `---`. Use `##` for section headings; the page already displays the title.
4. Set `draft: false` to show the post locally and include it in the next deployment. Drafts are excluded from the listing and return 404 at their URLs; they are not confidential storage and remain in the source repository.
5. Visit `/blog` and `/blog/why-i-build` to preview. Commit, push, and redeploy to publish online. Automatic deployment must be configured separately.

Posts are listed newest first. The filename determines the URL. Missing posts return 404. Keep this README outside `posts/`.

Supported: paragraphs, headings, lists, links, images, quotes, and fenced code blocks. Raw HTML is disabled. Put images in `public/blog/` and reference them as `![Description](/blog/image.webp)`. Use compressed images to keep posts fast.

Dates label and sort posts; they do not schedule publication. Keep `draft: true` until ready.
