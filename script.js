const books = [
    {
        id: 1,
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        year: 1937,
        available: true,
        img: "https://m.media-amazon.com/images/I/91b0C2YNSrL.jpg"
    },
    {
        id: 2,
        title: "1984",
        author: "George Orwell",
        year: 1949,
        available: true,
        img: "https://m.media-amazon.com/images/I/71kxa1-0mfL.jpg"
    },
    {
        id: 3,
        title: "Broken: Not a Halal love story",
        author: "Fatima Bala",
        year: 2021,
        available: true,
        img: "images/broken.jpg"
    },
    {
        id: 4,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        year: 1960,
        available: true,
        img: "https://m.media-amazon.com/images/I/81OtwkiBSDL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        id: 5,
        title: "Hafsatu Bebi",
        author: "Fatima Bala",
        year: 2021,
        available: true,
        img: "images/hafsatu.jpg"
    },
    {
        id: 6,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        year: 1925,
        available: true,
        img: "https://m.media-amazon.com/images/I/71V7g-5Z+VL.jpg"
    },
    {
        id: 7,
        title: "Brave New World",
        author: "Aldous Huxley",
        year: 1932,
        available: true,
        img: "https://m.media-amazon.com/images/I/71m-MxdJ2WL.jpg"
    },
    {
        id: 8,
        title: "Fahrenheit 451",
        author: "Ray Bradbury",
        year: 1953,
        available: true,
        img: "https://m.media-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        id: 9,
        title: "Crime and Punishment",
        author: "Fyodor Dostoevsky",
        year: 1866,
        available: true,
        img: "https://m.media-amazon.com/images/I/81-+1-BhG+L.jpg"
    },
    {
        id: 10,
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        year: 1951,
        available: true,
        img: "https://m.media-amazon.com/images/I/91L5dLU4zXL.jpg"
    },
    {
        id: 11,
        title: "Lord of the Flies",
        author: "William Golding",
        year: 1954,
        available: true,
        img: "https://m.media-amazon.com/images/I/71kB7iZy2zL.jpg"
    },
    {
        id: 12,
        title: "Frankenstein",
        author: "Mary Shelley",
        year: 1818,
        available: true,
        img: "https://m.media-amazon.com/images/I/91cwOSS4sDL.jpg"
    },
    {
        id: 13,
        title: "The Alchemist",
        author: "Paulo Coelho",
        year: 1988,
        available: true,
        img: "https://m.media-amazon.com/images/I/71aFt4+OTOL.jpg"
    },
    {
        id: 14,
        title: "The Odyssey",
        author: "Homer",
        year: -800,
        available: true,
        img: "https://m.media-amazon.com/images/I/91P2scOm0mL.jpg"
    },
    {
        id: 15,
        title: "Les Misérables",
        author: "Victor Hugo",
        year: 1862,
        available: true,
        img: "https://m.media-amazon.com/images/I/81N6R8AewwL.jpg"
    },
    {
        id: 16,
        title: "Dracula",
        author: "Bram Stoker",
        year: 1897,
        available: true,
        img: "images/dracula.jpg"
    },
    {
        id: 17,
        title: "Things Fall Apart",
        author: "Chinua Achebe",
        year: 1958,
        available: true,
        image: "images/things.jpg"
    },
    {
        id: 18,
        title: "No Longer at Ease",
        author: "Chinua Achebe",
        year: 1960,
        available: true,
        image: "images/no-longer-at-ease.jpg"
    },
    {
        id: 19,
        title: "The Picture of Dorian Gray",
        author: "Oscar Wilde",
        year: 1890,
        available: true,
        img: "https://m.media-amazon.com/images/I/71XrNjy5X8L.jpg"
    },
    {
        id: 20,
        title: "Wuthering Heights",
        author: "Emily Brontë",
        year: 1847,
        available: true,
        img: "images/wuthering-heights.jpg"
    }
];



//State Variables
const displayBookCard = document.getElementById('book-card'); 


function createCard(){
    displayBookCard.innerHTML = ''
    for(let i = 0; i < books.length; i++){
        const card = document.createElement('div');
        card.innerHTML = 
        `
            <img src="${books[i].img}" alt="${books[i].title}" class="book-image">
            <h3>${books[i].title}</h3>
            <p>${books[i].author} (${books[i].year})</p>
        `;

        const btnGreen = document.createElement('button')
        const btnRed = document.createElement('button')
        
        btnGreen.textContent = books[i].available ? 'Borrow' : 'Borrowed';
        btnGreen.classList.add('borrow-btn');
        if (!books[i].available) {
            btnGreen.classList.add('used');
            btnGreen.disabled = true;
        }
        btnGreen.disabled = !books[i].available; 
        btnGreen.addEventListener('click', () => borrowBook(books[i].id));

        btnRed.textContent = 'Return';
        btnRed.classList.add('return-btn')
        btnRed.classList.toggle('hidden', books[i].available); 
        btnRed.addEventListener('click', () => returnBook(books[i].id));

        card.appendChild(btnGreen);
        card.appendChild(btnRed);
        displayBookCard.appendChild(card);
    }
}

function borrowBook(id){
    const book = books.find(b => b.id === id);
    if(book && book.available){
        book.available = false;
        createCard();
    }else{
        return
    }
}

function returnBook(id){
    const book = books.find(b => b.id === id);
    if(book && !book.available){
        book.available = true;
        createCard();
    }
}

createCard();