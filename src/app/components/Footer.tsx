import React from "react";
import SelectCountries from "./SelectCountries";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#2B3441] py-2 text-white">
      <div id="top_footer" className="flex gap-4 max-w-5xl mx-auto my-4">
        <div>
          <p className="text-base uppercase font-bold">à propos du boncoin</p>
          <hr className="my-lg block border-t-sm border-outline mt-2 mb-4" />
          <ul>
            <li>
              <Link href={""} className="hover:underline">
                Qui sommes-nous ?
              </Link>
            </li>
            <li>
              <Link href={""} className="hover:underline">
                Nous rejoindre
              </Link>
            </li>
            <li>
              <Link href={""} className="hover:underline">
                Nos engagements
              </Link>
            </li>
            <li>
              <Link href={""} className="hover:underline">
                L’Avenir a du bon
              </Link>
            </li>
            <li>
              <Link href={""} className="hover:underline">
                Le bon observatoire
              </Link>
            </li>
            <li>
              <Link href={""} className="hover:underline">
                Espace presse
              </Link>
            </li>
          </ul>
          <p className="text-base uppercase font-bold">nos applications</p>
          <hr className="my-lg block border-t-sm border-outline mt-2 mb-4" />
          <div className="flex flex-wrap gap-2">
            <Image
              src="/download_on_app_store.avif"
              alt="Download on app store"
              width="0"
              height="0"
              sizes="100vw"
              style={{ width: "120px", height: "auto" }}
            />
            <Image
              src="/download_on_google_play.avif"
              alt="Download on app store"
              width="0"
              height="0"
              sizes="100vw"
              style={{ width: "120px", height: "auto" }}
            />
            <Image
              src="/download_on_app_gallery.avif"
              alt="Download on app store"
              width="0"
              height="0"
              sizes="100vw"
              style={{ width: "120px", height: "auto" }}
            />
          </div>
        </div>
        <div>
          <p className="text-base uppercase font-bold">informations légales</p>
          <hr className="my-lg block border-t-sm border-outline mt-2 mb-4" />
          <ul>
            <li>
              <Link href={""} className="hover:underline">
                Conditions générales d’utilisation
              </Link>
            </li>
            <li>
              <Link href={""} className="hover:underline">
                Référencement et classement des annonces
              </Link>
            </li>
            <li>
              <Link href={""} className="hover:underline">
                Conditions générales de vente
              </Link>
            </li>
            <li>
              <Link href={""} className="hover:underline">
                Vie privée / cookies
              </Link>
            </li>
            <li>
              <Link href={""} className="hover:underline">
                Vos droits et obligations
              </Link>
            </li>
            <li>
              <Link href={""} className="hover:underline">
                Avis utilisateurs
              </Link>
            </li>
            <li>
              <Link href={""} className="hover:underline">
                Charte de bonne conduite
              </Link>
            </li>
            <li>
              <Link href={""} className="hover:underline">
                Paiement en plusieurs fois
              </Link>
            </li>
            <li>
              <Link href={""} className="hover:underline">
                Accessibilité
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-base uppercase font-bold">nos solutions pros</p>
          <hr className="my-lg block border-t-sm border-outline mt-2 mb-4" />
          <ul>
            <li>
              <Link href={""} className="hover:underline">
                Publicité
              </Link>
            </li>
            <li>
              <Link href={""} className="hover:underline">
                Professionnels de l’immobilier
              </Link>
            </li>
            <li>
              <Link href={""} className="hover:underline">
                Vos recrutements
              </Link>
            </li>
            <li>
              <Link href={""} className="hover:underline">
                Professionnels de l’auto
              </Link>
            </li>
            <li>
              <Link href={""} className="hover:underline">
                Professionnels du tourisme
              </Link>
            </li>
            <li>
              <Link href={""} className="hover:underline">
                Autres solutions professionnelles
              </Link>
            </li>
            <li>
              <Link href={""} className="hover:underline">
                Annuaire des professionnels
              </Link>
            </li>
            <li>
              <Link href={""} className="hover:underline">
                Dépôt d&apos;offres d&apos;emploi : tarif réservé aux TPE
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-base uppercase font-bold">des questions ?</p>
          <hr className="my-lg block border-t-sm border-outline mt-2 mb-4" />
          <ul>
            <li>
              <Link href={""} className="hover:underline">
                Aide
              </Link>
            </li>
            <li>
              <Link href={""} className="hover:underline">
                Le service de paiement sécurisé et la livraison
              </Link>
            </li>
            <li>
              <Link href={""} className="hover:underline">
                Le porte-monnaie
              </Link>
            </li>
            <li>
              <Link href={""} className="hover:underline">
                Le service de réservation de vacances en ligne pour les hôtes
              </Link>
            </li>
            <li>
              <Link href={""} className="hover:underline">
                La gestion locative simplifiée et sécurisée avec Qasa
              </Link>
            </li>
            <li>
              <Link href={""} className="hover:underline">
                Votre dossier de location en ligne
              </Link>
            </li>
            <li>
              <Link href={""} className="hover:underline">
                Votre espace bailleur
              </Link>
            </li>
            <li>
              <Link href={""} className="hover:underline">
                Statut de nos services
              </Link>
            </li>
          </ul>
          <p className="text-base uppercase font-bold">
            vous êtes à l&apos;étranger ?
          </p>
          <hr className="my-lg block border-t-sm border-outline mt-2 mb-4" />
          <SelectCountries />
        </div>
      </div>
      <div className="max-w-5xl mx-auto mt-12 mb-4 text-center text-base">
        <hr className="my-lg block border-t-sm border-outline mt-2 mb-4" />
        <ul className="link-others-services">
          <li className="first:after:content-none mr-1">leboncoin : </li>
          <li>
            <Link href={""}>AVendreALouer</Link>
          </li>
          <li>
            <Link href={""}>leboncoin Immobilier Neuf</Link>
          </li>
          <li>
            <Link href={""}>L&apos;argus</Link>
          </li>
          <li>
            <Link href={""}>Agriaffaires</Link>
          </li>
          <li>
            <Link href={""}>MachineryZone</Link>
          </li>
          <li>
            <Link href={""}>Truckscorner</Link>
          </li>
          <li>
            <Link href={""}>Locasun</Link>
          </li>
          <li>
            <Link href={""}>Locasun-vp</Link>
          </li>
          <li>
            <Link href={""}>LeDénicheur</Link>
          </li>
          <li className="first:after:content-none">
            <Link href={""}>Younited Credit/p</Link>
          </li>
        </ul>
        <hr className="my-lg block border-t-sm border-outline mt-2 mb-4" />
        <div className="flex justify-between">
          <p>leboncoin 2006 - 2024</p>
          <Link href={""} className="flex items-baseline">
            <span className="font-bold">Excellent</span>
            <div className="flex gap-1 mx-2">
              <span className="bg-[#00B67A] h-[15px] w-[15px]">
                <Image
                  src={"/star-trustpilot.svg"}
                  width="0"
                  height="0"
                  sizes="100vw"
                  style={{ width: "15px", height: "auto" }}
                  alt="star-trustpilot 1"
                />
              </span>
              <span className="bg-[#00B67A] h-[15px] w-[15px]">
                <Image
                  src={"/star-trustpilot.svg"}
                  width="0"
                  height="0"
                  sizes="100vw"
                  style={{ width: "15px", height: "auto" }}
                  alt="star-truspilot 2"
                />
              </span>
              <span className="bg-[#00B67A] h-[15px] w-[15px]">
                <Image
                  src={"/star-trustpilot.svg"}
                  width="0"
                  height="0"
                  sizes="100vw"
                  style={{ width: "15px", height: "auto" }}
                  alt="star-truspilot 3"
                />
              </span>
              <span className="bg-[#00B67A] h-[15px] w-[15px]">
                <Image
                  src={"/star-trustpilot.svg"}
                  width="0"
                  height="0"
                  sizes="100vw"
                  style={{ width: "15px", height: "auto" }}
                  alt="star-truspilot 4"
                />
              </span>
              <span className="bg-[#00B67A] h-[15px] w-[15px]">
                <Image
                  src={"/star-trustpilot.svg"}
                  width="0"
                  height="0"
                  sizes="100vw"
                  style={{ width: "15px", height: "auto" }}
                  alt="star-truspilot 5"
                />
              </span>
            </div>
            <span className="mr-1 text-sm">
              <span className="font-bold">127617</span> avis sur
            </span>
            <span>
              <Image
                src={"/logo-trustpilot.svg"}
                width="0"
                height="0"
                sizes="100vw"
                style={{ width: "18px", height: "auto" }}
                alt="logo truspilot"
              />
            </span>
            <span className="ml-1 text-lg font-medium">Trustpilot</span>
          </Link>
          <div className="flex">
            <span>Retrouvez-nous sur</span>
            <div className="flex gap-2 ml-2">
              <Link href={""}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-linkedin"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                </svg>
              </Link>
              <Link href={""}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-twitter-x"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                </svg>
              </Link>
              <Link href={""}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-instagram"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                </svg>
              </Link>
              <Link href={""}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-pinterest"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0a8 8 0 0 0-2.915 15.452c-.07-.633-.134-1.606.027-2.297.146-.625.938-3.977.938-3.977s-.239-.479-.239-1.187c0-1.113.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A8 8 0 1 0 8 0" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
