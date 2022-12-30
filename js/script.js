const swiper = new Swiper('.swiper', {

  autoplay: {
    delay: 5000,
  },
  speed: 2000,
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.pag',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});




document.querySelectorAll('.accordion-control').forEach((item) =>
  item.addEventListener('click', () => {
    const parent = item.parentNode;
    if (parent.classList.contains('open-acc')) {
      parent.classList.remove('open-acc');
    } else {
      document.querySelectorAll('.accordion-control').forEach((child) => child.classList.remove('open-acc'))


      parent.classList.add('open-acc');
    }
  })
)


$(document).ready(function () {
  $('.slider').slick({
    slidesToShow: 2,
    dots: true,
    slidesToScroll: 1,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 4500,
        settings: {
          slidesToShow: 2,
          centerMode: true,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 2100,
        settings: {
          slidesToShow: 2,
          centerMode: true,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 2,
          centerMode: true,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 350,
        setting: {

        }
      }

    ]
  });
});





//  карта

google.maps.event.addDomListener(window, 'load', init);

function init() {

  let mapOptions = {
    // How zoomed in you want the map to start at (always required)
    zoom: 10,

    // The latitude and longitude to center the map (always required)
    center: new google.maps.LatLng(40.9879366, 28.7669517, 13), // New York

    // How you would like to style the map. 
    // This is where you would paste any style found on Snazzy Maps.
    styles: [{ "featureType": "all", "elementType": "geometry.fill", "stylers": [{ "visibility": "on" }] }, { "featureType": "administrative", "elementType": "all", "stylers": [{ "color": "#f2f2f2" }] }, { "featureType": "administrative", "elementType": "labels.text.fill", "stylers": [{ "color": "#686868" }, { "visibility": "on" }] }, { "featureType": "landscape", "elementType": "all", "stylers": [{ "color": "#f2f2f2" }] }, { "featureType": "poi", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "poi.park", "elementType": "all", "stylers": [{ "visibility": "on" }] }, { "featureType": "poi.park", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "road", "elementType": "all", "stylers": [{ "saturation": -100 }, { "lightness": 45 }] }, { "featureType": "road.highway", "elementType": "all", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "lightness": "-22" }, { "visibility": "on" }, { "color": "#b4b4b4" }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "saturation": "-51" }, { "lightness": "11" }] }, { "featureType": "road.highway", "elementType": "labels.text", "stylers": [{ "saturation": "3" }, { "lightness": "-56" }, { "visibility": "simplified" }] }, { "featureType": "road.highway", "elementType": "labels.text.fill", "stylers": [{ "lightness": "-52" }, { "color": "#9094a0" }, { "visibility": "simplified" }] }, { "featureType": "road.highway", "elementType": "labels.text.stroke", "stylers": [{ "weight": "6.13" }] }, { "featureType": "road.highway", "elementType": "labels.icon", "stylers": [{ "weight": "1.24" }, { "saturation": "-100" }, { "lightness": "-10" }, { "gamma": "0.94" }, { "visibility": "off" }] }, { "featureType": "road.highway.controlled_access", "elementType": "geometry.fill", "stylers": [{ "visibility": "on" }, { "color": "#b4b4b4" }, { "weight": "5.40" }, { "lightness": "7" }] }, { "featureType": "road.highway.controlled_access", "elementType": "labels.text", "stylers": [{ "visibility": "simplified" }, { "color": "#231f1f" }] }, { "featureType": "road.highway.controlled_access", "elementType": "labels.text.fill", "stylers": [{ "visibility": "simplified" }, { "color": "#595151" }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "lightness": "-16" }] }, { "featureType": "road.arterial", "elementType": "geometry.fill", "stylers": [{ "visibility": "on" }, { "color": "#d7d7d7" }] }, { "featureType": "road.arterial", "elementType": "labels.text", "stylers": [{ "color": "#282626" }, { "visibility": "simplified" }] }, { "featureType": "road.arterial", "elementType": "labels.text.fill", "stylers": [{ "saturation": "-41" }, { "lightness": "-41" }, { "color": "#2a4592" }, { "visibility": "simplified" }] }, { "featureType": "road.arterial", "elementType": "labels.text.stroke", "stylers": [{ "weight": "1.10" }, { "color": "#ffffff" }] }, { "featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{ "visibility": "on" }] }, { "featureType": "road.local", "elementType": "geometry.fill", "stylers": [{ "lightness": "-16" }, { "weight": "0.72" }] }, { "featureType": "road.local", "elementType": "labels.text.fill", "stylers": [{ "lightness": "-37" }, { "color": "#2a4592" }] }, { "featureType": "transit", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit.line", "elementType": "geometry.fill", "stylers": [{ "visibility": "off" }, { "color": "#eeed6a" }] }, { "featureType": "transit.line", "elementType": "geometry.stroke", "stylers": [{ "visibility": "off" }, { "color": "#0a0808" }] }, { "featureType": "water", "elementType": "all", "stylers": [{ "color": "#b7e4f4" }, { "visibility": "on" }] }]
  };

  // Get the HTML DOM element that will contain your map 
  // We are using a div with id="map" seen below in the <body>
  let mapElement = document.querySelector('.map');

  // Create the Google Map using our element and options defined above
  let map = new google.maps.Map(mapElement, mapOptions);

  // Let's also add a marker while we're at it
  let marker = new google.maps.Marker({
    position: new google.maps.LatLng(41.0780118, 28.7966354, 17),
    map: map,
    title: 'Snazzy!'
  });
}


// ______________________________________________________--

"use strict"


if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  document.body.classList.add('touch');

  let menuArrows = document.querySelectorAll('.menu-arrow');
  if (menuArrows.length > 0) {
    for (let index = 0; index < menuArrows.length; index++) {
      let menuArrow = menuArrows[index];
      menuArrow.addEventListener('click', function (e) {
        menuArrow.parentElement.classList.toggle('active-arrow');
      });
    }
  }

} else {
  document.body.classList.add('pc');
}

// menu burger

const iconMenu = document.querySelector('.menu-icon');
const menuBody = document.querySelector('.menu-body');
if (iconMenu) {

  iconMenu.addEventListener('click', function (e) {
    document.body.classList.toggle('lock');
    iconMenu.classList.toggle('active');
    menuBody.classList.toggle('active');
  });
}




// плавный скролл

const menuLinks = document.querySelectorAll('.menu-link[data-goto]');
if (menuLinks.length > 0) {
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", onMenuLinkClick);
  });

  function onMenuLinkClick(e) {
    const menuLink = e.target;
    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight;


      if (iconMenu.classList.contains('active')) {
        document.body.classList.remove('lock');
        iconMenu.classList.remove('active');
        menuBody.classList.remove('active');
      }

      window.scroll({
        top: gotoBlockValue,
        behavior: "smooth"
      });
      e.preventDefault();
    }
  }
}

// ____________________________________________________________________________


// popup


const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');

let unlock = true;

const timeout = 800;

if (popupLinks.length > 0) {
    for ( let index = 0; index < popupLinks.length; index++) {
        const popupLink = popupLinks[index];
        popupLink.addEventListener('click', function (e) {
            const popupName = popupLink.getAttribute('href').replace('#', '');
            const currentPopup = document.getElementById(popupName);
            popupOpen(currentPopup);
            e.preventDefault();
        });
    }
}


const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
    for (let index = 0; index < popupCloseIcon.length; index++ ) {
        const el = popupCloseIcon[index];
        el.addEventListener('click', function (e) {
            popupClose(el.closest('.popup-container'));
            e.preventDefault();
        });
    }
}

function popupOpen(currentPopup) {
    if (currentPopup && unlock) {
        const popupActive = document.querySelector('.popup-container.popup-active');
        if (popupActive) {
            popupClose(popupActive, false);
            
            }else {
                bodyLock();
        }
        currentPopup.classList.add('popup-active');
        currentPopup.addEventListener('click', function (e) {
            if (!e.target.closest('.popup__content')) {
                popupClose(e.target.closest('.popup-container'));
            }
              
        });
    }
}
function popupClose(popupActive, doUnlock = true) {
    if (unlock) {-
        popupActive.classList.remove('popup-active');
        if (doUnlock) {
            bodyUnLock();
        }
    }
}

function bodyLock () {
    const lockPaddingValue = window.innerWidth - document.querySelector('.site-container').offsetWidth + 'px';

    if (lockPadding.length > 0) {
        for (let index = 0; index < lockPadding.length; index++) {
            const el = lockPadding[index];
            el.style.paddingRight = lockPaddingValue;
    }
    
    }
    body.style.paddingRight = lockPaddingValue;
    body.classList.add('lock');

    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);

}

function bodyUnLock() {
    setTimeout(function () {
        for ( let index = 0; index < lockPadding.length; index++) {
            const el = lockPadding[index];
            el.style.paddingRight = '0px';
        }
        body.style.paddingRight = '0px';
        body.classList.remove('lock');
    }, timeout);

    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout)
}

// валидация формы

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    form.addEventListener('submit', formSend);

    async function formSend(e) {
      e.preventDefault();
      let error = formValidate(form);

      let formData = new FormData(form);
      // formData.append('image', formImage.files[0]);

      if (error===0) {
        form.classList.add('_sending')
        let response = await fetch('sendmail.php', {
          method: 'POST',
          body: formData
        });
        if (response.ok) {
          let result = await response.json();
          alert(result.message);
          formPreviem.innerHTML = '';
          form.reset();
          form.classList.remove('_sending');
        } else {
          alert('Ошибка при отправке');
          form.classList.remove('_sending');
        }
      } else {
        alert('Заполните обязательные поля')
      }

    }

    function formValidate(form) {
      let error = 0;
      let formReq = document.querySelectorAll('._req');


      for (let index = 0; index < formReq.length; index++) {
        const input = formReq[index];
        formRemoveError(input);

        if (input.classList.contains('_email')) {
          if (emailTest(input)) {
            formAddError(input);
            error++;
          }
        } else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
          formAddError(input);
          error++;
        } else {
          if (input.value === '') {
            formAddError(input);
            error++;
          }
        }

      }

      return error;

    }


    function formAddError(input) {
      input.parentElement.classList.add('_error');
      input.classList.add('_error');
    }
    function formRemoveError(input) {
      input.parentElement.classList.remove('_error');
      input.classList.remove('_error');
    }
    function emailTest(imput) {
      return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(imput.value);
    }
});