(function (App) {
    let basicquest = Include("include/quest.js")
    let Quest = function () {
        basicquest.call(this)
        this.ID = "bath"
        this.Desc = "洗药浴，加根骨。#q bath 房间名，如 #q bath jarlyyn"
    }
    Quest.prototype.Start = function (param) {
        App.Quest.Common.Bath.Start(param)
    }
    return Quest
})(App)