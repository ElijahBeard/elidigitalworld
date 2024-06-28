// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAkClZeIRmm0QcGalFAthV5r7ihM9VVrd8",
    authDomain: "eliswebsite-d84ad.firebaseapp.com",
    databaseURL: "https://eliswebsite-d84ad-default-rtdb.firebaseio.com",
    projectId: "eliswebsite-d84ad",
    storageBucket: "eliswebsite-d84ad.appspot.com",
    messagingSenderId: "806572915592",
    appId: "1:806572915592:web:9ba11b3fcfccbface2983d"
  };
  const app = firebase.initializeApp(firebaseConfig);
  const database = firebase.database();
  
  // Get a reference to the database
  const itemsRef = database.ref('items');
  
  // Function to add an item to the list
  function addItem() {
    const newItem = document.getElementById('newItem').value;
    if (newItem !== '') {
      itemsRef.push({
        name: newItem
      });
      document.getElementById('newItem').value = '';
    }
  }
  
  // Function to remove an item from the list
  function removeItem(key) {
    itemsRef.child(key).remove();
  }
  
  // Listen for changes in the database
  itemsRef.on('value', (snapshot) => {
    const items = snapshot.val();
    const itemList = document.getElementById('itemList');
    itemList.innerHTML = ''; // Clear the list
  
    if (items) {
      for (const key in items) {
        const item = items[key];
        const listItem = document.createElement('li');
        listItem.textContent = item.name;
        listItem.innerHTML += `<button id="x" onclick="removeItem('${key}')">❌</button>`;
        itemList.appendChild(listItem);
      }
    }
  });
  
  // Add event listeners to buttons
  document.getElementById('addItem').addEventListener('click', addItem);
  