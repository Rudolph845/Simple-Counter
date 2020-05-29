
var i = 0


function incNumber() {
    if (i < 99) {
        ++i
    }
    document.getElementById('display').innerHTML = i
}


function decNumber() {
    if (i > -99) {
        --i
    }
    document.getElementById('display').innerHTML = i
}