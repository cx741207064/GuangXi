using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Results;

namespace JlueTaxSystemGuangXiBS.Controllers
{
    [RoutePrefix("web/platform/taxmobile/gnmk")]
    public class gnmkController : ApiController
    {
        [Route("selectPtTzgg.do")]
        public HttpResponseMessage selectPtTzgg()
        {
            string return_str = "";
            string str = System.IO.File.ReadAllText(System.Web.HttpContext.Current.Server.MapPath("selectPtTzgg.json"));
            return_str = str;

            return new HttpResponseMessage()
            {
                Content = new StringContent(return_str, System.Text.Encoding.UTF8, "application/json")
            };
        }

        [Route("insertGnmkFwrz.do")]
        public ResponseMessageResult insertGnmkFwrz()
        {
            string return_str = "";
            string str = System.IO.File.ReadAllText(System.Web.HttpContext.Current.Server.MapPath("insertGnmkFwrz.json"));
            return_str = str;
            return ResponseMessage(new HttpResponseMessage()
            {
                Content = new StringContent(return_str, System.Text.Encoding.UTF8, "application/json")
            });
        }

    }
}