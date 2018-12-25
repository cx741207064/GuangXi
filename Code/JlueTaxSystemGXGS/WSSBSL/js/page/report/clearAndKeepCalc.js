
//æ¸…é™¤å…¨è¡¨å…¬å¼å¹¶ä¿ç•™å®šä¹‰è¡Œæ¬¡çš„å…¬å¼ï¼Œå¹¶æ‰§è¡Œä¸€æ¬¡å…¨è¡¨å…¬å¼è®¡ç®—
function clearCalcAndKeepCalc(bbmc) {
    var noClearRows = getNoClearRow(bbmc);
    if (noClearRows != null) {
        if (dynamicBz == "N" || typeof (dynamicBz) == "undefined") {
            var calcFunTxt = report1_autoCalc + '';
            for (var row = 0; row < report1.rows.length; row++) {
                var currRow = report1.rows[row];//å–å¾—è¡Œ 
                var rn = $(currRow).attr("rn");
                if (strIsIntoString(noClearRows, rn) == false) {
                    for (var col = 0; col < currRow.cells.length; col++) {
                        var currCell = currRow.cells[col];//å–å¾—æŒ‡å®šè¡Œåˆ—ï¼ˆå•å…ƒæ ¼ï¼‰
                        var cellid = $(currCell).attr("id");
                        //æ¸…é™¤å…¬å¼
                        var replaceStr1 = "document.getElementById( '" + cellid + "' ).setAttribute( 'value', value + \"\" );";
                        var replaceStr2 = "document.getElementById( '" + cellid + "' ).textContent = value + \"\";";
                        var replaceStr3 = "document.getElementById( '" + cellid + "' ).innerText = value + \"\";";
                        var replaceStr4 = "_formatCalcValue( document.getElementById( '" + cellid + "' ) );";
                        calcFunTxt = myReplaceAll(calcFunTxt, replaceStr1, "");
                        calcFunTxt = myReplaceAll(calcFunTxt, replaceStr2, "");
                        calcFunTxt = myReplaceAll(calcFunTxt, replaceStr3, "");
                        calcFunTxt = myReplaceAll(calcFunTxt, replaceStr4, "");
                    }
                }
            }
            calcFunTxt = "report1_autoCalc=function" + calcFunTxt.substring(25, calcFunTxt.length);
            eval(calcFunTxt);
            report1_autoCalc('');//éžè¡Œå¼æŠ¥è¡¨-å…¨è¡¨å…¬å¼è®¡ç®—
        } else {
            for (var row = 0; row < report1.rows.length; row++) {
                var currRow = report1.rows[row];//å–å¾—è¡Œ 
                for (var col = 0; col < currRow.cells.length; col++) {
                    var currCell = currRow.cells[col];//å–å¾—æŒ‡å®šè¡Œåˆ—ï¼ˆå•å…ƒæ ¼ï¼‰ 
                    var cellsc = $(currCell).attr("sc");
                    var rownum = cellsc.substring(1, cellsc.length);
                    if (strIsIntoString(noClearRows, rownum) == false) {
                        //æ¸…é™¤å…¬å¼
                        $(currCell).attr("calc", "");
                    }
                }
            }
            dynamicAutoCalc();//è¡Œå¼æŠ¥è¡¨-å…¨è¡¨å…¬å¼è®¡ç®—
        }
    }
}

//èŽ·å–é…ç½®
function getNoClearRow(bbmc) {

    // å¹´åº¦æ‰€å¾—ç¨ŽAç±»é™„è¡¨18
    if (bbmc == "WBJK_SB_NDSDS_2014_FB18") {
        return "5,10,15,20,24";// åˆè®¡æ‰€åœ¨è¡Œå·ï¼Œå¤šä¸ªè¡Œä½¿ç”¨é€—å·åˆ†å¼€
    }
        // å¹´åº¦æ‰€å¾—ç¨ŽAç±»é™„è¡¨22
    else if (bbmc == "WBJK_SB_NDSDS_2014_FB22") {
        return "6,7,8,9,10,11,12";
    }
        // å¹´åº¦æ‰€å¾—ç¨ŽAç±»é™„è¡¨24
    else if (bbmc == "WBJK_SB_NDSDS_2014_FB24") {
        return "7";
    }
        // å¹´åº¦æ‰€å¾—ç¨ŽAç±»é™„è¡¨25
    else if (bbmc == "WBJK_SB_NDSDS_2014_FB25") {
        return "7";
    }
        // å¹´åº¦æ‰€å¾—ç¨ŽAç±»é™„è¡¨27
    else if (bbmc == "WBJK_SB_NDSDS_2014_FB27") {
        return "7";
    }
        // å¹´åº¦æ‰€å¾—ç¨ŽAç±»é™„è¡¨34
    else if (bbmc == "WBJK_SB_NDSDS_2014_FB34") {
        return "15";
    }
        // å¹´åº¦æ‰€å¾—ç¨ŽAç±»é™„è¡¨35
    else if (bbmc == "WBJK_SB_NDSDS_2014_FB35") {
        return "15";
    }
        // å¹´åº¦æ‰€å¾—ç¨ŽAç±»é™„è¡¨36
    else if (bbmc == "WBJK_SB_NDSDS_2014_FB36") {
        return "16";
    }
        // å¹´åº¦æ‰€å¾—ç¨ŽAç±»é™„è¡¨37
    else if (bbmc == "WBJK_SB_NDSDS_2014_FB37") {
        return "15";
    }
        // å¹´åº¦æ‰€å¾—ç¨ŽAç±»é™„è¡¨39
    else if (bbmc == "WBJK_SB_NDSDS_2014_FB39") {
        return "9";
    }
        // å¢žå€¼ç¨Žä¸€èˆ¬çº³ç¨Žäºº-å†œäº§å“æ±‡æ€»è¡¨
    else if (bbmc == "WBJK_SB_ZZS_NCPDKJSB") {
        return "9";
    }
        // å¢žå€¼ç¨Žä¸€èˆ¬çº³ç¨Žäºº-å›ºå®šèµ„äº§è¿›é¡¹ç¨Žé¢æŠµæ‰£æƒ…å†µè¡¨
    else if (bbmc == "WBJK_SB_ZZS_2003_FB_GDZCJXSEDK") {
        return "9";
    }
    return null;
}
