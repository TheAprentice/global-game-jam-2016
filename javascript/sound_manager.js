Engine.prototype.SoundManager = (function() {
	function SoundManager() {
		console.log("SoundManager loaded");

		this.audioElement = document.createElement("audio");

		//comment this.text() for production!
		this.test();

		return;
	}

	SoundManager.prototype.playAudio = function(audioProperties) {
		this.audioElement.src = audioProperties.source;
		this.audioElement.volume = audioProperties.volume;
		//this.audioElement.other_properties = audioProperties.other_properties;

		return this.audioElement.play();
	}

	SoundManager.prototype.test = function() {
		//test whatever you want here =)

		//WARNING: actual game object code is subject to change and defined in game logic
		var coin = {
			//position: {x: 0, y: 0, z:0},
			//ObjectType: "coin",
			//...
			audioProperties: {
				source: "assets/coin_sound.wav",
				volume: 0.4
			}
		}

		this.playAudio(coin.audioProperties);

		return;
	}

	return new SoundManager();
})();
