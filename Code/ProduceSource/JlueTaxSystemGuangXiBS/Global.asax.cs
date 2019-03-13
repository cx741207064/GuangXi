using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Routing;

namespace JlueTaxSystemGuangXiBS
{
    public class WebApiApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            GlobalConfiguration.Configure(WebApiConfig.Register);
        }
        /// <summary>
        /// 如果是api，则Session只读
        /// </summary>
        protected void Application_PostAuthorizeRequest(object sender, System.EventArgs e)
        {

            HttpApplication obj = (HttpApplication)sender;
            if (obj.Request.RawUrl.ToLower().Contains(".do") || (!obj.Request.RawUrl.ToLower().Contains(".")))
            {
                HttpContext.Current.SetSessionStateBehavior(System.Web.SessionState.SessionStateBehavior.ReadOnly);
            }
        }

    }
}
