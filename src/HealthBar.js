var HealthBar = cc.Node.extend({
	ctor: function(  ) {
		this._super();
		this.blackBar = cc.Sprite.create( 'images/blackbar.png' );
		this.blackBar.setAnchorPoint( new cc.Point( 0, 0 ) );
		this.blackBar.setPosition( new cc.Point( 45 , 520 ) );
		this.addChild( this.blackBar );
		
		this.greenBar = cc.Sprite.create( 'images/greentube.png' );
		this.greenBar.setAnchorPoint( new cc.Point( 0, 0 ) );
		this.greenBar.setPosition( new cc.Point( 50, 525 ) );
		this.addChild( this.greenBar );
		
		this.pinkBar = cc.Sprite.create( 'images/pinktube.png' );
		this.pinkBar.setAnchorPoint( 1, 0 );
		this.pinkBar.setPosition( new cc.Point( 706, 525 ) );
		this.addChild( this.pinkBar );
	},
	
	setRatio : function ( ratio ) { // 0 - 2
		this.greenBar.setScaleX( ratio ); 
		this.pinkBar.setScaleX( 2 - ratio );
	}
	
});