/*
quando clicar no pokemon da listagem temos que esconder o cartao do pokemon aberto e mostras o cartao correspondente ao que foi selecionado na listagem

para isso vamos precisar com dois elementos
1-listagem
2-cartao do pokemon

precisamos criar duas variaveis no JS para trabalhar com os elementos da tela

vamos precisar trabalhar com um evento de clique feito pelo usuário na lisatgem de pokemons

- remover a classe aberto só do cartão que está aberto
- ao clicar em um pokemon da listagem pegamos o id desse pokemon para saber qual cartão mostrar
- remover a classe ativa que marca o pokemon selecionado
- adicionar a classe ativo no item da lista selecionado

*/


// Variáveis
const listaSelecaoPokemons = document.querySelectorAll('.pokemon');
const pokemonsCard = document.querySelectorAll('.cartao-pokemon');

listaSelecaoPokemons.forEach(pokemon => {
    pokemon.addEventListener('click', () => {

        const cartaoPokemonAberto = document.querySelector('.aberto');
        cartaoPokemonAberto.classList.remove('aberto');

        const idPokemonSelecionado = pokemon.attributes.id.value;

        const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir);
        cartaoPokemonParaAbrir.classList.add('aberto');

        const pokemonAtivoNaListagem= document.querySelector('.ativo');
        pokemonAtivoNaListagem.classList.remove('ativo');

        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado);
        pokemonSelecionadoNaListagem.classList.add('ativo');

    })
})