// Search Functionality
const searchBar = document.getElementById('search-bar');
searchBar.addEventListener('input', function() {
  const query = searchBar.value.toLowerCase();
  const movies = document.querySelectorAll('.movie-item');
  movies.forEach(movie => {
    const title = movie.querySelector('.movie-title').textContent.toLowerCase();
    if (title.includes(query)) {
      movie.style.display = 'block';
    } else {
      movie.style.display = 'none';
    }
  });
});
