const productEl = document.querySelector(".product-container");
const cartEl = document.querySelector(".cart-products");
const drumEl = document.querySelector(".drum-content");
const subtotalEl = document.querySelector(".cart-sum span");
const cartQuantityEl = document.querySelector(".cart-quantity");
const informationEl = document.querySelector(".information");
const removeEl = document.querySelector(".cart-removeAll");

function renderProducts() {
  productList.forEach((product) => {
    productEl.innerHTML += `
    <div class="product-item">
      <div class="product-img">
        <img src="${product.image}" alt="" />
        <div class="product-sett">
          <div>
            <div class="product-add" onclick="addToCart(${product.id})">
              <ion-icon name="bag-handle-outline"></ion-icon>
            </div>
            <div class="product-view" onclick="viewToDetail(${product.id})">
              <svg class="theme-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M10 4C14.6925 4 18.6646 6.52248 20 10C18.6646 13.4775 14.6925 16 10 16C5.30754 16 1.3354 13.4775 0 10C1.3354 6.52248 5.30754 4 10 4ZM10 14C6.33874 14 3.4465 12.2242 2.20403 10C3.4465 7.77577 6.33874 6 10 6C7.79086 6 6 7.79086 6 10C6 12.2091 7.79086 14 10 14ZM10 14C12.2091 14 14 12.2091 14 10C14 7.79086 12.2091 6 10 6C13.6613 6 16.5535 7.77577 17.796 10C16.5535 12.2242 13.6613 14 10 14ZM12 10C12 11.1046 11.1046 12 10 12C8.89543 12 8 11.1046 8 10C8 8.89543 8.89543 8 10 8C11.1046 8 12 8.89543 12 10Z" fill="#142C73"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <h3 class="product-name">${product.title}</h3>
      <div class="product-star">
        <i class="bx bxs-star"></i>
        <i class="bx bxs-star"></i>
        <i class="bx bxs-star"></i>
        <i class="bx bxs-star"></i>
        <i class="bx bxs-star-half"></i>
      </div>
      <span class="product-price">From ${product.price}</span>
    </div>
    `;
  });
}

renderProducts();

let carts = JSON.parse(localStorage.getItem("carts")) || [];
updateCart();

function addToCart(id) {
  if (carts.some((item) => item.id === id)) {
    changeQuantity("plus", id);
  } else {
    renderInformation();
    renderRemove("show");
    const item = productList.find((product) => product.id === id);
    carts.push({
      ...item,
      quantity: 1,
    });
  }
  updateCart();
}

function updateCart() {
  renderCartItems();
  renderSubtotal();
  renderDrum();
  localStorage.setItem("carts", JSON.stringify(carts));
}

function renderSubtotal() {
  let subtotalPrice = 0,
    subtotalItems = 0;
  carts.forEach((item) => {
    subtotalPrice += item.cost * item.quantity;
    subtotalItems += item.quantity;
  });
  subtotalEl.innerHTML = `$${subtotalPrice.toFixed(2)}USD`;
  cartQuantityEl.innerHTML = subtotalItems;
}

function renderCartItems() {
  cartEl.innerHTML = "";
  carts.forEach((item) => {
    cartEl.innerHTML += `
      <div class="cart-item">
      <div class="cart-box">
        <div class="cart-left">
          <div class="cart-img">
            <img src="${item.image}" alt="" />
          </div>
          <div class="cart-group">
            <div class="cart-name">${item.title}</div>
            <div class="cart-color">Color: Red</div>
            <div class="cart-size">Size: S</div>
          </div>
        </div>
        <div class="cart-right">
          <div class="cart-price" valuaPrice="${item.cost}">${item.price}</div>
          <div class="cart-control">
            <div class="cart-sl">
              <ion-icon name="remove-outline" class="tru" onclick="changeQuantity('minus', ${item.id})"></ion-icon>
              <span>${item.quantity}</span>
              <ion-icon name="add-outline" class="cong" onclick="changeQuantity('plus', ${item.id})"></ion-icon>
            </div>
            <div class="cart-delete" onclick="removeCartItems(${item.id})">Xóa</div>
          </div>
        </div>
      </div>
    </div>
    `;
  });
}

function changeQuantity(dir, id) {
  carts = carts.map((item) => {
    let quantity = item.quantity;
    if (item.id === id) {
      if (dir === "minus" && quantity > 1) {
        quantity--;
      } else if (dir === "plus") {
        quantity++;
      }
    }

    return {
      ...item,
      quantity,
    };
  });
  updateCart();
}

function removeCartItems(id) {
  carts = carts.filter((item) => item.id != id);
  updateCart();
}

function renderDrum() {
  if (carts.length === 0) {
    cartEl.innerHTML += `
    <div class="drum">
      <div class="drum-content">
        <svg width="81" height="70" viewBox="0 0 81 70">
          <g
            transform="translate(0 2)"
            stroke-width="4"
            stroke="#142c73"
            fill="none"
            fill-rule="evenodd"
          >
            <circle stroke-linecap="square" cx="34" cy="60" r="6"></circle>
            <circle stroke-linecap="square" cx="67" cy="60" r="6"></circle>
            <path
              d="M22.9360352 15h54.8070373l-4.3391876 30H30.3387146L19.6676025 0H.99560547"
            ></path>
          </g>
        </svg>
        <p>There are currently no products</p>
      </div>
    </div>
    `;
    renderRemove("none");
  }
}

function renderInformation() {
  informationEl.style.transform = "translateX(0)";
  setTimeout(() => {
    informationEl.style.transform = "translateX(120%)";
  }, 700);
}

function renderRemove(display) {
  if (display === "show") {
    removeEl.style.transform = "scale(1)";
  } else {
    removeEl.style.transform = "scale(0)";
  }
}

removeEl.addEventListener("click", handlerRemoveAll);
function handlerRemoveAll() {
  carts = [];
  updateCart();
}
