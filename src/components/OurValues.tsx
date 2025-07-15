import Image from "next/image";
import { benefits } from "@/data/profitsData";

export default function OurValues() {
  return (
    <section
      id="our-values"
      className="w-full h-full flex flex-col items-center relative scroll-mt-20 max-lg:py-10 lg:pt-10"
    >
      <div>
        <p className="text-3xl sm:text-4xl lg:text-6xl font-bold text-center break-words max-w-full text-color1 mb-8">
          Nasze wartości
        </p>
      </div>

      <div className="relative w-full">
        <div className="hidden lg:block relative w-full h-[950px] xl:h-[800px]">
          <Image
            src="/grafika-2.webp"
            alt="Zdjęcie 1"
            className="object-cover opacity-60"
            fill
            data-aos="zoom-out"
            data-aos-duration="1000"
          />
          <div className="absolute inset-0 grid grid-cols-3 gap-6 p-10">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 bg-color4 bg-opacity-80 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={benefit.delay}
              >
                <p className="w-14 h-14 mb-4">{benefit.icon}</p>
                <h3 className="text-2xl xl:text-3xl font-bold text-color1 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-lg xl:text-xl text-color1">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-6 px-6 ">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-color4 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={benefit.delay}
            >
              <p className="w-14 h-14 mb-4">{benefit.icon}</p>
              <h3 className="text-xl sm:text-2xl font-bold text-color1 mb-3">
                {benefit.title}
              </h3>
              <p className="text-base sm:text-lg text-color1">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
