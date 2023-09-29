'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

interface HeaderProps{
    text: string
}
export function HeaderItemComponent({text}:HeaderProps) {
  const pathname = usePathname()
  const redirect = text.toLowerCase() === "home" ? "/" : text.toLowerCase()
  const homeBgChange = text.toLowerCase() === "home" && pathname === "/"
  const BgChange = `/${text.toLowerCase()}` === pathname 

  return (
    <Link href={redirect}  className={`text-[10px] w-[185px] h-[24px] font-wtGothic py-[6px] px-[10px] ${homeBgChange || BgChange ? "text-black bg-custom-white" : "text-custom-yellow bg-custom-black"}`}>{text}</Link>
  )
}
