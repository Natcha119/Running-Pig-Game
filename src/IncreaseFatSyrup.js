var IncreaseFatSyrup = Meat.extend({
		ctor: function( pig ) {
			this._super( pig );
			this.initWithFile( 'images/up.png' );
		},
		
		getHitRatio : function(){
			return 0.5;
		},
});