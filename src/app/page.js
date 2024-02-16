import Image from "next/image";
import Button from "./components/UI/Button";
import { Bell, Heart, MessageSquareText, PlusSquare, User } from "lucide-react";
import SearchBar from "./components/UI/SearchBar";
import Menu, { SubMenu } from "./components/UI/Menu";
import RecentSearch from "./components/UI/RecentSearch";
import TopCategory from "./components/UI/TopCategory";
import Card from "./components/UI/Card";
import { RECENTS_SEARCH } from "./data/recentsSearch";
import { IMG_CATEGORIES } from "./data/imgCategories";
import { PRODUCTS } from "./data/products";

export default function Home() {
  const toys = PRODUCTS.filter((product) => product.category === "toys");

  return (
    <main>
      <nav className="flex flex-col items-center justify-between border-b border-gray-400">
        <div className="border-b-1">
          <div className="flex h-[60px] z-10 max-w-5xl w-full items-center justify-between pt-2">
            <div>
              <a
                className="pointer-events-none gap-2 p-8 lg:pointer-events-auto lg:p-0"
                href=""
                rel="noopener noreferrer"
              >
                <Image
                  src="/leboncoin.svg"
                  alt="Logo"
                  className=""
                  width={140}
                  height={60}
                  priority
                />
              </a>
            </div>
            <div className="flex ml-2">
              <Button name="Déposer une annonce">
                <PlusSquare color="white" size={16} />
              </Button>
              <div className="flex ml-4">
                <SearchBar />
              </div>
            </div>
            <div className="flex h-[60px]">
              <Menu name="Mes recherches">
                <Bell color="#152233" size={24} />
              </Menu>
              <Menu name="Favoris">
                <Heart color="#152233" size={24} />
              </Menu>
              <Menu name="Messages">
                <MessageSquareText color="#152233" size={24} />
              </Menu>
              <Menu name="Se connecter">
                <User color="#152233" size={24} />
              </Menu>
            </div>
          </div>
          <div className="mt-4">
            <SubMenu />
          </div>
        </div>
      </nav>
      <section className="flex flex-col items-center justify-between">
        <p className="text-2xl font-semibold mt-5">
          Des millions de petites annonces et autant d’occasions de se faire
          plaisir
        </p>
        <div className="flex max-w-5xl w-full items-center text-center justify-center gap-4 rounded-2xl bg-orange-100 py-4 mt-5">
          <p className="text-xl text-black font-bold">
            C'est le moment de vendre
          </p>
          <Button name="Déposer une annonce">
            <PlusSquare color="white" size={16} />
          </Button>
        </div>
      </section>
      <section className="flex flex-col max-w-5xl mx-auto">
        <h2 className="text-xl font-semibold mt-5">Recherches récentes</h2>
        <div className="flex relative gap-2 mt-4 overflow-x-auto pb-6">
          {RECENTS_SEARCH.map((search) => (
            <RecentSearch
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
            <TopCategory imgSrc={img.src} title={img.title} alt={img.alt} />
          ))}
          <div className="absolute right-0 top-0 w-10 h-full bg-gradient-to-l from-white"></div>
        </div>
      </section>
      <section className="flex flex-col max-w-5xl mx-auto">
        <h2 className="text-xl font-semibold mt-5">
          En ce moment sur leboncoin
        </h2>
        <h3 className="text-lg font-semibold mt-5">Jeux & Jouets</h3>
        <div className="flex relative gap-2 mt-4 overflow-x-auto pb-6">
          {toys.map((toy) => (
            <Card
              src={toy.src}
              alt={toy.alt}
              title={toy.title}
              price={toy.price}
              delivery={toy.delivery}
              address={toy.address}
              dateCreated={toy.dateCreated}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
