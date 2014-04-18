var Meat = cc.Sprite.extend( {
		ctor: function( ) {
			this._super( );
		},
		
		update : function( ) {
			var pos = this.getPosition();
			
			if( pos.y < 0 ) {
				this.removeFromParent( true);
			} else {
				this.setPosition( pos.x, pos.y - 4);
			}
		},
		
		isHitted : function( obj ) {
			var pigPos = obj.getPosition();
			var meatPos = this.getPosition();
			
			return ( ( Math.abs( meatPos.x - pigPos.x ) <= 50) &&
		 ( Math.abs( meatPos.y - pigPos.y ) <= 50 ) );
			//return (Math.abs( pigPos.x - meatPos.x ) <= 10) && (Math.abs( pigPos.y- meatPos.y ) <= 10);
			//return true;
		},
			
} );