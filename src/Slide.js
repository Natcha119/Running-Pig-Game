var score = 0;
var Slide = cc.Node.extend({
		ctor: function( gameLayer ) {
			this._super();
	
			this.food = null;
	
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
	
			this.food.setNewPosition();
			this.gameLayer.addChild( this.food );
			this.foodShow.push( this.food );
			this.food.scheduleUpdate();
		}, 2);//thing to add to meatShow
		
	},
	
	update: function( dt ) {
		
	},	
	
});