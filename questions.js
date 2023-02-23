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