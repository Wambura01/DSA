function diagonalDifference(arr) {
    // Write your code here
    const n = arr[0].length
    let sum1 = 0
    let sum2 = 0
    
    for(let i = 0, j = n - 1;i<n; i++, j--){
        sum1 += arr[i][i]
        sum2 += arr[i][j]
    }
    let diff = sum1-sum2
    let ans = Math.abs(diff)
    return ans
}
