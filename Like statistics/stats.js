let pets = localStorage.getItem('pets');
let feeds = localStorage.getItem('feeds');

document.getElementById('pets').textContent = pets;
document.getElementById('feeds').textContent = feeds;