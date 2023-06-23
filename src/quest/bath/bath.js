(function (App) {
    App.Quest.Common.Bath = {}
    App.Quest.Common.Bath.Data = {}
    App.Quest.Common.Bath.Start = function (param) {
        if (!param) {
            throw "洗澡的房间不能为空"
        }
        App.Quest.Common.Bath.Data = {
            Home: param,
        }
        App.Quest.Common.Bath.Main()
    }
    App.Quest.Common.Bath.Finish = function () {
        App.Core.Quest.Cooldown("bath", 60 * 60 * 1000)
        App.Next()
    }
    App.Quest.Common.Bath.Main = function () {
        App.Core.Sell.SetNoSell("gouqi")
        App.Core.Sell.SetNoSell("digu pi")
        App.Core.Sell.SetNoSell("shechuang zi")
        App.Core.Sell.SetNoSell("gancao")
        App.Core.Sell.SetNoSell("sheng gancao")
        App.Commands([
            App.NewCommand('prepare', App.PrapareFull),
            App.NewCommand('function', App.Quest.Common.Bath.Next)
        ]).Push()
        App.Next()
    }
    App.Quest.Common.Bath.Next = function () {
        if (App.GetItemByName("地骨皮", true) == null) {
            if (App.GetItemByName("枸杞", true) == null) {
                App.Commands([
                    App.NewCommand("to", App.Options.NewWalk("lingzhou-jiuguan")),
                    App.NewCommand('do', "buy gouqi;i2"),
                    App.NewCommand('nobusy'),
                    App.NewCommand('function', App.Quest.Common.Bath.Main),
                ]).Push()
                App.Next()
                return
            } else {
                App.Commands([
                    App.NewCommand('do', "xiao gouqi;i2"),
                    App.NewCommand('nobusy'),
                    App.NewCommand('function', App.Quest.Common.Bath.Main),
                ]).Push()
                App.Next()
                return
            }
        }
        if (App.GetItemByName("生甘草", true) == null) {
            if (App.GetItemByName("甘草", true) == null) {
                App.Commands([
                    App.NewCommand("to", App.Options.NewWalk("yzdp")),
                    App.NewCommand('do', "buy im_190;i2"),
                    App.NewCommand('nobusy'),
                    App.NewCommand('function', App.Quest.Common.Bath.Main),
                ]).Push()
                App.Next()
                return
            } else {
                App.Commands([
                    App.NewCommand('do', "bo gancao;i2"),
                    App.NewCommand('nobusy'),
                    App.NewCommand('function', App.Quest.Common.Bath.Main),
                ]).Push()
                App.Next()
                return
            }
        }
        if (App.GetItemObj("Pot", true) == null) {
            App.Commands([
                App.NewCommand("to", App.Options.NewWalk("yz-zhp")),
                App.NewCommand('do', "buy pot;i2"),
                App.NewCommand('nobusy'),
                App.NewCommand('function', App.Quest.Common.Bath.Main),
            ]).Push()
            App.Next()
            return
        }
        if (App.GetItemByName("蛇床子", true) == null) {
            App.Commands([
                App.NewCommand("to", App.Options.NewWalk("suzhoudp")),
                App.NewCommand('do', "buy im_226;i2"),
                App.NewCommand('nobusy'),
                App.NewCommand('function', App.Quest.Common.Bath.Main),
            ]).Push()
            App.Next()
            return
        }
        if (App.GetItemByName("大木桶", true) == null) {
            App.Commands([
                App.NewCommand("to", App.Options.NewWalk("jinyangyp")),
                App.NewCommand('ask', App.Options.NewQuestion("hao ba", "帮助")),
                App.NewCommand('nobusy'),
                App.NewCommand('do', "give shechuang zi to hao ba"),
                App.NewCommand('nobusy'),
                App.NewCommand('ask', App.Options.NewQuestion("hao ba", "交个朋友")),
                App.NewCommand('nobusy'),
                App.NewCommand('ask', App.Options.NewQuestion("hao ba", "独门秘方")),
                App.NewCommand('nobusy'),
                App.NewCommand('ask', App.Options.NewQuestion("hao ba", "木桶")),
                App.NewCommand('nobusy'),
                App.NewCommand('do', "i2"),
                App.NewCommand('function', App.Quest.Common.Bath.Main),
            ]).Push()
            App.Next()
            return
        }
        App.Commands([
            App.NewCommand("to", App.Options.NewWalk("xinyang-tqc")),
            App.NewCommand('do', "fill pot;i2"),
            App.NewCommand('nobusy'),
            App.NewCommand("to", App.Options.NewWalk("yz-sczh")),
            App.NewCommand("move", App.Options.NewPath("enter " + App.Quest.Common.Bath.Data.Home)),
            App.NewCommand("do", "add shechuang zi;add digu pi;add sheng gancao;pour tong;pour tong;pour tong;bath"),
            App.NewCommand("delay", 120),
            App.NewCommand("nobusy"),
            App.NewCommand('function', App.Quest.Common.Bath.Finish),
        ]).Push()
        App.Next()
    }
})(App)