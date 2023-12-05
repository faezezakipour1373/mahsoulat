let meno = document.getElementById("meno");
let sub = document.getElementById("sub");
let close1 = document.getElementById("close");
meno.addEventListener("click", function () {
  sub.style.display = "block";
});
close1.addEventListener("click", function () {
  sub.style.display = "none";
});



//mahsoulat
let thumbImage = document.querySelectorAll(".image2");
let image = document.getElementById("image1");

thumbImage.forEach((elem) => {
  elem.addEventListener("click", function () {
    image.src = `${elem.src}`;
  });
});

//slidermahsoulat
let plus = document.getElementById("plus");
let count = document.getElementById("count");
let minus = document.getElementById("minus");
let counter = 0;
plus.addEventListener("click", plusCounter);
function plusCounter() {

 if (counter < 8) {
    counter++;
    count.innerHTML = counter;
  }
  changePrice()
}
plusCounter();
minus.addEventListener("click", minusCounter);
function minusCounter() {
  if (counter > 1) {
    counter--;
    count.innerHTML = counter;
  }
  changePrice()
}
function changePrice() {
  let finalPrice = document.getElementById("totalPrice");
  let price = `${counter * 12254000}`;
  let finalP = [];
  for (i in price) {
    if (i == 0) {
      finalP.push(price[price.length - 1]);
    } else {
      price = `${Math.floor((counter * 12254000) / 10 ** i)}`;
      finalP.push(price[price.length - 1]);
      if (i % 3 == 2) {
        finalP.push(",");
      }
    }
  }
  if (finalP.length % 3 == 2) {
    finalP.pop();
  }
  finalPrice.innerHTML = finalP.reverse().join("");
}
//top
$(document).ready(function () {
  $(document).on("scroll", function () {
    let st = $(this).scrollTop();
    if (st > 350) {
      $("#top").fadeIn(350);
    } else {
      $("#top").fadeOut(350);
    }
  });
  $("#top").click(function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      500,
      "swing"
    );
  });
});