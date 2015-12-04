/**
* example original url:
* https://sy.linkedin.com/pub/krzysztof-marzec/a7/576/b50?trk=biz_employee_pub
* becomes:
* https://www.linkedin.com/in/krzysztof-marzec-b50576a7
*/
function transform (url) {
  var count, id, parts, pos;
  pos = url.indexOf('linkedin');
  url = url.substring(pos, url.length);
  url = url.split('?')[0];
  // linkedin.com/pub/krzysztof-marzec/a7/576/b50
  parts = url.split('/');
  console.log(parts);
  if(parts.length > 3) {
    count = parts.length;
    id = parts[5] + parts[4] + parts[3];
    console.log(id);
    console.log(count);
    console.log(parts);
    url = parts[0] + '/' +  parts[1] + '/' + parts[2] + '-' + id;
  }
  url = 'https://www.' + url.replace('pub', 'in');
  console.log(url);
  return url;
}
// var polish   = 'https://sy.linkedin.com/pub/krzysztof-marzec/a7/576/b50?trk=biz_employee_pub';
// transform(polish);
module.exports = transform;
