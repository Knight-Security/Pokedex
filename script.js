const pokemonSearch = document.querySelector(".pokemon-search");
const pokemon_Name = document.getElementById("poke-name");
const pokemonType=document.getElementById("poke-type");
const pokemonHp=document.getElementById("poke-hp");
const pokemonAttack=document.getElementById("poke-attack");
const pokemonDefence=document.getElementById("poke-defense");
const pokemonAbility=document.getElementById("poke-ability");

async function fetchdata() {
    try {
        const pokemonName = document.querySelector(".pokemon-input").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        if (!response.ok) {
            throw new Error("could not fetch data")
        }
        const data = await response.json();
        pokemon_Name.textContent=data.name;
        pokemonType.textContent=data.types[0].type.name;
        pokemonHp.textContent=data.stats[0].base_stat;;
        pokemonAttack.textContent=data.stats[1].base_stat;
        pokemonDefence.textContent = data.stats[2].base_stat;
        pokemonAbility.textContent = data.abilities[0].ability.name;
        const imgSprint = data.sprites.front_default;
        const imgElement = document.getElementById("pokemon-sprint");
        imgElement.src = imgSprint;
        imgElement.style.display = "block"
        
    }
    catch (error) {
        console.error(error)
    }
}
pokemonSearch.addEventListener("click", fetchdata)
