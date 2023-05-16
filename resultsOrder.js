/**
 * Tämä Javascript tiedosto toteuttaa vastausten järjestämisen
 * oikeaan järjestykseen pisteiden perusteella.
 */

// Elektroniikan ja tietoliikennetekniikan tiedot
ett = {
    name: "ELEKTRONIIKAN JA TIETOLIIKENNETEKNIIKAN",
    title: "Elektroniikka ja tietoliikennetekniikka",
    description: "Muuta maailmaa suunnittelemalla kestäviä ja vastuullisia"
      + " elektroniikkalaitteita ja tietoliikenneratkaisuja,  jotka vaikuttavat ihmisten "
      + "elämään kaikkialla maailmassa. Työllistyt jo opintojen aikana hyväpalkkaisiin "
      + "tuotekehitys- ja tutkimustehtäviin ja ratkaiset työssäsi globaaleja haasteita. "
      + "Opiskelujen kolme ensimmäistävuotta pääpaino on matematiikan, fysiikan ja signaalinkäsittelyn ohella "
      + "ammattiaineissa kuten elektroniikkasuunnittelussa, mittaustekniikassa, teknillisessä fysiikassa, "
      + "tietoliikennetekniikassa, tietokonetekniikassa ja ohjelmoinnissa. Diplomi-insinöörivaiheeseen "
      + "siirryttäessä opintosuuntausvaihtoehtoja on viisi: elektroniikan suunnittelu, elektroniikan materiaalit ja "
      + "komponentit, fotoniikka ja mittaustekniikka, radiotekniikka sekä tietoliikennetekniikka. "
      + "Tutkinto-ohjelma tarjoaa myös väylän lääketieteen tekniikan maisteriohjelmaan "
      + "ja sitä kautta terveys- ja hyvinvointiteknologioiden kehittämiseen. "
      + "Elektroniikan ja tietoliikennetekniikan opiskelijana pääset aidosti kansainväliselle "
      + "teollisuuden alalle ja ovet maailmalle ovat auki.<br>"
      + "<br>Jos kiinnostuit, kysy ihmeessä lisää. "
      + "Voit aloittaa keskustelun esimerkiksi kysymyksellä minkälaista on opiskelu "
      + "elektroniikan ja tietoliikennetekniikan tutkinto-ohjelmassa",
      link: "https://www.oulu.fi/fi/hae/kandidaattiohjelmat/elektroniikka-ja-tietoliikennetekniikka"
}

// Tietotekniikan tiedot
tt = {
    name: "TIETOTEKNIIKAN",
    title: "Tietotekniikka",
    description: "Muuta maailmaa kehittämällä uusia teknologioita edistämään kestävää kehitystä ja "
      + "ihmisten hyvinvointia. Tutkinto-ohjelmassa voit erikoistua kyberturvallisuuteen, "
      + "soveltavaan tietotekniikkaan, tekoälyyn tai tietokonetekniikkaan. "
      + "Opintosi ovat vahvan teoriapohjan lisäksi käytännönläheisiä ja opit suunnittelemaan "
      + "tehokkaita algoritmeja ja laitteita. Työllistyt hyvin jo opintojen aikana. "
      + "Tutkinto-ohjelma tarjoaa myös väylän lääketieteen tekniikan maisteriohjelmaan ja "
      + "sitä kautta terveys- ja hyvinvointiteknologioiden kehittämiseen. Hyödyt kansainvälisestä "
      + "opiskeluympäristöstä, joka tarjoaa erinomaisen perustan työelämään.<br>"
      + "<br> Tietotekniikan tutkinto-ohjelmasta valmistuneena diplomi-insinöörinä "    
      + "työskentelet todennäköisesti ICT-alan yritysten, tutkimus- ja oppilaitosten "
      + "tai julkishallinnon palveluksessa. Työsi voi liittyä esimerkiksi tutkimukseen, "
      + "tuotekehitykseen, teolliseen tuotantoon tai vaativiin asiantuntija- ja johtamistehtäviin. "
      + "Toimenkuvaan kuuluu olennaisesti erilaisten teknisten ongelmien ratkaiseminen ja "
      + "uusien teknologioiden kehittäminen.<br>"
      + "<br>Jos kiinnostuit, kysy ihmeessä lisää. "
      + "Voit aloittaa keskustelun esimerkiksi kysymyksellä minkälaista on "
      + "opiskelu Tietotekniikan tutkinto-ohjelmassa.",
      link: "https://www.oulu.fi/fi/hae/kandidaattiohjelmat/tietotekniikka"
  }
// Tietojenkäsittelytieteen tiedot
tol = {
    name: "TIETOJENKÄSITTELYTIETEEN",
    title: "Tietojenkäsittelytiede",
    description: "Vaikuta osaamisellasi siihen, millaiseksi maailma muuttuu "
      + "digitalisaation edetessä. Tietojenkäsittelytieteen asiantuntijana "
      + "autat eri-ikäisiä käyttäjiä saamaan heidän tarpeisiinsa suunniteltuja "
      + "digitaalisia tuotteita. Tutkinto-ohjelmassa voit tulla asiantuntijaksi "
      + "tietokoneohjelmistojen kehittämisessä tai suuntautua ohjaamaan "
      + "informaatioteknologian hyödyntämistä ihmisten arjessa ja organisaatioissa. "
      + "Voit valita suuntautumisvaihtoehdoksesi ohjelmistotuotannon tai tietojärjestelmät. "
      + "Opintosi ovat käytännönläheisiä ja ne sisältävät projektikursseja sekä "
      + "toimeksiantoja ja yhteistyötä yritysten kanssa. Ala on erittäin kansainvälinen "
      + "ja ovet maailmalle ovat auki. Työllistymismahdollisuutesi ovat hyvät jo opintojen aikana.<br>"
      + "<br>Valmistuttuasi työllistyt todennäköisimmin informaatioteknologia-alan yritykseen, "
      + "palvelu- ja teollisuusyritykseen, julkiselle sektorille tai koulutusorganisaatioon, "
      + "mutta työpaikka voi löytyä mistä tahansa organisaatiosta, sillä ohjelmistot "
      + "ovat levinneet kaikkialle.<br>"
      + "<br>Jos kiinnostuit, kysy ihmeessä lisää. Voit aloittaa keskustelun esimerkiksi "
      + "kysymyksellä minkälaista on opiskelu Tietojenkäsittelytieteen tutkinto-ohjelmassa.",
      link: "https://www.oulu.fi/fi/hae/kandidaattiohjelmat/tietojenkasittelytiede"
  }

// HTML -elementtien linkkaus
const winner = document.getElementById("winner-title")
const firstTitle = document.getElementById("first-title");
const firstDscr = document.getElementById("first-description");
const firstLink = document.getElementById("first-link");
const secondTitle = document.getElementById("second-title");
const secondDscr = document.getElementById("second-description");
const secondLink = document.getElementById("second-link");
const thirdTitle = document.getElementById("third-title");
const thirdDscr = document.getElementById("third-description");
const thirdLink = document.getElementById("third-link");

const results = getOrder();
setRank();

/**
 * Asettaa tutkinnon järjestykseen
 * ja vastaavat tekstit paikoillensa.
 */
function setRank() {

  let st = getTutkinto(results[0].name);
  let nd = getTutkinto(results[1].name);
  let rd = getTutkinto(results[2].name);

  // asetetaan "voittajan" tekstit ja tittelit
  firstTitle.innerHTML = "1. "  + st.title;
  firstDscr.innerHTML = st.description;
  firstLink.setAttribute("href", st.link);

  secondDscr.innerHTML = nd.description;
  secondLink.setAttribute("href", nd.link);

  thirdDscr.innerHTML = rd.description;
  thirdLink.setAttribute("href", rd.link);

  // kun testituloksista löytyy voittaja, seuraava on kakkonen.
  if (parseInt(results[0].points) > parseInt(results[1].points)) {

    winner.innerHTML = st.name + " TUTKINTO-OHJELMA";
    secondTitle.innerHTML = "2. " + nd.title;
    if (parseInt(results[1].points) > parseInt(results[2].points)) {
      thirdTitle.innerHTML = "3. " + rd.title; 
    } else {
      thirdTitle.innerHTML = "2. " + rd.title; 
    }
  // jos 1. ja 2. sijalla on saman verran pisteitä, molemmat saavat
  // järjestysnumeroksi yksi. Kolmas saa luvun 2.
  } else if (results[0].points == results[1].points && parseInt(results[1].points) > parseInt(results[2].points)) {
    winner.innerHTML = st.name + " JA " + nd.name + " TUTKINTO-OHJELMAT"; 
    secondTitle.innerHTML = "1. " + nd.title;
    thirdTitle.innerHTML = "2. " + rd.title; 

  // mahdollista on myös saada kaikki tutkinnot samalle sijalle
  } else {
    winner.innerHTML = "KAIKKI TUTKINTO-OHJELMAT";
    secondTitle.innerHTML = "1. " + nd.title;
    thirdTitle.innerHTML = "1. " + rd.title; 
  }
}
/**
 * Apufunktio palauttaa annetun
 * lyhenteen mukaisen tutkinnon tiedot
 * muuttujassa.
 * @param {string} abbrv 
 * @returns tutkintomuuttuja
 */
function getTutkinto(abbrv) {
  if (abbrv == "ett") {
    return ett;
  } else if (abbrv == "tt") {
    return tt;
  } else {
    return tol;
  }
}

/**
 * Hakee järjestyksen query-stringistä ja
 * asettaa tutkinnot pisteiden mukaiseen järjestykseen.
 * @returns järjestetyt tulokset.
 */
function getOrder() {
  const query = window.location.search;
  const urlParams = new URLSearchParams(query);

  let results = [
    {
      name: "tol",
      points: 0
    },
    {
      name: "tt",
      points: 0
    },
    {
      name: "ett",
      points: 0
    }
  ];

  results[0].points = urlParams.get("tol");
  results[1].points = urlParams.get("tt");
  results[2].points = urlParams.get("ett");
  
  results.sort((a,b) => {
    return b.points - a.points;
  });

  console.log(results);
  return results;
}