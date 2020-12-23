const baseUrl = process.env.REACT_APP_API_URL;



const fetchWithoutToken = ( endpoint, data, method = 'GET' ) => {

  const url = `${baseUrl}/${endpoint}`;//localhost:4000/api/auth

  if (method === 'GET') {
    return fetch( url );
  } else {
    return fetch( url, {
      method,
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify( data ) 
    });
  }
}

const fetchWithToken = ( endpoint, data, method = 'GET' ) => {

  const url = `${baseUrl}/${endpoint}`;//localhost:4000/api/auth
  const token = localStorage.getItem('token-made-by') || '';

  if (method === 'GET') {
    return fetch( url, { 
      method,
      headers: {
        'Token': `Bearer ${token}`
      }
    } );
  } else {
    return fetch( url, {
      method,
      headers: {
        'Content-type': 'application/json',
        'authorization': `Bearer ${token}`
      },
      body: JSON.stringify( data )
    });
  }
}


export {
  fetchWithoutToken,
  fetchWithToken

}