class LoaderClass {
    constructor() {
        this.elem = document.createElement('div');
        this.elem.setAttribute('id', 'loader');
        this.elem.style.display = 'none';
        document.querySelector('#app').append(this.elem);
    }
    loaderClassInnerHtml(data) {
        this.elem.innerHTML = data;
    }
    loaderClassShow() {
        this.elem.style.display = 'block';
    }
    loaderClassHide() {
        this.elem.style.display = 'none';
    }
}

export default LoaderClass;