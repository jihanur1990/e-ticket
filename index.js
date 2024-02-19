let total=0;
let seat_count=0;
let total_seat=24;
let grand_total=0;
document.getElementById("coupon-code").value=""
const seats=document.querySelectorAll(".seat")
for (const seat of seats) {
    seat.addEventListener("click", function(){
        const class_list=seat.classList.value;
        if(!class_list.includes("bg-green") && seat_count<=3){
            seat.classList.add("bg-green");
            //seat_count setting
           const seat_count_text= document.getElementById("seat-quantity");
           seat_count=seat_count+1;
           seat_count_text.innerText=seat_count;

           //decrease total seat
           const total_seat_text= document.getElementById("available-seat");
           total_seat=total_seat-1;
           total_seat_text.innerText=total_seat;

           //add seat into table
           const ticket_info= document.getElementById("ticket-info");
           const tr=document.createElement("tr");
           const td1=document.createElement("td");
           td1.innerText=seat.innerText;
           const td2=document.createElement("td");
           td2.innerText="Economic"
           const td3=document.createElement("td");
           td3.innerText=550;
           tr.appendChild(td1);
           tr.appendChild(td2);
           tr.appendChild(td3);
           ticket_info.appendChild(tr);

           //Calculate total amount
           total=total+550;
           const total_text=document.getElementById("total");
           total_text.innerText=total;
           document.getElementById("grand-total").innerText=total;
        }
    })
}

//coupon function

const couponBtn=document.getElementById("coupon-btn")
     couponBtn.addEventListener("click", function(){
        const coupon_sec=document.getElementById("coupon-sec")
    const couponCode=document.getElementById("coupon-code").value;
    const coupon=couponCode.toString();
    const total_price=parseFloat(document.getElementById("total").innerText);
    if(coupon==="NEW15"){
      grand_total=total_price-(total_price*15)/100;
      document.getElementById("grand-total").innerText=grand_total;
      document.getElementById("coupon-code").value="";
      coupon_sec.classList.add("hidden");
    }
    else if(coupon==="Couple 20"){
            grand_total=total_price-(total_price*20)/100;
            document.getElementById("grand-total").innerText=grand_total;
            document.getElementById("coupon-code").value="";
            coupon_sec.classList.add("hidden");
    }
   else {
    document.getElementById("coupon-code").value="";
   }
})

const next=document.getElementById("next-btn")

next.addEventListener("click", function(){
    const numberText=document.getElementById("p-number").value;
    const modal=document.getElementById("my_modal_5")
    const total_price=document.getElementById("total").innerText;
    const total=parseInt(total_price)
     if(numberText.length!==0 && total>0){
       modal.showModal();
     }
})

const continue_btn=document.getElementById("continue-btn");
continue_btn.addEventListener("click",function(){
    document.getElementById("p-number").value="";
    document.getElementById("total").innerText="0"
    document.getElementById("grand-total").innerText="0"
    seat_count=0;
    document.getElementById("seat-quantity").innerText="0";
    document.getElementById("p-number").value="";
    document.getElementById("name").value="";
    document.getElementById("email").value="";
    document.getElementById("coupon-sec").classList.remove("hidden")
    document.querySelectorg("#ticket-info").removeChild("tr");
})