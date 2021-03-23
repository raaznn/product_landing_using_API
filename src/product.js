const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const productId = urlParams.get("product_id");
var url = "https://6037c52d54350400177235f5.mockapi.io/product/" + productId;

function getData() {
  fetch(url)
    .then((response) => response.json())
    .then((product_data) => {
      showProduct(product_data);
    });
}

function showProduct(p) {
  var template = [];
  template.push(
    '<div class="box">',
    '<img src="https://loremflickr.com/320/240/' +
      replaceSpace(p.productName) +
      '">',
    "</div>",
    '<div class="box">',
    "<h1>" + p.productName + "</h1>",
    "<h2> Rs. " + p.productCost + "</h2> <br>",

    "<h4> Product Details </h3>",
    "<p> Brand: " + p.productBrand + "</p>",
    "<p> Color: " + p.productColor + "</p>",
    "<p> Material: " + p.productMaterial + "</p>",
    "<p> Availability: " + p.productAvailability + "</p>",

    "</div>"
  );

  var htmlString = template.join("");
  var element = document.querySelector("#item");
  element.innerHTML += htmlString;
}

function replaceSpace(str) {
  str = str.split(" ");
  return str[str.length - 1].toLowerCase();
}

getData();
