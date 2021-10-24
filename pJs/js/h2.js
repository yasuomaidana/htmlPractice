function billingFunction(){
    var same = document.getElementById("same");
    let checked = same.checked;

    var billingName = document.getElementById("billingName");
    var billingZip = document.getElementById("billingZip");
    if(checked){
        billingName.value = document.getElementById("shippingName").value;
        billingZip.value = document.getElementById("shippingZip").value;
    }
    else{
        billingName.value = "";
        billingZip.value = "";
    }
}