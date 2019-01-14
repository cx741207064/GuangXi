using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace JlueTaxSystemGuangXiBS.Controllers
{
    public class xqyController : Controller
    {
        public void getSB_CWBB_XQY_ZCFZB()
        {
            string re_json = "";
            string str = System.IO.File.ReadAllText(Server.MapPath("getSB_CWBB_XQY_ZCFZB.json"));
            re_json = str;
            Response.ContentType = "application/json";
            Response.Write(re_json);
        }

        public void insertSB_CWBB_XQY_ZCFZB()
        {
            string re_json = "";
            string str = System.IO.File.ReadAllText(Server.MapPath("insertSB_CWBB_XQY_ZCFZB.json"));
            re_json = str;
            Response.ContentType = "application/json";
            Response.Write(re_json);
        }

        public void updateSB_CWBB_XQY_ZCFZB()
        {
            string re_json = "";
            string str = System.IO.File.ReadAllText(Server.MapPath("updateSB_CWBB_XQY_ZCFZB.json"));
            re_json = str;
            Response.ContentType = "application/json";
            Response.Write(re_json);
        }

        public void delSB_CWBB_XQY_ZCFZB()
        {
            string re_json = "";
            string str = System.IO.File.ReadAllText(Server.MapPath("delSB_CWBB_XQY_ZCFZB.json"));
            re_json = str;
            Response.ContentType = "application/json";
            Response.Write(re_json);
        }

        public void getSB_CWBB_XQY_LRB_YB()
        {
            string re_json = "";
            string str = System.IO.File.ReadAllText(Server.MapPath("getSB_CWBB_XQY_LRB_YB.json"));
            re_json = str;
            Response.ContentType = "application/json";
            Response.Write(re_json);
        }

        public void insertSB_CWBB_XQY_LRB_YB()
        {
            string re_json = "";
            string str = System.IO.File.ReadAllText(Server.MapPath("insertSB_CWBB_XQY_LRB_YB.json"));
            re_json = str;
            Response.ContentType = "application/json";
            Response.Write(re_json);
        }

        public void updateSB_CWBB_XQY_LRB_YB()
        {
            string re_json = "";
            string str = System.IO.File.ReadAllText(Server.MapPath("updateSB_CWBB_XQY_LRB_YB.json"));
            re_json = str;
            Response.ContentType = "application/json";
            Response.Write(re_json);
        }

        public void delSB_CWBB_XQY_LRB_YB()
        {
            string re_json = "";
            string str = System.IO.File.ReadAllText(Server.MapPath("delSB_CWBB_XQY_LRB_YB.json"));
            re_json = str;
            Response.ContentType = "application/json";
            Response.Write(re_json);
        }

        public void getSB_CWBB_XQY_XJLLB_YB()
        {
            string re_json = "";
            string str = System.IO.File.ReadAllText(Server.MapPath("getSB_CWBB_XQY_XJLLB_YB.json"));
            re_json = str;
            Response.ContentType = "application/json";
            Response.Write(re_json);
        }

        public void insertSB_CWBB_XQY_XJLLB_YB()
        {
            string re_json = "";
            string str = System.IO.File.ReadAllText(Server.MapPath("insertSB_CWBB_XQY_XJLLB_YB.json"));
            re_json = str;
            Response.ContentType = "application/json";
            Response.Write(re_json);
        }

        public void updateSB_CWBB_XQY_XJLLB_YB()
        {
            string re_json = "";
            string str = System.IO.File.ReadAllText(Server.MapPath("updateSB_CWBB_XQY_XJLLB_YB.json"));
            re_json = str;
            Response.ContentType = "application/json";
            Response.Write(re_json);
        }

        public void delSB_CWBB_XQY_XJLLB_YB()
        {
            string re_json = "";
            string str = System.IO.File.ReadAllText(Server.MapPath("delSB_CWBB_XQY_XJLLB_YB.json"));
            re_json = str;
            Response.ContentType = "application/json";
            Response.Write(re_json);
        }

    }
}
