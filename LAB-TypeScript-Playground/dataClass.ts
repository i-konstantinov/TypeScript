class Data {
    method: String;
    uri: String;
    version: String;
    message: String;
    response: String = undefined;
    fulfilled: Boolean = false;

    constructor(met:string, u:string, v:string, mes:string) {
        this.method = met;
        this.uri = u;
        this.version = v;
        this.message = mes;
    }
}
let myData = new Data('GET', 'http://google.com', 'HTTP/1.1', '');
console.log(myData);