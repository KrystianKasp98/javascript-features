const decryptInput = document.getElementById('decrypt');
const encryptInput = document.getElementById('encrypt');

const decryptOutput = document.getElementById('decrypt-output');
const encryptOutput = document.getElementById('encrypt-output');

const decryptBtn = document.getElementById('decrypt-btn');
const encryptBtn = document.getElementById('encrypt-btn');

const API_URL = 'http://localhost:4000/login';

const sha256Api = async(state, password) => {
  const possibleStates = ['encrypt', 'decrypt'];
  if (!possibleStates.includes(state) || !password) {
    return undefined;
  }

  const options = {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify({state, password})
  };
  const response = await fetch(API_URL,options);
  let result = await response.json();

  if (state === 'encrypt') {
    return result.encryptedPassword;
  } else {
    return result.decryptedPassword;
  }
}

const handleApi = (e) => {
  const state = e.target.textContent;
}

decryptBtn.addEventListener('click', (e) => handleApi(e));
encryptBtn.addEventListener('click', (e) => handleApi(e));