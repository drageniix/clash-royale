export const capitalizeFirstLetter = (string) => typeof string === 'string' ? string.charAt(0).toUpperCase() + string.slice(1) : ""

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

export const  firstBy = (function () {
    function identity(v) { return v; }

    function ignoreCase(v) { return typeof (v) === "string" ? v.toLowerCase() : v; }

    function makeCompareFunction(f, opt) {
        opt = typeof (opt) === "number" ? { direction: opt } : opt || {};
        if (typeof (f) != "function") {
            var prop = f;
            // make unary function
            f = function (v1) { return !!v1[prop] ? v1[prop] : ""; }
        }
        if (f.length === 1) {
            // f is a unary function mapping a single item to its sort score
            var uf = f;
            var preprocess = opt.ignoreCase ? ignoreCase : identity;
            var cmp = opt.cmp || function (v1, v2) { return v1 < v2 ? -1 : v1 > v2 ? 1 : 0; }
            f = function (v1, v2) { return cmp(preprocess(uf(v1)), preprocess(uf(v2))); }
        }
        if (opt.direction === -1) return function (v1, v2) { return -f(v1, v2) };
        return f;
    }

    /* adds a secondary compare function to the target function (`this` context)
       which is applied in case the first one returns 0 (equal)
       returns a new compare function, which has a `thenBy` method as well */
    function tb(func, opt) {
        /* should get value false for the first call. This can be done by calling the 
        exported function, or the firstBy property on it (for es6 module compatibility)
        */
        var x = (typeof (this) == "function" && !this.firstBy) ? this : false;
        var y = makeCompareFunction(func, opt);
        var f = x ? function (a, b) {
            return x(a, b) || y(a, b);
        }
            : y;
        f.thenBy = tb;
        return f;
    }
    tb.firstBy = tb;
    return tb;
})();