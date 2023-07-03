const result = document.querySelector('#screen')

let calculate = (number)=> {
    result.value += number
}

let equate = () => {
    try {
        result.value = eval(result.value)
    }
    catch (error) {
        alert("Enter a valid number")
    }
}

function clr() {
    result.innerHTML = 0
}

function del() {
    result.value = result.value.slice(0,-1)
}