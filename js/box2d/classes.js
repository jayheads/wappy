b = b2d.Body.prototype
f = b2d.Fixture.prototype
/*
 b.D=b.data=function(d){var b=this
 if(U(d)){return b.GetUserData()}
 b.SetUserData(d); return b}
 b.classCount=function(){var b=this
 if(!A(b.classes)){return 0}
 return b.classes.length
 }


b.toggleClass=function(k){var b=this
        if(U(k)||k==''){return false}
        if(b.hasClass(k)){b.removeClass(k)}
        else {b.addClass(k)}
        return b}


b.removeClass=function(k){var b=this, ix; b.classes=b.classes||[]
    if(S(k) && b.hasClass(k)){
        ix = b.classes.indexOf(k)
        b.classes[ix] = null
        b.classes = _.compact(b.classes)}
        return b}
 b.not = b.notAny = function (k) {
 //this is an AND: ALL MUST BE FALSE
 var b=this, not = true
 _.e(k, function(k){if(b.is(k)){not=false}})
 return not
 }


 b.contains=function(k){var b=this
 var fs=b.fixts(), contains=false
 _.e(fs,function(f){
 if(f.hasClass(k)){contains=true}})
 return contains
 }


 b.hasAllClasses=function(k){
 if(U(k)||k==''){return false}
 var b=this, anyYes = null, anyNo = null
 _.e(arguments, function(k){
 if(b.hasClass(k)){anyYes=true}
 else if(!b.hasClass(k)){anyNo=true}})
 return (anyYes && !anyNo)
 }
*/


b.K=b.addClass=b.getClass=b.getClasses=function(k){var b=this, g=G(arguments); b.classes=b.classes||[]

    if(U(k)){return b.classes.join(' ')}

    _.e(g, function(k){   if(S(k)){
        _.e(k.trim().split(' '), function(k){
            k=k.trim()
            if(k && !b.hasClass(k)){b.classes.push(k)} })
    }})

    return b


}

b.is=  b.has=b.hasClass=b.ofClass=b.hasClasses=function me(k){
    var b=this, g=G(arguments), hasClass; b.classes=b.classes||[]
    if(A(k)){return me.apply(b,k)}
    if(!k){return true}
    if(b2d.isBody(k)){return b==k}
    _.e(g, function(k){if(!k||_.contains(b.classes, k.trim())){hasClass=true}})
    return hasClass}



f.classCount = function () {
        if (!A(this.classes)) {
            return 0
        }
        return this.classes.length

    }
    f.K = f.addClass=function(clas) {


        this.classes = this.classes || []
        var that = this, func


        if (U(clas)) {
            return this.getClasses()
        }


        if (F(clas)) {
            func = _.bind(clas, that)
            this.addClass(func(that.getClasses()))
            return this
        }

        _.each(arguments, function (clas) {
            if (S(clas)) {
                clas = clas.trim()

                _.each(clas.split(' '),
                    function (clas) {
                        clas = clas.trim()

                        if (clas != '' && !that.hasClass(clas)) {

                            that.classes.push(clas)
                        }
                    })


            }
        })
        return this
    }
    f.getClasses=f.getClass = function () {
        var g = G(arguments), classes

        this.classes = this.classes || []

        classes = this.classes.join(' ')
        if (g.p) {
            classes += ' : ' + this.body().getClasses()
        }


        return classes
    }
    f.toggleClass=function(clas){
        if (U(clas) || clas == '') {
            return false
        }

        if (this.hasClass(clas)) {
            this.removeClass(clas)
        } else {
            this.addClass(clas)
        }

        return this
    }
    f.removeClass=function(clas){
        var ix
        this.classes = this.classes || []
        if (S(clas)) {

            if (this.hasClass(clas)) {

                ix = this.classes.indexOf(clas)

                this.classes[ix] = null

                this.classes = _.compact(this.classes)


            }


        }
        return this
    }

    f.hasClass = f.hasClasses = function self(clas) {
        var fixt = this,
            hasClass,
            g = G(arguments)

        fixt.classes = fixt.classes || []

        if (!clas) {
            return true
        }

        if (A(clas)) {
            g = clas
        }

        _.each(g, function (clas) {

            if (!clas || _.contains(fixt.classes, clas.trim())) {
                hasClass = true
            }
        })

        return hasClass
    }

    f.hasAllClasses = function(clas){
        if (U(clas) || clas == '') {
            return false
        }

        var body = this, anyYes = null, anyNo = null

        _.each(arguments, function (clas) {


            if (body.hasClass(clas)) {
                anyYes = true
            }

            else if (!body.hasClass(clas)) {
                anyNo = true
            }


        })

        return (anyYes && !anyNo)


    }
    f.is = function(a){
        return S(a) ? this.hasClass(a) : this == a
    }
    f.ofClass = function(k){var f=this,b=f.B(),g=G(arguments)
        return f.hasClass(g)||b.hasClass(g)}



    f.of=function(a){
        var f=this,b=f.B()

        return S(a) ? f.ofClass(a) : (f == a || b == a)
    }


    f.near = function (what) {
        var body = this.GetBody()
        //return (this.K()==what) || (body.K()==what)
        // if has sibling fixture that matches, return IT!
        return false
    }

    f.among = function () {
    }

    f.D = f.data = function (data) {
        if (U(data)) {
            return this.GetUserData()
        }
        this.SetUserData(data);
        return this
    }



