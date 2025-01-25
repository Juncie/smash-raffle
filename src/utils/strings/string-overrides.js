/**
 *
 *
 * @name numberWithCommas
 * @description Adds commas to every thousands place on a number
 * @param {*} str Item to trim space
 * @returns String
 */
export function numberWithCommas(x, fixed = 2) {
    var parts = parseFloat(x).toFixed(fixed).toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
}

export function withCommas(fixed = 2) {
    if (Number.isNaN(parseFloat(this))) return '';
    var parts = parseFloat(this).toFixed(fixed).toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
}

export function stringToNumber() {
    // Remove non-numeric characters except for the decimal point
    const inputValue = `${this}`;
    const stringWithNumbers = inputValue.replace(/[^\d.]/g, '');

    // Parse the string as a float
    const parsedFloat = parseFloat(stringWithNumbers);
    if (Number.isNaN(parsedFloat)) return 0;
    // Return the parsed float
    return parsedFloat;
}

function shorten(fixed = 0, fixed2IfBillion = false) {
    // Alter numbers larger than 1k
    if (this >= 1e3) {
        var units = ['k', 'M', 'B', 'T'];

        // Divide to get SI Unit engineering style numbers (1e3,1e6,1e9, etc)
        let unit = Math.floor((this.toFixed(0).length - 1) / 3) * 3;
        // Calculate the remainder
        let unitname = units[Math.floor(unit / 3) - 1];
        let num;
        if (fixed2IfBillion && unitname === 'B') {
            num = (this / ('1e' + unit)).toFixed(2);
            return num + unitname;
        } else {
            num = (this / ('1e' + unit)).toFixed(fixed);
            return num + unitname;
        }

        // output number remainder + unitname
    }

    // return formatted original number
    return this.toLocaleString();
}

export function toHHMMSS() {
    var time = this;
    var ms = time % 1000;
    time = (time - ms) / 1000;
    var secs = time % 60;
    time = (time - secs) / 60;
    var mins = time % 60;
    var hrs = (time - mins) / 60;

    if (hrs < 10) hrs = `0${hrs}`;
    if (mins < 10) mins = `0${mins}`;
    if (secs < 10) secs = `0${secs}`;

    return hrs + ':' + mins + ':' + secs;
}

// Add method to prototype. this allows you to use this function on numbers and strings directly

// eslint-disable-next-line
String.prototype.shorten = shorten;
// eslint-disable-next-line
String.prototype.numberWithCommas = withCommas;
// eslint-disable-next-line
String.prototype.stringToNumber = stringToNumber;
// eslint-disable-next-line

// eslint-disable-next-line
Number.prototype.stringToNumber = stringToNumber;
// eslint-disable-next-line
Number.prototype.numberWithCommas = withCommas;
// eslint-disable-next-line
Number.prototype.shorten = shorten;
// eslint-disable-next-line
Number.prototype.toHHMMSS = toHHMMSS;
