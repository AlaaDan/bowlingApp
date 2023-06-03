# bowlingApp# K.Äglas bowling API

## Instruktioner

K.Ägla önskar ha ett API för sin tilltänka bowlingapp där kan man ska kunna boka banor i hans bowlinghall. K.Ägla har inte någon teknisk koll (men vet att appar är coolt) och bryr sig därför inte om du bygger nedan API med MongoDB eller SQLite. Bowlinghallen har 8 banor.

Följande funktionalitet ska finnas med:

* Det ska gå och boka en bana och en bokning innehåller följande:
  - Datum man vill boka (alltså inte när man bokar utan när man vill spela)
  - E-postadress till den som bokar
  - Vilken tid (Man har banan 60 min)
  - Antal personer
  - Antal banor (det finns åtta banor att boka, varje bana ska ha ett id som kopplas till bokningen)
  - Varje persons skostorlek (som ska matcha antal personer)
  - Totalpris (120 kr / person + 100 kr / bana, detta ska räknas ut på backend)
  - Ett bokningsnummer (som även detta genereras på backend)
* Det ska gå och ändra en bokning (dock ska det inte gå och ändra pris och antal skor ska fortfarande matcha antal personer)
* Det ska gå och ta bort en bokning
* Det ska inte gå och boka en bana som redan är bokad den dagen och tiden. 
* Det ska gå och se sin bokning igen med bokningsnummer.


## Betygskriterier

**För Godkänt:**
* Uppfyller all funktionalitet.
* Skickat med en config-fil för Insomnia med exempelanrop på alla endpoints.

**För Väl Godkänt:**
* Du ska kunna söka under ett datumintervall (ex. 15/5-25/5) och få fram alla banor och se när dessa har bokningar (om de har några).

## Inlämning

Inlämning sker på Awesomo med en länk till ert Github repo med er kod senast 2/6 23:59. **Glöm inte** att skicka med en config-fil för Insomnia med exempelanrop på alla endpoints.
