export default class VarnishLog {

    constructor(log) {
        const extractedData =
            /^([\d\.]{7,15})\ \-\ \-\ \[(.*)\]\ "[a-z]{3,5}\ (.*)\ HTTP\/\d\.\d"\ \d{3}\ \d*\ "(.*)"\ ".*/gi
                .exec(log);
        this.ip = extractedData[1];
        this.date = extractedData[2];
        this.url = extractedData[3];
        this.hostname = /^https?:\/\/([^\/]*).*/gi.exec(this.url)[1];
        this.referrer = extractedData[4];
    }

}
