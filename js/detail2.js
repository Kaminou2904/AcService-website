var nav = document.querySelector('#nav');
//const serviceCardWraps = document.querySelectorAll('.serviceCardWrap');
var sticky = nav.offsetTop;

//function for the tabs
window.onscroll = function () { stickyFunc() };

function stickyFunc() {
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
    var container = $('body');
    var scrollTo = $('#' + id); // Calculating new position of scrollbar
    var position = scrollTo.offset().top - container.offset().top + container.scrollTop(); // Setting the value of scrollbar
    container.scrollTop(position - 100);
    $('.tab').removeClass('activeTab'); // Remove active class from all tabs
    $('[href="#' + id + '"]').addClass('activeTab'); // Add active class to the clicked tab
}

// serviceCardWraps.forEach((servWrap, index)=>{
//     console.log(servWrap.style.top);
// })

// function checkDivOnTop(divId) {
//     var div = document.getElementById(divId);
//     var rect = div.getBoundingClientRect();
//     var offsetTop = rect.top;

//     // Remove activeTab class from all tabs
//     var allTabs = document.querySelectorAll('.tab');
//     allTabs.forEach(function (tab) {
//         tab.classList.remove('activeTab');
//     });

//     if (offsetTop <= 100) {
//         var tabLink = document.querySelector('[href="#' + divId + '"]');
//         if (tabLink) {
//             tabLink.classList.add('activeTab');
//         }
//     }
// }

const addBtns = document.querySelectorAll('.addBtn');
const countDiv = document.querySelectorAll('.countdiv');
const chooseServ = document.querySelector('#chooseServ');
const chosenServ = document.querySelector('#chosenServ');
const minusBtns = document.querySelectorAll('#minusBtn');
const counts = {}; // Object to store count values for each button

const popupContainer = document.querySelector('#popupContainer');
const crossBtn = document.querySelector('#crossBtn');
const nextBtn = document.querySelector('#nextBtn');
const noInput = document.querySelector('#noInput');
let userno = {}

// Iterate over each addBtn
addBtns.forEach((addBtn, index) => {
    const countKey = `count_${index}`; // Generate a unique count key for each button
    counts[countKey] = 0; // Initialize count for the button
    // Attach click event listener to the button
    addBtn.addEventListener('click', () => {
        counts[countKey] += 1; // Increment count for the button
        // console.log(counts[countKey]);

        if (counts[countKey] !== 0) {
            chooseServ.style.display = 'none';
            chosenServ.style.display = 'flex';
            addBtn.innerHTML = '+';
            addBtn.style.width = 'max-content';
            addBtn.style.borderBottomLeftRadius = '0px';
            addBtn.style.borderTopLeftRadius = '0px';
            minusBtns[index].style.display = 'block';
            countDiv[index].innerHTML = counts[countKey];
            countDiv[index].style.display = 'block';
            popupContainer.style.display = 'flex';
            if (localStorage.getItem('userno').length >= 10) {
                popupContainer.style.display = 'none';
            } else {
                popupContainer.style.display = 'flex';
            }
        }
    });

    minusBtns[index].addEventListener('click', () => {
        if (counts[countKey] > 0) {
            counts[countKey] -= 1;
            // console.log(counts[countKey]);
            countDiv[index].innerHTML = counts[countKey]

            if (counts[countKey] === 0) {
                addBtn.innerHTML = 'Add';
                addBtn.style.width = '90px';
                addBtn.style.borderBottomLeftRadius = '0.375rem';
                addBtn.style.borderTopLeftRadius = '0.375rem';
                chooseServ.style.display = 'flex';
                chosenServ.style.display = 'none';
                countDiv[index].style.display = 'none';
                minusBtns[index].style.display = 'none';
            } else {
                countDiv.innerHTML = counts[countKey];
            }
        }
    });
});

crossBtn.addEventListener('click', () => {
    popupContainer.style.display = 'none';
    noInput.value = '+91';
})

nextBtn.addEventListener('click', () => {
    if (noInput.value.length < 13) {
        alert('please enter a valid mobile number');
    } else {
        localStorage.setItem('userno', noInput.value)
        popupContainer.style.display = 'none';
        console.log('this is localstorage', localStorage.getItem('userno'));
    }
})


function minClick(BtnID)
{
    var addBtn = $("#addBtn" + BtnID);
    var minusBtn =  $("#minBtn" + BtnID);
    var countBtn = $("#countBtn" + BtnID);
    var btncnt = parseInt( $("#countBtn" + BtnID).text());
    var btncnttest = parseInt( $("#countBtn" + BtnID).text());
    if ( btncnt > 0) {
            btncnt -= 1;
            // console.log(counts[countKey]);
            $("#countBtn" + BtnID).text(btncnt);

            if (btncnt == 0) {
                $("#addBtn" + BtnID).text( 'Add');
                $("#addBtn" + BtnID).attr("style","width:90px;border-top-left-radius: 0.375rem; border-bottom-left-radius: 0.375rem;");
                chooseServ.style.display = 'flex';
                chosenServ.style.display = 'none';
               $("#countBtn" + BtnID).hide(); 
               $("#minBtn" + BtnID).hide();
               var strItems = localStorage.getItem('service');
               strItems = strItems.replace("|" + BtnID+"INFO"+ btncnttest,"");
               
               localStorage.setItem('service', strItems) 
            } else {
                 $("#countBtn" + BtnID).text(btncnt);
                 var strItems = localStorage.getItem('service');
                 strItems = strItems.replace("|" + BtnID+"INFO"+ btncnttest,"");
                 strItems += "|" + BtnID + "INFO"+ btncnt;
                 localStorage.setItem('service', strItems) 
            }
        }
}
 

function addClick(BtnID,SubCatID)
{  
    SubCatID=$('#var').text();
    if($("#addBtn" + BtnID).text()=="+")
    {
         var addBtn = $("#addBtn" + BtnID);
        var minusBtn =  $("#minBtn" + BtnID);
        var countBtn = $("#countBtn" + BtnID);
        var btncnt = parseInt( $("#countBtn" + BtnID).text());
         var btncnttest = parseInt( $("#countBtn" + BtnID).text());
        btncnt += 1;
        $("#countBtn" + BtnID).text(btncnt);
        chooseServ.style.display = 'flex';
        chosenServ.style.display = 'none'; 
        var strItems = localStorage.getItem('service');
        strItems = strItems.replace("|" + BtnID+"INFO"+ btncnttest,"");
        strItems += "|" + BtnID + "INFO"+ btncnt;
        localStorage.setItem('service', strItems) 
        
        
    }
    else
    {
        if (localStorage.getItem('catid')!=SubCatID) {
           localStorage.setItem('catid', SubCatID)
           localStorage.setItem('service',  "|" + BtnID + "INFO1")
        } else {
             var strItems = localStorage.getItem('service');
             strItems += "|" + BtnID + "INFO1" 
             localStorage.setItem('service', strItems) 
        }
        
        chooseServ.style.display = 'none';
        chosenServ.style.display = 'flex';
        var addBtn = $("#addBtn" + BtnID);
        var minusBtn =  $("#minBtn" + BtnID);
        var countBtn = $("#countBtn" + BtnID);
        var popupContainer=$("#popupContainer");
        $("#addBtn" + BtnID).text('+');
        addBtn.attr("style","width:35px;border-top-left-radius: 0px; border-bottom-left-radius: 0px;");
        minusBtn.attr("style","display:block");
        $("#countBtn" + BtnID).text('1');
        countBtn.attr("style","display:block");
     
        if (localStorage.getItem('userno').length >= 10) {
            popupContainer.attr("style","display:none");
        } else {
            popupContainer.attr("style","display:flex"); 
        }
    }
}
//api call
 function convertToSlug(Text) {
  return Text.toLowerCase()
    .replace(/[^\w ]+/g, "")
    .replace(/ +/g, "-");
}
$(document).ready(function() {
  $.ajax({
            url: 'https://supersavvy.in/api.asmx/GetSubCategory?id=' + $('#var').text(),
            data: {},
            datatype: "json",
            success: function (e) 
            {
                $("#subcatname").text(e.CategoryName);
                if(e.CategoryImage=='')
                {
                    $("#subcatimage").hide();
                }
                else
                {
                    $("#subcatimage").show();
                    $("#subcatimage").attr("src","https://supersavvy.in/uploads/"+e.CategoryImage);
                }
                $("#serviceDivs").html("");
                var strDivstring="";
                for (var i = 0; i < e.objServices.length; i++) 
                {
                   $("#servicessubcat").append("<div class='serviceTab'> <a href='#"+   convertToSlug(e.objServices[i].ServiceName)  +"' onclick=tabNSec('"+   convertToSlug(e.objServices[i].ServiceName)  +"') class='tab rounded-2 px-2'>  <img src='https://supersavvy.in/uploads/" + e.objServices[i].ServiceImage + "' alt=''>" + e.objServices[i].ServiceName + "</a>  </div>");       
                    
                   for (var j = 0; j < e.objServices[i].products.length; j++) 
                    {       
                            if(j==0)
                            {
                                 strDivstring += "<div id='"+ convertToSlug(e.objServices[i].ServiceName) +"'><div class='serviceCardWrap pt-5'>"; 
                            }
                            
                           strDivstring += "<div class='serviceCard d-flex align-items-center'>"+
                            "    <div class='serviceCardData d-flex flex-column justify-content-between p-2'>"+
                            "        <div class='serviceNameWrap d-flex justify-content-between'>"+
                            "            <div class='serviceName'>"+
                            "                "+  e.objServices[i].products[j].ProductName +"</div>"+
                            "            <div class='serviceOffer'>"+
                            "                50% off</div>"+
                            "        </div>"+
                            "        <div class='serviceCardPrice'>"+
                            "            <span class='text-decoration-line-through text-muted'>$"+  e.objServices[i].products[j].ActualPrice +"</span> $"+  e.objServices[i].products[j].OurPrice +"</div>"+
                            "        <div class='serviceDescWrap'>"+
                            "            <div class='serviceDesc text-muted'>"+
                               e.objServices[i].products[j].Description   +"</div>"+
                            "        </div>"+
                            "    </div>"+
                            "    <div class='serviceCardImg text-center'>"+
                            "        <img src='https://supersavvy.in/uploads/"+ e.objServices[i].products[j].ProductImage +"' alt=''>"+
                            "        <div class='btnWrap'>"+
                            "            <span class='minusBtn btn btn-outline-secondary' id='minBtn"+ e.objServices[i].products[j].ID +"' onclick=\"minClick('"+e.objServices[i].products[j].ID+"','"+ e.objServices[i].ID + "')\">-</span> <span class='countdiv btn btn-outline-secondary fw-bold'"+
                            "                id=\"countBtn"+ e.objServices[i].products[j].ID +  "\"></span><span class='addBtn btn btn-outline-secondary fw-bold' onclick=\"addClick('"+e.objServices[i].products[j].ID+"','"+ e.objServices[i].ID + "')\" id=\"addBtn"+e.objServices[i].products[j].ID+"\">"+
                            "                    Add</span>"+
                            "        </div>"+
                            "    </div>"+
                            "</div>";
                            if(j==e.objServices[i].products.length-1)
                            {
                                strDivstring += "</div></div>";
                            }
                    }
                    
                 }
                  $("#serviceDivs").append(strDivstring);
            }
        })
          nav = document.querySelector('#nav');
        //const serviceCardWraps = document.querySelectorAll('.serviceCardWrap');
          sticky = nav.offsetTop;

});
 