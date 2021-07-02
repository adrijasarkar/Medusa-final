class Form {
    constructor(){
        this.title = createElement ("h1")
        this.button1 = createButton("PLAY")
        this.button2 = createButton("STORY")
        this.button3 = createButton("How to play")
        this.button4 = createButton("Select Background")
        this.button5 = createButton("Rules")
        this.button6 = createButton("Back")
        this. red = createButton("Red Background")
        this. swamp = createButton("Swamp Background")
        this. night = createButton("night Background")
        this. nightsky = createButton("nightsky Background")
        
    }
    display(){
       
        this.title.html("Dragon vs Medusa")
        this.title.position(450,70)
        this.title.style("font-size",90)
       
        this.button1.position(500,150)
        this.button2.position(500,200)
        this.button3.position(500,250)
        this.button4.position(500,300)
        this.button5.position(500,350)
        this.button6.position(650,650)
        this.red.position(500,150)
        this.swamp.position(500,200)
        this.night.position(500,250)
        this.nightsky.position(500,300)

        this.red.hide()
        this.swamp.hide()
        this.night.hide()
        this.nightsky.hide()

        this.button6.hide()
        this.button1.mousePressed(()=>{
            this.button1.hide()
            this.button2.hide()
            this.button3.hide()
            this.button4.hide()
            this.button5.hide()
            this.title.hide()
            
            gameState=1
        })
        this.button2.mousePressed(()=>{
            gameState=2
            this.button2.hide()
            this.button3.hide()
            this.button4.hide()
            this.button5.hide()
            this.title.hide()
            this.button6.show()
            this.button1.position(650,530)
        })
        this.button3.mousePressed(()=>{
            gameState=3
            this.button1.hide()
            this.button2.hide()
            this.button3.hide()
            this.button4.hide()
            this.button5.hide()
            this.button6.show()
            this.title.hide()
        })
        this.button4.mousePressed(()=>{
            gameState=4
            this.button1.hide()
            this.button2.hide()
            this.button3.hide()
            this.button4.hide()
            this.button5.hide()
            this.button6.show()
            this.title.hide()
        })
        this.button5.mousePressed(()=>{
            gameState=5
            this.button1.hide()
            this.button2.hide()
            this.button3.hide()
            this.button4.hide()
            this.button5.hide()
            this.button6.show()
            this.title.hide()

            this.red.show()
            this.swamp.show()
            this.night.show()
            this.nightsky.show()
            
            this.red.mousePressed(()=>{
                bgSelect =1
            })
            this.swamp.mousePressed(()=>{
                bgSelect =2
            })
            this.night.mousePressed(()=>{
                bgSelect =3
            })
            this.nightsky.mousePressed(()=>{
                bgSelect =4
            })
        }) 
        this.button6.mousePressed(()=>{
            gameState = 0
            this.title.show()
            this.button1.show()
            this.button2.show()
            this.button3.show()
            this.button4.show()
            this.button5.show()
        })
        
    }
    
}