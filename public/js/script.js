function init(){window.addEventListener("scroll",function(){var a=window.pageYOffset||document.documentElement.scrollTop,b=300;a>b?($("#navbar").addClass("smaller"),$("#title").text("Marco Oliveira")):$("#navbar").hasClass("smaller")&&($("#navbar").removeClass("smaller"),$("#title").text("Marco Andre De Oliveira"))}),$(".modal-link").on("click",function(){$("#modal").css("visibility","visible")}),$("#modal").on("click",function(){$("#modal").css("visibility","hidden")}),$("#modal div").on("click",function(a){a.stopPropagation()}),$(document).keyup(function(a){27==a.keyCode&&$("#modal").css("visibility","hidden")}),$("nav a").click(function(a){a.preventDefault();var b=0,c="intro"===this.hash.substr(1)?120:64;b=$(this.hash).offset().top>$(document).height()-$(window).height()?$(document).height()-$(window).height():$(this.hash).offset().top,b-=c,$("html,body").animate({scrollTop:b},1e3,"swing")})}window.onload=init();