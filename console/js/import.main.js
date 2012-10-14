/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


function main(){
   
    ImportPlayer.addEventListener("onPlayerReady", function(v){
	//good!
	//ImportPlayer.load("audio/ham.mp3");
	//good!
	var info = "Event onPlayerReady: ";
	var inner = document.getElementById("console").innerHTML;
	document.getElementById("console").innerHTML = inner + "<span><strong>"+ info + "</strong>"+ v +"</span><hr>";
	
    });
    
    //1
    ImportPlayer.addEventListener("onPlayerStart", function(v){
	//good!
	ImportPlayer.play();
	//good!

	var info = "Event onPlayerStart: ";
	var inner = document.getElementById("console").innerHTML;
	document.getElementById("console").innerHTML = inner + "<span><strong>"+ info + "</strong>"+ v +"</span><hr>";
	
    });
    
    //2
    ImportPlayer.addEventListener("onPlayerError", function(v){
	console.log("onPlayerError: " + v);
	
	var info = "Event onPlayerError: ";
	var inner = document.getElementById("console").innerHTML;
	document.getElementById("console").innerHTML = inner + "<span><strong>"+ info + "</strong>"+ v +"</span><hr>";
	
    });
    
    //3
    ImportPlayer.addEventListener("onMediaBuffering", function(v){
	//good!
	//console.log("onMediaBuffering: " +  v);
	//var info = "Event onMediaBuffering: ";
	//var inner = document.getElementById("console").innerHTML;
	//document.getElementById("console").innerHTML = inner + "<span><strong>"+ info + "</strong>"+ v +"</span><hr>";

    });
    
    //4
    ImportPlayer.addEventListener("onMediaDoneBuffering", function(v){
	//good!
	
	var info = "Event onMediaDoneBuffering: ";
	var inner = document.getElementById("console").innerHTML;
	document.getElementById("console").innerHTML = inner + "<span><strong>"+ info + "</strong>"+ v +"</span><hr>";

    });
    
    
    //5
    ImportPlayer.addEventListener("onMediaEnd", function(v){
	//good!
	var info = "Event onMediaEnd: ";
	var inner = document.getElementById("console").innerHTML;
	document.getElementById("console").innerHTML = inner + "<span><strong>"+ info + "</strong>"+ v +"</span><hr>";

    });
    
    //6
    ImportPlayer.addEventListener("onMediaPause", function(v){
	//good!
	var info = "Event onMediaPause: ";
	var inner = document.getElementById("console").innerHTML;
	document.getElementById("console").innerHTML = inner + "<span><strong>"+ info + "</strong>"+ v +"</span><hr>";

    });
    
    //7
    ImportPlayer.addEventListener("onMediaStop", function(v){
	//good!
	var info = "Event onMediaStop: ";
	var inner = document.getElementById("console").innerHTML;
	document.getElementById("console").innerHTML = inner + "<span><strong>"+ info + "</strong>"+ v +"</span><hr>";
    });
    
    //8.5
    ImportPlayer.addEventListener("onMediaVolume", function(v){
	//good!
	var info = "Event onMediaVolume: ";
	var inner = document.getElementById("console").innerHTML;
	document.getElementById("console").innerHTML = inner + "<span><strong>"+ info + "</strong>"+ v +"</span><hr>";

    });
    
    //8
    ImportPlayer.addEventListener("onMediaVolumeSeek", function(v){
	//good!
	var info = "Event onMediaVolumeSeek: ";
	var inner = document.getElementById("console").innerHTML;
	document.getElementById("console").innerHTML = inner + "<span><strong>"+ info + "</strong>"+ v +"</span><hr>";

    });
    
    //9
    ImportPlayer.addEventListener("onMediaDuration", function(v){
	//good!
	var info = "Event onMediaDuration: ";
	var inner = document.getElementById("console").innerHTML;
	document.getElementById("console").innerHTML = inner + "<span><strong>"+ info + "</strong>"+ v +"</span><hr>";

    });
    
    
    //10
    ImportPlayer.addEventListener("onMediaSeek", function(v){
	//good!
	var info = "Event onMediaSeek: ";
	var inner = document.getElementById("console").innerHTML;
	document.getElementById("console").innerHTML = inner + "<span><strong>"+ info + "</strong>"+ v +"</span><hr>";

    });
    
    //11
    ImportPlayer.addEventListener("onMediaPosition", function(v){
	//good!
	//var info = "Event onMediaPosition: ";
	//var inner = document.getElementById("console").innerHTML;
	//document.getElementById("console").innerHTML = inner + "<span><strong>"+ info + "</strong>"+ v +"</span><hr>";

    });
   
    //12
    ImportPlayer.addEventListener("onMediaCurrentPosition", function(v){
	//good!
	var info = "Event onMediaCurrentPosition: ";
	var inner = document.getElementById("console").innerHTML;
	document.getElementById("console").innerHTML = inner + "<span><strong>"+ info + "</strong>"+ v +"</span><hr>";
    });
    
}