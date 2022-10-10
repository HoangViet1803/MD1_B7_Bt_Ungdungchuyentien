let convert = document.querySelector("#convert");
convert.addEventListener('click',convertFn);
function convertFn() {
    let amount = document.querySelector('#amount').value;
    let result = document.querySelector('#result');
    // get value of a select
    let from = document.querySelector("#from_current").value;
    let to = document.querySelector("#to_current").value;
    if (from === "VND" && to === "USD") {
        result.innerHTML = `Result: ${amount/23000} USD`
    } else if (from === "USD" && to === "VND") {
        result.innerHTML = `Result: ${amount * 23000} VND`
    } else if (from === to) {
        result.innerHTML = `Result: ${amount} ${to}`
    }
}