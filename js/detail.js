const nav = document.querySelector('#nav');
const sticky = nav.offsetTop;

//function for the tabs
window.onscroll = function () { stickyFunc() };

const stickyFunc = () => {
    if (window.innerWidth < 700) {
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
}

// function for the tab and section functionallity
function tabNSec(id) {
    // const element = document.getElementById(id);
    // element.scrollIntoView({behavior: "smooth"});
    // console.log('scrolling')
    // const element = document.getElementById(id);
    // const offset = 90; // Adjust this value to set the desired gap

    // const elementPosition = element.getBoundingClientRect().top;
    // const offsetPosition = elementPosition - offset;

    // window.scrollTo({
    //     top: offsetPosition,
    //     behavior: 'smooth'
    // });

    // const container = document.body;
    // const scrollTo =  $('#'+id);//document.getElementById(id);
    var container = $('body');
    var scrollTo = $('#' + id); // Calculating new position of scrollbar
    var position = scrollTo.offset().top - container.offset().top + container.scrollTop(); // Setting the value of scrollbar
    container.scrollTop(position - 100);
    console.log('function is working')

}

const addBtns = document.querySelectorAll('.addBtn');
const countDiv = document.querySelectorAll('.countdiv');
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
            // addBtn.style.marginTop = '-100px';
            chooseServ.style.display = 'none';
            chosenServ.style.display = 'flex';
            addBtn.innerHTML = '+';
            addBtn.style.width = 'max-content';
            // addBtn.style.backgroundColor = '#eaffea';
            // addBtn.style.color = 'green';
            addBtn.style.borderBottomLeftRadius = '0px';
            addBtn.style.borderTopLeftRadius = '0px';
            // addBtn.style.borderLeft = 'none';
            minusBtns[index].style.display = 'block';
            countDiv[index].innerHTML = counts[countKey];
            countDiv[index].style.display = 'block'
        }
    });

    minusBtns[index].addEventListener('click', () => {
        if (counts[countKey] > 0) {
            counts[countKey] -= 1;
            console.log(counts[countKey]);
            countDiv[index].innerHTML = counts[countKey]

            if (counts[countKey] === 0) {
                addBtn.innerHTML = 'Add';
                addBtn.style.width = '90px';
                addBtn.style.borderBottomLeftRadius = '0.375rem';
                addBtn.style.borderTopLeftRadius = '0.375rem';
                // addBtn.style.borderLeft = '1px solid #6c757d';
                // addBtn.style.backgroundColor = 'white';
                // addBtn.style.color = '#6c757d';
                chooseServ.style.display = 'flex';
                chosenServ.style.display = 'none';
                countDiv[index].style.display = 'none'
                // addBtn.style.marginTop = '-30px'
                minusBtns[index].style.display = 'none';
            } else {
                countDiv.innerHTML = counts[countKey];
            }
        }
    });
});