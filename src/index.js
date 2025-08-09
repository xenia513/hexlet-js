import _ from 'lodash'
export default (array) => {
  const lastItem = _.last(array)
  return lastItem
}
