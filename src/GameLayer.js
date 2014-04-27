var score = 0;
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
		
		this.slide = new Slide(this);
		this.addChild(this.slide);
		this.slide.scheduleUpdate();
		
		this.scoreLabel = cc.LabelTTF.create( '0', 'Arial', 40 );
		this.scoreLabel.setPosition( new cc.Point( 750, 550 ) );
		this.addChild( this.scoreLabel );
		
		this.scheduleUpdate();
		
        return true;
		
    },
	
	update : function( dt ){
	
		//set score label 
		//by this.score
		this.scoreLabel.setString( score );
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
	
	setScore : function( s ){
		score = s;
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

