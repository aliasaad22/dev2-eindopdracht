let chartInstance = null;

export class SeasonChartRenderer {
	static render(seasons) {
		const winnaars = seasons.filter((s) => s.winner).map((s) => s.winner.name);
		const counts = {};
		winnaars.forEach((name) => (counts[name] = (counts[name] || 0) + 1));

		const ctx = document.getElementById("chart").getContext("2d");

		if (chartInstance) chartInstance.destroy();

		chartInstance = new Chart(ctx, {
			type: "bar",
			data: {
				labels: Object.keys(counts),
				datasets: [
					{
						label: "Aantal gewonnen seizoenen",
						data: Object.values(counts),
						backgroundColor: "rgba(54, 162, 235, 0.7)",
					},
				],
			},
			options: {
				responsive: true,
				scales: {
					y: { beginAtZero: true },
				},
			},
		});
	}
}
