Setting up www.nemtranhoang.com as a GitHub Pages site

1. Repository setup
   - This repository is the site source. GitHub Pages will serve content from the `main` branch.

2. Custom domain file
   - The `CNAME` file at the repository root contains the custom domain `www.nemtranhoang.com`.

3. DNS configuration (set at your DNS provider)
   - Create a CNAME record for `www` that points to `<your-github-username>.github.io` (for this account: `namtran1812.github.io`).
   - If you want the apex/root domain (nemtranhoang.com) to work, add A records pointing to GitHub Pages IPs:
       185.199.108.153
       185.199.109.153
       185.199.110.153
       185.199.111.153

4. Enforce HTTPS
   - Once DNS has propagated and GitHub has provisioned a certificate, enable "Enforce HTTPS" in the repository's Pages settings.

5. Notes
   - It can take up to 24–48 hours for DNS + certificate provisioning.
   - If GitHub Pages still shows an error after DNS is correct, try removing and re-adding the `CNAME` in the GitHub Pages settings to force certificate issuance.
