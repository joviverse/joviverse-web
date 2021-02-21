export const parseCookieToJson = (cookie: string) => {
  return Object.fromEntries(cookie.split('; ').map((x) => x.split('=')))
}

export const clearCookie = () => {
  document.cookie = `token=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`
}

export const saveJsonToLocalStorage = (jsonObj: any) => {
  Object.keys(jsonObj).map((key) => {
    localStorage.setItem(key, jsonObj[key])
  })
}

export const getLocalJwt = () => {
  if (typeof window !== 'undefined') {
    console.log(localStorage['token'])
    return localStorage['token']
  } else return 'undefined'
}

export const setLocalJwt = (token: string) => {
  if (typeof window !== 'undefined') {
    localStorage['token'] = token
  }
}
