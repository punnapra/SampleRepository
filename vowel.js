/*function countVowels(subject) {
    return subject.match(/[aeiou]/gi).length;
    alert("length")
}*/
function vow(form){
    var a = form.CountVowels.value;
        start = 0;

    for (var i = 0; i < a.length; i++){
        switch (a[i]){
            case 'a'
            case 'e'
            case 'i'
            case 'o'
            case 'u'
                start++;
                break;
        }
    }
    alert(start);
}

function init(){
    var button1 = document.getElementById("btn1");
}
window.onload = init;