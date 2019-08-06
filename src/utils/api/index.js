import hahoorequest from 'hahoorequest/lib/fetch';
import config from '../../config';

const request = async (options) => {
  const { url, endpoint, ...rest } = options;
  const opts = {
    url: url || `${config.apiProxy}${endpoint}`,
    ...rest
  };
  try {
    const res = await hahoorequest(opts);
    return Promise.resolve(res);
  } catch (err) {
    return Promise.reject(err);
  }
};

export default request;
