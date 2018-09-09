const moment = require.requireActual('moment')

export default (function (timestamp){
    const momentInstance = moment(timestamp)
    momentInstance.unix = () => momentInstance
    return momentInstance
}(0))