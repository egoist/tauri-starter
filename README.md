# Tauri Starter

## Features

- Vite + React + React Router
- TailwindCSS + [shadcn-ui](https://ui.shadcn.com/)
- Type-safe Tauri command with [tauri-specta](https://github.com/oscartbeaumont/tauri-specta)
- [React Query](https://tanstack.com/query/latest/docs/framework/react/overview) for data fetching
- Using DM Sans as the default font

## Usage

Clone this repo, replace `tauri-starter` in the project code with your project name, and you're good to go.

```bash
# Install dependencies
pnpm i

# Run dev server
pnpm --filter desktop dev

# Build for production
pnpm --filter desktop build
```

## Project Structure

### `desktop`

- `src/router.ts`: Define your routes here, every route and layout is lazy-loaded.

## Upgrade

Currently there's no automated way to upgrade the starter once you've cloned it. You can manually upgrade the code by looking at the commit history.
