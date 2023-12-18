import { Typography, Grid } from "@mui/material"
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import useNoticias from "../src/hooks/useNoticias"
import Noticia from "./Noticia"

const ListadoNoticias = () => {

    const { noticias, totalNoticias, handleChangePagina, pagina } = useNoticias()

    const totalPaginas = Math.ceil(totalNoticias / 20)

    console.log(totalPaginas)

  return (
    <>
        <Typography
            align="center"
            marginY={5}
            variant="h3"
            component={'h2'}
        >
            Ultimas Noticias
        </Typography>

        <Grid
            container
            spacing={3}
        >
            {noticias.map((noticia, i) => (
                <Noticia
                    key={i}
                    noticia={noticia}
                />
            ))}
        </Grid>

        <Stack 
            sx={{
                marginY: '15px'
            }}
            spacing={2}
            direction={'row'}
            justifyContent={'center'}
            alignItems={'center'}
        >
            <Pagination 
                page={pagina}
                count={totalPaginas} 
                color="primary" 
                onChange={handleChangePagina}
            />
        </Stack>
    </>
  )
}

export default ListadoNoticias
