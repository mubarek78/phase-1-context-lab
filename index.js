/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!
 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */
 function createEmployeeRecord(array){
    let record
    return record = {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [], 
        timeOutEvents: []
    }
}
function createEmployeeRecords(array){
    return array.map(createEmployeeRecord)
}

function createTimeInEvent(dateStamp){
    let [date, hour] = dateStamp.split(' ')

    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour),
        date,
    })
    return this
}

function createTimeOutEvent(dateStamp){
    let [date, hour] = dateStamp.split(' ')

    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour),
        date,
    })
    return this
}

function hoursWorkedOnDate(dateStamp){
    let inTimes = this.timeInEvents.find(function(e){
    return e.date === dateStamp
})
    let outTimes = this.timeOutEvents.find(function(e){
    return e.date === dateStamp
})
// console.log(inTimes)
// console.log(outTimes)
    return (outTimes.hour - inTimes.hour) /100
}

function wagesEarnedOnDate(dateStamp) {
    let rawMoney = hoursWorkedOnDate.call(this, dateStamp)
        * this.payPerHour

    
    return parseInt(rawMoney)
}


const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function findEmployeeByFirstName(srcArray, firstName) {
   return srcArray.find(function(e){
       return e.firstName
   })
}

function calculatePayroll(arrayOfRecords){
    return arrayOfRecords.reduce((previousValue, currentValue) => {
        return previousValue + allWagesFor.call(currentValue)
    }, 0)
   
}

