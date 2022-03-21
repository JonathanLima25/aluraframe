class ProxyFactory {
    static create(object, props, acao){
        return new Proxy(new ListaNegociacoes(), {
            get(target, prop, receiver){
                if(['adiciona', 'esvazia'].includes(prop) && typeof(target[prop])==typeof(Function)){
                    return function() {
                        console.log(`Interceptando ${prop}`);
                        Reflect.apply(target[prop], target, arguments);
                        return acao(target);
                    }
                }
                return Reflect.get(target, prop, receiver);
            }
        })
    }
}