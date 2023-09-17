let bagCart = document.querySelector(".cart");
const toggleCard = document.querySelector(".show-card");
const buy_cartItemShow = document.querySelector(".product-list");

const cardBtn = document.querySelectorAll(".card button");
const showCount = document.querySelector(".count")
const allCard = document.querySelectorAll(".card")
const totalAmount = document.querySelector(".total h3");
const checkOutBtn = document.querySelector(".total button");
let cardItem = [];
let counter = 0;

bagCart.addEventListener("click", () => {
    toggleCard.classList.toggle("active");


})

cardBtn.forEach((value, index) => {
    value.addEventListener("click", () => {
        if (counter === 8) {
            alert("limit of only 8 item")
        }
        else {
            counter++
            buy_cartItemShow.innerHTML = ""
            const cardDetails = {
                titile: allCard[index].querySelector(".content h3").textContent,
                img: allCard[index].querySelector(".img-wrap img").src,
                price: parseInt(allCard[index].querySelector(".content .price span").textContent)
            }
            cardItem.push(cardDetails);
            cardItem.forEach((item, index) => {
                let div = document.createElement("div");
                div.setAttribute("class", "product");

                div.innerHTML = `<div class="image">  <img src=${item.img} width="35px" alt=""> </div>
                <div class="product-name">${item.titile}</div>
                <div class="product-price">${item.price}</div>`;
                buy_cartItemShow.appendChild(div);
            })
            const total = cardItem.reduce((a, b) => a + b.price, 0)

            totalAmount.innerHTML = `Estimated total ${total}`;

            showCount.innerHTML = counter;
            checkOutBtn.classList.add("active")
        }



    })


})



