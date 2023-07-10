const liveSVG = new Vivus('profile-svg', { duration: 600 });

const daySelect = document.getElementById("day");
const yearSelect = document.getElementById("year");

for (let i = 1; i <= 31; i++) {
    daySelect.options[daySelect.options.length] = new Option(i, i);
};

for (let i = new Date().getFullYear(); i >= (new Date().getFullYear() - 100); i--) {
    yearSelect.options[yearSelect.options.length] = new Option(i, i);
};

