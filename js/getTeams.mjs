//First API
const url = 'https://nba-api-free-data.p.rapidapi.com/';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'b68aa65c95mshb5f725a63515bb2p166c1cjsnf8e15e920234',
		'x-rapidapi-host': 'nba-api-free-data.p.rapidapi.com'
	}
};

//Second API
const secondUrl = 'https://nba-schedule.p.rapidapi.com/schedule?';
const secondOptions = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'b68aa65c95mshb5f725a63515bb2p166c1cjsnf8e15e920234',
		'x-rapidapi-host': 'nba-schedule.p.rapidapi.com'
	}
};

export default class getTeams {
    constructor() {
    }
    async getData(category) {
      const result = await fetch(`${url}${category}`, options);
      const data = await convertToJson(result);
      console.log(data.response.teamList);
      return data.response.teamList;
    }
    async findScheduleByTeamId(teamAbbrev) {
      const response = await fetch(`${secondUrl}team=${teamAbbrev}&date=${new Date}`, secondOptions)
      const data = await convertToJson(response);
      console.log(data);
      return data;
    }

}

async function convertToJson(res) {
    const data = await res.json();
    if (res.ok) {
      return data;
    } else {
      throw { name: "servicesError" , message: data};
    }
}


// const url = 'https://sports-information.p.rapidapi.com/nba/team-list';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': 'b68aa65c95mshb5f725a63515bb2p166c1cjsnf8e15e920234',
// 		'x-rapidapi-host': 'sports-information.p.rapidapi.com'
// 	}
// };

// async function getData(){
//   try {
//     const response = await fetch(url, options);
//     const result = await response.text();
//     console.log(result);
//   } catch (error) {
//     console.error(error);
//   }
// }

// getData();