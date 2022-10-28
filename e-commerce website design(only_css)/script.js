// opener manu for small screen device 
$(document).ready(function(){
    $("#header-new-manu").on("click",function(){
        $("#header-manu-opened-area").slideToggle("slow");
    })    
});

var header = document.querySelector("#header-area")
var header_height = header.offsetHeight;
var maniWidth = $(window).outerWidth();
var headerHeight = document.querySelector("main");
var footer = document.querySelector("footer");
var footerheight = footer.offsetHeight;
var main_head = headerHeight.offsetHeight;

if(!$("#header-message").length){
    var offsetValue = 200;
}else{
    var offsetValue = 307;   
    }
$("main").css("top",header_height);
$("footer").css("top",(header_height));
// whiteplace calculation for the main from top
// main-footer
$(window).resize(function(){
    let header = document.querySelector("#header-area")
    let header_height = header.offsetHeight;
    if(!$("#header-message").length){
        var offsetValue = 200
    }else{
       var offsetValue = 307;
    }
$("main").css("top",header_height);
$("footer").css("top",(header_height));
})


// faq section onclick event:
function openClose(event){
    if(event.target.nextElementSibling.style.display==="block"){
        event.target.nextElementSibling.style.display="none";        
    }
    else{
        event.target.nextElementSibling.style.display="block"
    }    
}
$.FormSubmit = function(){
    $("#form-cart").submit();
}


//
//$(function(){
//    $("#bank-card-number").mask("XXXX-XXXX-XXXX-XXXX");
//});
//

$.crediCardSelected  =  function(){
    $("#credit-card-payment").css("display","block");
    $("#mobil-payment").css("display","none");
    $("#bank-card-payment").css("display","none");
};

$.mobileSelected  =  function(){
    $("#credit-card-payment").css("display","none");
    $("#mobil-payment").css("display","block");
    $("#bank-card-payment").css("display","none");
};

$.bankcardSelected  =  function(){
    $("#credit-card-payment").css("display","none");
    $("#mobil-payment").css("display","none");
    $("#bank-card-payment").css("display","block");
};


// Change imgs

$.changeproductImg  =   function(imgpaht){
    var imgePathnew =   "/products/male/";
    var createImg   =   imgePathnew + imgpaht;
    $("#big-img").attr("src",createImg);
}


/* slide style modelling*/
 $(function() {
    let slideElement        =   $(".slide-content-area");
    let slideCreatedElement =   $(".slide-content-area").find(".slide-imgs-area");
    let slideListLenght     =   slideCreatedElement.find(".slide-img").length;
    let domWidth            =   slideElement.outerWidth();
    let totalWidth           =   slideListLenght*domWidth;
    let imgorder            =   0;
    let slipStep            =   0;

    slideCreatedElement.find(".slide-img").width(domWidth).end().width(totalWidth);

    $(window).resize(function(){
        slideElement        =   $(".slide-content-area");
        slideCreatedElement =   $(".slide-content-area").find(".slide-imgs-area");
        slideListLenght     =   slideCreatedElement.find(".slide-img").length;
        domWidth            =   slideElement.outerWidth();
        totalWidth          =   slideListLenght*domWidth;

        slideCreatedElement.find(".slide-img").width(domWidth).end().width(totalWidth).css("margin-left","-"+(imgorder*domWidth)+"px")
    })

    $.changeSlide  =   function(){
        if(imgorder < slideListLenght - 1){
            imgorder++;
            slipStep    =   "-"+(imgorder*domWidth)+"px";
        }else{
            imgorder = 0;
        }

        slideCreatedElement.stop().animate({
            marginLeft:slipStep
        },500,function(){
            slideElement        =   $(".slide-content-area");
            slideCreatedElement =   $(".slide-content-area").find(".slide-imgs-area");
            slideListLenght     =   slideCreatedElement.find(".slide-img").length;
            domWidth            =   slideElement.outerWidth();
            totalWidth          =   slideListLenght*domWidth;
    
            slideCreatedElement.find(".slide-img").width(domWidth).end().width(totalWidth).css("margin-left","-"+(imgorder*domWidth)+"px")
        })

     }

     let moveSlide  =   setInterval("$.changeSlide()",3000);



 })

