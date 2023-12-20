// 

export const set = (key, value = '') => new Promise((s) => s(localStorage.setItem((key), JSON.stringify(value))))

export const get = (key, def = null) => Promise.resolve(null) // 
