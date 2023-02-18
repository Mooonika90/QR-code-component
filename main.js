const year = document.querySelector('.year');

const currentYear = () => {
	const newDate = new Date();
	const currentDate = newDate.getFullYear();
	year.textContent = currentDate;
};

currentYear();
