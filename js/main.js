const elHeader = document.querySelector('.site-nav')
const elNavToggler = elHeader.querySelector('.js-header-btn')

elNavToggler.addEventListener('click', function() {
  elHeader.classList.toggle('site-nav--open')
})