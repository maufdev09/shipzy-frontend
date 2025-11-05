# Shipzy Frontend

Project overview
- Shipzy is a React + TypeScript single-page app bootstrapped with Vite. It provides UIs for Admin, Sender, and Receiver roles (dashboards, parcel creation/management, tracking, and charts).

Setup instructions

1. Clone the repo and install dependencies:
   ```sh
   git clone <repo-url>
   cd shipzy-frontend
   npm install

2. Create environment variables:
Copy .env.example or create .env at project root and set API URL and other secrets. See src/config/index.ts for usage.


3. Run the dev server:
npm run dev

4.Build and preview:

npm run build

5. Deploy:
This repo includes a Vercel config: vercel.json. You can deploy by connecting the repository to Vercel and ensuring the environment variables are set in the Vercel dashboard. The rewrite in vercel.json serves index.html for client-side routing.
Technology stack

Framework: React (see src/main.tsx)
Language: TypeScript
Bundler / Dev: Vite (see vite.config.ts)
Styling: Tailwind CSS (imported in src/index.css)
State & API: Redux Toolkit Query with a shared base api (src/redux/baseApi.ts)
Charts: Recharts (used in several admin components)
UI primitives: Radix + custom components under src/components/ui
Icons: lucide-react
Routing: React Router (app router defined in src/routes/index.tsx)
Live URL (if deployed)

Not available from workspace files. If deployed via Vercel, check your Vercel project dashboard. The repo includes deployment config at vercel.json.
Other relevant notes

API base URL is read from env and surfaced in src/config/index.ts via config.
Routes are generated from sidebar data using generateRoutes. The app router is exposed as router.
Theme handling uses the ThemeProvider used in src/main.tsx.
RTK Query base API is baseApi — endpoint modules inject onto this.
Ensure environment variables in .env match what the backend expects (see src/config/index.ts).
If you use Vercel, verify the rewrite in vercel.json is desired for SPA routing.

