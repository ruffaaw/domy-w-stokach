"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const galleryImages = [
  "/grafika-1.webp",
  "/grafika-2.webp",
  "/grafika-3.webp",
  "/dron-stoki.webp",
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="w-full h-full flex flex-col items-center bg-color3 relative scroll-mt-20 py-10"
    >
      <div>
        <p className="text-3xl sm:text-4xl lg:text-6xl font-bold text-center break-words max-w-full text-color1">
          Galeria
        </p>
      </div>
      <div
        className="w-full lg:w-4/6 mt-10"
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
            delay: 10000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="w-full"
        >
          {galleryImages.map((src, index) => (
            <SwiperSlide key={index} className="flex justify-center rounded-lg">
              <Image
                src={src}
                alt={`Galeria ${index + 1}`}
                width={1200}
                height={500}
                className="rounded-lg shadow-lg object-cover w-full h-auto"
                unoptimized
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
