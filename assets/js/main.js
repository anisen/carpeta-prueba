

ventana . fbAsyncInit = función () { 
	FB . init ({ 
		Id de aplicación       : '485536455130563' , 
		galletas      : verdad , 
		XFBML       : cierto , 
		la versión     : 'v2.8' }); 
	FB . AppEvents . logPageView (); };      



	( Función ( d , s , ID ) { var js , FJS = d . GetElementsByTagName ( s ) [ 0 ]; si ( d . GetElementById ( ID )) { retorno ;} 
		js = d . CreateElement ( s ); js . ID = Identificación ; 
		js . src = "//connect.facebook.net/en_US/sdk.js" ; 
		FJS . parentNode . insertBefore ( js , FJS ); } ( documento , 'guión' , 'facebook-jssdk' )); 
	

	FB.getLoginStatus(function(response) {
		statusChangeCallback(response);
	});




	function checkLoginState() {
		FB.getLoginStatus(function(response) {
			statusChangeCallback(response);
		});
	}
