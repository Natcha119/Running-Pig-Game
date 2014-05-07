
var GameLayer = cc.LayerColor.extend({
    init: function() {

        this._super( new cc.Color4B( 127, 127, 127, 255 ) );
        this.setPosition( new cc.Point( 0, 0 ) );
		this.score = 0;
		this.iden = Math.random();
		console.log(this.iden);
		this.setKeyboardEnabled( true );
		this.createPig();
		this.createBackground();
		this.createHealthbar();
		this.createScorelabel();
		this.createSlide();

		this.setTouchEnabled(true);
        this.setTouchMode(1);
        this.isDead = false;
	
        return true;
		
    },

    createHealthbar : function(){
    	this.healthBar = new HealthBar();
		this.healthBar.setRatio( 1 );
		this.addChild( this.healthBar, 1 );
		this.scheduleUpdate();
    },

    createScorelabel : function(){
    	this.scoreLabel = cc.LabelTTF.create( '0', 'Arial', 40 );
		this.scoreLabel.setPosition( new cc.Point( 760, 550 ) );
		this.addChild( this.scoreLabel );
    },

    createSlide : function(){
    	this.slide = new Slide(this);
		this.addChild(this.slide);
    },

    createBackground : function(){
    	this.background = new Background();
		this.background.setPosition( new cc.Point( 0,0 ) );
		this.addChild( this.background );
		this.background.scheduleUpdate();
    },
	
	createPig: function(){
		this.pig = new Pig();
		this.addChild( this.pig,1 );
		this.pig.scheduleUpdate();
	},
	
	update : function( dt ){
		this.scoreLabel.setString( this.score );
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
		this.score = s;
	},
	
	gameOver: function(){
        //var conf = confirm("GAME OVER\nYour score : "+ score +"\nRetry?");
        //if( conf ) 
		//	location.reload();
        //else 
		//	this.unscheduleUpdate();    
        //return;
		
		this.gameover = cc.Sprite.create("images/gameOver.png");
       	this.gameover.setPosition( 400, 300 );
        this.addChild( this.gameover, 3 );

        this.setKeyboardEnabled (false);
        this.pig.cleanup();
        this.slide.cleanup();
        this.isDead = true;

        
    },

    onTouchBegan:function( touch, event ) {
    	if(this.isDead){
        	var director = cc.Director.getInstance();
        	location.reload();
        }
    }
	
});

var StartScene = cc.Scene.extend({
    onEnter: function() {
        this._super();
       	var layer = new GameLayer();
        layer.init();
        this.addChild(layer );
    }
});

