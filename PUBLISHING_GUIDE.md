# Publish Oboro Research: Windows + GitHub Pages + Custom Domain

*Prepared November 7, 2026. Workflow: static website, GitHub Desktop, GitHub Pages, domain registrar. No paid web host or command-line tooling required.*

## Goal and expected cost

The finished site can be available at `https://YOUR_USERNAME.github.io/oboro-research-site/` for **$0 in hosting fees** using GitHub Pages with a public repository. Later, connect a domain you own such as `obororesearch.com` (only if available). The domain is a separate annual charge; check its **first-year price, renewal price, and any premium-domain pricing** before purchasing. Domain ownership is not a hosting subscription.

You do not need React, Node.js, an NPM package manager, a database, or a web server subscription for this version. The files are ordinary HTML, CSS, JavaScript and SVG/PNG images.

**Important before going public:** This edition has a placeholder LinkedIn contact label. It is intentionally not a clickable link because your profile URL is not yet supplied. The rover and clock images are conceptual sketches, not approved CAD drawings. The site is not yet live and no domain has been bought.

## Security-first repository policy (read before publishing)

Keep **two separate GitHub repositories**. This is a deliberate boundary, not just a naming convention:

| Repository | Visibility | Contents |
|---|---|---|
| `oboro-research-site` | **Public** | Website HTML/CSS/JS, approved images, public project descriptions, selected sketches, and project updates |
| `tanuk-development` | **Private** | Actual rover CAD, detailed engineering drawings, design calculations, prototype firmware/software, test data, and other unreleased technical material |

You may create `tanuk-development` now or when you begin organizing engineering files. To create it, select **GitHub > + > New repository**, name it `tanuk-development`, choose **Private**, and create it. Do **not** enable GitHub Pages there. Only invite collaborators who genuinely need access.

**Before every website push:** review the changed-file list in GitHub Desktop. Do not upload employer-owned material, passwords, API keys, private keys, personal documents, or detailed work you do not intend to publish. Git history can retain deleted material, so removing a file later is not a reliable confidentiality strategy. Any image displayed on your public website can also be downloaded. Use technical drawing illustrations only as concepts until you explicitly approve real CAD exports for public release.

**Account security:** Use a unique password, enable authenticator-app 2FA, save recovery codes somewhere safe, and consider adding a passkey (e.g. Windows Hello). Use two-factor authentication on your domain registrar account as well. Keep domain auto-renew enabled and a valid recovery email on both accounts.

**Custom-domain security:** Buy and verify the domain in **account Settings > Pages** before connecting the live DNS. Set the domain in **repository Settings > Pages** before adding A/CNAME pointing to GitHub. Keep the TXT ownership record in place. Avoid `*` wildcard DNS records and stale DNS pointing at deleted GitHub Pages sites. Enforce HTTPS once available.

**If a secret is accidentally committed:** revoke/rotate it first, even if you delete the file afterward. Rewriting Git history is a separate cleanup step and may not erase copies people already obtained.

## Phase A: Prepare your Windows laptop

### 1. Download and extract the project

1. Download the `oboro-research-site.zip` provided in the ChatGPT response.
2. In File Explorer, open **Downloads**, right-click the ZIP and select **Extract All**.
3. Move the extracted `oboro-research-site` folder to somewhere permanent, for example `Documents\OboroResearch\oboro-research-site`.
4. Open the folder and check that **`index.html` is directly inside** it, next to `styles.css` and `script.js`. Do not create an extra nested folder that you mistake for the root.
5. Double-click `index.html` to open the website in your browser. Test the TANUK/Nixie carousel arrows and the top navigation.

The folder should contain:

```text
oboro-research-site/
├── index.html
├── styles.css
├── script.js
├── assets/
│   ├── oboro-research-logo.png
│   ├── tanuk-blueprint.svg
│   ├── nixie-blueprint.svg
│   └── favicon.svg
├── .nojekyll
├── .gitignore
├── README.md
└── PUBLISHING_GUIDE.md
```

### 2. Install or open Visual Studio Code

1. Visit https://code.visualstudio.com/ and install **Visual Studio Code for Windows**, if it is not installed.
2. Choose **File > Open Folder...** and select the **entire `oboro-research-site` folder**.
3. Click `index.html` to edit page text; `styles.css` to edit colors/layout; `script.js` for carousel behavior.
4. Save edits with `Ctrl+S`, then refresh the browser page (`Ctrl+R`).
5. Optional: use the VS Code **Live Server** extension for a convenient preview. Not needed for publishing.

You can also open the folder in Explorer and double-click `index.html` whenever you want to preview. Keep the entire `assets` directory alongside it.

### 3. Set up your GitHub account

1. Visit https://github.com/ and create a GitHub account, or sign into your existing one.
2. Verify the email address tied to the account.
3. Enable two-factor authentication on the account and save your recovery codes.
4. Note your exact GitHub **username**. It determines the temporary Pages URL and DNS `www` target.
5. Download **GitHub Desktop for Windows** at https://desktop.github.com/ and sign in to the same account.

GitHub Desktop provides a graphical way to commit and upload code; it avoids the need to learn Git command-line commands on day one.

## Phase B: Put the site on GitHub

### 4. Create a repository from the local website folder

1. Open GitHub Desktop.
2. Go to **File > Add Local Repository...** and select the folder you extracted.
3. If Desktop reports **“This directory does not appear to be a Git repository,”** choose **Create a Repository Here** and follow the prompts. Name it `oboro-research-site` and keep the files already in that folder.
4. If Desktop shows uncommitted files, type a summary such as `Initial Oboro Research website` and choose **Commit to main**.
5. Click **Publish repository**. For the repository name, use `oboro-research-site`.
6. **Uncheck “Keep this code private”** to publish it as a public repository (required by GitHub Pages on GitHub Free).
7. Click **Publish Repository**.
8. Open your GitHub account in a browser and verify that the new repository contains `index.html`, `styles.css`, `script.js`, and `assets/` at its root. Upload the **extracted files**, not just the ZIP archive.

Alternative: You can create a new public repository on github.com and upload the extracted files there with **Add file > Upload files**, but GitHub Desktop is more convenient for subsequent updates.

### 5. Turn on GitHub Pages

1. In your GitHub browser, open the `oboro-research-site` repository.
2. Select **Settings > Pages** (in the left sidebar under “Code and automation”).
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
4. Choose the **`main`** branch and **`/(root)`** folder, then click **Save**.
5. Wait for the Pages deployment and use the **Visit site** link in Settings > Pages. GitHub says publishing can take up to about 10 minutes after changes are pushed.
6. Check the temporary site address:

   `https://YOUR_USERNAME.github.io/oboro-research-site/`

If your username is `example-engineer`, the temporary site is `https://example-engineer.github.io/oboro-research-site/`. The site is accessible publicly at this point, **without buying a domain**.

If it fails, visit the repository's **Actions** tab to inspect the Pages build/deployment result. Confirm `index.html` is at the root and the selected branch is `main`.

## Phase C: Buy and attach the Oboro Research domain

### 6. Purchase a domain

1. Check the desired name at a registrar, such as [Porkbun](https://porkbun.com/), [Cloudflare Registrar](https://www.cloudflare.com/products/registrar/), or [Namecheap](https://www.namecheap.com/).
2. Search for `obororesearch.com` first, then consider alternatives if it is unavailable. **Availability is not guaranteed**.
3. Before checking out, compare **renewal pricing**, not just introductory pricing. Some names are premium-priced.
4. Buy the domain in your own account, enable automatic renewal, and use available registration privacy protections.
5. Find the registrar page called **DNS**, **DNS Records**, or **Manage DNS**. Keep this tab available for the next steps.

For the examples below, replace `example.com` with **the domain you actually purchased** and `YOUR_USERNAME` with your GitHub username. Never literally enter `example.com` unless you own it.

### 7. Verify the domain in GitHub (recommended security step)

1. On github.com, go to your **account settings** (avatar > Settings) and find **Pages** in the left sidebar (account-level Pages, not repository-level Pages).
2. Choose **Add a domain**, enter the purchased domain, then follow GitHub's instructions.
3. GitHub will show a special **TXT record name and value**; enter those **exact values** in the registrar DNS panel.
4. Return to GitHub and select **Verify** once DNS has propagated. Keep the TXT record in DNS.

GitHub recommends domain verification to reduce the risk of someone else claiming a domain with GitHub Pages. It is separate from the A/CNAME records that make the site load.

### 8. Add the custom domain to the repository's Pages settings

1. Open the **`oboro-research-site` repository > Settings > Pages**.
2. Under **Custom domain**, enter your domain without `https://`, such as `example.com`.
3. Click **Save**. For branch-based publishing, GitHub normally creates a `CNAME` file in the repo. **Do not manually add a `CNAME` file containing an unpurchased domain.**
4. Add your DNS records **after setting the custom domain in GitHub**, as GitHub recommends for security.

### 9. Configure DNS at the registrar

Enter the following **four A records** for your bare/apex domain (`example.com`):

| Type | Host/name | Value | TTL |
|---|---|---|---|
| A | `@` | `185.199.108.153` | Auto/default |
| A | `@` | `185.199.109.153` | Auto/default |
| A | `@` | `185.199.110.153` | Auto/default |
| A | `@` | `185.199.111.153` | Auto/default |

And enter **one CNAME record** so `www` also works:

| Type | Host/name | Value/target | TTL |
|---|---|---|---|
| CNAME | `www` | `YOUR_USERNAME.github.io` | Auto/default |

The `www` target is your GitHub Pages account hostname, **not** your repository path. Do **not** enter `https://`, `/oboro-research-site`, or your domain as the target for this CNAME. For a registrant using GitHub username `example-engineer`, use `example-engineer.github.io`.

Remove or correct any pre-existing *conflicting* apex `A` or `AAAA` records or `www` CNAME records belonging to parking or another host. **Do not delete unrelated email MX, SPF, DKIM, or other records.** You can add the four IPv6 `AAAA` records later, but GitHub's four IPv4 `A` records are sufficient for the straightforward setup above.

Avoid wildcard `*` DNS records pointing at GitHub Pages because GitHub warns of domain takeover risk. If your registrar offers a parking/redirect tool, be careful not to leave it competing with the same records.

### 10. Verify DNS, enable HTTPS, and test

1. DNS changes can take up to 24 hours to fully propagate, though they may appear sooner.
2. On Windows, open **PowerShell** and run (substitute your purchased domain):

   ```powershell
   Resolve-DnsName example.com -Type A
   Resolve-DnsName www.example.com -Type CNAME
   ```

3. The first result should point to the four GitHub Pages IPv4 addresses; the second should point to `YOUR_USERNAME.github.io`.
4. Return to **repository > Settings > Pages**. Wait for the custom domain DNS check and HTTPS certificate provisioning to finish.
5. Select **Enforce HTTPS** once the checkbox is available.
6. Test both `https://example.com` and `https://www.example.com` in a normal/incognito browser window. GitHub can redirect the alternate host to the configured primary host.
7. Test the mobile layout and navigation again from your phone.

**Security note:** Never put passwords, API keys, private designs, employer documents, or confidential materials in the repo. A public GitHub Pages site and its public repository are readable by anyone.

## Phase D: Updating the website later

### 11. Make a website change

1. Open the same folder in VS Code.
2. Edit the relevant file and save with `Ctrl+S`.
3. Preview locally in your browser.
4. Open GitHub Desktop and verify changed files under **Changes**.
5. Enter a commit message such as `Update TANUK development section` and click **Commit to main**.
6. Click **Push origin**. This sends the latest commit to GitHub and starts a Pages deployment.
7. Refresh your public website after the deployment completes. If you see an old version, use `Ctrl+Shift+R` to bypass browser cache.

### 12. Replace the concept sketches with CAD images later

1. Export clean rover/clock visuals from CAD as `PNG`, `WEBP`, or SVG (transparent background is ideal).
2. Copy the exported files into `assets/`, e.g. `assets/tanuk-render.png` or `assets/nixie-render.png`.
3. In `index.html`, find **both** references to `assets/tanuk-blueprint.svg` and replace them with the rover image filename. Do the same for `assets/nixie-blueprint.svg` (hero and project section).
4. Update the `alt` descriptions and remove the “CONCEPT” captions once they accurately reflect the real design.
5. Commit and push with GitHub Desktop.

Tip: If you use an SVG and want future precision editing, you can replace it with a CAD-exported SVG without changing any CSS.

### 13. Add your LinkedIn contact URL

The current footer intentionally says `PROFILE LINK TO BE ADDED`. In `index.html`, find:

```html
<p class="footer-link-placeholder" title="Add your LinkedIn profile URL before publishing">LINKEDIN <span aria-hidden="true">↗</span> <small>PROFILE LINK TO BE ADDED</small></p>
```

Replace that **entire line** with the following, substituting your real profile URL:

```html
<p><a class="footer-link-placeholder" href="https://www.linkedin.com/in/YOUR-REAL-HANDLE/" target="_blank" rel="noopener noreferrer">LINKEDIN <span aria-hidden="true">↗</span></a></p>
```

A profile-specific URL is more useful than linking everyone to the LinkedIn homepage.

## Troubleshooting quick reference

| Symptom | Check |
|---|---|
| `404` at GitHub Pages URL | Is Pages enabled on `main` / `(root)`? Does `index.html` exist at repo root? Is the repo public? |
| CSS or images missing | Did you upload the **entire** `assets/` folder plus `styles.css`? Do filenames match letter-for-letter? |
| Site doesn't update | Did you commit **and** click `Push origin`? Did the Pages deployment finish? Try `Ctrl+Shift+R`. |
| Custom domain not working | Confirm the exact four A records, `www` CNAME, and custom domain in repository Pages settings. |
| HTTPS checkbox disabled | Give DNS and certificate provisioning time; inspect conflicting DNS records and GitHub Pages warnings. |
| Carousel stops rotating | This is intentional when hovered/focused or when reduced-motion is enabled. Manual arrows still work. |

## Official resources (checked Nov. 7, 2026)

- [GitHub Pages overview](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages)
- [Create a GitHub Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)
- [Configure a publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
- [GitHub Desktop: add an existing project](https://docs.github.com/en/desktop/adding-and-cloning-repositories/adding-an-existing-project-to-github-using-github-desktop?platform=windows)
- [Manage a Pages custom domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
- [Verify a custom domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages)
- [Secure Pages with HTTPS](https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https)

**Launch checkpoint:** website looks right locally → repo exists on GitHub → Pages preview works → custom domain is purchased and verified → DNS is correct → HTTPS is enabled → LinkedIn/contact details and concept labels are reviewed.
