import { useState } from 'react'
import { Box, Grid, Typography, CircularProgress, Pagination } from '@mui/material'
import CharacterCard from './CharacterCard'
import SearchBar from './SearchBar'
import useCharacters from '../hooks/useCharacters'

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [pageNumber, setPageNumber] = useState(1)
  const { characters, loading, error, info } = useCharacters(pageNumber, searchQuery)

  const handleSearch = (query) => {
    setSearchQuery(query)
    setPageNumber(1)
  };

  const handlePageChange = (event, newPage) => {
    setPageNumber(newPage)
  };

  return (
    <Box p={2}>
      <Typography variant="h2" align="center" gutterBottom> Rick and Morty Personajes </Typography>
      <SearchBar onSearch={handleSearch} />
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Typography color="error"> El personaje que has buscado no es válido </Typography>
      ) : (
        <>
          <Grid container spacing={3}>
            {characters.map((character) => (
              <Grid item xs={12} sm={6} md={4} key={character.id}>
                <CharacterCard character={character} />
              </Grid>
            ))}
          </Grid>
          <Box mt={2} display="flex" justifyContent="center">
            <Pagination count={info.pages} page={pageNumber} onChange={handlePageChange} color="primary"/>
          </Box>
        </>
      )}
    </Box>
  );
}

export default App
