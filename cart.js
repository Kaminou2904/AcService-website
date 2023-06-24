const addBtns = document.querySelectorAll('.addBtn');
const chooseServ = document.querySelector('#chooseServ');
const chosenServ = document.querySelector('#chosenServ');
const minusBtns = document.querySelectorAll('#minusBtn');
const counts = {}; // Object to store count values for each button

// Iterate over each addBtn
addBtns.forEach((addBtn, index) => {
    const countKey = `count_${index}`; // Generate a unique count key for each button
    counts[countKey] = 1; // Initialize count for the button
    // Attach click event listener to the button
    addBtn.addEventListener('click', () => {
        counts[countKey] += 1; // Increment count for the button
        console.log(counts[countKey]);

        // chooseServ.style.display = 'none';
        // chosenServ.style.display = 'flex';
        if (counts[countKey] !== 0) {
            addBtn.innerHTML = `${counts[countKey]} +`;
            // chooseServ.style.display = 'none';
            // chosenServ.style.display = 'flex';
            minusBtns[index].style.display = 'block';
        }
    });

    minusBtns[index].addEventListener('click', () => {
        if (counts[countKey] > 1) {
            counts[countKey] -= 1;
            console.log(counts[countKey]);

            if (counts[countKey] === 0) {
                addBtn.innerHTML = 'Add';
                // chooseServ.style.display = 'flex';
                // chosenServ.style.display = 'none';
                addBtn.style.width = '70px'
                minusBtns[index].style.display = 'none';
            } else {
                addBtn.innerHTML = counts[countKey];
            }
        }
    });
});