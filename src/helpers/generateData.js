import * as R from 'ramda'

const getRandomNumber = () => Math.floor(Math.random() * 500 + 1)

const genList = R.curry((fn, num) =>
  R.compose(
    R.addIndex(R.map)(fn),
    Array.from,
    Array
  )(num)
)

export const genListData = genList((v, i) => ({
  x: getRandomNumber(),
  y: getRandomNumber(),
}))
