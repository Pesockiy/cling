$(document).ready(function () {
    
    $(".scrollToNext").click(function () {
        let top = $(this).closest('section').next().offset().top;
        $('html,body').animate({
            scrollTop: top
        }, 300);
    });

    $(".select2").each(function () {
        $(this).select2({
            minimumResultsForSearch: -1,
            dropdownParent: $(this).closest('.form__group')
        })

    });

});
