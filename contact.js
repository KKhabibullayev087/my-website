// contact.js
fetch('http://localhost:5000/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: 'Ali',
      email: 'ali@mail.com',
      message: 'Salom, bu test!'
    })
  })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error('Xatolik:', err));
  