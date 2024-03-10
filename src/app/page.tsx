"use client";
import Button from "./components/UI/Button";
import { MoveRight, PlusSquare } from "lucide-react";
import RecentSearch from "./components/UI/RecentSearch";
import TopCategory from "./components/UI/TopCategory";
import Card from "./components/UI/Card";
import CardBorder from "./components/UI/CardBorder";
import ListCategories from "./components/ListCategories";
import ListRegions from "./components/ListRegions";
import { RECENTS_SEARCH } from "./data/recentsSearch";
import { IMG_CATEGORIES } from "./data/imgCategories";
import Link from "next/link";
import { useEffect, useState } from "react";
import supabase from "./config/supabaseClient";
import { Job, Product } from "../common/types";

const categories = [1, 2, 3];

export default function Home() {
  const [toys, setToys] = useState<Product[]>([]);
  const [cars, setCars] = useState<Product[]>([]);
  const [cameras, setCameras] = useState<Product[]>([]);
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    const findProducts = async () => {
      const { data, error } = await supabase
        .from("products")
        .select(
          `
          *,
          users (
            id, username, rating, number_reviews
          ),
          categories (
            id, name
          )
          `
        )
        .in("category_id", categories);

      if (error) {
        console.log(error);
      }
      if (data) {
        setToys(data.filter((t) => t.category_id === 1));
        setCars(data.filter((c) => c.category_id === 2));
        setCameras(data.filter((c) => c.category_id === 3));
      }
    };
    findProducts();
  }, []);

  useEffect(() => {
    const findJobs = async () => {
      const { data, error } = await supabase.from("jobs").select().limit(5);

      if (error) {
        console.log(error);
      }
      if (data) {
        setJobs(data);
      }
    };
    findJobs();
  }, []);

  return (
    <main>
      <section className="flex flex-col items-center justify-between">
        <p className="text-2xl font-semibold mt-5">
          Des millions de petites annonces et autant d’occasions de se faire
          plaisir
        </p>
        <div className="flex max-w-5xl w-full items-center text-center justify-center gap-4 rounded-2xl bg-orange-100 py-4 mt-5">
          <p className="text-xl text-black font-bold">
            C&apos;est le moment de vendre
          </p>
          <Button name="Déposer une annonce" url="/deposer-une-annonce">
            <PlusSquare color="white" size={16} />
          </Button>
        </div>
      </section>
      <section className="flex flex-col max-w-5xl mx-auto">
        <h2 className="text-xl font-semibold mt-5">Recherches récentes</h2>
        <div className="flex relative gap-2 mt-4 overflow-x-auto pb-6">
          {RECENTS_SEARCH.map((search) => (
            <RecentSearch
              key={search.id}
              title={search.title}
              category={search.category}
              zone={search.zone}
            />
          ))}
          <div className="absolute right-0 top-0 w-10 h-full bg-gradient-to-l from-white"></div>
        </div>
      </section>
      <section className="flex flex-col max-w-5xl mx-auto">
        <h2 className="text-xl font-semibold mt-5">Top catégories</h2>
        <div className="flex relative gap-2 mt-4 overflow-x-auto pb-6">
          {IMG_CATEGORIES.map((img) => (
            <TopCategory
              key={img.id}
              imgSrc={img.src}
              title={img.title}
              alt={img.alt}
            />
          ))}
          <div className="absolute right-0 top-0 w-10 h-full bg-gradient-to-l from-white"></div>
        </div>
      </section>
      <section className="flex flex-col max-w-5xl mx-auto">
        <h2 className="text-xl font-semibold mt-5">
          En ce moment sur leboncoin
        </h2>
        <h3 className="text-lg font-semibold mt-5">Jeux & Jouets</h3>
        <div className="flex relative gap-4 mt-4 overflow-x-auto pb-6">
          {toys.map((toy) => (
            <Card key={toy.id} seller={toy.users} product={toy} />
          ))}
        </div>
      </section>
      <section className="flex flex-col max-w-5xl mx-auto">
        <div className="flex items-baseline justify-between">
          <h3 className="text-lg font-semibold mt-5">Offre d&apos;emploi</h3>
          <Link href={""} className="flex items-center font-bold">
            Voir plus d&apos;annonces <MoveRight size={14} className="ml-2" />
          </Link>
        </div>
        <div className="flex relative gap-4 mt-4 overflow-x-auto pb-6">
          {jobs.map((job) => (
            <CardBorder key={job.id} job={job} />
          ))}
        </div>
      </section>
      <section className="flex flex-col max-w-5xl mx-auto">
        <h3 className="text-lg font-semibold mt-5">Voitures</h3>
        <div className="flex relative gap-4 mt-4 overflow-x-auto pb-6">
          {cars.map((car) => (
            <Card key={car.id} seller={car.users} product={car} />
          ))}
        </div>
      </section>
      <section className="flex flex-col max-w-5xl mx-auto">
        <h3 className="text-lg font-semibold mt-5">Appareils photo</h3>
        <div className="flex relative gap-4 mt-4 overflow-x-auto pb-6">
          {cameras.map((camera) => (
            <Card key={camera.id} seller={camera.users} product={camera} />
          ))}
        </div>
      </section>
      <section className="flex flex-col max-w-5xl mx-auto mt-6">
        <p className="text-xs">
          Avec leboncoin, trouvez la bonne affaire sur le site référent de
          petites annonces de particulier à particulier et de professionnels.
          Avec des millions de petites annonces, trouvez la bonne occasion dans
          nos catégories{" "}
          <Link href={""} className="link-category">
            voitures
          </Link>
          ,{" "}
          <Link href={""} className="link-category">
            immobilier
          </Link>
          ,{" "}
          <Link href={""} className="link-category">
            emploi
          </Link>
          ,
          <Link href={""} className="link-category">
            location de vacances
          </Link>
          ,{" "}
          <Link href={""} className="link-category">
            vêtements
          </Link>
          ,{" "}
          <Link href={""} className="link-category">
            meubles
          </Link>
          ,{" "}
          <Link href={""} className="link-category">
            bricolage
          </Link>
          ,{" "}
          <Link href={""} className="link-category">
            téléphonie
          </Link>
          ,{" "}
          <Link href={""} className="link-category">
            jeux vidéo
          </Link>
          , etc. Déposez une annonce gratuite en toute simplicité pour vendre,
          rechercher, donner vos biens de seconde main ou promouvoir vos
          services. Pour cet été, découvrez nos idées de destination avec notre
          guide de vacances en France. Achetez en toute sécurité avec notre
          système de paiement en ligne et de livraison pour les annonces
          éligibles.
        </p>
      </section>
      <section id="list-categories-section" className="bg-[#F4F9FE] py-2 mt-6">
        <ListCategories />
        <hr className="max-w-5xl mx-auto my-lg block border-t-sm border-outline" />
        <ListRegions />
      </section>
    </main>
  );
}
