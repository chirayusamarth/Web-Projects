var app = angular.module('myApp', ['ngAnimate']);
app.controller('myCtrl', function($scope, $http) {

	$("#keyword").keypress(function(e){
		if(e.which==13){
			angular.element('#keyword').scope().getUsers();
		}
	});

    $scope.getUsers= function(){
    	if(!$scope.keyword){
			//$("#keyword").tooltip();
			$("#keyword").popover({
        	    content: 'Please type a keyword',
    	        placement: 'bottom'
	        }).popover('show');
		}
		else{
			$("#keyword").popover('destroy');
			$("#block").css("display", "none");
			//$scope.myValue1= true;
			//$scope.myValue= true;
	    	$("#users").css("background-color", "#365889");
	    	$("#users").css("color", "#FFFFFF");
	    	$("#pages").css("background-color", "#FFFFFF");
	    	$("#pages").css("color", "#000000");
	    	$("#events").css("background-color", "#FFFFFF");
	    	$("#events").css("color", "#000000");

	    	//alert($scope.types);
	    	
	    	$("#groups").css("background-color", "#FFFFFF");
	    	$("#groups").css("color", "#000000");
	    	$("#places").css("background-color", "#FFFFFF");
    		$("#places").css("color", "#000000");
    		$("#favs").css("background-color", "#FFFFFF");
    		$("#favs").css("color", "#000000");
    		$("#loading").css("display", "block");
    		
    		$("#detalb").css("display", "none");
			$("#album-progress").css("display", "block");
			$("#posts-progress").css("display", "block");
	    	$("#nodata").css("display", "none");
	    	$("#dataposts").css("display", "none");
	    	dataposts 	  		
    		$("#fav-table").css("display", "none");

    		$scope.type= 'user';
			$http({
			method: 'GET',
			url: 'search8.php',
			params: {
					keyword: $scope.keyword,
					type: 'user'
				}
			}).then(function successCallback(response){
				$("#loading").css("display", "none");
				if(response.data=="" || response.data.data.length==0){
					alert("No records available");
					$scope.response= response.data;
				}
				else{
					$scope.response= response.data;
//					$("#prev-btn").css("display", "none");
//					var prev= response.data.paging.previous;
					if(typeof response.data.paging.previous != 'undefined'){
						$("#prev-btn").css("visibility", "visible");
						console.log(response.data.paging.previous);
					}						
					else{
						$("#prev-btn").css("visibility", "hidden");

					}
					//var nex= response.data.paging.next;
					if(typeof response.data.paging.next != 'undefined'){
						$("#next-btn").css("visibility", "visible");
						console.log(response.data.paging.next);
					}
					else
						$("#next-btn").css("visibility", "hidden");					
					
		//			$scope.myValue1= false;				
					$("#block").css("display", "block");
					$("#loading").css("display", "none");
				}
			}, function errorCallback(response){
				alert("Error");
			});
		}

	}


	$scope.getPages= function(){
		//$scope.myValue1= true;
		//$scope.myValue= true;
		if(!$scope.keyword){
			$("#keyword").popover({
        	    content: 'Please type a keyword',
    	        placement: 'bottom'
	        }).popover('show');
		}
		else{
			$("#keyword").popover('destroy');
			$("#block").css("display", "none");
//			$scope.myValue1= true;
	    	$("#pages").css("background-color", "#365889");
	    	$("#pages").css("color", "#FFFFFF");
	    	$("#users").css("background-color", "#FFFFFF");
	    	$("#users").css("color", "#000000");
	    	$("#events").css("background-color", "#FFFFFF");
	    	$("#events").css("color", "#000000");
	    	$("#groups").css("background-color", "#FFFFFF");
	    	$("#groups").css("color", "#000000");
	    	$("#places").css("background-color", "#FFFFFF");
	    	$("#places").css("color", "#000000");
	    	$("#favs").css("background-color", "#FFFFFF");
    		$("#favs").css("color", "#000000");
	    	//alert($scope.types);
	    	$("#detalb").css("display", "none");
	    	//$scope.myValue= true;
	    	$("#loading").css("display", "block");
	    	$("#album-progress").css("display", "block");
	    	$("#posts-progress").css("display", "block");
	    	$("#nodata").css("display", "none");
	    	$("#dataposts").css("display", "none");
	    	$("#fav-table").css("display", "none");

	    	$scope.type= 'page';
			$http({
			method: 'GET',
			url: 'search8.php',
			params: {
					keyword: $scope.keyword,
					type: 'page'
				}
			}).then(function successCallback(response){
				$("#loading").css("display", "none");
				if(response.data=="" || response.data.data.length==0){
					alert("No records available");
				}
				else{
					$scope.response= response.data;

					if(typeof response.data.paging.previous != 'undefined'){
						$("#prev-btn").css("visibility", "visible");
						console.log(response.data.paging.previous);
					}						
					else{
						$("#prev-btn").css("visibility", "hidden");

					}
					//var nex= response.data.paging.next;
					if(typeof response.data.paging.next != 'undefined'){
						$("#next-btn").css("visibility", "visible");
						console.log(response.data.paging.next);
					}
					else
						$("#next-btn").css("visibility", "hidden");	

					
			//		$scope.myValue1= false;
					console.log(response);
					$("#block").css("display", "block");
					
					$("#loading").css("display", "none");
				}
			}, function errorCallback(response){
				alert("Error");
			});
		}
	}
	
	$scope.getEvents= function(){
		if(!$scope.keyword){
			$("#keyword").popover({
        	    content: 'Please type a keyword',
    	        placement: 'bottom'
	        }).popover('show');
			//alert("Please enter keyword to be searched");
		}
		else{
			$("#keyword").popover('destroy');
			$("#block").css("display", "none");
	    	$("#events").css("background-color", "#365889");
	    	$("#events").css("color", "#FFFFFF");
	    	$("#pages").css("background-color", "#FFFFFF");
	    	$("#pages").css("color", "#000000");
	    	$("#users").css("background-color", "#FFFFFF");
	    	$("#users").css("color", "#000000");
	    	$("#groups").css("background-color", "#FFFFFF");
	    	$("#groups").css("color", "#000000");
	    	$("#places").css("background-color", "#FFFFFF");
	    	$("#places").css("color", "#000000");
	    	$("#favs").css("background-color", "#FFFFFF");
    		$("#favs").css("color", "#000000");
	    	//alert($scope.types);
	    	$("#detalb").css("display", "none");
	    	$("#loading").css("display", "block");
	    	$("#album-progress").css("display", "block");
	    	$("#posts-progress").css("display", "block");
	    	$("#nodata").css("display", "none");
	    	$("#dataposts").css("display", "none");
	    	$("#fav-table").css("display", "none");

	    	$scope.type= 'event';
			$http({
			method: 'GET',
			url: 'search8.php',
			params: {
					keyword: $scope.keyword,
					type: 'event'
				}
			}).then(function successCallback(response){
				$("#loading").css("display", "none");
				if(response.data=="" || response.data.data.length==0){
					alert("No records available");
				}
				else{
					$scope.response= response.data;

					if(typeof response.data.paging.previous != 'undefined'){
						$("#prev-btn").css("visibility", "visible");
						console.log(response.data.paging.previous);
					}						
					else{
						$("#prev-btn").css("visibility", "hidden");

					}
					//var nex= response.data.paging.next;
					if(typeof response.data.paging.next != 'undefined'){
						$("#next-btn").css("visibility", "visible");
						console.log(response.data.paging.next);
					}
					else
						$("#next-btn").css("visibility", "hidden");	

					$("#block").css("display", "block");
					$("#loading").css("display", "none");
				}
			}, function errorCallback(response){
				alert("Error");
			});
		}
	}

	$scope.getGroups= function(){
		if(!$scope.keyword){
			//alert("Please enter keyword to be searched");
			$("#keyword").popover({
        	    content: 'Please type a keyword',
    	        placement: 'bottom'
	        }).popover('show');
		}
		else{
			$("#keyword").popover('destroy');
			$("#block").css("display", "none");
			$("#groups").css("background-color", "#365889");
	    	$("#groups").css("color", "#FFFFFF");
	    	$("#events").css("background-color", "#FFFFFF");
	    	$("#events").css("color", "#000000");
	    	$("#pages").css("background-color", "#FFFFFF");
	    	$("#pages").css("color", "#000000");
	    	$("#users").css("background-color", "#FFFFFF");
	    	$("#users").css("color", "#000000");
	    	$("#places").css("background-color", "#FFFFFF");
	    	$("#places").css("color", "#000000");
	    	$("#favs").css("background-color", "#FFFFFF");
    		$("#favs").css("color", "#000000");
	    	//alert($scope.types);
	    	$scope.type= 'group';
	    	$("#detalb").css("display", "none");
	    	$("#loading").css("display", "block");
	    	$("#album-progress").css("display", "block");
	    	$("#posts-progress").css("display", "block");
	    	$("#nodata").css("display", "none");
	    	$("#dataposts").css("display", "none");
	    	$("#fav-table").css("display", "none");
			$http({
			method: 'GET',
			url: 'search8.php',
			params: {
					keyword: $scope.keyword,
					type: 'group'
				}
			}).then(function successCallback(response){
				$("#loading").css("display", "none");
				if(response.data=="" || response.data.data.length==0){
					alert("No records available");
				}
				else{
					$scope.response= response.data;

					if(typeof response.data.paging.previous != 'undefined'){
						$("#prev-btn").css("visibility", "visible");
						console.log(response.data.paging.previous);
					}						
					else{
						$("#prev-btn").css("visibility", "hidden");

					}
					//var nex= response.data.paging.next;
					if(typeof response.data.paging.next != 'undefined'){
						$("#next-btn").css("visibility", "visible");
						console.log(response.data.paging.next);
					}
					else
						$("#next-btn").css("visibility", "hidden");	

					$("#block").css("display", "block");
					$("#loading").css("display", "none");
				}
			}, function errorCallback(response){
				alert("Error");
			});
		}
	}
navigator.geolocation.getCurrentPosition(success, error, options);

var options = {
				enableHighAccuracy: true,
				timeout: 5000,
				maximumAge: 0
			};
			
			var crd;
			var p;
			function success(pos) {
				crd = pos.coords;

				console.log('Your current position is:');
				console.log(`Latitude : ${crd.latitude}`);
				console.log(`Longitude: ${crd.longitude}`);
				console.log(`More or less ${crd.accuracy} meters.`);

		    	$scope.p= {
		    		//keyword: $scope.keyword,
					type: 'place',
					center: `${crd.latitude}`+","+`${crd.longitude}`,
					distance: `${crd.accuracy}`
		    	}
		    };

			function error(err) {
				console.warn(`ERROR(${err.code}): ${err.message}`);
			};

	$scope.getPlaces= function(){
		if(!$scope.keyword){
			//alert("Please enter keyword to be searched");
			$("#keyword").popover({
        	    content: 'Please type a keyword',
    	        placement: 'bottom'
	        }).popover('show');
		}
		else{
			$("#keyword").popover('destroy');
			$("#block").css("display", "none");
			$("#places").css("background-color", "#365889");
	    	$("#places").css("color", "#FFFFFF");
	    	$("#groups").css("color", "#000000");
	    	$("#groups").css("background-color", "#FFFFFF");
	    	$("#events").css("background-color", "#FFFFFF");
	    	$("#events").css("color", "#000000");
	    	$("#pages").css("background-color", "#FFFFFF");
	    	$("#pages").css("color", "#000000");
	    	$("#users").css("background-color", "#FFFFFF");
	    	$("#users").css("color", "#000000");
	    	$("#favs").css("background-color", "#FFFFFF");
    		$("#favs").css("color", "#000000");
	    	//alert($scope.types);
	    	$scope.type= 'place';
	    	$("#loading").css("display", "block");
	    	$("#detalb").css("display", "none");
	    	$("#album-progress").css("display", "block");
	    	$("#posts-progress").css("display", "block");
	    	$("#nodata").css("display", "none");
	    	$("#dataposts").css("display", "none");
	    	$("#fav-table").css("display", "none");
		    	console.log($scope.p);
		    	$scope.p.keyword= $scope.keyword;
		    	console.log($scope.p);
				$http({
				method: 'GET',
				url: 'search8.php',
				params: $scope.p
				}).then(function successCallback(response){
					$("#loading").css("display", "none");
					if(response.data=="" || response.data.data.length==0){
						alert("No records available");
					}
					else{
						$scope.response= response.data;

						if(typeof response.data.paging.previous != 'undefined'){
							$("#prev-btn").css("visibility", "visible");
							console.log(response.data.paging.previous);
						}						
						else{
							$("#prev-btn").css("visibility", "hidden");

						}
						//var nex= response.data.paging.next;
						if(typeof response.data.paging.next != 'undefined'){
							$("#next-btn").css("visibility", "visible");
							console.log(response.data.paging.next);
						}
						else
							$("#next-btn").css("visibility", "hidden");	

						$("#block").css("display", "block");
						$("#loading").css("display", "none");
					}
				}, function errorCallback(response){
					alert("Error");
				});
		

		}
	}

	
	$scope.getDetails= function(idd, name, imgurl, type, tab){
	//	alert(idd);
		
		$("#block").css("display", "none");
		$("#detalb").css("display", "block");
		$("#album-progress").css("display", "block");
		$("#posts-progress").css("display", "block");
		//$scope.myValue1=true;
		$("#fav-table").css("display", "none");
		$scope.name= name;
		$scope.imgurl= imgurl;
		$scope.id= idd;
		$scope.type=type;
		$scope.tab= tab;

		if($scope.type=='event'){
			$("#detalb").css("display", "block");
			$("#loading").css("display", "none");
			$scope.res="";
			setTimeout(function(){
				$("#album-progress").css("display", "none");
				$("#posts-progress").css("display", "none");

				$("#nodata").css("display", "block");
				$("#dataposts").css("display", "block");
			}, 500);
	

		}
		else{
			$http({
				method: 'GET',
				url: 'search8.php',
				params:{
						id: idd,
					}
			}).then(function successCallback(res){
				
				$("#detalb").css("display", "block");
				$("#loading").css("display", "none");
				$("#album-progress").css("display", "none");
				$("#posts-progress").css("display", "none");

				$scope.res= res.data;

				$("#nodata").css("display", "block");
				$("#dataposts").css("display", "block");
				//$scope.myValue=false;
				//$scope.myValue1=true;
				

				/*for(var i=0;i<res.data.albums.data.length;i++){
					if("photos" in res.data.albums.data[i]){
						for(var j=0;j<res.data.albums.data[i].photos.data.length;j++){
							var high_imgid= res.data.albums.data[i].photos.data[j].id;
							$scope.hdimg[high_imgid]= getImage(high_imgid);
						}
					}
				}*/
				/*if("albums" in res.data){
					var firstAlbum= res.data.albums.data[0];
					if("photos" in firstAlbum){
						for(var i=0; i < firstAlbum.photos.data.length;i++){
							var imgid= firstAlbum.photos.data[i];
							getFirstImage(imgid)
						}
					}
				}*/
				console.log(res);
				//console.log(res.data.albums.data[0].name);
			}, function errorCallback(response){

			});
		}
	}

	$scope.save= function save(url1, name1, id1, type1) {
		//var index= id1;
		var classw= $("#"+id1).attr('class');
		
		if($("#"+id1).hasClass("glyphicon-star")){
			$("#"+id1).toggleClass('glyphicon-star glyphicon-star-empty');
			
			$("#"+id1).removeClass('yellow');
			$scope.deleteFav(id1);
			$("#fav-table").css("display", "none");
		}
		else{
			$("#"+id1).toggleClass('glyphicon-star-empty glyphicon-star');

			$("#"+id1).addClass('yellow');
		    var val={
	    		url: url1,
	    		name: name1,
	    		type: type1,
	    		id: id1
		    }
		    var myJSON = JSON.stringify(val);
		    if (typeof(Storage) !== "undefined") {
		    // Store
		    	localStorage.setItem(id1,myJSON);
		    // Retrieve
		    //console.log(JSON.parse(localStorage.getItem(id)));
		 //   document.getElementById("result").innerHTML = localStorage.getItem("lastname");
			} 
			else {
			    document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
			}
		}
	}

	$scope.isFavorite= function(idd){
		var isFav= localStorage.getItem(idd) != null;
		return isFav;
	}

	$scope.getFavorites= function(){
		
//		console.log(favArr[0]);
		//console.log(favArr);
		$("#keyword").popover('destroy');
		$("#favs").css("background-color", "#365889");
	    $("#favs").css("color", "#FFFFFF");
	    $("#block").css("display", "none");
		$("#places").css("background-color", "#FFFFFF");
    	$("#places").css("color", "#000000");
    	$("#groups").css("color", "#000000");
    	$("#groups").css("background-color", "#FFFFFF");
    	$("#events").css("background-color", "#FFFFFF");
    	$("#events").css("color", "#000000");
    	$("#pages").css("background-color", "#FFFFFF");
    	$("#pages").css("color", "#000000");
    	$("#users").css("background-color", "#FFFFFF");
    	$("#users").css("color", "#000000");
    	$("#detalb").css("display", "none");
    	//$scope.myValue= true;
    	$scope.type= 'favorites';
    	$("#loading").css("display", "none");
		if(localStorage.length==0)
			$("#fav-table").css("display", "none");

		else{
			var favArr=[];
			for ( var i = 0, len = localStorage.length; i < len; ++i ) {
 				favArr.push((JSON.parse(localStorage.getItem( localStorage.key( i ) ) )));
			}
			$("#fav-table").css("display", "block");

	    	$scope.tb_response= favArr;
	    }
	}

	$scope.deleteFav= function(idd){
		localStorage.removeItem(idd);
		if(localStorage.length==0)
			$("#fav-table").css("display", "none");

		else{
			var favArr=[];
			for ( var i = 0, len = localStorage.length; i < len; ++i ) {
					favArr.push((JSON.parse(localStorage.getItem( localStorage.key( i ) ) )));
			}
			$("#fav-table").css("display", "block");

			$scope.tb_response= favArr;
		}
	}

	$scope.nextPage= function(url1){
		$http({
			method: 'GET',
			url: url1,
		}).then(function successCallback(response){
			if(response.data.data.length==0){
				alert("No more records available");
			}
			else{
				$scope.response= response.data;

				//var prev= response.data.paging.previous;
				if(typeof response.data.paging.previous != 'undefined'){
					$("#prev-btn").css("visibility", "visible");
					console.log(response.data.paging.previous);
				}
				else{
					$("#prev-btn").css("visibility", "hidden");

				}
	//			var nex= response.data.paging.next;
				if(typeof response.data.paging.next != 'undefined'){
					$("#next-btn").css("visibility", "visible");
					console.log(response.data.paging.next);
				}
				else{
					$("#next-btn").css("visibility", "hidden");

				}
			}	
			//console.log(response);
			//console.log(response.data.albums.data[0].name);
		}, function errorCallback(response){
				alert("No more records available");
		});
	}

	$scope.previousPage= function(url1){
		$http({
			method: 'GET',
			url: url1,
		}).then(function successCallback(response){
			if(response.data.data.length==0){
				alert("No records available");
			}
			else{
				$scope.response= response.data;

				//$("#prev-btn").css("display", "none");
				//$("#next-btn").css("display", "none");	
				
				if(typeof response.data.paging.previous != 'undefined'){
					$("#prev-btn").css("visibility", "visible");
					console.log(response.data.paging.previous);
				}				
				else{
					$("#prev-btn").css("visibility", "hidden");
				}

				if(typeof response.data.paging.next != 'undefined'){
					$("#next-btn").css("visibility", "visible");
					console.log(response.data.paging.next);
				}
				else{
					$("#next-btn").css("visibility", "hidden");
				}
			}
			//console.log(response);
			//console.log(response.data.albums.data[0].name);
		}, function errorCallback(response){
			alert("Error");
		});	
	}
	$scope.postTo= function(name, imgurl){
		FB.ui({
		 app_id: 1861317240782439,
		 method: 'feed',
		 link: window.location.href,
		 picture: imgurl,
		 name: name,
		 caption: "FB Search From USC CSCI 571",
		 }, function(response){
		 if (response && !response.error_message)
		 	alert("Posted");
		 else
		 	alert("Not Posted");
		});
	}

	$scope.goBack= function(tab){
		$("#detalb").css("display", "none");
		if(tab=="favorites"){
			$("#fav-table").css("display", "block");	
		}
		else{	
			$("#block").css("display", "block");
		}
		$("#album-progress").css("display", "block");
		$("#posts-progress").css("display", "block");
	    $("#nodata").css("display", "none");
	    $("#dataposts").css("display", "none");
	}

	$scope.clearForm= function(){
		$scope.keyword='';
		$("#keyword").val('');
		$("#detalb").css("display", "none");
		//$scope.myValue= true;
    	$("#loading").css("display", "none");
    	$("#block").css("display", "none");
    	$("#fav-table").css("display", "none");	
    	$("#users").css("background-color", "#365889");
    	$("#users").css("color", "#FFFFFF");
    	$("#pages").css("background-color", "#FFFFFF");
    	$("#pages").css("color", "#000000");
    	$("#events").css("background-color", "#FFFFFF");
    	$("#events").css("color", "#000000");
    	$("#groups").css("background-color", "#FFFFFF");
    	$("#groups").css("color", "#000000");
    	$("#places").css("background-color", "#FFFFFF");
		$("#places").css("color", "#000000");
		$("#favs").css("background-color", "#FFFFFF");
		$("#favs").css("color", "#000000");
	}

	$scope.hdimg={};
	$scope.getImage= function(idd, x, r){
		//alert(idd);
	/*	var index=idd;
		var hdimgurl= "https://graph.facebook.com/v2.8/"+idd+"/picture?access_token=EAAac27DzfmcBAOGqgSVxeFsQQXCcdmi41YF36fcQoMHVxdn9ce86XaRLE1sNxfk3w0K1PZAZBH1PE5BxaQBYlalgOZCb4wnZABL3diIR9ZCSXIRhPzd6IjYZBEUsD7JlyR7XBANi1sUvAzfPLk0X0A21pWKgZARTQMZD";
		$("#"+index).html('<img src='+hdimgurl+'  width="470" height="500" />')*/
		$http({
			method: 'GET',
			url: 'search8.php',
			params: {
				hdid: idd
			}
		}).then(function successCallback(response){
			
			var url= response.data.id+"?access_token=EAAac27DzfmcBAOGqgSVxeFsQQXCcdmi41YF36fcQoMHVxdn9ce86XaRLE1sNxfk3w0K1PZAZBH1PE5BxaQBYlalgOZCb4wnZABL3diIR9ZCSXIRhPzd6IjYZBEUsD7JlyR7XBANi1sUvAzfPLk0X0A21pWKgZARTQMZD";
			console.log(url);
			$scope.hdimg[idd]= url;
			var y= x.photos.data;
			var prev= r.data;
			for(var i=0;i<y.length;i++){
				if(y[i].id == prev[0].photos.data[0].id || y[i].id == prev[0].photos.data[1].id){
					$("#"+y[i].id).css("display", "block");
				}
			}
			//console.log(response.data.albums.data[0].name);
		}, function errorCallback(response){
			alert("Error");
		});
	}

	$scope.showhideAlbums= function(x, r){
		var y= x.photos.data;
		var prev= r.data;

		var count=0;
		for(var i=0;i<y.length;i++){
			var rows= document.getElementById(y[i].id);
			if(rows.style.display=='block'){
				rows.style.display='none';
				count= count+1;
			}	
		}
		/*for(var i=0;i<y.length;i++){
			var rows= document.getElementById(y[i].id);
			if(rows.style.display=='none')
				rows.style.display='block';
			else
				rows.style.display='none';
		}*/
		if(count==0){
			for(var j=0;j<prev.length;j++){
				if("photos" in prev[j]){
					var prev_y= prev[j].photos.data;
					var k=0, i=0;	
					for(k=0, i=0;k<prev_y.length && i<y.length;k++, i++){
							var rows= document.getElementById(y[i].id);
							var rows1= document.getElementById(prev_y[k].id);
							if(y[i].id!=prev_y[k].id){
								rows1.style.display='none';
							}
							else{					
								rows.style.display='block';
							}
					}
					if(k < prev_y.length && i >= y.length){
							rows1= document.getElementById(prev_y[k].id);
							rows1.style.display='none';
					}
				}
			}
		}
	}
});	