const loadData = () => {
  fetch("https://jsonplaceholder.typicode.com/photos/")
    .then((res) => res.json())
    .then((data) => showResult(data.slice(0, 100)));
};
loadData();

const showResult = (photos) => {
  const cartContainer = document.getElementById("card-container");
  photos.forEach((photo) => {
    const { thumbnailUrl: img, title, id } = photo;
    const cart = document.createElement("div");
    cart.classList.add("col");
    cart.innerHTML = `
    <div class="card card-height">
      <img onclick='loadDetails("${id}")' src="${img}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <p class="card-text">Id = ${id}<p>
      </div>
    </div>
    `;
    cartContainer.appendChild(cart);
  });
};

const loadDetails = (id) => {
  fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
    .then((res) => res.json())
    .then((data) => showDetails(data));
};
const showDetails = (photoDetails) => {
  const { url: img, thumbnailUrl: thumbnail, title } = photoDetails;
  const photoDetailsContainer = document.getElementById("photo-details");
  photoDetailsContainer.innerHTML = `
    <div class="card w-50 container">
        <div class='d-flex '>
            <img src="${img}" class="card-img-top w-50" alt="...">
            <img src="${thumbnail}" class="card-img-top w-50" alt="...">
        </div>
        <div class="card-body">
                <p class="card-text text-center">${title}</p>
        </div>
    </div>
    `;
};
