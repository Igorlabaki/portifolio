'use client'
import { usePathname } from "next/navigation"

interface HeaderProps{
    text: string
}
export function HeaderItemComponent({text}:HeaderProps) {
  const pathname = usePathname()
  return (
    <div className="bg-black w-[185px] h-[24px]">
      <p className={`text-[10px] font-wtGothic py-[6px] px-[10px] ${text.toLocaleLowerCase().includes(pathname) || text === "HOME" && pathname === "/" ? "bg-[#E6E2CE] text-black" : "text-[#FFD289]" }`}>{text}</p>
    </div>
  )
}
