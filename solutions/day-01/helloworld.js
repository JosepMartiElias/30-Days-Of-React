// Declare an empty array;
const emptyArray = [];
// Declare an array with more than 5 number of elements
const testArray = [0,1,2,3,4,5];
// Find the length of your array
console.log(testArray.length);
// Get the first item, the middle item and the last item // of the array
console.log("first array " + testArray[0] + " , midel " + testArray[testArray.length/2] + "  last " + testArray[testArray.length-1]);
// Declare an array called mixedDataTypes, put different // data types in the array and find the length of the // array. The array size should be greater than 5
const mixedDataTypes = [
    0,
    "hi",
    {hello: "world",
    bye: "world"},
    3,
    4,
    5
]
console.log(mixedDataTypes)
// Declare an array variable name itCompanies and assign // initial values Facebook, Google, Microsoft, Apple, // IBM, Oracle and Amazon
const itCompanies = [
    'Facebook',
    'Google',
    'Microsoft',
    'Apple',
    'IBM',
    'Oracle',
    'Amazon'
];
// Print the array using console.log()
console.log(itCompanies);
// Print the number of companies in the array
console.log(itCompanies.length)
// Print the first company, middle and last company
console.log("first company " + itCompanies[0] + " , midel " + itCompanies[testArray.length/2] + "  last " + itCompanies[itCompanies.length-1]);
// Print out each company
for (const company in itCompanies){
    console.log(itCompanies[company]);
};
// Change each company name to uppercase one by one and // print them out
for (const company in itCompanies){
    console.log(itCompanies[company].toUpperCase());
};
// Print the array like as a sentence: Facebook, Google, // Microsoft, Apple, IBM,Oracle and Amazon are big IT // companies.
let sentence = itCompanies[0];
for (const company in itCompanies){
    if ((company < (itCompanies.length - 1)) && (company > 0)){
        sentence = sentence + ", " + itCompanies[company]
    }
    else{
        sentence = sentence + " and " + itCompanies[company] + "are big IT companies"
    }
}
console.log(sentence)
// Check if a certain company exists in the itCompanies // array. If it exist return the company else return a // company is not found
function companyExists(company) {
    if (itCompanies.includes(company)){
        return company;
    }
    else {
        return "company is not found"
    }
}
console.log(companyExists("Amazon"));
console.log(companyExists("Nokia"));
// Filter out companies which have more than one 'o' // without the filter method
const filtered = [];
for (company in itCompanies){
    if (itCompanies[company].split('o').length > 2){
        filtered.push(itCompanies[company])
    }
}
console.log(filtered)
// Sort the array using sort() method
itCompanies.sort();
console.log(itCompanies);
// Reverse the array using reverse() method
itCompanies.reverse();
console.log(itCompanies);
// Slice out the first 3 companies from the array
console.log(itCompanies.slice(3));
// Slice out the last 3 companies from the array
console.log(itCompanies.slice(0,itCompanies.length-3));
// Slice out the middle IT company or companies from the // array
console.log(itCompanies.splice(itCompanies.length/2,1))
// Remove the first IT company from the array
itCompanies.shift()
console.log(itCompanies);
// Remove the middle IT company or companies from the // array
itCompanies.splice(itCompanies.length/2,1);
console.log(itCompanies);
// Remove the last IT company from the array
itCompanies.pop();
console.log(itCompanies);
// Remove all IT companies
itCompanies.splice(0, itCompanies.length);
console.log(itCompanies);