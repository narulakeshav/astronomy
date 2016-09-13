$(document).ready(function() {

    console.log("Loaded");

    // Getting HTML Elements by ID
    var d = document;
    var search = d.getElementById("search");
    var getAgeInYr = d.getElementById("timeInYears");
    var getTimeInHr = d.getElementById("timeInHours");
    var getDistanceInMiles = d.getElementById("distanceInMiles");
    var getDistanceInAU = d.getElementById("distanceInAU");
    var getDistanceInLightYears = d.getElementById("distanceInLightYears");

    // Input Values
    var birthday = d.getElementById("birthday");

    search.onclick = function() {
        console.log('clicked');
        if(birthday.value === '') {
            alert("Please enter your birthday!");
        }
        else if(calculateHours() < 0) {
            alert("Pls stop, you aren't from the future");
        }
        else {
            var timeInYears = yearsLived();
            var timeInHours = calculateHours();
            var timeInSeconds = calculateSeconds();
            var milesDistance = distanceInMilesSinceBorn(timeInHours);
            var AUDistance = distanceInAU(milesDistance);
            var lightYearsDistance = distanceInLightYears(milesDistance);
            showAsHTML(timeInYears, timeInHours, milesDistance, AUDistance, lightYearsDistance);
        }
    };

    function yearsLived() {
        return new Date().getFullYear() - new Date(birthday.value).getFullYear();
    }

    function calculateHours() {
        var timeDifference = new Date().getTime() - new Date(birthday.value).getTime();
        return Math.floor(timeDifference / (1000 * 60 * 60));
    }

    function calculateSeconds() {
        var timeDifference = new Date().getTime() - new Date(birthday.value).getTime();
        return Math.floor(timeDifference / 1000);
    }

    function formatTime(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    function distanceInMilesSinceBorn(hours) {
        var rateOfMovement = 800000;
        return rateOfMovement * hours;
    }

    function distanceInAU(milesTraveled) {
        var unit = 92955807;
        return Number.parseInt(milesTraveled / unit);
    }

    function distanceInLightYears(milesTraveled) {
        var lightYear = 5878625370938;
        return milesTraveled / lightYear;
    }

    function showAsHTML(year, time, miles, AU, lightYears) {
        getAgeInYr.innerHTML = year;
        getTimeInHr.innerHTML = formatTime(time);
        getDistanceInMiles.innerHTML = formatTime(miles);
        getDistanceInAU.innerHTML = formatTime(AU);
        getDistanceInLightYears.innerHTML = round(lightYears, 5);
    }

    function round(value, decimals) {
        return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
    }
});
