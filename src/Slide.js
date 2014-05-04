var Slide = cc.Node.extend({
	ctor: function( gameLayer ) {
			this._super();
			this.initComponent( gameLayer );
			this.pickUpFood();
	},
	
	initComponent : function( gameLayer ) {
		this.food = null;
		this.meat = null;
		this.veg = null;	
		this.pickVeg = 0;
		this.pickMeat = 0;	
		this.gameLayer = gameLayer;
		this.foodShow = [ ];
	},
	
	randomFood : function(){
		var index = Math.floor( Math.random() * 10 );//for random meat
		return index;
	},
	
	pickUpFood : function(){
		this.schedule(function(){
			this.getFood();
			this.food.setNewPosition();
			this.gameLayer.addChild( this.food );
			this.foodShow.push( this.food );
			this.changeScore();
			this.calBarRatio ();
			this.findPigSize();			
			this.food.scheduleUpdate();
		}, 0.6 );//thing to add to meatShow	
	},
	
	getFood : function() {
		var m = this.randomFood();
			if( m == 0 ){
				this.food = new Egg( this.gameLayer.pig );
			}
			else if( m == 1 ){
				this.food = new Chicken( this.gameLayer.pig );
			}
			else if( m == 2 ){
				this.food = new Beef( this.gameLayer.pig );
			}
			else if( m == 3 ){
				this.food = new Fish( this.gameLayer.pig );
			}
			else if( m == 4 ){
				this.food = new IncreaseFatSyrup( this.gameLayer.pig );
			}
			else if( m == 5 ){
				this.food = new Beetroot( this.gameLayer.pig );
			}
			else if( m == 6 ){
				this.food = new Radish( this.gameLayer.pig );
			}
			else if( m == 7 ){
				this.food = new Eggplant( this.gameLayer.pig );
			}
			else if( m == 8 ){
				this.food = new Potato( this.gameLayer.pig );
			}
			else if( m == 9 ){
				this.food = new DecreaseFatSyrup( this.gameLayer.pig );
			}
			
			if(m >= 0 && m <= 4)
				this.meat = this.food;
			else
				this.veg = this.food;
	},
	
	changeScore : function() {
		this.setScore();
		this.gameLayer.setScore( Slide.score );
	},
	
	setScore : function() {
		if( this.meat != null && this.veg != null )
			Slide.score = this.meat.getScore() + this.veg.getScore();
		else if( this.veg == null )
			Slide.score = this.meat.getScore();
		else
			Slide.score = this.veg.getScore();
	},
	
	calBarRatio : function() {
		if( hitRatio > 0 && hitRatio <= 2 )
			this.adjustBarRatio();
		else 
			this.gameLayer.gameOver();
	},
	
	adjustBarRatio : function() {
		this.gameLayer.healthBar.setRatio( hitRatio );
	},
	 
	findPigSize : function(){ 
		if( hitRatio >= 0 && hitRatio < 0.2 )
			this.gameLayer.pig.setPigSize( 1 );
		else if( hitRatio >= 0.2 && hitRatio < 0.6 )
			this.gameLayer.pig.setPigSize( 2 );//c1
		else if( hitRatio >= 0.6 && hitRatio < 1.4 )
			this.gameLayer.pig.setPigSize( 3 );//normal
		else if( hitRatio >= 1.4 && hitRatio < 1.8 )
			this.gameLayer.pig.setPigSize( 4 );//thin1
		else if( hitRatio >= 1.8 && hitRatio < 2 )
			this.gameLayer.pig.setPigSize( 5 );//thin2
	},
	
});

var hitRatio  = 1;

Slide.score = 0;