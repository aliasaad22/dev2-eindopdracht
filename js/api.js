const API_URL =
	"https://cors-anywhere.herokuapp.com/https://api.football-data.org/v4/competitions/PL";
const API_KEY = "5a53bd5e00b847a4914709c3329a7609";

const headers = {
	"X-Auth-Token": API_KEY,
};

export class FootballAPI {
	static async fetchSeasons() {
		try {
			const res = await fetch(API_URL, { headers });
			const data = await res.json();
			return data.seasons.filter((s) => s.startDate);
		} catch (err) {
			console.error("Fout bij ophalen data:", err);
			return [];
		}
	}
}
