import { GridItem } from "@/types/home";

export const gridImageList = (progressY: number) : GridItem[] => {
    return [
        {
            width :"w-[400px]",
            heigth: "h-[351px]",
            subTitle: "VinFast",
            title: "Eletric Vehicle",
            imgClassname: "",
            src: "/images/home/home-image-1.png",
            animation: {
                initial: {
                    y: "-100%",
                },
                animate: {
                    y: progressY < 20 ? "100%"  : 0,
                    transition: {
                    type: 'linear',
                    duration: 1,
                    },
                },
            }
        },
        {
            width :"w-[400px]",
            heigth: "h-[462px]",
            subTitle: "STRM",
            title: "Plataforms",
            imgClassname: "",
            src: "/images/home/home-image-2.png",
            animation: {
                initial: {
                    y: "-100%",
                },
                animate: {
                    y: progressY < 30 ? "100%"  : 0,
                    transition: {
                    type: 'linear',
                    duration: 1,
                    },
                },
            }
        },
        {
            width :"w-[400px]",
            heigth: "h-[312px]",
            subTitle: "Zebra",
            title: "Fintech",
            imgClassname: "mt-[-111px]",
            src: "/images/home/home-image-3.png",
            animation: {
                initial: {
                    y: "-100%",
                },
                animate: {
                    y: progressY < 40 ? "100%"  : 0,
                    transition: {
                    type: 'linear',
                    duration: 1,
                    },
                },
            }
        },
        {
            width :"w-[400px]",
            heigth: "h-[312px]",
            subTitle: "Resolva Meu Look",
            title: "Research",
            imgClassname: "mt-[-111px]",
            src: "/images/home/home-image-4.png",
            animation: {
                initial: {
                    y: "-100%",
                },
                animate: {
                    y: progressY < 45 ? "100%"  : 0,
                    transition: {
                    type: 'linear',
                    duration: 1,
                    },
                },
            }
        },
        {
            width :"w-[400px]",
            heigth: "h-[505px]",
            subTitle: "Luxoft",
            title: "Design System",
            imgClassname: "",
            src: "/images/home/home-image-5.png",
            animation: {
                initial: {
                    y: "-100%",
                },
                animate: {
                    y: progressY < 55 ? "100%"  : 0,
                    transition: {
                    type: 'linear',
                    duration: 1,
                    },
                },
            }
        },
        {
            width :"w-[820px]",
            heigth: "h-[289px]",
            subTitle: "Mercedes Benz",
            title: "UI Concepts",
            imgClassname: "mt-[-303px]",
            src: "/images/home/home-image-6.png",
            animation: {
                initial: {
                    y: "-100%",
                },
                animate: {
                    y: progressY < 75 ? "100%"  : 0,
                    transition: {
                    type: 'linear',
                    duration: 1,
                    },
                },
            }
        },
    ]
}