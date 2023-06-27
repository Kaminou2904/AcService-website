const nav = document.querySelector('#nav');
const sticky = nav.offsetTop;

//function for the tabs
window.onscroll = function () { stickyFunc() };

const stickyFunc = () => {
    if (window.scrollY >= sticky) {
        nav.classList.add('sticky');
        nav.style.backgroundColor = '#f7f5ff';
        nav.style.marginTop = '66px';
    } else {
        nav.classList.remove('sticky');
        nav.style.backgroundColor = 'transparent';
        nav.style.marginTop = '0px';
    };
}

const addBtns = document.querySelectorAll('.addBtn');
const chooseServ = document.querySelector('#chooseServ');
const chosenServ = document.querySelector('#chosenServ');
const minusBtns = document.querySelectorAll('#minusBtn');
const counts = {}; // Object to store count values for each button

// Iterate over each addBtn
addBtns.forEach((addBtn, index) => {
    const countKey = `count_${index}`; // Generate a unique count key for each button
    counts[countKey] = 0; // Initialize count for the button
    // Attach click event listener to the button
    addBtn.addEventListener('click', () => {
        counts[countKey] += 1; // Increment count for the button
        console.log(counts[countKey]);

        if (counts[countKey] !== 0) {
            addBtn.style.marginTop = '-100px';
            addBtn.innerHTML = `${counts[countKey]} +`;
            chooseServ.style.display = 'none';
            chosenServ.style.display = 'flex';
            minusBtns[index].style.display = 'block';
        }
    });

    minusBtns[index].addEventListener('click', () => {
        if (counts[countKey] > 0) {
            counts[countKey] -= 1;
            console.log(counts[countKey]);

            if (counts[countKey] === 0) {
                addBtn.innerHTML = 'Add';
                chooseServ.style.display = 'flex';
                chosenServ.style.display = 'none';
                addBtn.style.marginTop = '-30px'
                minusBtns[index].style.display = 'none';
            } else {
                addBtn.innerHTML = counts[countKey];
            }
        }
    });
});