<?php
	date_default_timezone_set('Europe/Istanbul');
	require_once __DIR__ . '/php-graph-sdk-5.0.0/src/Facebook/autoload.php';
	
	$fb = new Facebook\Facebook([
		'app_id' => '1861317240782439',
		'app_secret' => 'fec51756e9a047cfe26260c42e54186d',
	'default_graph_version' => 'v2.8',
	]);

	$fb->setDefaultAccessToken('EAAac27DzfmcBAOGqgSVxeFsQQXCcdmi41YF36fcQoMHVxdn9ce86XaRLE1sNxfk3w0K1PZAZBH1PE5BxaQBYlalgOZCb4wnZABL3diIR9ZCSXIRhPzd6IjYZBEUsD7JlyR7XBANi1sUvAzfPLk0X0A21pWKgZARTQMZD');

	if(isset($_GET['hdid'])){
		$hdid= $_GET['hdid'];
		$hdimg= $fb->get("https://graph.facebook.com/v2.8/".$hdid."/picture?access_token=EAAac27DzfmcBAOGqgSVxeFsQQXCcdmi41YF36fcQoMHVxdn9ce86XaRLE1sNxfk3w0K1PZAZBH1PE5BxaQBYlalgOZCb4wnZABL3diIR9ZCSXIRhPzd6IjYZBEUsD7JlyR7XBANi1sUvAzfPLk0X0A21pWKgZARTQMZD");
		$i= json_decode($hdimg->getGraphNode());
		//echo $i['url'];
		$u= json_encode($i);
		echo $u;
		
	}
	else{
		if(isset($_GET['url'])){
			$url= $_GET['url'];
			$rep= file_get_contents($url);
			echo $rep;
		}
		if(isset($_GET['id']))
		{
			$id= $_GET['id'];
			//$keyword= $_GET['keyword'];
			//$type=$_GET['type'];
			//echo $keyword;
			//echo $type;
			$resp= $fb->get($id.'?fields=id,name,picture.width(700).height(700),albums.limit(5){name,photos.limit(2){name, picture}},posts.limit(5)&access_token=EAAac27DzfmcBAOGqgSVxeFsQQXCcdmi41YF36fcQoMHVxdn9ce86XaRLE1sNxfk3w0K1PZAZBH1PE5BxaQBYlalgOZCb4wnZABL3diIR9ZCSXIRhPzd6IjYZBEUsD7JlyR7XBANi1sUvAzfPLk0X0A21pWKgZARTQMZD');
			//$resp= file_get_contents('https://graph.facebook.com/v2.8/'.$id.'?fields=id,name,picture.width(700).height(700),albums.limit(5){name,photos.limit(2){name, picture}},posts.limit(5)&access_token=EAAac27DzfmcBAOGqgSVxeFsQQXCcdmi41YF36fcQoMHVxdn9ce86XaRLE1sNxfk3w0K1PZAZBH1PE5BxaQBYlalgOZCb4wnZABL3diIR9ZCSXIRhPzd6IjYZBEUsD7JlyR7XBANi1sUvAzfPLk0X0A21pWKgZARTQMZD');
			//$details= $resp->getGraphNode();
			$r= json_decode($resp->getBody());
	//		echo $details;
			echo json_encode($r);
			//echo $resp;
		}
		else{
			$keyword= $_GET['keyword'];
			$keyword= str_replace(" ", "%20", $keyword);
			$type= $_GET['type'];
			
			if($type=="user" || $type=="page" || $type=="event" || $type=="group"){
				$response= file_get_contents("https://graph.facebook.com/v2.8/search?q=".$keyword."&type=".$type."&fields=id,name,picture.width(700).height(700)&access_token=EAAac27DzfmcBAOGqgSVxeFsQQXCcdmi41YF36fcQoMHVxdn9ce86XaRLE1sNxfk3w0K1PZAZBH1PE5BxaQBYlalgOZCb4wnZABL3diIR9ZCSXIRhPzd6IjYZBEUsD7JlyR7XBANi1sUvAzfPLk0X0A21pWKgZARTQMZD");
				//$response = $fb->get('search?q='.$keyword.'&type='.$type.'&fields=id,name,picture.width(700).height(700)', 'EAAac27DzfmcBAOGqgSVxeFsQQXCcdmi41YF36fcQoMHVxdn9ce86XaRLE1sNxfk3w0K1PZAZBH1PE5BxaQBYlalgOZCb4wnZABL3diIR9ZCSXIRhPzd6IjYZBEUsD7JlyR7XBANi1sUvAzfPLk0X0A21pWKgZARTQMZD');
				echo $response;
				//$user = $response->getGraphEdge();
				//echo $user;
			}
			else{
				if($type=="place"){
					$keyword= $_GET['keyword'];
					$type= $_GET['type'];
					$center= $_GET["center"];
					$dist= $_GET["distance"];
					$response = file_get_contents('https://graph.facebook.com/v2.8/search?q='.$keyword.'&type='.$type.'&center='.$center.'&fields=id,name,picture.width(700).height(700)&access_token=EAAac27DzfmcBAOGqgSVxeFsQQXCcdmi41YF36fcQoMHVxdn9ce86XaRLE1sNxfk3w0K1PZAZBH1PE5BxaQBYlalgOZCb4wnZABL3diIR9ZCSXIRhPzd6IjYZBEUsD7JlyR7XBANi1sUvAzfPLk0X0A21pWKgZARTQMZD');
					//$places= $response->getGraphEdge();
					echo $response;
				}
			}
		}
	}
?>