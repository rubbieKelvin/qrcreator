window.onload = () => {
    document.getElementById("gen_btn").onclick = (e) => {

        let text_box = document.getElementById("qr_data");
        let qr_box   = document.getElementById("qr_img");
        
        let data = text_box.value.trim();
        
        if (dataisvalid(data)){
            fetch("/qr/", {method:"post", body:data})
            .then(request => request.text())
            .then(text => {
                qr_box.src = text;
            })
            .catch(e => alert(e));
        }
    }
}

// let is_any = (string, list) => {
//     let result = false;
//     for (let i = 0; i < list.length; i++) {
//         result |= string === list[i];
//     }
//     return result;
// }

let dataisvalid = (data) => {
    let reason = null;
    let max = 300;
    if (data.length > 0 && data.length <= max){
        return true;
    }else{
        reason = "lenght of text should be btw 0 ~ "+max;
    }
    alert(reason);
    return false;
}