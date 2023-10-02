import AnimatedVerticalComponent from '@/components/animatedVertical'
import {AnimetedTitleComponent} from '@/components/animetedTitle'
import ContentComponent from '@/components/home/content'
import ItemGridComponent from '@/components/home/content/itemGrid'
import IntroComponent from '@/components/home/intro'
import ScrollProgressComponent from '@/components/scroolProgress'
import { ImageComponent } from '@/components/util/image'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen h-full gap-y-[56px] bg-custom-black flex-col items-center justify-between pl-[117px]">
      <ScrollProgressComponent>
        <IntroComponent/>
        <ContentComponent />   
      </ScrollProgressComponent>
    </main>
  )
}
