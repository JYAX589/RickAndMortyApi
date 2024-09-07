import { useState, useEffect } from 'react'
import { Characters } from '../service/Characters'

const useCharacters = (pageNumber, searchQuery) => {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [info, setInfo] = useState({})

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        setLoading(true)

        const data = await Characters(pageNumber, searchQuery);
        setCharacters(data.results)
        setInfo(data.info)
        setLoading(false)

      } catch (error) {
        setError(error)
        setLoading(false)

      }
    }

    fetchCharacters()

  }, [pageNumber, searchQuery])

  return { characters, loading, error, info }
}

export default useCharacters
