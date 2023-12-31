﻿<%@ Page Language="C#" AutoEventWireup="true" CodeFile="service.aspx.cs" Inherits="service" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="./assets/images/logo.jpg">
    <!-- bootstrap links -->
    <!-- <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous"> -->
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <!-- font awesome link -->
    <script src="js/fontawesome.js" crossorigin="anonymous"></script>
    <!-- css -->
    <link rel="stylesheet" href="css/detail.css">
    <!-- owl carousel cdn link for css -->
    <link rel="stylesheet" href="css/owl.carousel.min.css">
    <link rel="stylesheet" href="css/owl.theme.default.min.css">
    <title>SuperSavvy | Service at your doorstep</title>
</head>
<body>
    <form id="form1" runat="server">
   <div id="var" style="display:none" runat="server"></div>
    <div class="main">
        <div class="BrandsWrap p-0">
            <div class="mainHeader d-flex justify-content-between py-3 px-2 align-items-center">
                <div class="detailBack d-flex align-items-center">
                    <div class="backBtn m-0 p-0">
                        <a href="./index.html"><i class="fas fa-arrow-left px-3 nav-link text-black"></i>
                        </a>
                    </div>
                    <h2>
                        Details</h2>
                </div>
                <div class="contactBtn btn rounded-3 me-2 text-white">
                    Contact Us</div>
            </div>
            <div class="brands container py-3 pt-5">
               <%-- <video width="100%" autoplay muted>
                    <source src="./assets/images/WhatsApp Video 2023-06-24 at 17.26.17.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                </video>--%>
                <img src="" id="subcatimage"/>
            </div>
        </div>
        <div class="service pt-4 ">
            <div class="serviceWrap">
                <h1 class="my-1 px-2 container" id="subcatname" >
                    </h1>
                <p class="px-2 container">
                    <span class="me-1 mt-2 bg-success p-1 rounded-2 text-white">4.8<i class="fas fa-star ms-1"></i></span>
                    (5.99 Million Bookings)</p>
                <div class="bg pt-3">
                    <div class="addBanner container w-100">
                        <div class="bannerWrap mb-2 bg-white rounded-3 d-flex">
                            <div class="bannerText text-center rounded-3 d-flex">
                                <div class="owl-carousel owl-theme myCarousel p-2">
                                    <div class="item d-flex justify-content-between align-items-center">
                                        <div class="bannerImg text-center p-2">
                                            <i class="fas fa-hand-holding-usd fs-1"></i>
                                        </div>
                                        <div class="d-flex flex-column justify-content-center align-items-center">
                                            <p class="h4 mb-0">
                                                Great Service</p>
                                            <p class="lead text-muted mb-0">
                                                We povide grate service</p>
                                        </div>
                                    </div>
                                    <div class="item d-flex justify-content-between align-items-center">
                                        <div class="bannerImg text-center p-2">
                                            <i class="fas fa-hand-holding-usd fs-1"></i>
                                        </div>
                                        <div class="d-flex flex-column justify-content-center align-items-center">
                                            <p class="h4 mb-0">
                                                Great Service</p>
                                            <p class="lead text-muted mb-0">
                                                We povide grate service</p>
                                        </div>
                                    </div>
                                    <div class="item d-flex justify-content-between align-items-center">
                                        <div class="bannerImg text-center p-2">
                                            <i class="fas fa-hand-holding-usd fs-1"></i>
                                        </div>
                                        <div class="d-flex flex-column justify-content-center align-items-center">
                                            <p class="h4 mb-0">
                                                Great Service</p>
                                            <p class="lead text-muted mb-0">
                                                We povide grate service</p>
                                        </div>
                                    </div>
                                    <div class="item d-flex justify-content-between align-items-center">
                                        <div class="bannerImg text-center p-2">
                                            <i class="fas fa-hand-holding-usd fs-1"></i>
                                        </div>
                                        <div class="d-flex flex-column justify-content-center align-items-center">
                                            <p class="h4 mb-0">
                                                Great Service</p>
                                            <p class="lead text-muted mb-0">
                                                We povide grate service</p>
                                        </div>
                                    </div>
                                </div>
                                <div id="carouselCounter" class=" px-2">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="nav" class="serviceTabWrap px-2 w-100 container mx-auto">
                        <div class="serviceTabs p-0 d-flex" id="servicessubcat">
                             
                        </div>
                    </div>
                </div>
                <div id="serviceDivs" class="serviceDivs container">
                   
                </div>
            </div>
        </div>
        <div class="chooseServ container-fluid text-center">
            <div id="chooseServ" class="chooseServWrap container p-2 my-2 rounded-3">
                <p class="chooseServText fw-bold text-center fs-5 m-0 text-white">
                    Choose Services
                </p>
            </div>
            <div id="chosenServ" class="chosenServWrap container justify-content-between p-2 my-2 rounded-3 fs-5 fw-bold text-white align-items-start">
                <div class="choseServPrice d-flex mt-1">
                    <div class="noOfItems p-0 pe-1">
                        1 item</div>
                    <div class="price p-0 ps-1">
                        Rs 999</div>
                </div>
                <div class="viewCart">
                    <p class="m-0">
                        <a href="cart.html" class=" fs-5 btn py-1 fw-bold p-2">Proceed</a></p>
                </div>
            </div>
        </div>
        <div id="popupContainer" class="popupContainer">
            <div class="popupWrap container p-3">
                <div class="crossBtnDiv text-end">
                    <div id="crossBtn" class="crossBtn btn btn-secondary rounded-circle fs-4">
                        &times;</div>
                </div>
                <p class="mb-0 fs-5 mb-1">
                    Enter your mobile number</p>
                <input type="tel" id="noInput" class="form-control fs-5 p-2" value="+91">
                <div id="nextBtn" class="btn btn-secondary ms-auto mt-2 w-100 fs-6">
                    Next</div>
            </div>
        </div>
        <div class="reviews container pt-5 mt-2">
            <h3 class="mb-3">
                What all customers say about us</h3>
            <div class="reviewWrap mb-5 pb-3">
                <div class="reviewCard border rounded-3 mb-2">
                    <div class="reviewCardHeader  d-flex justify-content-between">
                        <div class="reviewNameWrap d-flex">
                            <div class="userIcon">
                                <i class="fas fa-user me-2"></i>
                            </div>
                            <div class="userName">
                                Vikas Kanoo</div>
                        </div>
                        <div class="userRating">
                            <i class="fas fa-star"></i>4.9</div>
                    </div>
                    <div class="ratingDate text-muted ms-4">
                        19 June 1999</div>
                    <p class="quoteIcon my-0">
                        <i class="fas fa-quote-left text-secondary"></i>
                    </p>
                    <div class="userReview">
                        </i>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus enim quod
                        fugiat tenetur! Dicta a voluptatibus excepturi repellendus, delectus consectetur
                        veritatis nisi? Aspernatur, repellat qui!</div>
                </div>
                <div class="reviewCard border rounded-3 mb-2">
                    <div class="reviewCardHeader  d-flex justify-content-between">
                        <div class="reviewNameWrap d-flex">
                            <div class="userIcon">
                                <i class="fas fa-user me-2"></i>
                            </div>
                            <div class="userName">
                                Vikas Kanoo</div>
                        </div>
                        <div class="userRating">
                            <i class="fas fa-star"></i>4.9</div>
                    </div>
                    <div class="ratingDate text-muted ms-4">
                        19 June 1999</div>
                    <p class="quoteIcon my-0">
                        <i class="fas fa-quote-left text-secondary"></i>
                    </p>
                    <div class="userReview">
                        </i>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus enim quod
                        fugiat tenetur! Dicta a voluptatibus excepturi repellendus, delectus consectetur
                        veritatis nisi? Aspernatur, repellat qui!</div>
                </div>
                <div class="reviewCard border rounded-3 mb-2">
                    <div class="reviewCardHeader  d-flex justify-content-between">
                        <div class="reviewNameWrap d-flex">
                            <div class="userIcon">
                                <i class="fas fa-user me-2"></i>
                            </div>
                            <div class="userName">
                                Vikas Kanoo</div>
                        </div>
                        <div class="userRating">
                            <i class="fas fa-star"></i>4.9</div>
                    </div>
                    <div class="ratingDate text-muted ms-4">
                        19 June 1999</div>
                    <p class="quoteIcon my-0">
                        <i class="fas fa-quote-left text-secondary"></i>
                    </p>
                    <div class="userReview">
                        </i>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus enim quod
                        fugiat tenetur! Dicta a voluptatibus excepturi repellendus, delectus consectetur
                        veritatis nisi? Aspernatur, repellat qui!</div>
                </div>
                <div class="reviewCard border rounded-3 mb-2">
                    <div class="reviewCardHeader  d-flex justify-content-between">
                        <div class="reviewNameWrap d-flex">
                            <div class="userIcon">
                                <i class="fas fa-user me-2"></i>
                            </div>
                            <div class="userName">
                                Vikas Kanoo</div>
                        </div>
                        <div class="userRating">
                            <i class="fas fa-star"></i>4.9</div>
                    </div>
                    <div class="ratingDate text-muted ms-4">
                        19 June 1999</div>
                    <p class="quoteIcon my-0">
                        <i class="fas fa-quote-left text-secondary"></i>
                    </p>
                    <div class="userReview">
                        </i>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus enim quod
                        fugiat tenetur! Dicta a voluptatibus excepturi repellendus, delectus consectetur
                        veritatis nisi? Aspernatur, repellat qui!</div>
                </div>
            </div>
        </div>
    </div>
    <!-- jQuery cdn link -->
    <script src="js/jquery-3.7.0.min.js"></script>
    <!-- our own javascript -->
    
    <script src="js/detail2.js"></script>
    <!-- bootstrap javascript -->
    <!-- <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz"
        crossorigin="anonymous"></script> -->
    <script src="js/bootstrap.bundle.min.js"></script>
    <!-- owl carousel javascript link -->
    <script src="js/owl.carousel.min.js"></script>
    <!-- javascript for carousel -->
    <script>
        $(document).ready(function () {
            const owl = $('.owl-carousel');
            $('.owl-carousel').owlCarousel({
                loop: true,
                margin: 10,
                responsiveClass: true,
                dots: false,
                autoplay: true,
                autoplayTimeout: 2000,
                responsive: {
                    0: {
                        items: 1,
                        nav: false
                    },
                    600: {
                        items: 1,
                        nav: false
                    },
                    1000: {
                        items: 1,
                        nav: false,
                        loop: true
                    }
                },
                onChanged: carouselCounter
            })

            function carouselCounter(e) {
                $('#carouselCounter').text(e.item.index - 1 + '/' + e.item.count)
            }

            carouselCounter({ item: { index: 1, count: owl.find('.item').length } })
        });
    </script>
    </form>
</body>
</html>
