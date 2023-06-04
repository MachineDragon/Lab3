const fs = require('fs');


test('login with correct username and password', () => {
  
  const loginHtml = fs.readFileSync('C:\\Users\\mikopc\\Documents\\Zoomates\\testing\\login.html', 'utf8');

  document.body.innerHTML = loginHtml;

  window.redirectToWelcomePage = jest.fn();

  document.querySelector('#username').value = 'correct-username';
  document.querySelector('#password').value = 'correct-password';

  document.querySelector('[type="submit"]').click();

  expect(window.redirectToWelcomePage).toHaveBeenCalled();
  
});
