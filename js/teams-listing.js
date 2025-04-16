import getTeams from "./getTeams.mjs";
import TeamList from "./TeamList.mjs";
import { loadHeaderFooter , getParam } from "./util.mjs";

loadHeaderFooter();

const category = getParam("category")
const dataSource = new getTeams();
const listElement = document.querySelector(".teams-list")

const list = new TeamList(category, dataSource, listElement);
list.init();