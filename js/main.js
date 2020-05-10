$(document).ready(function () {
    heighttoScroll = window.innerHeight
    $(".scrollToNext").click(function () {
        let top = $(this).closest('section').next().offset().top;
        $('html,body').animate({scrollTop: top}, 900);
    });

    $(".select2").each(function () {
        $(this).select2({
            minimumResultsForSearch: -1,
            closeOnSelect: false,
            selectOnClose: true,
            dropdownParent: $(this).closest('.form__group')
        })
            
});
    $(".select2").on('select2:select', function (e) { 
    console.log('select event');
});
});
