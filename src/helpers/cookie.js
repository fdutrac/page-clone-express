module.exports = {
    get: (key, req) => {
      let cookieParse = {},
        rc = req.headers.cookie;
    
      rc && rc.split(';').forEach(function( cookie ) {
        let parts = cookie.split('=');
        cookieParse[parts.shift().trim()] = decodeURI(parts.join('='));
      });
    
      return cookieParse[key];
    },
    set: (key, value, res, maxAge) => {
      res.cookie(key, value, { maxAge: maxAge, httpOnly: true })
    }
  }