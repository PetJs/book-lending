# Library Book Lending System

This is a simple **Library Book Lending System** built using **HTML, CSS, and JavaScript**. It allows users to view available books, borrow them, and return them when done.

## Features
- Users can see a list of available books with their details.
- Users can borrow a book, marking it as unavailable.
- Once a book is borrowed, the "Borrow" button becomes gray and disabled.
- Users can return a book, making it available again.
- Each book has an image for better representation.

## Technologies Used
- **HTML** for structuring the webpage.
- **CSS** for styling the page.
- **JavaScript** for handling the borrowing and returning logic.

## Project Structure
```
|-- index.html         # Main HTML file
|-- style.css          # Stylesheet for styling the page
|-- script.js          # JavaScript for functionality
|-- images/            # Folder containing book images
|-- README.md          # Project documentation
```

## Setup Instructions
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/library-book-lending.git
   ```
2. Navigate to the project folder:
   ```sh
   cd library-book-lending
   ```
3. Open `index.html` in a browser to view the project.

## How It Works
1. The books are stored in a JavaScript array.
2. The `createCard()` function dynamically generates book cards.
3. The **Borrow** button changes to **Borrowed** and becomes gray when clicked.
4. The **Return** button makes the book available again when clicked.


## Deployment
Here is the deployed [Link]("https://book-lending-eta.vercel.app/")


