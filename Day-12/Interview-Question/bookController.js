const books = [
    {
        id: 1,
        title: "Atomic Habits",
        author: "James Clear",
        price: 499
    },
    {
        id: 2,
        title: "The Alchemist",
        author: "Paulo Coelho",
        price: 399
    },
    {
        id: 3,
        title: "Rich Dad Poor Dad",
        author: "Robert Kiyosaki",
        price: 450
    }
];

module.exports = books;
const getBook = (req, res) => {

    res.send({
        success: true,
        message: "All Books Displayed",
        data: books
    });

};
const getBookById = (req,res)=>{
    const Book = books.find(book=>book.id == req.params.id)
    if(Book){
        res.status(200).send({
            success: true,
            data: book
        })
    }
};
const createBook = (req,res)=>{
    const newbook = {
        id: books.length + 1,
        title: req.body.title,
        author: req.body.author,
        price: req.body.price
    };
    books.push(newbook)
    req.status(200).send({
        success: true,
        message: "Book Create Successfully",
        data: books
    })
};
const updateBook = (req,res)=>{
const book = books.find(book=>book.id = req.params.id)
if(book){
    book.title = req.body.title
    book.author = req.body.author
    book.price = req.body.price
    res.send({
        success: true,
        message:"Book Updated Correctly",
        data:book
    })
};
};
const deleteBook = (req,res)=>{
const book = books.filter(book=>book.id != req.params.id)
if(book){
    res.status(200).json({
        success: true,
        message: "Book deleted successfully"
    });
}
};

module.exports = {
    getBook,getBookById, createBook, updateBook,deleteBook
};