
let pets = parseInt(localStorage.getItem('pets'));
let feeds = parseInt(localStorage.getItem('feeds'));




function updateStats(pet = 0, feed = 0) {
  pets = parseInt(pets) + pet;
  feeds = parseInt(feeds) + feed;
  localStorage.setItem('pets', pets);
  localStorage.setItem('feeds', feeds);
}


 function getNewDog() {
   fetch('https://dog.ceo/api/breeds/image/random')
     .then(response => response.json())
     .then(data => {
       document.getElementById('dogImage').src = data.message;
     })
     .catch(error => console.error(error));
 }


 function petDog() {
   updateStats(1, 0);
   getNewDog();
 }

 
 function feedDog() {
   updateStats(0, 1);
   getNewDog();
 }


 getNewDog();