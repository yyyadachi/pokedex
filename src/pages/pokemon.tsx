import { VFC } from "react";
import { GetServerSideProps } from "next";
import Link from "next/link";
import Image from "next/image";

import Layout from "../components/layout";
import Data from "../data.json";

type Pokeman = typeof Data;
type Image = { image: string };

type Props = {
  pokeman: Pokeman & Image;
};

const pokemon: VFC<Props> = ({ pokeman }) => {
  console.log(pokeman);
  return (
    <Layout title={pokeman.name}>
      <h1>{pokeman.name}</h1>
      <div className="text-center">
        <Image
          src={pokeman.image}
          alt={pokeman.name}
          width={475}
          height={475}
        />
      </div>
      <p>
        <span className="mr-2 font-bold">Weight: {pokeman.weight}</span>
        <span className="mr-2 font-bold">Height: {pokeman.height}</span>
      </p>
      <h2 className="mt-6 mb-2 text-xl">Types</h2>
      {pokeman.types.map((type, index) => (
        <p key={index.toString()}>{type.type.name}</p>
      ))}
    </Layout>
  );
};

export default pokemon;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const id = query.id;
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokeman = await response.json();
    const paddedIndex = ("00" + id).slice(-3);
    const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedIndex}.png`;
    pokeman.image = image;

    return {
      props: { pokeman },
    };
  } catch (error) {
    console.error(error);
  }
};
