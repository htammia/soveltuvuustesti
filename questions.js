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

//the index of the current question visible
let currentQuestion = 0;
let userChoices = [];
let trackInfoQuestion = false;

const points = {
  TT:0,
  ETT:0,
  TOL:0
};

//variables for data collection
let times = [];
let totalTime = 0;
let testStartTime = 0;
let questionStartTime = 0;
let testTaken = 0;

function getCookie() {
  
  let cookie = document.cookie;
  let splitCookie = cookie.split('=');
  if (splitCookie[0]=="testTaken") {
    return splitCookie[1];
  }
  return "";
}

function setCookie(){
  if (testTaken == ""){
    console.log("setting cookie")
    const d = new Date();
    d.setTime(d.getTime() + (365*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = "testTaken = 0;" + expires + ";path=/";
  }
}

//getting the cookie
testTaken = getCookie();
//if there is no cookie, one is set
if (testTaken == ""){
  setCookie();
}

testTaken = parseInt(testTaken)

if (Number.isNaN(testTaken)){
  testTaken = 0;
}
console.log("tests taken : " + testTaken);

function updateCookie() {
  const d = new Date();
  d.setTime(d.getTime() + (365*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = "testTaken =" + testTaken + ";" + expires + ";path=/";
}

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

loadQuestion();

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

function getSelected() {
  let answer;
  optionElements.forEach(function (optionElem){
    if (optionElem.checked) {
      answer = optionElem.id;
    }
  });
  return answer
}

function unSelectAll() {
  optionElements.forEach(function (optionElem){
    optionElem.checked = false
  });
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

nextButton.addEventListener("click", () => {
  const answer = getSelected();
  //check if an option was chosen
  if (answer) {
    userChoices[currentQuestion] = answer;

    if (trackInfoQuestion == true) {
      if (times[currentQuestion] == null)
          times[currentQuestion] = 0;
        times [currentQuestion] += Date.now() - questionStartTime;
        questionStartTime = Date.now();
    }
    
    //increment to next question
    currentQuestion++;
    document.getElementById("progressBar").value =(currentQuestion / questionData.length) * 100;
    //check if more questions remain
    if (currentQuestion == questionData.length-1 ) {
      nextButton.innerHTML = "Tuloksiin!";
      loadQuestion();
    } else if (currentQuestion < questionData.length) {
      loadQuestion();
    } else {
      if (trackInfoQuestion == true) {
        totalTime = Date.now() - testStartTime;
        testTaken = testTaken + 1;
        updateCookie();
      }

      calculateResults();
      
      if (trackInfoQuestion == true)
        sendInfo();

      const str = `results.html?tol=${points.TOL}&tt=${points.TT}&ett=${points.ETT}`
      console.log(str);
      window.location=str;
      
    }
  }
})

backButton.addEventListener("click", () => {
  
  if (trackInfoQuestion == true) {
    if (times[currentQuestion] == null)
        times[currentQuestion] = 0;
      times [currentQuestion] += Date.now() - questionStartTime;
      questionStartTime = Date.now();
  }
  if (currentQuestion == questionData.length-1) {
    nextButton.innerHTML = "Seuraava";
  }
  if (currentQuestion > 0) {
    currentQuestion--;
    document.getElementById("progressBar").value =(currentQuestion / questionData.length) * 100;
    loadQuestion();
  } 
  else {
    document.location = "index.html";
  }
})


/*Changes the options background to purple when it is clicked */
const options = document.querySelectorAll('.option');
const lis = document.querySelectorAll('.options li');

for (let i = 0; i < options.length; i++) {
  options[i].addEventListener('click', function() {
    for (let j = 0; j < lis.length; j++) {
      lis[j].style.backgroundColor = '';
    }
    const selectedOption = document.querySelector('input[name="option"]:checked');
    disableNextButton(false);
  });
}

/*When clicking next-button, options background is returned to default in next question*/
nextButton.addEventListener("click", function() {
  options.forEach(function(option) {
  option.style.backgroundColor = "";
  disableNextButton(true);
  });
});

/*When clicking back-button, options background is returned to default in previous question*/
backButton.addEventListener("click", function() {
  lis.forEach(function(option) {
  option.style.backgroundColor = "";
  disableNextButton(true);
  });
});

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


/* SENDING DATA TO THE SERVER */

// based on https://www.freecodecamp.org/news/javascript-post-request-how-to-send-an-http-post-request-in-js/
function sendInfo() {

  try {
      fetch("http://127.0.0.1:5000/visit/save", {
          method: "POST",
          body: JSON.stringify({
              q1: times[0],
              q2: times[1],
              q3: times[2],
              q4: times[3],
              q5: times[4],
              q6: times[5],
              q7: times[6],
              q8: times[7],
              total: totalTime,
              taken: testTaken
          }),
          headers: {
              "Content-type": "application/json; charset=UTF-8"
          }
          })
          .then((response) => response.json())
          .then((json) => console.log(json))
  } catch(err) {
      alert(err);
  }

}