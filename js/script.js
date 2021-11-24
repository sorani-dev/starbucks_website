document.addEventListener('DOMContentLoaded',function () {
    const btn = document.getElementById('js-menu-btn')
    const nav = document.getElementById('js-menu')
    const subBtn = document.getElementById('js-sub-btn')
    const subNav = document.getElementById('js-sub-menu')
    const secondaryMenu = document.getElementById('js-secondary-menu')

    function navToggle() {
        btn.classList.toggle('open')
        nav.classList.toggle('hidden')
        document.body.classList.toggle('no-scroll')
        if (btn.classList.contains('open')) {
            btn.setAttribute('aria-label','Close menu')
        } else {
            btn.setAttribute('aria-label','Open menu')
        }
    }

    function subNavToggle() {
        subNav.parentElement.parentElement.classList.toggle('sub-open')
        secondaryMenu.classList.toggle('hidden')
        // nav.classList.toggle('hidden')
        if (nav.getAttribute('aria-hidden') === 'false') {
            nav.setAttribute('aria-hidden','true')
            secondaryMenu.setAttribute('aria-hidden','false')
        } else {
            nav.setAttribute('aria-hidden','false')
            secondaryMenu.setAttribute('aria-hidden','true')
        }
    }

    btn.addEventListener('click',navToggle)
    subNav.addEventListener('click',subNavToggle)
    secondaryMenu.addEventListener('click',subNavToggle)
})