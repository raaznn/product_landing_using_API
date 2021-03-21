var output = document.getElementById("wrapper");
function getData() {
  fetch("https://6037c52d54350400177235f5.mockapi.io/product")
    .then((response) => response.json())
    .then((product_data) => {
      product_data.forEach(function (product) {
        showProduct(product);
      });
    });
}
function replaceSpace(str) {
  str = str.split(" ");
  return str[str.length - 1].toLowerCase();
}

function showProduct(p) {
  var template = [];
  template.push(
    '<div class="box">',
    '<a href="product.html?product_id=' + p.productId + '"',
    "<div>",
    '<img src="https://loremflickr.com/160/120/' +
      replaceSpace(p.productName) +
      '">',
    "<p>" + p.productName + "</p>",
    '<p style="font-size:11px">' + p.productSummary + "</p>",
    "<p> Rs. " + p.productCost + "</p>",
    "</div>",
    "</a>",
    "</div>"
  );

  var htmlString = template.join("");
  var element = document.querySelector("#wrapper");
  element.innerHTML += htmlString;
}

getData();
