import { TextField, Box } from '@mui/material'

const SearchBar = ({ onSearch }) => {

    const handleSearch = (event) => {
        if (event.key === 'Enter') {
            onSearch(event.target.value)
        }
    }

    return (

        <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 4 }}>
            <TextField label="Buscar Personaje" onKeyPress={handleSearch} fullWidth sx={{ maxWidth: 500 }} />
        </Box>
    )
}

export default SearchBar


