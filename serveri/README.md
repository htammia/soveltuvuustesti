# Ohjeet serverin työstämiseen
## Ensimmäinen työstökerta / set uppaaminen
### 1. Navigoi Command Promptilla siihen kansioon, soveltuvuustesti/serveri kansioon. 
Eli: `cd kansio\kohde` niin kauan kunnes pääset siihen kansioon, mihin oot repon kloonannu. Navigoinnin voi tehdä myös vaiheittain `cd kansio`. Voit myös navigoida resurssinhallinnalla haluamaasi kohdekansioon, klikata kerran osoiteriviä, jolloin "path" maalautuu, kopioda tämän polun ja liittää sen Command Promptiin. Muista lisätä alkuun `cd` ennen kuin liität polun esim: `cd C:\Users\Myself\projects\soveltuvuustesti\serveri`. Kun pääset serveri-kansioon, siirry seuraavaan kohtaan.
### 2. Luodaan virtuaaliympäristö aukinaiseen kansioon:
```
python3.9 -m venv svtesti
```
Nimen voit toki myös päättää itse. Avattuun kansioon pitäisi nyt ilmestyä uusi kansio, jonka nimi vastaa komennossa antamaasi. Jos koneellasi ei ole Python 3.9. niin asenna se :D Pythonin version voit tarkistaa kirjoittamalla Command Promptiin `python --version`.
### 3. Aktivoidaan virtuaaliympäristö. TEE JOKA KERTA KUN LÄHDET SUORITTAMAAN/TESTAAMAAN/YMS. SERVERIÄ
Windowsilla:
```
svtesti\Scripts\activate
```
Linux/OS X:
```
svtesti/bin/activate
```
Nyt navigointipolun eteen pitäisi Command Promptissa ilmestyä `(svtesti)`. Tästä tiedät olevasi nyt sisällä virtuaaliympäristössä. Jos näin ei tapahdu (etkä saa erroria) kokeile muuttaa komento muotoon `svtesti\Scripts\activate.bat`. Jos puolestaan saat errorin oikeuksista, joudut muuttamaan Command Promptin asetuksia – oletusarvoisesti scriptien suorittaminen mahtaa olla Command Promptilta kiellettyä. 
<br> 
<br> Jos käytät Command Promptin sijaan PowerShelliä: navigoi kansioon `\svtesti\Scripts` ja aja komento `.\activate.sh`. Jälleen oikeuksia voit joutua muokkaamaan.
### 4. Pakettien asentaminen
Serveri vaatii toimiakseen muutaman ladattavan packagen. Nimellisesti nämä paketit ovat <br>
jsonschema <br>
click <br>
flask <br>
flask_sqlalchemy <br>
Asennetaan nyt siis pipillä nämä paketit. 
```
pip install jsonschema click flask flask_alchemy
```
Voit myös asentaa paketit yksitellen jos tuntuu turvallisemmalta.
### 5. Tietokannan alustaminen
Yksinkertaisuudessaan syötä seuraava komento:
```
flask --app soveltuvuustesti init-db
```
Tämän pitäisi printata komentoriville teksti `Initialising database`, ja luoda uusi kansio nimeltään `instance` jossa tietokanta.db sitten koneellasi asustaa.
### 6. Serverin pyörittäminen
Tämän kaiken tehtyäsi serveriä voidaan nyt ajaa. Suoritus aloitetaan seuraavalla komennolla:
```
flask --app soveltuvuustesti run
```
Nyt pitäisi näkyä jotain tällaista:
![image](https://user-images.githubusercontent.com/94059323/234489210-35f4776b-4976-4d3e-9a1c-1014c01504f6.png)
Pääset siis käsiksi "webbisivuun" osoitteessa http://127.0.0.1:5000 (ainakin minulla, katso mitä itselläsi lukee). Tuossa osoitteessa ei tällä hetkellä majaile mitään, joten tuloksena on 404 not foundin ei kannata antaa säikäyttää. Ctrl+c lopettaa serverin pyörittämisen. Huomaathan, että jos teet muutoksia serverikoodiin, ei muutokset näy ennen kuin serveri käynnistetään uudelleen.

## Seuraavat työstö kerrat
### 1. Navigoi kansioon
Tämä ei eroa ensimmäisestä kerrasta lainkaan. `cd kansio\kansio\kohde` kunnes olet serveri-kansiossa.
### 2. Virtuaaliympäristön aktivointi
Ei luoda virtuaaliympäristöä uudestaan, pelkkä aktivointi riittää. 
```
svtesti\Scripts\activate
```
tai aiemmin toimivaksi toteamasi komento. `(svtesti)` pitäisi ilmestyä CommandPromptin rivin alkuun.
### 3. Serverin pyörittäminen
Tietokantaa ei alusteta uudestaan, ellet ole sitä jostain syystä poistanut. Riittää siis että lähdet suoraan ajamaan serveriä:
```
flask --app soveltuvuustesti run
```
Ja that's it.



