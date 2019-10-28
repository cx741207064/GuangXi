using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Results;

namespace JlueTaxSystemGuangXiBS.Controllers
{
    public class taxclientController : ApiController
    {
        [Route("web/dzswj/taxclient/shoucangjia.html")]
        [HttpGet]
        public ResponseMessageResult shoucangjia()
        {
            string return_str = "";
            string str = System.IO.File.ReadAllText(AppDomain.CurrentDomain.BaseDirectory + "FunctionNotOpen.html");
            return_str = str;
            return ResponseMessage(new HttpResponseMessage()
            {
                Content = new StringContent(return_str, System.Text.Encoding.UTF8, "text/html")
            });
        }

    }
}
