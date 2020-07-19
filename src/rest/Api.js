import {CONFIG} from './../config/ServerConfig';
export default function request(variables, method, apiMethod, token) {
  //body,endPoint,POST,token
  var init =
    apiMethod === 'GET'
      ? {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: token ? token : '',
          },
        }
      : {
          method: apiMethod,
          headers: {
            'Content-Type': 'application/json',
            Authorization: token ? token : '',
          },
          body: JSON.stringify(variables),
        };
  return fetch(CONFIG.url + method, init)
    .then(res =>
      res.json().then(data => {
        var apiData = {
          status: res.status,
          data: data,
        };
        return apiData;
      }),
    )
    .catch(err => {
      var apiData = {
        status: 900,
        data: 'please check your internet connection',
      };
      return apiData;
    });
}
