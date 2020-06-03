export default class PokemonInterface{
    name: string;
    height: number;
    base_experience: number;
    atack: number;
    weight: number;
    abilities: Abilities[];
    sprites: Sprites[];
    stats: Stats[];
    types: Type[];
}

type Sprites = {
    back_default: string,
    back_female: string,
    back_shiny: string,
    back_shiny_female: string,
    front_default: string,
    front_female: string,
    front_shiny: string,
    front_shiny_female: string,
}

type Ability = {
    name: string
}

type Abilities = {
    ability: Ability
}

type Stat = {
    name: string
}

type Stats = {
    base_stat: number,
    effort: number,
    stat: Stat
}

type Type = {
    name: string
}