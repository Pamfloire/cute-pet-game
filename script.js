const pet = document.querySelector('.pet-box');
const moodText = document.getElementById('mood');

function feedPet() {
  pet.innerText = '🍔';
  moodText.innerText = 'Full & Sleepy';
  setTimeout(() => {
    pet.innerText = '🐱';
    moodText.innerText = 'Happy';
  }, 2000);
}

function petCat() {
  pet.innerText = '😻';
  moodText.innerText = 'Purring!';
  setTimeout(() => {
    pet.innerText = '🐱';
    moodText.innerText = 'Happy';
  }, 2000);
}
