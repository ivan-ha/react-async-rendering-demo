export const getValueFromQS = param => {
  const urlParams = new URLSearchParams(window.location.search)
  return urlParams.get(param)
}
