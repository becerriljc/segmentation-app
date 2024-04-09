// **** mui dependencies **** //
import '@mui/lab/themeAugmentation'
import { createTheme as createMuiTheme } from '@mui/material/styles'
import  secureLocalStorage  from  'react-secure-storage'

// **** constants **** //
import { SPACING } from '@constants/Styles'

// **** theme **** //
import breakpoints from './breakpoints'
import components from './components'
import variants from './variants'
import shadows from './shadows'
import typography from './typography'

function createTheme( themename ) {
    const themeConfig = secureLocalStorage.getItem( themename ) ?? variants[ 0 ]

    return createMuiTheme(
        {
            breakpoints,
            components,
            palette: themeConfig.palette,
            shadows,
            spacing: SPACING,
            typography,
        },
        {
            name: themeConfig.name,
            header: themeConfig.header,
            footer: themeConfig.footer,
            sidebar: themeConfig.sidebar,
        }
    )
}

export default createTheme
