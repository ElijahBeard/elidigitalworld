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
const itemsRef = database.ref('items');

//ADD
function add_item() {
    const item = document.getElementById("entry").value;
    const new_ref = database.ref('items').push();
    new_ref.set({
        name: item,
        color: 'black'
    });
    document.getElementById("entry").value = '';
    console.log(item);
}

//REMOVE
function remove(key) {
    itemsRef.child(key).remove();
}

//CHECK FOR UPDATES
itemsRef.on('value', (snapshot) => {
    const items = snapshot.val();
    const list = document.getElementById("item_list");
    list.innerHTML = '';

    for(const key in items){
        const item = items[key];
        const list_item = document.createElement('li');
        list_item.textContent = item.name;
        list_item.style.color = item.color;
        //console.log(item.name);
        emoji = emojify(item.name);
        list_item.innerHTML += emoji;
        list_item.innerHTML += `<button id="x" onclick="remove('${key}')">❌</button>`;
        list.appendChild(list_item);
    }
})

//MAP EMOJIS
function emojify(item){
    const emoji_map = {
        "apple": "🍎",
        "banana": "🍌",
        "cherries": "🍒",
        "grape": "🍇",
        "lemon": "🍋",
        "melon": "🍈",
        "orange": "🍊",
        "peach": "🍑",
        "pear": "🍐",
        "pineapple": "🍍",
        "strawberry": "🍓",
        "watermelon": "🍉",
        "blueberry": "🫐",
        "kiwi": "🥝",
        "avocado": "🥑",
        "coconut": "🥥",
        "tomato": "🍅",
        "eggplant": "🍆",
        "carrot": "🥕",
        "corn": "🌽",
        "pepper": "🌶️",
        "cucumber": "🥒",
        "broccoli": "🥦",
        "garlic": "🧄",
        "onion": "🧅",
        "potato": "🥔",
        "sweet potato": "🍠",
        "lettuce": "🥬",
        "mushroom": "🍄",
        "peanuts": "🥜",
        "bread": "🍞",
        "bagel": "🥯",
        "baguette": "🥖",
        "pretzel": "🥨",
        "croissant": "🥐",
        "cheese": "🧀",
        "egg": "🥚",
        "bacon": "🥓",
        "steak": "🥩",
        "poultry": "🍗",
        "cut of meat": "🍖",
        "hamburger": "🍔",
        "hotdog": "🌭",
        "pizza": "🍕",
        "sandwich": "🥪",
        "taco": "🌮",
        "burrito": "🌯",
        "stuffed flatbread": "🥙",
        "salad": "🥗",
        "popcorn": "🍿",
        "butter": "🧈",
        "salt": "🧂",
        "rice": "🍚",
        "steaming bowl": "🍲",
        "spaghetti": "🍝",
        "ramen": "🍜",
        "sushi": "🍣",
        "bento": "🍱",
        "dango": "🍡",
        "dumpling": "🥟",
        "fortune cookie": "🥠",
        "takeout box": "🥡",
        "crab": "🦀",
        "lobster": "🦞",
        "shrimp": "🍤",
        "squid": "🦑",
        "oyster": "🦪",
        "ice cream": "🍦",
        "shaved ice": "🍧",
        "ice cream cone": "🍨",
        "doughnut": "🍩",
        "cookie": "🍪",
        "cake": "🍰",
        "cupcake": "🧁",
        "pie": "🥧",
        "chocolate bar": "🍫",
        "candy": "🍬",
        "lollipop": "🍭",
        "honey": "🍯",
        "milk": "🥛",
        "coffee": "☕",
        "tea": "🍵",
        "juice": "🧃",
        "soda": "🥤",
        "beer": "🍺",
        "wine": "🍷",
        "champagne": "🍾",
        "cocktail": "🍹",
        "tropical drink": "🍸",
        "whiskey": "🥃",
        "baby bottle": "🍼",
        "green salad": "🥗",
        "butter": "🧈",
        "salt": "🧂",
        "rice": "🍚",
        "steaming bowl": "🍜",
        "spaghetti": "🍝",
        "ramen": "🍜",
        "sushi": "🍣",
        "bento": "🍱",
        "dango": "🍡",
        "dumpling": "🥟",
        "fortune cookie": "🥠",
        "takeout box": "🥡",
        "crab": "🦀",
        "lobster": "🦞",
        "shrimp": "🍤",
        "squid": "🦑",
        "oyster": "🦪",
        "ice cream": "🍦",
        "shaved ice": "🍧",
        "ice cream cone": "🍨",
        "doughnut": "🍩",
        "cookie": "🍪",
        "cake": "🍰",
        "cupcake": "🧁",
        "pie": "🥧",
        "chocolate bar": "🍫",
        "candy": "🍬",
        "lollipop": "🍭",
        "honey": "🍯",
        "milk": "🥛",
        "coffee": "☕",
        "tea": "🍵",
        "juice": "🧃",
        "soda": "🥤",
        "beer": "🍺",
        "wine": "🍷",
        "champagne": "🍾",
        "cocktail": "🍹",
        "tropical drink": "🍸",
        "whiskey": "🥃",
        "baby bottle": "🍼",
        "green salad": "🥗",
        "butter": "🧈",
        "salt": "🧂",
        "rice": "🍚",
        "steaming bowl": "🍜",
        "spaghetti": "🍝",
        "ramen": "🍜",
        "sushi": "🍣",
        "bento": "🍱",
        "dango": "🍡",
        "dumpling": "🥟",
        "fortune cookie": "🥠",
        "takeout box": "🥡",
        "crab": "🦀",
        "lobster": "🦞",
        "shrimp": "🍤",
        "squid": "🦑",
        "oyster": "🦪",
        "ice cream": "🍦",
        "shaved ice": "🍧",
        "ice cream cone": "🍨",
        "doughnut": "🍩",
        "cookie": "🍪",
        "cake": "🍰",
        "cupcake": "🧁",
        "pie": "🥧",
        "chocolate bar": "🍫",
        "candy": "🍬",
        "lollipop": "🍭",
        "honey": "🍯",
        "milk": "🥛",
        "coffee": "☕",
        "tea": "🍵",
        "juice": "🧃",
        "soda": "🥤",
        "beer": "🍺",
        "wine": "🍷",
        "champagne": "🍾",
        "cocktail": "🍹",
        "tropical drink": "🍸",
        "whiskey": "🥃",
        "baby bottle": "🍼",
    };
    const lower = item.toLowerCase();
    return emoji_map[lower] || '';
}

//BUTTON COLOR SELECTA
let selected_color = '';
function set_color(color) {
    selected_color = color;
    document.querySelectorAll('.color_button').forEach(button => {
        button.style.outline = button.style.backgroundColor === color ? '2px dotted black' : 'none';
    });
}
//LIST COLOR CHANGE
document.getElementById('item_list').addEventListener('click', function(event){
    if (selected_color && event.target.tagName === 'LI') {
        itemsRef.orderByChild('name').equalTo(event.target.textContent.slice(0,-1)).once('value', (snapshot) => {
            if (snapshot.exists()) {
                snapshot.forEach((childSnapshot) => {
                    const id = childSnapshot.key;
                    const iref = itemsRef.child(id);
                    iref.update({
                        color: selected_color
                    })
                })
            } else {
                console.log("not found");
            }
        })
        event.target.style.color = selected_color;
        console.log(event.target.textContent.slice(0,-1));
    }
    else{
        event.target.style.color = 'none';
    }
});
document.getElementById('addItem').addEventListener('click', addItem);