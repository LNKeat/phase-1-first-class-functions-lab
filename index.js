// Code your solution in this file!
// const returnFirstTwoDrivers = (drivers.map(i => i.slice(0, 1)))

const returnFirstTwoDrivers = (drivers) => {
    return drivers.slice(0, 2)
}

const returnLastTwoDrivers = (drivers) => {
    return (drivers.slice(-2));
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (int) => {
    return function (fare) {
        return fare * int
    }
}
//const fareDoubler = createFareMultiplier(2);

const fareDoubler = (fare) => {
    return createFareMultiplier(2)(fare);
}

const fareTripler = (fare) => { 
    return createFareMultiplier(3)(fare);
}

function selectDifferentDrivers(arrayOfDrivers, cbFun) {
    return cbFun(arrayOfDrivers);
}