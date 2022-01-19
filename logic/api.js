//url and token
const baseUrl = 'https://coding-challenge-api.aerolab.co'
const token = process.env.TOKEN


// user
export const getUserInfo = async () => {
  try {

    const response = await fetch(`${baseUrl}/user/me`,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      }
    )
    const data = await response.json()
    // console.log(data)
    return data

  } catch (error) {

    console.log("Error getting user info", error)

  }
}


// points
export const addPoints = async (amount) => {
  try {

    const response = await fetch(`${baseUrl}/user/points`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ amount })
      }
    )
    const data = await response.json()
    // console.log(data)
    return data

  } catch (error) {

    console.log("Error adding points", error)

  }
}


// history
export const getUserHistory = async () => {
  try {

    const response = await fetch(`${baseUrl}/user/history`,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      }
    )
    const data = await response.json()
    // console.log(data)
    return data

  } catch (error) {

    console.log("Error getting user history", error)

  }
}


// redeem
export const redeem = async (productId) => {
  try {

    const response = await fetch(`${baseUrl}/redeem`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ productId })
      }
    )
    const data = await response.json()
    // console.log(data)
    return data

  } catch (error) {

    console.log("Error during redeem", error)

  }
}


// points
export const getProducts = async () => {
  try {

    const response = await fetch(`${baseUrl}/products`,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      }
    )
    const data = await response.json()
    // console.log(data)
    return data

  } catch (error) {

    console.log("Error getting products", error)

  }
}