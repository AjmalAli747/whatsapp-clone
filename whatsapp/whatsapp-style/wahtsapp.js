// arrya message random show 
const arrayText = ["hello", "how are you", "do you like coffee", "why did you go", "stop", "what is your name", "sorry, i didn't understand you", "you're at the right place", "sometimes it happens", "how can I help you?", "believe me", "call me back", "as soon as possible", "do me a favor", "give me a hand", "i do not mean it", "i decline!", "i decline!", "i’m on a diet", "i just made it", "i’m sorry", "absolutely not", "i have no idea", "i agree", "i’m at home", "it’s on the tip of my tongue", "it’s ok", "it really takes time", "it’s fort he best", "no, I don’t want", "see you", "see you next time", "so I do", "so so", "allow me", "any day will do", "it’s very thoughtful of you", "have a good weekend", "i don’t have time", "i got it", "i would love to", "don’t worry", "it’s very thoughtful of you", "it’s none of you business", "stop making such a noice", "you are going too fast", "come with me", "good afternoon", "good morning", "good night", "have a good trip", "have a good weekend", "i don’t have time", "i hate you!", "i Love You 2", "i am busy", "i am tired", "i don’t agree", "you are wasting my time", "i feel much better", "they like each other", "i’m good", "it doesn’t matter", "join me", "let’s catch up", "let’s do it", "nice to meet you", "not yet", "talk to you tomorrow", "thank you very much", "you turn", "a lovely day, isn’t it", "do i have to", "can I help you", "how are things going", "any thing else", "are you kidding", "are you sure", "do you understand me", "are you done", "can I ask you something", "can you please repeat that", "did you get it", "do you need anything", "how do you feel?", "how much is it?", "How old are you?", "How was your weekend?", "Is all good?", "Is everything OK?", "What are you doing?", "What are you talking about?", "What are you up to?", "What are your hobbies?", "What did you say?", "What do you need?", "What do you think?", "What do you want to do?", "What do you want?", "What’s the weather like?", "What’s your e-mail address?", "What is your job?", "What’s your name?", "What’s your phone number?", "What is going on?", "When is the train leaving?", "How can I go to the town centre?", "Where are you from?", "Where are you going?", "Where are you?", "Where did you get it?", "Where do you live?", "Are you coming with me?", "How long will you stay?", "Can you give me your address?", "Could you please give me your address?"];


const hours = document.getElementById("hours");
const min = document.getElementById("min");
const secound = document.getElementById("secound");
const amAndpm = document.getElementById("amAndpm");
let am_and_pm = "";

// image 
const img = document.getElementById("img");
const name = document.getElementById("name");
const lastSeen = document.getElementById("lastSeen");

function timeWatch(){
    const timeAndDate = new Date();
    hours.innerHTML = `${zeorTime(timeAndDate.getHours())} : `;
    min.innerHTML = `${zeorTime(timeAndDate.getMinutes())} : `;
    secound.innerHTML = `${zeorTime(timeAndDate.getSeconds())} ${am_and_pm}`;

    if(hours >= 12){
        am_and_pm = "AM";
    }else{
        am_and_pm = "PM";
    }

}

// zero time 0 function 
function zeorTime(num){
    return num < 10 ? `0${num}`:num;
}

setInterval(timeWatch, 1000);

// keyboard souns start 
const keyboardSound = document.querySelector("#inputText");

const sound = new Audio();

keyboardSound.addEventListener("keypress", function(){
    sound.src = "whatsapp-image/keyboradSoun.wav";
    sound.play();
})

// keyboard souns end 

// image countainer start 
const imgList = [
    {
        imgLink : "whatsapp-image/ajmal.jpg",
        nameText : "MOHMMAD AZMAL ALI",
        lastSeenText : "Last Seen : 10:50 PM",
    },
    {
        imgLink : "whatsapp-image/profile_avtar/avatar1.png",
        nameText : "Pawan Kumar",
        lastSeenText : "Last Seen : 05:10 PM",
    },
    {
        imgLink : "whatsapp-image/profile_avtar/avatar2.png",
        nameText : "Vishal Singh",
        lastSeenText : "Last Seen : 06:35 AM",
    },
    {
        imgLink : "whatsapp-image/profile_avtar/avatar4.png",
        nameText : "Deepak",
        lastSeenText : "Last Seen : 10:50 PM",
    },
    {
        imgLink : "whatsapp-image/profile_avtar/avatar5.png",
        nameText : "Ankit Kumar",
        lastSeenText : "Online",
    },
    {
        imgLink : "whatsapp-image/profile_avtar/avatar10.png",
        nameText : "Irsad",
        lastSeenText : "Last Seen : 03:45 PM",
    },
    {
        imgLink : "whatsapp-image/profile_avtar/avatar8.png",
        nameText : "Monu Kumar",
        lastSeenText : "Online",
    },
    {
        imgLink : "whatsapp-image/profile_avtar/avatar1.png",
        nameText : "Soun Kumar",
        lastSeenText : "Last Seen : 03:50 PM",
    },
    {
        imgLink : "whatsapp-image/profile_avtar/avatar2.png",
        nameText : "Mukesh Kumar",
        lastSeenText : "Last Seen : 11:05 AM",
    },
    {
        imgLink : "whatsapp-image/profile_avtar/avatar5.png",
        nameText : "Nitesh Prasad",
        lastSeenText : "Online",
    },
    {
        imgLink : "whatsapp-image/profile_avtar/avatar8.png",
        nameText : "Zeeshan Ahmad",
        lastSeenText : "Last Seen : 08:35 PM",
    }
]

let index = Math.floor(Math.random() * imgList.length);

function randmoImg(){
    const randmoImg = imgList[index];
    img.src = randmoImg.imgLink;
    name.innerText = randmoImg.nameText;
    lastSeen.innerText = randmoImg.lastSeenText;
    
}

randmoImg();

// ****************************** message send text **********************************
const form = document.getElementById("form");
const submit = document.getElementById("submit");

form.addEventListener("submit", submitFunction);

function submitFunction(e){
    e.preventDefault();

    // input value function with button 
    inputValueFunction();
    // null value in input 
    document.getElementById("inputText").value = "";
}


// input value show with text 
let messgaeReply = document.getElementById("messgaeReply");
let text_replay = document.getElementById("text_replay");
// send message id 
let send_message = document.getElementById("sendMessage");

function inputValueFunction(){

        let inputMessage = document.getElementById("inputText").value;
        // enter name first value 
        let enterYourName = document.getElementById("enterYourName").value;
        const nameHeading = imgList[index];
        const nameShow = nameHeading.nameText;

        messgaeReply.innerHTML += `<div class="replay_container">
        <p id="message_replay">${enterYourName}</p>
        <span id="text_replay">${inputMessage}</span>
    </div>`;


// *********************** replay message text with function and value *******************************

        const findMethods = arrayText.find(element => {
                return element.match(inputMessage);
        })

        console.log(findMethods);

        if(messgaeReply && findMethods){
            messgaeReply.innerHTML += `
            <div class="message" id="sendMessage">
                <div class="message_container">
                <p id="message_Name">${nameShow}</p>
                <span id="text_message">${findMethods}</span>
            </div>
        </div>`;
        }else{
            messgaeReply.innerHTML += `
            <div class="message" id="sendMessage">
            <div class="message_container">
                <p id="message_Name">${nameShow}</p>
                <span id="text_message">Sorry, I didn't understand you😲</span>
            </div>
        </div>`;
        }

        // end 
        
}

// ********************** emoji function ************************************

const emaoji = document.getElementById("emaoji");
const emojiContaoner = document.getElementById("emojiContaoner");

// open emoji 
function emojiFunction(){
    emojiContaoner.classList.add("emojiActive");
}

emaoji.addEventListener("click", emojiFunction);

// get value in emoji with text 

let emojiGet = document.querySelectorAll(".container_emoji_box > ul li");
function getValueEmoji(){

        for(let i = 0; i < emojiGet.length; i++){
            emojiGet[i].addEventListener("click", function(){
                emojiContaoner.classList.remove("emojiActive");
                document.getElementById("inputText").value += this.innerHTML;
                console.log(this.innerHTML);
            })
        }
}

getValueEmoji();


// ***************************** setting option ***********************************
const ellipsis = document.getElementById("ellipsis");
const settingClick = document.getElementById("settingClick");
const ellipsis_container = document.getElementById("ellipsis_container");
const container_name = document.getElementById("container_name")
const angle_left_close = document.getElementById("angle_left_close");

// icon click show setting 
function ellipsisFunction(){
    ellipsis_container.classList.toggle("ellipsis_pop");
}

// setting click open setting 
function settingClickFunction(){
    container_name.classList.add("container_pop_Name");
    ellipsis_container.classList.remove("ellipsis_pop");
}

// close setting 
function angleLeftCloseFunction(){
    container_name.classList.remove("container_pop_Name");
}

angle_left_close.addEventListener("click", angleLeftCloseFunction);
settingClick.addEventListener("click", settingClickFunction);
ellipsis.addEventListener("click", ellipsisFunction);

// ******************************** show_wallpaper ***************************************
const show_wallpaper = document.getElementById("show_wallpaper");
const wallpaper_container = document.getElementById("wallpaper_container");
const wallpapers_icon_close = document.getElementById("wallpapers_icon_close");

function showWallpaperFunction(){
    wallpaper_container.classList.add("wallpaper_show_pop");
}

function wallpapersiconcloseFunction(){
    wallpaper_container.classList.remove("wallpaper_show_pop");
}

wallpapers_icon_close.addEventListener("click", wallpapersiconcloseFunction);
show_wallpaper.addEventListener("click", showWallpaperFunction);


// ********************************** wallpaper change *****************************************
let background_wallpaer_set = document.getElementById("background_wallpaer_set");
const imgWallpaper1 = document.querySelector("#imgChange1");
const imgWallpaper2 = document.querySelector("#imgChange2");
const imgWallpaper3 = document.querySelector("#imgChange3");
const imgWallpaper4 = document.querySelector("#imgChange4");
const imgWallpaper5 = document.querySelector("#imgChange5");
const imgWallpaper6 = document.querySelector("#imgChange6");
const imgWallpaper7 = document.querySelector("#imgChange7");
const imgWallpaper8 = document.querySelector("#imgChange8");
const imgWallpaper9 = document.querySelector("#imgChange9");
const imgWallpaper10 = document.querySelector("#imgChange10");
const imgWallpaper11 = document.querySelector("#imgChange11");
const imgWallpaper12 = document.querySelector("#imgChange12");

imgWallpaper1.addEventListener("click", function(){
    container_name.classList.remove("container_pop_Name");
    wallpaper_container.classList.remove("wallpaper_show_pop");
    background_wallpaer_set.style.backgroundImage = "url('whatsapp-image/wahtsapp_wallpaper/one.png')";
})
imgWallpaper2.addEventListener("click", function(){
    container_name.classList.remove("container_pop_Name");
    wallpaper_container.classList.remove("wallpaper_show_pop");
    background_wallpaer_set.style.backgroundImage = "url('whatsapp-image/wahtsapp_wallpaper/two.jpg')";
})
imgWallpaper3.addEventListener("click", function(){
    container_name.classList.remove("container_pop_Name");
    wallpaper_container.classList.remove("wallpaper_show_pop");
    background_wallpaer_set.style.backgroundImage = "url('whatsapp-image/wahtsapp_wallpaper/three.jpg')";
})
imgWallpaper4.addEventListener("click", function(){
    container_name.classList.remove("container_pop_Name");
    wallpaper_container.classList.remove("wallpaper_show_pop");
    background_wallpaer_set.style.backgroundImage = "url('whatsapp-image/wahtsapp_wallpaper/four.jpg')";
})
imgWallpaper5.addEventListener("click", function(){
    container_name.classList.remove("container_pop_Name");
    wallpaper_container.classList.remove("wallpaper_show_pop");
    background_wallpaer_set.style.backgroundImage = "url('whatsapp-image/wahtsapp_wallpaper/five.jpg')";
})
imgWallpaper6.addEventListener("click", function(){
    container_name.classList.remove("container_pop_Name");
    wallpaper_container.classList.remove("wallpaper_show_pop");
    background_wallpaer_set.style.backgroundImage = "url('whatsapp-image/wahtsapp_wallpaper/six.png')";
})
imgWallpaper7.addEventListener("click", function(){
    container_name.classList.remove("container_pop_Name");
    wallpaper_container.classList.remove("wallpaper_show_pop");
    background_wallpaer_set.style.backgroundImage = "url('whatsapp-image/wahtsapp_wallpaper/seven.jpg')";
})
imgWallpaper8.addEventListener("click", function(){
    container_name.classList.remove("container_pop_Name");
    wallpaper_container.classList.remove("wallpaper_show_pop");
    background_wallpaer_set.style.backgroundImage = "url('whatsapp-image/wahtsapp_wallpaper/eight.png')";
})
imgWallpaper9.addEventListener("click", function(){
    container_name.classList.remove("container_pop_Name");
    wallpaper_container.classList.remove("wallpaper_show_pop");
    background_wallpaer_set.style.backgroundImage = "url('whatsapp-image/wahtsapp_wallpaper/nine.jpg')";
})
imgWallpaper10.addEventListener("click", function(){
    container_name.classList.remove("container_pop_Name");
    wallpaper_container.classList.remove("wallpaper_show_pop");
    background_wallpaer_set.style.backgroundImage = "url('whatsapp-image/wahtsapp_wallpaper/ten.jpg')";
})
imgWallpaper11.addEventListener("click", function(){
    container_name.classList.remove("container_pop_Name");
    wallpaper_container.classList.remove("wallpaper_show_pop");
    background_wallpaer_set.style.backgroundImage = "url('whatsapp-image/wahtsapp_wallpaper/eleven.jpg')";
})
imgWallpaper12.addEventListener("click", function(){
    container_name.classList.remove("container_pop_Name");
    wallpaper_container.classList.remove("wallpaper_show_pop");
    background_wallpaer_set.style.backgroundImage = "url('whatsapp-image/wahtsapp_wallpaper/tewal.jpg')";
})

// *************************************** change profile pick ***************************************
let imgArray = [
    "whatsapp-image/profile_avtar/avatar1.png",
    "whatsapp-image/profile_avtar/avatar2.png",
    "whatsapp-image/profile_avtar/avatar3.png",
    "whatsapp-image/profile_avtar/avatar4.png",
    "whatsapp-image/profile_avtar/avatar5.png",
    "whatsapp-image/profile_avtar/avatar6.png",
    "whatsapp-image/profile_avtar/avatar7.jpg",
    "whatsapp-image/profile_avtar/avatar8.png",
    "whatsapp-image/profile_avtar/avatar9.jpg",
    "whatsapp-image/profile_avtar/avatar10.png"
]

let profileTextArray = [
    "At Work",
    "At Home",
    "Available",
    "At Gym",
    "Urgent Calls Only",
    "Sleeping",
    "At Eat",
    "Working",
    "Whatsapp"
]

const chnagePrfile_index = Math.floor(Math.random() * imgArray.length);
const chnageText_index = Math.floor(Math.random() * profileTextArray.length);

const profileImgChnage = document.getElementById("profileImgChnage")
const showStatus = document.getElementById("showStatus");

function loadFunctionchnageProfileImg(){
    const imgProfile = imgArray[chnagePrfile_index];
    const textProfile = profileTextArray[chnageText_index];

    profileImgChnage.src = imgProfile;
    showStatus.innerHTML = textProfile;
}

loadFunctionchnageProfileImg();

// *********************************** mobile virfication with firebase *********************************
const formLogin = document.getElementById("formLogin");
const virification_container = document.getElementById("virification_container");
const small = document.querySelector("small");
const displayOne = document.querySelectorAll(".displayOne");
const onwerName = document.getElementById("onwerName");

function loginFormFunction(e){
    e.preventDefault();
    loginInput();
}

formLogin.addEventListener("submit", loginFormFunction);

// virification_container.style.display = "none";


function loginInput(){
    let enterYourName = document.getElementById("enterYourName").value;

    if(enterYourName == ""){
        small.innerHTML = "Enter Your Name";
    }else{
        displayOne.forEach(element => {
            element.style.display = "block";
            virification_container.style.display = "none";
            onwerName.innerHTML = enterYourName;
        })
    }

}