// Form input values
const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');
const bookGenre = document.getElementById('genre');
const bookPurchase = document.getElementById('purchased');
const bookIsbn = document.getElementById('isbn');

const bookList = document.querySelector('tbody');
const enterBtn = document.getElementById('myButton');

enterBtn.addEventListener("click",getInputVal);

function getInputVal() {
    let addBook = document.createElement('tr');
    addBook.innerHTML = "<td>" + bookTitle.value + "</td>" + "<td>" + bookAuthor.value + "</td>" + "<td>" + bookGenre.value + "</td>" + "<td>" + bookPurchase.value + "</td>" + "<td>" + bookIsbn.value + "</td>";
    bookList.appendChild(addBook);
    bookTitle.value = "";
    bookAuthor.value = "";
    bookPurchase.value = "";
    bookIsbn.value = "";
}