import Link from "next/link";
import {
  FaHome,
  FaBuilding,
  FaMapMarkerAlt,
  FaHistory,
  FaTools,
  FaRecycle,
} from "react-icons/fa";

export default function AboutInvestor() {
  return (
    <section
      id="about-investor"
      className="w-full h-full relative scroll-mt-20 py-10"
    >
      <div className="text-center">
        <p className="text-3xl sm:text-4xl lg:text-6xl font-bold text-color1 mb-8">
          O nas – PM-BAU
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 lg:px-32 pb-12">
        <div
          className="flex flex-col items-center text-center p-6 bg-color4 bg-opacity-80 shadow-lg rounded-lg"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <FaHome size={60} className="text-color1 mb-6" />
          <h3 className="text-2xl font-bold text-color1 mb-4">
            Komfortowe warunki
          </h3>
          <p className="text-color1 text-base">
            Tworzymy nieruchomości, które zapewniają mieszkańcom maksymalny
            komfort życia w znakomitej lokalizacji.
          </p>
        </div>

        <div
          className="flex flex-col items-center text-center p-6 bg-color4 bg-opacity-80 shadow-lg rounded-lg"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          <FaBuilding size={60} className="text-color1 mb-6" />
          <h3 className="text-2xl font-bold text-color1 mb-4">Wysoka jakość</h3>
          <p className="text-color1 text-base">
            Korzystamy z wysokiej klasy materiałów i nowoczesnych technologii,
            aby tworzyć nowoczesne i funkcjonalne domy.
          </p>
        </div>

        <div
          className="flex flex-col items-center text-center p-6 bg-color4 bg-opacity-80  shadow-lg rounded-lg"
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="1000"
        >
          <FaMapMarkerAlt size={60} className="text-color1 mb-6" />
          <h3 className="text-2xl font-bold text-color1 mb-4">
            Doskonała lokalizacja
          </h3>
          <p className="text-color1 text-base">
            Nasze osiedle jest dobrze skomunikowane i położone blisko sklepów,
            szkół oraz terenów zielonych.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center text-center bg-color1 bg-opacity-80 text-color3 py-16 px-6 lg:px-32">
        <h2
          className="text-3xl sm:text-4xl font-bold mb-6"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Dlaczego warto nam zaufać?
        </h2>
        <p
          className="text-xl max-w-3xl mb-6"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          Jako firma PM-BAU stawiamy na jakość, terminowość oraz indywidualne
          podejście do każdego klienta. Nasze projekty to połączenie
          nowoczesnych technologii, funkcjonalności i piękna otaczającej
          przyrody. Dzięki doskonałej lokalizacji pod Krakowem, nasi klienci
          mogą cieszyć się zarówno spokojem natury, jak i bliskością miejskich
          udogodnień.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          <div
            className="flex flex-col items-center text-center p-6 bg-color4 bg-opacity-80 shadow-lg rounded-lg"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <FaHistory size={60} className="text-color1 mb-6" />
            <h3 className="text-2xl font-bold text-color1 mb-4">
              Wieloletnie doświadczenie
            </h3>
            <p className="text-color1 text-base">
              20 – letnie doświadczenie w branży budowlanej przekłada się na
              profesjonalnie wykonaną usługę. Służymy doradztwem technicznym
              oraz chętnie dzielimy się swoją wiedzą i doświadczeniem.
            </p>
          </div>

          <div
            className="flex flex-col items-center text-center p-6 bg-color4 bg-opacity-80 shadow-lg rounded-lg"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <FaTools size={60} className="text-color1 mb-6" />
            <h3 className="text-2xl font-bold text-color1 mb-4">
              Najwyższa jakość
            </h3>
            <p className="text-color1 text-base">
              Wieloletni pracownicy znający swój fach, terminowość oraz baza
              sprzętu budowlanego tj. elektronarzędzia, szalunki stropowe,
              rusztowania, transport tworzą fundament wysokiej jakości naszych
              usług.{" "}
            </p>
          </div>

          <div
            className="flex flex-col items-center text-center p-6 bg-color4 bg-opacity-80  shadow-lg rounded-lg"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
            <FaRecycle size={60} className="text-color1 mb-6" />
            <h3 className="text-2xl font-bold text-color1 mb-4">
              Ekologiczne podejście
            </h3>
            <p className="text-color1 text-base">
              Stosując rozwiązania nowoczesne, energooszczędne oszczędzamy i
              chronimy środowisko. Mamy więc ciepły, przyjazny dla środowiska
              dom i w dodatku co najważniejsze wysoki komfort użytkowania.{" "}
            </p>
          </div>
        </div>
        <Link
          href="https://pm-bau.pl/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 hover:opacity-85 transition mb-3"
        >
          <img
            src="/logo.png"
            alt="Logo PM BAU"
            className="h-28 w-auto drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)] hover:scale-110 transition-transform"
          />
        </Link>
        <p className="drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]">
          Kliknij, aby dowiedzieć się więcej o wykonawcy
        </p>
      </div>
    </section>
  );
}
