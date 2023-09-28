'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

interface HeaderProps{
    text: string
}
export function HeaderItemComponent({text}:HeaderProps) {
  const pathname = usePathname()
  const url = text === "HIRE ME" ? "HIREME" : text
  const redirect = url.toLowerCase() === "home" ? "/" : url.toLowerCase()
  const homeBgChange = url.toLowerCase() === "home" && pathname === "/"
  const BgChange = `/${url.toLowerCase()}` === pathname 

  return (
    <Link href={redirect}  className={`text-[10px] w-[185px] h-[24px] font-wtGothic py-[6px] px-[10px] ${homeBgChange || BgChange ? "text-black bg-custom-yellow" : "text-custom-yellow bg-custom-black"}`}>{text}</Link>
  )
}
