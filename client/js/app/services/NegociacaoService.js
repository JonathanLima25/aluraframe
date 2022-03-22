class NegociacaoService {

    constructor() {
        this._http = new HttpService();
    }

    obterNegociacaoDaSemana() {

        return new Promise((resolve, reject) => {

           this._http
            .get('negociacoes/semana')
            .then(negociacoes => {
                console.log(negociacoes);
                resolve(negociacoes.map(object => new Negociacao(new Date(object.data), object.quantidade, object.valor)));
            })
            .catch(error => {
                console.log(error)
                reject('Não foi possível obter a lista de negociações.')
            })
                
        });

    }
    obterNegociacaoDaSemanaAnterior() {
        
        return new Promise((resolve, reject) => {

            this._http
             .get('negociacoes/anterior')
             .then(negociacoes => {
                 console.log(negociacoes);
                 resolve(negociacoes.map(object => new Negociacao(new Date(object.data), object.quantidade, object.valor)));
             })
             .catch(error => {
                 console.log(error)
                 reject('Não foi possível obter a lista de negociações.')
             })
                 
         });
    }
    obterNegociacaoDaSemanaRetrasada() {
        
        return new Promise((resolve, reject) => {

            this._http
             .get('negociacoes/retrasada')
             .then(negociacoes => {
                 console.log(negociacoes);
                 resolve(negociacoes.map(object => new Negociacao(new Date(object.data), object.quantidade, object.valor)));
             })
             .catch(error => {
                 console.log(error)
                 reject('Não foi possível obter a lista de negociações.')
             })
                 
         });
    }
}