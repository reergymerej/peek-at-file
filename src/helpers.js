export const isIndex = (url) => {
  return (/^\/(index.htm(l)?)?$/).test(url)
}

export const isFavIcon = (url) => {
  return url === '/favicon.ico'
}
