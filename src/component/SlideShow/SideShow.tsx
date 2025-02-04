import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Coffee1 from './coffee1.jpg'
import Coffee2 from './coffee2.jpg'
import Coffee3 from './coffee3.jpg'
import { ChevronLeft, ChevronRight} from "lucide-react";
import { Button } from "../ui/button";
const slides = [
  { id: 1, image:Coffee1,title:'Powerfull Energy',subTitle:'Energy'},
  { id: 2, image:Coffee2,title:'Freshly Roasted Coffe',subTitle:'Delicious Coffe'},
  { id: 3, image:Coffee3,title:'Good Taste',subTitle:'Delicious Coffe'},
];

const SideShow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [currentIndex]);

  return (
    <div className="relative overflow-hidden w-full mx-auto ">
      {/* Slides */}
      <div className="relative h-[35rem] max-md:h-[20rem] max-sm:h-[15rem] max-lg:h-[30rem]">
        {slides.map((slide, index) => (
          <motion.div
            key={slide.id}
            className="absolute w-full h-full top-0 left-0"
            style={{
              backgroundImage:`url(${slide.image})` ,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            initial={{ x: index === currentIndex ? 0 : "100%" }}
            animate={{ x: index === currentIndex ? 0 : index < currentIndex ? "-100%" : "100%" }}
            transition={{ duration: 0.6, ease: "easeIn" }}
          >
            <div className="h-full flex flex-col justify-center text-[#DE9044] pl-28 max-md:pl-14 w-[40rem]">
            <p className="text-[#DE9044]">
              {slide.subTitle}
            </p>
            <h1 className="text-white text-6xl  max-md:text-3xl">
              {slide.title}
            </h1>
            <Button variant={'ghost'}  className=" uppercase w-[10rem] mt-2 bg-white bg-opacity-15 rounded-full p-0">shop now</Button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Navigation */}
      <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-full px-4">
        <button
          className="text-white p-2 rounded-full"
          onClick={prevSlide}
        >
          <ChevronLeft />
        </button>
        <button
          className="text-white p-2 rounded-full"
          onClick={nextSlide}
        >
         <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default SideShow;
