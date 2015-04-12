b=b2d.Body.prototype
w=b2d.World.prototype

jointDef=function() {
    jd = b2d.Joints.b2MouseJointDef.prototype
    jd.sT = function (a, b) {
        var jd = this//=j.tS=    j.tg=j.tgS=j.ts=
        j.target.Set(a, b)
        return jd
    }
    jd.cC = jd.clC = jd.clCn = jd.cc = function (a) {
        var jd = this
        j.collideConnected = a ? true : false
        return jd
    }
    jd.mF = jd.mf = function (a) {
        var jd = this
        j.maxForce = a;
        return jd
    }
    jd.A = function (a) {
        var jd = this
        j.bodyA = a
        return jd
    }
    jd.B = function (b) {
        var jd = this
        jd.bodyB = b
        return jd
    }
}; jointDef()
j=b2d.Joints.b2MouseJoint.prototype
j.tg = function(x,y){var j = this
    if (U(x)) {return j.GetTarget().mult()}
    j.SetTarget(V(x, y).div())
    return j}

// world mouse down vs canvas mouse down!!! // canvas mouse down just uses $.oMD
w.md= function(fn){var w=this
    $(w.hud.canvas).mousedown(function(e){
        fn({x:w.mx, y:w.my})
    })
    return w}
w.mu= function(l){var w=this
    $(w.hud.canvas).mouseup(function(e){

        l({x:w.mx, y:w.my})
    })
    return w}
w.mm= function(l){var w=this

    $(w.hud.canvas).mousemove(function(e){

        l({x:w.mx, y:w.my})
    })

    return w}
w.m$= function(l){var w=this

    $(w.hud.canvas).click(function(e){

        l({x:w.mx, y:w.my})
    })

    return w}
w.m$$= function(l){var w=this

    $(w.hud.canvas).dblclick(function(e){

        l({x:w.mx, y:w.my})
    })

    return w}

w.m=function(b,x,y){var w=this, j, p//= w.mou
    mJD = new b2d.Joints.b2MouseJointDef
    mJD.bodyA = w.GetGroundBody()
    mJD.bodyB = b
    mJD.target = V(x, y).div()
    mJD.dampingRatio = 0
    mJD.maxForce = 5000
    mJD.collideConnected = true
    j = w.J(mJD)
    return j
} //make a mouse joint
w.M = function () {var w=this; if (w.mj){ w.j(w.mj);  w.mj = null}; return w}
w.wMouse=function(){var w=this
    $.oMD(fn).oMM(fn)
    function fn(x,y){
        var p = w.sToW(x,y)
        w.mx= p.x; w.my= p.y}
    //sets w.mx and w.my (adjusts for everything)
    //  cjs.tick(function(){    if(w.mj){w.mj.tg(w.mx, w.my) }})
    return w}
w.wMouseJ=function(o){var w=this
    w.md(function(e){
        w.XY(e.x, e.y, function(f){
            var b=f.B()
            if(f.ofClass(o.m)){ w.mj = w.m(b,e.x,e.y) }
        })
    })

    cjs.t(function(){if(w.mj){w.mj.tg(w.mx, w.my)}})
    $.oMU(function(){ w.M() })
    return w
}

old=function(){


    b.mJ=b.mouse=b.mouseJ=b.mouseJoint=function(x,y){var b=this,w=b.W(), v,mj
        v=V(x,y)
        mj = w.mouseJ(b, v)
        return mj
    }



    b2d.mouseDef = MouseJointDef = mJD = function (a, b) {//MouseJDef=b2MJD=
        var j = new b2d.Joints.b2MouseJointDef

        if (a) {
            j.A(a)
        }

        if (b) {
            j.B(b)
        }

        return j

    }

    b2d.mouseJ = function (ground, b, tg, damp, maxForce) {
        var mJD = new b2d.Joints.b2MouseJointDef()
        mJD.bodyA = ground
        if (b) {mJD.bodyB = b}
        if (U(b)) {alert('!'); return false}
        if (tg) {mJD.target = tg } //target
        mJD.dampingRatio = N(damp) ? damp : 0
        mJD.maxForce = N(maxForce) ? maxForce : b.GetMass() * 1000
        //mJD.collideConnected = true
        return mJD}

    b2d.mJ=function(body, tX,tY){
        if(O(tX)){tY=tX.y;tX=tX.x}
        var md = new b2d.Joints.b2MouseJointDef
        md.bodyA = w.GetGroundBody()
        md.bodyB = body
        md.target = V(tX, tY)
        md.collideConnected = true
        md.maxForce = 1000 * body.GetMass()
        md.dampingRatio = 0
        return md
    }



    BALANCEGAME = function(){W()
        b = w.B(600, 300, 'r', 50).den(1).rest(.5)

        /*
         $.M()


         cjs.t(function () {
         if (w.mj) {w.mj.tg(_)}})

         $.oMU(function () {w.M()})
         $.oMD(function (x, y) {w.mj = w.m(b, _)})*/
    }



    MJOFFICIAL = function () {W().mJ().db()

        _.t(3, function () {
            b = w.B(600, 300, 'r', 50).den(1).rest(.5)
            b = w.B(600, 300, 'y', 50).den(1).rest(.5)
            b = w.B(600, 300, 'u', 50).den(1).rest(.5)
            b = w.B(600, 300, 'b', 50).den(1).rest(.5)
            b = w.B(600, 300, 'v', 50).den(1).rest(.5)
        })

        $.oMD(function (x, y) {
            w.XY(x, y, function (f) {
                w.mj = w.m(f.body(), _)
            })
        })

        $.oMU(function () {
            w.M()
        })
    }


    MJ = function () {W().mJ().db()

        _.t(3, function () {
            b = w.B(600, 300, 'r', 50).den(1).rest(.5)
            b = w.B(600, 300, 'y', 50).den(1).rest(.5)
            b = w.B(600, 300, 'u', 50).den(1).rest(.5)
            b = w.B(600, 300, 'b', 50).den(1).rest(.5)
            b = w.B(600, 300, 'v', 50).den(1).rest(.5)
        })

        $.oMD(function (x, y) {
            w.XY(x, y, function (f) {
                w.mj = w.m(f.body(), _)
            })
        })

        $.oMU(function () {
            w.M()
        })
    }


    MJWORKS = function () {W(0)

        b = w.B(600, 300, 'r', 100).den(1).rest(.5)

        joint = false;
        $.mousemove(function (e) {
            m(e)

            if (joint) {

                j.tg(mx, my)
            }

        })
        $.mousedown(function (e) {
            m(e)


            j = w.mou(b, V(mx, my).div());
            joint = true
        })
        $.mouseup(function () {


            w.j(j);
            joint = false

        })
        function m(e) {
            mx = e.clientX;
            my = e.clientY
        }

    }

    MJYANOSCRIPT = function () {W(0)

        b = w.B(600, 300, 'r', 50).den(1).rest(.5)

        $.M()
        $.oMM(function () {
            if (w.mj) {
                w.mj.tg(_)
            }
        })
        $.oMU(function () {
            w.M()
        })
        $.oMD(function (x, y) {
            w.mj = w.m(b, _)
        })

    }


    $.M=function(){
        $.oMD(function(x,y){_.x=x; _.y=y})
        $.oMM(function(x,y){_.x=x; _.y=y})
        cjs.t(function(){if(w.mj){w.mj.tg(_)}})
        return $
    }

    w.mTrack = function (b) {
        var w = this
        $.oMM(function () {
            if (w.mj) {
                w.mj.tg(_)
            }
        })
        $.oMU(function () {
            w.M()
        })
        $.oMD(function (x, y) {
            w.mj = w.m(b, _)
        })
        return w
    }
    w.mTrackTransport = function (b) {
        var w = this
        $.oMM(function () {
            if (w.mj) {
                w.mj.tg(_)
            }
        })
        $.oMU(function () {
            w.M()
        })

        $.oMD(function (x, y) {
            b.XY(x, y)
            w.mj = w.m(b, _)
        })
        return w
    }




    BASKETBALLAUTOCANCEL = function () {W()
        $.M()

        w.mTrackTransport(
            b = w.D(600, 300, 'r', 50).den(1).bo(.5)
        )
    }

    w.mJ=function(o){var w=this
        if(o.m==0){return w}
        o=o||{}
        $.M()
        cjs.t(function(){if(w.mj){w.mj.tg(_) }})
        $.oMU(function(){ w.M() })
        $.oMD(function(x,y){w.XY(x,y,
            function(f){if(f.ofClass(o.m)){w.mj = w.m(f.body(), _ )}
            })})
        return w}

    w.oMD=function(){
        var c = $(w.s.HUD.canvas)
        c.mousedown(function(e){
            o.dx = e.clientX-w.s.x
        })
    }

    $.M0 = function () {
        var $ = this

        $.oMD(function (x, y) {

            _.x = x;
            _.y = y

        })

        $.oMM(function (x, y) {
            _.x = x;
            _.y = y
        })

        cjs.tick(function () {
            if (w.mj) {
                w.mj.tg(_)
            }
        })

        return this
    }

}