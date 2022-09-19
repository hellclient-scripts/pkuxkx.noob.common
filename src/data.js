(function (App) {
    App.Bind("InitMod", "mod.common.initdata")
    App.RegisterCallback("mod.common.initdata", function () {
        let modname="pkuxkx.noob.common"
        var lines = world.ReadModLines(modname + "/data/patrols.txt")
        App.Info.BuiltinPatrols = App.Info.BuiltinPatrols.concat(lines)
        lines = world.ReadModLines(modname + "/data/rooms.txt")
        App.Info.BuiltinRooms = App.Info.BuiltinRooms.concat(lines)
        lines = world.ReadModLines(modname + "/data/paths.txt")
        App.Info.BuiltinPaths = App.Info.BuiltinPaths.concat(lines)
        lines = world.ReadModLines(modname + "/data/rooms.txt")
        App.Info.loadrooms(lines)
            })
})(App)