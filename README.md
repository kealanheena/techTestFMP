# Tech Test FMP

## Task

Write an application that takes numeric input (N) from a user and outputs a multiplication table of (N) prime numbers.

## Instructions

- Build in Javascript
- You should have a test for a performant prime algorithm that can generate a list of primes.
- Have high test coverage. (recommended)
- For the input and output you can use the console, a web page, or something else.
- Write an algorithm to solve the prime number generation. (Do not use a library method)
- You should input a whole number N, where is N is at least 1.
- The application should output an N+1 x N+1 grid of numbers.

## Example for when 3 is given as input

```
| | 2 | 3 | 5 |
| 2 | 4 | 6 | 10 |
| 3 | 6 | 9 | 15 |
| 5 | 10 | 15 | 25 |
```

## How to Use

to install the npm packages run:

```
npm install
```

To start the programme run in the console: 

```
node example.js
```

this will output a multiplication table of the first 3 prime numbers.

if you want to use different inputs change the exampleInput variable to a positive whole number thats greater than 0.

## Running the tests

to run tests:

```
$ npm test
```

## What I'm pleased with



## What I'd do with more time

I'd work on the edge cases like what if the user put in something that isn't a number or if they put in the number as a string.
I would also build a small web page to display the output in a more presentable way instead of just in the console.
I might also try improve the performance of the multiply function (assuming thats what the client wanted for now I wanted it to be more readable) as in big O notation it is currently O of n squared I would try increasing the index of the secound for loop each time it loops becasue once it does a verticle line in table that same line can be used vertically.

```
e.g.

| | 2 | 3 | 5 |
| 2 | 4 | 6 | 10 |
| 3 | 6 | 9 | 15 |
| 5 | 10 | 15 | 25 |

the 2 column is the same as the 2 row so I'm can reuse them numbers. This wouldn't make a difference with the big O notation but it would be an improvement as the numbers get bigger.
```