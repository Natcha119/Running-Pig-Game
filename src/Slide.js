var Slide = cc.Node.extend({
		ctor: function() {
			this._super();
	
			this.meatGroup = [ new Egg(), new Chicken(), new Beef(), new Fish() ];	//all items
			this.meatShow = [];

			//this.posX = [ 250, 470, 650, 700, 500 ];	
			this.pickUpMeat();
	},
		
	randomX : function(){
		var i = Math.floor( Math.random() * 700 ) + 90;
		//return this.posX[ i ];
		return i;
	},
	
	randomMeat : function(){
		var index = Math.floor( Math.random() * 4 );//for random meat
		return index;
	},
	
	pickUpMeat : function(){
		this.schedule(function(){
			var m = this.randomMeat();
			//console.log(m);
			if(m == 0){
				var meat = new Egg( );
			}
			else if(m == 1){
				var meat = new Chicken();
			}
			else if(m == 2){
				var meat = new Beef();
			}
			else if(m == 3){
				var meat = new Fish();
			}
			meat.setPosition(new cc.Point(this.randomX(),800));
			this.addChild( meat );
			this.meatShow.push( meat );
			meat.scheduleUpdate();
		}, 2);//thing to add to meatShow
		
	},
	
	update: function( dt ) {
		//var count = 0;
		//console.log(this.meatShow.length);
		//for( var i = 0; i < this.meatShow.length ; i++ ){
			//this.meatShow[ i ].setPosition( new cc.Point( 100, 500 ));
		//}
	},
	
	
});