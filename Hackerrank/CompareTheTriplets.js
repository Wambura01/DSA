// Complete the compareTriplets function below.
function compareTriplets(a, b) {
    let aCount = 0
    let bCount = 0
    const ans = []
    
    a.map((item, i) => {
        if(item > b[i]) {
            aCount++
        } else if(item < b[i]) {
            bCount++
        }
    })
    ans.push(aCount, bCount)
    return ans;
}
