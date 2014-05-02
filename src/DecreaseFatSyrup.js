var DecreaseFatSyrup = Veg.extend({
		ctor : function( pig ) {
			this._super( pig );
			this.initWithFile( 'images/down.png' );
		},
		
		getHitRatio : function(){
			return 0.5;
		},
});