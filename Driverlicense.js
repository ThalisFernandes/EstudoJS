/*
1–5: The first five characters of the surname (padded with 9s if less than 5 characters)

6: The decade digit from the year of birth (e.g. for 1987 it would be 8)

7–8: The month of birth (7th character incremented by 5 if driver is female i.e. 51–62 instead of 01–12)

9–10: The date within the month of birth

11: The year digit from the year of birth (e.g. for 1987 it would be 7)

12–13: The first two initials of the first name and middle name, padded with a 9 if no middle name

14: Arbitrary digit – usually 9, but decremented to differentiate drivers with the first 13 characters in common. We will always use 9

15–16: Two computer check digits. We will always use "AA"
Your task is to code a UK driving license number using an Array of data. The Array will look like

data = ["John","James","Smith","01-Jan-2000","M"];
Where the elements are as follows

0 = Forename
1 = Middle Name (if any)
2 = Surname
3 = Date of Birth (In the format Day Month Year, this could include the full Month name or just shorthand ie September or Sep)
4 = M-Male or F-Female
//["John","James","Smith","01-Jan-2000","M"] ==> "SMITH001010JJ9AA"

// GOOD LUCK 
*/


let data = ["John","James","Smith","01-Jan-2000","M"];
let data1 = ["Julia","sanderland","santos","20-March-1994","F"];
let data2 = ["Marta","James","Sullivan","01-Apr-2000","F"];
let data3 = ["Marta","James","Lee","01-december-2000","F"];


function driver(data){
    let surname = ""
    if(data[2].length >= 5){
        surname =  data[2].substring(0,5);
    } else if (data[2].length >= 4) {
        surname = data[2]+"9";
    } else {
        surname = data[2]+"99";
    }
    surname.toUpperCase();
    let yearAndDate = data[3];
    let year = [];
    let decadeOfBirth = year[1];
    for(let i = yearAndDate.length; i >= 0 ;i--){
       if(year.length >= 4){
           break;
       } else {
            if(yearAndDate[i] !==  undefined){
                 year.push(yearAndDate[i]);
            }   
       }
    }
    decadeOfBirth = year[1];
    let monthstr = yearAndDate.substring(3,6);
    let monthnumber = "";
    if(monthstr === "Jan" || monthstr === "jan"){
        if(data[4] === "F"){
            monthnumber = "51"
           } else {
            monthnumber = "01"
           }
    } else if(monthstr === "Feb" || monthstr === "feb"){
       if(data[4] === "F"){
        monthnumber = "52"
       } else {
        monthnumber = "02"
       }
    } else if(monthstr === "Mar" || monthstr === "mar"){
        if(data[4] === "F"){
            monthnumber = "53"
           } else {
            monthnumber = "03"
           }
    } else if(monthstr === "Apr" || monthstr === "apr"){
        if(data[4] === "F"){
            monthnumber = "54"
           } else {
            monthnumber = "04"
           }
    } else if(monthstr === "May" || monthstr === "may"){
        if(data[4] === "F"){
            monthnumber = "55"
           } else {
            monthnumber = "05"
           }
    } else if(monthstr === "Jun" || monthstr === "jun"){
        if(data[4] === "F"){
            monthnumber = "56"
           } else {
            monthnumber = "06"
           }
    } else if(monthstr === "Jul" || monthstr === "jul"){
        if(data[4] === "F"){
            monthnumber = "57"
           } else {
            monthnumber = "07"
           }
    } else if(monthstr === "Aug" || monthstr === "aug"){
        if(data[4] === "F"){
            monthnumber = "58"
           } else {
            monthnumber = "08"
           }
    } else if(monthstr === "Sep" || monthstr === "sep"){
        if(data[4] === "F"){
            monthnumber = "59"
           } else {
            monthnumber = "09"
           }
    } else if(monthstr === "Oct" || monthstr === "oct"){
        if(data[4] === "F"){
            monthnumber = "60"
           } else {
            monthnumber = "10"
           }
    } else if(monthstr === "Nov" || monthstr === "nov"){
        if(data[4] === "F"){
            monthnumber = "61"
           } else {
            monthnumber = "11"
           }
    } else if(monthstr === "Dec" || monthstr === "dec"){
        if(data[4] === "F"){
            monthnumber = "62"
           } else {
            monthnumber = "12"
           }
    }
    let date = yearAndDate.substring(0,2);
    let yearLastDigit = yearAndDate[yearAndDate.length -1];
    let firstnameinitial = data[0][0];
    let middlenameinitial = data[1].length > 0 ? data[1][0] : "9";
    let capitalletters = firstnameinitial + middlenameinitial.toUpperCase();
    let arbiternumber = "9";
    let lastletters = "AA";
    let result = surname + decadeOfBirth + monthnumber + date + yearLastDigit + capitalletters + arbiternumber + lastletters;
    return result.toUpperCase();
}

driver(data);
driver(data1);
driver(data2);
driver(data3);