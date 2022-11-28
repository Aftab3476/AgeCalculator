function calculateDiff() {
    let date_1 = document.getElementById('bDate').value;
    let date_2 = document.getElementById('cDate').value;
    console.log(date_1, date_2)

    if(!date_1){
        alert('Please provide you Date of Birth.') 
    } 
    else {
        if (!date_2) {
            date_2 = new Date().toJSON().slice(0, 10)
        };
        let output = document.getElementById('showAge');

        if (date_1 > date_2) {
            output.innerHTML = "Hahahaha! You were not born till that."
        } else if(date_1.slice(5, 10) === date_2.slice(5,10)){
            output.innerHTML = "Wish you a very happy birthday."
        }else{
            const dob = new Date(date_1);
            const cDate = new Date(date_2);
    
            const diff = new Date(cDate.getTime() - dob.getTime());
            output.id = "showAge";
    
           
            output.innerHTML = `Age:  ${Number(diff.getUTCFullYear() - 1970)} Years ${diff.getUTCMonth()} Months ${Number(diff.getUTCDate() - 1)} Days`
        }



    }    
}