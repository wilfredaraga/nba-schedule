import TeamDetailsAndSchedule from "./TeamDetailsAndSchedule.mjs";
import getTeams from "./getTeams.mjs";

import { getParam, loadHeaderFooter  } from "./util.mjs";

loadHeaderFooter();

const dataSource = new getTeams();
const teamId = getParam("team");

const team = new TeamDetailsAndSchedule(teamId, dataSource);

team.init();