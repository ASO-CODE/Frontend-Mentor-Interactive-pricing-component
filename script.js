const slider = document.getElementById("slider");
const ProgressBar = document.getElementById("ProgressBar");

slider.oninput = function () {
  ProgressBar.style.width = slider.value * 20 + "%";
  //   console.log(slider.value);
};

let myCheckbox = document.querySelector(".switch input"),
  duration = document.querySelector(".month"),
  price = document.querySelector(".price .pricefix"),
  switcher = document.querySelector(".switch"),
  pageViews = document.querySelector(".page-views span"),
  range = document.querySelector(".myrange");

switcher.onclick = function () {
  if (myCheckbox.checked == true) {
    let priceInt = parseInt(price.textContent);
    price.textContent = `${(priceInt - priceInt * 0.25) * 12}`;

    duration.textContent = `/year`;
  } else {
    updatePrice();

    duration.textContent = `/month`;
  }
};

range.addEventListener("input", updatePrice);

// update price

function updatePrice() {
  if (range.value == 1) {
    if (myCheckbox.checked == true) {
      price.textContent = `${(8 - 8 * 0.25) * 12}`;
    } else {
      price.textContent = 8;
    }
    pageViews.textContent = "10K";
  }

  if (range.value == 2) {
    if (myCheckbox.checked == true) {
      price.textContent = `${(12 - 12 * 0.25) * 12}`;
    } else {
      price.textContent = 12;
    }
    pageViews.textContent = "50K";
  }

  if (range.value == 3) {
    if (myCheckbox.checked == true) {
      price.textContent = `${(16 - 16 * 0.25) * 12}`;
    } else {
      price.textContent = 16;
    }
    pageViews.textContent = "100K";
  }

  if (range.value == 4) {
    if (myCheckbox.checked == true) {
      price.textContent = `${(24 - 24 * 0.25) * 12}`;
    } else {
      price.textContent = 24;
    }
    pageViews.textContent = "500K";
  }

  if (range.value == 5) {
    if (myCheckbox.checked == true) {
      price.textContent = `${(36 - 36 * 0.25) * 12}`;
    } else {
      price.textContent = 36;
    }
    pageViews.textContent = "1M";
  }
}
