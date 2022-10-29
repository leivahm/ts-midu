const calculator = (a: number, b: number, op: 'multiply' | 'add' | 'divide') => {
    if (op == 'multiply') return a * b
    if (op === 'add') return a + b
    if (op == 'divide') {
        if (b===0) return 'can\t divide by 0! Sorry!'
        return a/b
    }
}

console.log(calculator(1, 3, 'add'))
console.log(calculator(1, 3, 'divide'))
