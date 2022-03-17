class NegociacaoController {
    constructor() {
        let $ = document.querySelector.bind(document);

        this.inputData = $('#data');
        this.inputQuantidade = $('#quantidade');
        this.inputValor = $('#valor');
    }
    adiciona(event) {
        event.preventDefault();
        

        let valores = [this.inputData.value, this.inputQuantidade.value, this.inputValor.value];

        console.log(valores);


    }
}