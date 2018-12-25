using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace JlueTaxSystemGuangXiBS.Controllers
{
    public class fjsController : Controller
    {
        public void getSB_FJS_ZB()
        {
            string return_str = "";
            string str = System.IO.File.ReadAllText(Server.MapPath("getSB_FJS_ZB.json"));
            System.Threading.Thread.Sleep(500);
            return_str = str;
            Response.ContentType = "application/json";
            Response.Write(return_str);
        }

        public void insertSB_FJS_ZB()
        {
            string return_str = "";
            string str = System.IO.File.ReadAllText(Server.MapPath("insertSB_FJS_ZB.json"));
            return_str = str;
            Response.ContentType = "application/json";
            Response.Write(return_str);
        }

        public void delSB_FJS_ZB()
        {
            string return_str = "";
            string str = System.IO.File.ReadAllText(Server.MapPath("delSB_FJS_ZB.json"));
            return_str = str;
            Response.ContentType = "application/json";
            Response.Write(return_str);
        }

    }
}
