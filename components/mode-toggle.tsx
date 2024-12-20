"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect } from "react"


export function ModeToggle() {
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() => {
    setTheme("light")
  },[])

  return (
    <div onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}>
      {resolvedTheme === "light" ? <Sun /> : <Moon /> }
    </div>
  )
}
