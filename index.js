
const errorMessage = "Can't be zero."
const errorParagraph = document.querySelector('.errorMessage').textContent
/* 5% TIP*/ 
document.querySelector('.one').addEventListener('click',()=>{
    const billValue = parseFloat(document.getElementById('payment_input').value)
    const peopleValue = parseFloat(document.getElementById('people').value)
    if(peopleValue===0){
        document.querySelector('.errorMessage').textContent = "Can't be zero"
    }
    else{
        const tipCalculated = parseFloat((billValue/peopleValue)*.05).toFixed(2)
        const totalCalculated = parseFloat((billValue/peopleValue)+tipCalculated).toFixed(2)
        document.querySelector('.tip-per-person').textContent = '$'+ tipCalculated
        document.querySelector('.total-per-person').textContent ='$'+ totalCalculated
    }
}
)
 /* 10% TIP*/ 
document.querySelector('.two').addEventListener('click',()=>{
    const billValue = parseFloat(document.getElementById('payment_input').value)
    const peopleValue = parseFloat(document.getElementById('people').value)
    if(peopleValue===0){
        document.querySelector('.errorMessage').textContent = "Can't be zero"
    }
    else{
        const tipCalculated = parseFloat((billValue/peopleValue)*.1).toFixed(2)
        const totalCalculated = parseFloat((billValue/peopleValue)+tipCalculated).toFixed(2)
        document.querySelector('.tip-per-person').textContent = '$'+ tipCalculated
        document.querySelector('.total-per-person').textContent ='$'+ totalCalculated
    }
 })
/* 15% TIP*/ 
document.querySelector('.three').addEventListener('click',()=>{
    const billValue = parseFloat(document.getElementById('payment_input').value)
    const peopleValue = parseFloat(document.getElementById('people').value)
    if(peopleValue===0){
        document.querySelector('.errorMessage').textContent = "Can't be zero"
    }
    else{
        const tipCalculated = parseFloat((billValue/peopleValue)*.15).toFixed(2)
        const totalCalculated = parseFloat((billValue/peopleValue)+tipCalculated).toFixed(2)
        document.querySelector('.tip-per-person').textContent = '$'+ tipCalculated
        document.querySelector('.total-per-person').textContent ='$'+ totalCalculated
    }
})
/* 25% TIP*/ 
document.querySelector('.four').addEventListener('click',()=>{
    const billValue = parseFloat(document.getElementById('payment_input').value)
    const peopleValue = parseFloat(document.getElementById('people').value)
    if(peopleValue===0){
        document.querySelector('.errorMessage').textContent = "Can't be zero"
    }
    else{
        const tipCalculated = parseFloat((billValue/peopleValue)*.25).toFixed(2)
        const totalCalculated = parseFloat((billValue/peopleValue)+tipCalculated).toFixed(2)
        document.querySelector('.tip-per-person').textContent = '$'+ tipCalculated
        document.querySelector('.total-per-person').textContent ='$'+ totalCalculated
    }
})
 /* 50% TIP*/ 
document.querySelector('.five').addEventListener('click',()=>{
    const billValue = parseFloat(document.getElementById('payment_input').value)
    const peopleValue = parseFloat(document.getElementById('people').value)
    if(peopleValue===0){
        document.querySelector('.errorMessage').textContent = "Can't be zero"
    }
    else{
        const tipCalculated = parseFloat((billValue/peopleValue)*.5).toFixed(2)
        const totalCalculated = parseFloat((billValue/peopleValue)+tipCalculated).toFixed(2)
        document.querySelector('.tip-per-person').textContent = '$'+ tipCalculated
        document.querySelector('.total-per-person').textContent ='$'+ totalCalculated
    }
 })
document.querySelector('.reset').addEventListener('click', ()=>{
    document.getElementById('payment_input').value=''
    document.getElementById('people').value=''
    document.querySelector('.tip-per-person').textContent="$" + '0'
    document.querySelector('.total-per-person').textContent="$" + '0'
})