type Operation = 'multiply' | 'add' | 'divide'
type Result = number | string

const calculator = (a: number, b: number, op: Operation): Result => {
    if (op === 'multiply') return a * b
    if (op === 'add') return a + b

    if (op == 'divide') {
        if (b === 0) return 'cannot divide by 0! Sorry!'
        return a/b
    }

    throw new Error('Operation is not valid')
}

console.log(process.argv)

/*try{
    console.log(calculator(1, 5, 'divide'))
    console.log(calculator(1, 0, 'divide'))
} catch (e) {
    console.log('Something went wrong ', e)
}*/

/*console.log(calculator(1, 3, 'add'))
console.log(calculator(1, 3, 'divide'))*/
