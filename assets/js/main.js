
$(document).ready(function(){
    $('#menu-bars').click(()=>{
        console.log('im in');
        $('nav').toggleClass('open');
    })

    $('.nav-link').click(function(){
        console.log($(this.element));
        $('nav').removeClass('open');
        $('.nav-link li').removeClass('active');
        $(this).find('li').addClass('active');

    })
    

})

