
var stringifyPrimitive = function(v) {

    switch (typeof v) {
        case 'string': return v

        case 'boolean': return v ? 'true' : 'false'

        case 'number': return isFinite(v) ? v : ''

        default: return ''}

}



module.exports = function(obj, sep, eq, name) {
    sep = sep || '&';
    eq = eq || '=';

    if(obj===null){obj=undefined}

    if(O(obj)){

        return Object.keys(obj).map(function(k){

            var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;

            if (A(obj[k])){

                return obj[k].map(function(v) {

                    return ks + encodeURIComponent(stringifyPrimitive(v))

                }).join(sep)
            }

            else{return ks + encodeURIComponent(stringifyPrimitive(obj[k]))}
        }).join(sep);

    }

    if (!name) return '';

    return encodeURIComponent(stringifyPrimitive(name)) + eq +
        encodeURIComponent(stringifyPrimitive(obj))

}





///////

function hasOwnProperty(obj, prop){return Object.prototype.hasOwnProperty.call(obj, prop)}

module.exports = function(qs, sep, eq, options) {

    sep=sep||'&'
    eq=eq||'='
    var obj={}

    if (!S(qs) || qs.length===0){ return {} }



    qs=qs.split(sep)

    var maxKeys=1000

    if(options && N(options.maxKeys)){maxKeys = options.maxKeys}


    var len = qs.length

    // maxKeys <= 0 means that we should not limit keys count
    if (maxKeys>0 && len>maxKeys){len=maxKeys}

    for(var i=0; i<len; ++i){

        var x=qs[i].replace(/\+/g, '%20'),

            idx=x.indexOf(eq),

            kstr, vstr, k, v


        if(idx>=0){
            kstr=x.substr(0, idx)
            vstr=x.substr(idx+1)}


        else {kstr=x; vstr=''}

        k=decodeURIComponent(kstr)

        v=decodeURIComponent(vstr)

        if(!hasOwnProperty(obj,k)){obj[k] = v}

        else if (A(obj[k])){obj[k].push(v)}

        else {obj[k]=[obj[k], v]}
    }

    return obj

}