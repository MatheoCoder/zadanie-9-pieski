const breedSelect = document.querySelector('#breed-select');
const dogImages = document.querySelector('#dog-images');

fetch('https://dog.ceo/api/breeds/list/all')
	.then((response) => response.json())
	.then((data) => {
		const breeds = Object.keys(data.message);
		breeds.forEach((breed) => {
			const option = document.createElement('option');
			option.value = breed;
			option.textContent = breed;
			breedSelect.appendChild(option);
		});
	})
	.catch((error) => console.error(error));

breedSelect.addEventListener('change', () => {
	const breed = breedSelect.value;
	const url = `https://dog.ceo/api/breed/${breed}/images/random/9`;

	fetch(url)
		.then((response) => response.json())
		.then((data) => {
			const images = data.message;
			dogImages.innerHTML = '';
			images.forEach((imageUrl) => {
				const img = document.createElement('img');
				img.src = imageUrl;
				img.alt = `${breed} dog`;
				img.classList.add('dog-image');
				const wrapper = document.createElement('div');
				wrapper.classList.add('dog-image-wrapper');
				wrapper.appendChild(img);
				dogImages.appendChild(wrapper);

				img.addEventListener('click', () => {
					window.open(imageUrl, '_blank');
				});
			});
		})
		.catch((error) => console.error(error));
});
