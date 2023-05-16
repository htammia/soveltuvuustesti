/* --- TIEDON LÄHETTÄMINEN SERVERILLE --- */
checkCookie();

/**
 * Tarkistaa, onko keksit sallittu ja
 * onko tiedot lähetetty jo serverille, missä tapauksessa
 * ei tehdä mitään.
 */
function checkCookie() {
    if (getCookie("allowed") == "true" && getCookie("sent") == "false") {
        sendInfo()
        setCookie("sent", true);
    }
}
/**
 * Lähetetään tiedot serverille.
 * Serverin osoite on muutettavissa!! Localhost-osoite
 * vaatii luonnollisesti local hostin käyttöä.
 */
// based on https://www.freecodecamp.org/news/javascript-post-request-how-to-send-an-http-post-request-in-js/
function sendInfo() {

    try {
        fetch("http://127.0.0.1:5000/visit/save", {
            method: "POST",
            body: JSON.stringify({
              q1: getCookie("q1"),
              q2: getCookie("q2"),
              q3: getCookie("q3"),
              q4: getCookie("q4"),
              q5: getCookie("q5"),
              q6: getCookie("q6"),
              q7: getCookie("q7"),
              q8: getCookie("q8"),
              total: getCookie("total"),
              taken: getCookie("taken")
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
          if (cookieName == "allowed" || cookieName == "sent") {
            return c.substring(name.length, c.length);
          } else {
            return parseInt(c.substring(name.length, c.length));
          }
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