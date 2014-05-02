var Beef = Meat.extend({
		ctor: function( pig ) {
			this._super( pig );
			this.initWithFile( 'images/m4.png' );
		},
		
		getHitRatio : function(){
			return 0.1;
		},
});