function showTab(tabId)
{
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => 
    {
        tab.style.display = 'none';
        tab.classList.remove('active');
    });

    const activeTab = document.getElementById(tabId);
    activeTab.style.display = 'block';
    activeTab.classList.add('active');
}

//First Javascript Effect
document.getElementById('toggleImageBtn').addEventListener('click', () => {
    const projectImage = document.getElementById('projectImage');

    const currentDisplay = window.getComputedStyle(projectImage).display;

    if(currentDisplay == 'none') {
        projectImage.style.display = 'block';
    }
    else {
        projectImage.style.display = 'none';
    }
});

//Second Javascript Effect
const box = document.getElementById('animatedBox');
let position = 0;
let direction = 1;
const maxDistance = 200;
const speed = 2;
function animateBox() {
    position += direction * speed;
    box.style.left = position + 'px';
    if(position >= maxDistance || position <= 0) {
        direction *= -1;
    }
    requestAnimationFrame(animateBox);
}
document.querySelector('button[onclick="showTab(\'projects\')"]').addEventListener('click', () => {
    position = 0;
    direction = 1;
    box.style.left = '0px';
    requestAnimationFrame(animateBox);
});

//Third Javascript Effect
const image = document.getElementById('changingImage');
image.addEventListener('click', () => {
    if(image.src.includes('img2.JPG')) {
        image.src = 'img/img5.jpg';
        image.alt = 'Second Image';
    }
    else {
        image.src = 'img/img2.JPG';
        image.alt = 'First Image';
    }
});

//Forth Javascript Effect
const fontBox = document.getElementById('fontBox');
const changeFontBtn = document.getElementById('changeFontBtn');
let fontToggle = false;
changeFontBtn.addEventListener('click', () => {
    fontBox.classList.remove('font-style-1', 'font-style-2');
    if(fontToggle) {
        fontBox.classList.add('font-style-1');
    }
    else {
        fontBox.classList.add('font-style-2');
    }
    fontToggle = !fontToggle;
});

//Fifth Javascript Effect
const colorBox = document.getElementById('colorBox');
const changeColorBtn = document.getElementById('changeColorBtn');
let colorToggle = false;
changeColorBtn.addEventListener('click', () => {
    colorBox.classList.remove('color-style-1', 'color-style-2');
    if(colorToggle) {
        colorBox.classList.add('color-style-1');
    }
    else {
        colorBox.classList.add('color-style-2');
    }
    colorToggle = !colorToggle;

});
