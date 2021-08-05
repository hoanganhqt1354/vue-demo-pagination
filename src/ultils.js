const paginate = (users) => {
  const itemsPerPage = 10
  const numberPages = Math.ceil(users.length / itemsPerPage)
  const newArray = Array.from({ length: numberPages }, (v, i) => {
    const start = i * itemsPerPage
    return users.slice (start, start + itemsPerPage)
  })
  return newArray  
}
export default paginate