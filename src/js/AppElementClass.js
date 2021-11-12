class AppElementClass {
    constructor() {
        this.elem = document.querySelector('#app');
        this.elem.style.display = 'none'
    }
    appElementClassInnerHtml(data) {
        this.elem.innerHTML = data;
    }
    appElementClassShow() {
        this.elem.style.display = 'block'
    }
    appElementClassHide() {
        this.elem.style.display = 'none'
    }
    appElementClassAddEventListener(data) {
        Array.from(this.elem.querySelector('button')).forEach((button) => {
            button.addEventListener('click', data);
        });
    }
}

export default AppElementClass