using JlueTaxSystemGuangXiBS.code;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace JlueTaxSystemGuangXiBS
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            config.MessageHandlers.Add(new MyDelegatingHandler());

            // Web API configuration and services

            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
        }
    }
}
