"use client";
import Image from "next/image";
import {
  FaCheckCircle,
  FaMapMarkerAlt,
  FaStar,
  FaCar,
  FaHome,
} from "react-icons/fa";

export default function AboutInvestment() {
  const features = [
    {
      icon: <FaCheckCircle className="text-color1 mr-2" />,
      text: "Niższe koszty - Prosta bryła oraz nowoczesna termoizolacja zapewnią Ci niższe opłaty za ogrzewanie.",
    },
    {
      icon: <FaMapMarkerAlt className="text-color1 mr-2" />,
      text: "Świetna lokalizacja - Ciesz się zieloną okolicą, szybkim dojazdem do Krakowa oraz sklepów, szkół i punktów usługowych w Skale.",
    },
    {
      icon: <FaStar className="text-color1 mr-2" />,
      text: "Podwyższony standard - Opis poszczególnych zalet poniżej.",
    },
  ];

  return (
    <section
      id="about-investment"
      className="w-full h-full flex flex-col items-center bg-color3 relative scroll-mt-20"
    >
      <div>
        <p className="text-3xl sm:text-4xl lg:text-6xl text-green4 pt-10 font-bold text-center break-words max-w-full text-color1">
          O INWESTYCJI
        </p>
      </div>

      <div className="flex flex-col px-6 w-full pt-4">
        <div className="flex flex-col lg:flex-row justify-between items-center pb-8">
          <div
            className="p-4 text-color1"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-5">
              Dlaczego warto wybrać nasze mieszkania?
            </h2>
            <p className="text-base sm:text-xl text-justify mb-4">
              Z myślą o Tobie i Twojej rodzinie zagospodarowaliśmy przestrzeń na
              rzecz 6 nowych mieszkań w Stokach.
            </p>
            <p className="text-base sm:text-xl text-justify mb-4">
              Cztery mieszkania mają około 60m², a dwa około 120m² powierzchni
              wewnętrznej. Każde z nich posiada ogród o powierzchni od 50 do
              70m².
            </p>
            {/* <ul className="list-disc list-inside text-base sm:text-lg ml-4 sm:ml-6 text-justify"> */}
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start text-base sm:text-lg"
                >
                  {feature.icon}
                  <span>{feature.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <Image
            src="/2.jpg"
            alt="Zdjęcie 2"
            width={950}
            height={600}
            className="shadow-lg mb-6 lg:mb-0 w-[600px] max-lg:w-[600px] xl:w-[600px]"
            data-aos="fade-left"
            data-aos-duration="1000"
          />
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center pb-8">
          <Image
            src="/mapa.png"
            alt="Mapa"
            width={950}
            height={600}
            className="shadow-lg mb-6 lg:mb-0 w-[600px] max-lg:w-[600px] xl:w-[600px]"
            data-aos="fade-right"
            data-aos-duration="1000"
          />

          <div
            className="p-4 text-color1 space-y-6"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-5">Lokalizacja</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-color1 mr-3 mt-1 text-3xl" />
                <p className="text-base sm:text-xl text-justify">
                  Odkryj swoje wymarzone miejsce w sercu malowniczej Małopolski!
                  Zapraszamy na nasze osiedle domów na sprzedaż, usytuowane w
                  urokliwej gminie Skała.
                </p>
              </div>
              <div className="flex items-center">
                <FaCar className="text-color1 mr-3 mt-1 text-3xl" />
                <p className="text-base sm:text-xl text-justify">
                  Mieszkańcy naszego osiedla będą korzystać z komfortowego
                  dojazdu do północnej obwodnicy Krakowa w zaledwie 19 minut.
                </p>
              </div>
              <div className="flex items-center">
                <FaHome className="text-color1 mr-3 mt-1 text-3xl" />
                <p className="text-base sm:text-xl text-justify">
                  Zapewniamy wyjątkowy komfort życia na naszym przytulnym
                  miniosiedlu, składającym się z 2 bliźniaków i 6 lokali.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <button
                className="bg-color1 text-color3 px-6 py-3 rounded-md hover:bg-color4 hover:text-color1 hover:scale-110 transition drop-shadow-md"
                onClick={() =>
                  window.open(
                    "https://maps.app.goo.gl/8FDTzhePAQp7DUb2A",
                    "_blank"
                  )
                }
              >
                Zobacz na mapie
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center pb-8">
          <div
            className="p-4 text-color1"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-5">
              Bezpieczeństwo
            </h2>
            <p className="text-base sm:text-xl text-justify">
              Osiedle Przy Winnicy jest terenem zamkniętym, dzięki czemu możesz
              czuć się naprawdę bezpiecznie.
            </p>
          </div>
          <Image
            src="/5.jpg"
            alt="Zdjęcie 5"
            width={950}
            height={600}
            className="shadow-lg mb-6 lg:mb-0 w-[600px] max-lg:w-[950px] xl:w-[950px]"
            data-aos="fade-left"
            data-aos-duration="1000"
          />
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center pb-8">
          <Image
            src="/3.jpg"
            alt="Zdjęcie 3"
            width={950}
            height={600}
            className="shadow-lg mb-6 lg:mb-0 w-[600px] max-lg:w-[950px] xl:w-[950px]"
            data-aos="fade-right"
            data-aos-duration="1000"
          />
          <div
            className="p-4 text-color1"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-5">
              Planowane oddanie inwestycji
            </h2>
            <p className="text-base sm:text-xl text-justify">
              Z przyjemnością informujemy, że oddanie inwestycji planujemy na
              III/IV kwartał 2024 roku.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
