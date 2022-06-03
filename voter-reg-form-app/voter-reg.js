"use strict"

window.onload = function(){
    const v_reg = document.getElementById("form_reg");
    form_reg.addEventListener("submit", printForData);

    function printForData(event){
        event.preventDefault();
        const v_num = document.getElementById("voterNo");
        const fname = document.getElementById("firstName");
        const lname = document.getElementById("lastName");
        const level_study = document.getElementById("levelOfStudy");

        // alert(
        //     `
        //     Voter Number: 
        //     `
        // )
        console.log(v_num .value);
        console.log(fname.value);
        console.log(lname.value);
        console.log(level_study.value);

        v_num.value = " ";
        fname.value = " ";
        lname.value = " ";
        level_study.value = " ";
    }
    
}