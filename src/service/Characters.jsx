export const Characters = async (pageNumber = 1, searchQuery = '') => {
  // Construye la URL dentro de la función usando los parámetros
  const Api_url = `https://rickandmortyapi.com/api/character?page=${pageNumber}&name=${encodeURIComponent(searchQuery)}`

  try {
    const response = await fetch(Api_url)
    
    if (!response.ok) {
      throw new Error(`${response.status} `);
    }

    const data = await response.json()
    return data

  } catch (error) {
    console.error(error);
    throw error
  }
};
