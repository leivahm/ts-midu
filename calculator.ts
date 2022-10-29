type Operation = 'multiply' | 'add' | 'divide'
type Result = number | string

const calculator = (a: number, b: number, op: Operation): Result => {
    if (op === 'multiply') return a * b
    if (op === 'add') return a + b

    if (op == 'divide') {
        if (b === 0) return 'can\t divide by 0! Sorry!'
        return a/b
    }

    throw new Error('Operation is not valid')
}

console.log(calculator(1, 3, 'add'))
console.log(calculator(1, 3, 'divide'))
