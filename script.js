const Car = function(x, y) {
    this.x = x;
    this.y = y;
    this.draw();
};

Car.prototype.draw = function() {
    const carHtml = '<img src="car.png">';

    this.carElement = $(carHtml);

    this.carElement.css({
        position: 'absolute',
        left: this.x,
        top: this.y,
    });

    $('body').append(this.carElement);
};

Car.prototype.moveRight = function(distance) {
    this.x += distance;
    this.carElement.css({
        left: this.x,
        top: this.y,
    });
};
Car.prototype.moveLeft = function(distance) {
    this.x -= distance;
    this.carElement.css({
        left: this.x,
        top: this.y,
    });
};
Car.prototype.moveUp = function(distance) {
    this.y += distance;
    this.carElement.css({
        left: this.x,
        top: this.y,
    });
};
Car.prototype.moveDown = function(distance) {
    this.y += distance;
    this.carElement.css({
        left: this.x,
        top: this.y,
    });
};

const tesla = new Car(20, 20);
const nissan = new Car(20, 170);
const niva = new Car(20, 320);

const intervalID = setInterval(function() {
    tesla.moveRight(Math.random() * 5);
    nissan.moveRight(Math.random() * 5);
    niva.moveRight(Math.random() * 5);
    const finishLineX = $('.finish-line').offset().left;
    if (tesla.x > finishLineX) {
        clearInterval(intervalID);
        alert('Tesla win');
    } else if (nissan.x > finishLineX) {
        clearInterval(intervalID);
        alert('Nissan win');
    } else if (niva.x > finishLineX) {
        clearInterval(intervalID);
        alert('Niva win');
    }
}, 30);