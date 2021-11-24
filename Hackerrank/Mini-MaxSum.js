// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
    const sum = arr.reduce((acc, num) => {
        return acc + num
    })
    const max = sum - Math.min(...arr);
    const min = sum - Math.max(...arr)
    
    console.log(min + ' ' + max)
}
