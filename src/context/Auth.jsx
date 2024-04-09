// *** dependencies **** //
import { createContext, useMemo, useState } from 'react'
import secureLocalStorage from 'react-secure-storage'
import PropTypes from 'prop-types'

const initialState = {
    isAuthenticated: true,
    token: '',
    userId: 0,
    grants: {
        read: [
            '/',
            '/app',
            '/app/dashboard',
            '/app/incidents',
            '/app/evaluators',
            '/app/zones',
            '/app/reports',
            '/app/reports/quadranttime',
            '/app/reports/offline',
            '/app/reports/postmortem',
            '/app/reports/effectiveness',
            '/app/journeys',
            '/app/journeys/list',
            '/app/journeys/offices',
            '/app/settings',
            '/app/settings/profiles',
            '/app/settings/clients',
            '/app/settings/bundles',
        ],
        write: [
            '/',
            '/app',
            '/app/dashboard',
            '/app/incidents',
            '/app/evaluators',
            '/app/zones',
            '/app/reports',
            '/app/reports/quadranttime',
            '/app/reports/offline',
            '/app/reports/postmortem',
            '/app/reports/effectiveness',
            '/app/journeys',
            '/app/journeys/list',
            '/app/journeys/offices',
            '/app/settings',
            '/app/settings/profiles',
            '/app/settings/clients',
            '/app/settings/bundles',
        ],
    },
}

// **** context **** //
const AuthContext = createContext( initialState )

function AuthProvider( { children } ) {
    const [ auth, setAuth ] = useState( secureLocalStorage.getItem( 'auth' ) ?? initialState )
    const values = useMemo( () => ( {
        auth,
        setAuth: ( auth ) => {
            secureLocalStorage.setItem( 'auth', auth )

            setAuth( auth )
        }
    } ), [ auth ] )

    return (
        <AuthContext.Provider value={values}>
            { children }
        </AuthContext.Provider>
    )
}

AuthProvider.propTypes = {
    children: PropTypes.any,
}

export {
    AuthProvider,
    AuthContext,
}
