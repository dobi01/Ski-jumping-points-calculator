// jshint esversion: 6

const assert = require('assert');
const calculateDistancePoints = require('./calculateDistancePoints');

describe('calculateDistancePoints', () => {
	it('should return startPoints when kPoint == distance', () => {
		const actual = calculateDistancePoints(200, 'giant', 200);

		const expected = 120;

		assert.equal(actual, expected);
  });
  
  it('should return distancePoints when kPoint < distance', () => {
		const actual = calculateDistancePoints(224, 'giant', 200);

		const expected = 148.8;

		assert.equal(actual, expected);
  });
  
  it('should return distancePoints when kPoint > distance', () => {
		const actual = calculateDistancePoints(170, 'giant', 200);

		const expected = 84;

		assert.equal(actual, expected);
  });
  
  it('should return distancePoints when distance is a floating point number', () => {
		const actual = calculateDistancePoints(179.5, 'giant', 200);

		const expected = 95.4;

		assert.equal(actual, expected);
  });

  it('should return distancePoints when hillSize: big', () => {
		const actual = calculateDistancePoints(134, 'big', 120);

		const expected = 85.2;

		assert.equal(actual, expected);
  });

  it('should return distancePoints when hillSize: normal', () => {
		const actual = calculateDistancePoints(101.5, 'normal', 98);

		const expected = 67;

		assert.equal(actual, expected);
  });
  
  it('should return error if wrong value passed', () => {
		const actual = calculateDistancePoints(179.5, 'giantt', 200);

		const expected = `Error: Wrong value passed. Size of hill choose from: 'giant', 'big', 'normal'`;

		assert.equal(actual, expected);
	});

});
