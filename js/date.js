export const time = {
    dates: new Date().getFullYear(),
    el: document.querySelector("footer p"),
    printOut() {
        this.el.innerHTML += `&copy - MIT - ${this.dates}`;
    }
};