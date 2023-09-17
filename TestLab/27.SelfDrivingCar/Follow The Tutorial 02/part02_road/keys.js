class Keys{
    constructor(){
        this.up=false;
        this.left=false;
        this.right=false;
        this.down=false;
        this.#keyboardEventListener();
    }
    #keyboardEventListener(){
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
            }
        })
    }
}