class NegociacaoController {
    constructor() {
        let $ = document.querySelector.bind(document);

        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        
        
        this._listaNegociacoes = new Bind(
            new ListaNegociacoes(),
            new NegociacoesView($('#negociacoesView')),
            this._negociacoesView,
            'adiciona', 'esvazia')


        this._mensagem = new Bind(
            new Mensagem(),
            new MensagemView($('#mensagemView')),
            this._mensagemView,
            'texto');
    }


    adiciona(event) {
        event.preventDefault();

        this._listaNegociacoes.adiciona(this._criaNegociacao()); 
        this._mensagem.texto = 'Negociação adicionada com sucesso!';
        this._limpaFormulario();
    
        console.log(this._listaNegociacoes.negociacoes);
    }

    importaNegociacoes() {
        let xhr = new XMLHttpRequest();

        xhr.open('GET', 'negociacoes/semana');

        xhr.onreadystatechange = () => {
            if(xhr.readyState == 4) {
                if(xhr.status == 200) {
                    console.log("Obtendo as negociações do servidor");
                    console.log(JSON.parse(xhr.responseText));
                } else {
                    console.log("Não foi possível obter as negociações");
                    console.log(xhr.responseText);
                }

            }
        }

        xhr.send();
    }

    apaga() {
        this._listaNegociacoes.esvazia();      
        this._mensagem.texto = "Negociações apagadas com sucesso!";
    }

    _criaNegociacao() {
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );
    }

    _limpaFormulario() {
        let form = document.querySelector('.form');
        form.reset();
    }
}