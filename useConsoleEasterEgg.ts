import { useEffect } from "react"

export const useConsoleEasterEgg = () => {
  useEffect(() => {
    console.log(`
The Merge is complete.

πΌπΌπΌπΌπΌπΌπΌπΌπΌπΌπΌπΌπΌπΌ

Welcome to a greener Ethereum.

π³π³π³π³π³π³π³π³π³π³π³π³π³π³

Come help us build it: https://ethereum.org/en/contributing
    `)
  })
}
