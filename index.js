$(function () {
    // 送信
    $('form').submit(function () {
        var weight = $('input[name="weight"]').val();
        var height = $('input[name="height"]').val();
        var age = $('input[name="age"]').val();
        var sex = $('input[name="sex"]:checked').val();
        var strength = $('input[name="strength"]selected').val();
      
        var basal_metabolism;
        
        if(sex=='men'){
          basal_metabolism = 13.397 * weight + 4.799 * height - 5.677 * age + 88.362;
        }else{
          basal_metabolism = 9.247 * weight + 3.098 * height - 4.33 * age + 447.593;
        }
       
        var maintenance_cal = basal_metabolism * strength;
            
        var msg = `メンテナンスカロリー：${maintenance_cal}\n`;
        sendText(msg);

        return false;
    });
});
