import Formulario from './components/Formulario';
import { Container, Grid, Typography } from "@mui/material"
import { NoticiasProvider } from './context/NoticiasProvider'
import ListadoNoticias from './components/ListadoNoticias';

function App() {

  return (
    <NoticiasProvider>
      <Container>
        <header>
          <Typography variant="h3" component="h1" align="center" marginY={5}>
            Buscador de noticias
          </Typography>
        </header>
        <main>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >

            <Grid item xs={12} md={6} lg={4}>
              <Formulario />
            </Grid>
          </Grid>

          <ListadoNoticias />
        </main>
      </Container>
    </NoticiasProvider>
  )
}

export default App
