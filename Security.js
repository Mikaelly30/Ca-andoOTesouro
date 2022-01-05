class Security {

    constructor(){

        this.acesso1 = createInput("Code1")
        this.acesso1.position(100,90);
        this.acesso1.style('background', 'white');  

        this.botao1 = createButton('Check');
        this.botao1.position(100,120);
        this.botao1.style('background', 'lightgrey');    

        this.acesso2 = createInput("Code1")
        this.acesso2.position(700,190);
        this.acesso2.style('background', 'white');  

        this.botao2 = createButton('Check');
        this.botao2.position(700,220);
        this.botao2.style('background', 'lightgrey');
//add code for creating and positioning the third input box and button

        this.acesso3 = createInput("Code1")
        this.acesso3.position(100,340);
        this.acesso3.style('background', 'white');  

        this.botao3 = createButton('Check');
        this.botao3.position(100,370);
        this.botao3.style('background', 'lightgrey');
        
    }

    display(){

        this.botao1.mousePressed(() => {
            if(system.authenticate(accessCode1,this.acesso1.value())){
                this.botao1.hide();
                this.acesso1.hide();
                score++;
            }
        });

        this.botao2.mousePressed(() => {
            if(system.authenticate(accessCode2,this.acesso2.value())){
                this.botao2.hide();
                this.acesso2.hide();
                score++;
            }
        });
//add code for what happens when the third button is pressed
        
        this.botao3.mousePressed(() => {
            if(system.authenticate(accessCode3,this.acesso3.value())){
                this.botao3.hide();
                this.acesso3.hide();
                score++;
            }
        });

    }
}