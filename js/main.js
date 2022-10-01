// Content Variabels
const langEl = document.querySelector('.langWrap');
const link = document.querySelectorAll('a');
const titleEl = document.querySelector('.title');
const descrEl = document.querySelector('.description');

// Navigatie Variabels
const homeEl = document.querySelector('.home');
const socialEl = document.querySelector('.social');
const donateEl = document.querySelector('.donate');
const gambiaEl = document.querySelector('.gambia');
const sponsorEl = document.querySelector('.sponsor');
const contactEl = document.querySelector('.contact');

link.forEach(el => {
    el.addEventListener('click', () => {
        langEl.querySelector('.active').classList.remove('active');
        el.classList.add('active');

        const attr = el.getAttribute('language');
        
// Content Event Listners
        titleEl.textContent = data[attr].title;
        descrEl.textContent = data[attr].description;

// Navigatie Event Listners
        homeEl.textContent = data[attr].home;
        socialEl.textContent = data[attr].social;
        donateEl.textContent = data[attr].donate;
        gambiaEl.textContent = data[attr].gambia;
        sponsorEl.textContent = data[attr].sponsor;
        contactEl.textContent = data[attr].contact;

        
    });
});


// Hier laat ik alle text voor de website
var data = {
      "english": 
      {
        "home": "Home",
        "social": "Social Media",
        "donate": "Donations",
        "test": "dit is java script!",
        "gambia": "Gambia",
        "sponsor": "Our Sponsors",
        "contact": "Contact us",
        "title": "Hello!",
        "welcome": "welcome to my site!",
        "footer": "This website is made my Robyn Duits (c) 2022",
        "email": "voorbeeld@voorbeeld.com",
        "tel": "1234567890",
        "plaats": "var var away!",
        "pcode": "4444xx",
        "description": 
            "We have been active in The Gambia since 1999 with the construction and realization of a secondary school. The school building was completed in 2009 and now 350 students are undergoing training. In October 2012, a program for educational development for pre-primary and primary education will start in collaboration with the digital PABO Gorinchem in The Gambia. Together with the Hogeschool Rotterdam and the DaVinci College, a ship is being designed that will sail on the Coppename river in Suriname, with the aim of To make education, medical care and economic development accessible to Indians. In 2013, a container with school materials will be shipped to Sierra Leone."
      },
      "dutch": 
      {
        "home": "Home",
        "social": "Social Media",
        "donate": "Donaties",
        "gambia": "Gambia",
        "test": "this is java script",
        "sponsor": "Onze sponsors",
        "contact": "Contact ons",
        "title": "Hallo!",
        "welcome": "Welkom op mijn site!",
        "footer": "Deze website is gemaakt door Robyn Duits (c) 2022",
        "email": "voorbeeld@voorbeeld.com",
        "tel": "1234567890",
        "plaats": "verwegistan",
        "pcode": "4444xx",
        "description": 
            "Vanaf 1999 zijn we actief in Gambia met de bouw en tot standkoming van een school voor voortgezet onderwijs. In 2009 was het schoolgebouw af en nu volgen er 350 leerlingen een opleiding. In oktober 2012 start een programma voor onderwijsontwikkeling voor kleuter- en basisonderwijs in samenwerking met de digitale PABO Gorinchem in Gambia Samen met de Hogeschool Rotterdam en het DaVinci College wordt een schip ontworpen dat gaat varen op de Coppename rivier in Suriname, met als doel voor de Indianen educatie, medische zorg en economische ontwikkeling bereikbaar te maken. In 2013 wordt een container met schoolmaterialen verscheept naar Sierra Leone."
      }
     
    }