import request from 'hahoorequest/lib/whatwg-fetch';

const getWeatherApi = async (city) => {
  try {
    const res = await request({
      url: '/weather/index',
      method: 'GET',
      qs: {
        format: 2,
        cityname: city,
        key: 'f9c7962694e2aa760da717cbcca3bdfa'
      }
    });
    return Promise.resolve(res);
  } catch (err) {
    return Promise.reject(err);
  }
};

export { getWeatherApi };
