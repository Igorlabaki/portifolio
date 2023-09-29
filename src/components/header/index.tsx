import { HeaderItemComponent } from "./headerItem";

export  function HeaderComponent() {
  return (
    <header className="flex justify-between items-center bg-custom-black">
        <HeaderItemComponent text="HOME"/>
        <HeaderItemComponent text="SERVICES"/>
        <HeaderItemComponent text="PROCESS"/>
        <HeaderItemComponent text="ABOUT"/>
    </header>
  )
}
