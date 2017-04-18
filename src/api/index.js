import request from 'superagent';
import {parseString} from 'xml2js';

import RssItem from './models/RssItem';
import VarnishLog from './models/VarnishLog';

function parseArticlesFromXml(res) {
    return new Promise((resolve, reject) => {
        parseString(res.text, (err, result) => {
            if (err) {
                return reject(err);
            }
            return resolve(
                result.rss.channel[0].item.map(article =>
                    new RssItem(article.title[0], article.pubDate[0])
                )
            );
        });
    });
}

function parseVarnishLogs(res) {
    return new Promise((resolve, reject) => {
        resolve(
            res.text
                .split('\n')
                .filter(f => !!f)
                .map(log => new VarnishLog(log))
        );
    });
}

export default class Api {

    static getRssFeed() {
        return request
            .get('http://www.vg.no/rss/feed/forsiden/?frontId=1')
            .accept('xml')
            .then(parseArticlesFromXml);
    }

    static getVarnishLogs() {
        return request
            .get('/assets/varnish.log')
            .then(parseVarnishLogs);
    }

}
