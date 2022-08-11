const barra = document.querySelector('.header__derecha');
const boton = document.querySelector('.header__btn');
const overlay = document.querySelector('.overlay');
const body  = document.querySelector('body');

boton.addEventListener('click', () => {
    const visible = barra.getAttribute('data-visible');

    if(visible === 'false') {
        barra.setAttribute('data-visible', true);
        boton.setAttribute('aria-expanded', true);
        overlay.classList.add('activo');
        body.setAttribute('data-scroll', false);
    } else {
        barra.setAttribute('data-visible', false);
        boton.setAttribute('aria-expanded', false);
        overlay.classList.remove('activo');
        body.setAttribute('data-scroll', true);
    }
});
