/**
* tranform converts a long/international LinkedIn Url to its unique form
* @param {String} url - the url you want to transform.
* @returns {String} url - the canonical url
* example original (international) url:
* https://sy.linkedin.com/pub/krzysztof-marzec/a7/576/b50?trk=biz_employee_pub
* is transformed to:
* https://www.linkedin.com/in/krzysztof-marzec-b50576a7
*/
function transform (url) {
  var id, parts, pos;
  pos = url.indexOf('linkedin');
  url = url.substring(pos, url.length); // strip everything before linkedin
  url = url.split('?')[0];              // remove any query parameters
  parts = url.split('/');               // split url into parts
  if(parts.length > 3) {                // urls with ids have more parts
    id = parts[5] + parts[4] + parts[3]; // see example above
    url = parts[0] + '/' +  parts[1] + '/' + parts[2] + '-' + id;
  }
  return 'https://www.' + url.replace('pub', 'in'); // pub are for Search Engines
}

module.exports = transform;
