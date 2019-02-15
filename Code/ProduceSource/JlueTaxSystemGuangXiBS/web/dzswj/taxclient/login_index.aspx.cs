using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using JlueTaxSystemGuangXiBS.Code;

namespace JlueTaxSystemGuangXiBS.web.dzswj.taxclient
{
    public partial class login_index : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            try
            {
                log4net.ILog log = log4net.LogManager.GetLogger(typeof(QuestionMain));
                log.Info("login_index页面Page_Load方法开始执行！");

                string questionId = (Request.QueryString["questionId"] == null ? "" : Request.QueryString["questionId"].ToString());
                if (questionId != "")
                {
                    string userquestionId = Request.QueryString["userquestionId"].ToString();
                    string companyId = Request.QueryString["companyId"].ToString();
                    string classId = Request.QueryString["classid"].ToString();
                    string courseId = Request.QueryString["courseid"].ToString();
                    string userId = Request.QueryString["userid"].ToString();
                    string Name = Request.QueryString["Name"].ToString();

                    Session["questionId"] = questionId;
                    Session["userquestionId"] = userquestionId;
                    Session["companyId"] = companyId;
                    Session["classId"] = classId;
                    Session["courseId"] = courseId;
                    Session["userId"] = userId;
                    Session["Name"] = Name;

                }

                log.Info("login_index页面Page_Load方法执行结束！");

            }
            catch (Exception ex)
            {
                log4net.ILog log = log4net.LogManager.GetLogger(typeof(login_index));
                log.Error(ex.Message);
            }
        }
    }
}