(function (App) {
    const modname = "pkuxkx.noob.common"

    Mod.Include(modname + "/src/data.js")
    App.Bind("InitMod", "mod.common.init")
    App.RegisterCallback("mod.common.init", function () {
        App.Quest.Common = {}
        Mod.Include(modname + "/src/quest/bath/bath.js")
        App.RegisterQuest(new (Mod.Include(modname+"/src/quest/bath.js"))())
    })
})(App)