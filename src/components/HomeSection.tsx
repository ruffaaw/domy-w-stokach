import Link from "next/link";

export default function HomeSection() {
  return (
    <section id="home" className=" pt-20 h-screen w-full ">
      <div
        className="bg-backgroud bg-cover bg-center h-full w-full flex flex-col justify-center items-center relative z-20"
        data-aos="fade-in"
        data-aos-duration="2000"
      >
        <p
          className="text-3xl md:text-5xl text-color3 font-bold mb-6 text-center "
          data-aos="fade-up"
          data-aos-delay="500"
          data-aos-duration="1000"
        >
          Twoje wymarzone miejsce
        </p>
        <p
          className="text-3xl md:text-5xl text-color3 font-bold text-center "
          data-aos="fade-up"
          data-aos-delay="700"
          data-aos-duration="1000"
        >
          Domy przy Winnicy w Stokach
        </p>
        <div className="flex max-md:flex-col max-md:space-y-5 max-md:w-full max-md:items-center md:space-x-10 mt-8">
          <Link
            className="py-3 w-56 max-md:w-3/5 bg-color1 text-color3 rounded-2xl hover:bg-color5 hover:text-white transition break-words max-w-full text-center"
            href="#houses"
            data-aos="zoom-in"
            data-aos-delay="900"
            data-aos-duration="1000"
          >
            Zobacz ofertę
          </Link>
          <Link
            className="py-3 w-56 max-md:w-3/5 bg-color1 text-color3 rounded-2xl hover:bg-color5 hover:text-white transition break-words max-w-full text-center"
            href="#contact"
            data-aos="zoom-in"
            data-aos-delay="1100"
            data-aos-duration="1000"
          >
            Skontaktuj się
          </Link>
        </div>
      </div>
    </section>
  );
}
