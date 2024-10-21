document.getElementById('showData').addEventListener('click', function() {
  const fname = document.getElementById('fname').value;
  const lname = document.getElementById('lname').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const newsletter = document.getElementById('newsletter').checked ? 'Yes' : 'No';
  const gender = document.querySelector('input[name="gender"]:checked') ? document.querySelector('input[name="gender"]:checked').value : 'Not Selected';
  const region = document.getElementById('region').value;
  const favcolor = document.getElementById('favcolor').value;
  const info = document.getElementById('info').value;
  const satisfaction = document.getElementById('satisfaction').value;

  const formData = `
    <h1>Information Form Data:</h1>
    <p><strong>First Name:</strong> ${fname}</p>
    <p><strong>Last Name:</strong> ${lname}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Password:</strong> ${password}</p>
    <p><strong>Newsletter?:</strong> ${newsletter}</p>
    <p><strong>Gender:</strong> ${gender}</p>
    <p><strong>Region:</strong> ${region}</p>
    <p><strong>Favorite Color:</strong> ${favcolor}</p>
    <p><strong>Additional Information:</strong> ${info}</p>
    <p><strong>Satisfaction Level:</strong> ${satisfaction}</p>
  `;

  document.getElementById('displayData').innerHTML = formData;
});