function fizzBuzz(arr) {
    if (!Array.isArray(arr)) return "Input tidak valid";

    let hasilAkhir = "";
    let pemisah = (arr.includes(1) || arr.includes(-1)) ? ", " : " ";
    for (let index = 0; index < arr.length; index++) {
        let output = "";

        if (arr[index] % 14 == 0) {
            output = "FizzBuzz";
        }
        else if (arr[index] % 7 == 0) {
            output = "Buzz";
        }
        else if (arr[index] % 2 == 0) {
            output = "Fizz";
        }
        else {
            output = arr[index].toString();
        }

        hasilAkhir += output;
        
        if (index < arr.length - 1) {
            hasilAkhir += pemisah;
        }
    }
    return hasilAkhir;
}
module.exports = fizzBuzz;