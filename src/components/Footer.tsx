"use client";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full h-full flex flex-col">
      <section className="w-full bg-color1 py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <a className="p-4 bg-color2 rounded-full" href="tel:+48790282775">
                <FaPhoneAlt className="text-color3 w-8 h-8" />
              </a>
              <h3 className="text-xl font-bold text-color3 mt-4">
                Numer <br /> kontaktowy:
              </h3>
              <p className="text-color3 mt-2 hover:scale-110 hover:text-color4">
                +48 790 282 775
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <a
                className="p-4 bg-color2 rounded-full"
                href="mailto:p.mazur@interia.eu"
              >
                <FaEnvelope className="text-color3 w-8 h-8" />
              </a>
              <h3 className="text-xl font-bold text-color3 mt-4">
                Firmowy <br /> e-mail:
              </h3>
              <p className="text-color3 mt-2 hover:scale-110 hover:text-color4">
                p.mazur@interia.eu
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <button
                className="p-4 bg-color2 rounded-full"
                onClick={() =>
                  window.open(
                    "https://maps.app.goo.gl/8FDTzhePAQp7DUb2A",
                    "_blank"
                  )
                }
              >
                <FaMapMarkerAlt className="text-color3 w-8 h-8" />
              </button>
              <h3 className="text-xl font-bold text-color3 mt-4">
                Nasza <br /> lokalizacja:
              </h3>
              <p className="text-color3 mt-2 hover:scale-110">
                Tyniecka 161, <br /> 30-376 Kraków
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="p-4 bg-color2 rounded-full">
                <FaClock className="text-color3 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-color3 mt-4">
                Godziny <br /> pracy:
              </h3>
              <p className="text-color3 mt-2 hover:scale-110">
                Pon. – Pt.: 8:00 – 17:00 <br />
                Sob.: 8:00 – 14:00
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="flex flex-col md:flex-row justify-between items-center py-2 px-4 bg-signature text-white">
        <p className="my-2 text-center md:text-left">2024 Policrafts ©</p>
        <div className="text-center md:text-right">
          <p className="text-signature_text p-0 m-0">
            Realizacja witryny: Rafał Ciupek
          </p>
        </div>
      </div>
    </footer>
  );
}
