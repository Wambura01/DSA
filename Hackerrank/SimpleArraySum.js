function simpleArraySum(ar) {
    const ans = ar.reduce((acc, num) => {
        return acc + num
    }, 0)
    
    return ans
}
