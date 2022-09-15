
let form_bill = document.getElementById("form_bill");
// console.log(form_bill);

let Bill = document.getElementById("Bill");
// console.log(Bill);

Bill.oninput = function(){
    // console.log(Bill.value);
    if(+Bill.value <= 0  ){
        form_bill.classList.remove("hidden");
        Bill.style.borderColor = "red";
    }else{
        form_bill.classList.add("hidden");
        Bill.style.borderColor = "#26c0ab";

    }

}

let NumberOfPeople = document.getElementById("Number_of_People");
// console.log(NumberOfPeople);

let formPeople = document.getElementById("form_People");
// console.log(formPeople);

NumberOfPeople.oninput = function(){
    // console.log(NumberOfPeople.value);
    if(+NumberOfPeople.value <= 0  ){
        formPeople.classList.remove("hidden");
        NumberOfPeople.style.borderColor = "red";
    }else{
        formPeople.classList.add("hidden");
        NumberOfPeople.style.borderColor = "#26c0ab";

    }

}




let tip5 = document.getElementById("tip5");
let tip10 = document.getElementById("tip10");
let tip15 = document.getElementById("tip15");
let tip25 = document.getElementById("tip25");
let tip50 = document.getElementById("tip50");
let Custom = document.getElementById("Custom");
// console.log(tip5);
// console.log(tip10);
// console.log(tip15);
// console.log(tip25);
// console.log(tip50);
// console.log(Custom);

tip5.onclick = function(){
    if(+Bill.value <= 0  ){
        // console.log("true");
        form_bill.classList.remove("hidden");
    }
    // console.log(+Bill.value * parseInt(this.innerHTML)/ 100);
    if(+NumberOfPeople.value <= 0  ){
        formPeople.classList.remove("hidden");
    }else{
        formPeople.classList.add("hidden");
    }
    // console.log(tip5.innerHTML);

    tip10.style.color = "#c5e4e7";
    tip10.style.backgroundColor = "#00494d";

    tip15.style.color = "#c5e4e7";
    tip15.style.backgroundColor = "#00494d";

    tip25.style.color = "#c5e4e7";
    tip25.style.backgroundColor = "#00494d";

    tip50.style.color = "#c5e4e7";
    tip50.style.backgroundColor = "#00494d";

    
     this.style.color = "#00494d";
     this.style.backgroundColor = "#26c0ab";

    tipAmount.innerHTML ="$" +  ((+Bill.value * parseInt(this.innerHTML)/ 100) / +NumberOfPeople.value).toFixed(2)
    Total.innerHTML ="$" +  (((+Bill.value) / (+NumberOfPeople.value)) + (+((+Bill.value * parseInt(this.innerHTML)/ 100) / +NumberOfPeople.value).toFixed(2))).toFixed(2);


   

}

// tipAmount.innerHTML ="error";
// Total.innerHTML ="error";




tip10.onclick = function(){
    if(+Bill.value <= 0  ){
        // console.log("true");
        form_bill.classList.remove("hidden");
    }
    // console.log(+Bill.value * parseInt(this.innerHTML)/ 100);
    if(+NumberOfPeople.value <= 0  ){
        formPeople.classList.remove("hidden");
    }else{
        formPeople.classList.add("hidden");
    }
    // console.log(tip10.innerHTML);

    tip5.style.color = "#c5e4e7";
    tip5.style.backgroundColor = "#00494d";

    tip15.style.color = "#c5e4e7";
    tip15.style.backgroundColor = "#00494d";

    tip25.style.color = "#c5e4e7";
    tip25.style.backgroundColor = "#00494d";

    tip50.style.color = "#c5e4e7";
    tip50.style.backgroundColor = "#00494d";
    this.style.color = "#00494d";
    this.style.backgroundColor = "#26c0ab";

    tipAmount.innerHTML ="$" +  ((+Bill.value * parseInt(this.innerHTML)/ 100) / +NumberOfPeople.value).toFixed(2)
    Total.innerHTML ="$" +  (((+Bill.value) / (+NumberOfPeople.value)) + (+((+Bill.value * parseInt(this.innerHTML)/ 100) / +NumberOfPeople.value).toFixed(2))).toFixed(2);

}
tip15.onclick = function(){
    if(+Bill.value <= 0  ){
        // console.log("true");
        form_bill.classList.remove("hidden");
    }
    // console.log(+Bill.value * parseInt(this.innerHTML)/ 100);
    if(+NumberOfPeople.value <= 0  ){
        formPeople.classList.remove("hidden");
    }else{
        formPeople.classList.add("hidden");
    }
    // console.log(tip15.innerHTML);

    tip5.style.color = "#c5e4e7";
    tip5.style.backgroundColor = "#00494d";

    tip10.style.color = "#c5e4e7";
    tip10.style.backgroundColor = "#00494d";

    tip25.style.color = "#c5e4e7";
    tip25.style.backgroundColor = "#00494d";

    tip50.style.color = "#c5e4e7";
    tip50.style.backgroundColor = "#00494d";
    this.style.color = "#00494d";
    this.style.backgroundColor = "#26c0ab";

    tipAmount.innerHTML ="$" + ((+Bill.value * parseInt(this.innerHTML)/ 100) / +NumberOfPeople.value).toFixed(2)
    Total.innerHTML ="$" + (((+Bill.value) / (+NumberOfPeople.value)) + (+((+Bill.value * parseInt(this.innerHTML)/ 100) / +NumberOfPeople.value).toFixed(2))).toFixed(2);

}
tip25.onclick = function(){
    if(+Bill.value <= 0  ){
        // console.log("true");
        form_bill.classList.remove("hidden");
    }
    // console.log(+Bill.value * parseInt(this.innerHTML)/ 100);
    if(+NumberOfPeople.value <= 0  ){
        formPeople.classList.remove("hidden");
    }else{
        formPeople.classList.add("hidden");
    }
    // console.log(tip25.innerHTML);

    tip5.style.color = "#c5e4e7";
    tip5.style.backgroundColor = "#00494d";

    tip15.style.color = "#c5e4e7";
    tip15.style.backgroundColor = "#00494d";

    tip10.style.color = "#c5e4e7";
    tip10.style.backgroundColor = "#00494d";

    tip50.style.color = "#c5e4e7";
    tip50.style.backgroundColor = "#00494d";
    this.style.color = "#00494d";
    this.style.backgroundColor = "#26c0ab";

    tipAmount.innerHTML ="$" + ((+Bill.value * parseInt(this.innerHTML)/ 100) / +NumberOfPeople.value).toFixed(2)
    Total.innerHTML ="$" + (((+Bill.value) / (+NumberOfPeople.value)) + (+((+Bill.value * parseInt(this.innerHTML)/ 100) / +NumberOfPeople.value).toFixed(2))).toFixed(2);

}
tip50.onclick = function(){
    if(+Bill.value <= 0  ){
        // console.log("true");
        form_bill.classList.remove("hidden");
    }
    // console.log(+Bill.value * parseInt(this.innerHTML)/ 100);
    if(+NumberOfPeople.value <= 0  ){
        formPeople.classList.remove("hidden");
    }else{
        formPeople.classList.add("hidden");
    }
    // console.log(tip50.innerHTML);

    tip5.style.color = "#c5e4e7";
    tip5.style.backgroundColor = "#00494d";

    tip15.style.color = "#c5e4e7";
    tip15.style.backgroundColor = "#00494d";

    tip25.style.color = "#c5e4e7";
    tip25.style.backgroundColor = "#00494d";

    tip10.style.color = "#c5e4e7";
    tip10.style.backgroundColor = "#00494d";
    this.style.color = "#00494d";
    this.style.backgroundColor = "#26c0ab";

    tipAmount.innerHTML = "$" + ((+Bill.value * parseInt(this.innerHTML)/ 100) / +NumberOfPeople.value).toFixed(2)
    Total.innerHTML = "$" + (((+Bill.value) / (+NumberOfPeople.value)) + (+((+Bill.value * parseInt(this.innerHTML)/ 100) / +NumberOfPeople.value).toFixed(2))).toFixed(2);

}
Custom.oninput = function(){
    if(+Bill.value <= 0  ){
        // console.log("true");
        form_bill.classList.remove("hidden");
    }
    // if(+this.value <= 0 ){
    //     console.log("true");
    //     
    // }

    // console.log(+Bill.value * parseInt(this.value)/ 100);
    if(+NumberOfPeople.value <= 0  ){
        formPeople.classList.remove("hidden");
    }else{
        formPeople.classList.add("hidden");
    }
    // console.log(Custom.value);



    tipAmount.innerHTML = "$" + ((+Bill.value * parseInt(Custom.value)/ 100) / +NumberOfPeople.value).toFixed(2)
    Total.innerHTML = "$" + (((+Bill.value) / (+NumberOfPeople.value)) + (+((+Bill.value * parseInt(Custom.value)/ 100) / +NumberOfPeople.value).toFixed(2))).toFixed(2);

}

Custom.onclick = function(){
    tip5.style.color = "#c5e4e7";
    tip5.style.backgroundColor = "#00494d";

    tip15.style.color = "#c5e4e7";
    tip15.style.backgroundColor = "#00494d";

    tip25.style.color = "#c5e4e7";
    tip25.style.backgroundColor = "#00494d";

    tip10.style.color = "#c5e4e7";
    tip10.style.backgroundColor = "#00494d";

    tip50.style.color = "#c5e4e7";
    tip50.style.backgroundColor = "#00494d";
}


let tipAmount = document.getElementById("Tip_Amount");
let Total = document.getElementById("Total");
let inputReset = document.getElementById("input_reset");
// console.log(tipAmount);
// console.log(Total);
// console.log(inputReset);

inputReset.onclick = function(){
    tipAmount.innerHTML = "$0.00";
    Total.innerHTML = "$0.00";
}
