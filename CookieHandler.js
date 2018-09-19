export default class CookieHandler {
    /////////////////////////////////////
    // === Init ===
    /////////////////////////////////////
    constructor(){
        this.cookies = this.getCookiesAllFromDocument();
        this.logCookies();
    }

    getCookiesAllFromDocument(){
        let rawCookies = document.cookie;
        let arrCookies = rawCookies.split('; ');
        let cookies = [];

        for(let i=0; i<arrCookies.length; i++){
            let arrArrCookies = arrCookies[i].split('=');
            let key = arrArrCookies[0];
            let val = arrArrCookies[1];
            cookies[key] = val;
        }

        return cookies;
    }

    /////////////////////////////////////
    // === Main Functions ===
    /////////////////////////////////////
    /////////////////////////////
    // CRUD of cookies
    /////////////////////////////
    //*-- [C]eate --*//
    createNewCookie(key, val) {
        if(this.existsKey(key)) return false;

        document.cookie = key + '=' + val;
        this.cookies = this.getCookiesAllFromDocument();
        return true;
    }

    //*-- [R]ead --*//
    readValueByKey(key) {
        return (this.existsKey(key)) ? this.cookies[key] : null;
    }

    //*-- [U]pdate --*//
    updateValueByKey(key, val){
        if(!this.existsKey(key)) return false;

        document.cookie = key + '=' + val;
        this.cookies = this.getCookiesAllFromDocument();
        return true;
    }

    //*-- [D]elete --*//
    deleteCookieByKey(key) {
        if(!this.existsKey(key)) return false;

        document.cookie = key + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        this.cookies = this.getCookiesAllFromDocument();
        return true;
    }

    existsKey(key) {
        return typeof this.cookies[key] !== 'undefined';
    }

    /////////////////////////////////////
    // === Debug ===
    /////////////////////////////////////
    logCookies() {
        console.log("===================== CookieHandler.logCookies() =====================")
        console.log(this.cookies);
        console.log("======================================================================")
    }
}