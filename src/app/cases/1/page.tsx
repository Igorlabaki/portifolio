import { ImageComponent } from "@/components/util/image";


export default function Case1Page() {
  return (
    <div className="relative">
        <ImageComponent alt="car" w="w-[1440px]" h="h-[620px]" src={"/images/cases/car-banner.png"}/>
        <div className="absolute top-[225px] text-custom-white left-[80px] text-[250px] font-[700]">
            <p>VF7</p>
            <p>VINFAST</p>
        </div>
        <div className="mt-[190px] ml-[80px] flex flex-col gap-y-[40px] text-[12px]">
            <div className="flex gap-x-[20px]">
                <ImageComponent alt="car" w="w-[610px]" h="h-[410px]" src={"/images/cases/steering.png"}/>
                <div className="w-[613px] flex flex-col justify-between items-start">
                    <span>
                        <div className="text-custom-yellow w-full flex justify-between items-center">
                            <p>2022</p>
                            <p>UX/ UI Design</p>
                        </div>
                        <hr className="text-custom-white mt-[9px]"/>
                        <div className="text-custom-yellow flex flex-col gap-y-[16px] text-justify">
                            <p className="mt-[21px] font-[600]">Development of Features for the New Model Car VF7 by Vietnamese Brand Vinfast</p>
                            <p>For several months, we have been deeply engaged in the conception and development of features for the latest car model by Vinfast, the VF7. This endeavor required meticulous market research regarding emerging trends in the electric vehicle industry.</p>
                        </div>
                    </span>
                    <div className="text-custom-gray-ligth flex gap-x-[8px]">
                        <p>User Experience</p>
                        <div className="h-[12.6px] w-[2px] bg-custom-gray"/>
                        <p>Research</p>
                        <div className="h-[12.6px] w-[2px] bg-custom-gray "/>
                        <p>Design Thinking</p>
                        <div className="h-[12.6px] bg-custom-gray w-[2px] "/>
                        <p>UI Design</p>
                    </div>
                </div>
            </div>
            <div className="flex gap-x-[16px] text-[12px] mb-[90px]">
                <div className="text-custom-yellow w-[452px] text-justify h-[584.07px] flex flex-col justify-between ">
                    <div className="flex flex-col gap-y-[16px]">
                        <p>My contribution in this project was centered around creating wireframes, with the primary goal of enhancing usability to provide an exceptional driving experience for motorists. I worked closely with our stakeholders, incorporating valuable feedback and facilitating co-creations that enriched the final outcome. My involvement spanned the entire project lifecycle, culminating in the creation of user interfaces (UI Design).</p>
                        <p>My involvement the entire project lifecycle, culminating in the creation of user interface (UI DESGIN).</p>
                    </div>
                    <div>
                        <ImageComponent alt="car" w="w-[61px]" h="h-[48.61px]" src={"/images/cases/rectangle.png"}/>
                        <ImageComponent alt="car" w="w-[452px]" h="h-[2px]" src={"/images/cases/line-horizontal.png"} containerClassname="mt-[40px]"/>
                        <p className="mt-[12px] text-custom-white">Our outcome boasts a minimalist, innovative design with features centered around excellent usability and sustainability, designed to appeal to prospective electric vehicle users.</p>
                    </div>
                </div>
                <ImageComponent alt="car" w="w-[770px]" h="h-[584.07px]" src={"/images/cases/panel.png"}/>
            </div>
        </div>
    </div>
  )
}
