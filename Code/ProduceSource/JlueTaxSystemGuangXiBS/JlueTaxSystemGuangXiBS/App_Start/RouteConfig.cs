using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace JlueTaxSystemGuangXiBS
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");
            //routes.RouteExistingFiles = true;

            routes.MapRoute(
name: "ctais2",
url: "server/wssq/{controller}/{action}.do",
defaults: new { controller = "ctais2", action = "taxerLoginAction" }
);

            routes.MapRoute(
name: "form",
url: "form.sword",
defaults: new { controller = "Root", action = "form" }
);

            routes.MapRoute(
name: "ajax",
url: "ajax.sword",
defaults: new { controller = "Root", action = "ajax" }
);

            routes.MapRoute(
name: "Root",
url: "{action}",
defaults: new { controller = "Root", action = "sword" }
);

            routes.MapRoute(
name: "zzs",
url: "hlwsb/zzs/{controller}/{action}.do",
defaults: new { controller = "ybnsr", action = "getSB_ZZS_YBNSR" }
);

            routes.MapRoute(
name: "hlwsb",
url: "hlwsb/{action}",
defaults: new { controller = "hlwsb", action = "GetSbTree" }
);

            routes.MapRoute(
name: "dm",
url: "hlwsb/{controller}/{action}.do",
defaults: new { controller = "dm", action = "getDM_ZZS_JMSZC" }
);

            routes.MapRoute(
name: "platform",
url: "web/server/platform/{controller}/{action}.do",
defaults: new { controller = "userInfo", action = "initUrl" }
);

            routes.MapRoute(
name: "server",
url: "web/server/{controller}/{action}.do",
defaults: new { controller = "main", action = "getRjbbUrl" }
);

            routes.MapRoute(
    name: "ptgl",
    url: "web/server/platform/ptgl/{controller}/{action}.do",
    defaults: new { controller = "qyyh", action = "selectGnmkByYhid" }
);

            routes.MapRoute(
name: "default",
url: "web/{action}.do",
defaults: new { controller = "web", action = "gtsdhByhJy" }
);

        }
    }
}