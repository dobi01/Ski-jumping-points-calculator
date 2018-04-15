// jshint esversion: 6

const calculateDistancePoints = (distance, hillSize, kPoint) => {

	const normalHill = {
		startPoints: 60,
		meterValue: 2
	};

	const bigHill = {
		startPoints: 60,
		meterValue: 1.8
	};

	const giantHill = {
		startPoints: 120,
		meterValue: 1.2
	};

	function getDistancePoints(hill) {
    if (distance == kPoint) {
      return hill.startPoints;
    } else {
      let finalPoints = (distance - kPoint) * hill.meterValue + hill.startPoints;
      return finalPoints;
    }
  }

  switch (hillSize) {
    case 'giant':
      return getDistancePoints(giantHill);
    case 'big':
      return getDistancePoints(bigHill);
    case 'normal':
      return getDistancePoints(normalHill);
    default:
      return `Error: Wrong value passed. Size of hill choose from: 'giant', 'big', 'normal'`;
  }
};

module.exports = calculateDistancePoints;
