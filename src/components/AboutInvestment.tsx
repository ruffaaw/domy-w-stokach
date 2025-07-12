"use client";
import Image from "next/image";
import {
  FaCheckCircle,
  FaMapMarkerAlt,
  FaStar,
  FaCar,
  FaHome,
  FaTree,
  FaKey,
} from "react-icons/fa";

export default function AboutInvestment() {
  const features = [
    {
      icon: <FaCheckCircle className="text-color1 w-5 h-5" />,
      text: "Niższe koszty - Prosta bryła oraz nowoczesna termoizolacja zapewnią Ci niższe opłaty za ogrzewanie.",
    },
    {
      icon: <FaMapMarkerAlt className="text-color1 w-5 h-5" />,
      text: `Świetna lokalizacja - Ciesz się zieloną okolicą, szybkim dojazdem do Krakowa oraz sklepów, szkół i${"\u00A0"}punktów usługowych w${"\u00A0"}Skale.`,
    },
    {
      icon: <FaStar className="text-color1 w-5 h-5" />,
      text: "Podwyższony standard - Opis poszczególnych zalet poniżej.",
    },
    {
      icon: <FaKey className="text-color1 w-5 h-5" />,
      text: "Możliwość wprowadzenia się pod klucz - Oferujemy opcję wykończenia mieszkania gotowego do zamieszkania.",
    },
  ];

  return (
    <section
      id="about-investment"
      className="w-full h-full flex flex-col items-center relative scroll-mt-20 py-10"
    >
      <div>
        <p className="text-3xl sm:text-4xl lg:text-6xl text-green4 font-bold text-center break-words max-w-full text-color1 mb-8">
          O inwestycji
        </p>
      </div>

      <div className="flex flex-col px-6 w-full gap-8">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          <div
            className="text-color1"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-5">
              Dlaczego warto wybrać nasze mieszkania?
            </h2>
            <p className="text-base sm:text-xl text-justify mb-4 font-normal">
              Z&nbsp;myślą o&nbsp;Tobie i&nbsp;Twojej rodzinie
              zagospodarowaliśmy przestrzeń na rzecz 6&nbsp;nowych mieszkań
              w&nbsp;Stokach.
            </p>
            <p className="text-base sm:text-xl text-justify mb-4 font-normal">
              Sześć mieszkań zostało zaprojektowanych w trzech wariantach
              metrażowych: dwa mieszkania o powierzchni użytkowej 58,74 m², dwa
              o powierzchni 63,61 m² oraz dwa o powierzchni 115,34 m².
            </p>
            <ul className="space-y-4 gap-3">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center justify-start text-base sm:text-xl gap-3"
                >
                  <span className="flex justify-start">{feature.icon}</span>
                  <span className="flex justify-start font-normal">
                    {feature.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <Image
            src="/grafika-1.webp"
            alt="Zdjęcie 2"
            width={950}
            height={600}
            className="shadow-lg mb-6 lg:mb-0 w-[600px] max-lg:w-screen xl:w-[800px] object-cover"
            data-aos="fade-left"
            data-aos-duration="1000"
          />
        </div>

        <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-8">
          <Image
            src="/mapa.png"
            alt="Mapa"
            width={950}
            height={600}
            className="shadow-lg mb-6 lg:mb-0 w-[1500px] max-lg:w-[600px] xl:w-[1000px] object-cover"
            data-aos="fade-right"
            data-aos-duration="1000"
          />

          <div
            className="text-color1 space-y-6"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-5">Lokalizacja</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="flex justify-start">
                  <FaMapMarkerAlt className="text-color1 mt-1 text-3xl w-5 h-5" />
                </span>
                <p className="text-base sm:text-xl text-justify font-normal">
                  Odkryj swoje wymarzone miejsce w&nbsp;sercu malowniczej
                  Małopolski! Zapraszamy na nasze osiedle domów na sprzedaż,
                  usytuowane w&nbsp;urokliwej gminie Skała.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex justify-start">
                  <FaCar className="text-color1 text-3xl w-5 h-5" />
                </span>
                <p className="text-base sm:text-xl text-justify font-normal">
                  Mieszkańcy naszego osiedla będą korzystać z&nbsp;komfortowego
                  dojazdu do północnej obwodnicy Krakowa w&nbsp;zaledwie 19
                  minut.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex justify-start">
                  <FaHome className="text-color1 mt-1 text-3xl w-5 h-5" />
                </span>
                <p className="text-base sm:text-xl text-justify font-normal">
                  Zapewniamy wyjątkowy komfort życia na naszym przytulnym
                  miniosiedlu, składającym się z&nbsp;2&nbsp;bliźniaków
                  i&nbsp;6&nbsp;lokali.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex justify-start">
                  <FaTree className="text-color1 mt-1 text-3xl w-5 h-5" />
                </span>
                <p className="text-base sm:text-xl text-justify font-normal">
                  Inwestycja położona jest w&nbsp;otulinie Ojcowskiego Parku
                  Narodowego, co zapewnia bliskość natury i&nbsp;spokój na co
                  dzień.
                </p>
              </div>
            </div>
            <div className="flex justify-center lg:justify-start">
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

        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          <div
            className="text-color1"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-5">
              Bezpieczeństwo
            </h2>
            <p className="text-base sm:text-xl text-justify font-normal">
              Osiedle Przy Winnicy jest terenem zamkniętym, dzięki czemu możesz
              czuć się naprawdę bezpiecznie.
            </p>
          </div>
          <Image
            src="/grafika-3.webp"
            alt="Zdjęcie 5"
            width={950}
            height={600}
            className="shadow-lg mb-6 lg:mb-0 w-[600px] max-lg:w-screen xl:w-[800px] aspect-video object-cover"
            data-aos="fade-left"
            data-aos-duration="1000"
          />
        </div>

        <div className="flex flex-col-reverse lg:flex-row justify-between items-start lg:items-center gap-8">
          <Image
            src="/dron-stoki.webp"
            alt="Zdjęcie 3"
            width={950}
            height={600}
            className="shadow-lg mb-6 lg:mb-0 w-[600px] max-lg:w-screen xl:w-[800px] aspect-video object-cover"
            data-aos="fade-right"
            data-aos-duration="1000"
          />
          <div
            className="text-color1"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-5">
              Planowane oddanie inwestycji
            </h2>
            <p className="text-base sm:text-xl text-justify font-normal">
              Z przyjemnością informujemy, że oddanie inwestycji planujemy na
              III/IV kwartał 2024 roku.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
