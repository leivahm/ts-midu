const multiplicator = (a: number, b: number, prinText: string) => {
    console.log(prinText, a * b)
}

// multiplicator(4, 8, 'Multiplied numbers 4 and 8, the result is: ')

console.log(process.argv)

const a: number = Number(process.argv[2])
const b: number = Number(process.argv[3])

multiplicator(a, b, `Multiplied ${a} and ${b} and the result is: `)