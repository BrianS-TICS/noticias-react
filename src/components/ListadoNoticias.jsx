import React from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import useNoticias from '../hooks/useNoticias'
import Noticia from './Noticia'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const ListadoNoticias = () => {

    const { noticias, totalNoticias, handlePaginador, pagina } = useNoticias()

    const totalPaginas = Math.ceil(totalNoticias / 20)

    return (
        <>
            <Typography
                textAlign={'center'}
                marginY={5}
                variant={'h3'}
                component={'h2'}
            >
                Últimas noticias
            </Typography>

            <Grid>
                <Grid
                    container
                    spacing={2}

                >
                    {noticias.map(noticia => (<Noticia key={noticia.url} noticia={noticia} />))}
                </Grid>
            </Grid>

            <Stack 
                spacing={2} 
                marginY={5}
                direction="row"
                justifyContent={'center'}
                alignItems={'center'}
            >
                <Pagination 
                    onChange={handlePaginador} 
                    count={totalPaginas} 
                    color="primary" 
                    page={pagina}
                />

            </Stack>
        </>
    )
}

export default ListadoNoticias
