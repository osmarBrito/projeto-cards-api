/*********************************************************************
 * Objetivo: projetoL
 * Data: 28/10/2024
 * Autor: Osmar
 * Versão: 1.0
 *********************************************************************/

const setDadosNaruto = function(ListaDePersonagens) {
    let cardNaruto = document.getElementById('cardNaruto');

    ListaDePersonagens.tailedBeasts.forEach(function(item) {
        

        //criando os elemntos usados
        let divCardPersonagem    = document.createElement('div');
        let h2CaixaTitulo        = document.createElement('h2');
        let textoTitulo          = document.createTextNode(item.name)
        let figureCaixaImagem    = document.createElement('figure');
        let imgFigureCard        = document.createElement('img');
        let pNatureType          = document.createElement('p')
        let pStatus              = document.createElement('p');
        let itemNatureType       = document.createTextNode(item.natureType);

        //atributos HTML
        divCardPersonagem.setAttribute('class','card-produto');
        imgFigureCard.setAttribute('src', item.images);

        //aplicando os atributos no codigo
        cardNaruto.appendChild(divCardPersonagem);
        divCardPersonagem.appendChild(h2CaixaTitulo);
        h2CaixaTitulo.appendChild(textoTitulo);
        divCardPersonagem.appendChild(figureCaixaImagem);
        figureCaixaImagem.appendChild(imgFigureCard);
        divCardPersonagem.appendChild(pStatus);
        pStatus.textContent = `Species: ${item.personal?.species || 'Sem informação'}`;
        divCardPersonagem.appendChild(pNatureType);
        pNatureType.appendChild(itemNatureType);
    });
}

const getNarutoAPI = async function(){
    //Link da url da API de livros
    let url = 'https://narutodb.xyz/api/tailed-beast'

    //Executa a URL utilizando o fetch
    let response = await fetch(url)

    //Converte os dados em json
    let dadosNaruto = await response.json()

    //Chama a função para criar os cards dos livros
    setDadosNaruto(dadosNaruto)
}

window.addEventListener('load', function(){
    //getDadosLivros(livros[0].books)
    getNarutoAPI()
})