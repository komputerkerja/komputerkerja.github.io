class CarControllers{
    constructor(type){
        this.up=false;
        this.left=false;
        this.right=false;
        this.down=false;
        switch(type){
            case 'KEYS':
                this.#keyboardEvents();
                break;
            case 'DUMMY':
                this.up=true;
                break;
        }
    }
    #keyboardEvents(){
        document.addEventListener('keydown', e => {
            switch(e.key){
                case 'w':
                    this.up=true;
                    break;
                case 'a':
                    this.left=true;
                    break;
                case 'd':
                    this.right=true;
                    break;
                case 's':
                    this.down=true;
                    break;
            }
        })
        document.addEventListener('keyup', e => {
            switch(e.key){
                case 'w':
                    this.up=false;
                    break;
                case 'a':
                    this.left=false;
                    break;
                case 'd':
                    this.right=false;
                    break;
                case 's':
                    this.down=false;
                    break;
            }
        })
    }
}