// let todate = new Date().toLocaleString('en-US');
// window.onload = function () {

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

// Global variables:
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
            }

        ).then(postedComment => {
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
    let commentSectionReset = document.querySelector('.publ');
    // console.log(commentSectionEl);
    commentSectionReset.textContent = '';
});



//function to create HTML elements
function createElement(object) {

    let commentSectionEl = document.querySelector('.publ');
    
    let articleEl = document.createElement('ul');
    articleEl.classList.add('publ__comment');
    articleEl.id = object.id;


    let imageblkEl = document.createElement('li');
    imageblkEl.classList.add('publ__imageblock');
    articleEl.appendChild(imageblkEl);

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

    let likeDelIcons = document.createElement('li');
    likeDelIcons.classList.add('publ__likedel');
    contentEl.appendChild(likeDelIcons);
      
      
    let delEl = document.createElement('span');
    delEl.classList.add('material-icons', 'publ__delete');
    delEl.id = object.id;
    likeDelIcons.appendChild(delEl);
    delEl.innerText = 'delete_outline';


    
    let likeEl = document.createElement('span');
    likeEl.classList.add('material-icons', 'publ__like');
    likeEl.id = object.id;
    likeDelIcons.appendChild(likeEl);
    likeEl.innerText = 'favorite';

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

    function likeCommentEvent() {
        let likedComm = document.querySelectorAll('.publ__like');
        likedComm.forEach(element => {
            // console.log(element);
            element.addEventListener('click', (e) => {
                event.preventDefault();
                event.stopPropagation();
                event.stopImmediatePropagation();
                // element.classList.toggle('publ__like--active');
                // console.log(event.target);
                let id = event.target.id;
                // console.log(id);
                let completeUrl = apiURL + '/comments/' + id + '/like' + apiKey;
                // console.log(completeUrl);
                axios.put(completeUrl).then(result => {
                    // console.log(result);
                    element.classList.toggle('publ__like--active'); //not working toggle
                    // element.style.color = "#0065ad";
                    // console.log(parseInt(likeCount.innerText) += 1);
                }
                ).then(
                    () => {
                        getResults();
                        
                    })
                //     .then(() => {
                //         element.classList.toggle('publ__like--active');
                // })
            }
            );
    
        });
        // }
    }
    
    
    function delCommentEvent() {
        let delComm = document.querySelectorAll('.publ__delete');
        delComm.forEach(element => {
            element.addEventListener('click', (e) => {
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
    
// };//window onload closure
