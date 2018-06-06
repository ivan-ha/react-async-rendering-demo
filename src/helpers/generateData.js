import * as R from 'ramda'

const getRandomNumber = () => Math.floor(Math.random() * 600 + 1)

const genList = R.curry((fn, num) =>
  R.compose(
    R.addIndex(R.map)(fn),
    Array.from,
    Array
  )(num)
)

export const genListData = genList((v, i) => ({
  index: i,
  x: getRandomNumber(),
  y: getRandomNumber(),
  z: getRandomNumber(),
}))
