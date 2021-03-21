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
    "<p>" + p.productName + "</p>",
    '<p style="font-size:11px">' + p.productSummary + "</p>",
    "<p> Rs. " + p.productCost + "</p>",
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
