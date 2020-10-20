console.log("Hola Male!");

//******** FILTRO PRODUCTOS ******** //

// // Card:
const productCard = document.querySelectorAll(".product__card");

// // Search:
const searchFilter = document.querySelector(".search-input");

// // Category:
const categoryFilter = document.querySelectorAll(".search-category");

// // Review:
const reviewFilter = document.querySelectorAll(".search-review");

// By Name:

searchFilter.oninput = () => {
  allFilterCard();
};

const inputSearchOk = () => {
  if (searchFilter.value) {
    return true;
  } else {
    return false;
  }
};

const compareInputCard = (card) => {
  const productName = card.dataset.name.toLowerCase();
  const productSerach = searchFilter.value.toLowerCase();

  if (productName.includes(productSerach)) {
    return true;
  } else {
    return false;
  }
};

const filterInput = (card) => {
  if (inputSearchOk()) {
    if (compareInputCard(card)) {
      return true;
    } else {
      return false;
    }
  } else {
    return true;
  }
};

// By Category:

for (let checkbox of categoryFilter) {
  checkbox.oninput = () => {
    allFilterCard();
  };
}

const checkboxCategoryOk = () => {
  for (let checkbox of categoryFilter) {
    if (checkbox.checked) {
      return true;
    }
  }
  return false;
};

const compareCategoryCard = (card) => {
  for (let checkbox of categoryFilter) {
    if (checkbox.checked) {
      if (checkbox.value === card.dataset.category) {
        return true;
      }
    }
  }
  return false;
};

const allFilterCategory = (card) => {
  if (checkboxCategoryOk()) {
    if (compareCategoryCard(card)) {
      return true;
    } else {
      return false;
    }
  } else {
    return true;
  }
};

// By Review:

for (let checkbox of reviewFilter) {
  checkbox.oninput = () => {
    allFilterCard();
  };
}

const checkboxReviewOk = () => {
  for (let checkbox of reviewFilter) {
    if (checkbox.checked) {
      return true;
    }
  }
  return false;
};

const compareReviewCard = (card) => {
  for (let checkbox of reviewFilter) {
    if (checkbox.checked) {
      if (checkbox.value === card.dataset.review) {
        return true;
      }
    }
  }
  return false;
};

const allFilterReview = (card) => {
  if (checkboxReviewOk()) {
    if (compareReviewCard(card)) {
      return true;
    } else {
      return false;
    }
  } else {
    return true;
  }
};

// Action:

const filterTotal = (card) => {
  if (filterInput(card) && allFilterReview(card) && allFilterCategory(card)) {
    return true;
  } else {
    return false;
  }
};

const hide = (card) => {
  return card.classList.add("hidden");
};

const show = (card) => {
  return card.classList.remove("hidden");
};

const allFilterCard = () => {
  for (let card of productCard) {
    if (filterTotal(card)) {
      show(card);
    } else {
      hide(card);
    }
  }
};

// Clear Filter:

const clearFilter = document.querySelector(".filter__trash");

clearFilter.onclick = () => {
  searchFilter.value = "";
  for (let card of productCard) {
    card.classList.remove("hidden");
  }
  for (let checkbox of categoryFilter) {
    checkbox.checked = false;
  }
  for (let checkbox of reviewFilter) {
    checkbox.checked = false;
  }
};

//******** GRID AND LIST ******** //

// List :
const showList = document.getElementById("show__list");

// Grid:
const showGrid = document.getElementById("show__grid");

// Products Container:
const productContainer = document.querySelector(".product__container");

// Action: 

showList.onclick = () => {
  productContainer.classList.remove("grid");
  productContainer.classList.add("list");
};

showGrid.onclick = () => {
  productContainer.classList.remove("list");
  productContainer.classList.add("grid");
};


// ABRIR y CERRAR CARRITO

const openCart = document.querySelectorAll(".shopcart__btn");
const closeCart = document.querySelectorAll(".close__cart");
const shopCart = document.getElementById("shopcart");
const overlay = document.querySelector(".overlay");

openCart.onclick = () => {
  overlay.classList.remove("hidden");
  document.body.classList.add("no-scroll");
  shopcart.classList.add("show_cart");
};

closeCart.onclick = () => {
  overlay.classList.add("hidden");
  document.body.classList.remove("no-scroll");
  shopcart.classList.remove("show_cart");
};
