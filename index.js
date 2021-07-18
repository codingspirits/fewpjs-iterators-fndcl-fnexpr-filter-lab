let list = [1,2,3,4,5,6]
/*let even = []
makeEven = (arr) => {
    for (i=0; i< arr.length; i++){
    if (arr[i]%2 ==0) {
        even.push(arr[i])
    }}    
    console.log(even)
}
makeEven(list)

let even = list.filter(n => {console.log(n%2===0)});
return even;*/

/*let findMatching = drivers.filter((drivers, string) => {
    for (i of string){
    if (driver[i] ===string[i]) {return drivers}}})*/
function findMatching(drivers, string) {
    return drivers.filter((possibleMatch) => {possibleMatch.toLowerCase() === sought.toLowerCase()})}
}

/*let fuzzyMatch = drivers.filter((drivers,string) => {if (drivers.charAt(0)== string.charAt(0)) { return array.driver}})*/
function fuzzyMatch(source, testString) {
    return source.filter( possibleMatch =>
      possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
    )
  }
  

/*let matchName = string.filter((drivers,string) => {if drivers.name == string{ return string}}*/
function matchName(source, soughtName) {
    return source.filter((record) => {record.name === soughtName})
}



