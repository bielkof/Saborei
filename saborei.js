

$(document).ready(function () {

    //ancora barra de navegação
    $(".scroll").click(function (event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000);
    });

    //slide automatico cardapio
    $("#imagens-cardapio > div:gt(0)").hide();

    setInterval(function () {
        $('#imagens-cardapio > div:first')
            .fadeOut(0)
            .next()
            .fadeIn(1000)
            .end()
            .appendTo('#imagens-cardapio');

    }, 3000); //FIM SLIDE--

    $("#img2, #img3, #img4").hide();
    $("#bt1").click(function () {
        $("#img2").hide();
        $("#img3").hide()
        $("#img4").hide()
        $("#img1").show();
    });
    $("#bt2").click(function () {
        $("#img1").hide();
        $("#img3").hide()
        $("#img4").hide()
        $("#img2").show();
    });
    $("#bt3").click(function () {
        $("#img1").hide();
        $("#img2").hide()
        $("#img4").hide()
        $("#img3").show();
    });
    $("#bt4").click(function () {
        $("#img1").hide();
        $("#img2").hide()
        $("#img3").hide()
        $("#img4").show();
    });


    //esconde botao ancora 
    $('#botao-top').hide();


    $(window).scroll(function () {
        var topo = $(window).scrollTop();

        //fade do navbar
        if (topo > 320) {
            $('#navbar').fadeOut('slow');
        } else {
            $('#navbar').fadeIn('slow');
        }
        //fade do texto principal
        if (topo > 95) {
            $('#texto-saborei').hide();
        } else {
            $('#texto-saborei').show();
        }

        //mostra/esconde botao ancora
        if (topo > 320) {
            $('#botao-top').fadeIn('fast');
        } else {
            $('#botao-top').fadeOut('fast');
        }
    }); //FIM WINDOW.SCROLL--

});
