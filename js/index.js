const USER_API = "https://randomuser.me/api/";
const DOG_API = "https://dog.ceo/api/breeds/image/random";
const CAT_API = "http://aws.random.cat/meow";
const FACT_CAT = "https://catfact.ninja/fact";
const userImage = document.querySelector(".user-image");
const dogImage = document.querySelector(".dog-img");
const catImage = document.querySelector(".cat-img");
const button = document.querySelector(".generete-btn");


async function fetchRequest(url) {
  return fetch(url)
  .then((response) => response.json())
  .then((data) => data)
}
button.addEventListener('click', async () => {
  let userResponse = await fetchRequest(USER_API);
  let dogResponse = await fetchRequest(DOG_API);
  let catResponse = await fetchRequest(CAT_API);

  catImage.src = catResponse.file;
  dogImage.src = dogResponse.message;
  userImage.src = userResponse.results[0].picture.large;
  // console.log(result);
})







