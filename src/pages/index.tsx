import { VFC } from "react";
import Link from "next/link";
import Image from "next/image";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";

import Layout from "../components/layout";

type Pokemon = {
  image: string;
  name: string;
  url: string;
};

type Props = {
  pokemon: Pokemon[];
};

const Index: VFC<Props> = ({ pokemon }) => {
  return (
    <Layout title="PokeDex" isHome={true}>
      <h1>PokeDex</h1>
      <ul>
        {pokemon.map((pokeman, index) => (
          <li key={index.toString()}>
            <Link href={`/pokemon?id=${index + 1}`}>
              <a className="flex items-center p-4 my-2 text-lg bg-gray-100 border border-gray-100 capitalize rounded-md shadow-sm hover:opacity-75">
                <div className="mr-3">
                  <Image
                    src={pokeman.image}
                    alt={pokeman.name}
                    width={80}
                    height={80}
                  />
                </div>
                <span className="mr-2 font-bold">{index + 1}.</span>
                {pokeman.name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default Index;

export const getStaticProps: GetStaticProps = async () => {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=50");
    const { results } = await res.json();
    const pokemon = results.map(
      (result: [name: string, url: string], index: number) => {
        const paddedIndex = ("00" + (index + 1)).slice(-3);
        const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedIndex}.png`;
        return {
          ...result,
          image,
        };
      }
    );
    return {
      props: { pokemon },
    };
  } catch (err) {
    console.error(err);
  }
};
