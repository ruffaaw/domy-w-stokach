"use client";
import { useRef } from "react";
import { housesData } from "@/data/housesData";
import {
  FaDollarSign,
  FaHome,
  FaRegCheckCircle,
  FaRegCircle,
} from "react-icons/fa";
import { CiCircleAlert } from "react-icons/ci";
import { LuSprout } from "react-icons/lu";

const HousesSection = () => {
  const houseRefs = useRef<(HTMLDivElement | null)[]>([]);
  const listContainerRef = useRef<HTMLDivElement | null>(null);

  const handleHouseClick = (id: number) => {
    const houseRef = houseRefs.current[id];
    const listContainer = listContainerRef.current;

    if (houseRef && listContainer) {
      const houseRect = houseRef.getBoundingClientRect();
      const containerRect = listContainer.getBoundingClientRect();
      const scrollOffset =
        houseRect.top - containerRect.top + listContainer.scrollTop;

      if ("scrollBehavior" in document.documentElement.style) {
        listContainer.scrollTo({
          top: scrollOffset,
          behavior: "smooth",
        });
      } else {
        listContainer.scrollTop = scrollOffset;
      }
    }
  };

  const getStatusText = (status: number) => {
    switch (status) {
      case 0:
        return "Sprzedany";
      case 1:
        return "Dostępny";
      case 2:
        return "Zarezerwowany";
      default:
        return "Nieznany";
    }
  };

  const getStatusIcon = (status: number) => {
    switch (status) {
      case 0:
        return <FaRegCircle className="text-red-500 w-5 h-5 inline-block" />;
      case 1:
        return (
          <FaRegCheckCircle className="text-green-500 w-5 h-5 inline-block" />
        );
      default:
        return (
          <CiCircleAlert className="text-yellow-500 w-5 h-5 inline-block" />
        );
    }
  };

  const formatPrice = (price: number | string): string => {
    const priceStr = typeof price === "number" ? price.toString() : price;
    const cleanPrice = priceStr.replace(/\s/g, "");
    return cleanPrice.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };
  const formatUnit = (value: number | string): string => {
    const valueStr = typeof value === "number" ? value.toString() : value;
    const cleanValue = valueStr.replace(/\s/g, "");
    return cleanValue.replace(".", ",");
  };

  return (
    <section
      id="lokale"
      className="w-full flex flex-col items-center justify-center text-color1 py-10 px-6 scroll-mt-20"
    >
      <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-center text-color1">
        Lokale
      </h1>

      <div className="w-full mt-8 relative flex flex-col lg:flex-row justify-between gap-8">
        <div className="relative w-full lg:w-[65%]">
          <div className="relative pb-[75%]">
            <img
              src="/dron-stoki.webp"
              alt="Widok z góry inwestycji"
              className="absolute w-full h-full object-cover rounded-3xl"
              loading="lazy"
            />
            {housesData.map((house) => (
              <button
                key={house.id}
                className={`absolute ${
                  house.status === 0
                    ? "bg-red-500"
                    : house.status === 1
                    ? "bg-green-500"
                    : "bg-yellow-500"
                } text-green-spring-950 bg-opacity-75 hover:bg-opacity-100 rounded-full w-4 h-4 md:w-5 md:h-5 xl:w-6 xl:h-6 flex items-center justify-center font-bold text-xs md:text-sm cursor-pointer hover:bg-green-spring-900 hover:text-green-spring-50 transition-all z-10`}
                style={{
                  left: `${house.position.x}%`,
                  top: `${house.position.y}%`,
                  transform: "translate(-50%, -50%)",
                }}
                onClick={() => handleHouseClick(house.id)}
              >
                {house.id}
              </button>
            ))}
          </div>
        </div>
        <div
          ref={listContainerRef}
          className="overflow-y-auto max-h-[432px] lg:max-h-[741px] w-full lg:w-[35%] rounded-3xl space-y-4"
        >
          {housesData.map((house) => (
            <div
              key={house.id}
              ref={(el) => {
                houseRefs.current[house.id] = el;
              }}
              className="bg-color4 bg-opacity-80 p-4 sm:p-6 text-green-spring-900 flex flex-row"
            >
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-color1">
                  Mieszkanie {house.id}
                </h2>
                <p className="mt-2 text-sm sm:text-base">
                  Status:{" "}
                  <span
                    className={`font-semibold ${
                      house.status === 0
                        ? "text-red-500"
                        : house.status === 1
                        ? "text-green-500"
                        : "text-yellow-500"
                    }`}
                  >
                    {getStatusIcon(house.status)} {getStatusText(house.status)}
                  </span>
                </p>
                {house.price && (
                  <p className="mt-2 text-sm sm:text-base flex items-center">
                    <FaDollarSign className="inline-block w-5 h-5 mr-1 text-green-spring-900" />
                    <span className="font-semibold">
                      Cena: {formatPrice(house.price)} zł
                    </span>
                  </p>
                )}
                {house.ogrodek && (
                  <p className="mt-2 text-sm sm:text-base flex items-center">
                    <LuSprout className="inline-block w-5 h-5 mr-1 text-green-spring-900" />
                    <span className="font-semibold">
                      Ogródek: {formatUnit(house.ogrodek)} m²
                    </span>
                  </p>
                )}

                <p className="mt-2 text-sm sm:text-base flex items-center">
                  <FaHome className="inline-block w-5 h-5 mr-1 text-green-spring-900" />
                  <span className="font-semibold">
                    Metraż: {formatUnit(house.metraz)} m²
                  </span>
                </p>
                <div className="mt-6 drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]">
                  <a
                    href={house.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 bg-color1 text-color3 font-medium text-center rounded-lg hover:bg-color3 hover:text-color1 hover:scale-110 transition-all shadow-md"
                  >
                    Zobacz szczegóły oferty
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HousesSection;
