export const save = () => new Promise(resolve => {
  setTimeout(() => {
    const now = new Date()
    const hours = now.getHours().toString().padStart(2, '0')
    const minutes = now.getMinutes().toString().padStart(2, '0')
    const time = `${hours}:${minutes}`
    resolve({
      time
    })
  }, 1000)
})

export const error = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('error'))
  }, 1000)
})
