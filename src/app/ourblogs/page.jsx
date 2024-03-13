// import styles from './homepage.module.css'
// import Slider from '@/components/slider/Slider'
// import ImageSlider from '@/components/imageSlider/ImageSlider'
// import Info from '@/components/info/Info'
// import Box from '@/components/box/Box'
// import ClientSlider from '@/components/clientSlider/ClientSlider'
// import WhyChooseUs from '@/components/whyChooseUs/WhyChooseUs'
// import OurServices from '@/components/services/OurServices'
import styles from './ourblogs.module.css'
import Featured from "@/components/featured/Featured";
import CategoryList from "@/components/categoryList/CategoryList";
import CardList from "@/components/cardList/CardList";
import Menu from "@/components/Menu/Menu";

function page({ searchParams }) {
  const page = parseInt(searchParams.page) || 1;

  // const images = [
  //   {
  //     src: "/slide1.png",
  //     alt: "Slide 1",
  //     title: "Software Development",
  //     description: "Looking For a Website? The easiest way to get your Business online. Drag, drop, done.",
  //   },
  //   {
  //     src: "/slide2.jpg",
  //     alt: "Slide 1",
  //     title: "Software Development",
  //     description: "Looking For a Website? The easiest way to get your Business online. Drag, drop, done.",
  //   },
  //   {
  //     src: "/slide1.png",
  //     alt: "Slide 1",
  //     title: "Software Development",
  //     description: "Looking For a Website? The easiest way to get your Business online. Drag, drop, done.",
  //   },
  //   {
  //     src: "/slide1.png",
  //     alt: "Slide 1",
  //     title: "Software Development",
  //     description: "Looking For a Website? The easiest way to get your Business online. Drag, drop, done.",
  //   },
    
  // ];

 return(
    // <div className={styles.container}>
    //   <Slider  images={images}/>
    //   <ImageSlider/>
    //   <Info />
    //   <Box />
    //   <ClientSlider />
    //   <WhyChooseUs />
    //   <OurServices />
    // </div>
    <div className={styles.container}>
      <Featured />
      <CategoryList />
      <div className={styles.content}>
        <CardList page={page}/>
        <Menu />
      </div>
    </div>
 )
}  
    
export default page
