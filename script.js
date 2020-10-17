console.log("Hola Male!");

// // TARJETAS:
const productCard = document.querySelectorAll(".product__card");

// // BUSQUEDAS:
const searchFilter = document.querySelector(".search-input");

// // CATEGORIA:
const categoryFilter = document.querySelectorAll(".search-checkbox");

// // PUNTAJE:
const reviewFilter = document.querySelectorAll(".search-stars");

// FILTROS:

// input:

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
  if (card.dataset.name.includes(searchFilter.value.toLowerCase())) {
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

// category:

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

//review:

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

// accion:

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
