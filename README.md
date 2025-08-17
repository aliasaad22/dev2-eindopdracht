[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=19503429&assignment_repo_type=AssignmentRepo)

# ⚽ Premier League Seizoensviewer

Een interactieve webapplicatie die seizoensgegevens van de Engelse Premier League ophaalt via de Football-Data.org API.  
Gebruikers kunnen de seizoenen sorteren (nieuwste, oudste, winnaar), schakelen tussen een tabelweergave en een grafiek, en clublogo’s bekijken van de winnende teams.

🔗 **Live demo**: [https://ehb-mct.github.io/dev2-course-project-aliasaad22](https://ehb-mct.github.io/dev2-course-project-aliasaad22)  
📁 **GitHub repository**: [https://github.com/EHB-MCT/dev2-course-project-aliasaad22](https://github.com/EHB-MCT/dev2-course-project-aliasaad22)

---

## 📦 Codeoverzicht

### `api.js`

Maakt verbinding met de Football-Data API en haalt seizoensdata op van de Premier League (`PL`).  
→ Filtert enkel seizoenen met een startdatum.

### `app.js`

Beheert de hoofdlogica van de app.  
→ Initieert het ophalen van data, en schakelt tussen weergavevormen (tabel of grafiek) en sorteermethoden.

### `sorter.js`

Bevat een klasse `SeasonSorter` met een `sort()` methode.  
→ Gebruikt een `switch`-statement om de lijst te sorteren op `newest`, `oldest` of `winner`.

### `tableRenderer.js`

Toont de gesorteerde seizoensdata in een HTML-tabel met kolommen: seizoen, winnaar en clublogo.

### `chartRenderer.js`

Genereert een staafdiagram via Chart.js.  
→ Visualiseert hoe vaak elke club de Premier League won in de dataset.

---

## 📊 Features

- ✅ Ophalen van seizoensdata via Football-Data API
- ✅ Sorteren op datum of winnaar
- ✅ Tabel- én grafiekweergave
- ✅ Clublogo’s van winnaars
- ✅ Live gepubliceerd via GitHub Pages

---

## 📚 Bronnen

- [Football-Data.org API](https://www.football-data.org)  
  ➤ Gebruikt in `api.js` om seizoensinformatie van de Premier League op te halen.

- [Chart.js Bar Chart Docs](https://www.chartjs.org/docs/latest/charts/bar.html)  
  ➤ Gebruikt in `chartRenderer.js` voor het opbouwen van de staafdiagram waarin clubs met gewonnen seizoenen worden weergegeven.

- [YouTube tutorial – Structureren van JavaScript projecten](https://www.youtube.com/watch?v=VfGW0Qiy2I0)  
  ➤ Gebruikt als inspiratie voor het opdelen van de code in modules zoals `app.js`, `sorter.js`, `tableRenderer.js` en `chartRenderer.js`.

---

s
