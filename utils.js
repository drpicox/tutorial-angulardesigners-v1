/* some utilities to make some things easier */

function Toggle() {

	this.active = false;
	this.toggle = function () {
		this.active = !this.active;
	};
	this.is = function() {
		return this.active;
	};
	this.show = function() {
		this.active = true;
	};
	this.hide = function() {
		this.active = false;
	};
}

function Accordion() {

	this.current = false;
	this.toggle = function (value) {
		if (this.current !== value) {
			this.current = value;
		} else {
			this.current = false;
		}
	};
	this.is = function (value) {
		return this.current === value;
	}
	this.show = function (value) {
		this.current = value;
	};
	this.hide = function() {
		this.current = false;
	};
}