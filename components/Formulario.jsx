import { FormControl, InputLabel, Select, Box, Button, MenuItem } from '@mui/material'

const CATEGORIAS = [
    { value: 'general', label: 'General'},
    { value: 'business', label: 'Negocios'},
    { value: 'entertainment', label: 'Entretenimiento'},
    { value: 'health', label: 'Salud'},
    { value: 'science', label: 'Ciencia'},
    { value: 'sports', label: 'Deportes'},
    { value: 'technology', label: 'Tecnología'},
]

const Formulario = () => {
  return (
    <form>
        <FormControl fullWidth>
            <InputLabel>Categorias</InputLabel>

            <Select>
                {CATEGORIAS.map( categoria => (
                    <MenuItem key={categoria.value} value={categoria.value}>
                        {categoria.label}
                    </MenuItem>
                ))}

            </Select>

            <Box sx={{
                marginTop: 2
            }}>
                <Button
                    fullWidth
                    color='primary'
                    variant='contained'
                >
                    Buscar Noticia
                </Button>
            </Box>
        </FormControl>
    </form>
  )
}

export default Formulario