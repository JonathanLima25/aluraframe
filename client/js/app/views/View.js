class View {
    constructor(element) {
        this._element = element;
    }

    _template() {
        throw new Error("Metodo _template deve ser implementado!")
    }
    update(model) {
        this._element.innerHTML = this._template(model);
    }
}