import React from "react";
import Pokemon from "./Pokemon";
import HubungiKamiForm from "./HubungiKamiForm";

class Main extends React.Component {
  render() {
    const listPokemon = [
      {
        id: 0,
        name: "Pikachu",
        image:
          "https://e7.pngegg.com/pngimages/476/159/png-clipart-pokemon-pikachu-pikachu-pokemon-games-pokemon.png",
        introduction:
          "The href attribute is required for an anchor to be keyboard accessible. Provide a valid, navigable address as the href value. If you cannot provide an href, but still need the element to resemble a link, use a button",
      },
      {
        id: 1,
        name: "Bulbasaur",
        image:
          "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
        introduction:
          "The href attribute is required for an anchor to be keyboard accessible. Provide a valid, navigable address as the href value. If you cannot provide an href, but still need the element to resemble a link, use a button",
      },
      {
        id: 2,
        name: "Blastoise",
        image:
          "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png",
        introduction:
          "The href attribute is required for an anchor to be keyboard accessible. Provide a valid, navigable address as the href value. If you cannot provide an href, but still need the element to resemble a link, use a button",
      },
      {
        id: 3,
        name: "Charmander",
        image:
          "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
        introduction:
          "The href attribute is required for an anchor to be keyboard accessible. Provide a valid, navigable address as the href value. If you cannot provide an href, but still need the element to resemble a link, use a button",
      },
    ];
    return (
      <div className="main-wrapper">
        <div className="main">
          <div className="hello-container">
            <h1>Hello, Pokemon hunter</h1>
            <h2>Selamat datang di dunia Pokemon</h2>
          </div>
          <div className="pokemon-container">
            <h3>List Pokemon</h3>
            <div className="list-card">
              {listPokemon.map((pokemon) => {
                return (
                  <Pokemon
                    id={pokemon.id}
                    name={pokemon.name}
                    image={pokemon.image}
                    introduction={pokemon.introduction}
                  />
                );
              })}
            </div>
          </div>
          {/*Masukkan komponen HubungiKamiForm.js di bawah ini*/}
          <div className="hubungikami-container">
            <h3>Hubungi Kami</h3>
            <HubungiKamiForm />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
