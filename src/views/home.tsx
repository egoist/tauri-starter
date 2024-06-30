import { useState } from "react"
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import { commands } from "~/generated/tauri-commands"
import { productName } from "#tauri-config"

// You can export `Component`, `loader`, etc.
// @see https://reactrouter.com/en/main/route/lazy
export function Component() {
  const [message, setMessage] = useState("")

  return (
    <div className="flex h-full flex-col">
      <header className="h-10 shrink-0" data-tauri-drag-region></header>

      <div className="flex grow flex-col items-center justify-center gap-4">
        <h1 className="-mt-10 text-2xl font-bold">{productName}</h1>
        <form
          className="grid w-full max-w-sm gap-2"
          onSubmit={async (e) => {
            e.preventDefault()
            const data = new FormData(e.currentTarget)

            const result = await commands.greet(data.get("name") as string)
            setMessage(result)
          }}
        >
          <Input
            name="name"
            className="w-full"
            required
            placeholder="Your Name..."
          />
          <Button type="submit">Greet</Button>

          {message && <div>{message}</div>}
        </form>
      </div>
    </div>
  )
}
