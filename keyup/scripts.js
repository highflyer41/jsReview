$('#add').keyup((e)=>{
    if(e.keyCode ==13){
        $('#text').append("<p>" + $('#add').val() + "</p>");
        $('#add').val('');
    };
});