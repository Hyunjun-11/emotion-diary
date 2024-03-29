
//useReducer
function 과일바구니에담아드립니다(a, b) {

    let 바구니 = a + b

    return [바구니, 영수증]
}

//useReducer
function 야채바구니(a, b) {

    let 바구니 = a + b

    return [바구니, 영수증]
}

function 영수증(과일1, 과일2) {
    console.log(과일1, 과일2, "전부 만원입니다.")
}


function 사과() {
    console.log("사과입니다")
}


function 바나나() {
    console.log("사과입니다")

}


과일바구니("사과", "배")



function 더해드립니다(a, b) {
    let result = a + b
    return result
}



