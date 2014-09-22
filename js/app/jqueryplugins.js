console.log('jquery plugins')



$.fn.col = function(col){
    return this.css('color', oO('c', col))}

$.fn.C = function(col, c2){
    if(c2){return this.C(col).col(c2)}
    return this.css('backgroundColor', oO('c', col))}


$.fn.A=function(stuff) {

   if( U(stuff)){ $('body').append(this); return this}

    this.append.apply(this, arguments)
    return this

}

$.fn.W=function(width){return width?this.width(width):this.width()}

$.fn.H=function(height){return height?this.height(height):this.height()}
$.fn.Z=function(w,h){return this.W(w).H(h||w)}
$.fn.Y=$.fn.top=function(top){return top?this.css('top', top):this.css('top')}
$.fn.X=$.fn.left=function(left){return left?this.css('left', left):this.css('left')}
 $.fn.right=function(right){return right?this.css('right', right):this.css('right')}
 $.fn.bottom=function(bottom){return bottom?this.css('bottom', bottom):this.css('bottom')}

$.fn.P = function(pos,left,top){
    if( U(pos) ){ return this.css('position') }
    this.css('position', oO('p',pos))
    if(left){this.left(left)}
    if(top){this.top(top)}
    return this}


$.fn.id=function(id){ if(U(id)){ return this.attr('id')}; this.attr('id', id);return this     }
$.fn.name=function(name){ if(U(name)){ return this.attr('name')}; this.attr('name', name);return this     }

$.fn.drag = function(){

    this.A()
this.each(function(){
    $(this).css('top', $(this).position().top )
    $(this).css('left', $(this).position().left)})

    this.P('a')

    this.on('mousedown', function(e){

        var el = $(this)

        var offset = el.offset(),
            deltaX = e.pageX-offset.left,
            deltaY = e.pageY-offset.top

        $('html').on('mousemove', function(e){
            var x=e.pageX - deltaX,
                y=e.pageY - deltaY

            el.left(x)
                el.top(y)

        }).on( 'mouseup' , function(){  $(this).off() })

    })

    //touchDrg(element)
    return this

}


$.fn.mar=function(margin){

    if(U(margin)){ return this.css('margin') }

    this.css( 'margin' , margin ); return this }

$.fn.J= $.fn.animate
$.fn.K= function(){  $.fn.addClass.apply(this, arguments); return this  }



$.fn.fontSize=function(z){ this.css('font-size', z)

    return this}

$.fn.textAlign=function(z){

    this.css('text-align', z)

    return this}

$.fn.opacity=function(z){

    this.css('opacity', z)

    return this}

$.fn.alpha=function(z){

    this.css('opacity', z)

    return this}

$.fn.borderStyle= function(style){

  this.css('border-style', style)

return this}
$.fn.borderColor=function(c){

    this.css('border-color', oO('c', c))

    return this}

$.fn.borderWidth=function(w){

    this.css('border-width',w)

    return this}


$.fn.hold=function(a){

    a.P('s')
    this.A(a)


}




$.fn.pad=function(padding){
    if(U(padding)){return this.css('padding')}
    this.css('padding',padding);return this}


$.fn.bor=function(border){
    if(U(border)){return this.css('border')}
    this.css('border',border);return this}

$.fn.zIndex=function(z){
    if(U(z)){return this.css('z-index')}
    this.css('z-index',z);return this}

$.fn.el = function(e){
    if(U(e)){
        console.log( $('<div>').append(  this.clone()  ).html() )
        return this}}


$.fn.free=function(){

    $('body').A( this )

    this.P('a')
}


$.div = function(col, width, height){



    if( U ( col ) ){

        return $( '<div>' ).C( 'n' )

    }

    if( S(col)) {

        var d = $( '<div>' )

        d.css( 'backgroundColor', oO( 'c' , col ) )

        if( N ( width ) ){ d.W( width ) }

        if( N ( height ) ){ d.H( height ) }

        return d }

    if(N(col)){ return $.div( 'o', col, width )}

 }

$.divA = function(col, width, height){



    if( U ( col ) ){

        return $( '<div>' ).C( 'n' )

    }

    if( S(col)) {

        var d = $( '<div>' )

        d.css( 'backgroundColor', oO( 'c' , col ) )

        if( N ( width ) ){ d.W( width ) }

        if( N ( height ) ){ d.H( height ) }

        return d }

    if(N(col)){ return $.div( 'o', col, width )}

}

$.button = function(buttonText, func){
    if(F(buttonText)){return $.button('submit', buttonText)}
    var b=$('<button>')
    b.text(buttonText)
    b.click(func)
    return b}

$.buttonL = function(buttonText, func){
    if(F(buttonText)){return $.button('submit', buttonText)}
    var b=$('<button>')
    b.text(buttonText)
    b.click(func)
    return b.K('btn-lg')}

$.span = function(text){

    var span = $( '<span>' )

    if( text ){  span.text(text)  }

    return span }


///


$hr = hr=function(c,h,w){var e=qq('hr');
    if(N(c)){return hr('z',c,h)}
    e.h(h||2);e.c(c||'z');
    if(w){e.w(w)};return e}

//<li> <a href="#" id="Contact">Contact</a> </li>


$.lIA=function(a){

    var anchor = $('<a>').id(a).attr('href', '#').html(a)

    var listItem  = $('<li>')

        return listItem.A(anchor)


}




$.h1=function(){
    var h=$( '<h1>' )
    h.A.apply(h,G(arguments))
    return h}

$.h2=function(){
    var h=$( '<h2>' )
    h.A.apply(h,G(arguments))
    return h}
$.h3=function(){
    var h=$( '<h3>' )
    h.A.apply(h,G(arguments))
    return h}

$.h4=function(){
    var h=$( '<h4>' )
    h.A.apply(h,G(arguments))
    return h}

$.h5=function(){
    var h=$( '<h5>' )
    h.A.apply(h,G(arguments))
    return h}

$.h6=function(){
    var h=$( '<h6>' )
    h.A.apply(h,G(arguments))
    return h}

$.input=function(){
   return $('<input type="text">')


}


$.br=function(a){
    var s=sp()

    _.times( a || 1, function(){ s( $('<br>') )  })

    return s
}



$.pg=function(a){
    var g=G(arguments),

        p= $('<pg>')

    _.each( g , function( v ){

        if( A(v) ){ p.k( v[0] ) }

    else {

        if( S(v) ){

            v = sp(v)
        }

        p(v)
    }

    })

    return p
}


$.span2=function(){

    var g=G(arguments),     theSpan=qq('s'),     str=''

    _.each(g,

        function(val){

            if(A(val)){theSpan.k(val[0])}

            else if(S(val)){str+= val }

            else {theSpan.a( val )}})

    if(str){ theSpan.T(str) }

    return theSpan}
$li=function(){var g=G(arguments),
    l=qq('li')

    //klass or add
    _e(g,function(v){if(A(v)){l.k(v[0])}else{l(v)}})
    if(g.p){l.k('A')}//active
    if(g.n){l.k('dd')}//dropdown
    return l}



//finish later..
$.a= function(a,f){

    var g=G(arguments),

        a=g[0],

        f=g[1],

        l = $('<a>').id(a).A(a)

    if(F(f)){
        l.click(f)} else {
        l.hr(f||'#')}

    if(g.n){l.dd()}

    if(g.p){l=li(l)}

    if(g.m){l=li(l).k('A')}

    return l}





$ul = ul=function(){
    var tLi=function(a){
        var iLi=function(a){return _h('HTMLLIElement', E(a))}
        return iLi(a)?a:li(a)}

    var g=G(arguments),
        e=qq('ul')
    _e(g,function(v){if(A(v)){e.k(v[0])}
    else{e(tLi(v))}})
    if(g.n){e.k('ddm')}//dropdown menu
    if(g.p){e.k('n nbn')}//navbar nav
    return e}


$.li =function(something){var g=G(arguments),
    l=$('<li>')

   if(U(something)) {return l}
    //klass or add

    _.each(g,
        function(v){

            if( A(v) ){

                l.k(v[0])
            }

            else{

                l(v)
            }
        })


    if(g.p){l.k('A')}//active

    if(g.n){l.k('dd')}//dropdown

    return l}



$a =function(a, func){
    var g=G(arguments), a=g[0], f=g[1],

        theEl=qq('a').id(a)(a)

    if(F(func)){theEl.o(func)} else {theEl.hr(func||'#')}

    if(g.n){theEl.dd()}

    //  "<div data-toggle="dropdown" class="dropdown-toggle"></div>"

    if(g.p){theEl=li(theEl)}



    if(g.m){theEl=li(theEl).k('active')}

    return theEl}

////


$.$$=function(a,b,c){

    $('body').dblclick(a,b,c)

    return $}

$.$=function(){

    var b=$('html')

        b.click.apply(b, arguments)

    return $}


$.editDiv=function(words){

    var input = $('<textarea>').css('margin', 4)

    var span = $.span().C('z')

    var spanFunc = function () { span.text(input.val()) }

    var d = $.divA().C('n', 'y').css('padding', 8).A()

    d.zIndex(0)

    var location

    var canMove=true
     xButton= $.button('', function(){d.remove()}).W(4).H(4).C('r')


    var changeLocation=true
    var inputMove=true

    var mouse = 'up'

    var appendSensorDiv= $.div('y',16, 12).textAlign('center').mar('0 auto').click(function(){
        $(this).parent().free()
    })

    d.mousedown(function(){


        inputMove = false

        mouse='div'
    })
    d.mouseup(function(){mouse='up'})
    d.mousedown(function(){

        $.editDiv.top ++

        $(this).zIndex(  $.editDiv.top  )

    })
    input.mousedown(function(e){
        $.editDiv.top ++
        $(this).parent().zIndex(  $.editDiv.top  )
        location={top: d.top(), left: d.left()}
        inputMove = true
        mouse='input'
        e.stopPropagation()})
    input.mousemove(function(e){

        if(inputMove){

            e.stopPropagation()

            d.top( location.top).left(location.left)
        }
    })





    if(U(words)) {

      return d.A( xButton, $br().q, span.hide(), input,

          appendSensorDiv

      ).dblclick(function(e){
              e.stopPropagation()

          spanFunc()
          xButton.toggle();
          input.toggle()
          span.toggle()


      }).drag()

    }

    else {

      input.val(words)

        d.A( xButton, $br().q,span, input.hide() )

        spanFunc()

        d.dblclick(function(e){
            e.stopPropagation()
            spanFunc(); xButton.toggle(); input.toggle(); span.toggle() })


      return d.drag() }

}


$.editDiv.top=0


editDiv=function(a){


    var div=$.editDiv(a),
        range=$('<input type="range">')


    range.on('mousedown',function(e){
        e.stopPropagation()

    })

    range.on('input', function(){



        div.find( $('span')).fontSize( $(this).val()  )
        div.find( $('textarea')).fontSize( $(this).val()  )

    })


    div.prepend( range  )

    return div
}


EDITRANGE=function(){

    z()

    a=editDiv().C('a')
    b=editDiv().C('b')
    c=editDiv().C('c')
}


FUNNY=function(){z()

      word = function(text, c1, c2){

        var s= $.span(text).C(c1, c2).A().drag()

    return s}


     w=word('hello', 'b', 'g')

    word('sicko', 'g', 'b')

   word('why, i oughta..', 'p', 'x')

    word('it was raining..', 'j', 'k')

    word('who ya gonna call?', 'h', 'i')
    word('dag nabit!', 'f', 'g')

    word('i like', 'd', 'e')
    word('tomorrow', 'a', 'c')

    word('me', 'r', 'b')

}




JQPLUGS=function(){ z()

    d = $.div().Z( 100 ).C( 'r' ).A().append( 'abc' )

    e = $.div().Z( 100 ).col( 'r' ).A().append( 'abc' )

    f = $.div().Z( 100 ).C( 'r' , 'b' ).A().append( 'abc' )

    g = $.div( 'b' , 500 , 500 ).A() }



//TWITTER GRID

$.ul=function(){  return $('<ul>') }


$.row=function(n){

    var div= $.div().addClass('row')

    _.each( G(arguments), function(arg){ div.A(arg) } )

    return div
}

$.formGroupDiv=function(){return $.div().K('form-group').fontSize(20)}

$.submitInput=function(val){

   var el = $('<input>').attr('type', 'submit').fontSize( 16 )

    if(val){  el.val(val)  }

return el}

$.textInput=function(name){

    var el = $('<input>').attr('type', 'text')

    if(name){  el.attr({name: name, id:name})  }

    return el}



$.passwordInput=function(name){

    var el = $('<input>').attr('type', 'password')

    if(val){  el.attr('name', name)  }

    return el}
//pass in size, and then args(contents) as a list (or as an array)
$.col = function(){  var args = G(arguments),

    div= $.div().addClass( 'm' + args[0] ),

    iter = A( args[1])?  args[1] : args.r

    _.each( iter, function(v){ div.A(v) } )

    return div }



$.canvas=function(col, width, height){

    var el

    if( U ( col ) ){  return $( '<canvas>' ).C( 'b' )   }

    if( N(col) ){ return $.canvas( 'x', col, width )}

    if( S(col) ) {

        el = $( '<canvas>' )

        el.css( 'backgroundColor', oO( 'c' , col ) )

        if( N ( width ) ){ el.attr('width', width ) }

        if( N ( height ) ){ el.attr('height', height ) }}

    el.canvas = el[0]

    el.context = el.canvas.getContext('2d')

    el.stage = new createjs.Stage( el.canvas )

    el.drawImage = el.dI=function(i){

        var args=G(arguments);

        args[1] = args[1]||0
        args[2] = args[2]||0
        el.context.drawImage.apply(el.context, args)

    }

    el.draw=function(img){

        var args=G(arguments),  img=args[0]

        im(img, function(i){

            args[0] = i

            el.drawImage.apply(el, args)

        })  }



    return el}










VOLUME=function(){

    outerDiv = $.div('y', 400, 200 ).A().drag()


    r=$.row().W(600)

    r.A(  $.div().id('booksDiv').addClass('col-md-6').A(    ) )

    r.A(  $.div().id('displayDiv').addClass('col-dm-6').A(   $.img('guy')  )    )

    r.A().drag()


    Book=function(title){

       var book = $.div().A( $('<h4>').text( title||'book') ).H(60).C('b').addClass('book')

        book.display = $.img('me').hide().addClass('display')

    return book}




    addBook=function(title){

        var book=Book(title)

        $('#booksDiv').A( book )

        $('#displayDiv').A(   book.display      )

        $('.book').click(   function(){

            $(this).id()

        })

        return book
    }


    a= addBook('a')
    b=addBook('b')
}


//mongoError: kill mongod processess!!!!  ps ax | grep mongod


(function ($) {
    "use strict";
// jQuery('form').serializeJSON()
    $.fn.serializeJSON = function (options) {
        var serializedObject, formAsArray, keys, value, f, opts;
        f = $.serializeJSON;
        formAsArray = this.serializeArray(); // array of objects {name, value}
        opts = f.optsWithDefaults(options); // calculate values for options {parseNumbers, parseBoolens, parseNulls}
        serializedObject = {};
        $.each(formAsArray, function (i, input) {
            keys = f.splitInputNameIntoKeysArray(input.name); // "some[deep][key]" => ['some', 'deep', 'key']
            value = f.parseValue(input.value, opts); // string, number, boolean or null
            if (opts.parseWithFunction) value = opts.parseWithFunction(value); // allow for custom parsing
            f.deepSet(serializedObject, keys, value, opts);
        });
        return serializedObject;
    };
// Use $.serializeJSON as namespace for the auxiliar functions
// and to define defaults
    $.serializeJSON = {
        defaultOptions: {
            parseNumbers: false, // convert values like "1", "-2.33" to 1, -2.33
            parseBooleans: false, // convert "true", "false" to true, false
            parseNulls: false, // convert "null" to null
            parseAll: false, // all of the above
            parseWithFunction: null, // to use custom parser, use a function like: function (val) => parsed_val
            useIntKeysAsArrayIndex: false // name="foo[2]" value="v" => {foo: [null, null, "v"]}, instead of {foo: ["2": "v"]}
        },
// Merge options with defaults to get {parseNumbers, parseBoolens, parseNulls, useIntKeysAsArrayIndex}
        optsWithDefaults: function(options) {
            var f, parseAll;
            if (options == null) options = {}; // arg default value = {}
            f = $.serializeJSON;
            parseAll = f.optWithDefaults('parseAll', options);
            return {
                parseNumbers: parseAll || f.optWithDefaults('parseNumbers', options),
                parseBooleans: parseAll || f.optWithDefaults('parseBooleans', options),
                parseNulls: parseAll || f.optWithDefaults('parseNulls', options),
                parseWithFunction: f.optWithDefaults('parseWithFunction', options),
                useIntKeysAsArrayIndex: f.optWithDefaults('useIntKeysAsArrayIndex', options)
            }
        },
        optWithDefaults: function(key, options) {
            return (options[key] !== false) && (options[key] || $.serializeJSON.defaultOptions[key]);
        },
// Convert the string to a number, boolean or null, depending on the enable option and the string format.
        parseValue: function(str, opts) {
            var value, f;
            f = $.serializeJSON;
            if (opts.parseNumbers && f.isNumeric(str)) return Number(str); // number
            if (opts.parseBooleans && (str === "true" || str === "false")) return str === "true"; // boolean
            if (opts.parseNulls && str == "null") return null; // null
            return str; // otherwise, keep same string
        },
        isObject: function(obj) { return obj === Object(obj); }, // is this variable an object?
        isUndefined: function(obj) { return obj === void 0; }, // safe check for undefined values
        isValidArrayIndex: function(val) { return /^[0-9]+$/.test(String(val)); }, // 1,2,3,4 ... are valid array indexes
        isNumeric: function(obj) { return obj - parseFloat(obj) >= 0; }, // taken from jQuery.isNumeric implementation. Not using jQuery.isNumeric to support old jQuery and Zepto versions
// Split the input name in programatically readable keys
// "foo" => ['foo']
// "[foo]" => ['foo']
// "foo[inn][bar]" => ['foo', 'inn', 'bar']
// "foo[inn][arr][0]" => ['foo', 'inn', 'arr', '0']
// "arr[][val]" => ['arr', '', 'val']
        splitInputNameIntoKeysArray: function (name) {
            var keys, last, f;
            f = $.serializeJSON;
            if (f.isUndefined(name)) { throw new Error("ArgumentError: param 'name' expected to be a string, found undefined"); }
            keys = $.map(name.split('['), function (key) {
                last = key[key.length - 1];
                return last === ']' ? key.substring(0, key.length - 1) : key;
            });
            if (keys[0] === '') { keys.shift(); } // "[foo][inn]" should be same as "foo[inn]"
            return keys;
        },
// Set a value in an object or array, using multiple keys to set in a nested object or array:
//
// deepSet(obj, ['foo'], v) // obj['foo'] = v
// deepSet(obj, ['foo', 'inn'], v) // obj['foo']['inn'] = v // Create the inner obj['foo'] object, if needed
// deepSet(obj, ['foo', 'inn', '123'], v) // obj['foo']['arr']['123'] = v //
//
// deepSet(obj, ['0'], v) // obj['0'] = v
// deepSet(arr, ['0'], v, {useIntKeysAsArrayIndex: true}) // arr[0] = v
// deepSet(arr, [''], v) // arr.push(v)
// deepSet(obj, ['arr', ''], v) // obj['arr'].push(v)
//
// arr = [];
// deepSet(arr, ['', v] // arr => [v]
// deepSet(arr, ['', 'foo'], v) // arr => [v, {foo: v}]
// deepSet(arr, ['', 'bar'], v) // arr => [v, {foo: v, bar: v}]
// deepSet(arr, ['', 'bar'], v) // arr => [v, {foo: v, bar: v}, {bar: v}]
//
        deepSet: function (o, keys, value, opts) {
            var key, nextKey, tail, lastIdx, lastVal, f;
            if (opts == null) opts = {};
            f = $.serializeJSON;
            if (f.isUndefined(o)) { throw new Error("ArgumentError: param 'o' expected to be an object or array, found undefined"); }
            if (!keys || keys.length === 0) { throw new Error("ArgumentError: param 'keys' expected to be an array with least one element"); }
            key = keys[0];
// Only one key, then it's not a deepSet, just assign the value.
            if (keys.length === 1) {
                if (key === '') {
                    o.push(value); // '' is used to push values into the array (assume o is an array)
                } else {
                    o[key] = value; // other keys can be used as object keys or array indexes
                }
// With more keys is a deepSet. Apply recursively.
            } else {
                nextKey = keys[1];
// '' is used to push values into the array,
// with nextKey, set the value into the same object, in object[nextKey].
// Covers the case of ['', 'foo'] and ['', 'var'] to push the object {foo, var}, and the case of nested arrays.
                if (key === '') {
                    lastIdx = o.length - 1; // asume o is array
                    lastVal = o[lastIdx];
                    if (f.isObject(lastVal) && (f.isUndefined(lastVal[nextKey]) || keys.length > 2)) { // if nextKey is not present in the last object element, or there are more keys to deep set
                        key = lastIdx; // then set the new value in the same object element
                    } else {
                        key = lastIdx + 1; // otherwise, point to set the next index in the array
                    }
                }
// o[key] defaults to object or array, depending if nextKey is an array index (int or '') or an object key (string)
                if (f.isUndefined(o[key])) {
                    if (nextKey === '') { // '' is used to push values into the array.
                        o[key] = []
                    } else if (opts.useIntKeysAsArrayIndex && f.isValidArrayIndex(nextKey)) { // if 1, 2, 3 ... then use an array, where nextKey is the index
                        o[key] = []
                    } else { // for anything else, use an object, where nextKey is going to be the attribute name
                        o[key] = {}
                    }
                }
// Recursively set the inner object

                tail = keys.slice(1)

                f.deepSet(o[key], tail, value, opts)
            }
        }
    }}(window.jQuery || window.Zepto || window.$))


