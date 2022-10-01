const selectToggler = document.getElementById("select-toggler");
const selectSearch = document.getElementById("select-search");
const searchBar = document.getElementById("searchbar");
selectToggler.onclick = () => selectSearch.classList.toggle("active");
const colorSection = document.getElementById("color-section");
const selectedColor = colorSection.querySelector("#selected-color-name");
const colorSelector = colorSection.querySelector("#color-selector");
const bigPicsContainer = document.getElementById("big-pictures-container");
selectedColor.innerHTML = colorSelector.querySelector(".selected").alt;
colorSection.onclick = function (event) {
  const selectedOption = this.querySelector(".selected");
  const { target } = event;
  if (
    target.classList.contains("imgSwatch") &&
    !target.classList.contains("selected")
  ) {
    target.classList.add("selected");
    selectedOption.classList.remove("selected");
  }
};
colorSelector.onmouseover = function (event) {
  const { target } = event;
  if (target.tagName === "IMG") {
    //also possible with target.classList.contains('imgSwatch')
    selectedColor.innerHTML = target.alt;
    const indexToShow = [...this.children].indexOf(target);
    //this index is index of big picture to be visible!
    const activeBigPicture = bigPicsContainer.querySelector(".selected");
    const bigPics = [...bigPicsContainer.children];
    //const activeBigPictureIndex = bigPics.indexOf(activeBigPicture);

    bigPics[indexToShow].classList.add("hovered");
  } else {
    selectedColor.innerHTML = this.querySelector(".selected").alt;
  }
};
colorSelector.onmouseout = function (event) {
  const { target } = event;
  if (target.closest("img")) {
    //console.log("ok");
    const bigHoveredPicture = bigPicsContainer.querySelector(".hovered");
    bigHoveredPicture?.classList.remove("hovered");
  }
};
