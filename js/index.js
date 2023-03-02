const dive = document.querySelector(".container");
const API_URL = "https://randomuser.me/api/";
const userImage = document.querySelector(".user-image");

fetch(API_URL)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let gender = data.results[0].gender;
    let firstName = data.results[0].name.first;
    let lastName = data.results[0].name.last;
    let imgLarge =  data.results[0].picture.large;
    let imgMedium =  data.results[0].picture.medium;
    let imgThumb =  data.results[0].picture.thumbnail;

    userImage.src = imgLarge;
    console.log(firstName);
    console.log(lastName);
    console.log(gender);
    console.log(imgLarge);
    console.log(imgMedium);
    console.log(imgThumb);

  });