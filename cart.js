const addBtns = document.querySelectorAll('.addBtn');
const chooseServ = document.querySelector('#chooseServ');
const chosenServ = document.querySelector('#chosenServ');
const minusBtns = document.querySelectorAll('#minusBtn');
const payBtn = document.querySelector('#payBtn');
const popupContainer = document.querySelector('.popupContainer');
const manualLocaBtn = document.querySelector('#manualLocationBtn');
const manualLocaDiv = document.querySelector('#manualLoca');
const nextBtn1 = document.querySelector('#nextBtn1');
const nextBtn2 = document.querySelector('#nextBtn2');
const mobileNoDiv = document.querySelector('#mobileNo');
const addressCont = document.querySelector('#addressContainer');
const timeSlotDiv = document.querySelector('#timeSlot');
const timeCards = document.querySelectorAll('.timeCard');
const submitBtn = document.querySelector('#submitBtn');
const thanku = document.querySelector('#thanku');
const doneBtn = document.querySelector('#done');
const buildingInput = document.querySelector('#building');
const landmarkInput = document.querySelector('#landmark');
const regionInput = document.querySelector('#region');
const mobNo = document.querySelector('#mobNo');
const counts = {}; // Object to store count values for each button
const formData = {};

// Iterate over each addBtn
addBtns.forEach((addBtn, index) => {
    const countKey = `count_${index}`; // Generate a unique count key for each button
    counts[countKey] = 1; // Initialize count for the button

    // Attach click event listener to the button
    addBtn.addEventListener('click', () => {
        counts[countKey] += 1; // Increment count for the button
        console.log(counts[countKey]);
        if (counts[countKey] !== 0) {
            addBtn.innerHTML = `${counts[countKey]} +`;
            minusBtns[index].style.display = 'block';
        }
    });

    minusBtns[index].addEventListener('click', () => {
        if (counts[countKey] > 1) {
            counts[countKey] -= 1;
            console.log(counts[countKey]);

            if (counts[countKey] === 0) {
                addBtn.innerHTML = 'Add';
                addBtn.style.width = '70px'
                minusBtns[index].style.display = 'none';
            } else {
                addBtn.innerHTML = counts[countKey];
            }
        }
    });
});

// payment button
payBtn.addEventListener('click', ()=>{
    popupContainer.style.display = 'flex';
    addressCont.style.display = 'block';
    manualLocaDiv.style.display = 'none';
})

// functions for the form
manualLocaBtn.addEventListener('click', ()=>{
    if (manualLocaDiv.style.display == 'block') {
        manualLocaDiv.style.display = 'none';
    } else {
        manualLocaDiv.style.display = 'block';
    }
    
})

nextBtn1.addEventListener('click', ()=>{
    addressCont.style.display = 'none';
    mobileNoDiv.style.display = 'block';
    formData.address = [{'building': buildingInput.value}, {'landmark': landmarkInput.value}, {'region': regionInput.value}];
});

nextBtn2.addEventListener('click', ()=>{
    mobileNoDiv.style.display = 'none';
    timeSlotDiv.style.display = 'block';
    formData.name = mobNo.value;
});

timeCards.forEach((timeCard, index)=>{
    timeCard.addEventListener('click', ()=>{
        console.log('hello from time card ', index);
    })
});

submitBtn.addEventListener('click', ()=>{
    console.log('form was submitted');
    timeSlotDiv.style.display = 'none';
    thanku.style.display = 'block';
    formData.time = 'time'
});

doneBtn.addEventListener('click', ()=>{
    popupContainer.style.display = 'none';
    thanku.style.display = 'none'
    console.log(formData)
})