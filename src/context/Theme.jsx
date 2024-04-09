// **** dependencies **** //
import { createContext, useMemo, useState } from 'react'
import PropTypes from 'prop-types'

// **** utils **** //
import { isSunshine } from '@utils/Time'

const themename = isSunshine() ? 'light' : 'dark'

const initialState = {
    theme: themename,
    setTheme: ( themeName ) => { console.info( themeName ) }
}

// **** context **** //
const ThemeContext = createContext( initialState )

function ThemeProvider( { children } ) {
    const [ theme, setTheme ] = useState( themename )
    const values = useMemo( () => ( { theme, setTheme } ), [ theme ] )

    return (
        <ThemeContext.Provider value={values}>
            { children }
        </ThemeContext.Provider>
    )
}

ThemeProvider.propTypes = {
    children: PropTypes.oneOfType( [
        PropTypes.arrayOf( PropTypes.node ),
        PropTypes.node
    ] )
}

export {
    ThemeProvider,
    ThemeContext,
}
