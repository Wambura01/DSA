function getTotalX(a, b) {
    // Write your code here
    let count = 0
    
    //loops through the array
    for(let i = 1; i<=100; i++) {
        if(a.every((num) => i % num === 0)) {
            if(b.every((num) => num % i === 0)) {
                count++
            }
        }
    }
    
    return count
}
