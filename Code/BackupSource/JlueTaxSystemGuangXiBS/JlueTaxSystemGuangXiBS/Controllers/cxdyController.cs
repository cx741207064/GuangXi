using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace JlueTaxSystemGuangXiBS.Controllers
{
    public class cxdyController : Controller
    {
        public void getSB_SBJG()
        {
            string return_str = "";
            string str = System.IO.File.ReadAllText(Server.MapPath("getSB_SBJG.json"));
            return_str = str;
            Response.ContentType = "application/json";
            Response.Write(return_str);
        }

    }
}
