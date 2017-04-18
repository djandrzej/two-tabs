import expect from 'expect';

import VarnishLog from '../../../src/api/models/VarnishLog';

/*eslint-disable max-len*/
describe('VarnishLog model constructor', () => {
    it('should create a proper instance of VarnishLog based on log', () => {
            const exampleLog = '81.166.216.180 - - [23/May/2012:14:01:05 +0200] "GET http://www.vg.no/jobbnytt/js/5/7.gif?23.05.2012+13%3a49%3a47 HTTP/1.1" 200 3346 "http://www.vg.no/" "Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0)"';
        const instance = new VarnishLog(exampleLog);
        expect(instance.ip).toEqual('81.166.216.180');
        expect(instance.date).toEqual('23/May/2012:14:01:05 +0200');
        expect(instance.url).toEqual('http://www.vg.no/jobbnytt/js/5/7.gif?23.05.2012+13%3a49%3a47');
        expect(instance.hostname).toEqual('www.vg.no');
        expect(instance.referrer).toEqual('http://www.vg.no/');
    });
});
