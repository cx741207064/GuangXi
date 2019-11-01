using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http.WebHost;
using System.Web.Routing;

namespace JlueTaxSystemGuangXiBS.code
{
    public class MyHttpControllerRouteHandler : HttpControllerRouteHandler
    {
        public IHttpHandler MyGetHttpHandler(RequestContext requestContext)
        {
            return GetHttpHandler(requestContext);
        }

        protected override IHttpHandler GetHttpHandler(RequestContext requestContext)
        {
            return base.GetHttpHandler(requestContext);
        }

    }
}