// let today = new Date();
// let year = today.getFullYear();
// let month = ('0' + (today.getMonth() + 1)).slice(-2);
// let day =  ('0' + today.getDate()).slice(-2);

// let dateString = year + '-' + month + '-' + day;
// document.querySelector('.date').innerHTML = dateString;

expireDate = new Date;
expireDate.setDate(expireDate.getDate()+1)
hitCt = eval(cookieVal("pageHit"))
hitCt++
document.cookie = "pageHit=" + hitCt + ";expires=" + expireDate.toGMTString()
function cookieVal(cookieName) {
    thisCookie = document.cookie.split("; ")
    for(i = 0; i < thisCookie.length; i++) {
        if(cookieName == thisCookie[i].split("=")[0]) 
            return thisCookie[i].split("=")[1]
    }
    return 0;
}

document.querySelector('.today').innerHTML = hitCt;
