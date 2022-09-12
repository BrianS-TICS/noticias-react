import axios from 'axios'
import { createContext, useState, useEffect } from 'react'

const NoticiasContext = createContext();

const NoticiasProvider = ({ children }) => {

    const [noticias, setNoticias] = useState([])
    const [categoria, setCategoria] = useState('general')
    const [pagina, setPagina] = useState(1)
    const [totalNoticias, setTotalNoticias] = useState(0)

    useEffect(() => {
        const consulatarAPI = async () => {   
            try{
                const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&pageSize=20&apiKey=${import.meta.env.VITE_API_KEY}`
                const { data } = await axios(url)
                const {articles} = data;
                setNoticias(articles)
                setTotalNoticias(data.totalResults)
                setPagina(1)

            }catch(error){
                console.log(error);
            }

        }
        consulatarAPI()
    }, [categoria])

    useEffect(() => {
        const consulatarAPI = async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=mx&page=${pagina}&category=${categoria}&pageSize=20&apiKey=${import.meta.env.VITE_API_KEY}`

            try{
                const { data } = await axios(url)
                const {articles} = data;
                setNoticias(articles)
                setTotalNoticias(data.totalResults)

            }catch(error){
                console.log(error);
            }

        }
        consulatarAPI()
    }, [pagina])

    const handleChangeCategoria = (e) => {
        setCategoria(e.target.value)
    }

    const handlePaginador= (e,valor) => {
        setPagina(valor)
    }

    return (
        <NoticiasContext.Provider
            value={{
                categoria,
                handleChangeCategoria,
                noticias,
                totalNoticias,
                handlePaginador,
                pagina
            }}
        >
            {children}
        </NoticiasContext.Provider>
    )
}

export { NoticiasProvider }
export default NoticiasContext
