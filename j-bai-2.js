function hienthi(){
    let a = document.getElementById('input').value;
    let text;
    switch (a){
        case "0":
            text ="0";
            break;
        case "1":
            text ="1";
            break;
        case "2":
        case "3":
            text="2,3";
            break;
    }
    document.getElementById('output').innerHTML= text;
}

