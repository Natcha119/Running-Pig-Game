var GameLayer = cc.LayerColor.extend({
    init: function() {
        this._super( new cc.Color4B( 127, 127, 127, 255 ) );
        this.setPosition( new cc.Point( 0, 0 ) );
		
		this.setKeyboardEnabled( true );

		this.pig = new Pig();
		this.pig.setPosition(new cc.Point(200,70));
		this.addChild( this.pig,1);
		this.pig.scheduleUpdate();
		
		this.background = new Background();
		this.background.setPosition( new cc.Point( 5,0) );
		this.addChild( this.background );
		this.background.scheduleUpdate();
		
        return true;
		
    },
	
	onKeyDown: function( e ) {
        switch( e ) {
        case cc.KEY.left:
            this.pig.setNextDirection( Pig.DIR.LEFT );
            break;
        case cc.KEY.right:
            this.pig.setNextDirection( Pig.DIR.RIGHT );
            break;
		}
	},	

	onKeyUp : function( e ) {
		this.pig.setNextDirection( Pig.DIR.STILL );
	},
	
	
});

var StartScene = cc.Scene.extend({
    onEnter: function() {
        this._super();
        var layer = new GameLayer();
        layer.init();
        this.addChild( layer );
    }
});

