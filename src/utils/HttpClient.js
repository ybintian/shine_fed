import axios from 'axios';
import config from 'config';

function getJsonWebToken() {
  let JsonWebToken = localStorage.getItem('JsonWebToken');
  return JsonWebToken;
}

function HttpRequest(url, params = {}){
  const JsonWebToken = getJsonWebToken();
  const requestConfig = {
    method: params.method,
    url: config.host  + url,
    headers: {
      'Authorization': `Token ${JsonWebToken}`,
      'X-Requested-With': 'XMLHttpRequest',
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    withCredentials: false,
    data: objectToFormData(params.data),
  }
  // console.info(params.data);
  return new Promise((resolve, reject) => {
    axios(requestConfig).then((res) => {
      console.info(res);
      return resolve(res.data);
    }).catch((error) => {
      console.info(error);
      return reject(error);
    });
  });
}


export default class HttpClient{
  static get = (url, params = {}) => {
    return HttpRequest(url, {method: 'get', data: params});
  };

  static post = (url, params = {}) => {
    return HttpRequest(url, {method: 'post', data: params});
  };

  static put = (url, params = {}) => {
    return HttpRequest(url, {method: 'put', data: params});
  };

  static delete = (url, params = {}) => {
    return HttpRequest(url, {method: 'delete', data: params});
  };
}

export function objectToFormData(obj, form, namespace) {
  let fd = form || new FormData();
  let formKey;

  for(var property in obj) {
    if(obj.hasOwnProperty(property) && (typeof obj[property]) != "undefined" ) {
      if(namespace) {
        formKey = namespace + '[' + property + ']';
      } else {
        formKey = property;
      }

      // if the property is an object, but not a File,
      // use recursivity.
      if(typeof obj[property] === 'object' && !Array.isArray(obj[property]) && obj[property] != null ) {
        objectToFormData(obj[property], fd, formKey);
      } else if (Array.isArray(obj[property])){
        if (obj[property].length === 0) {
          fd.append(formKey + "[]", "");
        } else {
          obj[property].map(function (val) {
            if(typeof val === "object") {
              objectToFormData(val, fd, formKey + "[]");
            } else {
              fd.append(formKey + "[]", val);
            }
          });
        }
      } else {
        // if it's a string or a File object
        fd.append(formKey, obj[property]);
      } 
    }
  }
  return fd;
}
