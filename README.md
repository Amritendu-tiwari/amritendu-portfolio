# Amritendu Tiwari — Portfolio

Built with React + Vite + Tailwind CSS. AI chat powered by Groq (free tier).

## 🚀 Deploy to Vercel (Free)

### Step 1 — Get a free Groq API key
1. Go to [console.groq.com](https://console.groq.com/keys)
2. Sign up (free) and create an API key
3. Copy the key

### Step 2 — Push to GitHub
```bash
git init
git add .
git commit -m "initial commit"
git remote add origin https://github.com/amritendu-tiwari/portfolio.git
git push -u origin main
```

### Step 3 — Deploy on Vercel
1. Go to [vercel.com](https://vercel.com) → New Project
2. Import your GitHub repo
3. Add environment variable:
   - Name: `GROQ_API_KEY`
   - Value: your Groq API key from Step 1
4. Click **Deploy**

That's it — your portfolio will be live at `amritendu-tiwari.vercel.app` (or a custom domain).

---

## 🔧 Local Development

```bash
npm install
cp .env.example .env.local
# Add your GROQ_API_KEY to .env.local

npm run dev
```

For the AI chat to work locally, install Vercel CLI:
```bash
npm i -g vercel
vercel dev   # runs both Vite + API functions locally
```

---

## 📝 Customization

- **Content**: Edit `src/data/site.ts`
- **Resume link**: Update `resumeUrl` in `src/data/site.ts` with your Google Drive link
- **Project GitHub URLs**: Update `githubUrl` fields in the `projects` array
- **Images**: Replace files in `src/data/images.ts`

---

## 🏗️ Stack

- **Framework**: React 18 + Vite + TypeScript
- **Styling**: Tailwind CSS v3
- **Fonts**: Instrument Serif + Inter + JetBrains Mono
- **AI Chat**: Groq API (`llama-3.1-8b-instant`) via Vercel serverless function
- **Deploy**: Vercel (free tier)
