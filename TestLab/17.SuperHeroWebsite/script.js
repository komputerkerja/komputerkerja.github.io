const sumbit = document.getElementById("submit");
const search = document.getElementById("search");
const content = document.querySelector(".content");

sumbit.addEventListener("click", (e) => {
  getFirstRequest();
});

async function getFirstRequest() {
  const apiUrl =
    "https://www.superheroapi.com/api.php/2822744044608844/search/" +
    search.value;
  await fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => {
      if (data["response"] == "success") {
        content.innerHTML = "";
        const result = data["results"];
        result.forEach((hero) => {
          createUi(hero);
        });
      }else{
        content.innerHTML = data["error"];  
      }
    });
}

function createUi(hero) {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
        <div class="imgBox">
        <img src="${hero["image"]["url"]}" alt="${hero["name"]}">
        </div>
        <div class="title">
        <h3>${hero["name"]}</h3>
        <p>first-appearance : ${hero["biography"]["first-appearance"]}</p>
        <p>publisher: ${hero["biography"]["publisher"]}</p>
        <button id="detail" class="detail">Detail</button>
        </div>
    `;
  content.appendChild(card);
}
