let opp = Math.round((Math.random()*20)/10)
function post() {
    document.getElementById("result").innerText = result
}
function guess(number) {
    let opp = Math.round((Math.random()*20)/10)
    if (number == opp) {
        result="It's a draw!"
        post()
    } else if (number == 0) {
        if (opp == 1) {
            result="You lost!"
            post()
        } else {
            result = "You won!"
            post()
        }
    } else if (number == 1) {
        if (opp == 2) {
            result="You lost!"
            post()
        } else {
            result = "You won!"
            post()
        }
    } else if (number == 2) {
        if (opp == 0) {
            result="You lost!"
            post()
        } else {
            result = "You won!"
            post()
        }
    }
    console.log(result)
}