var laptopHover = document.getElementById('--laptop-hover');
var menuLaptop = document.getElementById('principal-menu-laptop');
var timeout;

laptopHover.addEventListener('mouseover', function() {
  clearTimeout(timeout);
  menuLaptop.style.display = 'block';
});

laptopHover.addEventListener('mouseout', function() {
  timeout = setTimeout(function() {
    menuLaptop.style.display = 'none';
  }, 200); // Cambia este valor al tiempo que desees (en milisegundos)
});

menuLaptop.addEventListener('mouseover', function() {
  clearTimeout(timeout);
});

menuLaptop.addEventListener('mouseout', function() {
  timeout = setTimeout(function() {
    menuLaptop.style.display = 'none';
  }, 200); // Cambia este valor al tiempo que desees (en milisegundos)
});
var pcHover = document.getElementById('--pc-hover');
var menupc = document.getElementById('principal-menu-pc');
var timeout1;

pcHover.addEventListener('mouseover', function() {
  clearTimeout(timeout1);
  menupc.style.display = 'block';
});

pcHover.addEventListener('mouseout', function() {
  timeout1 = setTimeout(function() {
    menupc.style.display = 'none';
  }, 100); // Cambia este valor al tiempo que desees (en milisegundos)
});

menupc.addEventListener('mouseover', function() {
  clearTimeout(timeout1);
});

menupc.addEventListener('mouseout', function() {
  timeout1 = setTimeout(function() {
    menupc.style.display = 'none';
  }, 100); // Cambia este valor al tiempo que desees (en milisegundos)
});


var accesoriosHover = document.getElementById('--accesorios-hover');
var menuaccesorios = document.getElementById('principal-menu-accesorios');
var timeout2;

accesoriosHover.addEventListener('mouseover', function() {
  clearTimeout(timeout2);
  menuaccesorios.style.display = 'block';
});

accesoriosHover.addEventListener('mouseout', function() {
  timeout2 = setTimeout(function() {
    menuaccesorios.style.display = 'none';
  }, 100); // Cambia este valor al tiempo que desees (en milisegundos)
});

menuaccesorios.addEventListener('mouseover', function() {
  clearTimeout(timeout2);
});

menuaccesorios.addEventListener('mouseout', function() {
  timeout2 = setTimeout(function() {
    menuaccesorios.style.display = 'none';
  }, 100); // Cambia este valor al tiempo que desees (en milisegundos)
});
var monitoresHover = document.getElementById('--monitores-hover');
var menumonitores = document.getElementById('principal-menu-monitores');
var timeout3;

monitoresHover.addEventListener('mouseover', function() {
  clearTimeout(timeout3);
  menumonitores.style.display = 'block';
});

monitoresHover.addEventListener('mouseout', function() {
  timeout3 = setTimeout(function() {
    menumonitores.style.display = 'none';
  }, 100); // Cambia este valor al tiempo que desees (en milisegundos)
});

menumonitores.addEventListener('mouseover', function() {
  clearTimeout(timeout3);
});

menumonitores.addEventListener('mouseout', function() {
  timeout3 = setTimeout(function() {
    menumonitores.style.display = 'none';
  }, 100); // Cambia este valor al tiempo que desees (en milisegundos)
});
var impresorasHover = document.getElementById('--impresoras-hover');
var menuimpresoras = document.getElementById('principal-menu-impresoras');
var timeout4;

impresorasHover.addEventListener('mouseover', function() {
  clearTimeout(timeout4);
  menuimpresoras.style.display = 'block';
});

impresorasHover.addEventListener('mouseout', function() {
  timeout4 = setTimeout(function() {
    menuimpresoras.style.display = 'none';
  }, 100); // Cambia este valor al tiempo que desees (en milisegundos)
});

menuimpresoras.addEventListener('mouseover', function() {
  clearTimeout(timeout4);
});

menuimpresoras.addEventListener('mouseout', function() {
  timeout4 = setTimeout(function() {
    menuimpresoras.style.display = 'none';
  }, 100); // Cambia este valor al tiempo que desees (en milisegundos)
});
var zonagamerHover = document.getElementById('--zonagamer-hover');
var menuzonagamer = document.getElementById('principal-menu-zonagamer');
var timeout5;

zonagamerHover.addEventListener('mouseover', function() {
  clearTimeout(timeout5);
  menuzonagamer.style.display = 'block';
});

zonagamerHover.addEventListener('mouseout', function() {
  timeout5 = setTimeout(function() {
    menuzonagamer.style.display = 'none';
  }, 100); // Cambia este valor al tiempo que desees (en milisegundos)
});

menuzonagamer.addEventListener('mouseover', function() {
  clearTimeout(timeout5);
});

menuzonagamer.addEventListener('mouseout', function() {
  timeout5 = setTimeout(function() {
    menuzonagamer.style.display = 'none';
  }, 100); // Cambia este valor al tiempo que desees (en milisegundos)
});
var serviciosHover = document.getElementById('--servicios-hover');
var menuservicios = document.getElementById('principal-menu-servicios');
var timeout6;

serviciosHover.addEventListener('mouseover', function() {
  clearTimeout(timeout6);
  menuservicios.style.display = 'block';
});

serviciosHover.addEventListener('mouseout', function() {
  timeout6 = setTimeout(function() {
    menuservicios.style.display = 'none';
  }, 100); // Cambia este valor al tiempo que desees (en milisegundos)
});

menuservicios.addEventListener('mouseover', function() {
  clearTimeout(timeout6);
});

menuservicios.addEventListener('mouseout', function() {
  timeout6 = setTimeout(function() {
    menuservicios.style.display = 'none';
  }, 100); // Cambia este valor al tiempo que desees (en milisegundos)
});
var SistemavideoHover = document.getElementById('--videoVigilancia-hover');
var menuSistemasvideo = document.getElementById('principal-menu-videoVigilancia');
var timeout7;

SistemavideoHover.addEventListener('mouseover', function() {
  clearTimeout(timeout7);
  menuSistemasvideo.style.display = 'block';
});

SistemavideoHover.addEventListener('mouseout', function() {
  timeout7 = setTimeout(function() {
    menuSistemasvideo.style.display = 'none';
  }, 100); // Cambia este valor al tiempo que desees (en milisegundos)
});

menuSistemasvideo.addEventListener('mouseover', function() {
  clearTimeout(timeout7);
});

menuSistemasvideo.addEventListener('mouseout', function() {
  timeout7 = setTimeout(function() {
    menuSistemasvideo.style.display = 'none';
  }, 100); // Cambia este valor al tiempo que desees (en milisegundos)
});
var redesHover = document.getElementById('--redes-hover');
var menuredes = document.getElementById('principal-menu-redes');
var timeout8;

redesHover.addEventListener('mouseover', function() {
  clearTimeout(timeout8);
  menuredes.style.display = 'block';
});

redesHover.addEventListener('mouseout', function() {
  timeout8 = setTimeout(function() {
    menuredes.style.display = 'none';
  }, 100); // Cambia este valor al tiempo que desees (en milisegundos)
});

menuredes.addEventListener('mouseover', function() {
  clearTimeout(timeout8);
});

menuredes.addEventListener('mouseout', function() {
  timeout8 = setTimeout(function() {
    menuredes.style.display = 'none';
  }, 100); // Cambia este valor al tiempo que desees (en milisegundos)
});
var desarrollodesistemasHover = document.getElementById('--sistemas-hover');
var menudesarrollodesistemas = document.getElementById('principal-menu-sistemas');
var timeout9;

desarrollodesistemasHover.addEventListener('mouseover', function() {
  clearTimeout(timeout9);
  menudesarrollodesistemas.style.display = 'block';
});

desarrollodesistemasHover.addEventListener('mouseout', function() {
  timeout9 = setTimeout(function() {
    menudesarrollodesistemas.style.display = 'none';
  }, 100); // Cambia este valor al tiempo que desees (en milisegundos)
});

menudesarrollodesistemas.addEventListener('mouseover', function() {
  clearTimeout(timeout9);
});

menudesarrollodesistemas.addEventListener('mouseout', function() {
  timeout9 = setTimeout(function() {
    menudesarrollodesistemas.style.display = 'none';
  }, 100); // Cambia este valor al tiempo que desees (en milisegundos)
});

// slider principal
setInterval(nextSlide, 3000); // Cambiar de diapositiva cada 3 segundos
let currentSlide = 0;

  function showSlide(index) {
    const slides = document.querySelector('.slides');
    const slideWidth = document.querySelector('.slide').offsetWidth;
    currentSlide = index;

    slides.style.transform = `translateX(-${slideWidth * currentSlide}px)`;
    updateIndicators();
  }

  function nextSlide() {
    const totalSlides = document.querySelectorAll('.slide').length;
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
  }

  function prevSlide() {
    const totalSlides = document.querySelectorAll('.slide').length;
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
  }

  function goToSlide(index) {
    showSlide(index);
  }

  function updateIndicators() {
    const indicators = document.querySelectorAll('.indicator');
    indicators.forEach((indicator, index) => {
      if (index === currentSlide) {
        indicator.classList.add('active');
      } else {
        indicator.classList.remove('active');
      }
    });
  }
///slider-marcas/
let slider = document.querySelector(".slider");
let images = slider.querySelectorAll(".images img");
let currentImage = 0;

function siguienteImage() {
  currentImage = (currentImage + 1) % images.length;
  images[currentImage].classList.add("active");
  images[currentImage - 1].classList.remove("active");
}

setInterval(nextImage, 1000);

/*************/
///slider-novedades/
const slidernov = document.querySelector('.slidernovedades ul');
const slides3 = document.querySelectorAll('.slidernovedades ul li');
// Duplicar las imágenes al final y al principio
slides3.forEach(slide => {
    const cloneSlide = slide.cloneNode(true);
    slidernov.appendChild(cloneSlide);
});
/*************/

function toggleDropdown() {
  var dropdownContent = document.getElementById("myDropdown");
  dropdownContent.classList.toggle("show");
}

function toggleSubMenu(index) {
  var subMenus = document.getElementsByClassName("sub-content");
  for (var i = 0; i < subMenus.length; i++) {
    if (i !== index) {
      subMenus[i].classList.remove('show');
    }
  }
  
  subMenus[index].classList.toggle("show");
}