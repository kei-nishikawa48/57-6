// const add2 = x => x + 2 // 引数xに2を足す関数
// const mul2 = x => x * 2 // 引数xに2を掛ける関数

// const n = 3
// console.log(add2(n)) //=> 5
// console.log(mul2(n)) //=> 6
// console.log(mul2(5)) //=> 10（3に2を足してから、その結果に2を掛ける）

// const add2 = x => x + 2

// console.log(add2(2))//4

// function twice(f, x) {//fには関数xには数値
//   return f(f(x))
// }

// const result = twice(add2, 10)
// console.log(result) //=> 14


// const list = [1, 2, 3]
// const square = x => x * x // 引数xを二乗する

// console.log(list.map(
//   x => x * 2
//   )) //=> [2, 4, 6]

// const button = document.querySelector('#submit')

// button.addEventListener('click', event => { console.log(event,"くりっくしたー") })

const items = [
  // 日  月  火  水  木  金  土
  [14, 93, 89, 51, 85, 59, 33],
  [69, 27, 40, 76, 25, 21, 55],
  [55, 60, 3, 28, 49, 5, 91],
  [19, 56, 92, 66, 53, 80, 13],
]

// const sums = items.map((item) => {
//   let sum = 0
//   item.forEach((el)=>{
//     sum = sum + el
//   }) // [14, 93, 89, 51, 85, 59, 33] 424
//   return sum
// })
// console.log(sums) //=> [424, 313, 291, 379]


// const sums = items.map((item) => {
//   const sum = item.reduce((a,b)=> a+b ,0)
//   return sum
// })
// console.log(sums) //=> [424, 313, 291, 379]