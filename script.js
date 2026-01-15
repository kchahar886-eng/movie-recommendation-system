const movies = [
    {
        title: "Inception",
        genre: "action",
        rating: 8.8,
        description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
        poster: "https://via.placeholder.com/200x300"
    },
    {
        title: "The Hangover",
        genre: "comedy",
        rating: 7.7,
        description: "Three buddies wake up from a bachelor party in Las Vegas, with no memory of the previous night and the bachelor missing.",
        poster: "https://via.placeholder.com/200x300"
    },
    {
        title: "The Godfather",
        genre: "drama",
        rating: 9.2,
        description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
        poster: "https://via.placeholder.com/200x300"
    },
    {
        title: "Titanic",
        genre: "romance",
        rating: 7.8,
        description: "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
        poster: "https://via.placeholder.com/200x300"
    },
    {
        title: "Se7en",
        genre: "thriller",
        rating: 8.6,
        description: "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.",
        poster: "https://via.placeholder.com/200x300"
    }
];

const searchBar = document.getElementById("search-bar");
const filterButtons = document.querySelectorAll(".filter-btn");
const recommendationsSection = document.getElementById("recommendations");

function displayMovies(filterGenre = "") {
    recommendationsSection.innerHTML = "";

    const filteredMovies = movies.filter(movie => {
        return filterGenre ? movie.genre === filterGenre : true;
    });

    filteredMovies.forEach(movie => {
        const movieCard = document.createElement("div");
        movieCard.classList.add("movie-card");

        movieCard.innerHTML = `
            <img src="${movie.poster}" alt="${movie.title}">
            <div class="info">
                <h3>${movie.title}</h3>
                <p>Rating: ${movie.rating}</p>
                <p>${movie.description}</p>
            </div>
        `;

        recommendationsSection.appendChild(movieCard);
    });
}

displayMovies();

searchBar.addEventListener("input", (e) => {
    const searchValue = e.target.value.toLowerCase();
    
    recommendationsSection.innerHTML = "";

    const searchedMovies = movies.filter(movie => movie.title.toLowerCase().includes(searchValue));

    searchedMovies.forEach(movie => {
        const movieCard = document.createElement("div");
        movieCard.classList.add("movie-card");

        movieCard.innerHTML = `
            <img src="${movie.poster}" alt="${movie.title}">
            <div class="info">
                <h3>${movie.title}</h3>
                <p>Rating: ${movie.rating}</p>
                <p>${movie.description}</p>
            </div>
        `;

        recommendationsSection.appendChild(movieCard);
    });
});

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        const genre = button.getAttribute("data-genre");
        displayMovies(genre);
    });
});