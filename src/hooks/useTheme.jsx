// **** dependencies **** //
import { useContext } from 'react'

// **** context **** //
import { ThemeContext } from '@context/Theme'

const useTheme = () => useContext( ThemeContext )

export default useTheme
