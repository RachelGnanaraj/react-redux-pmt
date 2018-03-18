// how API shows errors
function handleSuccessFetch(response, json, resolve, reject) {
  if (json && json.errorCode !== undefined) {
    // error
    reject({
      ...json,
      code: 1, // 200 but some logical error
      errorCode: json.errorCode,
      message: json.errorString,
      status: response.status,
      url: response.url,
    });
  } else {
    // SUCCESS
    resolve(json);
  }
}

// wrap fetch() and json() in single promise
function handleFetch(fetchReq) {
  return new Promise((resolve, reject) => {
    fetchReq.then(response => {
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.indexOf('application/json') !== -1) {
        if (response.ok) {
          response.json().then(json => {
            handleSuccessFetch(response, json, resolve, reject);
          });
        } else {
          reject({
            code: 0, // non 2xx response
            status: response.status,
            url: response.url,
            message: 'Network response was not ok!',
          });
        }
      } else {
        reject({
          code: -1, // non json response
          status: response.status,
          url: response.url,
          message: 'Non-JSON response!',
        });
      }
    }).catch(err => {
      reject({
        code: -2, // cannot even fetch
        message: `There has been a problem with your fetch operation: ${err.message}`,
      });
    });
  });
}

const defaultHeaders = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
};

export function setHeader(name, value) {
  defaultHeaders[name] = value;
}

export function removeHeader(name) {
  delete defaultHeaders[name];
}

export default {
  // GET
  get: params => handleFetch(
    fetch(params.url, {
      method: 'GET',
      headers: {
        ...defaultHeaders,
        ...params.headers,
      },
    })
  ),

  // POST
  post: params => handleFetch(
    fetch(params.url, {
      method: 'POST',
      headers: {
        ...defaultHeaders,
        ...params.headers,
      },
      body: JSON.stringify(params.data),
    })
  ),

  // PUT
  put: params => handleFetch(
    fetch(params.url, {
      method: 'PUT',
      headers: {
        ...defaultHeaders,
        ...params.headers,
      },
      body: JSON.stringify(params.data),
    })
  ),

  // PATCH
  patch: params => handleFetch(
    fetch(params.url, {
      method: 'PATCH',
      headers: {
        ...defaultHeaders,
        ...params.headers,
      },
      body: JSON.stringify(params.data),
    })
  ),

  // DELETE
  delete: params => handleFetch(
    fetch(params.url, {
      method: 'DELETE',
      headers: {
        ...defaultHeaders,
        ...params.headers,
      },
    })
  ),
};
