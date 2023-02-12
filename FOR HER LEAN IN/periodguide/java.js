function calculateNextPeriod() {
    let startDate = new Date(document.getElementById("startDate").value);
    let nextPeriod = new Date(startDate.getTime());
    nextPeriod.setDate(nextPeriod.getDate() + 28);
    
    document.getElementById("nextPeriodDisplay").innerHTML = "Your next period is expected on: " + nextPeriod.toDateString();
  }