var Egg = Meat.extend({
		ctor: function( pig ) {
			this._super( pig );
			this.initWithFile( 'images/m1.png' );
		},
		
		getHitRatio : function(){
			return 0.1;
		},
});