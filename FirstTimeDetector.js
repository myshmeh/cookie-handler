import CookieHandler from './CookieHandler';

export default class FirstTimeDetector{
    constructor(cookieName){
        this.cookieName = cookieName;
        this.cookieHandler = new CookieHandler();
    }

    detect(){
        // not first time -> false
        if(this.cookieHandler.existsKey(this.cookieName) == true)
            return false;

        // first time -> create cookie with 'true' as value, return 'true'
        this.cookieHandler.createNewCookie(this.cookieName, true);
        return true;
    }
}