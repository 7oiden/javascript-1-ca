const detailContainer = document.querySelector(".movie-details");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

url = "https://ghibliapi.herokuapp.com/films/" + id;

console.log(url);

async function fetchDetails() {
  try {
    const response = await fetch(url);
    const details = await response.json();

    console.log(details);

    document.title = details.title;

    createHtml(details);
  } catch (error) {
    console.log(error);
    detailContainer.innerHTML = displayError(
      "An error has occured when trying to retrive the API"
    );
  }
}

fetchDetails();

function createHtml(details) {
  detailContainer.innerHTML = `
  <h1>${details.title}</h1>
  <p id="description">${details.description}</p>
  <p class="year">Release year: ${details.release_date}</p>
  <p class="info">Directed by: ${details.director}</p>
  <p class="info">Produced by: ${details.producer}</p>
`;
}
