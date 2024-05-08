// 

const getName = (names = []) => Array.from(names).join('.')

export const setSync = (key = [], value = '') => localStorage.setItem(getName(key), JSON.stringify(value))

export const getSync = (key = [], def = null) => localStorage.getItem(getName(key)) || def
