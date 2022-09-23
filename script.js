let container = document.createElement("div");
container.setAttribute(
    "class",
    "content container d-flex flex-column justify-content-start"
);

let heading = document.createElement("h1");
heading.setAttribute("class", "text-center p-4");
heading.innerHTML = "Random Programming Quote";

let div = document.createElement("div");
div.setAttribute("id", "maincontainer");
div.setAttribute("class", "d-flex justify-content-center align-items-center");
container.appendChild(heading);
container.appendChild(div);
document.body.append(container);

let url = "https://programming-quotes-api.herokuapp.com/quotes/random";

const getData = async () => {
    try {
        maincontainer.innerHTML = "";
        const data = await fetch(`${url}`);
        const quotes = await data.json();
        console.log(quotes);
        displayData(quotes);
    } catch (error) {
        console.log(error);
    }
};

getData();

const displayData = (obj) => {
    maincontainer.innerHTML += `<div class="card rounded-2 m-5">
    <div class="card-header d-flex justify-content-between align-items-center">
    <div>
        Tech Quote
    </div>
    <cite title="New Quote"><button onClick="window.location.reload()" class='refresh bg-white border-0 rounded-3 text-right'><img src='./refresh.PNG' alt='refresh'></button></cite>
    </div>
    <div class="card-body p-4">
      <blockquote class="blockquote mb-0">
        <p class='p-2'>${obj.en}</p>
        <footer class="blockquote-footer text-end mx-3 p-3"><cite title="Author">${obj.author}</cite></footer>
      </blockquote>
    </div>
  </div>`;
};

setTimeout(() => {
    window.location.reload();
}, 1000 * 60 * 60);
