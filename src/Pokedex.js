import React from 'react';
import pokemons from './data';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
    constructor() {
        super()
        this.state = {
            position: 0,
            type: ''
        }
        this.nextPokemon = this.nextPokemon.bind(this);
        this.typePokemon = this.typePokemon.bind(this);
    }

    nextPokemon() {
        this.setState((a, _b) => {
            const y = this.props.pokemons.filter((pokemon) => pokemon.type.includes(this.state.type))
            const resultado = a.position + 1 < y.length ? a.position + 1 : 0
            return ({
                position: resultado
            })
        })
    }

    typePokemon(type) {
        this.setState((a, _b) => {
            return ({
                position: 0,
                type
            })
        })
    }

    render() {
        const a = this.props.pokemons.filter((pokemon) => pokemon.type.includes(this.state.type));
        const NextPoke = a[this.state.position]
        return (
            <div>
                <div className="pokedex">
                    {<Pokemon pokemon={NextPoke} />}
                </div>
                <button onClick={this.nextPokemon}>Next Pokemon</button>
                <section>
                    <button onClick={() => { this.typePokemon('') }}>All</button>
                    <button onClick={() => { this.typePokemon('Fire') }}>Fire</button>
                    <button onClick={() => { this.typePokemon('Psych') }}>Psych</button>
                </section>
            </div>
        );
    }
}

export default Pokedex;
