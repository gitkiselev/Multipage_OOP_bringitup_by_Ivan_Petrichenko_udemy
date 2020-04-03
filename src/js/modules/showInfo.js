export default class ShowInfo {
    constructor(triggers) {
        this.btns = document.querySelectorAll(triggers);
    }

    init() {
        this.btns.forEach(btn => {
            btn.addEventListener('click', () => {
                const sib = btn.closest('.module__info-show').nextElementSibling;
                sib.classList.toggle('msg');
                sib.style.marginTop = '20px';
            });
        });
    }
}