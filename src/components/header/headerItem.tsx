'use client'
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"

interface HeaderProps{
    text: string
}
export function HeaderItemComponent({text}:HeaderProps) {
  const pathname = usePathname()
  const {replace} = useRouter()
  const redirect = text.toLowerCase() === "home" ? "/" : text.toLowerCase()
  const homeBgChange = text.toLowerCase() === "home" && pathname === "/"
  const BgChange = `/${text.toLowerCase()}` === pathname 
  console.log(redirect)
  return (
    <button onClick={ () => replace(`/${redirect}`)}  className={`text-[10px] w-[185px] h-[24px] font-wtGothic py-[6px] px-[10px] ${homeBgChange || BgChange ? "text-black bg-custom-white" : "text-custom-yellow bg-custom-black"}`}>{text}</button>
  )
}
