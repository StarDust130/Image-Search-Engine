const searchForm = document.querySelector("#search-form");
const searchBox = document.querySelector("#search-box");
const searchResults = document.querySelector("#search-results");
const showMoreBtn = document.querySelector("#show-more-btn");

const api_key = "liGXIuV0nAta54k86IShYso2wDLZWsB6iagNoUIhXyo";

let keyword = "";
let page = 1;


//  Function to Search Image 😄
async function searchImage() {
  // Getting Keyword from Search Box 😄
  keyword = searchBox.value;
  const url = `https://api.unsplash.com/search/photos?query=${keyword}&page=${page}&client_id=${api_key}&per_page=15&orientation=landscape`;

  // Fetching Data from API 😄
  const response = await fetch(url);
  const data = await response.json();

  if (page === 1) {
    searchResults.innerHTML = "";
  }

  const result = data.results;

  //! Displaying Data in HTML 😆
  result.map((result) => {
    // Creating Image Element 🫠
    const image = document.createElement("img");
    image.src = result.urls.small;

    //? Creating Image Link Element 🫠
    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_blank";

    //! Appending Image to Image Link 🫠
    imageLink.appendChild(image);

    // Creating Image Card Element 🙃
    searchResults.appendChild(imageLink);
  });

  //   Creating Show More Button 😄
  showMoreBtn.style.display = "block";
  showMoreBtn.style.position = "relative";
  showMoreBtn.style.top = "16px";
  showMoreBtn.style.left = "110%";
  showMoreBtn.style.margin = "0 auto";
  searchResults.appendChild(showMoreBtn);

  //   Creating Back to Top Button 😄
  backToTopButton.style.display = "block";

  //   Creating Footer 😄
  
}
//  Event Listeners for Search Form 😄
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  searchImage();
});

//  Event Listeners for Show More Button 😄
searchBox.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    searchImage();
  }
});

// Add New Images on Clicking Show More Button 😄
showMoreBtn.addEventListener("click", () => {
  page++;
  searchImage();
});

//  Back to Top Button 😄
const backToTopButton = document.getElementById("back-to-top");

backToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0 });
});

//  Function to Hide Back to Top Button 😄
window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
    });

const footer = document.getElementsByTagName("footer");


//! Not Work 😭 . 
window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        footer.style.display = "block";
    } else {
        footer.style.display = "none";
    }
    });




  

