export function getDom(s){
    return document.querySelector(s);
}
export function getAllDom(s){
    return document.querySelectorAll(s);
}
export function createElement(name,className){
    let el = document.createElement(name);
    el.className = className;
    return el;
}