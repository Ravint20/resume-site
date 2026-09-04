# Resume Site

A React + TypeScript + Vite resume site.

## 1. Edit your content

Everything you need to change lives in **`src/data.ts`** — name, contact
links, experience, skills, education. Nothing else needs touching for a
content update.

## 2. Run it locally (optional)

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## 3. Push to GitHub

First, create an empty repo named `resume-site` at
**https://github.com/new** under your account (**Ravint20**) — don't
initialize it with a README, since you already have one here.

Then, from inside this project folder:

```bash
git init
git add .
git commit -m "Initial resume site"
git remote add origin https://github.com/Ravint20/resume-site.git
git branch -M main
git push -u origin main
```

If it asks for a password, GitHub no longer accepts your account password
over HTTPS — use a [personal access token](https://github.com/settings/tokens)
instead (paste it in place of the password when prompted), or push over SSH
if you have an SSH key set up on your account.

Alternatively, if you have the `gh` CLI installed and authenticated:
```bash
gh repo create resume-site --public --source=. --push
```

## 4. Deploy on Cloudflare Pages

1. Go to the Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. Select your `resume-site` GitHub repo.
3. Build settings:
   - **Framework preset:** Vite
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Click **Save and Deploy**. Cloudflare will build and deploy automatically, and redeploy on every push to `main`.
5. Optional: add a custom domain under the Pages project's **Custom domains** tab.

That's it — no server, no config beyond the two fields above.
