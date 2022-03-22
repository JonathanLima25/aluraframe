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
        let service = new NegociacaoService();

        service.obterNegociacaoDaSemana()
            .then(negociacoes => {negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
            this._mensagem.texto = 'Negociações da semana obtida com sucesso.'
        })
            .catch(error => this._mensagem.texto = error)

        service.obterNegociacaoDaSemanaAnterior()
            .then(negociacoes => {negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
            this._mensagem.texto = 'Negociações da semana obtida com sucesso.'
        })
            .catch(error => this._mensagem.texto = error)

        service.obterNegociacaoDaSemanaRetrasada()
            .then(negociacoes => {negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
            this._mensagem.texto = 'Negociações da semana obtida com sucesso.'
        })
            .catch(error => this._mensagem.texto = error)
       
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