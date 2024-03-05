let productList = [
  {
    id: 0,
    image: "./assets/image/product1.jpg",
    title: "Healthy weight",
    price: "$19.99 USD",
    cost: 19.99,
  },
  {
    id: 1,
    image: "./assets/image/product2.jpg",
    title: "Ideal weight white meat chicken recipe in sauce wet cat food",
    price: "$26.79 USD",
    cost: 26.79,
  },
  {
    id: 2,
    image: "./assets/image/product3.jpg",
    title: "Multivitamins",
    price: "$19.99 USD",
    cost: 19.99,
  },
  {
    id: 3,
    image: "./assets/image/product4.jpg",
    title: "Omega 3 pet",
    price: "$21.95 USD",
    cost: 21.95,
  },
  {
    id: 4,
    image: "./assets/image/product5.jpg",
    title: "Cat chicken pate canned wet food",
    price: "$42.29 USD",
    cost: 42.29,
  },
  {
    id: 5,
    image: "./assets/image/product6.jpg",
    title: "Large plastic carrier cage for cats and dogs",
    price: "$48.69 USD",
    cost: 48.69,
  },
  {
    id: 6,
    image: "./assets/image/product7.jpg",
    title: "Ball for dog",
    price: "$5.99 USD",
    cost: 5.99,
  },
  {
    id: 7,
    image: "./assets/image/product8.jpg",
    title: "Waterproof dog suit",
    price: "$2.89 USD",
    cost: 2.89,
  },
  {
    id: 8,
    image: "./assets/image/product9.jpg",
    title: "Waterproof dog suit",
    price: "$9.29 USD",
    cost: 9.29,
  },
  {
    id: 9,
    image: "./assets/image/product10.jpg",
    title: "Orthopedic dog bed",
    price: "$21.39 USD",
    cost: 27.39,
  },
];

let imgList = [
  {
    img0: "product1.jpg",
    img1: "detail1-1.jpg",
    img2: "detail1-2.jpg",
  },
  {
    img0: "product2.jpg",
    img1: "detail2-1.jpg",
    img2: "detail2-2.jpg",
  },
  {
    img0: "product3.jpg",
    img1: "detail3-1.jpg",
    img2: "detail3-2.jpg",
  },
  {
    img0: "product4.jpg",
    img1: "detail4-1.jpg",
    img2: "detail4-2.jpg",
  },
  {
    img0: "product5.jpg",
    img1: "detail2-1.jpg",
    img2: "detail2-2.jpg",
  },
  {
    img0: "product6.jpg",
    img1: "detail6-1.jpg",
    img2: "detail6-2.jpg",
    img3: "detail6-3.jpg",
    img4: "detail6-4.jpg",
    img5: "detail6-5.jpg",
  },
  {
    img0: "product7.jpg",
    img1: "detail7-1.jpg",
    img2: "detail7-2.jpg",
    img3: "detail7-3.jpg",
    img4: "detail7-4.jpg",
    img5: "detail7-5.jpg",
    img6: "detail7-6.jpg",
  },
  {
    img0: "product8.jpg",
    img1: "detail8-1.jpg",
    img2: "detail8-2.jpg",
    img3: "detail8-3.jpg",
    img4: "detail8-4.jpg",
    img5: "detail8-5.jpg",
  },
  {
    img0: "product9.jpg",
    img1: "detail9-1.jpg",
    img2: "detail9-2.jpg",
    img3: "detail9-3.jpg",
    img4: "detail9-4.jpg",
    img5: "detail9-5.jpg",
  },
  {
    img0: "product10.jpg",
    img1: "detail10-1.jpg",
    img2: "detail10-2.jpg",
    img3: "detail10-3.jpg",
    img4: "detail10-4.jpg",
  },
];

let header = document.querySelector(".header");
window.addEventListener("scroll", () => {
  header.classList.toggle("header-scroll", scrollY > 185);
});

let scrollTop = document.querySelector(".scroll");
scrollTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

let headerCart = document.querySelector(".header-cart");
let cartClose = document.querySelector(".cart-header ion-icon");
headerCart.addEventListener("click", () => {
  header.classList.toggle("menuCart");
});
cartClose.addEventListener("click", () => {
  header.classList.toggle("menuCart");
});

let dataListSlider = [
  `<div class="slide-image">
    <img
      src="./assets/image/banner_1.jpg"
      alt=""
      class="slide-item"
    />
    <div class="slide-content">
      <h2 class="slide-title">
        The most loved online pet <br />
        supplies store!
      </h2>
      <div class="slide-btn">
        <div class="btn">Dog shop</div>
        <div class="btn">Cat shop</div>
      </div>
    </div>
  </div>`,
  `<div class="slide-image">
    <img
      src="./assets/image/banner2.jpg"
      alt=""
      class="slide-item"
    />
    <div class="slide-content">
      <h2 class="slide-title">
        What your pet needs, <br />
        when they need it 😺
      </h2>
      <div class="slide-text">
        Specialty pet retailer of services and solutions for pets.
      </div>
      <div class="slide-btn">
        <div class="btn">Shop now!</div>
      </div>
    </div>
  </div>`,
  `<div class="slide-image">
    <img
      src="./assets/image/banner3.jpg"
      alt=""
      class="slide-item"
    />
    <div class="slide-content">
      <h2 class="slide-title">
        The most loved online pet <br />
        supplies store!
      </h2>
      <div class="slide-btn">
        <div class="btn">Dog shop</div>
        <div class="btn">Cat shop</div>
      </div>
    </div>
  </div>`,
  `<div class="slide-image">
    <img
      src="./assets/image/banner4.jpg"
      alt=""
      class="slide-item"
    />
    <div class="slide-content">
      <h2 class="slide-title">
        What your pet needs, <br />
        when they need it 😺
      </h2>
      <div class="slide-text">
        Specialty pet retailer of services and solutions for pets.
      </div>
      <div class="slide-btn">
        <div class="btn">Shop now!</div>
      </div>
    </div>
  </div>`,
  `<div class="slide-image">
    <img
      src="./assets/image/banner5.jpg"
      alt=""
      class="slide-item"
    />
    <div class="slide-content">
      <h2 class="slide-title">
        The most loved online pet <br />
        supplies store!
      </h2>
      <div class="slide-btn">
        <div class="btn">Dog shop</div>
        <div class="btn">Cat shop</div>
      </div>
    </div>
  </div>`,
];

let indexSlider = 0;

let slider = document.querySelector(".slide-list");
slider.innerHTML = dataListSlider[indexSlider];

function changeSlider(dir) {
  if (dir === "next") {
    indexSlider++;
    if (indexSlider >= dataListSlider.length) {
      indexSlider = 0;
    }
  } else if (dir === "prev") {
    indexSlider--;
    if (indexSlider < 0) {
      indexSlider = dataListSlider.length - 1;
    }
  } else if (dir === "first") {
    indexSlider = 0;
  } else if (dir === "start") {
    starts = setInterval(() => changeSlider("next"), 1000);
  } else if (dir === "stop") {
    clearTimeout(starts);
  } else {
    indexSlider = dataListSlider.length - 1;
  }
  slider.innerHTML = dataListSlider[indexSlider];
}
