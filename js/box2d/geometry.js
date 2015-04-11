

//destructable terrain
DEST=function(){w=b2d.W({g:1})
    y= w.ship().linDamp(10)
    b = w.brick(800,300,200,800).K('terr')
    can=true
    w.s.X(5000)
    w.beg(function(cx){var fixt

        if(fixt=cx.with('bul','terr')){

            bull = fixt[0].B()
            terr = fixt[1].B()
            bX= bull.X()
            bY= bull.Y()
            bull.kill()


            if(can){can=false

                setTimeout(function(){// br =  w.brick(bX,bY,60,60).rot(45)

                    br=b2d.conc(

                        b2d.polyCirc(20,7)

                    ).XY(bX,bY)

                    b.each(function(f){

                        f.DIFF(br)

                    })


                    br.kill()



                    can=true}, 10)


                killIfSmall=function(f){var area=this.area()

                    if( area < 20){
                        $l('too small: ' +area )
                        f.kill()  }

                }

            }

        }

    })
    w.show(function(){return b.num()})


}

DEST1=function(){w=b2d.W({g:0})
    y= w.ship()
    b = w.brick(400,400,300,300).K('terr')


    w.beg(function(cx){var fixt

        if(fixt=cx.with('bul','terr')){

            bull = fixt[0].B()

            bX= bull.X()
            bY= bull.Y()

            terrF = fixt[1]

            setTimeout(function(){

                br =  w.brick(bX, bY, 100, 100).rot(45)

                terrF.DIFF(br)

            },100)

            // w.brick(bull.X(), bull.Y(), 50, 50)
        }

    })

}



