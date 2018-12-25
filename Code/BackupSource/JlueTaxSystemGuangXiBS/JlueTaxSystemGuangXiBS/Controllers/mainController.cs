using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace JlueTaxSystemGuangXiBS.Controllers
{
    public class mainController : Controller
    {
        public string getRjbbUrl(string RJBB_BM)
        {
            string return_str = "";
            string str = System.IO.File.ReadAllText(Server.MapPath("getRjbbUrl." + RJBB_BM + ".json"));
            return_str = str;
            return return_str;
        }

        public string getMsgs(string callback)
        {
            string return_str = "";
            string str = System.IO.File.ReadAllText(Server.MapPath("getMsgs.json"));
            return_str = callback + "(" + str + ")";
            return return_str;
        }

        public string getCommonFuction(string callback)
        {
            string return_str = "";
            string str = System.IO.File.ReadAllText(Server.MapPath("getCommonFuction.json"));
            return_str = callback + "(" + str + ")";
            return return_str;
        }

    }
}
