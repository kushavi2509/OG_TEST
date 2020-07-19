var env = 'staging';
var staging = {
  url: 'https://itunes.apple.com/us/rss/topalbums/limit=100/json',
};
var production = {
  url: 'https://itunes.apple.com/us/rss/topalbums/limit=100/json',
};
export const CONFIG = env === 'staging' ? staging : production;
