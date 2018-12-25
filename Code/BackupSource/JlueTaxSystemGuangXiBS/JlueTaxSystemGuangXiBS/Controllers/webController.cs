using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace JlueTaxSystemGuangXiBS.Controllers
{
    public class webController : Controller
    {
        public string gtsdhByhJy()
        {
            string return_str = "";
            string str = System.IO.File.ReadAllText(Server.MapPath("gtsdhByhJy.json"));
            return_str = str;
            return return_str;
        }

        public string checkQyLoginNoCa()
        {
            string return_str = "";
            string str = System.IO.File.ReadAllText(Server.MapPath("checkQyLoginNoCa.json"));
            return_str = str;
            return return_str;
        }

    }
}
