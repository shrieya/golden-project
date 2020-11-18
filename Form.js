class Form{
    constructor(){
        this.input = createInput('name');
        this.button = createButton('play');
        this.greeting = createElement('h2');
    }
    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }

    display(){
        var title = createElement('h2');
        title.html('Pong Game');
        title.position(560,160);

        this.input.position(560,260);
        this.button.position(680,350);
    }
}