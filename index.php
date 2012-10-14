<?php require_once 'highLight/highLight.php'; ?>

<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Import - Light Player AS3 - Javascript</title>
	<link rel="stylesheet" href="highLight/highLight.css">
	<link rel="stylesheet" href="bootstrap.twitter/css/bootstrap.min.css">
	<link rel="stylesheet" href="style/style.css">
    </head>
    <body>
	<div class="main-wrapper">
	    <div class="title">
		<h1>Import Player</h1><h4>by Gérard TOKO</h4>
		<hr>
	    </div>
	    <br>
	    <div class="description">		
		<p><strong>Import Player</strong> is player audio combined of AS3 and Javascript</p>
		<p>Require Adobe player 11</p>
		<p><a href="https://github.com/gerardtoko/importplayer"  TARGET="_blank">On Github</a></p>
		<p><a href="console" >Console API</a></p>
		<hr>
	    </div>

	    <div class="docs">

		<h5>Installation</h5>
		<?php echo HighLight::dump('docs/install.txt') ?>
		<h5>Demo Thumb</h5>
		<?php echo HighLight::dump('docs/demo.txt') ?>

		<h5>Function (Javascript)</h5>

		<table class="table table-striped table-bordered">
		    <colgroup>
			<col width="15%">
			<col width="15%">
			<col width="10%">
			<col width="60%">			
		    </colgroup>
		    <thead>
			<tr class="headings">
			    <th>Name</th>
			    <th>Arguments</th>
			    <th>Type</th>
			    <th>Description</th>
			</tr>
		    </thead>
		    <tbody>
			<tr>
			    <td>load</td>
			    <td>url</td>
			    <td>String</td>
			    <td>Url file mp3 </td>
			</tr>
			<tr>
			    <td>play</td>
			    <td></td>
			    <td></td>
			    <td></td>
			</tr>
			<tr>
			    <td>pause</td>
			    <td></td>
			    <td></td>
			    <td></td>
			</tr>
			<tr>
			    <td>stop</td>
			    <td></td>
			    <td></td>
			    <td></td>
			</tr>
			<tr>
			    <td>setVolume</td>
			    <td>vol</td>
			    <td>Int</td>
			    <td>Argument vol : (0...1)</td>
			</tr>

			<tr>
			    <td>getVolume</td>
			    <td></td>
			    <td></td>
			    <td></td>
			</tr>


			<tr>
			    <td>setPosition</td>
			    <td>position</td>
			    <td>Int</td>
			    <td>Argument in millisecondss</td>
			</tr>
			<tr>
			    <td>getPosition</td>
			    <td></td>
			    <td></td>
			    <td></td>
			</tr>

			<tr>
			    <td>getDuration</td>
			    <td></td>
			    <td></td>
			    <td></td>
			</tr>

		    </tbody>
		</table>
		<br>


		<h5>Event (Javascript)</h5>
		<table class="table table-striped table-bordered">
		    <colgroup>
			<col width="15%">
			<col width="15%">
			<col width="70%">			
		    </colgroup>
		    <thead>
			<tr class="headings">
			    <th>Name</th>
			    <th>return</th>
			    <th>Description</th>
			</tr>
		    </thead>
		    <tbody>
			<tr>
			    <td>onPlayerReady</td>
			    <td>ready</td>
			    <td>Player AS3 is loader</td>
			</tr>
			<tr>
			    <td>onPlayerStart</td>
			    <td>start</td>
			    <td>Start audio</td>
			</tr>
			<tr>
			    <td>onPlayerError</td>
			    <td>message</td>
			    <td>Exception Error Message</td>
			</tr>
			<tr>
			    <td>onMediaBuffering</td>
			    <td>(0...100)</td>
			    <td>Buffer loading</td>
			</tr>
			<tr>
			    <td>onMediaDoneBuffering</td>
			    <td>doneBuffering</td>
			    <td></td>
			</tr>
			<tr>
			    <td>onMediaEnd</td>
			    <td>end</td>
			    <td>Track Finish</td>
			</tr>
			<tr>
			    <td>onMediaPause</td>
			    <td>pause</td>
			    <td></td>
			</tr>
			
			<tr>
			    <td>onMediaStop</td>
			    <td>stop</td>
			    <td></td>
			</tr>
			<tr>
			    <td>onMediaVolume</td>
			    <td>current Volume</td>
			    <td>(getVolume action) / volume format (0...1)</td>
			</tr>
			<tr>
			    <td>onMediaVolumeSeek</td>
			    <td>current Volume</td>
			    <td>(setVolume action) / volume format (0...1)</td>
			</tr>
			<tr>
			    <td>onMediaDuration</td>
			    <td>(0...100)</td>
			    <td>(getDuration action) duration in milliseconds</td>
			</tr>
			<tr>
			    <td>onMediaPosition</td>
			    <td>position</td>
			    <td>position in milliseconds (Timer 300ms)</td>
			</tr>
			<tr>
			    <td>onMediaCurrentPosition</td>
			    <td>position</td>
			      <td>(getPosition action) / position in milliseconds</td>
			</tr>
			<tr>
			    <td>onMediaSeek</td>
			    <td>position</td>
			    <td>(setPosition action) / position in milliseconds</td>
			</tr>
		    </tbody>
		</table>
	    </div>
	    <p><a href="console" >Console API</a></p>
	</div>
	<br>
    </body>
</html>
