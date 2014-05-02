var Meat = cc.Sprite.extend( {
		ctor: function( _pig ) {
			this._super( );
			this.pig = _pig;
		},
		
		update : function( ) {
			var pos = this.getPosition();
			if( this.pig && this.isHit( this.pig ) ) {
				this.removeFromParent( true );
				hitRatio -= 0.1;
				Meat.score += 1;
			}
			if( pos.y < 0 ) {
				this.removeFromParent( true );
			} else {
				this.setPosition( pos.x, pos.y - 4);
			}
		},
		
		setNewPosition: function() {
			this.setPosition( new cc.Point( this.randomX(), 800 ) );
		},
		
		randomX : function() {
			var i = Math.floor( Math.random() * 700 ) + 90;
			return i;
		},
		
		isHit : function( obj ) {
			return cc.rectIntersectsRect( obj.getBoundingBoxToWorld(), this.getBoundingBoxToWorld() );
		},
		 
		getScore : function() {
			return Meat.score;
		},
			
} );

Meat.score = 0;