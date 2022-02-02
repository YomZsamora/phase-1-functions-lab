const scuberHeadquarters = 42;

// Returns a distance in blocks and also calculates distances below 42nd street
function distanceFromHqInBlocks(pickUpLocation) {
	const distanceInBlocks = pickUpLocation > scuberHeadquarters ? pickUpLocation - scuberHeadquarters : scuberHeadquarters - pickUpLocation;
	return distanceInBlocks;
}

// Returns a distance in feet
function distanceFromHqInFeet(pickUpLocation) {
	let distanceInBlocks = distanceFromHqInBlocks(pickUpLocation);
	return distanceInBlocks*264;
}

// Calculates the number of feet a passenger travels given a starting block and an ending block
function distanceTravelledInFeet(startingBlock, endingBlock) {
	let distanceTravelled = endingBlock > startingBlock ? (endingBlock - startingBlock)*264 : (startingBlock - endingBlock)*264;
	return distanceTravelled;
}