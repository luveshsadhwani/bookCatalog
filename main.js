// Form input values
const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');
const bookGenre = document.getElementById('genre');
const bookPurchase = document.getElementById('purchased');
const bookStatus = document.getElementById('status');


const bookList = document.querySelector('tbody');
const enterBtn = document.getElementById('myButton');

document.addEventListener('DOMContentLoaded', getLocalBooks);
enterBtn.addEventListener("click",getInputVal);


function getInputVal(event) {
    // Prevent page from refreshing when form is submitted
    event.preventDefault();
    // Creating a new row for the table
    let addBook = document.createElement('tr');
    addBook.innerHTML = "<td>" + bookTitle.value + "</td>" + "<td>" + bookAuthor.value + "</td>" + "<td>" + bookGenre.value + "</td>" + "<td>" + bookPurchase.value + "</td>" + "<td>" + bookStatus.value + "</td>" + '<td id="del"><i class="fas fa-trash-alt"></i></td>';
    bookList.appendChild(addBook);
    addBook.style.animation = 'fadein 1s'; // adding Anmiation
    // Store book information in an array
    let bookInfo = [bookTitle.value, bookAuthor.value, bookGenre.value, bookPurchase.value, bookStatus.value];
    // Save value to local storage
    saveLocalBook(bookInfo);
    // Resetting the values in the form
    bookTitle.value = "";
    bookAuthor.value = "";
    bookPurchase.value = "";
    bookStatus.value = "";
    addBook.addEventListener("click", deleteCheck)
}

function deleteCheck(event) {
    // Check we are clicking on delete button
    const delBtn = event.target;
    const row = delBtn.parentElement.parentElement;
    if (delBtn.getAttribute('class') === 'fas fa-trash-alt') {
        row.style.animation = 'fadeout 1s';
        removeLocalBook(row);
        row.addEventListener('animationend', function() {
            row.remove()
        });
    }
}


function checkLocalBooks() {
    let books;
    if (localStorage.getItem('books') === null) {
        return books = [];
    } else {
        return books = JSON.parse(localStorage.getItem('books'));
    }
}

function saveLocalBook (book) {
    let books = checkLocalBooks();
    books.push(book);
    localStorage.setItem('books',JSON.stringify(books));
}

function getLocalBooks () {
    let books = checkLocalBooks();
    books.forEach( function(book) {
        let addBook = document.createElement('tr');
        addBook.innerHTML = "<td>" + book[0] + "</td>" + "<td>" + book[1] + "</td>" + "<td>" + book[2] + "</td>" + "<td>" + book[3] + "</td>" + "<td>" + book[4] + "</td>" + '<td id="del"><i class="fas fa-trash-alt"></i></td>';
        bookList.appendChild(addBook);
        addBook.addEventListener("click", deleteCheck)
    })
}

function removeLocalBook (row) {
    let books = checkLocalBooks();
    const deleteBook = row.firstChild.innerText;
    let bookName = [];
    for (i=0; i<books.length; i++) {
        bookName.push(books[i][0]);
    }
    const index = bookName.indexOf(deleteBook); 
    books.splice(index,1)
    localStorage.setItem("books", JSON.stringify(books));    
}