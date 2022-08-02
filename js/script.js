const resultsContainer = document.querySelector(".results");

url = "https://ghibliapi.herokuapp.com/films";

async function fetchMovies() {
  try {
    const response = await fetch(url);
    const results = await response.json();

    console.log(results);

    resultsContainer.innerHTML = "";

    for (let i = 0; i < results.length; i++) {
      if (results[i].rt_score < 85) {
        continue;
      }

      resultsContainer.innerHTML += `
     <a href="details.html?id=${results[i].id}"
     <div class="movie-card">
     <hgroup>
     <h2>${results[i].title}</h2>
     <h3>Directed by <strong>${results[i].director}</strong></h3>
     </hgroup>
     <div class="rating-wrapper">
     <img src="images/32px-Rotten_Tomatoes.svg">
     <p class="rating">${results[i].rt_score} %</p>
     </div>
     </div></a>`;
    }
  } catch (error) {
    console.log(error);
    resultsContainer.innerHTML = displayError(
      "An error has occured when trying to retrive the API"
    );
  }
}

fetchMovies();
