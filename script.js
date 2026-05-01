const movies = [
  { title: "Leo", img: "https://via.placeholder.com/180x250" },
  { title: "KGF 2", img: "https://via.placeholder.com/180x250" },
  { title: "Avengers", img: "https://via.placeholder.com/180x250" }
];

const movieList = document.getElementById("movieList");
const modal = document.getElementById("bookingModal");
const title = document.getElementById("movieTitle");

let selectedSeats = 0;
let price = 150;

movies.forEach(m => {
  let div = document.createElement("div");
  div.classList.add("movie");
  div.innerHTML = `
    <img src="${m.img}">
    <h4>${m.title}</h4>
  `;
  div.onclick = () => openBooking(m.title);
  movieList.appendChild(div);
});

function openBooking(movie) {
  modal.style.display = "block";
  title.innerText = movie;
  generateSeats();
}

document.getElementById("closeBtn").onclick = () => {
  modal.style.display = "none";
};

function selectTime(time) {
  alert("Selected Show: " + time);
}

function generateSeats() {
  const container = document.getElementById("seatContainer");
  container.innerHTML = "<div class='seats'></div>";
  const seatsDiv = container.querySelector(".seats");

  selectedSeats = 0;
  updateSummary();

  for (let i = 1; i <= 40; i++) {
    let seat = document.createElement("div");
    seat.classList.add("seat");
    seat.innerText = i;

    seat.onclick = () => {
      seat.classList.toggle("selected");
      selectedSeats += seat.classList.contains("selected") ? 1 : -1;
      updateSummary();
    };

    seatsDiv.appendChild(seat);
  }
}

function updateSummary() {
  document.getElementById("seatCount").innerText = selectedSeats;
  document.getElementById("total").innerText = selectedSeats * price;
}

function checkout() {
  if (selectedSeats === 0) {
    alert("Select seats first!");
    return;
  }

  alert("Payment Successful 🎉");
  modal.style.display = "none";
}
