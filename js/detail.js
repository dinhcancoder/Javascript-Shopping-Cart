const opacity = document.querySelector(".opcity");
const detail = document.querySelector(".detail");
const closeDetail = document.querySelector(".detail-close");
const detailListImg = document.querySelector(".detail-listImg");
const detailAdd = document.querySelector(".detail-add");
const detailQuantity = document.querySelector(".detail-quantity span");
const detailPlus = document.getElementById("detailPlus");
const detailMinus = document.getElementById("detailMinus");
let indexView = 0;

function showDetail() {
  detail.classList.toggle("activeDetail");
  opacity.classList.toggle("activeOpacity");
}

closeDetail.addEventListener("click", () => {
  detail.classList.toggle("activeDetail");
  opacity.classList.toggle("activeOpacity");
});

function viewToDetail(id) {
  indexView = id;
  showDetail();
  renderDetail(id);
  loadImageDetail(id);
  handleSlideDetail();
}

function renderDetail(id) {
  let title = document.querySelector(".detail-title");
  let price = document.querySelector(".detail-price");
  let imgMain = document.querySelector(".detail-imgMain img");
  title.innerHTML = productList[id].title;
  price.innerHTML = productList[id].price;
  imgMain.setAttribute("src", productList[id].image);
}

function loadImageDetail(id) {
  detailListImg.innerHTML = "";
  for (let key in imgList[id]) {
    detailListImg.innerHTML += `<img src="./assets/image/${imgList[id][key]}" alt="" />`;
  }
}

detailAdd.addEventListener("click", () => {
  addToCart(indexView);
  updateQuantityDetail(indexView);
});

function handleSlideDetail() {
  let listImg = document.querySelectorAll(".detail-listImg img");
  for (let i = 0; i < listImg.length; i++) {
    listImg[i].addEventListener("click", () => {
      for (let j = 0; j < listImg.length; j++) {
        listImg[j].style.border = "none";
      }
      listImg[i].style.border = "1px solid #142c73";
      let imgMain = document.querySelector(".detail-imgMain img");
      imgMain.setAttribute("src", listImg[i].getAttribute("src"));
    });
  }
}

let newQuantity = 0;

detailPlus.addEventListener("click", () => {
  newQuantity = ++detailQuantity.innerHTML - 1;
});

detailMinus.addEventListener("click", () => {
  if (newQuantity >= 1) {
    newQuantity = --detailQuantity.innerHTML - 1;
  }
});

function updateQuantityDetail(indexView) {
  carts = carts.map((item) => {
    let quantity = item.quantity;
    if (item.id === indexView) {
      quantity += newQuantity;
    }
    return {
      ...item,
      quantity,
    };
  });
  updateCart();
}
