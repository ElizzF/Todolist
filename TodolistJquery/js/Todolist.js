$(function(){
    $('.search-btn').click(function(){
        var v=$("#add_list").val();
        if(v){
            $("#add_list").val("");
			sendMessage(v);
        }
        else{
            swal("请输入内容!",{
                icon:"error",
                button:"OK",
              });
            return;
        }
    });

    $("#add_list").keyup(function(){
        if(event.keyCode==13){
            $('.search-btn').click();
        }
    });
    
    $('.clear').click(function(){
        $('#main_content').empty();
    });
});

function sendMessage(v){
    $('#main_content').append("<div class='show'><div class='show_main'>"+v+"</div><div><button class='btn_update' onclick='update(this)'>修改</button><button class='btn_remove' onclick='remove(this)'>删除</button></div></div>");
}
function remove(obj){
    $($($(obj).parent()).parent()).remove();
}
function update(obj){
    swal("请输入修改的信息:",{
        content:"input",
    }).then((value)=>{
        $($($(obj).parent()).prev()).text(value);
    })
    
}      


