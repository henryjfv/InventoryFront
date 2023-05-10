import { useState } from 'react'

export const getLocalStorage = (name = 'item') => {
  // eslint-disable-next-line no-undef
  return window.localStorage.getItem(name)
}

export const removeLocalStorageItem = (name = 'item') => {
  // eslint-disable-next-line no-undef
  return window.localStorage.removeItem(name)
}

export const useStorage = (name = 'item', value) => {
  const [setStorageValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(name)
      return item ? JSON.parse(item) : value
    } catch (error) {
      return value
    }
  })
  try {
    setStorageValue(value)
    window.localStorage.setItem(name, JSON.stringify(value))
  } catch (error) {
    console.log('🚀 ~ file: useStorage.js:25 ~ useStorage ~ error:', error)
  }
}
