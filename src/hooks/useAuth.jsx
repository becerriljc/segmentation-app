// **** dependencies **** //
import { useContext } from 'react'

// **** context **** //
import { AuthContext } from '@context/Auth'

function useAuth() {
    return useContext( AuthContext )
}

export default useAuth
