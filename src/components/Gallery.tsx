"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const galleryImages = ["/1.jpg", "/3.jpg", "/4.jpg", "/5.jpg"];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="w-full h-full flex flex-col items-center bg-color3 relative scroll-mt-10 "
    >
      <div
        className="w-full lg:w-9/12 pt-20"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="w-full"
        >
          {galleryImages.map((src, index) => (
            <SwiperSlide
              key={index}
              className="flex justify-center rounded-lg max-h-[480px]"
            >
              <Image
                src={src}
                alt={`Galeria ${index + 1}`}
                width={1200}
                height={500}
                className="rounded-lg shadow-lg object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
