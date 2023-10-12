function resetDate() {
    var years = parseInt(document.getElementById('yearsInput').value);
    var currentDate = new Date();
    var year = currentDate.getFullYear();
    currentDate.setFullYear(year - years);

    document.getElementById('updatedDate').innerText = currentDate;
}

// Display the current date on page load
var currentDateString = new Date().toLocaleString();
document.getElementById('currentDate').innerText = currentDateString;
