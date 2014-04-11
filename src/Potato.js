var Potato = cc.Sprite.extend({
		ctor: function( ) {
			this._super( );
			this.initWithFile( 'images/veg1.png' );
			
			this.lane = [ 160, 320, 480, 740 ];
		},
		
		randomX : function( ) {
			var index = Math.floor( Math.random() * 3 );
			return this.lane[index];
		},
		
		update : function( ) {
			this.setPosition( new cc.Point( this.getPositionX(), (this.getPositionY() - 4 ) ));
			
			if(this.getPositionY() <= 0)
				this.setPosition( new cc.Point( this.randomX(), 800 ));		
			
		},
		
		
});