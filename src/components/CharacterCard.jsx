import { Card, CardContent, Typography, CardMedia } from '@mui/material'

const CharacterCard = ({ character }) => {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia component="img" image={character.image} alt={character.name}sx={{ height: 300 }}/>
      <CardContent>
        <Typography variant="h6">{character.name}</Typography>
        <Typography color="textSecondary"> Especie: {character.species}</Typography>
      </CardContent>
    </Card>
  );
};

export default CharacterCard
