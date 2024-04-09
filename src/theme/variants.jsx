// **** dependencies **** //
import merge from 'deepmerge'

import { grey } from '@mui/material/colors'

// **** constants **** //
import { THEMENAMES } from '@constants/Styles'

// **** light colors **** //
const lightPrimaryMainColor = '#43a047'
const lightSecondaryMainColor = '#FF9800'
const lightBackgroundColor = '#EFF6EA'
const lightPaperColor = '#FFFBFE'

const darkPrimaryMainColor = '#8dcdff'
const darkSecondaryMainColor = '#9ccaff'
const darkBackgroundColor = '#ffb5a0'
const darkPaperColor = '#43483e'

const defaultVariant = {
    name: THEMENAMES.DEFAULT,
    palette: {
        mode: 'light',
        primary: {
            main: lightPrimaryMainColor,
            contrastText: lightBackgroundColor,
        },
        secondary: {
            main: lightSecondaryMainColor,
            contrastText: lightBackgroundColor,
        },
        background: {
            default: lightBackgroundColor,
            paper: lightPaperColor,
        },
    },
    header: {
        color: grey[ 500 ],
        background: lightBackgroundColor,
        search: {
            color: grey[ 800 ],
        },
        indicator: {
            background: lightPrimaryMainColor,
        },
    },
    footer: {
        color: grey[ 500 ],
        background: lightBackgroundColor,
    },
    sidebar: {
        color: grey[ 200 ],
        background: '#233044',
        header: {
            color: grey[ 200 ],
            background: '#233044',
            brand: {
                color: lightPrimaryMainColor,
            },
        },
        footer: {
            color: grey[ 200 ],
            background: '#1E2A38',
            online: {
                background: lightPrimaryMainColor,
            },
        },
        badge: {
            color: lightBackgroundColor,
            background: lightPrimaryMainColor,
        },
    },
}

const darkVariant = merge( defaultVariant, {
    name: THEMENAMES.DARK,
    palette: {
        mode: 'dark',
        primary: {
            main: darkPrimaryMainColor,
            contrastText: lightBackgroundColor,
        },
        secondary: {
            main: darkSecondaryMainColor,
            contrastText: lightBackgroundColor,
        },
        background: {
            default: darkBackgroundColor,
            paper: darkPaperColor,
        },
        text: {
            primary: 'rgba(255, 255, 255, 0.95)',
            secondary: 'rgba(255, 255, 255, 0.5)',
        },
    },
    header: {
        color: grey[ 300 ],
        background: '#1B2635',
        search: {
            color: grey[ 200 ],
        },
    },
    footer: {
        color: grey[ 300 ],
        background: '#233044',
    },
} )

const variants = [
    defaultVariant,
    darkVariant,
]

export default variants
