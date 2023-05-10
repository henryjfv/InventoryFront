export const isValidEmail = (email) => {
  return /\S+@\S+\.\S+/.test(email)
}

export const isNotEmpty = (text) => {
  const validate = text?.length > 0
  return validate
}
