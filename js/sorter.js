export class SeasonSorter {
	static sort(seasons, method) {
		const sortMethods = {
			newest: (a, b) => b.startDate.localeCompare(a.startDate),
			oldest: (a, b) => a.startDate.localeCompare(b.startDate),
			winner: (a, b) => {
				const aName = a.winner?.name || "";
				const bName = b.winner?.name || "";
				return aName.localeCompare(bName);
			},
		};

		const sorter = sortMethods[method];
		return sorter ? [...seasons].sort(sorter) : seasons;
	}
}
