using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace JlueTaxSystemGuangXiBS.Controllers
{
    public class ybnsrController : Controller
    {
        public void getSB_ZZS_FP_HZ()
        {
            JObject return_j = new JObject();
            string return_str = "";
            string str = System.IO.File.ReadAllText(Server.MapPath("getSB_ZZS_FP_HZ.json"));
            return_str = str;
            return_j = JsonConvert.DeserializeObject<JObject>(str);
            Response.ContentType = "application/json";
            Response.Write(str);
        }

        public void getSB_ZZS_YBNSR()
        {
            JObject return_j = new JObject();
            string return_str = "";
            string str = System.IO.File.ReadAllText(Server.MapPath("getSB_ZZS_YBNSR.json"));
            return_str = str;
            return_j = JsonConvert.DeserializeObject<JObject>(str);
            Response.ContentType = "application/json";
            Response.Write(str);
        }

        public void extractSB_ZZS_YBNSR()
        {
            JObject return_j = new JObject();
            string return_str = "";
            string str = System.IO.File.ReadAllText(Server.MapPath("extractSB_ZZS_YBNSR.json"));
            return_str = str;
            return_j = JsonConvert.DeserializeObject<JObject>(str);
            Response.ContentType = "application/json";
            Response.Write(str);
        }

        public void insertSB_ZZS_YBNSR()
        {
            JObject return_j = new JObject();
            string return_str = "";
            string str = System.IO.File.ReadAllText(Server.MapPath("insertSB_ZZS_YBNSR.json"));
            return_str = str;
            return_j = JsonConvert.DeserializeObject<JObject>(str);
            Response.ContentType = "application/json";
            Response.Write(str);
        }

        public void updateSB_ZZS_YBNSR()
        {
            JObject return_j = new JObject();
            string return_str = "";
            string str = System.IO.File.ReadAllText(Server.MapPath("updateSB_ZZS_YBNSR.json"));
            return_str = str;
            return_j = JsonConvert.DeserializeObject<JObject>(str);
            Response.ContentType = "application/json";
            Response.Write(str);
        }

        public void delSB_ZZS_YBNSR()
        {
            JObject return_j = new JObject();
            string return_str = "";
            string str = System.IO.File.ReadAllText(Server.MapPath("delSB_ZZS_YBNSR.json"));
            return_str = str;
            return_j = JsonConvert.DeserializeObject<JObject>(str);
            Response.ContentType = "application/json";
            Response.Write(str);
        }

        public void getSB_ZZS_YBNSR_FB1()
        {
            JObject return_j = new JObject();
            string return_str = "";
            string str = System.IO.File.ReadAllText(Server.MapPath("getSB_ZZS_YBNSR_FB1.json"));
            return_str = str;
            return_j = JsonConvert.DeserializeObject<JObject>(str);
            Response.ContentType = "application/json";
            Response.Write(str);
        }

        public void insertSB_ZZS_YBNSR_FB1()
        {
            JObject return_j = new JObject();
            string return_str = "";
            string str = System.IO.File.ReadAllText(Server.MapPath("insertSB_ZZS_YBNSR_FB1.json"));
            return_str = str;
            return_j = JsonConvert.DeserializeObject<JObject>(str);
            Response.ContentType = "application/json";
            Response.Write(str);
        }

        public void updateSB_ZZS_YBNSR_FB1()
        {
            JObject return_j = new JObject();
            string return_str = "";
            string str = System.IO.File.ReadAllText(Server.MapPath("updateSB_ZZS_YBNSR_FB1.json"));
            return_str = str;
            return_j = JsonConvert.DeserializeObject<JObject>(str);
            Response.ContentType = "application/json";
            Response.Write(str);
        }

        public void delSB_ZZS_YBNSR_FB1()
        {
            JObject return_j = new JObject();
            string return_str = "";
            string str = System.IO.File.ReadAllText(Server.MapPath("delSB_ZZS_YBNSR_FB1.json"));
            return_str = str;
            return_j = JsonConvert.DeserializeObject<JObject>(str);
            Response.ContentType = "application/json";
            Response.Write(str);
        }

        public void getSB_ZZS_YBNSR_FB2()
        {
            JObject return_j = new JObject();
            string return_str = "";
            string str = System.IO.File.ReadAllText(Server.MapPath("getSB_ZZS_YBNSR_FB2.json"));
            return_str = str;
            return_j = JsonConvert.DeserializeObject<JObject>(str);
            Response.ContentType = "application/json";
            Response.Write(str);
        }

        public void insertSB_ZZS_YBNSR_FB2()
        {
            JObject return_j = new JObject();
            string return_str = "";
            string str = System.IO.File.ReadAllText(Server.MapPath("insertSB_ZZS_YBNSR_FB2.json"));
            return_str = str;
            return_j = JsonConvert.DeserializeObject<JObject>(str);
            Response.ContentType = "application/json";
            Response.Write(str);
        }

        public void updateSB_ZZS_YBNSR_FB2()
        {
            JObject return_j = new JObject();
            string return_str = "";
            string str = System.IO.File.ReadAllText(Server.MapPath("updateSB_ZZS_YBNSR_FB2.json"));
            return_str = str;
            return_j = JsonConvert.DeserializeObject<JObject>(str);
            Response.ContentType = "application/json";
            Response.Write(str);
        }

        public void delSB_ZZS_YBNSR_FB2()
        {
            JObject return_j = new JObject();
            string return_str = "";
            string str = System.IO.File.ReadAllText(Server.MapPath("delSB_ZZS_YBNSR_FB2.json"));
            return_str = str;
            return_j = JsonConvert.DeserializeObject<JObject>(str);
            Response.ContentType = "application/json";
            Response.Write(str);
        }

        public void getSB_ZZS_YBNSR_FB3()
        {
            JObject return_j = new JObject();
            string return_str = "";
            string str = System.IO.File.ReadAllText(Server.MapPath("getSB_ZZS_YBNSR_FB3.json"));
            return_str = str;
            return_j = JsonConvert.DeserializeObject<JObject>(str);
            Response.ContentType = "application/json";
            Response.Write(str);
        }

        public void updateSB_ZZS_YBNSR_FB3()
        {
            JObject return_j = new JObject();
            string return_str = "";
            string str = System.IO.File.ReadAllText(Server.MapPath("updateSB_ZZS_YBNSR_FB3.json"));
            return_str = str;
            return_j = JsonConvert.DeserializeObject<JObject>(str);
            Response.ContentType = "application/json";
            Response.Write(str);
        }

        public void insertSB_ZZS_YBNSR_FB3()
        {
            JObject return_j = new JObject();
            string return_str = "";
            string str = System.IO.File.ReadAllText(Server.MapPath("insertSB_ZZS_YBNSR_FB3.json"));
            return_str = str;
            return_j = JsonConvert.DeserializeObject<JObject>(str);
            Response.ContentType = "application/json";
            Response.Write(str);
        }

        public void delSB_ZZS_YBNSR_FB3()
        {
            JObject return_j = new JObject();
            string return_str = "";
            string str = System.IO.File.ReadAllText(Server.MapPath("delSB_ZZS_YBNSR_FB3.json"));
            return_str = str;
            return_j = JsonConvert.DeserializeObject<JObject>(str);
            Response.ContentType = "application/json";
            Response.Write(str);
        }

        public void getSB_ZZS_FB4()
        {
            JObject return_j = new JObject();
            string return_str = "";
            string str = System.IO.File.ReadAllText(Server.MapPath("getSB_ZZS_FB4.json"));
            return_str = str;
            return_j = JsonConvert.DeserializeObject<JObject>(str);
            Response.ContentType = "application/json";
            Response.Write(str);
        }

        public void insertSB_ZZS_FB4()
        {
            JObject return_j = new JObject();
            string return_str = "";
            string str = System.IO.File.ReadAllText(Server.MapPath("insertSB_ZZS_FB4.json"));
            return_str = str;
            return_j = JsonConvert.DeserializeObject<JObject>(str);
            Response.ContentType = "application/json";
            Response.Write(str);
        }

        public void updateSB_ZZS_FB4()
        {
            JObject return_j = new JObject();
            string return_str = "";
            string str = System.IO.File.ReadAllText(Server.MapPath("updateSB_ZZS_FB4.json"));
            return_str = str;
            return_j = JsonConvert.DeserializeObject<JObject>(str);
            Response.ContentType = "application/json";
            Response.Write(str);
        }

        public void delSB_ZZS_FB4()
        {
            JObject return_j = new JObject();
            string return_str = "";
            string str = System.IO.File.ReadAllText(Server.MapPath("delSB_ZZS_FB4.json"));
            return_str = str;
            return_j = JsonConvert.DeserializeObject<JObject>(str);
            Response.ContentType = "application/json";
            Response.Write(str);
        }

        public void getSB_ZZS_BDCFQDCJSB()
        {
            JObject return_j = new JObject();
            string return_str = "";
            string str = System.IO.File.ReadAllText(Server.MapPath("getSB_ZZS_BDCFQDCJSB.json"));
            return_str = str;
            return_j = JsonConvert.DeserializeObject<JObject>(str);
            Response.ContentType = "application/json";
            Response.Write(str);
        }

        public void insertSB_ZZS_BDCFQDCJSB()
        {
            JObject return_j = new JObject();
            string return_str = "";
            string str = System.IO.File.ReadAllText(Server.MapPath("insertSB_ZZS_BDCFQDCJSB.json"));
            return_str = str;
            return_j = JsonConvert.DeserializeObject<JObject>(str);
            Response.ContentType = "application/json";
            Response.Write(str);
        }

        public void updateSB_ZZS_BDCFQDCJSB()
        {
            JObject return_j = new JObject();
            string return_str = "";
            string str = System.IO.File.ReadAllText(Server.MapPath("updateSB_ZZS_BDCFQDCJSB.json"));
            return_str = str;
            return_j = JsonConvert.DeserializeObject<JObject>(str);
            Response.ContentType = "application/json";
            Response.Write(str);
        }

        public void delSB_ZZS_BDCFQDCJSB()
        {
            JObject return_j = new JObject();
            string return_str = "";
            string str = System.IO.File.ReadAllText(Server.MapPath("delSB_ZZS_BDCFQDCJSB.json"));
            return_str = str;
            return_j = JsonConvert.DeserializeObject<JObject>(str);
            Response.ContentType = "application/json";
            Response.Write(str);
        }

        public void getSB_ZZS_YBNSR_JMSMXB()
        {
            JObject return_j = new JObject();
            string return_str = "";
            string str = System.IO.File.ReadAllText(Server.MapPath("getSB_ZZS_YBNSR_JMSMXB.json"));
            return_str = str;
            return_j = JsonConvert.DeserializeObject<JObject>(str);
            Response.ContentType = "application/json";
            Response.Write(str);
        }

        public void insertSB_ZZS_YBNSR_JMSMXB()
        {
            JObject return_j = new JObject();
            string return_str = "";
            string str = System.IO.File.ReadAllText(Server.MapPath("insertSB_ZZS_YBNSR_JMSMXB.json"));
            return_str = str;
            return_j = JsonConvert.DeserializeObject<JObject>(str);
            Response.ContentType = "application/json";
            Response.Write(str);
        }

        public void delSB_ZZS_YBNSR_JMSMXB()
        {
            JObject return_j = new JObject();
            string return_str = "";
            string str = System.IO.File.ReadAllText(Server.MapPath("delSB_ZZS_YBNSR_JMSMXB.json"));
            return_str = str;
            return_j = JsonConvert.DeserializeObject<JObject>(str);
            Response.ContentType = "application/json";
            Response.Write(str);
        }

        public void getSB_ZZS_YBNSR_YGZSFFXCSMXB()
        {
            JObject return_j = new JObject();
            string return_str = "";
            string str = System.IO.File.ReadAllText(Server.MapPath("getSB_ZZS_YBNSR_YGZSFFXCSMXB.json"));
            return_str = str;
            return_j = JsonConvert.DeserializeObject<JObject>(str);
            Response.ContentType = "application/json";
            Response.Write(str);
        }

        public void insertSB_ZZS_YBNSR_YGZSFFXCSMXB()
        {
            JObject return_j = new JObject();
            string return_str = "";
            string str = System.IO.File.ReadAllText(Server.MapPath("insertSB_ZZS_YBNSR_YGZSFFXCSMXB.json"));
            return_str = str;
            return_j = JsonConvert.DeserializeObject<JObject>(str);
            Response.ContentType = "application/json";
            Response.Write(str);
        }

        public void delSB_ZZS_YBNSR_YGZSFFXCSMXB()
        {
            JObject return_j = new JObject();
            string return_str = "";
            string str = System.IO.File.ReadAllText(Server.MapPath("delSB_ZZS_YBNSR_YGZSFFXCSMXB.json"));
            return_str = str;
            return_j = JsonConvert.DeserializeObject<JObject>(str);
            Response.ContentType = "application/json";
            Response.Write(str);
        }

        public void getSB_ZZS_FB5()
        {
            JObject return_j = new JObject();
            string return_str = "";
            string str = System.IO.File.ReadAllText(Server.MapPath("getSB_ZZS_FB5.json"));
            return_str = str;
            return_j = JsonConvert.DeserializeObject<JObject>(str);
            Response.ContentType = "application/json";
            Response.Write(str);
        }

        public void insertSB_ZZS_FB5()
        {
            JObject return_j = new JObject();
            string return_str = "";
            string str = System.IO.File.ReadAllText(Server.MapPath("insertSB_ZZS_FB5.json"));
            return_str = str;
            return_j = JsonConvert.DeserializeObject<JObject>(str);
            Response.ContentType = "application/json";
            Response.Write(str);
        }

        public void delSB_ZZS_FB5()
        {
            JObject return_j = new JObject();
            string return_str = "";
            string str = System.IO.File.ReadAllText(Server.MapPath("delSB_ZZS_FB5.json"));
            return_str = str;
            return_j = JsonConvert.DeserializeObject<JObject>(str);
            Response.ContentType = "application/json";
            Response.Write(str);
        }

    }
}
