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
  url = url.substring(pos, url.length);
  url = url.split('?')[0];
  parts = url.split('/');
  // console.log(parts);
  if(parts.length > 3) {
    id = parts[5] + parts[4] + parts[3];
    // console.log(id);
    // console.log(parts);
    url = parts[0] + '/' +  parts[1] + '/' + parts[2] + '-' + id;
  }
  url = 'https://www.' + url.replace('pub', 'in');
  // console.log(url);
  return url;
}

module.exports = transform;

// var url = 'https://uk.linkedin.com/in/john-smith-82a505'
// transform(url);
