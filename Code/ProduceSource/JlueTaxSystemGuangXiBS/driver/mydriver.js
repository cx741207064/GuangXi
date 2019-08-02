(function(){
    var mydriver=function () {
        //用户引导
        var driver = new Driver(); 
        // Define the steps for introduction
        driver.defineSteps([
          {
              element: '#top_tab_ul>li:nth-child(2)',
              popover: {
                  className: 'first-step-popover-class',
                  title: '我要申报',
                  description: '税费申报及缴纳在这里',
                  position: 'left'
              }
          },
          {
              element: '#id_wddb',
              popover: {
                  title: '我的待办',
                  description: '本月待办事项在这里',
                  position: 'top'
              }
          },
        ]);
        // Start the introduction
        driver.start();
    }

    mydriver();

})()
