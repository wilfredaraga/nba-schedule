import { loadHeaderFooter, getLocalStorage } from "./util.mjs";

loadHeaderFooter();

function renderSavedTeams(){
    const savedTeams = getLocalStorage("so-cart");
    const htmlItems = savedTeams.map((team) => savedTeamsTemplate(team));
    document.querySelector(".teams-list").innerHTML = htmlItems.join("");
}

function savedTeamsTemplate(team) {
    return `<li class="team-card">
            <img
            src="${team.logos}"
            alt="${team.shortDisplayName}"/>
            <h3 class="card__name">${team.name}</h3>
            <h2 class="card__abv">${team.abbrev}</h2>
            <a href="${team.links[1].href}">Team Roster</a>
        </li>`
}

renderSavedTeams();