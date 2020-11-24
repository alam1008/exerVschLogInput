var inputVal = document.getElementById("textInput").value
function getInputValue() {
    var inputVal = document.getElementById("textInput").value
    console.log(inputVal)
    var output = document.createElement("script")
    document.body.append(inputVal + " ")
}
var button = document.getElementById("button")
button.addEventListener("click", getInputValue)

