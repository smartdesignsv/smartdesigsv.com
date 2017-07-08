//    _____                      _     _____            _                _______      __
//   / ____|                    | |   |  __ \          (_)              / ____\ \    / /
//  | (___  _ __ ___   __ _ _ __| |_  | |  | | ___  ___ _  __ _ _ __   | (___  \ \  / / 
//   \___ \| '_ ` _ \ / _` | '__| __| | |  | |/ _ \/ __| |/ _` | '_ \   \___ \  \ \/ /  
//   ____) | | | | | | (_| | |  | |_  | |__| |  __/\__ \ | (_| | | | |  ____) |  \  /   
//  |_____/|_| |_| |_|\__,_|_|   \__| |_____/ \___||___/_|\__, |_| |_| |_____/    \/    
//                                                         __/ |                        
//                                                        |___/                         
// 
/**
*			  www.smartdesignsv.com
*   		@Derechos de Autor 2017
*   		Diseño y Programacion por Smart Design SV
*       	Descripcion: Pagina Web Oficial de la empresa Smart Design SV
* 
*/
$(function () {
  var all_classes = "";
  var timer = undefined;
  $.each($('li', '.social-class'), function (index, element) {
    all_classes += " btn-" + $(element).data("code");
  });
  $('li', '.social-class').mouseenter(function () {
    var icon_name = $(this).data("code");
    if ($(this).data("icon")) {
      icon_name = $(this).data("icon");
    }
    var icon = "<i class='fa fa-" + icon_name + "'></i>";
    $('.btn-social', '.social-sizes').html(icon + "Sign in with " + $(this).data("name"));
    $('.btn-social-icon', '.social-sizes').html(icon);
    $('.btn', '.social-sizes').removeClass(all_classes);
    $('.btn', '.social-sizes').addClass("btn-" + $(this).data('code'));
  });
  $($('li', '.social-class')[Math.floor($('li', '.social-class').length * Math.random())]).mouseenter();
});
