
// Pseudocode:
/*
1. person enters name
2. person enters comments
3. person submits name and comments
4. page should not reload after submit

javascript should takeover
5. create a new article section called ".publ__comment" under comments section=> append this to ".comment" parent

// creating an image block
6. create a div called "publ__imageblock" and append this to "publ__comment"
7. create an image element called "publ__img" and append this to "publ__imageblock"
8. insert person image circle as shown in comment__img on submit

//creating text block
9. create a div called ".publ__content" and append this to "publ__comment"
create
10. create a p element called "publ__name" and append this to ".publ__content"
11. innertext of publ__name should be the same as that entered in "name= fname"

10. create a p element called "publ__text" and append this to ".publ__content"
11. innertext of publ__text should be the same as that entered in "name= comment"

7. page should not reload after submit

*/

// // Global variables:
let apiURL = 'https://project-1-api.herokuapp.com';
let apiKey = '?api_key=2b9b5a96-ed1d-40a8-9268-fea0e31c8936'
let route = "";

let completeUrl = apiURL + route + apiKey;
    
// GET comments from API:
function getResults() {
        axios
            .get(`https://project-1-api.herokuapp.com/comments?api_key=2b9b5a96-ed1d-40a8-9268-fea0e31c8936`)
            .then((result => {
                console.log(result);
                // displayComment(result.data);
                iterateArr(result.data);
                // console.log(result.data[0]);
                // createElement();

            })
        );
}
getResults();


// POST comments to API:
function postComment() {
    let userComment = event.target.comment.value;
    if (userComment.length > 0) {
        let userName = event.target.fname.value;
        (userName.length > 0) ? userName = event.target.fname.value : userName = "Anonymous";
        
        axios.post('https://project-1-api.herokuapp.com/comments?api_key=2b9b5a96-ed1d-40a8-9268-fea0e31c8936',
            {
                name: userName,
                comment: userComment
            })
            .then(postedComment => {
            console.log(postedComment.data);
            getResults(postedComment.data);
        })
    } else {
                alert("Please add your comment before posting.");
            }
}



// Send form data to API and get comments upon form submission:
let formEl = document.querySelector('.comment__form');
formEl.addEventListener('submit', (event) => {
    event.preventDefault();
    postComment();
    getResults();
    // let commentSectionReset = document.querySelector('.publ');
    // commentSectionReset.textContent = '';
});



//function to create HTML elements
function createElement(object) {
    
    // Block which contains user details, comments, delete and likes
    let articleEl = document.createElement('ul');
    articleEl.classList.add('publ__comment');
    articleEl.id = object.id;

    // container for user image
    let imageblkEl = document.createElement('li');
    imageblkEl.classList.add('publ__imageblock');
    articleEl.appendChild(imageblkEl);

    // User image element
    let imgEl = document.createElement('img');
    imgEl.classList.add('publ__img');
    imgEl.id = object.id;
    imageblkEl.appendChild(imgEl);
    // imgEl.setAttribute('src', element.image);

    // creating a text block for content
    let contentEl = document.createElement('li');
    contentEl.classList.add('publ__content');
    articleEl.appendChild(contentEl);

    // creating a div for name and date
    let nametimeEl = document.createElement('li');
    nametimeEl.classList.add('publ__nametime');
    contentEl.appendChild(nametimeEl);

    //creating name element
    let nameEl = document.createElement('li');
    nameEl.classList.add('publ__name');
    nameEl.id = object.id;
    nametimeEl.appendChild(nameEl);
    nameEl.innerText = object.name;
    
    //creating a date element
    let dateEl = document.createElement('time');
    dateEl.classList.add('publ__date');
    dateEl.id = object.id;
    nametimeEl.appendChild(dateEl);
    let newDate = new Date(object.timestamp);
    dateEl.innerText = newDate.toLocaleDateString('en-US');
    
    //creating comment text element
    let comtextEl = document.createElement('li');
    comtextEl.classList.add('publ__text');
    comtextEl.id = object.id;
    contentEl.appendChild(comtextEl);
    comtextEl.innerText = object.comment;

    // container for delete and like icons
    let likeDelIcons = document.createElement('li');
    likeDelIcons.classList.add('publ__likedel');
    contentEl.appendChild(likeDelIcons);
      
    //icon for deleting a comment
    let delEl = document.createElement('span');
    delEl.classList.add('material-icons', 'publ__delete');
    delEl.id = object.id;
    likeDelIcons.appendChild(delEl);
    delEl.innerText = 'delete_outline';

    // icon for "liking" a comment
    let likeEl = document.createElement('span');
    likeEl.classList.add('material-icons', 'publ__like');
    likeEl.id = object.id;
    likeDelIcons.appendChild(likeEl);
    likeEl.innerText = 'favorite';

    // Text displaying the total number of likes a comment's received
    let likeCount = document.createElement('li');
    likeCount.classList.add('publ__likeCount');
    likeCount.id = object.id;
    likeDelIcons.appendChild(likeCount);
    likeCount.innerText = object.likes;
    
    return articleEl;
}



//Iterate through each object in the array:
function iterateArr(arr) {
    formEl.reset();
    let commentSectionEl = document.querySelector('.publ');
    commentSectionEl.textContent = '';
    arr.reverse().forEach((element) => {
        const returnvalue = createElement(element);
        commentSectionEl.appendChild(returnvalue);
    })
    likeCommentEvent();
    delCommentEvent();
}


// Functionality for liked comments- this will change the color of the "heart" icon and update the likecount.
    function likeCommentEvent() {
        let likedComm = document.querySelectorAll('.publ__like');
        likedComm.forEach(element => {
            element.addEventListener('click', (event) => {
                event.preventDefault();
                event.stopPropagation();
                event.stopImmediatePropagation();
                let id = event.target.id;
                let completeUrl = apiURL + '/comments/' + id + '/like' + apiKey;
                axios.put(completeUrl)
                    .then(result => {
                    element.classList.toggle('publ__like--active'); 
                    // element.style.color = "#0065ad";
                    let liketotal = document.querySelectorAll('.publ__likeCount');
                    liketotal.forEach(listing => {
                        (listing.id === id) ? listing.innerText = result.data.likes : listing.innerText;
                    });
                })
            });
    
        });
    }
    

// Delete comment upon clicking on the "trashbin" icon. It displays a message for the user to confirm if they'd like to delete the comment. If the user clicks on yes, then the comment is deleted.
    function delCommentEvent() {
        let delComm = document.querySelectorAll('.publ__delete');
        delComm.forEach(element => {
            element.addEventListener('click', (event) => {
                event.preventDefault();
                event.stopPropagation();
                event.stopImmediatePropagation();
                let id = event.target.id;
                let completeUrl = apiURL + '/comments/' + id + apiKey;
                let confirmation = window.confirm("Are you sure you want to delete this message?");
                if(confirmation === true ) {
                    axios.delete(completeUrl)
                    .then(result => {
                        getResults();
                    });
                }
            
            });
    
        });
    }

