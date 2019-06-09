function updatebox()
{
    var textbox = document.getElementById("list");
    var values = [];

    if(document.getElementById('cb2').checked) {
        values.push("cancel account");
    }

    if(document.getElementById('cb3').checked) {
        values.push("remove sports");
    }

    if(document.getElementById('cb4').checked) {
        values.push("remove cinema");
    }
    
    if(document.getElementById('cb5').checked) {
        values.push("remove sports and cinema");
    }

    if(document.getElementById('cb6').checked) {
        values.push("cancel broadband");
    }

    if(document.getElementById('cb7').checked) {
        values.push("remove-");
    }
    
     if(document.getElementById('cb8').checked) {
        values.push("enquire about bills");
    }
    
    if(document.getElementById('cb9').checked) {
        values.push("returning from competitor");
    }
    
  
    textbox.value = values.join(" ");
}