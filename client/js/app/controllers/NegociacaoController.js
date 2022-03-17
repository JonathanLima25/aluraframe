class NegociacaoController {
    adiciona(event) {
        event.preventDefault();
        
        let $ = document.querySelector.bind(document);
        let inputData = $('#data');
        let inputQuantidade = $('#quantidade');
        let inputValor = $('#valor');

        let valores = [inputData.value, inputQuantidade.value, inputValor.value];

        console.log(valores);


    }
}