function new_(){
    $.ajax({
        type:"get",
        // 引用接口 192.168.1.119 自己电脑IP地址

        url:"http://192.168.1.119:3000/guid/new",
        success: function(res){
            // var res1=[]
            console.log(res);
            const tt=template('tpl',{
                res:res,
            })
            $('.shangping').html(tt);
        }
    })
}
new_();