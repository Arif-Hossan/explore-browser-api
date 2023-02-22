const getCookieByName = (name)=>{
    const cookieString = document.cookie;
    const cookieParts = cookieString.split("; ");
    const cookie = cookieParts.find(c=>c.includes(name));
    if(cookie){
        const cookieValue= cookie.split("=");
        return cookieValue;
    }
}