var Veg = cc.Sprite.extend( {//blue
		ctor: function( _pig ) {
			this._super( );
			this.pig = _pig;
			this.speeds = [ 6, 8, 10, 9, 12 ];
			this.speed = this.randomSpeed();
		},
		
		update : function( ) {
			var pos = this.getPosition();
			
			if( this.pig && this.isHit( this.pig ) ) {
				this.pig.beep();
				this.removeFromParent( true );
				Veg.score += 1;
				hitRatio += this.getHitRatio();		
			}
			if( pos.y < 0 ) {
				this.removeFromParent( true );
			} else {
				this.setPosition( pos.x, pos.y - this.speed );
			}
		},
		
		setNewPosition: function() {
			this.setPosition( new cc.Point( this.randomX(), 800 ) );
		},
		
		randomX : function() {
			var i = Math.floor( Math.random()*675 ) + 90;
			return i;
		},
		
		isHit : function( obj ) {
			return cc.rectIntersectsRect( obj.getBoundingBoxToWorld(), this.getBoundingBoxToWorld() );
		 },
		 
		getScore : function() {
			return Veg.score;
		},

		randomSpeed : function() {
			var i = Math.floor( Math.random()*5 );
			return this.speeds[ i ];
		},
			
} );

Veg.score = 0;