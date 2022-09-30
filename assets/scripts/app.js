const selectToggler = document.getElementById("select-toggler");
const selectSearch = document.getElementById("select-search");
const searchBar = document.getElementById("searchbar");
selectToggler.onclick = () => selectSearch.classList.toggle("active");
