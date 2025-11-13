const Email = document.querySelector('.JSinpv');
const Code = document.querySelector('.JSinpp');
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTce6wWtaDk5yRzmofWU9J4PDtHrHg6Io",
  authDomain: "loginauth-d6166.firebaseapp.com",
  projectId: "loginauth-d6166",
  storageBucket: "loginauth-d6166.firebasestorage.app",
  messagingSenderId: "176063303989",
  appId: "1:176063303989:web:4e917846f7e53da54efc7c",
  measurementId: "G-KQN2K7QCZ7"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

function signup () {
const email = document.querySelector('.JSinpv').value;
const password = document.querySelector('.JSinpp').value;
auth.createUserWithEmailAndPassword(email, password
).then(user => alert('Signed up'))
.catch(error=> alert(error.message));
}

function logIn () {
  const email = document.querySelector('.JSinpv').value;
const password = document.querySelector('.JSinpp').value;
auth.signInWithEmailAndPassword(email, password)
.then(user => alert('Logged in'))
.catch(error => alert(error.message))
}

document.querySelector('.signup').addEventListener('click', signup);

document.querySelector('.login').addEventListener('click', logIn)


function checkFlow() {
  const content = document.querySelector('.content');
  const container = document.querySelector('.container');
  const sidebar = document.querySelector('.sidebar');
  const body = document.querySelector('body');

  if(body.clientWidth <= 600){
    sidebar.style.display = 'none';
    content.style.width = '100%'
  }else{
    sidebar.style.display = 'grid'
    content.style.width = '49%'
  }
}
window.addEventListener('load', checkFlow)
window.addEventListener('resize', checkFlow)
