
const onEvent = (id, event, fn) => {
    const el = document.getElementById(id);
    if (el) {
        el.addEventListener(event, fn, false);
    }
}; 

const getElement = (id) => {
    const el = document.getElementById(id);
    return el;
}

const getValue = (id) => {
    const el = document.getElementById(id).value;
    return el;
}

const setValue = (id, valor) => {
    document.getElementById(id).innerHTML = valor;
}

export {onEvent, getValue, setValue, getElement};