import expect from 'expect';
import nock from 'nock';

import Api from '../../src/api';

import RssItem from '../../src/api/models/RssItem';

/*eslint-disable no-magic-numbers, max-len*/
describe('Api', () => {
    describe('getRssFeed', () => {
        beforeEach(() => {
            nock('http://www.vg.no')
                .get('/rss/feed/forsiden/?frontId=1')
                .reply(200, `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:vg="http://www.vg.no/namespace">
    <channel>
        <image>
            <title>VG RSS</title>
            <url>http://1.vgc.no/gfx/vg-rss.png</url>
            <link>http://www.vg.no</link>
        </image>
        <title>VG RSS</title>
        <ttl>10</ttl>
        <description>VG RSS</description>
        <link>http://www.vg.no/rss/feed/forsiden/?frontId=1</link>
        <lastBuildDate>Tue, 18 Apr 2017 12:44:00 +0200</lastBuildDate>
                    <item>
                <title>Theresa May varsler nyvalg i 2018</title>
                <description></description>
                <link>http://www.vg.no/nyheter/utenriks/theresa-may/theresa-may-varsler-nyvalg-i-2017-eneste-maaten-aa-garantere-sikkerhet/a/23976435/</link>
                <guid>http://www.vg.no/a/23976435/</guid>
                <vg:waplink>http://www.vg.no/nyheter/utenriks/theresa-may/theresa-may-varsler-nyvalg-i-2017-eneste-maaten-aa-garantere-sikkerhet/a/23976435/</vg:waplink>
                <vg:img>https://imbo.vgc.no/users/vgno/images/2cfd6686e405e8e8032a47a3a9ab1d6c?t%5B0%5D=crop%3Awidth%3D5184%2Cheight%3D3456%2Cx%3D0%2Cy%3D0&amp;t%5B1%5D=maxSize%3Awidth%3D100&amp;t%5B2%5D=resize%3Awidth%3D100&amp;accessToken=78f9bdd11f65ad8403ca61ab26d47c7cd3e3bf11e451d1a4dfadb5ba0812b99a</vg:img>
                <vg:articleImg>https://imbo.vgc.no/users/vgno/images/2cfd6686e405e8e8032a47a3a9ab1d6c?t%5B0%5D=crop%3Awidth%3D5184%2Cheight%3D3456%2Cx%3D0%2Cy%3D0&amp;t%5B1%5D=maxSize%3Awidth%3D100&amp;t%5B2%5D=resize%3Awidth%3D100&amp;accessToken=78f9bdd11f65ad8403ca61ab26d47c7cd3e3bf11e451d1a4dfadb5ba0812b99a</vg:articleImg>
                <image>https://imbo.vgc.no/users/vgno/images/2cfd6686e405e8e8032a47a3a9ab1d6c?t%5B0%5D=crop%3Awidth%3D5184%2Cheight%3D3456%2Cx%3D0%2Cy%3D0&amp;t%5B1%5D=maxSize%3Awidth%3D100&amp;t%5B2%5D=resize%3Awidth%3D100&amp;accessToken=78f9bdd11f65ad8403ca61ab26d47c7cd3e3bf11e451d1a4dfadb5ba0812b99a</image>
                <imgRegular>https://imbo.vgc.no/users/vgno/images/2cfd6686e405e8e8032a47a3a9ab1d6c?t%5B0%5D=600q80</imgRegular>
                <enclosure url="https://imbo.vgc.no/users/vgno/images/2cfd6686e405e8e8032a47a3a9ab1d6c?t%5B0%5D=crop%3Awidth%3D5184%2Cheight%3D3456%2Cx%3D0%2Cy%3D0&amp;t%5B1%5D=maxSize%3Awidth%3D100&amp;t%5B2%5D=resize%3Awidth%3D100&amp;accessToken=78f9bdd11f65ad8403ca61ab26d47c7cd3e3bf11e451d1a4dfadb5ba0812b99a" length="0" type="img/jpg"></enclosure>
                                    <vg:body></vg:body>
                                <pubDate>Tue, 18 Apr 2017 12:17:12 +0200</pubDate>
                            </item>
                    <item>
                <title>May hasteinnkaller til pressekonferanse - kraftig pundfall</title>
                <description></description>
                <link>http://e24.no/makro-og-politikk/theresa-may/may-hasteinnkaller-til-pressekonferanse-kraftig-pundfall/23976408</link>
                <guid>http://e24.no/makro-og-politikk/theresa-may/may-hasteinnkaller-til-pressekonferanse-kraftig-pundfall/23976408</guid>
                <vg:waplink>http://e24.no/makro-og-politikk/theresa-may/may-hasteinnkaller-til-pressekonferanse-kraftig-pundfall/23976408</vg:waplink>
                <vg:img>https://imbo.vgc.no/users/e24/images/52767fa7186ce8a2f7622034a9fc79a7?publicKey=vgno&amp;t%5B0%5D=crop%3Awidth%3D5243%2Cheight%3D2950%2Cx%3D0%2Cy%3D9&amp;t%5B1%5D=maxSize%3Awidth%3D100&amp;t%5B2%5D=resize%3Awidth%3D100&amp;accessToken=858c9cbbd2d19a824341378567bf8eb98cf0598bac4b37340e2943de62b9306a</vg:img>
                <vg:articleImg>https://imbo.vgc.no/users/e24/images/52767fa7186ce8a2f7622034a9fc79a7?publicKey=vgno&amp;t%5B0%5D=crop%3Awidth%3D5243%2Cheight%3D2950%2Cx%3D0%2Cy%3D9&amp;t%5B1%5D=maxSize%3Awidth%3D100&amp;t%5B2%5D=resize%3Awidth%3D100&amp;accessToken=858c9cbbd2d19a824341378567bf8eb98cf0598bac4b37340e2943de62b9306a</vg:articleImg>
                <image>https://imbo.vgc.no/users/e24/images/52767fa7186ce8a2f7622034a9fc79a7?publicKey=vgno&amp;t%5B0%5D=crop%3Awidth%3D5243%2Cheight%3D2950%2Cx%3D0%2Cy%3D9&amp;t%5B1%5D=maxSize%3Awidth%3D100&amp;t%5B2%5D=resize%3Awidth%3D100&amp;accessToken=858c9cbbd2d19a824341378567bf8eb98cf0598bac4b37340e2943de62b9306a</image>
                <imgRegular></imgRegular>
                <enclosure url="https://imbo.vgc.no/users/e24/images/52767fa7186ce8a2f7622034a9fc79a7?publicKey=vgno&amp;t%5B0%5D=crop%3Awidth%3D5243%2Cheight%3D2950%2Cx%3D0%2Cy%3D9&amp;t%5B1%5D=maxSize%3Awidth%3D100&amp;t%5B2%5D=resize%3Awidth%3D100&amp;accessToken=858c9cbbd2d19a824341378567bf8eb98cf0598bac4b37340e2943de62b9306a" length="0" type="img/jpg"></enclosure>
                                    <vg:body></vg:body>
                                <pubDate>Tue, 18 Apr 2017 11:36:51 +0200</pubDate>
                            </item>
            </channel>
</rss>`);
        });

        afterEach(() => {
            nock.cleanAll();
        });

        it('should return a Promise', () => {
            expect(Api.getRssFeed()).toBeA(Promise);
        });

        it('should resolve with collection of RssItems', done => {
            Api.getRssFeed()
                .then(res => {
                    expect(res.length).toEqual(2);
                    expect(res[0]).toBeA(RssItem);
                    expect(res[1]).toBeA(RssItem);
                    done();
                });
        });
    });

    describe('getVarnishLogs', () => {
        beforeEach(() => {
            nock('/assets/varnish.log')
                .get()
                .reply(200, `85.164.152.30 - - [23/May/2012:14:01:05 +0200] "GET http://www.vgtv.no/video/img/94949_160px.jpg HTTP/1.1" 200 3889 "http://www.vgtv.no/" "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:12.0) Gecko/20100101 Firefox/12.0"
178.232.38.87 - - [23/May/2012:14:01:05 +0200] "GET http://static.vg.no/iphone/js/front-min.js?20120509-1 HTTP/1.1" 200 2013 "http://touch.vg.no/" "Mozilla/5.0 (Linux; U; Android 2.3.3; en-no; HTC Nexus One Build/GRI40) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1"
193.212.51.164 - - [23/May/2012:14:01:05 +0200] "GET http://3.vgc.no/drfront/images/2012/05/23/c=133,53,233,231;w=288;h=286;42453.jpg HTTP/1.1" 304 0 "http://www.vg.no/" "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; Trident/4.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; InfoPath.2; .NET4.0C; .NET4.0E; SKALA)"`);
        });

        afterEach(() => {
            nock.cleanAll();
        });

        it('should return a Promise', () => {
            expect(Api.getVarnishLogs()).toBeA(Promise);
        });
    });
});
