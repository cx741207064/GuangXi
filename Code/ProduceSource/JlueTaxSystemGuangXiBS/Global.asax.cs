using JlueTaxSystemGuangXiBS.code;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text.RegularExpressions;
using System.Web;
using System.Web.Http;
using System.Web.Http.Routing;
using System.Web.Http.WebHost;
using System.Web.Routing;
using System.Web.SessionState;

namespace JlueTaxSystemGuangXiBS
{
    public class WebApiApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            GlobalConfiguration.Configure(WebApiConfig.Register);

        }
        public override void Init()
        {
            this.PostAuthenticateRequest += (sender, e) => HttpContext.Current.SetSessionStateBehavior(SessionStateBehavior.Required);
            this.BeginRequest += (sender, e) => MyBeginRequest(sender, e);
            this.PostMapRequestHandler += (sender, e) => MyPostMapRequestHandler(sender, e);
            base.Init();
        }

        void MyBeginRequest(object sender, EventArgs e)
        {
            if (Regex.IsMatch(Request.RawUrl, "sword\\?"))
            {
                RouteTable.Routes.RouteExistingFiles = true;
            }
            else
            {
                RouteTable.Routes.RouteExistingFiles = false;
            }
        }

        void MyPostMapRequestHandler(object sender, EventArgs e)
        {
        }

        void test()
        {
            var cx = new MyHttpControllerRouteHandler();
            var cs = cx.MyGetHttpHandler(Request.RequestContext) as HttpControllerHandler;
        }

    }
}
