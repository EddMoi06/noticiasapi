import axios from 'axios';
import { createContext, useEffect, useState } from 'react';


const NoticiasContext = createContext()

const NoticiasProvider = ({children}) => {

    const [ categoria, setCategoria ] = useState('general')
    const [ noticias, setNoticias ] = useState([])

    const handleChangeCategoria = e => {
        setCategoria(e.target.value)
    }

    useEffect(() => {
        const consultarApi = async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&pageSize=100&apiKey=${import.meta.env.VITE_API_KEY}`

            const { data } = await axios(url)
            setNoticias(data.articles)
        }

        consultarApi()
    }, [categoria])

    return (
        <NoticiasContext.Provider
        value={{
            handleChangeCategoria,
            categoria
        }}
        >
            {children}
        </NoticiasContext.Provider>
    )
}

export { NoticiasProvider }

export default NoticiasContext