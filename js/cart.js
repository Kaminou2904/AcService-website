const addBtns = document.querySelectorAll('.addBtn');
const countDiv = document.querySelectorAll('.countdiv');
const chooseServ = document.querySelector('#chooseServ');
const chosenServ = document.querySelector('#chosenServ');
const minusBtns = document.querySelectorAll('#minusBtn');
const payBtn = document.querySelector('#payBtn');
const popupContainer = document.querySelector('.popupContainer');
const manualLocaBtn = document.querySelector('#manualLocationBtn');
const manualLocaDiv = document.querySelector('#manualLoca');
const nextBtn1 = document.querySelector('#nextBtn1');
const crossBtn = document.querySelector('#crossBtn');
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
const currentLocaField = document.querySelector('#currentLocaField');
const currentLocaLege = document.querySelector('#currentLocaLege');
const currentLoca = document.querySelector('#currentLoca');
const extraInfo = document.querySelector('.extraInfo');
const radioData = document.querySelector('input[name="forWhome"]:checked');
const locations = document.querySelectorAll('.locationTab');
const smtimeCards = document.querySelectorAll('.smTimeCard');
const counts = {}; // Object to store count values for each button
const formData = {};

// Iterate over each addBtn
addBtns.forEach((addBtn, index) => {
    const countKey = `count_${index}`; // Generate a unique count key for each button
    counts[countKey] = 1; // Initialize count for the button

    // Attach click event listener to the button
    addBtn.addEventListener('click', () => {
        counts[countKey] += 1; // Increment count for the button
        // console.log(counts[countKey]);
        if (counts[countKey] !== 0) {
            // addBtn.innerHTML = `${counts[countKey]} +`;
            addBtn.innerHTML = '+';
            addBtn.style.width = 'max-content';
            addBtn.style.borderBottomLeftRadius = '0px';
            addBtn.style.borderTopLeftRadius = '0px';
            minusBtns[index].style.display = 'block';
            countDiv[index].innerHTML = counts[countKey];
            countDiv[index].style.display = 'block';
        }
    });

    minusBtns[index].addEventListener('click', () => {
        if (counts[countKey] > 0) {
            counts[countKey] -= 1;
            // console.log(counts[countKey]);

            if (counts[countKey] === 0) {
                addBtn.innerHTML = 'Add';
                addBtn.style.width = '90px';
                addBtn.style.borderBottomLeftRadius = '0.375rem';
                addBtn.style.borderTopLeftRadius = '0.375rem';
                countDiv[index].style.display = 'none';
                // addBtn.style.width = '70px'
                minusBtns[index].style.display = 'none';
            } else {
                // addBtn.innerHTML = counts[countKey];
                countDiv[index].innerHTML = counts[countKey];
            }
        }
    });
});

// payment button
payBtn.addEventListener('click', () => {
    popupContainer.style.display = 'flex';
    addressCont.style.display = 'flex';
    manualLocaDiv.style.display = 'none';
    extraInfo.style.display = 'block';
    $('.popuph4').text('Address Details');
    // $('body').css('overflow', 'hidden');
    // manualLocaDiv.style.display = 'none';
})

// functions for the form

// manualLocaBtn.addEventListener('click', ()=>{
//     if (manualLocaDiv.style.display == 'block') {
//         manualLocaDiv.style.display = 'none';
//     } else {
//         manualLocaDiv.style.display = 'block';
//     }

// })

currentLocaField.addEventListener('click', () => {
        manualLocaDiv.style.display = 'block';
        currentLoca.scrollIntoView({behavior: "smooth"});
})

locations.forEach((location, index)=>{
    location.addEventListener('click', ()=>{
        locations.forEach((d)=>{
            d.classList.remove('activeLocationTab');
        })
        location.classList.add('activeLocationTab');
    })
})

nextBtn1.addEventListener('click', () => {
    addressCont.style.display = 'none';
    timeSlotDiv.style.display = 'block';
    extraInfo.style.display = 'none';
    manualLocaDiv.style.display = 'none';
    formData.locaiton = $('.activeLocationTab').text();
    formData.address = [{'building': buildingInput.value}, {'landmark': landmarkInput.value}, {'region': currentLoca.value}];
    formData.forWhome = radioData.value;
    buildingInput.value = '';
    landmarkInput.value = '';
    currentLoca.value = '';
    $('.popuph4').text('Booking Schedule');
});

crossBtn.addEventListener('click', () => {
    popupContainer.style.display = 'none';
    timeSlotDiv.style.display = 'none';
    // mobileNoDiv.style.display = 'none';
    thanku.style.display = 'none';
    manualLocaDiv.style.display = 'none';
    $('body').css('overflow', 'auto');
})

submitBtn.addEventListener('click', () => {
    console.log('form was submitted');
    timeSlotDiv.style.display = 'none';
    manualLocaDiv.style.display = 'none';
    $('.popuph4').text('');
    formData.time = $('.activeTime').text().trim();
    thanku.style.display = 'block';
    $('body').css('overflow', 'auto');
    // $('.smTime').css('display', 'none')
    console.log(formData)
});

doneBtn.addEventListener('click', () => {
    popupContainer.style.display = 'none';
    thanku.style.display = 'none'
})

//funciton for time card

timeCards.forEach((timeCard, index) => {
    timeCard.addEventListener('click', () => {
        timeCards.forEach((t)=>{
            t.classList.remove('activeDate')
        })
        timeCard.classList.add('activeDate')
        formData.date = $('.activeDate').text().trim();
        // $('.smTime').css('display', 'block')
    })
});

smtimeCards.forEach((smtimeCard, index)=>{
    smtimeCard.addEventListener('click', ()=>{
        smtimeCards.forEach((d)=>{
            d.classList.remove('activeTime');
        })
        smtimeCard.classList.add('activeTime');
    })
})