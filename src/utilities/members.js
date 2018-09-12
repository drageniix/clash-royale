export const capitalizeRole = member => member.role.charAt(0).toUpperCase() + member.role.slice(1)

export const checkDonations = (member) => {
    if (member.donations === 0 && member.donationsReceived === 0) {
        return "none"
    } else if (member.donationsReceived == 0) {
        return `${member.donations} - 0`
    } else if (member.donations == 0) {
        return `0 - ${member.donationsReceived}`
    } else {
        return `${member.donations} (${((member.donations / member.donationsReceived) * 100).toFixed(1)}%)`
    }
}

export const getMemberColor = (member) => {
    if (member.role === 'leader') {
        return "leader"
    } else if (member.role === 'coleader') {
        return "coleader"
    } else if (member.eligibleForPromotion) {
        return "promotion"
    } else if (member.onProbation) {
        return "probation"
    } else if (member.dangerOfDemotion) {
        return "demotion"
    } else if (member.role === 'elder') {
        return "elder"
    } else {
        return "member" //good standing member or new 
    }
}