using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace JlueTaxSystemGuangXiBS.Controllers
{
    public class qyyhController : Controller
    {

        public string selectGnmkByYhid(string callback)
        {
            string return_str = "";
            string str = System.IO.File.ReadAllText(Server.MapPath("selectGnmkByYhid.json"));
            return_str = callback + "(" + str + ")";
            return return_str;
        }

        public string selectGnmkByYhidPidNoSb(string callback)
        {
            string return_str = "";
            string str = System.IO.File.ReadAllText(Server.MapPath("selectGnmkByYhidPidNoSb.json"));
            return_str = callback + "(" + str + ")";
            return return_str;
        }

        public string selectGnmkByYhidPidSb(string callback)
        {
            string return_str = "";
            string str = System.IO.File.ReadAllText(Server.MapPath("selectGnmkByYhidPidSb.json"));
            return_str = callback + "(" + str + ")";
            return return_str;
        }

        public string selectGnmkByYhidPid(string callback)
        {
            string return_str = "";
            string str = System.IO.File.ReadAllText(Server.MapPath("selectGnmkByYhidPid.json"));
            return_str = callback + "(" + str + ")";
            return return_str;
        }
 
    }
}