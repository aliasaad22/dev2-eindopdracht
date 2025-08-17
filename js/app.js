import { FootballAPI } from "./api.js";
import { SeasonSorter } from "./sorter.js";
import { SeasonTableRenderer } from "./tableRenderer.js";
import { SeasonChartRenderer } from "./chartRenderer.js";

export class App {
	static async renderView(seasons, sortMethod, viewType) {
		const sortedSeasons = SeasonSorter.sort(seasons, sortMethod);

		if (viewType === "table") {
			document.getElementById("seasonsTable").style.display = "table";
			document.getElementById("chart").style.display = "none";
			SeasonTableRenderer.render(sortedSeasons);
		} else {
			document.getElementById("seasonsTable").style.display = "none";
			document.getElementById("chart").style.display = "block";
			SeasonChartRenderer.render(sortedSeasons);
		}
	}

	static async init() {
		const seasons = await FootballAPI.fetchSeasons();
		this.renderView(seasons, "newest", "table");

		document.getElementById("sort").addEventListener("change", async () => {
			const sort = document.getElementById("sort").value;
			const view = document.getElementById("view").value;
			const seasons = await FootballAPI.fetchSeasons();
			this.renderView(seasons, sort, view);
		});

		document.getElementById("view").addEventListener("change", async () => {
			const sort = document.getElementById("sort").value;
			const view = document.getElementById("view").value;
			const seasons = await FootballAPI.fetchSeasons();
			this.renderView(seasons, sort, view);
		});
	}
}
