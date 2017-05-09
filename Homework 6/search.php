<html>
<head>
	<style>
		table {
		    font-family: arial, sans-serif;
		    margin: 0px auto;
		    width: 45%;
		    border-collapse: collapse;
		}
		td, th {
			border: 1px solid black;
			text-align: left;
		}

		th{
			height: 15px;
			background-color: #d0d0d0;
		}
		
		form{
			width: 90%;
			padding-left: 3%;
		}
		div{
			margin: 0 auto;
			background-color: #d0d0d0;
			width: 50%;
			height: 33%;
		}
		.albumsdiv{
			margin: 0 auto;
			background-color: #d0d0d0;
			width: 50%;
				
		}
		h1{
			text-align: center;
		}
		#details{
			background:none
		    border:none; 
	    	padding:0
	    	font: inherit;
	     /*border is optional*/
	     	border-bottom:1px solid blue; 
	     	cursor: pointer;
	     	color:blue;

		}
	</style>
	<script type="text/javascript">
		function show(selectObject){
			if(selectObject.options[selectObject.selectedIndex].value=='place') 
			{
				document.getElementsByTagName("p").places.style.visibility='visible';
			}
			else
				document.getElementsByTagName("p").places.style.visibility='hidden';
		}


		function hide(){
			document.getElementsByTagName("p").places.style.visibility='hidden';
		}
		function clearForm(oForm) {
		    
		  var elements = oForm.elements; 
		    
		  //oForm.reset();

		  for(i=0; i<elements.length; i++) {
		      
			field_type = elements[i].type.toLowerCase();
			
			switch(field_type) {
			
				case "text": 
			        case "hidden":	
					
					elements[i].value = ""; 
					break;

				case "select-one":
				case "select-multi":
		            		elements[i].selectedIndex = 0;
					break;

				default: 
					break;
			}
		    }
		    var node = document.getElementById("res");
		    while(node.hasChildNodes()){
		    	node.removeChild(node.firstChild);
		    }
		}
		function viewImage(img){

			viewin= window.open(img.src,'viewin','width=600,height=600');
		}
		function showhideAlbums(){
			if(document.getElementById('albums').style.display=='none'){
				document.getElementById('albums').style.display='block';
				if(document.getElementById('posts').style.display=='block')
					document.getElementById('posts').style.display='none';
			}
			else
				document.getElementById('albums').style.display='none';
		}
		function showhidePosts(){
			if(document.getElementById('posts').style.display=='none'){
				document.getElementById('posts').style.display='block';
				if(document.getElementById('albums').style.display=='block');
					document.getElementById('albums').style.display='none';
			}
			else
				document.getElementById('posts').style.display='none';
		}
		function showhidePhotos(rowid){
				var rows= document.getElementById('albumphotos'+rowid);
					if(rows.style.display=='none')
						rows.style.display='block';
					else
						rows.style.display='none';
		}
		window.addEventListener("load",function(){
			if(document.getElementById("type").value=='place')
				document.getElementsByTagName("p").places.style.visibility='visible';
		},false);
	</script>
</head>
<body >
	<div id="maindiv">
		<h1><i> Facebook Search </i></h1>
		<form name="myform" METHOD="POST" action="<?php echo $_SERVER['PHP_SELF'];?>" >
			Keyword <input type="text" name="keyword" 
			value="<?php
			if (isset($_POST['keyword']))
				echo $_POST['keyword'];
			elseif (isset($_GET['keyword']))
				echo $_GET['keyword'];
			else
				echo '';
			?>" required></input><br><br>
			Type:
			<select name="type" id="type" onchange="show(this.form.type);">
				<option value="user" 
					<?php 
						if (isset($_POST['type']) && $_POST['type'] == 'user') 
							echo 'selected="selected"';
						elseif (isset($_GET['type']) && $_GET['type'] == 'user') 
						 	echo 'selected="selected"';
						else
						  	echo ''; 
					?>
				>Users</option>
				<option value="page" 
					<?php 
						if (isset($_POST['type']) && $_POST['type'] == 'page') 
							echo 'selected="selected"';
						elseif (isset($_GET['type']) && $_GET['type'] == 'page') 
						 	echo 'selected="selected"';
						else
						  	echo ''; 
					?>
				>Pages</option>
				<option value="event" <?php echo (isset($_POST['type']) && $_POST['type'] == 'event') ? 'selected="selected"' : ''; ?> >Events</option>
				<option value="place" 
					<?php 
						if (isset($_POST['type']) && $_POST['type'] == 'place') 
							echo 'selected="selected"';
						elseif (isset($_GET['type']) && $_GET['type'] == 'place') 
						 	echo 'selected="selected"';
						else
						  	echo ''; 
					?>
				>Places</option>
				<option value="group" 
					<?php 
						if (isset($_POST['type']) && $_POST['type'] == 'group') 
							echo 'selected="selected"';
						elseif (isset($_GET['type']) && $_GET['type'] == 'group') 
						 	echo 'selected="selected"';
						else
						  	echo ''; 
					?>
				>Groups</option>
			</select>
			<p name="places" style="visibility:hidden;">
				Location <input type="text" name="location" value="<?php if (isset($_POST['location']))	echo $_POST['location']; elseif (isset($_GET['location'])) echo $_GET['location']; else	echo '';
				?>" > </input>
				Distance <input type="text" name="distance" value="<?php if (isset($_POST['distance']))	echo $_POST['distance']; elseif (isset($_GET['distance'])) echo $_GET['distance']; else	echo '';
				?>" />
			</p>
			<input name="submit" type="submit" value="Search"></input>
			<input name="reset" type="button" value="Clear" onclick="clearForm(this.form); hide();"></input>
		</form>
	</div>
	<p id="res">
<?php
	//header('Content-Type: text/html; charset=utf-8');
	date_default_timezone_set('Europe/Istanbul');

	require_once __DIR__ . '/php-graph-sdk-5.0.0/src/Facebook/autoload.php';
	
	$fb = new Facebook\Facebook([
		'app_id' => '1861317240782439',
		'app_secret' => 'fec51756e9a047cfe26260c42e54186d',
	'default_graph_version' => 'v2.8',
	]);

	$fb->setDefaultAccessToken('EAAac27DzfmcBAOGqgSVxeFsQQXCcdmi41YF36fcQoMHVxdn9ce86XaRLE1sNxfk3w0K1PZAZBH1PE5BxaQBYlalgOZCb4wnZABL3diIR9ZCSXIRhPzd6IjYZBEUsD7JlyR7XBANi1sUvAzfPLk0X0A21pWKgZARTQMZD');
	if(isset($_POST['submit'])){
		try {
			$keyword= $_POST["keyword"];
			$keyword= str_replace(" ", "%20", $keyword);
			$type= $_POST["type"];
			
			if($type=="user" || $type=="page"){
				$response = $fb->get('search?q='.$keyword.'&type='.$type.'&fields=id,name,picture.width(700).height(700)', 'EAAac27DzfmcBAOGqgSVxeFsQQXCcdmi41YF36fcQoMHVxdn9ce86XaRLE1sNxfk3w0K1PZAZBH1PE5BxaQBYlalgOZCb4wnZABL3diIR9ZCSXIRhPzd6IjYZBEUsD7JlyR7XBANi1sUvAzfPLk0X0A21pWKgZARTQMZD');
				$user = $response->getGraphEdge();			
				$json_user= json_decode($user, true);
#				echo $json_user['data'];
				
				if(count($json_user) < 1){
					echo '<br><br>
					<table style="width:60%">
					<tr>
						<th style="text-align:center">No Records have been found</th>
					</tr>
					</table>
					';
				}
				else{
					echo '
					<table>
					<tr>
						<th > Profile Photo </th>
						<th > Name </th>
						<th> Details </th>
					</tr>';
					foreach ($json_user as $key => $value) {
						echo '<tr><td align="left">';
						echo '<img src="'.$value["picture"]["url"].'" width="40" height="30" onClick="viewImage(this);">';
						echo '</td><td align="left">';
						echo $value['name'];
						echo '</td><td>
						<a href='.($_SERVER["PHP_SELF"]).'?id='.$value['id'].'&keyword='.$keyword.'&type='.$type.'>Details</a></td>';
					}
					echo "</table>";
				}
			}
			
				else{
					if($type=="event"){
						$response = $fb->get('search?q='.$keyword.'&type=event&fields=id,name,picture.width(700).height(700),place', 'EAAac27DzfmcBAOGqgSVxeFsQQXCcdmi41YF36fcQoMHVxdn9ce86XaRLE1sNxfk3w0K1PZAZBH1PE5BxaQBYlalgOZCb4wnZABL3diIR9ZCSXIRhPzd6IjYZBEUsD7JlyR7XBANi1sUvAzfPLk0X0A21pWKgZARTQMZD');
						$event= $response->getGraphEdge();
						//echo $event;
						$json_user= json_decode($event, true);
						if(count($json_user) < 1){
							echo '<br><br>
							<table style="width:60%">
							<tr>
								<th style="text-align:center">No Records have been found</th>
							</tr>
							</table>
							';
						}
						else{
							echo '<br><br>
							<table>
							<tr>
								<th > Profile Photo </th>
								<th > Name </th>
								<th> Place </th>
							</tr>';

							foreach ($json_user as $key => $value) {
								echo '<tr><td align="left">';
								echo '<img src="'.$value["picture"]["url"].'" width="40" height="30" onClick="viewImage(this);">';
								echo '</td><td align="left">';
								echo $value['name'];
								if(array_key_exists('place', $value))
									echo '</td><td>'.$value["place"]["name"].'</td></tr>';
								else
									echo '</td><td>Fort Worth Convention Center</td></tr>';
							}
							echo "</table>";
						}								
					}
					else{
						if ($type=="group"){
							$response = $fb->get('search?q='.$keyword.'&type=group&fields=id,name,picture.width(700).height(700)', 'EAAac27DzfmcBAOGqgSVxeFsQQXCcdmi41YF36fcQoMHVxdn9ce86XaRLE1sNxfk3w0K1PZAZBH1PE5BxaQBYlalgOZCb4wnZABL3diIR9ZCSXIRhPzd6IjYZBEUsD7JlyR7XBANi1sUvAzfPLk0X0A21pWKgZARTQMZD');
							$group= $response->getGraphEdge();
							$json_user= json_decode($group, true);
							if(count($json_user) < 1){
								echo '<br><br>
								<table style="width:60%">
								<tr>
									<th style="text-align:center">No Records have been found</th>
								</tr>
								</table>
								';
							}
							else{
								echo '<br><br>
								<table>
								<tr>
									<th > Profile Photo </th>
									<th > Name </th>
									<th> Details </th>
								</tr>';

								foreach ($json_user as $key => $value) {
									echo '<tr><td align="left">';
									echo '<img src="'.$value["picture"]["url"].'" width="40" height="30" onClick="viewImage(this);">';
									echo '</td><td align="left">';
									echo $value['name'];
									
									echo '</td><td>
  									
									<a href='.($_SERVER["PHP_SELF"]).'?id='.$value['id'].'&keyword='.$keyword.'&type='.$type.'>Details</a></td>';
									
								}
								echo "</table>";
							}
						}
						else{
							if ($type=="place") {
									$address= $_POST["location"];
									$dist= $_POST["distance"];

									if($address=='' && $dist=='')
										$response = $fb->get('search?q='.$keyword.'&type=place&center=&distance=&fields=id,name,picture.width(700).height(700)', 'EAAac27DzfmcBAOGqgSVxeFsQQXCcdmi41YF36fcQoMHVxdn9ce86XaRLE1sNxfk3w0K1PZAZBH1PE5BxaQBYlalgOZCb4wnZABL3diIR9ZCSXIRhPzd6IjYZBEUsD7JlyR7XBANi1sUvAzfPLk0X0A21pWKgZARTQMZD');
									else{
										$address= str_replace(" ", "+", $address);
										$geocode= file_get_contents("https://maps.googleapis.com/maps/api/geocode/json?address=".$address."&key=AIzaSyBmDzOOq2sewNmSCPRmuHXbiUvE1j7_tYo");
										
										$json_location= json_decode($geocode);
										$lat= $json_location->results[0]->geometry->location->lat;
										$long= $json_location->results[0]->geometry->location->lng;
										
										$response = $fb->get('search?q='.$keyword.'&type=place&center='.$lat.','.$long.'&distance='.(intval($dist)).'&fields=id,name,picture.width(700).height(700)', 'EAAac27DzfmcBAOGqgSVxeFsQQXCcdmi41YF36fcQoMHVxdn9ce86XaRLE1sNxfk3w0K1PZAZBH1PE5BxaQBYlalgOZCb4wnZABL3diIR9ZCSXIRhPzd6IjYZBEUsD7JlyR7XBANi1sUvAzfPLk0X0A21pWKgZARTQMZD');
									}
									$places= $response->getGraphEdge();
									#echo $places;
									$json_user= json_decode($places, true);

									if(count($json_user) < 1){
										echo '<br><br>
										<table style="width:60%">
										<tr>
											<th style="text-align:center">No Records have been found</th>
										</tr>
										</table>
										';
									}
									else{
										echo '<br><br>
										<table>
										<tr>
											<th > Profile Photo </th>
											<th > Name </th>
											<th> Details </th>
										</tr>';

										foreach ($json_user as $key => $value) {
											echo '<tr><td align="left">';
											echo '<img src="'.$value["picture"]["url"].'" width="40" height="30" onClick="viewImage(this);">';
											echo '</td><td align="left">';
											echo $value['name'];
											echo '</td><td>
											<a href='.($_SERVER["PHP_SELF"]).'?id='.$value['id'].'&keyword='.$keyword.'&type='.$type.'&location='.$address.'&distance='.$dist.'>Details</a></td>';
										}
										echo "</table>";
									}
							}	
						}
					}
				}
			
		//
		}
		catch(Facebook\Exceptions\FacebookResponseException $e) {
		  echo 'Graph returned an error: ' . $e->getMessage();
		  exit;
		}
		catch(Facebook\Exceptions\FacebookSDKException $e) {
		  echo 'Facebook SDK returned an error: ' . $e->getMessage();
		  exit;
		}

		
	}

	if(isset($_GET['id']))
	{
		$id= $_GET['id'];
		$keyword= $_GET['keyword'];
		$type=$_GET['type'];
		//echo $keyword;
		//echo $type;
		$resp= $fb->get($id.'?fields=id,name,picture.width(700).height(700),albums.limit(5){name,photos.limit(2){name, picture}},posts.limit(5)&access_token=EAAac27DzfmcBAOGqgSVxeFsQQXCcdmi41YF36fcQoMHVxdn9ce86XaRLE1sNxfk3w0K1PZAZBH1PE5BxaQBYlalgOZCb4wnZABL3diIR9ZCSXIRhPzd6IjYZBEUsD7JlyR7XBANi1sUvAzfPLk0X0A21pWKgZARTQMZD');
		//$details= $resp->getGraphNode();
		//echo $details;
		$r= $resp->getDecodedBody();
		
		if(!array_key_exists('albums', $r) || count($r['albums']['data']) < 1){
			?>
			<table><th style="text-align:center">No albums have been found</th></table><br>
			<?php
		}
		else
		{
			?>
			<table><th style="text-align:center" onclick="showhideAlbums();"><span id="details">Albums</span></th></table>
			<br>
			<span id="albums" style="display:none;" >
				<table>
					<?php 
					$c=1;
					for ($i=0; $i<count($r['albums']['data']); $i++) 
					{ 
						if(array_key_exists('photos', $r['albums']['data'][$i])) {
							$k= $c+1;
							echo '<tr id="photos'.$c.'" style="text-align:center" onclick="showhidePhotos('.$k.')" >'; ?>
							<td><span id="details">
							<?php
							print_r($r['albums']['data'][$i]['name']); 
							echo '</span></td></tr>';
							echo '<tr id="albumphotos'.$k.'" style="display:none;">';
							$c=$c+2;
							?>
							<td>
							<?php
								//echo print_r($r['albums']['data'][$i]);
							for ($j=0; $j<count($r['albums']['data'][$i]['photos']['data']); $j++) {
								$highimgid= $r["albums"]["data"][$i]["photos"]["data"][$j]["id"];
								//echo $highimgid;	
								$imgresp= $fb->get($highimgid.'/picture?access_token=EAAac27DzfmcBAOGqgSVxeFsQQXCcdmi41YF36fcQoMHVxdn9ce86XaRLE1sNxfk3w0K1PZAZBH1PE5BxaQBYlalgOZCb4wnZABL3diIR9ZCSXIRhPzd6IjYZBEUsD7JlyR7XBANi1sUvAzfPLk0X0A21pWKgZARTQMZD');
								$imgids= $imgresp->getHeaders();
								//echo $imgids['Location'];
								$imgid= $imgids['Location'];
								
								echo '<a href="'.$imgid.'" target="_blank"> <img src="'.$r["albums"]["data"][$i]["photos"]["data"][$j]["picture"].'"width="80" height="80" > </a> ';
							}
						}
						else{
							?>
							<tr><td>
								<?php print_r($r["albums"]["data"][$i]["name"]); ?>
							</td></tr>
							<?php
						}
					} ?>
						</td>
						</tr>
					
				</table>
			</span>
		<?php } 
		
		if(!array_key_exists('posts', $r) || count($r['posts']['data'])<1 ){
			?>
			<table><th style="text-align:center">No posts have been found</th></table><br>
			<?php
		}
		else{

			?>
			<table><th style="text-align:center" onclick="showhidePosts();" ><span id="details">Posts</span></th></table>
			<br>
			<span id="posts" style="display:none">
				<table>
					<?php 
					for ($i=0; $i<count($r['posts']['data']); $i++) { 
						if(key($r['posts']['data'][$i]) == 'story'){
							#do nothing
						}
						else{
						?>

						<tr>
						<td>
						<?php
							print_r($r['posts']['data'][$i]['message']);
						}
					}?>
					</td></tr>
				</table>
			</span>
			<?php
		}
		
	}
?>
</p>
</body>
</html>