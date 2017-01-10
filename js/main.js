const flipBoxFront = document.querySelectorAll('.flipBoxFront');
const flipBoxBack = document.querySelectorAll('.flipBoxBack');
for(let i = 0; i < flipBoxFront.length; i++) {
  //flipBoxFront[i].style.backgroundImage = 'url(images/turn/flip'+[i + 1]+'.jpg)';
  //flipBoxBack[i].style.backgroundImage = 'url(images/turn/back'+[i + 1]+'.jpg)';
}



const flipBox = document.querySelectorAll('.flipBox');
for(let i = 0, length = flipBox.length; i < length; i++) {
  flipBox[i].addEventListener('mouseenter', function(){
    const child = this.children;
    if(child[0].style.transform == 'rotateY(-180deg)') {
      child[0].style.transform = 'rotateY(0deg)';
      child[1].style.transform = 'rotateY(180deg)';
    } else {
      child[0].style.transform = 'rotateY(-180deg)';
      child[1].style.transform = 'rotateY(0deg)';
    }
  });
}



// GOOGLE MAPS
function myMap() {
    var lang = new google.maps.LatLng(59.324644, 18.070934);
    var mapOptions = {
        center: lang,
        zoom: 14,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#343031"},{"lightness":"-44"}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"administrative","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"administrative.country","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"administrative.country","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"administrative.country","elementType":"labels.text","stylers":[{"visibility":"simplified"}]},{"featureType":"administrative.province","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"administrative.locality","elementType":"all","stylers":[{"visibility":"simplified"},{"saturation":"-100"},{"lightness":"30"}]},{"featureType":"administrative.neighborhood","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"administrative.land_parcel","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"all","stylers":[{"visibility":"simplified"},{"gamma":"0.00"},{"lightness":"74"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#544e50"},{"lightness":"-45"}]},{"featureType":"landscape.man_made","elementType":"all","stylers":[{"lightness":"3"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#99664f"},{"lightness":"-16"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#413c3e"},{"lightness":"-66"}]}]
    };
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    var marker = new google.maps.Marker({
        position: lang,
        map: map,
        title: 'Cake!',
        icon: 'images/cake_marker.png'
    });
}
