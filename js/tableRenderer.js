export class SeasonTableRenderer {
	static render(seasons) {
		const tbody = document.querySelector("#seasonsTable tbody");
		tbody.innerHTML = "";

		seasons.forEach((season) => {
			const row = document.createElement("tr");

			const seizoenCell = document.createElement("td");
			seizoenCell.textContent = `${season.startDate.slice(
				0,
				4
			)} - ${season.endDate.slice(0, 4)}`;
			row.appendChild(seizoenCell);

			const winnaarCell = document.createElement("td");
			winnaarCell.textContent = season.winner?.name || "Geen winnaar";
			row.appendChild(winnaarCell);

			const logoCell = document.createElement("td");
			if (season.winner?.crest) {
				const img = document.createElement("img");
				img.src = season.winner.crest;
				img.alt = season.winner.name;
				logoCell.appendChild(img);
			}
			row.appendChild(logoCell);

			tbody.appendChild(row);
		});
	}
}
