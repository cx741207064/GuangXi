using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace JlueTaxSystemGuangXiBS.Controllers
{
    public class sbkkController : Controller
    {
        public void checkSfzxx()
        {
            string return_str = "";
            string str = System.IO.File.ReadAllText(Server.MapPath("checkSfzxx.json"));
            return_str = str;
            Response.ContentType = "application/json";
            Response.Write(return_str);
        }

        public void getNsrlx()
        {
            string return_str = "";
            string str = System.IO.File.ReadAllText(Server.MapPath("getNsrlx.json"));
            return_str = str;
            Response.ContentType = "application/json";
            Response.Write(return_str);
        }

        public void getSbZt()
        {
            string return_str = "";
            string str = System.IO.File.ReadAllText(Server.MapPath("getSbZt.json"));
            return_str = str;
            Response.ContentType = "application/json";
            Response.Write(return_str);
        }

        public void xgsj()
        {
            string return_str = "";
            string str = System.IO.File.ReadAllText(Server.MapPath("xgsj.json"));
            return_str = str;
            Response.ContentType = "application/json";
            Response.Write(return_str);
        }

        public void zfsbb()
        {
            string return_str = "";
            string str = System.IO.File.ReadAllText(Server.MapPath("zfsbb.json"));
            return_str = str;
            Response.ContentType = "application/json";
            Response.Write(return_str);
        }

    }
}
