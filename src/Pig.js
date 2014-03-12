var Pig = cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.initWithFile( 'images/kf2.png' );
		this.direction = Pig.DIR.STILL;
		this.nextDirection = Pig.DIR.STILL;
		
		this.x = 400;
		this.updatePosition();
	},
	
	setNextDirection: function( dir ) {
        this.nextDirection = dir;
    },
	
	updatePosition: function() {
        this.setPosition( cc.p( this.x, 100 ) );
    },
	
	update: function( dt ) {
		this.direction = this.nextDirection;
		switch ( this.direction ) {
		case Pig.DIR.LEFT:
			if( this.x > 20 )
            this.x -= Pig.MOVE_STEP;
            break;
        case Pig.DIR.RIGHT:
			if( this.x < 780 )
            this.x += Pig.MOVE_STEP;
            break;
        }
		 this.updatePosition();
	},
});

Pig.MOVE_STEP = 5;
Pig.DIR = {
    LEFT : 1,
    RIGHT : 2,
	STILL : 0
};