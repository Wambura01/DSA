function plusMinus(arr) {
    let pos = 0
    let neg = 0
    let zero = 0
    
    for(let item of arr) {
        if(item > 0) {
            pos++
        } else if (item < 0) {
            neg++
        } else {
            zero++
        }
    }
    console.log((pos / arr.length).toFixed(6))
    console.log((neg / arr.length).toFixed(6))
    console.log((zero / arr.length).toFixed(6))
}
