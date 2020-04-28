$(document).ready(function () {
    $(".select2").select2({
        dropdownParent: $('.start__form'),
        minimumResultsForSearch: -1
    });
});


window.addEventListener('click', function(e) {
    e = event.target;
    if(!e.classList.contains('b-toBottom')) return;
    scrollBy(0, innerHeight);
});
