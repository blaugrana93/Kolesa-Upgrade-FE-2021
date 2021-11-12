class ErrorClass {
    constructor() {
        this.elem = document.createElement('div');
        this.elem.setAttribute('id', 'error');
        this.elem.style.display = 'none';
        document.querySelector('#app').append(this.elem);
    }
    errorClassInnerHtml(data) {
        this.elem.innerHTML = data;
    }
    errorClassShow() {
        this.elem.style.display = 'block';
    }
    errorClassHide() {
        this.elem.style.display = 'none';
    }
}

export default ErrorClass;