var DecreaseFatSyrup = Meat.extend({
		ctor : function( pig ) {
			this._super( pig );
			this.initWithFile( 'images/down.png' );
		},
		
		getHitRatio : function(){
			return 0.5;
		},
});