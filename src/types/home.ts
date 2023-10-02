export interface GridItem {
    width: string,
    heigth: string,
    subTitle: string,
    title: string,
    imgClassname: string,
    src: string,
    animation: {
      initial: {
        y: number | string,
      },
      animate: {
        y: number | string;
        transition: {
          type: string,
          duration: number,
        },
      },
    }
}