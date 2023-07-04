const func1 = (args) => console.log(args) // args => args
const func2 = (...args) => console.log(args) // ...args => [args]

// 1:
func1`first ${"val"}, second ${["a", "b"]}` // [ 'first ', ', second ', '' ]

// 2:
func1(`first ${"val"}, second ${["a", "b"]}`) // first val, second a,b

// 3:
func2`first ${"val"}, second ${["a", "b"]}` // [ [ 'first ', ', second ', '' ], 'val', [ 'a', 'b' ] ]

// 4:
func2(`first ${"val"}, second ${["a", "b"]}`) // [ 'first val, second a,b' ]

// https://codisity.pl/100-bugow-js/ffc67d5d-0437-493c-b712-e1e3571caaef
