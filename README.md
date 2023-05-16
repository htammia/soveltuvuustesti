# Soveltuvuustesti - Tietojenkäsittelytieteen kandidaattiprojekti
## Käyttöohje
Projektin koodi muodostuu kahdesta osasta: serverikoodista omassa kansiossaan, sekä juurikansiosta löytyvästä käyttöliittymän koodista. Käyttöliittymä toimii ilman serverikoodia, joten minimikäyttöönottoon riittää käyttöliittymäkoodin lataaminen haluttuun hostauspalveluun. Periaatteessa käyttöliittymän koodi voi asua myös Githubissa, mutta silloin domain-nimeä lienee syytä vaihtaa (Tapahtuu Github repon asetuksista: Settings -> Code and automation -> Pages -> Custom domain).<br>
Käyttöliittymäkoodiin kuuluu kaikki juurikansiossa oleva koodi lukuunottamatta serverikansiota. Images-kansiosta löytyvät toteutuksessa käytetyt kuvat. Vielä lyhyt yhteenveto kustakin tiedostosta, sekä niiden käyttötarkoituksista: <br>
- `README.md` on dokumentti, jota nyt luet.
- `index.html` on käyttöliittymän "etusivu".
- `questionaire.html` varsinaisen kyselyn html-runko.
- `questionnaire.css` kyselyosion graafinen muotoilu.
- `questions.js` astetta massiivisempi dokumentti. Täältä löytyy kyselyn toiminnallisuus, sekä kaikki itse kyselyn data, kuten <b>kysymystekstit</b>.
- `result.css` tulossivun graafinen muotoilu.
- `results.html` tulossivun html-runko
- `resultsListeners.js` lisää eventlistenerit tulosten otsikoihin, jotta yksittäisen tuloksen voi avata kuvauksen näkemiseksi.
- `resultsOrder.js` huolehtii tulosten järjestymisestä oikeaan järjestykseen pistetuloksen perusteella. <b>Täältä löytyy vastausten tekstit</b>.
- `sendData.js` toteuttaa kerätyn tiedon lähettämisen serverille. Jos serveriä ei oteta käyttöön, tiedostoa ei tarvita. <b>HOX!! JOS SERVERI OTETAAN KÄYTTÖÖN, TULEE LOCALHOSTIN OSOITE (http://127.0.0.1:5000/) RIVILLÄ 24 KORVATA SERVERIN UUDELLA OSOITTEELLA! </b><br>
  ![image](https://github.com/htammia/soveltuvuustesti/assets/94059323/dd33445a-fabc-4067-b7c3-5f1045a5715d)
- `style.css` yleistä graafista muotoilua.
<br>

### Serveri
Serverikansion sisältä löytyy ohjeet serverin työstämiseen ja ajamiseen kehitysvaiheessa. Soveltuvuustesti-kansiosta löytyy neljä kooditiedostoa. Serveri vaatii toimiakseen muutamia pakkauksia (packages), jotka on listattu serverikansiosta löytyvässä ReadMe.md tiedostossa. Readme.md sisältää myös ohjeet tietokantatiedoston luomiseen – mahdollisesta hostauspalvelusta riippuen voi olla, että tietokanta.db on luotava manuaalisesti tietokoneella. Tähänkin on ohje serverikansion Readme.mdssä.
- `__init__.py` on serverin "etusivu". Tällä koodilla luodaan serveriapplikaatio, sekä tietokantayhteys.
- `db.py` luo tietokantamuuttujan
- `models.py` täällä toteutettu tietokannan taulumalli, skeeman määrittely, sekä tietokannan alustamiseen tarvittava @click -komento.
- `visit.py` serverin blueprint, sekä itse HTTP-pyyntöjen käsittely. Tällä hetkellä toteutettu ainoastaan POST, jolla tallennetaan tietokantaan käyttäjävierailu.

Serveri on toteutettu SQLitellä. Tämä tarkoittaa, että mahdollisen hostauspalvelun on tuettava SQLiteä, tai tietokantatoteutusta on muutettava käyttämään jotain muuta kieltä. Tietokannalla ei tällä hetkellä myöskään ole käyttöliittymää – ainoa tapa päästä käsiksi dataan on SQLiteStudion kaltainen sovellus. Ilmeisesti myös Microsoft PowerBi osaa lukea serveritietokantoja, mutta sen käytöstä en osaa valitettavasti sanoa enempää. 
