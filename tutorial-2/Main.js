function Main() {
	this.stage = new PIXI.Container();
	this.renderer = PIXI.autoDetectRenderer(
		512,
		384,
		{view:document.getElementById("game-canvas")}
	);

	this.scroller = new Scroller(this.stage);//创建滚动舞台，并把scroller中的对象添加到this.stage 上

	requestAnimationFrame(this.update.bind(this));
}

Main.SCROLL_SPEED = 5;

Main.prototype.update = function() {   //对象通过prototype 来添加方法和属性
	this.scroller.moveViewportXBy(Main.SCROLL_SPEED);
	this.renderer.render(this.stage);
	requestAnimationFrame(this.update.bind(this)); // bind，call ，apply 这三个参数都是调用，不过 用call 是直接执行， 用bind 不会直接执行，需要在调用()才执行； 用apply传入的参数是数组方式，bind，和call 不是
	
};

