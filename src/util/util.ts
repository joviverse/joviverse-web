export const saveJwtToLocalStorage = (token: string) => {
  localStorage.setItem('token', token)
}
