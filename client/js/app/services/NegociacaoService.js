class NegociacaoService {

    obterNegociacaoDaSemana(callback) {
        let xhr = new XMLHttpRequest();

        xhr.open('GET', 'negociacoes/semana');

        xhr.onreadystatechange = () => {
            if(xhr.readyState == 4) {
                if(xhr.status == 200) {
                    
                    callback(null, JSON.parse(xhr.responseText).map(object => new Negociacao(new Date(object.data), object.quantidade, object.valor)))
                } else {
                    console.log(xhr.responseText);
                    callback('Não foi possível obter as negociações')
                }

            }
        }

        xhr.send();
    }
    obterNegociacaoDaSemanaAnterior(callback) {
        let xhr = new XMLHttpRequest();

        xhr.open('GET', 'negociacoes/anterior');

        xhr.onreadystatechange = () => {
            if(xhr.readyState == 4) {
                if(xhr.status == 200) {
                    
                    callback(null, JSON.parse(xhr.responseText).map(object => new Negociacao(new Date(object.data), object.quantidade, object.valor)))
                } else {
                    console.log(xhr.responseText);
                    callback('Não foi possível obter as negociações')
                }

            }
        }

        xhr.send();
    }
    obterNegociacaoDaSemanaRetrasada(callback) {
        let xhr = new XMLHttpRequest();

        xhr.open('GET', 'negociacoes/retrasada');

        xhr.onreadystatechange = () => {
            if(xhr.readyState == 4) {
                if(xhr.status == 200) {
                    
                    callback(null, JSON.parse(xhr.responseText).map(object => new Negociacao(new Date(object.data), object.quantidade, object.valor)))
                } else {
                    console.log(xhr.responseText);
                    callback('Não foi possível obter as negociações')
                }

            }
        }

        xhr.send();
    }
}