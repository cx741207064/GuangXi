var gs_gjj = [
		//主表1申报明细-按税率
//		"{sbsjxxForm_ynsejljy}={sbsjxxForm_syslblsljljy}*{sbsjxxForm_xsejljy}",
//		"{sbsjxxForm_ynseyljy}={sbsjxxForm_syslblslyljy}*{sbsjxxForm_xseyljy}",
//		"{sbsjxxForm_ynsexjy}={sbsjxxForm_syslblslxjy}*{sbsjxxForm_xsexjy}",
//		"{sbsjxxForm_ynseys}={sbsjxxForm_syslblslys}*{sbsjxxForm_xseys}",
//		"{sbsjxxForm_ynsehj1}={sbsjxxForm_ynsejljy}+{sbsjxxForm_ynseyljy}+{sbsjxxForm_ynsexjy}+{sbsjxxForm_ynseys}",

		//add by fanyl 20150815 将sb001_xfssb.js内的酒类公式复制到此，用于界面手动触发公式计算，将上面的公式注释（上面的是老的，公式不正确）
		// 主表1申报明细-按税率
		"{sbsjxxForm_ynsejljy}={sbsjxxForm_syslblsljljy}*{sbsjxxForm_xsejljy}+({sbsjxxForm_xssljljy}*(30))",
		"{sbsjxxForm_ynseyljy}={sbsjxxForm_syslblslyljy}*{sbsjxxForm_xseyljy}+({sbsjxxForm_xsslyljy}*(30))",
		"{sbsjxxForm_ynsexjy}={sbsjxxForm_syslblslxjy}*{sbsjxxForm_xsexjy}",
		"{sbsjxxForm_ynseys}={sbsjxxForm_syslblslys}*{sbsjxxForm_xseys}",
		"{sbsjxxForm_ynsehj1}={sbsjxxForm_ynsejljy}+{sbsjxxForm_ynseyljy}+{sbsjxxForm_ynsexjy}+{sbsjxxForm_ynseys}",

		//主表2申报明细  modify by fanyl 20150511 卷烟批发应纳税额需要按数量加征，0.005元/支，总局20150507新需求
//		"{sbsjxxForm_ynsejy}={sbsjxxForm_sysljy}*{sbsjxxForm_xsejy}+({sbsjxxForm_xssljy}*(10000)*(0.005))",
//		"{sbsjxxForm_xsslhj2}={sbsjxxForm_xssljy}",
//		"{sbsjxxForm_xsehj2}={sbsjxxForm_xsejy}",
//		"{sbsjxxForm_ynsehj2}={sbsjxxForm_ynsejy}",

		//add by fanyl 20150815 将sb001_xfssb.js内的酒类公式复制到此，用于界面手动触发公式计算，将上面的公式注释（上面的是老的，公式不正确）
		// 主表2申报明细
		// 第一行公式（老税率，不加征从量税）
		"{sbsjxxForm_ynsejy}={sbsjxxForm_sysljy}*{sbsjxxForm_xsejy}",
		// 第二行公式（新税率，加征从量税）
		"{sbsjxxForm_ynsejy2}={sbsjxxForm_sysljy2}*{sbsjxxForm_xsejy2}+({sbsjxxForm_sysldeslyljypf2}*{sbsjxxForm_xssljy2})",
		// 合计公式
		"{sbsjxxForm_xsehj2}={sbsjxxForm_xsejy}+{sbsjxxForm_xsejy2}",
		"{sbsjxxForm_ynsehj2}={sbsjxxForm_ynsejy}+{sbsjxxForm_ynsejy2}",

		//主表3申报明细-按税率,数量
//		"{sbsjxxForm_ynselsbj}={sbsjxxForm_xselsbj}*{sbsjxxForm_syslblsllsbj}",
//		"{sbsjxxForm_ynseslbj}={sbsjxxForm_syslblslslbj}*{sbsjxxForm_xseslbj}",
//		"{sbsjxxForm_ynsejlpj}={sbsjxxForm_sysldesljlpj}*{sbsjxxForm_xssljlpj}",
//		"{sbsjxxForm_ynseylpj}={sbsjxxForm_sysldeslylpj}*{sbsjxxForm_xsslylpj}",
//		"{sbsjxxForm_ynsehj}={sbsjxxForm_sysldeslhj}*{sbsjxxForm_xsslhj}",
//		"{sbsjxxForm_ynseqtj}={sbsjxxForm_syslblslqtj}*{sbsjxxForm_xseqtj}",
//		"{sbsjxxForm_ynsejj}={sbsjxxForm_syslblsljj}*{sbsjxxForm_xsejj}",
//		"{sbsjxxForm_ynsehj3}={sbsjxxForm_ynselsbj}+{sbsjxxForm_ynseslbj}+{sbsjxxForm_ynsejlpj}+{sbsjxxForm_ynseylpj}+{sbsjxxForm_ynsehj}+{sbsjxxForm_ynseqtj}+{sbsjxxForm_ynsejj}",

		//add by fanyl 20150815 将sb001_xfssb.js内的酒类公式复制到此，用于界面手动触发公式计算，将上面的公式注释（上面的是老的，公式不正确）
		// 主表3申报明细-按税率,数量
		"{sbsjxxForm_ynselsbj}={sbsjxxForm_xselsbj}*{sbsjxxForm_syslblsllsbj}+({sbsjxxForm_xssllsbj}*(0.5))",
		"{sbsjxxForm_ynseslbj}={sbsjxxForm_syslblslslbj}*{sbsjxxForm_xseslbj}+({sbsjxxForm_xsslslbj}*(0.5))",
		"{sbsjxxForm_ynsejlpj}={sbsjxxForm_sysldesljlpj}*{sbsjxxForm_xssljlpj}",
		"{sbsjxxForm_ynseylpj}={sbsjxxForm_sysldeslylpj}*{sbsjxxForm_xsslylpj}",
		"{sbsjxxForm_ynsehj}={sbsjxxForm_sysldeslhj}*{sbsjxxForm_xsslhj}",
		"{sbsjxxForm_ynseqtj}={sbsjxxForm_syslblslqtj}*{sbsjxxForm_xseqtj}",
		// "{sbsjxxForm_ynsejj}={sbsjxxForm_syslblsljj}*{sbsjxxForm_xsejj}",
		"{sbsjxxForm_ynsehj3}={sbsjxxForm_ynselsbj}+{sbsjxxForm_ynseslbj}+{sbsjxxForm_ynsejlpj}+{sbsjxxForm_ynseylpj}+{sbsjxxForm_ynsehj}+{sbsjxxForm_ynseqtj}", // +{sbsjxxForm_ynsejj}",

		//主表4申报明细
		"{sbsjxxForm_ynsehqqy}={sbsjxxForm_syslhqqy}*{sbsjxxForm_xsslhqqy}",
		"{sbsjxxForm_ynsewqqy}={sbsjxxForm_syslwqqy}*{sbsjxxForm_xsslwqqy}",
		"{sbsjxxForm_ynsecy}={sbsjxxForm_syslcy}*{sbsjxxForm_xsslcy}",
		"{sbsjxxForm_ynsesny}={sbsjxxForm_syslsny}*{sbsjxxForm_xsslsny}",
		"{sbsjxxForm_ynserjy}={sbsjxxForm_syslrjy}*{sbsjxxForm_xsslrjy}",
		"{sbsjxxForm_ynserhy}={sbsjxxForm_syslrhy}*{sbsjxxForm_xsslrhy}",
		"{sbsjxxForm_ynserly}={sbsjxxForm_syslrly}*{sbsjxxForm_xsslrly}",
//		"{sbsjxxForm_ynsehkmy}={sbsjxxForm_syslhkmy}*{sbsjxxForm_xsslhkmy}",	
//		"{sbsjxxForm_xsslhj4}={sbsjxxForm_xsslhqqy}+{sbsjxxForm_xsslwqqy}+{sbsjxxForm_xsslcy}+{sbsjxxForm_xsslsny}+{sbsjxxForm_xsslrjy}+{sbsjxxForm_xsslrhy}+{sbsjxxForm_xsslrly}+{sbsjxxForm_xsslhkmy}",
//		"{sbsjxxForm_ynsehj4}={sbsjxxForm_ynsehqqy}+{sbsjxxForm_ynsewqqy}+{sbsjxxForm_ynsecy}+{sbsjxxForm_ynsesny}+{sbsjxxForm_ynserjy}+{sbsjxxForm_ynserhy}+{sbsjxxForm_xsslrly}+{sbsjxxForm_ynsehkmy}",
		"{sbsjxxForm_ynsehj4}={sbsjxxForm_ynsehqqy}+{sbsjxxForm_ynsewqqy}+{sbsjxxForm_ynsecy}+{sbsjxxForm_ynsesny}+{sbsjxxForm_ynserjy}+{sbsjxxForm_ynserhy}+{sbsjxxForm_ynserly}",

		//主表5申报明细
//		"{sbsjxxForm_ynseqg1}={sbsjxxForm_syslqg1}*{sbsjxxForm_xseqg1}",	
//		"{sbsjxxForm_ynseqg2}={sbsjxxForm_syslqg2}*{sbsjxxForm_xseqg2}",
//		"{sbsjxxForm_ynseqg3}={sbsjxxForm_syslqg3}*{sbsjxxForm_xseqg3}",
//		"{sbsjxxForm_ynseqg4}={sbsjxxForm_syslqg4}*{sbsjxxForm_xseqg4}",
//		"{sbsjxxForm_ynseqg5}={sbsjxxForm_syslqg5}*{sbsjxxForm_xseqg5}",
//		"{sbsjxxForm_ynseqg6}={sbsjxxForm_syslqg6}*{sbsjxxForm_xseqg6}",
//		"{sbsjxxForm_ynseqg7}={sbsjxxForm_syslqg7}*{sbsjxxForm_xseqg7}",
//		"{sbsjxxForm_ynsezxsykc}={sbsjxxForm_syslzxsykc}*{sbsjxxForm_xsezxsykc}",
//		"{sbsjxxForm_ynsehj5}={sbsjxxForm_ynseqg1}+{sbsjxxForm_ynseqg2}+{sbsjxxForm_ynseqg3}+{sbsjxxForm_ynseqg4}+{sbsjxxForm_ynseqg5}+{sbsjxxForm_ynseqg6}+{sbsjxxForm_ynseqg7}+{sbsjxxForm_ynsezxsykc}",

		//add by fanyl 20150815 将sb001_xfssb.js内的酒类公式复制到此，用于界面手动触发公式计算，将上面的公式注释（上面的是老的，公式不正确）
		"{sbsjxxForm_ynseqg1}={sbsjxxForm_syslqg1}*{sbsjxxForm_xseqg1}",
		"{sbsjxxForm_ynseqg2}={sbsjxxForm_syslqg2}*{sbsjxxForm_xseqg2}",
		"{sbsjxxForm_ynseqg3}={sbsjxxForm_syslqg3}*{sbsjxxForm_xseqg3}",
		"{sbsjxxForm_ynseqg4}={sbsjxxForm_syslqg4}*{sbsjxxForm_xseqg4}",
		"{sbsjxxForm_ynseqg5}={sbsjxxForm_syslqg5}*{sbsjxxForm_xseqg5}",
		"{sbsjxxForm_ynseqg6}={sbsjxxForm_syslqg6}*{sbsjxxForm_xseqg6}",
		"{sbsjxxForm_ynseqg7}={sbsjxxForm_syslqg7}*{sbsjxxForm_xseqg7}",
		"{sbsjxxForm_ynsezxsykc}={sbsjxxForm_syslzxsykc}*{sbsjxxForm_xsezxsykc}",
		"{sbsjxxForm_ynsehj5}={sbsjxxForm_ynseqg1}+{sbsjxxForm_ynseqg2}+{sbsjxxForm_ynseqg3}+{sbsjxxForm_ynseqg4}+{sbsjxxForm_ynseqg5}+{sbsjxxForm_ynseqg6}+{sbsjxxForm_ynseqg7}+{sbsjxxForm_ynsezxsykc}",

		// 主表7申报明细
		"{sbsjxxForm_ynsedc1}={sbsjxxForm_sysldc1}*{sbsjxxForm_xsedc1}",
		"{sbsjxxForm_ynsehj7}={sbsjxxForm_ynsedc1}",

		// 主表8申报明细
		"{sbsjxxForm_ynsetl}={sbsjxxForm_sysltl}*{sbsjxxForm_xsetl}",



		// 本期应抵扣税额
		"{sbsjxxForm_bqydkse}={sbsjxxForm_qclqse}+{sbsjxxForm_bqzykcse}",
		// 期末留抵税额
		"{sbsjxxForm_qmldse}=IF(({sbsjxxForm_bqydkse}-{sbsjxxForm_ynsehj4}+{sbsjxxForm_bqjse})>0,{sbsjxxForm_bqydkse}-{sbsjxxForm_ynsehj4}+{sbsjxxForm_bqjse},0)",
		// 本期实际抵扣 税额
		"{sbsjxxForm_bqsjdkse}={sbsjxxForm_bqydkse}-{sbsjxxForm_qmldse}",
		// 本期应补(退)税额
//		"{sbsjxxForm_bqybtse}={sbsjxxForm_ynsehj4}-{sbsjxxForm_bqsjdkse}-{sbsjxxForm_bqjse}-{sbsjxxForm_bqyjse}",
		// 期末未缴税额
		"{sbsjxxForm_qmwjse}={sbsjxxForm_qcwjse}+{sbsjxxForm_bqybtse}-{sbsjxxForm_bqjnqqynse}",

//		"{sbsjxxForm_bqydkse}={sbsjxxForm_qclqse}+{sbsjxxForm_bqzykcse}",
//	    "{sbsjxxForm_qmldse}={sbsjxxForm_bqydkse}-{sbsjxxForm_ynsehj4}+{sbsjxxForm_bqjse}",
//	    "{sbsjxxForm_bqsjdkse}={sbsjxxForm_bqydkse}-{sbsjxxForm_qmldse}",
//	    "{sbsjxxForm_qmwjse}={sbsjxxForm_qcwjse}+{sbsjxxForm_bqybtse}-{sbsjxxForm_bqjnqqynse}",
//	    "{sbsjxxForm_bqybtse}={sbsjxxForm_ynsehj1}-{sbsjxxForm_bqjse} +{sbsjxxForm_bqyjse}+{sbsjxxForm_ynsehj2}-{sbsjxxForm_bqyjse}+{sbsjxxForm_ynsehj3}-{sbsjxxForm_bqjse}-{sbsjxxForm_bqyjse}+{sbsjxxForm_ynsehj5}-{sbsjxxForm_bqjse}-{sbsjxxForm_bqyjse}-{sbsjxxForm_ynsehj6}-{sbsjxxForm_bqzykcse}-{sbsjxxForm_bqjse}-{sbsjxxForm_bqyjse}",


		// 本期应补(退)税额
		//"{sbsjxxForm_bqybtse}={sbsjxxForm_ynsehj3}-{sbsjxxForm_bqzykcse}-{sbsjxxForm_bqjse}-{sbsjxxForm_bqyjse}",
		// 期末未缴税额
		"{sbsjxxForm_qmwjse}={sbsjxxForm_qcwjse}+{sbsjxxForm_bqybtse}-{sbsjxxForm_bqjnqqynse}"

		//公共合计
		//"{sbsjxxForm_ynseheji}={sbsjxxForm_ynsehj1}+{sbsjxxForm_ynsehj2}+{sbsjxxForm_ynsehj3}+{sbsjxxForm_ynsehj4}+{sbsjxxForm_ynsehj5}"

];
