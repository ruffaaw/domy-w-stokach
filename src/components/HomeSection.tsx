import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function HomeSection() {
  return (
    <section id="home" className=" pt-20 h-screen w-full ">
      <div
        className="bg-backgroud bg-cover bg-center h-full w-full flex flex-col justify-start md:justify-center items-center text-center relative z-20 px-4"
        data-aos="fade-in"
        data-aos-duration="2000"
      >
        <div className="absolute top-5 right-5 flex flex-col space-y-7">
          <a
            href="https://www.facebook.com/pmbau.krakow"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="text-4xl md:text-6xl drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)] hover:scale-125" />
          </a>
          <a
            href="https://www.instagram.com/pm.bau_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-4xl md:text-6xl drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)] hover:scale-125" />
          </a>
        </div>
        <h1
          className="text-2xl md:text-6xl font-extrabold text-color3 drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)] leading-tight max-md:mt-36"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="1200"
        >
          Twoje wymarzone miejsce
          <br />
          Osiedle o&nbsp;podwyższonym standardzie
        </h1>

        <div
          className="mt-6 flex flex-col items-center"
          data-aos="fade-up"
          data-aos-delay="600"
          data-aos-duration="1000"
        >
          <h2 className="text-xl md:text-2xl text-color3 font-bold drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]">
            realizowane przez firmę PM BAU
          </h2>
          <Link
            href="https://pm-bau.pl/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 hover:opacity-85 transition"
          >
            <img
              src="/logo_pmbau.png"
              alt="Logo PM BAU"
              className="h-14 md:h-28 w-auto drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)] hover:scale-110 transition-transform"
            />
          </Link>
        </div>

        <div className="flex max-md:flex-col max-md:space-y-5 max-md:w-full max-md:items-center md:space-x-10 mt-8">
          <Link
            className="py-3 w-56 max-md:w-3/5 bg-color1 text-color3 rounded-2xl hover:bg-color4 hover:text-color1 transition break-words max-w-full text-center drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]"
            href="#about-investment"
            data-aos="zoom-in"
            data-aos-delay="900"
            data-aos-duration="1000"
          >
            Zobacz ofertę
          </Link>
          <Link
            className="py-3 w-56 max-md:w-3/5 bg-color1 text-color3 rounded-2xl hover:bg-color4 hover:text-color1 transition break-words max-w-full text-center drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]"
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
