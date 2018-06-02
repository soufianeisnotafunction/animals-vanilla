const app = document.querySelector("#app");

const animals = [{
      name: "Le tigre",
      img: "http://res.cloudinary.com/soufiane75/image/upload/v1527948199/tiger-snow-growling-zoo-40661.jpg",
      sound: "http://www.wavlist.com/soundfx/007/tiger-roar1.wav"
    } ,
    {
    name: "Le chien",
    img: "https://res.cloudinary.com/soufiane75/image/upload/v1527900337/pexels-photo-460823.jpg",
    sound: "http://www.pacdv.com/sounds/miscellaneous_sounds/dog-barking-1.wav"
  },
  {
    name: "Le chat",
    img: "http://res.cloudinary.com/soufiane75/image/upload/v1527900269/kitty-cat-kitten-pet-45201.jpg",
    sound: "http://www.yuckles.com/catsounds/meow2.wav"
  },
  {
    name: "La vache",
    img: "https://res.cloudinary.com/soufiane75/image/upload/v1527900382/pexels-photo-551623.jpg",
    sound: "http://www.eletech.com/Products/Kiddie_Ride_Boards/cow.wav"
  }
];

function renderCards(arr) {
  return arr.map(element => {
    return `
          <div class="row ">
              <div class="col s12 m6">
                <div class="card  z-depth-4" >
                  <div class="card-image">
                    <img  class="responsive-img" src=${element.img}  >
                    <a class="play btn-floating halfway-fab waves-effect btn-large waves-light red" onclick="playSound(this)"><audio src=${element.sound}></audio><i class="material-icons">play_arrow</i></a>
                  </div>
                  <div class="card-content">
                    <h5>${element.name}</h5>
                  </div>
                </div>
              </div>
            </div> 
          `;
  }).join('');
};
app.innerHTML = renderCards(animals);

const playSound = el => {
  const sound = el.children[0];
  sound.currentTime = 0;
  sound.play();
};

// const play = document.querySelectorAll(".play");
// play.forEach((el) => {
//   el.onclick = () => el.children[0].play()
// })