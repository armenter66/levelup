function accord() {
    const headElems = document.querySelectorAll('.footer__headingElem');

    headElems.forEach((elem)=> {
        elem.addEventListener('click', function(){
            let parentElem = this.parentNode;
            let contentBlock = parentElem.querySelector('.footer__descElem');
            let parentMoreBtn = parentElem.querySelector('.footer__moreSvg');
            let parentLessBtn = parentElem.querySelector('.footer__lessSvg')

            if (contentBlock.classList.contains('active')) {
                    parentMoreBtn.style.display = 'block';
                    parentLessBtn.style.display = 'none';
                contentBlock.classList.remove('active');
            } else {
                    parentLessBtn.style.display = 'block';
                    parentMoreBtn.style.display = 'none';
                contentBlock.classList.add('active');
            }
        })
    });
}; accord();


function Modals() {
    this.btns = document.querySelector('.js-modal');
    this.modalsOverlay = document.querySelector('.overlaymodal');
    this.closeBtn = document.querySelector('.modal__close');

    this.getPopUp();

}

Modals.prototype.getPopUp = function() {
    this.btns.addEventListener('click', (el)=>{
        el.preventDefault();
        this.modalsOverlay.classList.add('add');
    })

    this.closeBtn.addEventListener('click', (cl)=>{
        cl.preventDefault();
        this.modalsOverlay.classList.remove('add');
    })
}
const modal = new Modals();

function HamburgerMenu() {
    this.hamburgerBtn = document.querySelector('.hamburger');
    this.menuBlock = document.querySelector('.menu');
    this.menuCloseBtn = document.querySelector('.menu__close'); 

    this.clickHamb();
    this.closeMenu();
}

HamburgerMenu.prototype.clickHamb = function() {
    this.hamburgerBtn.addEventListener('click', ()=>{
        this.menuBlock.classList.toggle('active');
    })
}

HamburgerMenu.prototype.closeMenu = function() {
    this.menuCloseBtn.addEventListener('click', ()=>{
        this.menuBlock.classList.remove('active');
    })
}

const hamburger = new HamburgerMenu();