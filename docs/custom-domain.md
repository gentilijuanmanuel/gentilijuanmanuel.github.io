# Moving the site to a custom domain

How to serve the site from a custom domain (for example `jmgentili.com`) instead of `gentilijuanmanuel.github.io`.

GitHub Pages supports custom domains for free, including the HTTPS certificate. Once the domain is set, `gentilijuanmanuel.github.io` redirects to it automatically, so existing links and search rankings keep working.

## 1. Buy the domain

Any registrar works. Cloudflare Registrar and Porkbun sell at cost and include free WHOIS privacy. A `.com` costs around $10 to $11 a year.

## 2. Verify the domain on GitHub (recommended)

In your GitHub account settings (not the repository): **Settings → Pages → Add a domain**. GitHub shows a TXT record to add at the registrar. Verifying stops anyone else from pointing their own GitHub Pages site at your domain.

## 3. Add the DNS records

At the registrar, for the bare domain (`@`) and `www`:

| Type  | Name  | Value                         |
| :---- | :---- | :---------------------------- |
| A     | `@`   | `185.199.108.153`             |
| A     | `@`   | `185.199.109.153`             |
| A     | `@`   | `185.199.110.153`             |
| A     | `@`   | `185.199.111.153`             |
| AAAA  | `@`   | `2606:50c0:8000::153`         |
| AAAA  | `@`   | `2606:50c0:8001::153`         |
| AAAA  | `@`   | `2606:50c0:8002::153`         |
| AAAA  | `@`   | `2606:50c0:8003::153`         |
| CNAME | `www` | `gentilijuanmanuel.github.io` |

On Cloudflare, set these records to "DNS only" (grey cloud) at first, so GitHub can issue the HTTPS certificate.

## 4. Connect the domain to the repository

In the repository: **Settings → Pages → Custom domain**, enter `jmgentili.com` and save. Once the DNS check passes and the certificate is issued, tick **Enforce HTTPS**.

The site deploys through GitHub Actions (`.github/workflows`), so no `CNAME` file is needed in the repository. The custom domain lives in the Pages settings.

GitHub redirects between the bare domain and `www` automatically, to whichever one is entered as the custom domain.

## 5. Update the code

- `astro.config.ts`: set `site` to `https://jmgentili.com`. Canonical URLs, Open Graph tags, the RSS feed and the sitemap all derive from it.
- `public/robots.txt`: point the `Sitemap:` line at `https://jmgentili.com/sitemap-index.xml`.
- Posts that hardcode `https://gentilijuanmanuel.github.io/posts/...` in their links: make them relative (`/posts/...`) so they work on any domain. Today these are the Terry Davis series, in English and Spanish:
  - `src/content/post/terry-davis-part-2.md`
  - `src/content/post/terry-davis-part-2es.md`
  - `src/content/post/terry-davis-part-3.md`
  - `src/content/post/terry-davis-part-3es.md`
- Optionally, the title of `README.md`.

To find any remaining references:

```sh
grep -rn "gentilijuanmanuel.github.io" --exclude-dir=node_modules --exclude-dir=dist --exclude-dir=.git .
```

The repository name itself can stay as it is.

## 6. Outside the repository

- **Google Search Console:** add `jmgentili.com` as a property and submit `https://jmgentili.com/sitemap-index.xml`.
- **Google Analytics:** update the website URL of the data stream. Tracking keeps working either way, since the measurement id doesn't change.
- **Profiles:** update the website link on GitHub, Medium, Substack, Goodreads, LinkedIn and Twitter.

Light and dark theme preferences are stored per domain, so returning visitors see their saved choice reset once.

## Optional: email on the domain

An address such as `hi@jmgentili.com` can forward to Gmail for free with Cloudflare Email Routing (or the forwarding most registrars include).
