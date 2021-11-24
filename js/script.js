document.addEventListener('DOMContentLoaded',function () {
    const btn = document.getElementById('js-menu-btn')
    const nav = document.getElementById('js-menu')

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

    btn.addEventListener('click',navToggle)
})