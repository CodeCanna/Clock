window.onload = function (){
    var canvas = document.getElementById("canvas");
    var stage = new createjs.Stage(canvas);
    var backdraw = new createjs.Shape();
    
    backdraw.graphics.beginFill("lightgray").drawRect(0, 0, canvas.width, canvas.height);
    createjs.Ticker.addEventListener("tick", getTime).interval = 1000;
    
    function getTime(){
        var date = new Date();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        var timeString = new String(hours + ":" + minutes + ":" + seconds);
        var timeText = new createjs.Text(timeString, "100px Cursive", "red");
        
        timeText.x = 50;
        timeText.y = canvas.height / 2 - 50;
        
        stage.addChild(backdraw);
        stage.addChild(timeText);
        stage.update();
    }
};