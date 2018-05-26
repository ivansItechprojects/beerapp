"use strict";

const request = new XMLHttpRequest(),
      rootElement = document.querySelector("#root"),
      rootPopup = document.querySelector(".root__popup");
request.open("GET", "https://api.punkapi.com/v2/beers?page=1&per_page=25", true);
request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    data.forEach(beers => {
        rootElement.innerHTML += 
        `<div class="mainDiv2">
            <div class="topDiv">
                <h2>${beers.name}</h2>
                <img src =" ${beers.image_url}" alt="" />
                <p>${beers.tagline}</p>
            </div>
        </div>
        <div class="popupElement">
            <div class="popuptext">
            <span class="closePopup">&#x2716;</span>
                <p class="beerHeading">${beers.name}</p>
                <div class="beerinfo">
                    <div class="beerinfo_left">
                        <img src =" ${beers.image_url}" alt="" />
                    </div>
            <div class="beerinfo_right">
                <p><span>Tagline:</span> ${beers.tagline}</p>
                <p><span>Description:</span> ${beers.description}</p> 
                <p class="beerStatsHeading"><span >Beer Stats:</span></p> 
                <ul class="beerStats">
                    <li>${beers.ibu} ibu </li>
                    <li>${beers.abv} abv </li>
                    <li>${beers.ebc} ebc</li>
                </ul>
                <p><span>Brewers tips:</span> ${beers.brewers_tips}</p>
                <span class="GoodWidthHeading">Good width:</span><p class="foodsreplace">${beers.food_pairing}</p>
            </div>
        </div>
    </div>
        `;
       ;
    });
  } else {
    console.log("error błąd z połączeniem");
  }
}
request.send();
document.addEventListener("DOMContentLoaded", function() {
    const preloaderVar = document.getElementById("loader-wrapper");
    setTimeout(function(){
        preloaderVar.style.display = "none";        
        $(document).ready(function() {
            let modal = $('#popupElement'),
                modal2 = $('.topDiv'),
                close = $('.closePopup');
             modal2.click(function(){
                $(this).parent().next(modal).addClass('active');
                $('body').addClass('hideBoddyScroll');
             });
             close.click(function(){
                $(this).parent().parent(modal).removeClass('active');
                $('body').removeClass('hideBoddyScroll');
            });  
            });
    },5000);
});


