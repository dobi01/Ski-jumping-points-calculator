// jshint esversion: 6

const assert = require('assert');
const calculateTotalPoints = require('./calculateTotalPoints');

describe('calculateTotalPoints', () => {
	it('should return sum when gateFactor and windFactor are positive floating numbers', () => {
		const actual = calculateTotalPoints(200, 'giant', 200, [10, 15, 10, 20, 20], 1.0, 8.7);

		const expected = 174.7;

		assert.equal(actual, expected);
  });
  
  it('should return sum when gateFactor and windFactor are negative floating numbers', () => {
		const actual = calculateTotalPoints(106.5, 'normal', 98, [18.5, 18.5, 18.5, 19.0, 19.0], -13.5, 6.4);

		const expected = 125.9;

		assert.equal(actual, expected);
	});
});
