import {AnimetedTitleComponent} from '@/components/animetedTitle'
import ContentComponent from '@/components/home/content'
import IntroComponent from '@/components/home/intro'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen h-full gap-y-[56px] bg-custom-black flex-col items-center justify-between">
      <IntroComponent/>
      <ContentComponent />
    </main>
  )
}
