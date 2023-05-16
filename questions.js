/**
 * Tässä javascript-tiedostossa on toteutettu kaikki Questionnaire-sivun 
 * toiminnalisuus. Tiedoston muoto on seuraava:
 * - Kysymysdata
 * - Pistemäärittely
 * - HTML-elementtien linkkaus
 * - Cookiet/keksit
 */

/* --- KYSYMYSDATA --- */
/*
Kysymysdata. Kysymyksissä, joissa on vain kolme vaihtoehtoa,
tulee d-vaihtoehdon kohdalle asettaa "none".
*/
const questionData = [
  {
    question: "Haluan opiskella alaa, jossa työllistyn alalle heti valmistumisen jälkeen.", 
    a: "Ei niin väliä",
    b: "Mukavaahan se olisi",
    c: "Ehdottomasti!",
    d: "Haluaisin työskennellä alalla jo opiskellessani"
  },
  {
    question: "Kuinka tärkeä palkka on sinulle?",
    a: "Palkkaa tärkeämpää on työn mielekkyys",
    b: "Tasaiset tulot, jolla voi elää ja niistä jää myös säästöön",
    c: "Miljonäärinä olisi mukava elellä",
    d: "none"
  },
  {
    question: "Mikä sinun mielestäsi on kiehtovinta kosketusnäytöissä?",
    a: "Millainen fyysinen ilmiö tunnistaa sormeni?",
    b: "Miten kosketusnäyttö tietää, että painoin juuri oikeaa kohtaa?",
    c: "Miksi näytön toiminta on suunniteltu niin intuitiiviseksi?",
    d: "none"
  },
  {
    question: "Teknologia, jonka parissa haluaisin eniten työskennellä?", 
    a: "Ohjelmistot kuten mobiiliapplikaatiot ja nettisivut tai tietojärjestelmät kuten Wilma",
    b: "Tekoäly, kyberturvallisuus, robotiikka",
    c: "Elektroniikka, kuten painettava äly, langattomat ohjaus- ja mittausjärjestelmät tai tietoliikenneverkot",
    d: "none"
  },
  {
    question: "Mikä sinua kiinnostaa eniten ohjelmistoissa, joita itse käytät?",
    a: "Miten ihmeessä ne voivat ylipäätään toimia, mistä muisti ja prosessori rakennetaan ohjelmistojen suorittamista varten?",
    b: "Millaisia algoritmeja ohjelman taustalla mahtaakaan pyöriä? Mitä tarvitsee tietää, että voidaan esimerkiksi laskea mikä pikseli kuuluu mihinkin paikkaan näytöllä?",
    c: "Mikä tekee ohjelman käytöstä miellyttävää? Miksi käyttöliittymä on laadittu sellaiseksi kuin se on?",
    d: "none"
  },
  {
    question: "Valitse näistä sopivin vaihtoehto",
    a: "Haluan vaikuttaa ihmisten elämään kaikkialla maailmassa suunnittelemalla kestäviä elektroniikkalaitteita ja tietoliikenneratkaisuja",
    b: "Haluan osaamisellani esimerkiksi kehittää kyberturvallisuutta tai uusia teknologioita edistämään ihmisten hyvinvointia ja kestävää kehitystä.",
    c: "Haluan vaikuttaa osaamisellani siihen, millaiseksi maailma muuttuu digitalisaation edetessä ja varmistaa, että kehittämämme teknologia on käytettävää ja kehityksen keskiössä ovat ihmiset eli käyttäjät.",
    d: "none"
  },
  {
    question: "Suhteeni matematiikkaan",
    a: "Olemme parhaita ystävyksiä ja näkisin, että voisimme olla myös hyviä työkavereita.",
    b: "Olemme kavereita ja voimme jakaa saman avokonttorin.",
    c: "Olemme hyvän päivän tuttuja ja moikkaamme kun näemme.",
    d: "Tunnemme kyllä, mutta sovimme että pysymme poissa toistemme tieltä."
  },
  {
    question: "Kansainvälisyys",
    a: "Haluaisin tulevaisuudessa asua ja työskennellä ulkomailla.",
    b: "Kansainvälinen työympäristö olisi mukavaa, mutta asuisin mielelläni Suomessa",
    c: "Koen, että esimerkiksi englannin kieli ei ole minun vahvin puoleni, mutta tulen toimeen ja tehdessä oppii",
    d: "none"
  }
];

/**
 * Muuttujassa on joka kysymyksen kohdalle asetettu true/false
 * arvo, joka vastaa kysymykseen "saako tietotekniikan tutkinto-
 * ohjelma pisteen käyttäjän valitessa vaihtoehto". 
 * Puuttuvien d-vaihtoehtojen kohdalla arvolla ei ole väliä,
 * mutta jatkuvuuden kannalta niiden arvoksi on määrätty false.
 */
const pointsToTT = [
  {
    //question 1
    a: true,
    b: true,
    c: true,
    d: true
  }, 
  {
    //question 2
    a: true,
    b: true,
    c: false,
    d: false
  },
  {
    //question 3
    a: false,
    b: true,
    c: false,
    d: false
  }, 
  {
    //question 4
    a: false,
    b: true,
    c: false,
    d: false
  }, 
  {
    //question 5
    a: false,
    b: true,
    c: false,
    d: false
  }, 
  {
    //question 6
    a: false,
    b: true,
    c: false,
    d: false
  }, 
  {
    //question 7
    a: true,
    b: true,
    c: true,
    d: false
  },
  {
    //question 8
    a: true,
    b: true,
    c: true,
    d: false
  }
];

/**
 * Muuttujassa on joka kysymyksen kohdalle asetettu true/false
 * arvo, joka vastaa kysymykseen "saako elektroniikan ja
 * tietoliikennetekniikan tutkinto-ohjelma pisteen käyttäjän valitessa vaihtoehto". 
 * Puuttuvien d-vaihtoehtojen kohdalla arvolla ei ole väliä,
 * mutta jatkuvuuden kannalta niiden arvoksi on määrätty false.
 */
const pointsToETT = [
{
    //question 1
    a: true,
    b: true,
    c: true,
    d: true
  }, 
  {
    //question 2
    a: true,
    b: true,
    c: false,
    d: false
  },
  {
    //question 3
    a: true,
    b: false,
    c: false,
    d: false
  }, 
  {
    //question 4
    a: false,
    b: false,
    c: true,
    d: false
  }, 
  {
    //question 5
    a: true,
    b: false,
    c: false,
    d: false
  }, 
  {
    //question 6
    a: true,
    b: false,
    c: false,
    d: false
  }, 
  {
    //question 7
    a: true,
    b: true,
    c: false,
    d: false
  },
  {
    //question 8
    a: true,
    b: true,
    c: true,
    d: false
  }
];

/**
 * Muuttujassa on joka kysymyksen kohdalle asetettu true/false
 * arvo, joka vastaa kysymykseen "saako tietojenkäsittelytieteen 
 * tutkinto- ohjelma pisteen käyttäjän valitessa vaihtoehto". 
 * Puuttuvien d-vaihtoehtojen kohdalla arvolla ei ole väliä,
 * mutta jatkuvuuden kannalta niiden arvoksi on määrätty false.
 */
const pointsToTOL = [
  {
    //question 1
    a: true,
    b: true,
    c: true,
    d: true
  }, 
  {
    //question 2
    a: true,
    b: true,
    c: true,
    d: false
  },
  {
    //question 3
    a: false,
    b: false,
    c: true,
    d: false
  }, 
  {
    //question 4
    a: true,
    b: false,
    c: false,
    d: false
  }, 
  {
    //question 5
    a: false,
    b: false,
    c: true,
    d: false
  }, 
  {
    //question 6
    a: false,
    b: false,
    c: true,
    d: false
  }, 
  {
    //question 7
    a: true,
    b: true,
    c: true,
    d: true
  },
  {
    //question 8
    a: true,
    b: true,
    c: true,
    d: false
  }
];

/* --- HTML-ELEMENTTIEN LINKITTÄMINEN --- */

/* linking the HTML elements to variables */
const progressText = document.getElementById("progressText");
const questionnaire = document.getElementById("questions");
const optionElements = document.querySelectorAll(".option");
const questionElement = document.getElementById("question");

/* the option texts */
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

/* the buttons */
const backButton = document.getElementById("back");
const nextButton = document.getElementById("next");

/* --- "GLOBAL" MUUTTUJAT --- */

// nykyisen kysymyksen indeksi
let currentQuestion = 0;
// taulukko, johon käyttäjän valinnat kerätään
let userChoices = [];
// muuttuja, johon tallennetaan käyttäjän vastaus
// tiedon tallentamista koskevaan kysymykseen.
let trackInfoQuestion = false;

// muuttujaan kerätään käyttäjän saamat pisteet
// kuhunkin tutkinto-ohjelmaan.
const points = {
  TT:0,
  ETT:0,
  TOL:0
};

/* --- COOKIES --- */

// tiedonkeruuseen tarvittavat muuttujat
// kuhunkin kysymykseen vastaamiseen käytetty aika
let times = [];
// testin tekoon käytetty aika kokonaisuudessaan
let totalTime = 0;
// testin aloitusaika
let testStartTime = 0;
// kysymyksen aloitusaika
let questionStartTime = 0;
// testin toistokerrat
let testTaken = 0;

/**
 * Funktio hakee cookieNamen mukaisen keksin.
 * @param {string} cookieName 
 * @returns "" jos keksiä ei löytynyt
 * @returns keksi, jos löytyi
 */
function getCookie(cookieName) {
  let name = cookieName + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let cookieArray = decodedCookie.split(';');

  for (let i = 0; i < cookieArray.length; i++) {
    let c = cookieArray[i];
    while (c.charAt(0) == ' ') {
        c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
        return parseInt(c.substring(name.length, c.length));
    }
  }
  return "";
}

/**
 * Funktio asettaa keksin. 
 * Jos nimellä on jo keksi, funktio päivittää sen arvon.
 * @param {*} cookieName 
 * @param {*} cookieValue 
 */
function setCookie(cookieName, cookieValue) {
  const d = new Date();
  d.setTime(d.getTime() + (365*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cookieName + "=" + cookieValue + ";" + expires;
}

/**
 * Funktio tarkistaa, onko "taken" keksiä olemassa,
 * jos ei, asettaa arvoksi nolla.
 * Jos on, asettaa keksin arvon muuttujaan
 * testTaken.
 */
function checkTestTakenCookie() {
  let testCookie = getCookie("taken");
  if (testCookie == "") {
      setCookie("taken", 0);
  } else {
      testTaken = testCookie;
  }
}

/**
 * Asettaa kaikki keksit.
 * Inkrementoi testin suorituskertoja yhdellä.
 */
function setAllCookies() {
  setCookie("allowed", trackInfoQuestion)
  setCookie("sent", "false");
  setCookie("q1", times[0]);
  setCookie("q2", times[1]);
  setCookie("q3", times[2]);
  setCookie("q4", times[3]);
  setCookie("q5", times[4]);
  setCookie("q6", times[5]);
  setCookie("q7", times[6]);
  setCookie("q8", times[7]);
  setCookie("total", totalTime);
  setCookie("taken", testTaken+1);
}

/**
 * Tekee Seuraava-napista klikattamattoman,
 * jos nappi oli aiemmin klikattavissa.
 * Jos valmiiksi pois käytöstä, palauttaa
 * klikattavuuden.
 * @param {boolean} disable 
 */
function disableNextButton(disable) {
    if (disable == true) {
        nextButton.disabled = true;
        nextButton.style.opacity = "0.7"
    }
    else {
        nextButton.disabled = false;
        nextButton.style.opacity = "1";
    }
}

// ladataan kysymykset sivulle.
loadQuestion();

/**
 * Lataa / päivittää sivulla näkyvät kysymykset.
 */
function loadQuestion() {
  console.log(currentQuestion + " / " + questionData.length);
  unSelectAll();
  const data = questionData[currentQuestion];
  questionElement.innerHTML = data.question;
  a_text.innerHTML = data.a;
  b_text.innerHTML = data.b;
  c_text.innerHTML = data.c;
  if (data.d != "none") {
    d_text.innerHTML = data.d;
    document.getElementById("option_d").style.display = "inherit";
  } else {
    document.getElementById("option_d").style.display = "none";
  }
}

/**
 * Hakee käyttäjän valinnan.
 * @returns käyttäjän valitseman vastauksen id
 */
function getSelected() {
  let answer;
  optionElements.forEach(function (optionElem){
    if (optionElem.checked) {
      answer = optionElem.id;
      disableNextButton(false)
    } else {
      disableNextButton(true)
    }    
  });
  return answer
}

/**
 * Poistaa käyttäjän valinnan. Käytetään
 * siirryttäessä seuraavaan kysymykseen.
 */
function unSelectAll() {
  optionElements.forEach(function (optionElem){
    optionElem.checked = false
  });
  disableNextButton(true);
}

/**
 * Laskee pisteet kullekin tutkinto-ohjelmalle
 */
function calculateResults() {

  for (let i = 0; i < userChoices.length; i++) {
    if (userChoices[i] == "a") {
      if (pointsToTT[i].a) {
        points.TT++;
      }
      if (pointsToETT[i].a) {
        points.ETT++;
      }
      if (pointsToTOL[i].a) {
        points.TOL++;
      }
    }
      if (userChoices[i] == "b") {
      if (pointsToTT[i].b) {
        points.TT++;
      }
      if (pointsToETT[i].b) {
        points.ETT++;
      }
      if (pointsToTOL[i].b) {
        points.TOL++;
      }
    }
      if (userChoices[i] == "c") {
      if (pointsToTT[i].c) {
        points.TT++;
      }
      if (pointsToETT[i].c) {
        points.ETT++;
      }
      if (pointsToTOL[i].c) {
        points.TOL++;
      }
    }
    if (userChoices[i] == "d") {
      if (pointsToTT[i].d) {
        points.TT++;
      }
      if (pointsToETT[i].d) {
        points.ETT++;
      }
      if (pointsToTOL[i].d) {
        points.TOL++;
      }
    }
  }
}

/* --- EVENT LISTENERIT --- */

/**
 * Lisää event listenerin Seuraava-nappiin
 */
nextButton.addEventListener("click", () => {
  const answer = getSelected();
  // tarkistetaan, onko käyttäjä valinnut jonkin vaihtoehdon.
  if (answer) {
    disableNextButton(false);
    userChoices[currentQuestion] = answer;

    if (trackInfoQuestion) {
      if (times[currentQuestion] == null)
          times[currentQuestion] = 0;
        times [currentQuestion] += Date.now() - questionStartTime;
        questionStartTime = Date.now();
    }
    
    // inkrementoidaan seuraavaan kysymykseen
    currentQuestion++;
    // päivitetään edistymispalkki
    document.getElementById("progressBar").value =(currentQuestion / questionData.length) * 100;
    // tarkistetaan, onko kysymyksiä jäljellä.
    // toiseksi viimeisessä kysymyksessä 
    if (currentQuestion == questionData.length-1 ) {
      nextButton.innerHTML = "Tuloksiin!";
      loadQuestion();
    } else if (currentQuestion < questionData.length) {
      loadQuestion();
    } else {
      if (trackInfoQuestion) {
        totalTime = Date.now() - testStartTime;
        checkTestTakenCookie();
        setAllCookies();
      } else {
        setCookie("allowed", false);
      }

      calculateResults();
        
      const str = `results.html?tol=${points.TOL}&tt=${points.TT}&ett=${points.ETT}`
      console.log(str);
      window.location=str;
      
    }
  }
})

/**
 * Lisää event listener takaisin-nappiin.
 */
backButton.addEventListener("click", () => {
  
  // datan tallennus, jos tallennus sallittu
  if (trackInfoQuestion == true) {
    if (times[currentQuestion] == null)
        times[currentQuestion] = 0;
      times [currentQuestion] += Date.now() - questionStartTime;
      questionStartTime = Date.now();
  }
  // jos siirrytään viimeisestä kysymyksestä taakse
  // päin, päivitetään Seuraava-napin teksti
  if (currentQuestion == questionData.length-1) {
    nextButton.innerHTML = "Seuraava";
  }
  if (currentQuestion > 0) {
    currentQuestion--;
    document.getElementById("progressBar").value =(currentQuestion / questionData.length) * 100;
    loadQuestion();
  } 
  // jos palataan yli "nollannen" kysymyksen, palataan indeksiin.
  else {
    document.location = "index.html";
  }
})

/**
 * Event listenerit vastausvaihtoehtoihin.
 */
const options = document.querySelectorAll('.option');

for (let i = 0; i < options.length; i++) {
  options[i].addEventListener('click', function() {
    disableNextButton(false);
  });
}

disableNextButton(true);


/* FOR DATA USAGE PERMISSIONS */

const trackInfo = document.getElementById("trackInfo");
const trackYes = document.getElementById("trackYes");
const trackNo = document.getElementById("trackNo");

trackYes.addEventListener("click", () => {
    trackInfoQuestion = true;
    trackInfo.style.display = "none";
    testStartTime = questionStartTime = Date.now();
})

trackNo.addEventListener("click", () => {
    trackInfoQuestion = false;
    trackInfo.style.display = "none";
})

trackInfo.style.display = "block";
