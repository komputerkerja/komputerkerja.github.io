class CarControllers{
    constructor(){
        this.up=false;
        this.left=false;
        this.right=false;
        this.down=false;
        this.#keyboardEvents();
    }
    #keyboardEvents(){
        document.addEventListener('keydown', e => {
            switch(e.key){
                case 'ArrowUp':
                    this.up=true;
                    break;
                case 'ArrowLeft':
                    this.left=true;
                    break;
                case 'ArrowRight':
                    this.right=true;
                    break;
                case 'ArrowDown':
                    this.down=true;
                    break;
            }
        })
        document.addEventListener('keyup', e => {
            switch(e.key){
                case 'ArrowUp':
                    this.up=false;
                    break;
                case 'ArrowLeft':
                    this.left=false;
                    break;
                case 'ArrowRight':
                    this.right=false;
                    break;
                case 'ArrowDown':
                    this.down=false;
                    break;
            }
        })
    }
}