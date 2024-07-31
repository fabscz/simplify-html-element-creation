function createHtmlElm(properties) {

    var elm = document.createElement(properties.tag);

    if (properties.appendTo !== undefined) {
        properties.appendTo.appendChild(elm);
    }
    if (properties.innerHTML !== undefined) {
        elm.innerHTML = properties.innerHTML;
    }
    if (properties.id !== undefined) {
        elm.id = properties.id;
    }
    if (properties.class !== undefined) {
        elm.className = properties.class;
    }
    if (properties.click !== undefined) {
        elm.onclick = properties.click;
    }
    if (properties.bg !== undefined) {
        elm.style.background = properties.bg;
    }

    

    return elm;



}