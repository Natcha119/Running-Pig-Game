var Background = cc.Node.extend({
		ctor: function() {
			this._super();
			
			this.bg1 = cc.Sprite.create('images/f3.jpg');
			this.bg1.setPosition(400,400);
			this.addChild( this.bg1 );
			this.bg2 = cc.Sprite.create('images/f3.jpg');
			this.bg2.setPosition(400,1200);
			this.addChild( this.bg2 );
		},
		
		update: function( dt ) {
 
			if ( this.bg1.getPositionY() < -400 ) {
				this.bg1.setPosition( new cc.Point( 400, this.bg2.getPositionY()+800 ) );
			} 
			else if( this.bg2.getPositionY() < -400 ){
				this.bg2.setPosition( new cc.Point( 400, this.bg1.getPositionY()+800 ) );
			}
			
			this.bg1.setPosition( new cc.Point( 400, this.bg1.getPositionY() - 4 ) );
			this.bg2.setPosition( new cc.Point( 400, this.bg2.getPositionY() - 4 ) );
		}
	
});