export const featuredProducts = data => {
  return data.filter(item => {
    return item.featured === true
  })
}

/**
 * Truncates a string after n chars
 * @param {string} str
 * @param {int} n
 */
export const truncateString = (str, n) => {
  // check if str is a string
  if (typeof str !== "string") {
    return null
  }
  console.log("truncate function")
  return str.length > n ? `${str.substr(0, n - 1)}\u2026` : str
}

export const compareValues = (key, order = "asc") => {
  return function innerSort(a, b) {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      // property does not exist on either object
      return 0
    }

    let sortOrder = 0
    if (a[key] < b[key]) {
      sortOrder = -1
    } else if (a[key] > b[key]) {
      sortOrder = 1
    }

    console.log("sort function")
    // by * by -1 the sort order is changed in the opposite way
    return order === "desc" ? sortOrder * -1 : sortOrder
  }
}
