option explicit
dim d_col
dim d_row
dim startValue
'屏蔽删除键
Sub DCellWeb1_AllowDelCell(ByVal col, ByVal row, approve)
    'approve = 0
End Sub
'屏蔽公式
Sub DCellWeb1_AllowInputFormula(ByVal col, ByVal row, approve)
    approve = 0
End Sub

Sub DCellWeb1_AllowEditCell(col, row, approve )	
    d_col = col
    d_row = row
    startValue = DCellWeb1.GetCellDouble2(col, row, 0)
End Sub

'默认为0
Sub DCellWeb1_EditFinish(text, approve)
	dim cellType
	dim numType
	dim result
	dim cellValue
	dim dateStyle
	dim digital
	
	cellType = DCellWeb1.GetCellType(d_col, d_row, 0)
    numType = DCellWeb1.GetCellNumType(d_col, d_row, 0)
    digital = DCellWeb1.GetCellDigital(d_col, d_row, 0)
    
    If (text = "" or text = "-") And cellType = 0 And (numType = 1 or numType = 5) Then    	
        text = 0
    End If
   
    If cellType = 0 And ( numType = 1 Or numType = 5) Then
	    If text >= 10000000000000 Or text <= -10000000000000 Then
	    	alert( "输入的数据太大，请修改!")
	        approve=0
	        Exit Sub
	    End If
	    result = checkDigital(text, digital)
	    If result = false then
        	alert("输入小数位过长")
        	text = ""
        	approve = 0
        	Exit Sub
        End If
    End If
    If cellType = 0 And numType = 3 then
	   	cellValue = DCellWeb1.GetCellString2(d_col,d_row,0)
	   	dateStyle = DCellWeb1.GetCellDateStyle(d_col,d_row,0)
	   	If cellValue <> "" And dateStyle = 22 Then 
        	result = checkDateForCell(cellValue)
        	If result = false then
	        	alert("输入的日期格式不正确，请输入的日期如'2014-01-01'")
	        	text = ""
	        	approve = 1
	        	Exit Sub
	        End If
	   Elseif cellValue <> "" And dateStyle = 23 Then
	   		result = checkDateForCellND(cellValue)
        	If result = false then
	        	alert("输入的日期格式不正确，请输入的日期如'2014'")
	        	text = ""
	        	approve = 0
	        	Exit Sub
	        End If
	        '加入-01使格式正确
	        text = cellValue + "-01"
	   End If
    End If

    CellChangeCheck text,startValue

    result = CellInputCheck(d_col,d_row, 0, text )
    if result=false Then
        approve=0
    End if
    
End Sub

function DCellWeb1_DropCellSelected(col, row)
    DCellWeb1_DropCellSelected_JS col, row
End function

Sub DCellWeb1_ButtonCellClicked(col, row, sheet)
	DCellWeb1_ButtonCellClicked_JS col, row, sheet
End Sub
Sub DCellWeb1_RadioCellChanged(col, row)
	DCellWeb1_RadioCellChanged_JS col, row
End Sub

Sub DCellWeb1_MouseDClick(col, row)
	DCellWeb1_MouseDClick_JS col, row	
	MouseLClick col,row
End Sub

Sub DCellWeb1_OnCopy(ByVal  col1,ByVal  row1,ByVal  col2, ByVal row2, ByRef approve)
End Sub
 
Sub DCellWeb1_OnPaste(ByVal col, ByVal row,byref approve )
    DCellWeb1.DefineDoubleVar "control", 1
    DCellWeb1.SetEventProcessed True
	DCellWeb1.Paste col, row, 2, 1, 0
End Sub 


Sub DCellWeb1_MenuStart( ByVal col, ByVal row, ByVal section )
    dim col1
    dim row1
    dim col2
    dim row2
    DCellWeb1.GetSelectRange col1, row1, col2, row2
	select case section
	   case "1"
		 'DCellWeb1.AddPopMenu 1000, "剪切", 0
		 DCellWeb1.AddPopMenu 1001, "复制", 0
		 DCellWeb1.AddPopMenu 1002, "粘贴", 0
		 DCellWeb1.AddPopMenu 1003, "清除", 0
	end select
End Sub

Sub DCellWeb1_MenuCommand( ByVal col, ByVal row, ByVal itemid )
    dim col1
    dim row1
    dim col2
    dim row2
    DCellWeb1.GetSelectRange col1, row1, col2, row2
	select case itemid
	  case "1000"
	  'DCellWeb1.CutRange col1, row1, col2, row2
	  case "1001"
	  DCellWeb1.CopyRange col1, row1, col2, row2
	  case "1002"
	  DCellWeb1.Paste col, row, 2, 1, 0
      case "1003"
      DCellWeb1.ClearArea col1, row1, col2, row2,0,1
    end select

End Sub

Sub DCellWeb1_AfterPaste(sheet, c1, r1, c2, r2)
    dim val
    dim result
    dim cellType
    dim numType
    DCellWeb1.DefineDoubleVar "control", 1
    cellType = DCellWeb1.GetCellType(c1, r1, 0)
    numType = DCellWeb1.GetCellNumType(c1, r1, 0)
    If cellType = 0 And ( numType = 1 Or numType = 5) Then
        val = DCellWeb1.GetCellDouble2(c1, r1, 0)
        result = CellInputCheck(c1, r1, 0, val )
    end If

End Sub

Sub DCellWeb1_MouseLClick(col,row,updn)
	MouseLClick col,row,updn
End Sub

Sub DCellWeb1_TopRowChange(oldRow,newRow)
	TopRowChange oldRow,newRow
End Sub

Sub DCellWeb1_LeftColChange(oldCol,newCol)
	LeftColChange oldCol,newCol
End Sub

Sub DCellWeb1_CheckCellChanged(col,row)
	CheckCellChanged col,row
End Sub


function EnumVar4Js(i, cell)
	dim strName
	dim strType
	dim result
	result = cell.EnumVar(i,strName,strType)
	EnumVar4Js=result & "," & strName & "," & strType
end function

function GetCellVar4Js(strName, cell)
	dim ncol
	dim nrow
	dim nsheet
	dim result
	result = cell.GetCellVar(strName,ncol,nrow,nsheet)
	GetCellVar4Js = result & "," & ncol & "," & nrow & "," & nsheet
end Function

function LabelToCellEx4Js(label, cell)
    dim ncol
    dim nrow
    dim nsheet
    dim result 
    result = cell.LabelToCellEx(label, nsheet, ncol, nrow)
    LabelToCellEx4Js = result & "," & ncol & "," & nrow & "," & nsheet
end Function

function LabelToCell4Js(label, cell)
    dim ncol
    dim nrow
    dim result 
    result = cell.LabelToCell(label, ncol, nrow)
    LabelToCell4Js = result & "," & ncol & "," & nrow
end Function

Function GetDoubleVar4Js(strName, cell)
	Dim value
	Dim result
	result = cell.GetDoubleVar(strName, value)
	GetDoubleVar4Js = result & "," & value
End Function

Function GetStringVar4Js(strName, cell)
	dim value
	dim result
	result = cell.GetStringVar(strName, value)
	GetStringVar4Js = result & "," & value
End Function


Function GetCellRect4Js(col,row,cell)
	dim result
	dim left
	dim top
	dim right
	dim bottom

	result = cell.GetCellRect(col,row,left,top,right,bottom,true,true)
	GetCellRect4Js = result & "," & left & "," & top & "," & right & "," & bottom
End Function

