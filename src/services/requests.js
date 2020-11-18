export const requestAutologin = () => {
  return fetch("http://localhost:3000/autologin", {
    method: "POST",
    headers: {
      "Authorization": localStorage.token
    },
  })
  .then(res =>res.json())
}

export const requestCreateMessage = (channel, message) => {
  return fetch(`http://localhost:3000/channels/${channel}/messages`, {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
      'Authorization': localStorage.token
    },
    body: JSON.stringify(message),
  })
  .then(response => response.json())
}

export const requestLogin = (body) => {
  return fetch('http://localhost:3000/login', {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
  .then(response => response.json())
}

export const requestSignup = (body) => {
  return fetch('http://localhost:3000/users', {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
  .then(response => response.json())
}

export const requestLike = (message_id) => {
  return fetch(`http://localhost:3000/messages/${message_id}/likes`, {
    method: "POST",
    headers: {'Authorization': localStorage.token}
  })
  .then(res => res.json())
}
