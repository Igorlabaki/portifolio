"use client"
import { HeaderItemComponent } from "./headerItem";

export  function HeaderComponent() {
  return (
    <header className="flex justify-between items-center bg-custom-black h-[24px] overflow-hidden">
        <HeaderItemComponent text="HOME"/>
        <HeaderItemComponent text="SERVICES"/>
        <HeaderItemComponent text="PROCESS"/>
        <HeaderItemComponent text="ABOUT"/>
    </header>
  )
}
