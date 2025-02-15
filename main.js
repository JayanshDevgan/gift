const messages = [
    "Me holding you in arms for eternity",
    "You disturbing me when i am working and if i try to yell at you then just hug me tightly",
    "We will go one a lot of trips all over the world",
    "Imagine, slight cosy environment with you, me and bornfire and old 90's music",
    "If you yell at me i will simply kiss you",
    "I won't say cuddles is all what i want to do but i hope you like a lot of cuddles",
    "You & me holding each other while sleeping",
    "If you fear anything I will be there with you, being your power",
    "I will love you in a lot differenct way from emotional touches to physical",
    "I want to hold you from your waist and then pull you towards me looking in your eyes and get you so so close to me that you wont be able to escape",
    "Us having fun on beach side area and me pushes you in sea",
    "Sunday would sometimes super fun or romantic days. watching movies cooking food together",
    "We will do all risky but fun activites like surfing, scuba diving, sky diving, bungee jumping and all",
    "We will do some challenges like limited money trips to have crazy experiences",
    "Imagine, me taking you on haunted places where no one is allowed to go",
    "Imagine in a hotel you & me full romantic enviorment all mood set me & you taking steps one by one getting closer looking in each others eyes you getting closer and going for kiss but i starts pillow fight",
    "Imagine you cooking dinner and I secretly holds you from back and ...",
    "you sleeping on my lap when ever you feel low",
    "I want to give millions of kisses on your whole body starting from your neck",
    "We will experience places that rarely got experienced, where no one goes but beautiful places & i already have some plans in mind.",
    "I want to do a lot of travelling with you",
    "We will play a lot of spicy games",
    "I can't wait to feel you",
    "let me know what would you do if we were alone",
    "I want us to sleep in each others arms",
    "I would love to watch you whole day contineosuly",
    "Us sleeping on beach under candle lights",
    "I want to write the story of forever with you, one wrinkle, one laugh, and one adventure at a time",
    "Let's turn grey together, hand in hand, heart in heart soul in soul",
    "Who want love story; i want life time novel with you",
    "let's make our love the kind that time respects, that years admire, and that forever envies.",
    "I want to see my only future with you", 
    "One day, we'll look back at our journey, smile at the memories and still hold hands like we did on day one",
    "No matter wehre life takes us, my final destination will remain beside you.",
    "you know,  how you in short hairs; mine",
    "you are cute & hot at the same time",
    "you voice is what i want to hear my whole life.",
    "killer in black dress is what you are; but plese don't kill me",
    "you eyes are the kind of north where no compass dares to work - pulling me in, not with direction, but with destiny",
    "I want time to stop as you get in my arms",
    "your heart is the only home I want to grow old in",
    "you are my favorite but if i have to choose some special thing about you --> you are hard working, your facial feature especially eyes are my favorite",
    "eyes are like i can't stop looking at you",
    "your neck would be one of my most favorite part of your body",
    "your small little hands are so cute",
    "you have such a perfect lips, i can't wait to kiss you",
    "I want to smell your hairs while holding you in my arms",
    "you are kind of chaos that feels like home - wild yet conforting",
    "you are like poetry hidden between the lines of life, ment to be felt rather thean read",
    "your arns are a place where even silence speaks, and time forgets to move",
    "you know you are like a winter morning kissed by the sun, both chlil and warmth a constrast that leaves me breathless",
    "you know what i like about you one moment, you are innocence of a sunrise, the next the mystery of midnight",
    "Never stop behaving like a child in front of me or family as that's most beautiful thing you do",
    "you are the reason, my heart beats",
    "I would not mind to spice things up",
    "Be my naina and I'll be your bunny",
    "I know you have seen many butterflies but let me make you feel them too.",
    "I want our conversations to last hrs",
    "I want to start & end a new life with you",
    "Whenever you will feel disconfort I'll be your calm,, your warmth, your peace.",
    "I'll be the hands that brings you confort, the voice that soothes, and the presence that never leaves",
    "Whenever you feel low I'llbe right rherew to hold you close and make you feel safe.",
    "I'll make sure you have your favorite snacks, a cosy blanket, and endless cuddles when ever you need them",
    "I'll love you even more on the taugh days, becasue you deserve care every single moment",
    "Come closer, let me remind you how irresistible you are ..... slowly",
    "I could spend forever exploring every inch of you",
    "you don't neeed a reason to pull me closer I'm alreadoy yours",
    "your lips should come with a warning because once I start, I won't stop",
    "I don't just want you in my arms, I want you breathless tangled with me,, lost in the moment",
    "let's turn a simple kiss into something that leaves us both wanting more.",
    "you're not just on my mind you're in my every thought in every way I want to touch you",
    "I won't just kiss you I'll make sure every inch of you remembers how it feels to be wanted",
    "Sometimes we will sleep whole day but not the whole night",
    "I love talking to you, even if I have nothing to say",
    "I want to grab your hand push you towards wall & ",
    "I want to do small fights with you and end them with either giving you a hug from behind or kiss you",
    "Hickies are what i wnat to give you all over your body",
    "I want to smell you",
    "I want to take you to a family wedding and dance with you in front of everyone",
    "There are two colors you look hot in (Black, Dark red)",
    "I want our daughter to be exactly like you",
    "I want to dance with you in empty rainy road mid night",
    "I want to lay on your chest and listen to your heart beat",
    "I love the sound of your voice",
    "i like to be alone but i would rather be alone with you",
    "i want to feel every inch of your body",
    "i want to kiss you in the rain",
    "I can't tell you how many times I've fallen asleep with you on my mind and woken up the same",
    "Imagin, us on bed watching movie & cuddling each other",
    "Let's cuddle on a rainy day, watch movies, and make out",
    "I wish i was kissing you instead of missing you",
    "i want our grandchilds to listen our love story or should i say novel from us.",
    "your're smile is literally the cutest thing I've ever seen in my life.",
    "Nobody is perfect, but you're so close its scary",
    "I love you, I love you, I love you",
    "don't think you are alone I'll be always on your side",
    "with every sun rise, I find myself lost in the thought of you",
    "Even though we have distance a part but still i always sleep with you, I love you",
    "I will stop loving you when i die"
];

const totalCards = 100;
const cardElement = document.getElementById('card');
let currentIndex = 0;

const cardMessages = Array.from({ length: totalCards }, () => {
    return messages[Math.floor(Math.random() * messages.length)];
});

function renderCard() {
    cardElement.textContent = cardMessages[currentIndex];
}

document.getElementById('prevBtn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalCards) % totalCards;
    renderCard();
});

document.getElementById('nextBtn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalCards;
    renderCard();
});

renderCard();