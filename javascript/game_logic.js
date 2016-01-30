(function(){
	var engine = new Engine();
	engine.deltaTime = new Date().getTime();
	
	engine.loop = function() {
		var date = new Date(),
			difference = date.getTime() - this.deltaTime;
		
		if(difference >= 1000) {
console.log("Frame time interval: " + difference);
			this.deltaTime = date.getTime();
		}
		
		return;
	}
	
	return engine.start();
})();
