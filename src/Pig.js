var Pig = cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.initWithFile( 'images/pig2.png' );
		
		this.direction = Pig.DIR.STILL;
		this.nextDirection = Pig.DIR.STILL;
		
		this.x = 400;
		this.updatePosition();
	},
	
	setNextDirection: function( dir ) {
        this.nextDirection = dir;
    },
	
	updatePosition: function() {
        this.setPosition( cc.p( this.x, 110 ) );
    },
	
	update: function( dt ) {
		this.direction = this.nextDirection;
		switch ( this.direction ) {
			case Pig.DIR.LEFT:
				if( this.x > 50 )
					this.x -= Pig.MOVE_STEP;
				break;
			case Pig.DIR.RIGHT:
				if( this.x < 750 )
					this.x += Pig.MOVE_STEP;
				break;
        }
		 this.updatePosition();
	},
	
	setPigSize : function( size ){
		if( size == 1 ) {
			this.initWithFile( 'images/chubby2.png', cc.rect( 0, 0, 201, 210 ) );//c2
		}
		else if( size == 2 ) {
			this.initWithFile( 'images/chubby1.png', cc.rect( 0, 0, 155, 189 )  );//c1
		}
		else if( size == 3 ) {
			this.initWithFile( 'images/pig2.png', cc.rect( 0, 0, 100, 150 ));//normal
		}
		else if( size ==  4 ) {
			this.initWithFile( 'images/thin1.png', cc.rect( 0, 0, 101, 153 ) );//thin1i
		}
		else if( size == 5 ) {
			this.initWithFile( 'images/thin2.png', cc.rect( 0, 0, 90, 150 ) );//thin2
		}
	},
});

Pig.MOVE_STEP = 5;
Pig.DIR = {
    LEFT : 1,
    RIGHT : 2,
	STILL : 0
};
