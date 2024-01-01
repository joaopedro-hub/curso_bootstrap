$( document ).ready(function(){
//progress bar
//círcul A
let containerA = document.getElementById("circleA");

let circleA = new ProgressBar.Circle(containerA, {

    color: '#64DAF9',
    strokeWidth: 8,
    duration: 1400,
    from: { color: '#AAA'},
    to: { color: '#65DAF9'},

    step: function(state,circle){

        circle.path.setAttribute('stroke', state.color);
        let value = Math.round(circle.value() * 60);
        circle.setText(value);
    }
});

//círcul B
let containerB = document.getElementById("circleB");

let circleB = new ProgressBar.Circle(containerB, {

    color: '#64DAF9',
    strokeWidth: 8,
    duration: 1600,
    from: { color: '#AAA'},
    to: { color: '#65DAF9'},

    step: function(state,circle){

        circle.path.setAttribute('stroke', state.color);
        let value = Math.round(circle.value() * 254);
        circle.setText(value);
    }
});

//círcul C
let containerC = document.getElementById("circleC");

let circleC = new ProgressBar.Circle(containerC, {

    color: '#64DAF9',
    strokeWidth: 8,
    duration: 1800,
    from: { color: '#AAA'},
    to: { color: '#65DAF9'},

    step: function(state,circle){

        circle.path.setAttribute('stroke', state.color);
        let value = Math.round(circle.value() * 32);
        circle.setText(value);
    }
});

//círcul D
let containerD = document.getElementById("circleD");

let circleD = new ProgressBar.Circle(containerD, {

    color: '#64DAF9',
    strokeWidth: 8,
    duration: 2000,
    from: { color: '#AAA'},
    to: { color: '#65DAF9'},

    step: function(state,circle){

        circle.path.setAttribute('stroke', state.color);
        let value = Math.round(circle.value() * 5243);
        circle.setText(value);
    }
});


// iniciando loaders quando a usuário chegar no elemento
let dataAreaoffset = $('#data-area').offset();
let stop = 0; //para a animação após ela ser executada uma vez

$(window).scroll(function(e){
    let scroll = $(window).scrollTop();//pego a posição do scroll do usuário
    if(scroll > (dataAreaoffset.top - 500) && stop == 0){
        circleA.animate(1.0);
        circleB.animate(1.0);
        circleC.animate(1.0);
        circleD.animate(1.0);

        stop = 1;
    }
});

//Prallax
// setTimeout serve para carregar primeiro as imagens
setTimeout(function(){
    $('#data-area').parallax({imageSrc : 'img/cidadeparallax.png'});
    $('#apply-area').parallax({imageSrc : 'img/pattern.png'});
},200);

/* Filtro do Portfólio */

$('.filter-btn').on('click',function(){
    let type = $(this).attr('id');
    let boxes = $('.project-box');

    $('.main-btn').removeClass('active');
    $(this).addClass('active');

    /* detectar id*/

    if (type == 'dsg-btn') {
        eachBoxes('dsg',boxes);
    }else if(type == 'dev-btn'){
        eachBoxes('dev',boxes);
    }else if(type == 'seo-btn'){
        eachBoxes('seo',boxes);
    }else{
        eachBoxes('all',boxes);
    }

});

    function eachBoxes(type, boxes) {
        if (type == 'all') {
            $(boxes).fadeIn();
        }else{
            $(boxes).each(function() {
                if (!$(this).hasClass(type)) {/*se o botão que foi clicado não representa a classe dessa box*/
                    $(this).fadeOut('slow');/* escondo de maneira lenta*/
                }else{
                    $(this).fadeIn();/* mostro a caixa */
                }
            });
        }
    }

    /* Scroll animado para seções*/

    let navBtn = $('.nav-item');
    
    let bannerSection = $('#mainSlider');
    let aboutSection = $('#about-area');
    let servicesSection = $('#services-area');
    let teamSection = $('#team-area');
    let portfolioSection = $('#portfolio-area');
    let contactSection = $('#contact-area');

    let scrollTo = '';

    $(navBtn).click(function(){
        
        let btnId = $(this).attr('id');

        //console.log(btnId);
        if(btnId == 'about-menu'){
            scrollTo = aboutSection;
        }else if(btnId == 'services-menu'){
            scrollTo = servicesSection;
        }else if(btnId == 'team-menu'){
            scrollTo = teamSection;
        }else if(btnId == 'portfolio-menu'){
            scrollTo = portfolioSection;
        }else if(btnId == 'contato-menu'){
            scrollTo = contactSection;
        }else{
            scrollTo = bannerSection;
        }

        $([document.documentElement, document.body]).animate({
            scrollTop: $(scrollTo).offset().top - 70
        }, 1500);
    });

});