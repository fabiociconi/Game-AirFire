(function (window) {

    window.game = window.game || {}

    function Credits() {
        this.initialize();
    }
    var p = Credits.prototype = new createjs.Container();

    p.Container_initialize = p.initialize;

    p.titleTxt = null;
    p.count = 0;


    p.initialize = function () {
        this.Container_initialize();
        this.addBG();
        this.addTitle();
        this.addButton();
    }
    p.addTitle = function () {
        this.titleTxt = new createjs.Text("Credits!", 'bold 40px Verdana', '#F00');
        this.titleTxt.x = canvas.width / 2;
        this.titleTxt.y = 200;
        this.titleTxt.textAlign = 'center';
        this.addChild(this.titleTxt);
    }

    p.addBG = function () {
        var imgBackground = 'images/BackGOver.jpg';
        var background2 = new createjs.Bitmap(imgBackground);
        background2.scaleX = background2.scaleY = 1.68;
        background2.x = background2.y = 0;

        this.addChild(background2);
    }
    p.addButton = function () {
        var btn, event;
        btn = new ui.SimpleButton('VOLTA PORRRRRAAAAAAAAAAAAAAA');
        btn.on('click', this.mainMenu, this);
        btn.regX = btn.width / 2;
        btn.x = canvas.width / 2;
        btn.y = 400;
        btn.setButton({ upColor: 'FF0000', color: '#FFF', borderColor: '#F00', overColor: '#900' });
        this.addChild(btn);
    }
    p.mainMenu = function (e) {
        this.dispatchEvent(game.GameStateEvents.MAIN_MENU);
    }
    window.game.Credits = Credits;

}(window));