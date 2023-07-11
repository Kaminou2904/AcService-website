const para = document.getElementById('addPara');
// const paraText = para.innerHTML;
const mainHeader = document.querySelector('#mainHeader');
const locaPopup = document.querySelector('#locaPopup');
const canclePopup = document.querySelector('#canclePopup');

//function to location popup
// mainHeader.addEventListener('click', ()=>{
//     if(locaPopup.style.display == 'flex'){
//         locaPopup.style.display = 'none';
//     }else{
//         locaPopup.style.display = 'flex'
//     }
// })

// canclePopup.addEventListener('click', ()=>{
//     locaPopup.style.display = 'none';
// })

// if (paraText.length > 40) {
    // const newText = paraText.slice(0, 40) + '...<i class="fa fa-solid fa-angle-down">';
    // para.innerHTML = newText;
// }

document.querySelector(".popupContainer").style.display = "none";
document.querySelector("#popup").style.bottom = "-60vh";

function openPopup(divNumber) {
    const childDiv = document.querySelectorAll(".categoryCard .popupContent")[divNumber - 1];
    const popup = document.querySelector('#popup');
    const popupContent = document.getElementById("openContent");    
    popupContent.innerHTML = childDiv.innerHTML;

    const popupContainer = document.querySelector(".popupContainer");
    popupContainer.style.display = "flex";
    setTimeout(() => {
        popup.style.bottom = '0px';
    }, 0);
}

function closePopup() {
    const popupContainer = document.querySelector(".popupContainer");
    const popup = document.querySelector('#popup');
    popup.style.bottom = '-60vh';
    setTimeout(() => {
        popupContainer.style.display = "none";
    }, 300);
}


// function to bring the data from the api 

const categoryCard = document.querySelectorAll('.categoryCard');
const popupContent = document.querySelectorAll('.popupContent')

categoryCard.forEach((card, index) => {
    card.addEventListener('click', () => {
        const cardid = parseInt(card.id)
        // console.log(cardid);
        fetch('https://supersavvy.in/api.asmx/GetSubCats?id=' + cardid)
            .then(res => res.json())
            .then(data => {
                // console.log(data.Data);
                let html = ``;
                data.Data.forEach((arrData) => {
                    // console.log(arrData.SubCatName);
                    html += `
                        <div class="trendItem  m-2 p-2 d-flex align-items-center rounded-3">
                            <img src="${arrData.Image}"
                            class="img-fluid w-25 me-3" alt="ternding service">
                            <div class="trendText">
                            <p class="trentName fw-bold fs-6 my-0"><a href="${arrData.Link}" class="nav-link">${arrData.SubCatName}</a></p>
                            </div>
                        </div>
                    `;
                });
                console.log(html);
                popupContent[index].innerHTML = html;
            })
            .catch((err) => { console.log(err); });
    });
});