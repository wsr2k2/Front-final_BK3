const Api = {
  apiUrl: 'https://api-sabores-do-mundo.herokuapp.com/italian',
  fetchGetAll: () => fetch(`${Api.apiUrl}/listAll`),
  fetchGetById: id => fetch(`${Api.apiUrl}/listId/${id}`),
  fetchPost: (italian) => {
    return fetch(`${Api.apiUrl}/add`, {
      method: 'POST',
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(italian)
    })
  },
  fetchPut: (italian, id) => {
    return fetch(`${Api.apiUrl}/update/${id}`, {
      method: 'PUT',
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(italian)
    })
  },
  fetchDelete: (id) => {
    return fetch(`${Api.apiUrl}/delete/${id}`, {
      method: 'DELETE'
    })
  }
}

export default Api;