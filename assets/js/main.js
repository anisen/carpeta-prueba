
FB.getLoginStatus(function(response) {
	statusChangeCallback(response);
});


{ 
	Status : 'conectado' , 
	authResponse : { 
		accessToken : '...' , 
		expiresIn : '...' , 
		signedRequest : '...' , 
		ID de usuario : '...' } 
	}   

	
function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}
