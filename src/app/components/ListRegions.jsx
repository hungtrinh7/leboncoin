import React from "react";
import Link from "next/link";

const ListRegions = () => {
  return (
    <div className="grid grid-cols-4 grid-flow-row max-w-5xl mx-auto relative gap-4 mt-4 pb-6 text-xs">
      <div>
        <ul>
          <li>
            <Link
              href={""}
              className="font-bold uppercase hover:underline hover:opacity-50"
            >
              OUEST
            </Link>
          </li>
          <li>
            <Link href={""} className="hover:underline hover:opacity-50">
              Basse-Normandie
            </Link>
          </li>
          <li>
            <Link href={""} className="hover:underline hover:opacity-50">
              Bretagne
            </Link>
          </li>
          <li>
            <Link href={""} className="hover:underline hover:opacity-50">
              Pays de la Loire
            </Link>
          </li>
          <li>
            <Link href={""} className="hover:underline hover:opacity-50">
              Poitou-Charentes
            </Link>
          </li>
        </ul>
        <hr className="my-lg block border-t-sm border-outline" />
      </div>
      <div>
        <ul>
          <li>
            <Link
              href={""}
              className="font-bold uppercase hover:underline hover:opacity-50"
            >
              SUD-EST
            </Link>
          </li>
          <li>
            <Link href={""} className="hover:underline hover:opacity-50">
              Corse
            </Link>
          </li>
          <li>
            <Link href={""} className="hover:underline hover:opacity-50">
              Languedoc-Roussillon
            </Link>
          </li>
          <li>
            <Link href={""} className="hover:underline hover:opacity-50">
              Provence-Alpes-Côte d’Azur
            </Link>
          </li>
          <li>
            <Link href={""} className="hover:underline hover:opacity-50">
              Rhône-Alpes
            </Link>
          </li>
        </ul>
        <hr className="my-lg block border-t-sm border-outline" />
      </div>
      <div>
        <ul>
          <li>
            <Link
              href={""}
              className="font-bold uppercase hover:underline hover:opacity-50"
            >
              NORD
            </Link>
          </li>
          <li>
            <Link href={""} className="hover:underline hover:opacity-50">
              Haute-Normandie
            </Link>
          </li>
          <li>
            <Link href={""} className="hover:underline hover:opacity-50">
              Nord-Pas-de-Calais
            </Link>
          </li>
          <li>
            <Link href={""} className="hover:underline hover:opacity-50">
              Picardie
            </Link>
          </li>
        </ul>
        <hr className="my-lg block border-t-sm border-outline" />
      </div>
      <div>
        <ul>
          <li>
            <Link
              href={""}
              className="font-bold uppercase hover:underline hover:opacity-50"
            >
              DROM
            </Link>
          </li>
          <li>
            <Link href={""} className="hover:underline hover:opacity-50">
              Guadeloupe
            </Link>
          </li>
          <li>
            <Link href={""} className="hover:underline hover:opacity-50">
              Martinique
            </Link>
          </li>
          <li>
            <Link href={""} className="hover:underline hover:opacity-50">
              Guyane
            </Link>
          </li>
          <li>
            <Link href={""} className="hover:underline hover:opacity-50">
              Réunion
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <Link
              href={""}
              className="font-bold uppercase hover:underline hover:opacity-50"
            >
              SUD-OUEST
            </Link>
          </li>
          <li>
            <Link href={""} className="hover:underline hover:opacity-50">
              Aquitaine
            </Link>
          </li>
          <li>
            <Link href={""} className="hover:underline hover:opacity-50">
              Midi-Pyrénées
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <Link
              href={""}
              className="font-bold uppercase hover:underline hover:opacity-50"
            >
              EST
            </Link>
          </li>
          <li>
            <Link href={""} className="hover:underline hover:opacity-50">
              Alsace
            </Link>
          </li>
          <li>
            <Link href={""} className="hover:underline hover:opacity-50">
              Bourgogne
            </Link>
          </li>
          <li>
            <Link href={""} className="hover:underline hover:opacity-50">
              Champagne-Ardenne
            </Link>
          </li>
          <li>
            <Link href={""} className="hover:underline hover:opacity-50">
              Franche-Comté
            </Link>
          </li>
          <li>
            <Link href={""} className="hover:underline hover:opacity-50">
              Lorraine
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <Link
              href={""}
              className="font-bold uppercase hover:underline hover:opacity-50"
            >
              CENTRE
            </Link>
          </li>
          <li>
            <Link href={""} className="hover:underline hover:opacity-50">
              Auvergne
            </Link>
          </li>
          <li>
            <Link href={""} className="hover:underline hover:opacity-50">
              Centre
            </Link>
          </li>
          <li>
            <Link href={""} className="hover:underline hover:opacity-50">
              Ile-de-France
            </Link>
          </li>
          <li>
            <Link href={""} className="hover:underline hover:opacity-50">
              Limousin
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ListRegions;
