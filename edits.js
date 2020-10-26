// var boxcounter;
// $(function() {
//     boxcounter = 0;
//     $(".checkbox1").click(function() {
//         if(this.checked) {
//             counter++;
//             if(counter == 1){
//                 $("#editButton").attr("disabled", !this.checked);
//             }
//         } else {
//             counter--;
//             if(counter >1 || counter == 0){
//                 $("#editButton").attr("disabled", this.checked);
//             }
//         }
//     });
// });
 
var checkboxes = $("input[type='checkbox']")
     

checkboxes.click(function() {
    
    $(".checkbox1").click(function() {
        if(this.checked) {
            counter++; 
            if(counter == 1){
                $("#editButton").attr("disabled", !checkboxes.is(":checked"));
            }
        } else {
            counter--;
            if(counter >1 || counter == 0){
                $("#editButton").attr("disabled", !checkboxes.is(":checked"));
            }
        }
    });
});
