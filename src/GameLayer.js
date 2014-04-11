var GameLayer = cc.LayerColor.extend({
    init: function() {
        this._super( new cc.Color4B( 127, 127, 127, 255 ) );
        this.setPosition( new cc.Point( 0, 0 ) );
		
		this.setKeyboardEnabled( true );

		this.pig = new Pig();
		this.pig.setPosition( new cc.Point( 200,70 ) );
		this.addChild( this.pig,1 );
		this.pig.scheduleUpdate();
		
		this.background = new Background();
		this.background.setPosition( new cc.Point( 0,0 ) );
		this.addChild( this.background );
		this.background.scheduleUpdate();
		
		//this.potato = new Potato();
		//this.potato.setPosition( new cc.Point( this.potato.randomX(), 800 ));
		//this.addChild( this.potato );
		//this.potato.scheduleUpdate();

		this.meat = new Meat();
		
		this.meat.setAnchorPoint( cc.p( 0, 0 ) );
		//console.log( JSON.stringify( this.meat.getPosition() ) )
		//this.meat.setPosition( new ccPoint( this.meat.getMeat().randomX(), 800 ) );
		this.addChild( this.meat );
		this.meat.scheduleUpdate();
		
		this.scoreLabel = cc.LabelTTF.create( '0', 'Arial', 40 );
		this.scoreLabel.setPosition( new cc.Point( 750, 550 ) );
		this.addChild( this.scoreLabel );
		console.log( JSON.stringify( this.meat.getPosition() ) )
        return true;
		
    },
	
	update : function( ){
		if(this.potato.closeTo( this.pig )){
			this.potato.setPosition(new cc.Point(this.potato.randomX(),800));
		}
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

