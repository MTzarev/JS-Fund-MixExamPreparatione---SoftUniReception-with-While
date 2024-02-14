function softUniReception(input) {
    let employeeOne = Number(input.shift());
    let employeeTwo = Number(input.shift());
    let emplueeThree = Number(input.shift());
    let peoples = Number(input.shift());
    let answersPerHour = employeeOne + employeeTwo + emplueeThree;
    let neededHours = 0;
    while (peoples > 0) {
        neededHours++;
        peoples -= answersPerHour;
        if (neededHours % 4 === 0) {
            neededHours++;
        }
    }

    console.log(`Time needed: ${neededHours}h.`);
}
softUniReception(['5', '6', '4', '20']);
softUniReception(['1', '2', '3', '45']);
softUniReception(['3', '2', '5', '40']);