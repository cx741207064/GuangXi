using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace JlueTaxSystemGuangXiBS.Controllers
{
    public class hlwsbController : Controller
    {
        public void GetSbTree(string callback)
        {
            string return_str = "";
            string str = System.IO.File.ReadAllText(Server.MapPath("GetSbTree.json"));
            return_str = callback + "(" + str + ")";
            Response.ContentType = "application/json";
            Response.Write(return_str);
        }

    }
}
