const pokemonInput = document.querySelector(".pokemon-input");
const pokemonSearch = document.querySelector(".pokemon-search");
const pokemon_Name = document.getElementById("poke-name");
const pokemonType = document.getElementById("poke-type");
const pokemonHp = document.getElementById("poke-hp");
const pokemonAttack = document.getElementById("poke-attack");
const pokemonDefence = document.getElementById("poke-defense");
const pokemonAbility = document.getElementById("poke-ability");
const Change = document.querySelector(".change");
const pokemonInitialview = document.querySelector(".initial-view");
const pokemonCarizard = document.querySelector(".charizard");
const pokemonPikachu = document.querySelector(".pikachu");
const pokemonSquirtle = document.querySelector(".squirtle");
const pokemonBulbasaur = document.querySelector(".bulbasaur");
const pokemonGyarados = document.querySelector(".gyarados");
const pokemonArcanine = document.querySelector(".arcanine");
function selectPokemon(name) {
    pokemonInput.value = name;   
    pokemonInitialview.style.display = "none";
    Change.style.display = "flex";
    fetchdata();                 
}

async function fetchdata() {
    try {
        const pokemonName = pokemonInput.value.toLowerCase();

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if (!response.ok) {
            throw new Error("could not fetch data");
        }

        const data = await response.json();

        pokemon_Name.textContent = data.name;
        pokemonType.textContent = data.types[0].type.name;
        pokemonHp.textContent = data.stats[0].base_stat;
        pokemonAttack.textContent = data.stats[1].base_stat;
        pokemonDefence.textContent = data.stats[2].base_stat;
        pokemonAbility.textContent = data.abilities[0].ability.name;

        const imgSprint =data.sprites.other["official-artwork"].front_default ||data.sprites.front_default;
        const imgElement = document.getElementById("pokemon-sprint");
        imgElement.src = imgSprint;
        imgElement.style.display = "block";
        pokemonSearch.style.backgroundImage ='url("images/poki ball.png")';
        pokemonInitialview.style.display="none";
        Change.style.display="flex";

    } catch (error) {
        console.error(error);
    }
}
pokemonSearch.addEventListener("click", fetchdata);
pokemonInput.addEventListener("click", changeImage);

function changeImage() {
    pokemonSearch.style.backgroundImage ='url("images/remove.photos-removed-background-removebg-preview.png")';
}
pokemonCarizard.addEventListener("click", () => selectPokemon("charizard"));
pokemonPikachu.addEventListener("click", () => selectPokemon("pikachu"));
pokemonSquirtle.addEventListener("click", () => selectPokemon("squirtle"));
pokemonBulbasaur.addEventListener("click", () => selectPokemon("bulbasaur"));
pokemonGyarados.addEventListener("click", () => selectPokemon("gyarados"));
pokemonArcanine.addEventListener("click", () => selectPokemon("arcanine"));