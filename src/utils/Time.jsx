// **** dependencies **** //
import moment from 'moment'
import 'moment/dist/locale/es'

moment.locale( 'es' )

export const genericFormat = 'YYYY-MM-DD HH:mm:ss'
export const onlyDateFormat = 'YYYY-MM-DD'
export const largeFormat = 'dddd, DD [de] MMMM [del] YYYY [a las] HH:mm A'

const nightTime = Number( import.meta.env.VITE_APP_THEME_NIGHT_TIME )
const morningTime = Number( import.meta.env.VITE_APP_THEME_MORNING_TIME )

/**
 * @description Verifica si es de día
 * @public
 * @function
 * @returns {boolean}
 */
export function isSunshine(){
    const dateNow = moment().hour()

    return dateNow >= morningTime && dateNow < nightTime
}
