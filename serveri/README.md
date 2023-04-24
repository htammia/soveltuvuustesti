# LOL ELÄ TEE NÄIN, kirjotan uusiksi kunhan selvitän lopukki muuttujat. Näin toimittas jos oltas alottamassa mutta tää ei ihan toimi ku ollaan jo lopussa.

# Ohjeet serverin set-uppaamiseen
## Virtual Environment / Virtuaaliympäristö
### 1. Navigoi Command Promptilla siihen kansioon, missä serverin haluat asustavan. 
Eli: `cd kansio\kansio\kohde`. Navigoinnin voi tehdä myös vaiheittain `cd kansio`, kunnes pääset haluamaasi kansioon. Voit myös navigoida resurssinhallinnalla haluamaasi kohdekansioon, klikata kerran osoiteriviä, jolloin "path" maalautuu, kopioda tämän polun ja liittää sen Command Promptiin. Muista lisätä alkuun `cd` ennen kuin liität polun esim: `cd C:\Users\Myself\projects`
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
