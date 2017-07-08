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

var map;
    $(document).ready(function(){
      var map = new GMaps({
        el: '#map',
        lat: 13.344765,
        lng: -88.444772
      });
      // Geolozalizion API de Google Map
      // GMaps.geolocate({
      //   success: function(position){
      //     map.setCenter(position.coords.latitude, position.coords.longitude);
      //   },
      //   error: function(error){
      //     //alert('Fallido al localizarte: '+error.message);
      //     console.log('Ha fallado al localizarte, ya que no quieres ser encontrado :)');
      //   },
      //   not_supported: function(){
      //     alert("Tu Navegador no soporta la geolocslizacion");
      //     console.log('El Navegador no soporta la geolocalicion @smart design sv');
      //   },
      //   always: function(){
      //     //alert("Listo!");
      //     console.log('La localización fue exitosa!');
      //   }
      // });
    	//locations request
      	map.getElevations({
        locations : [[13.34476, -88.44477]],
          callback : function (result, status){
          if (status == google.maps.ElevationStatus.OK) {
            for (var i in result){
             map.addMarker({
              lat: result[i].location.lat(),
              lng: result[i].location.lng(),
              title: 'Empresa Smart Design SV',
              infoWindow: {
                content: '<p>La Elevacion es '+result[i].elevation+' en metros</p>'
              }
            });
           }
          }
        }
      });
    });