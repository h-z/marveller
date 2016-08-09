import $ from 'jquery';

const baseUrl = 'http://gateway.marvel.com/v1/public/';
class Marveller {

  constructor(key) {
    this.key = key;
  }

  toString() {
    return `Marveller key:(${this.key}) url:(${baseUrl})`
  }

  request(endpoint, data={}) {
    var url = [baseUrl,endpoint].join('');
    return this.extractData($.get(url, $.extend({}, {apikey: this.key}, data)));
    // return $.get(url, $.extend({}, {apikey: this.key}, data));

  }

  characters(data) {
    return this.request('characters', data);
  }

  character(id) {
    return this.request(`characters/${id}`);
  }

  comics(data) {
    return this.request('comics', data)
  }

  stories(data) {
    return this.request('stories', data)
  }

  extractData(request) {
    // eslint-disable-next-line
    var d = $.Deferred();
    request.then(function(data) {
      if (200 === data['code']) {
        d.resolve(data['data']);
      } else {
        d.reject(data);
      }
    });
    return d;
  }

}

export default Marveller;