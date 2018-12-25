using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace JlueTaxSystemGuangXiBS.Controllers
{
    public class userInfoController : Controller
    {
        public string initUrl(string callback)
        {
            string return_str = "";
            string str = System.IO.File.ReadAllText(Server.MapPath("initUrl.json"));
            return_str = callback + "(" + str + ")";
            return return_str;
        }

    }
}
