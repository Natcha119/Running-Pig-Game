var HealthBar = cc.Node.extend({
	ctor: function(  ) {
		this._super();
		
		this.veggy = cc.Sprite.create( 'images/vegveg.png' );
		this.veggy.setPosition( new cc.Point( 45, 550 ) );
		this.addChild( this.veggy, 1 );
		
		this.mmeat = cc.Sprite.create( 'images/meatCut.png' );
		this.mmeat.setPosition( new cc.Point( 690, 550 ) );
		this.addChild( this.mmeat, 1 );
		
		this.blackBar = cc.Sprite.create( 'images/blackbar.png' );
		this.blackBar.setAnchorPoint( new cc.Point( 0, 0 ) );
		this.blackBar.setPosition( new cc.Point( 45 , 520 ) );
		this.addChild( this.blackBar );
		
		this.blueBar = cc.Sprite.create( 'images/bluetube.png' );
		this.blueBar.setAnchorPoint( new cc.Point( 0, 0 ) );
		this.blueBar.setPosition( new cc.Point( 50, 525 ) );
		this.addChild( this.blueBar );
		
		this.pinkBar = cc.Sprite.create( 'images/pinktube.png' );
		this.pinkBar.setAnchorPoint( 1, 0 );
		this.pinkBar.setPosition( new cc.Point( 706, 525 ) );
		this.addChild( this.pinkBar );
		
	},
	
	setRatio : function ( ratio ) { // 0 - 2
		this.blueBar.setScaleX( ratio ); 
		this.pinkBar.setScaleX( 2 - ratio );
	}
	
});