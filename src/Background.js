var Background = cc.Node.extend({
		ctor: function() {
			this._super();
			
			this.background1 = cc.Sprite.create(' images/floor3.jpg ');
			this.background1.setPosition( 400, 400 );
			this.addChild( this.background1 );
			
			this.background2 = cc.Sprite.create(' images/floor3.jpg ');
			this.background2.setPosition( 400, 1200 );
			this.addChild( this.background2 );
		},
		
		update: function( dt ) {
 
			if ( this.background1.getPositionY() < -400 ) {
				this.background1.setPosition( new cc.Point( 400, this.background2.getPositionY() + 800 ) );
			} 
			else if( this.background2.getPositionY() < -400 ) {
				this.background2.setPosition( new cc.Point( 400, this.background1.getPositionY() + 800 ) );
			}
			
			this.slideBackground();
		},
		
		slideBackground : function(){
			this.background1.setPosition( new cc.Point( 400, this.background1.getPositionY() - 4 ) );
			this.background2.setPosition( new cc.Point( 400, this.background2.getPositionY() - 4 ) );
		},
	
});