import { Card, CardActions, CardContent, Link, Grid, CardMedia, Typography } from "@mui/material"

const Noticia = ({noticia}) => {

    const { urlToImage, source, url, description, title } = noticia

  return (
    <Grid item md={6} lg={4}>
        <Card>
            {urlToImage && (
                <CardMedia
                    component={'img'}
                    alt={`Imagen de ${title}`}
                    image={urlToImage}
                    height={'250'}
                />     
            )}

            <CardContent>
                <Typography variant="body1" color={'error'}>
                    {source.name}
                </Typography>
                <Typography variant="h5" component={'div'}>
                    {title}
                </Typography>
                <Typography variant="body2">
                    {description}
                </Typography>
            </CardContent>

            <CardActions>
                <Link
                    href={url}
                    target='_blank'
                    textAlign={'center'}
                    variant="button"
                    width={'100%'}
                    sx={{
                        textDecoration: 'none'
                    }}
                >Leer Noticia</Link>
            </CardActions>
        </Card>
    </Grid>
  )
}

export default Noticia
