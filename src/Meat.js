var Meat = cc.Node.extend({
		ctor: function() {
			this._super();
	
			this.meat1 = cc.Sprite.create(' images/m1.png ');
			this.meat1.setPosition( 250, 400 );
			this.addChild( this.meat1 );
			
			this.meat2 = cc.Sprite.create(' images/m3.png ');
			this.addChild( this.meat2 );
			
			this.meat3 = cc.Sprite.create(' images/m4.png ');
			this.addChild( this.meat3 );
			
			this.meat4 = cc.Sprite.create(' images/m5.png ');
			this.addChild( this.meat4 );
			
			this.meat2 = cc.Sprite.create(' images/veg1.png ');
			this.meat2.setPosition( 320, 800 );
			this.addChild( this.meat2 );
		
			this.meatShow = [ this.meat2, this.meat1 ];
		
			//arr.splice( arr.indexOf( this.meat1 ) , 1 );
			this.meatGroup = [ this.meat1, this.meat2, this.meat2 ];	
			this.posX = [ 250, 470, 650, 700, 500 ];		
	},
		
	randomX : function(){
		var i = Math.floor( Math.random() * 5 );
		return this.posX[ i ];
	},
	
	randomNumber : function(){
		var index = Math.floor( Math.random() * 3 );//for random meat
		return index;
	},
	
	ramdomMeat : function(){
		var m = this.randomNumber();
		this.meatShow.push( this.meatGroup.slice( this.meatGroup.indexOf( m ), 1 ) );//thing to add in meatShow
		//return this.meatGroup[ m ];
	},
	
	update: function( dt ) {
		for( var i = 0; i < this.meatShow.length ; i++ ){
			if( this.meatShow[ i ].getPositionY() < 0 ){
				this.meatGroup.push( this.meatShow.slice( this.meatShow.indexOf( this.meatShow[ i ] ), 1 ) );//keep what out in group
				this.meatShow[ i ].setPosition( new cc.Point( this.randomX(), 800 ) );
			}
			this.meatShow[ i ].setPosition( new cc.Point( this.meatShow[ i ].getPositionX(), this.meatShow[ i ].getPositionY() - 4 ));
		}
	}
	
	
});