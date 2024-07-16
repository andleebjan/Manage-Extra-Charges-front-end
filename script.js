

//defaultamount and percentage
const input1 = document.getElementById('defaultamount');
const input2 = document.getElementById('defaultpercent');

input1.addEventListener('input', function() {
    input2.value = '';
});

input2.addEventListener('input', function() {
input1.value = '';
 });

