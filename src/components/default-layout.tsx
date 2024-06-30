import { Outlet } from "react-router-dom"

// You can export `Component`, `loader`, etc.
// @see https://reactrouter.com/en/main/route/lazy
export function Component() {
  return (
    <div className="flex">
      <div className="h-dvh w-64 shrink-0 border-r">
        <header data-tauri-drag-region className="h-10"></header>
      </div>
      <div className="h-dvh grow">
        <Outlet />
      </div>
    </div>
  )
}
