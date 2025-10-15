document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;
  const totalSlides = slides.length;

  const imageUrls = [
    "img/fondo.jpg",
    "img/2fondo.jpg",
    "img/3fondo.jpg",
    "img/4fondo.png",
  ];

  imageUrls.forEach((src) => {
    const img = new Image();
    img.src = src;
  });

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
  }

  setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
  }, 6000);

  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });
});

window.addEventListener("scroll", function () {
  const nav = document.getElementById("navbar");
  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

/* Función para toggle de cards del hospital */
function toggleCard(card) {
  if (card.classList.contains('expanded')) {
    card.classList.remove('expanded');
  } else {
    document.querySelectorAll('.hospital-card').forEach(function(c) {
      c.classList.remove('expanded');
    });
    card.classList.add('expanded');
  }
}

/* ========== FUNCIONES POPUP TURÍSTICO ========== */

function showTouristInfo() {
  let photos = [
    "img/restaurantes/canoPy1.jpg",
    "img/restaurantes/canoPy2.jpg",
    "img/restaurantes/canoPy3.jpg",
  ];
  let current = 0;

  Swal.fire({
    showConfirmButton: false,
    width: 1200,
    heightAuto: false,
    customClass: {
      popup: "popup-grande",
    },
    html: `
      <div style="position:absolute; top:10px; left:10px;">
        <button class="back-arrow" id="goBack">←</button>
      </div>
      <div class="popup-container">
        <div class="popup-left">
          <img id="popup-img" src="${photos[0]}" alt="Fotos">
          <div class="popup-arrows">
            <button class="arrow-btn" id="prevPhoto">←</button>
            <button class="arrow-btn" id="nextPhoto">→</button>
          </div>
        </div>

        <div class="popup-right">
          <p>
            <span>Canopy Las Ardillas</span> It's one of the most exciting places in Timbío. Here, you can feel the adrenaline as you glide between the trees, surrounded by nature and beautiful landscapes.
          </p>

          <div class="popup-bottom">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52320.641553686546!2d-76.71242381651777!3d2.3944989816554076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e301d290fa419c3%3A0xb1863df394e91369!2sCanopy%20Las%20Ardillas!5e1!3m2!1ses-419!2sco!4v1760520781242!5m2!1ses-419!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

            <button class="popup-btn" onclick="window.open('https://www.canopylasardillas.com/', '_blank')">
              Official Page
            </button>
          </div>
        </div>
      </div>
    `,
    didOpen: () => {
      setupPhotoNavigation(photos);
    }
  });
}

function showTouristInfo2() {
  let photos = [
    "img/restaurantes/iglesia_san_pedro_fuera.jpg",
    "img/restaurantes/iglesia_san_pedro_dentro.jpg",
  ];

  Swal.fire({
    showConfirmButton: false,
    width: 1200,
    heightAuto: false,
    customClass: {
      popup: "popup-grande",
    },
    html: `
      <div style="position:absolute; top:10px; left:10px;">
        <button class="back-arrow" id="goBack">←</button>
      </div>
      <div class="popup-container">
        <div class="popup-left">
          <img id="popup-img" src="${photos[0]}" alt="Fotos">
          <div class="popup-arrows">
            <button class="arrow-btn" id="prevPhoto">←</button>
            <button class="arrow-btn" id="nextPhoto">→</button>
          </div>
        </div>

        <div class="popup-right">
          <p>
            <span>La Iglesia San Pedro Apóstol </span> Timbío is one of the most outstanding religious and heritage symbols of the municipality. It was built in a republican style by Colonel and priest Adolfo Agnelio Sánchez in 1853.
          </p>

          <div class="popup-bottom">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3270.143099574402!2d-76.68263110000001!3d2.350943999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e2fe3014ad308bb%3A0x800541ed1265bd55!2sIglesia%20San%20Pedro!5e1!3m2!1ses-419!2sco!4v1760520854130!5m2!1ses-419!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

            <button class="popup-btn" onclick="window.open('https://timbioarquitectonico.blogspot.com/p/iglesias.html', '_blank')">
              Official Page
            </button>
          </div>
        </div>
      </div>
    `,
    didOpen: () => {
      setupPhotoNavigation(photos);
    }
  });
}

function showTouristInfo3() {
  let photos = [
    "img/restaurantes/Main_park.jpg",
    "img/restaurantes/Main_paark.jpg",
  ];

  Swal.fire({
    showConfirmButton: false,
    width: 1200,
    heightAuto: false,
    customClass: {
      popup: "popup-grande",
    },
    html: `
      <div style="position:absolute; top:10px; left:10px;">
        <button class="back-arrow" id="goBack">←</button>
      </div>
      <div class="popup-container">
        <div class="popup-left">
          <img id="popup-img" src="${photos[0]}" alt="Fotos">
          <div class="popup-arrows">
            <button class="arrow-btn" id="prevPhoto">←</button>
            <button class="arrow-btn" id="nextPhoto">→</button>
          </div>
        </div>

        <div class="popup-right">
          <p>
            A quiet <span> park </span> in Timbío, ideal for relaxing and enjoying the town's natural surroundings.
          </p>

          <div class="popup-bottom">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3270.1387019961135!2d-76.68617199999997!3d2.3528199999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e2fe300928e7eb7%3A0x603ee983d297307d!2sParque!5e1!3m2!1ses-419!2sco!4v1760520600717!5m2!1ses-419!2sco" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    `,
    didOpen: () => {
      setupPhotoNavigation(photos);
    }
  });
}

function showTouristInfo4() {
  let photos = [
    "img/restaurantes/parqueBoyaca.jpg",
    "img/restaurantes/parqueBoyacaaa.jpg",
  ];

  Swal.fire({
    showConfirmButton: false,
    width: 1200,
    heightAuto: false,
    customClass: {
      popup: "popup-grande",
    },
    html: `
      <div style="position:absolute; top:10px; left:10px;">
        <button class="back-arrow" id="goBack">←</button>
      </div>
      <div class="popup-container">
        <div class="popup-left">
          <img id="popup-img" src="${photos[0]}" alt="Fotos">
          <div class="popup-arrows">
            <button class="arrow-btn" id="prevPhoto">←</button>
            <button class="arrow-btn" id="nextPhoto">→</button>
          </div>
        </div>

        <div class="popup-right">
          <p>
            <span>The Boyacá Park of Timbío</span> is a place full of history and tradition. It's an ideal spot to spend time with family, enjoy the fresh air, and admire the natural surroundings that characterize the town.
          </p>

          <div class="popup-bottom">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3270.1431145707998!2d-76.68298150000001!3d2.3509375999999964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e2fe3013622a171%3A0x331b93f985437e84!2sParque%20Boyac%C3%A1!5e1!3m2!1ses-419!2sco!4v1760521018546!5m2!1ses-419!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <button class="popup-btn" onclick="window.open('https://mapcarta.com/es/W197226249', '_blank')">
              Official Page
            </button>
          </div>
        </div>
      </div>
    `,
    didOpen: () => {
      setupPhotoNavigation(photos);
    }
  });
}

function showTouristInfo5() {
  let photos = [
    "img/restaurantes/tunurco.jpg",
    "img/restaurantes/turnuco2.jpg",
    "img/restaurantes/turnuco3.jpg",
  ];

  Swal.fire({
    showConfirmButton: false,
    width: 1200,
    heightAuto: false,
    customClass: {
      popup: "popup-grande",
    },
    html: `
      <div style="position:absolute; top:10px; left:10px;">
        <button class="back-arrow" id="goBack">←</button>
      </div>
      <div class="popup-container">
        <div class="popup-left">
          <img id="popup-img" src="${photos[0]}" alt="Fotos">
          <div class="popup-arrows">
            <button class="arrow-btn" id="prevPhoto">←</button>
            <button class="arrow-btn" id="nextPhoto">→</button>
          </div>
        </div>

        <div class="popup-right">
          <p>
            <span>The Tunurco waterfall</span>, located in Timbío, is a magical place surrounded by nature. Its crystal-clear waters and peaceful environment make it a perfect destination for those seeking to relax and connect with the town's natural landscape.
          </p>

          <div class="popup-bottom">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.283494934567!2d-76.69994710000005!3d2.4119990000000064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e301d978ff4e3ad%3A0xb05374b207a1264a!2sCascada%20de%20Tunurco!5e0!3m2!1ses-419!2sco!4v1760521923352!5m2!1ses-419!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <button class="popup-btn" onclick="window.open('https://colombiabz.com/cauca/cascada-de-tunurco-64435', '_blank')">
              Official Page
            </button>
          </div>
        </div>
      </div>
    `,
    didOpen: () => {
      setupPhotoNavigation(photos);
    }
  });
}

function showTouristInfo6() {
  let photos = [
    "img/restaurantes/lagoMarqueza.jpg",
    "img/restaurantes/lagoMarqueza2.jpg",
    "img/restaurantes/lagoMarqueza3.jpg",
  ];

  Swal.fire({
    showConfirmButton: false,
    width: 1200,
    heightAuto: false,
    customClass: {
      popup: "popup-grande",
    },
    html: `
      <div style="position:absolute; top:10px; left:10px;">
        <button class="back-arrow" id="goBack">←</button>
      </div>
      <div class="popup-container">
        <div class="popup-left">
          <img id="popup-img" src="${photos[0]}" alt="Fotos">
          <div class="popup-arrows">
            <button class="arrow-btn" id="prevPhoto">←</button>
            <button class="arrow-btn" id="nextPhoto">→</button>
          </div>
        </div>

        <div class="popup-right">
          <p>
            <span>The Marqueza Lake</span> in Timbío is a beautiful body of water surrounded by vegetation and mountains. It's an ideal place to enjoy tranquility, take walks, and admire the natural landscapes of the municipality.
          </p>

          <div class="popup-bottom">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.283494934567!2d-76.69994710000005!3d2.4119990000000064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e301d978ff4e3ad%3A0xb05374b207a1264a!2sCascada%20de%20Tunurco!5e0!3m2!1ses-419!2sco!4v1760521923352!5m2!1ses-419!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <button class="popup-btn" onclick="window.open('https://colombiabz.com/cauca/cascada-de-tunurco-64435', '_blank')">
              Official Page
            </button>
          </div>
        </div>
      </div>
    `,
    didOpen: () => {
      setupPhotoNavigation(photos);
    }
  });
}

/* Función auxiliar para la navegación de fotos en los popups */
function setupPhotoNavigation(photos) {
  let current = 0;
  const popupImg = document.getElementById('popup-img');
  const nextBtn = document.getElementById('nextPhoto');
  const prevBtn = document.getElementById('prevPhoto');
  const goBackBtn = document.getElementById('goBack');

  if (nextBtn) {
    nextBtn.onclick = function() {
      current = (current + 1) % photos.length;
      if (popupImg) popupImg.src = photos[current];
    };
  }

  if (prevBtn) {
    prevBtn.onclick = function() {
      current = (current - 1 + photos.length) % photos.length;
      if (popupImg) popupImg.src = photos[current];
    };
  }

  if (goBackBtn) {
    goBackBtn.onclick = function() {
      Swal.close();
    };
  }
}