let allEvents = [
  {
      id: 1,
      name: "Birthday ",
      seats: 50,
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFydHl8ZW58MHx8MHx8fDA%3D"
  },
  {
      id: 2,
      name: "Art Exhibition",
      seats: 0,
      image: "https://www.shutterstock.com/shutterstock/photos/1887136297/display_1500/stock-photo-young-female-visitor-looking-reflective-while-sitting-on-a-bench-and-admiring-the-various-paintings-1887136297.jpg"
  },
  {
      id: 3,
      name: "Tech Conference",
      seats: 20,
      image: "https://img.freepik.com/free-photo/technology-innovation-digital-evolution-homepage-concept_53876-165281.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1714176000&semt=ais"
  },
  {
      id: 4,
      name: "Food Tasting Event",
      seats: 35,
      image: "https://media.istockphoto.com/id/937483290/photo/server-holding-a-tray-of-appetizers-at-a-banquet.jpg?s=612x612&w=0&k=20&c=npgO7U825B6xuIehGCcmVCTGPo56HCHvw4_q_u3mmKU="
  },
  {
      id: 5,
      name: "Comedy Show",
      seats: 69,
      image: "https://static.vecteezy.com/system/resources/thumbnails/002/187/671/small/comedy-show-neon-signs-style-text-free-vector.jpg"
  }
]


let content = "";

allEvents.forEach((event) => {
  event=`<div class ="event" style="background-image:url('${event.image}')">
  <h3> ${event.name}</h3>
  <p> Seats left : ${event.seats} </p>
  <h4></h4>
  <button id=${event.id}> Book Now</button>
  </div>`;

  content += event;

});

document.getElementById("allEvents").innerHTML = content;

let allButtons = document.querySelectorAll("button");

allButtons.forEach((button)=> {
  button.addEventListener("click", () => checkAvailability(button));
});


function checkAvailability(button){
let  buttonID = button.id;
 let totalSeats = allEvents[buttonID-1 ].seats;

 let availableAlert=document.querySelectorAll("h4")[buttonID-1];
 availableAlert.style.display="block";

  totalSeats == 0
  ? (availableAlert.innerText="Not Available")
  : (availableAlert.innerText= "Available");
}