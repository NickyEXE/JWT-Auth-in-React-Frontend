export const autologin = () => fetch("http://localhost:3000/autologin", {
  method: "POST",
  headers: {'Content-Type': "application/json"},
  body: JSON.stringify({user_id: localStorage.user_id})
})
.then(res => res.json())

export const postMessage = (channel_id, message) => {
  return fetch(`http://localhost:3000/channels/${channel_id}/messages`, {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
      'Authorization': localStorage.user_id
    },
    body: JSON.stringify(message),
  })
  .then(response => response.json())
}

export const getMessages = (channel_id) => fetch(`http://localhost:3000/channels/${channel_id}`)
  .then(res => res.json())

export const createUser = (body) => fetch("http://localhost:3000/users/", {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(body),
  })
  .then(response => response.json())

export const login = (body) => fetch("http://localhost:3000/login/", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
  .then(response => response.json())

export const like = (id) => fetch(`http://localhost:3000/messages/${id}/likes`, {
  method: "POST",
  headers: {
    'Authorization': localStorage.user_id
  }
})
.then(res => res.json())
