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

const points = {
  TT:0,
  ETT:0,
  TOL:0
};

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

function calculateResults() {
  let resultOrder;

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

    resultOrder = [
      {
        points: points.TOL,
        name: "tol"
      }, 
      {
        points: points.TT,
        name: "tt"
      }, 
      {
        points: points.ETT,
        name: "ett"
      }
    ];
    resultOrder.sort((a,b) => {
      return b.points - a.points;
    });
  }

  console.log("POINTS: ett: " + points.ETT);
  console.log("POINTS: tol: " + points.TOL);
  console.log("POINTS: tt: " + points.TT);

  console.log(resultOrder);

  return resultOrder;
}

nextButton.addEventListener("click", () => {
  const answer = getSelected();
  //check if an option was chosen
  if (answer) {
    userChoices[currentQuestion] = answer;
    
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
      const results = calculateResults();
      const str = `results.html?st=${results[0].name}&nd=${results[1].name}&rd=${results[2].name}`
      window.location=str;
    }
  }
})

backButton.addEventListener("click", () => {
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