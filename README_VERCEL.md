Deploying this site to Vercel

Steps (UI)
1. Create a Vercel account at https://vercel.com/signup (use GitHub for easiest linking).
2. Import the repository `namtran1812/nemwebsite` as a new project.
   - If asked for framework, choose "Other" or "Static".
   - Leave build command empty and output directory blank.
3. Deploy the project.
4. Add the domain `www.nemtranhoang.com` in Project Settings → Domains.
5. Follow Vercel's DNS instructions (add A record for apex to 76.76.21.21 and CNAME for www to cname.vercel-dns.com) at your registrar.

Steps (CLI)
1. Install Vercel CLI: `npm i -g vercel`.
2. Login: `vercel login`.
3. From the project root: `vercel --prod` and follow prompts.
4. Add domain: `vercel domains add www.nemtranhoang.com` and add DNS records as shown.

Notes
- I removed the `CNAME` file from this repo so GitHub Pages will no longer claim the custom domain.
- You must register `nemtranhoang.com` at a registrar if you haven't already.
