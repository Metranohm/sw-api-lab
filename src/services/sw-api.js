const baseUrl = 'https://swapi.dev/api/'

export async function getStarshipList() {
  const res = await fetch(`${baseUrl}/starships/`)
  return res.json()
}

export async function getStarshipDetails(apiUrl) {
  const res = await fetch(`${apiUrl}`)
  return res.json()
}