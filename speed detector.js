function checkSpeed(speed) {
    const speedLimit = 70;
    const demeritPointsPerKm = 5;

    if (speed <= speedLimit) {
        console.log("Ok");
    } else {
        let demeritPoints = Math.floor((speed - speedLimit) / demeritPointsPerKm);
        console.log("Points: " + demeritPoints);

        if (demeritPoints > 12) {
            console.log("License suspended");
        }
    }
}
