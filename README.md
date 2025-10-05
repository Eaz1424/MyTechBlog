# My Tech Blog — Articles Landing Page

A static, responsive landing page for a technology blog inspired by the attached reference layout. Built with semantic HTML and modern CSS, the page showcases featured articles, category filters, and a newsletter subscription footer.

## Features

- Hero section with bold typography and supporting subhead.
- Category filter bar with a built-in dark/light theme toggle.
- Responsive three-column article grid with hover states.
- Thematic badges with color-coding for each category.
- Disqus-powered community comments section.
- Personalized “About Me” footer with social and project links.
- Netlify-ready configuration with built-in analytics snippet.

## Getting Started

Open `index.html` in your browser. No build tools or dependencies are required.

### Dark mode

Click the theme toggle in the filter bar to switch between light and dark palettes. The last selection is persisted in `localStorage` and will override the system preference.

### Comments (Disqus)

Replace `YOUR_DISQUS_SHORTNAME` inside `index.html` with your Disqus shortname. You can configure additional Disqus options in the inline `disqus_config` block.

### Analytics

The page loads Netlify Analytics via `/.netlify/analytics.js`. Enable Analytics in your Netlify dashboard to start collecting events—no further changes are required.

## Customization

- Update article content, images, and metadata directly in `index.html`.
- Adjust colors, typography, or layout tokens in `styles.css` variables at the top of the file.
- Update social links and external URLs in the footer to match your personal destinations.
- Modify theme toggle behavior or add additional UI interactions inside `script.js`.

## Deployment on Netlify

1. Create a new site in Netlify and connect it to your GitHub repository (see the next section to create one).
2. Leave the build command empty and set the publish directory to the repository root (`/`).
3. Enable Netlify Analytics from the site dashboard if you want traffic insights.
4. Redeploy after customizing Disqus or other scripts.

The included `netlify.toml` adds a catch-all redirect so client-side routing will work if you expand the project into a single-page app later.

## Creating the GitHub repository

I can’t create repositories directly, but you can:

```bash
cd /Users/eihabazizzaidi/Personal/projects/MyTechBlog
git init
git add .
git commit -m "Initial tech blog landing page"
git branch -M main
git remote add origin git@github.com:<your-username>/my-tech-blog.git
git push -u origin main
```

Replace `<your-username>` with your GitHub handle. After pushing, connect the repo to Netlify for automatic deploys.

## License

All code is provided under the MIT license. Replace or verify ownership of remote images before publishing.
