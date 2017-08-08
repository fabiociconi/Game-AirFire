//************************************************************/
// AssestManager.js                                          */
//                                                           */
// Main Function : Control every Asset of the game           */
//-----------------------------------------------------------*/
(function () {

    window.game = window.game || {};

    var AssetManager = function () {
        this.initialize();
    }
    var p = AssetManager.prototype = new createjs.EventDispatcher();

    p.EventDispatcher_initialize = p.initialize;

    //sounds
    p.SOUND_MENU = 'menu sound';


    //graphics
    p.GAME_SPRITES = 'game sprites';
    //p.FONT_SPRITES = 'font sprites';
    p.BATTLE_BG = 'game bg';
    p.MENU_BG = 'menu bg';
    p.CREDITS_BG = 'credits bg';
   

    //data
    p.GAME_SPRITES_DATA = 'game sprites data';
    //p.FONT_SHEET_DATA = 'font sheet data';

    //events
    p.ASSETS_PROGRESS = 'assets progress';
    p.ASSETS_COMPLETE = 'assets complete';

    p.assetsPath = 'assets/';

    p.loadManifest = null;
    p.queue = null;
    p.loadProgress = 0;


    p.initialize = function () {
        this.EventDispatcher_initialize();
        this.loadManifest = [
            {id:this.GAME_SPRITES_DATA, src:this.assetsPath + 'spritesheet.json'},
            {id:this.GAME_SPRITES, src:this.assetsPath + 'spritesheet-part1.png'},
            
            {id:this.BATTLE_BG, src:this.assetsPath + 'MilkyWay.jpg'},
            {id:this.MENU_BG, src:this.assetsPath + 'menu.jpg'},
            {id:this.CREDITS_BG, src:this.assetsPath + 'BackGOver.jpg'},
            
            {id:this.SOUND_MENU,src:this.assetsPath +'Theme - Star Wars.ogg'}
        ];
    }
    p.preloadAssets = function () {
        createjs.Sound.initializeDefaultPlugins();
        this.queue = new createjs.LoadQueue();
        this.queue.installPlugin(createjs.Sound);
        this.queue.on('progress',this.assetsProgress,this);
        this.queue.on('complete',this.assetsLoaded,this);
        this.queue.loadManifest(this.loadManifest);
    }
    p.assetsProgress = function (e) {
        this.loadProgress = e.progress;
        var event = new createjs.Event(this.ASSETS_PROGRESS);
        this.dispatchEvent(event);
    }
    p.assetsLoaded = function (e) {
        var event = new createjs.Event(this.ASSETS_COMPLETE);
        this.dispatchEvent(event);
    }
    p.getAsset = function (asset) {
        return this.queue.getResult(asset);
    }

    window.game.AssetManager = AssetManager;

}());