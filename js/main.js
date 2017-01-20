//Gives out the scrollToDiv() click function
const headBtn = document.querySelectorAll('.headBtn');
for(let i = 0, len = headBtn.length; i < len; i++) {
    headBtn[i].addEventListener('click',scrollToDiv);
}
//Scroll to div function
function scrollToDiv() {
  const titleText = this.innerHTML.toLowerCase(),
        el = document.getElementsByClassName(titleText)[0];

  const home = document.getElementsByClassName('home')[0];
  if(el == home) {
    window.scroll(0,0);//Scrolls to top
    return;
  }

  const header = document.getElementsByClassName('header')[0],
        bodyCount = document.body.children,
        arr = [];
  for(let i = 0, len = bodyCount.length; i < len; i++) {
    if(bodyCount[i].offsetHeight == header.offsetHeight){
      continue;
    } else {
      arr.push(bodyCount[i].offsetHeight);
    }
  }
  for(let i = 0, len = arr.length; i < len; i++) {
    if(el.offsetHeight == arr[i]) {
      const pos = arr.indexOf(el.offsetHeight);
      arr.splice(pos);
    }
  }
  const value = arr.reduce(
    function(a,b) {
      return a + b;
    }
  );
  const winOffY = Math.ceil(window.pageYOffset / 10) * 10;
  let divOffY = Math.ceil(value / 10) * 10;
  function scrollAnime() {
    if(winOffY > divOffY) {//scroll up
      divOffY += 10;
      document.body.scrollTop -= 10;
      setTimeout(scrollAnime,1);
    } else if(winOffY < divOffY) {//scroll down
      divOffY -= 10;
      document.body.scrollTop += 10;
      setTimeout(scrollAnime,1);
    } else if(winOffY == divOffY) {//stops the scrolling
      return;
    }
  }
  scrollAnime();
}





//Fade in effect
const fadeIn = document.querySelectorAll('.fadeIn');
if(window.innerWidth <= 490) {
  for(let i = 0, len = fadeIn.length; i < len; i++) {
    fadeIn[i].classList.remove('fadeIn');
  }
} else {
  window.addEventListener('scroll',fadeInEffect);
  function fadeInEffect() {
    for(let i = 0, len = fadeIn.length; i < len; i++) {
      const pos = window.pageYOffset + window.innerHeight;
      const imagePos = (fadeIn[i].offsetHeight / 2) + fadeIn[i].offsetTop;
      if(pos > imagePos) {
        fadeIn[i].classList.add('fadeInActive');
      }
    }
  }
  fadeInEffect();
}





//Header scroll effect
window.addEventListener('scroll',headerScroll);
function headerScroll() {
  const header = document.getElementsByClassName('header')[0],
        flip = document.getElementsByClassName('flip')[0],
        cakes = document.getElementsByClassName('cakes')[0];

  if(window.pageYOffset >= flip.offsetHeight) {
    cakes.style.paddingTop = header.offsetHeight + 30 + 'px';
    header.classList.add('headerActive');
  } else {
    cakes.style.paddingTop = '30px';
    header.classList.remove('headerActive');
  }
}





//Distribution of images
const flipBoxFront = document.querySelectorAll('.flipBoxFront'),
      flipBoxBack = document.querySelectorAll('.flipBoxBack');
for(let i = 0; i < flipBoxFront.length; i++) {
  flipBoxFront[i].style.backgroundImage = 'url(images/turn/flip'+[i + 1]+'.jpg)';
  flipBoxBack[i].style.backgroundImage = 'url(images/turn/back'+[i + 1]+'.jpg)';
}
//Flip effect function
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





//Googlemaps
function myMap() {
    var lang = new google.maps.LatLng(59.324644, 18.070934);
    var mapOptions = {
        center: lang,
        zoom: 14,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scrollwheel:  false,
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
