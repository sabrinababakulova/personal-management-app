# AGENTS.md — Personal Management App

This file is the onboarding + operating manual for coding agents working in this repository.

## 1) Project identity

- **Repo name:** `personal-management-app`
- **Package name:** `personal-app`
- **Type:** Next.js monorepo-style single app (not an actual monorepo)
- **Language:** TypeScript + React
- **UI:** Chakra UI
- **Auth:** NextAuth (GitHub provider)
- **Data:** MongoDB via Mongoose
- **i18n:** next-i18next (`en`, `fr`, `ru`)

## 2) Runtime stack and versions

From `package.json`:

- `next`: `12.1.4`
- `react` / `react-dom`: `18.0.0`
- `typescript`: `^4.8.4`
- `next-auth`: `^4.3.1`
- `mongoose`: `^6.6.5`
- `next-i18next`: `^11.3.0`
- `@chakra-ui/react`: `^2.3.6`
- `swr`: `^1.3.0`
- `axios`: `^1.1.3`

Important note: this is an older Next 12 codebase with React 18 and Pages Router.

## 3) Scripts

- `yarn dev` / `npm run dev` — start dev server
- `yarn build` / `npm run build` — production build
- `yarn start` / `npm run start` — run production server
- `yarn lint` / `npm run lint` — lint via Next ESLint

## 4) Repository layout

Top-level:

- `src/pages` — routes (Pages Router)
- `src/pages/api` — API routes
- `src/components` — shared UI components
- `src/models` — Mongoose models
- `src/utils` — utility modules (DB connection)
- `src/assets` — static-imported images/icons
- `public` — static assets + locale JSON files
- `next.config.js` — Next config + SVG loader + i18n wiring
- `next-i18next.config.js` — locales definition

Key files:

- `src/pages/index.tsx` — public landing page + portfolio
- `src/pages/Blog/index.tsx` — blog list fetched from `/api/post/show`
- `src/pages/Personal/index.tsx` — gated personal area
- `src/pages/api/auth/[...nextauth].ts` — NextAuth config
- `src/pages/api/post/create.ts` — create post endpoint
- `src/pages/api/post/show.ts` — list posts endpoint
- `src/utils/DbConnect.ts` — Mongo connection helper
- `src/models/post.ts` — post schema/model

## 5) Current route map

Public routes:

- `/` — home/portfolio
- `/Blog` — blog listing
- `/posts/[id]` — placeholder (currently not implemented)

Personal routes:

- `/Personal` — auth gate page
- `/Personal/Emails` — placeholder
- `/Personal/University` — UI scaffold + auth required SSR
- `/Personal/Finances` — UI scaffold + auth required SSR

API routes:

- `/api/hello` — default template endpoint
- `/api/auth/[...nextauth]` — auth handlers
- `/api/post/create` — inserts post into Mongo
- `/api/post/show` — reads posts from Mongo

## 6) Authentication behavior

NextAuth is configured with GitHub provider only.

Required env vars for auth:

- `GITHUB_CLIENT_ID`
- `GITHUB_CLIENT_SECRET`
- `NEXTAUTH_SECRET`
- `JWT_SECRET`

Custom sign-in allowlist check in callback:

- `NECESARYEMAIL`
- `NECESARYNAME`
- `NECESARYLOGIN`

Only users matching all three values are allowed to sign in.

Known detail:

- `session.maxAge` comment says “30 days” but value is `2 * 24 * 60 * 60` (2 days). Comment is stale.

## 7) Database behavior

Connection:

- `src/utils/DbConnect.ts` uses `mongoose.connect(process.env.MONGO_URI!)`

Required env var:

- `MONGO_URI`

Model:

- `Post` schema fields:
  - `title: String`
  - `body: String` (required)
  - `date: Date` (required, defaults `Date.now`)

API behavior:

- `create.ts` does `Post.create(req.body)` and returns `{ test }`.
- `show.ts` reads all posts and returns `{ posts }`.

Known issues:

- No HTTP method guards (POST/GET not enforced).
- No schema-level validation for `title`.
- Returns raw errors to client (`res.json({ error })`).
- `show.ts` uses callback + `.clone()` pattern that should be simplified.

## 8) Internationalization

Configured locales:

- `en` (default)
- `fr`
- `ru`

Translation files:

- `public/locales/en/common.json`
- `public/locales/fr/common.json`
- `public/locales/ru/common.json`

Pages using `serverSideTranslations`:

- Home (`/`)
- Blog (`/Blog`)
- Personal (`/Personal`)

## 9) UI/component notes

- Global wrapper in `_app.tsx`:
  - `SessionProvider`
  - `ChakraProvider`
  - `Layout`
- `Layout` shows `SideMenu` only when user is signed in and path begins with `/Personal`.
- `Menu` has desktop + mobile drawer navigation.
- `GridInfo` renders static project portfolio cards.
- `InfoBlock` currently does not render post body/date (placeholder text says “Not working yet”).
- `ModalAdding` is a UI-only form; not wired to persistence.

## 10) Static assets and branding

- Personal name and links are Sabrina-specific in copy, metadata, and social links.
- Home page and menu title are hard-coded around Sabrina’s portfolio site.
- Some wording in UI strings is informal and should be reviewed for production tone.

## 11) Environment variable checklist

Create `.env.local` with at least:

```bash
MONGO_URI=
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=
NEXTAUTH_SECRET=
JWT_SECRET=
NECESARYEMAIL=
NECESARYNAME=
NECESARYLOGIN=
```

Optional but recommended for NextAuth in production:

```bash
NEXTAUTH_URL=https://your-domain.example
```

## 12) Local development flow

1. Install deps: `yarn` (or `npm install`)
2. Add `.env.local`
3. Start app: `yarn dev`
4. Open `http://localhost:3000`
5. Validate:
   - Home renders
   - Blog fetches `/api/post/show`
   - Auth flow starts on Personal routes

## 13) Deployment notes

- `CNAME` exists at root (custom-domain usage expected for static hosting setup history).
- App appears intended for Vercel-style deployment.
- Personal routes currently redirect to callback URL `https://sabrinastuff.vercel.app/` in SSR guards (hard-coded).
  - Update this if domain/environment changes.

## 14) Known technical debt / risk list

1. Old framework versions (Next 12 ecosystem).
2. Hard-coded production callback domain in SSR auth guards.
3. Missing API method checks + weak input validation.
4. Error handling leaks implementation details.
5. `react-router-dom` dependency present but not used in Next Pages routing.
6. `mongoose-sequence` wiring exists in util but not used in schema.
7. Placeholder pages/components (`Emails`, `posts/[id]`, partial `InfoBlock`).
8. README is default Next template (does not describe real app).

## 15) Agent operating rules for this repo

When making changes:

- Preserve Pages Router conventions (`src/pages/**`).
- Keep i18n coverage in sync for `en`, `fr`, `ru` when touching user-facing copy.
- Do not commit secrets (`.env*` should remain untracked).
- Prefer small, reviewable commits.
- Run `yarn lint` and at least `yarn build` after non-trivial changes.
- If touching auth/db code, explicitly test unauthenticated and authenticated paths.

## 16) Recommended immediate cleanup plan (if asked)

Priority 1:

- Add API method guards + input validation for post endpoints.
- Fix hard-coded callback domain usage.
- Improve `InfoBlock` to display post content/date.

Priority 2:

- Replace placeholder pages with meaningful content or mark as TODO routes.
- Remove unused dependencies (`react-router-dom`, possibly mongoose-sequence types).

Priority 3:

- Refresh README to match actual architecture and setup.
- Consider upgrade path from Next 12 to a supported modern version.

---

If you are a coding agent: treat this file as the source of truth for project orientation, but always verify against current code before refactors.
