const checkById = document.querySelector("#categories");

const checkLiLength = document.querySelectorAll("#categories .item");
console.log(checkLiLength.length);

const items = document.querySelectorAll("#categories .item");

console.log("Number of categories:", items.length);

items.forEach((item) => {
  const title = item.querySelector("h2").textContent;
  const count = item.querySelectorAll("li").length;

  console.log("Category:", title);
  console.log("Elements:", count);
});

// Порахуй й виведи в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного елемента li.item у списку ul#categories знайди й виведи в консоль текст заголовка елемента
// (тегу <h2>) і кількість елементів у категорії (усіх <li>, вкладених у нього).
