function centuryFromYear(year) {
    return year < 101 ? 1 : Math.floor((year + 99) / 100);

}
console.log(centuryFromYear(1801));

//or 
/*Math.ceil(year/100) */