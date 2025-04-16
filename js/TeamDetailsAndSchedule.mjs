import { getLocalStorage , setLocalStorage } from "./util.mjs";

export default class TeamDetailsAndSchedule {
    constructor(teamId, datasource) {
        this.teamId = teamId;
        this.team = {};
        this.datasource = datasource;
    }

    async init() {
        try {
            this.team = await this.dataSource.findScheduleByTeamId(this.teamId)

            this.renderTeamSchedules();
            document
                .getElementById("addToSave")
                .addEventListener("click", this.addToSave.bind(this));
        } catch(error){
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

    renderTeamSchedules() {
        const element = document.querySelector("main")
        element.insertAdjacentHTML("afterbegin", teamScheduleTemplate(this.team));
    }
}

function teamScheduleTemplate() {
        
}
