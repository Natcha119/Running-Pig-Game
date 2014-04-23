var score = 0;
var Slide = cc.Node.extend({
		ctor: function( gameLayer ) {
			this._super();
	
			this.mm = null;
	
			this.gameLayer = gameLayer;
	
			//this.meatGroup = [ new Egg(), new Chicken(), new Beef(), new Fish() ];	//all items
			this.meatShow = [];

			this.pickUpMeat();
	},
	
	randomMeat : function(){
		var index = Math.floor( Math.random() * 4 );//for random meat
		return index;
	},
	
	pickUpMeat : function(){
		this.schedule(function(){
			var m = this.randomMeat();
			if(m == 0){
				this.mm = new Egg( this.gameLayer.pig );
			}
			else if(m == 1){
				this.mm = new Chicken( this.gameLayer.pig );
			}
			else if(m == 2){
				this.mm = new Beef( this.gameLayer.pig );
			}
			else if(m == 3){
				this.mm = new Fish( this.gameLayer.pig );
			}
			this.mm.setNewPosition();
			this.gameLayer.addChild( this.mm );
			this.meatShow.push( this.mm );
			this.mm.scheduleUpdate();
		}, 2);//thing to add to meatShow
		
	},
	
	update: function( dt ) {
		
	},	
	
});