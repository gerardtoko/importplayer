


// class ImportPlayer
function ImportPlayerClass(id){
    
    var listeners = new Array(),
    registry = new Array(),
    u           = 'undefined',
    f           = 'function';
    
    this.id = id;
  
    if( typeof ImportPlayerClass.initialized == "undefined" ) {
		
	ImportPlayerClass.prototype.player = function() {
	    var movieName = this.id;
	    var isIE = navigator.appName.indexOf("Microsoft") != -1;
	    return (isIE) ? window[movieName] : document[movieName];
	}
	
	
	ImportPlayerClass.prototype.init = function() {
	    
	    this.addEventListener("onMediaVolume", function(v){	
		registry["onMediaVolume"] = v; 
	    });
    
	    this.addEventListener("onMediaDuration", function(v){
		registry["onMediaDuration"] = v;
	    });

	    this.addEventListener("onMediaCurrentPosition", function(v){
		registry["onMediaCurrentPosition"] = v;
	    });
    
	}
	
	
	ImportPlayerClass.prototype.load = function(url){
	    this.player().load(url);
	    return this;
	}
	
	ImportPlayerClass.prototype.play = function(){
	    this.player().play();
	    return this;
	}
	
	ImportPlayerClass.prototype.pause = function(){
	    this.player().pause();
	    return this;
	}
	
	ImportPlayerClass.prototype.stop = function(){
	    this.player().stop();
	    return this;
	}

	ImportPlayerClass.prototype.setVolume = function(vol){
	    this.player().setVolume(vol);
	    return this;
	}
	
	ImportPlayerClass.prototype.getVolume = function(){
	    this.player().getVolume();
	    return registry["onMediaVolume"];
	}
	
	ImportPlayerClass.prototype.setPosition = function(x){
	    this.player().setPosition(x);
	     return this;
	}
	
	ImportPlayerClass.prototype.getPosition = function(){
	    this.player().getPosition();	    
	    return registry["onMediaCurrentPosition"];
	}
	
	ImportPlayerClass.prototype.getDuration = function(){
	    this.player().getDuration();
	    return registry["onMediaDuration"];
	}
	
	ImportPlayerClass.prototype.addEventListener = function(event, fn){
	    if(typeof(fn) === f){
		if(typeof(listeners[event]) === u){
		    listeners[event] = new Array();
		}
		listeners[event].push(fn);
	    }
	}

	ImportPlayerClass.prototype.removeEventListener = function(event, fn){
	    if(typeof(listeners[event]) !== u){
		for(var i=0, j=listeners[event].length; i<j; ++i){
		    if(typeof(fn) === f && listeners[event][i] === fn){
			listeners[event].splice(i, 1);
		    }
		}
		//At the end, we clear unused listeners array type
		for(var j=0; j<listeners.length; ++j){
		    if(listeners[j].length < 1){
			listeners.splice(j, 1);
		    }
		}
	    }
	}
	
	ImportPlayerClass.prototype.dispatchEvent = function(event, data){
	    var f = listeners[event];
	    if(typeof(f) !== u){
		for(var i=0, l=f.length; i<l; ++i){
		    f[i](data);
		}
	    }
	}
    } 
    
    ImportPlayerClass.initialized = true; 
}

//instance player
var ImportPlayer = new ImportPlayerClass("import-player");	    
ImportPlayer.init();