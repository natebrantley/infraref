# InfraRef — Oregon & Washington Infrastructure Reference

Technical reference app for infrastructure consulting in OR/WA: highway, bridges, transit, aviation, power, water, environmental, funding, megaprojects, and firm directory.

## Unpacked structure (Cursor / Vite + React)

- **`src/data/`** — `modules.js`, `content.js`, `directory.js`, `calendar.js`, `projectDetails.js`, `aiPrompt.js`
- **`src/components/`** — `TagBadge`, `ReferenceItem`, `ContactCard`, `SolicitationRow`, `DirectoryView`, `CalendarView`, `ProjectDetailView`, `AIPanel`
- **`src/App.jsx`** — main InfraRef layout (nav + content + AI panel)
- **`src/main.jsx`** — entry; **`index.html`** — root
- **`src/index.css`** — fonts and global styles

## Commands

```bash
npm install
npm run dev     # dev server (e.g. http://localhost:5173)
npm run build   # production build → dist/
npm run preview # preview production build
```

## AI assistant (optional)

The AI panel calls the Anthropic API. To enable it, set your API key in a `.env` file at the project root:

```
VITE_ANTHROPIC_API_KEY=your_key_here
```

Then run `npm run dev` (or rebuild). Without the key, requests will fail with an auth error.

## Original single file

The original single-file app is preserved as **`infraref.jsx`** in the project root. The unpacked app in `src/` is the same behavior built with Vite.
