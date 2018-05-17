function Button(text) {
	this.text = text || 'Hello';
}

Button.prototype = {
	create: function() {
		var self = this;
		var btn1 = new Button('Hello!');
		this.$element = $('<button>');
		this.$element.text(this.text);
		this.$element.click(function() {
			alert(self.text);
		});
		$('body').append(this.$element);
	}
}

btn1.create(); // w konsoli pokazuje, że create nie jest funkcja i nie mogę jej wywołać;/