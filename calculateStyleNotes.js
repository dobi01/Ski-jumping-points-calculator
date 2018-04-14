// jshint esversion: 6

const calculateStyleNotes = (styleNotes) => {

	let arraySorted,
			styleNotesSum;

	function compareNumbers(a, b) {
		return a - b;
	}

	function integerToFloat(a) {
		let string = a.toFixed(1);
		return Number(string);
	}

	function getSum(a, b) {
		return a + b;
	}

	if (styleNotes.some(isNaN)) {

		return `Error: Wrong value passed. Check if array of notes consists solely of numbers`;

	} else {
	
	arraySorted = styleNotes.sort(compareNumbers);
	arraySorted.pop();
	arraySorted.shift();
	arraySorted = arraySorted.map(integerToFloat);

	styleNotesSum = arraySorted.reduce(getSum);

	return styleNotesSum;

	}
};

module.exports = calculateStyleNotes;

// DO NOT PASS ALL TESTS - FAILED BY REMOVING MORE THAN ONE THE LOWEST / THE HIGHEST VALUE IN ARRAY
// const calculateStyleNotes = (styleNotes) => {

	// let maxNote = Math.max(...styleNotes),
	// 		minNote = Math.min(...styleNotes),
	// 		arrayWitoutMaxNote = styleNotes.filter(e => e !== maxNote),
	// 		arrayWitoutMaxAndMinNotes = arrayWitoutMaxNote.filter(e => e !== minNote),
	// 		styleNotesFinal = arrayWitoutMaxAndMinNotes.reduce(function(a, b) {
	// 			return a + b;
	// 		});

// 	return styleNotesFinal;
// };