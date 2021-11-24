// Complete the staircase function below.
function staircase(n) {
    for(let i = 1; i<=n; i++) {
        console.log(' '.repeat(n-i) + '#'.repeat(i))
    }
}
