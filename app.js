const movies = [
	'Portrait of a Lady on Fire',
	'Cinema Paradiso',
	'Amélie',
	'Get Out',
	'Fight Club',
	'The Matrix',
	'Virgin Suicidal',
	'Almost Famous',
	'American History X',
	'Jakten',
	'Dancer in the dark',
	'The Grand Budapest Hotel',
	'Lady Bird',
	'Boyhood',
	'May December',
	'Moonlight',
]

const pickMovie = () => {
	const selectedTitle = document.querySelector('.movie-title');
	const randomIndex = Math.floor(Math.random() * movies.length);
	selectedTitle.textContent = movies[randomIndex] + '!';	

	selectedTitle.style.animation = 'none';
    setTimeout(() => {
        selectedTitle.style.animation = '';
    }, 10);
};


const selectButton = document.querySelector('.button-78');
selectButton.addEventListener('click', pickMovie);

