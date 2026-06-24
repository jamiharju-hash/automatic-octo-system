# JKP Group — verkkosivustodemo

Staattinen, Vercel-yhteensopiva verkkosivusto kahdelle liiketoiminta-alueelle:

- Talotekniikan rakennuttaminen
- Vuokraustoiminta
- Vuokrakohteen erillinen template
- Yhteystietosivu ja demolomake
- Responsiivinen mobiili-, tabletti- ja työpöytänäkymä
- Selaimessa toimiva tekstien demoeditori

## Julkaisu Vercelissä

1. Avaa projektikansio terminaalissa.
2. Kirjaudu: `npx vercel login`
3. Esijulkaisu: `npx vercel deploy`
4. Tuotantojulkaisu: `npx vercel deploy --prod`

Vercel antaa projektille automaattisesti ilmaisen `*.vercel.app`-osoitteen.

## Sisällön muokkaus demossa

Sivujen oikeassa alakulmassa on **Muokkaa tekstejä** -painike. Muutokset tallentuvat selaimen localStorageen. Lopulliseen tuotantoversioon suositellaan varsinaista CMS-ratkaisua, jotta muutokset tallentuvat kaikille käyttäjille ja laitteille.

## Huomioitavaa ennen tuotantokäyttöä

- Korvaa demokuvat asiakkaan omilla kuvilla.
- Korvaa kaikki placeholder- ja esimerkkitekstit vahvistetulla sisällöllä.
- Liitä yhteydenottolomake sähköpostipalveluun.
- Lisää tietosuojaseloste ja evästeratkaisu tarpeen mukaan.
- Toteuta varsinainen CMS, jos asiakas päivittää sisältöä itse.
