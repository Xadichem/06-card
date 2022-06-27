document.body.style.margin = "0";
document.body.style.backgroundColor = "hsl(217, 54%, 11%";
document.body.style.fontFamily = "Outfit, sans-serif";
document.body.style.fontSize = "18px";

let wrapper = document.createElement("div");
wrapper.id = "wrapper";
wrapper.style.margin = "0 auto";
wrapper.style.maxWidth = "1440px";
wrapper.style.display = "flex";
wrapper.style.justifyContent = "center";
wrapper.style.marginTop = "100px";

let card = document.createElement("div");
card.className = "card";
card.style.padding = "20px 20px";
card.style.borderRadius = "20px";
card.style.backgroundColor = "hsl(216, 50%, 16%)";
card.style.boxShadow =
  "3px 14px 28px rgba(0, 0, 0, 0.25), 3px 10px 10px rgba(0, 0, 0, 0.22)";

let cardImg = document.createElement("img");
cardImg.className = "card-image";
cardImg.src = "./images/image-equilibrium.jpg";
cardImg.style.maxWidth = "300px";
cardImg.style.borderRadius = "10px";
cardImg.style.marginBottom = "17px";

let title = document.createElement("h3");
title.className = "title";
title.innerText = "Equilibrium #3429";
title.style.margin = "0 0 17px";
title.style.color = "white";

let subTitle = document.createElement("p");
subTitle.className = "subtitle";
subTitle.innerText = "Our Equilibrium collection promotes balance and calm.";
subTitle.style.margin = "0 0 17px";
subTitle.style.maxWidth = "300px";
subTitle.style.color = "rgb(139, 172, 218)";
subTitle.style.lineHeight = "25px";

let items = document.createElement("div");

let value = document.createElement("div");
value.className = "card-value";
value.style.display = "flex";
value.style.justifyContent = "space-between";

let iconItem = document.createElement("img");
iconItem.className = "value-icon";
iconItem.src = "./images/icon-ethereum.svg";
iconItem.style.margin = "15px -75px 0 0";
iconItem.style.height = "25px";

let valueText = document.createElement("p");
valueText.className = "value-text";
valueText.innerText = "0.041 ETH";
valueText.style.margin = "15px 25px";
valueText.style.display = "inline-block";
valueText.style.color = "hsl(178, 100%, 50%)";
valueText.style.fontWeight = "bold";

let timeItems = document.createElement("div");
timeItems.className = "time";
timeItems.style.display = "flex";
timeItems.style.alignItems = "center";
timeItems.style.margin = " 15px 0 17px";

let timeImg = document.createElement("img");
timeImg.className = "time-img";
timeImg.src = "./images/icon-clock.svg";
timeImg.style.marginRight = "5px";

let timeItem = document.createElement("time");
timeItem.className = "time-item";
timeItem.innerText = "3 days left";
timeItem.style.color = "hsl(215, 51%, 70%)";

let line = document.createElement("hr");
line.style.borderColor = "hsl(215, 32%, 27%)";

let user = document.createElement("div");
user.className = "user";
user.style.marginTop = "22px";
user.style.display = "flex";
user.style.alignItems = "center";

let userImg = document.createElement("img");
userImg.className = "avatar";
userImg.src = "./images/image-avatar.png";
userImg.style.maxWidth = "45px";
userImg.style.marginRight = "15px";
userImg.style.border = "2px solid white";
userImg.style.borderRadius = "50%";

let userText = document.createElement("span");
userText.className = "user-txt";
userText.innerText = "Creation of";
userText.style.color = "hsl(215, 51%, 70%)";
userText.style.textAlign = "center";

let userName = document.createElement("span");
userName.className = "user-name";
userName.innerText = " Jules Wyvern";
userName.style.color = "white";

document.body.appendChild(wrapper);
wrapper.appendChild(card);
card.appendChild(cardImg);
card.appendChild(title);
card.appendChild(subTitle);
card.appendChild(items);
items.appendChild(value);
value.appendChild(iconItem);
value.appendChild(valueText);
value.appendChild(timeItems);
timeItems.appendChild(timeImg);
timeItems.appendChild(timeItem);
card.appendChild(line);
card.appendChild(user);
user.appendChild(userImg);
user.appendChild(userText);
userText.appendChild(userName);

console.log(card);
alert("Я оцениваю свою работу на 90 баллов");
