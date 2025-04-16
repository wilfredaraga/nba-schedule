import { renderListWithTemplate , getLocalStorage , setLocalStorage } from "./util.mjs";

export default class TeamList{
    constructor(category, dataSource, listElement){
        this.category = category;
        this.dataSource = dataSource;
        this.listElement = listElement
    }

    async init() {
        try {
            const list = await this.dataSource.getData(this.category);

            this.renderList(list);
            document
                .getElementById("addToSave")
                .addEventListener("click", this.addToSave.bind(this));
        } catch (error) {
            console.log(error);
        }
    }

    addToSave() {
        const savedTeams = getLocalStorage("so-cart") || []
        const existingTeam = savedTeams.find(team => team.id === this.team.id);

        if(!existingTeam) {
            savedTeams.push(this.team)
        }

        setLocalStorage("so-cart", existingTeam);
    }
    renderList(list){
        renderListWithTemplate(teamCardTemplate, this.listElement, list)
    };
};


function teamCardTemplate(team) {
    return `<li class="team-card">
            <img
            src="${team.logos}"
            alt="${team.shortDisplayName}"/>
            <h3 class="card__name">${team.name}</h3>
            <h2 class="card__abv">${team.abbrev}</h2>
            <a href="${team.links[1].href}">Team Roster</a>
            <button id="addToSave" data-id="${team.id}">❤</button>
        </li>`
}