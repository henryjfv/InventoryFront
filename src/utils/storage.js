export const setLocalStorage = (name = 'item', value) => {
  // eslint-disable-next-line no-undef
  window.localStorage.setItem(name, value)
}

export const getLocalStorage = (name = 'item') => {
  // eslint-disable-next-line no-undef
  return window.localStorage.getItem(name)
}

export const removeLocalStorageItem = (name = 'item') => {
  // eslint-disable-next-line no-undef
  return window.localStorage.removeItem(name)
}
