const scuberHeadquarters = 42;

// Returns a distance in blocks and also calculates distances below 42nd street
function distanceFromHqInBlocks(pickUpLocation) {
	const distanceInBlocks = pickUpLocation > scuberHeadquarters ? pickUpLocation - scuberHeadquarters : scuberHeadquarters - pickUpLocation;
	return distanceInBlocks;
}