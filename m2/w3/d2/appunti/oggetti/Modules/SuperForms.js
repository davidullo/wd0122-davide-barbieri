export default class SuperForms {
    static createHTMLInputElement(_type, _classes) {
        let input = document.createElement('input')
        input.type = _type
        if (_classes != undefined) {
            input.classList.add(_classes)
        }
        return input
    }
}