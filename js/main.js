$(document).ready(function () {
    $(".select").select2({
        dropdownParent: $('.form__group--i'),
        dropdownCssClass: 'no-search'
    });
    

});


window.addEventListener('click', function(e) {
    e = event.target;
    if(!e.classList.contains('b-toBottom')) return;
    scrollBy(0, innerHeight);
});
