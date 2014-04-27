var Slide = cc.Node.extend({
		ctor: function( gameLayer ) {
			this._super();
	
			this.food = null;
			
			this.meat = null;
			
			this.veg = null;
	
			this.gameLayer = gameLayer;
	
			//this.meatGroup = [ new Egg(), new Chicken(), new Beef(), new Fish() ];	//all items
			this.foodShow = [];

			this.pickUpFood();
	},
	
	randomFood : function(){
		var index = Math.floor( Math.random() * 8 );//for random meat
		return index;
	},
	
	pickUpFood : function(){
		this.schedule(function(){
			var m = this.randomFood();
			if(m == 0){
				this.food = new Egg( this.gameLayer.pig );
			}
			else if(m == 1){
				this.food = new Chicken( this.gameLayer.pig );
			}
			else if(m == 2){
				this.food = new Beef( this.gameLayer.pig );
			}
			else if(m == 3){
				this.food = new Fish( this.gameLayer.pig );
			}
			else if(m == 4){
				this.food = new Potato( this.gameLayer.pig );
			}
			else if(m == 5){
				this.food = new Beetroot( this.gameLayer.pig );
			}
			else if(m == 6){
				this.food = new Radish( this.gameLayer.pig );
			}
			else if(m == 7){
				this.food = new Eggplant( this.gameLayer.pig );
			}
			
			if(m >= 0 && m <= 3)
				this.meat = this.food;
			else
				this.veg = this.food;
	
			this.food.setNewPosition();
			this.gameLayer.addChild( this.food );
			this.foodShow.push( this.food );
			this.setScore();
			this.gameLayer.setScore( Slide.score );
			this.food.scheduleUpdate();
		}, 2);//thing to add to meatShow
		
	},
	
	update: function( dt ) {

	},	
	
	setScore : function(  ){
		if( this.meat != null && this.veg != null )
			Slide.score = this.meat.getScore() + this.veg.getScore();
		else if( this.veg == null )
			Slide.score = this.meat.getScore();
		else
			Slide.score = this.veg.getScore();
		//Slide.score += s;
	},
	 
});

Slide.score = 0;