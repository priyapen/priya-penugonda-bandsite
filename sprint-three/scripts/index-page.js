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
    
    function getResults() {
        axios
            .get(`https://project-1-api.herokuapp.com/comments?api_key=2b9b5a96-ed1d-40a8-9268-fea0e31c8936`)
            .then((result => {
                console.log(result);
                displayComment(result.data);
            })
        );
    }
    
    getResults();

let formEl = document.querySelector('.comment__form');



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


formEl.addEventListener('submit', (event) => {
    event.preventDefault();
    postComment();
    getResults();

    // getResults();
});




// Function created to display comments
    function displayComment(arr) {
    formEl.reset();
        let commentSectionEl = document.querySelector('.publ');
        console.log(commentSectionEl);
    commentSectionEl.textContent = '';

        arr.reverse().forEach(element => {
        
            let elementId = element.id;
            console.log(elementId);

    // create article in comment section
    let articleEl = document.createElement('article');
    articleEl.classList.add('publ__comment');
    commentSectionEl.appendChild(articleEl);

    // creating an image block
    let imageblkEl = document.createElement('div');
    imageblkEl.classList.add('publ__imageblock');
    articleEl.appendChild(imageblkEl);

    //creating an image
    // let imgEl = document.createElement('img');
    // imgEl.classList.add('publ__img');
    // imageblkEl.appendChild(imgEl);
    // imgEl.setAttribute('src', element.image);

    // creating a text block for content
    let contentEl = document.createElement('div');
    contentEl.classList.add('publ__content');
    articleEl.appendChild(contentEl);
        
    // creating a div for name and date
    let nametimeEl = document.createElement('div');
    nametimeEl.classList.add('publ__nametime');
    contentEl.appendChild(nametimeEl);

    //creating name element
    let nameEl = document.createElement('p');
    nameEl.classList.add('publ__name');
    nametimeEl.appendChild(nameEl);
    nameEl.innerText = element.name;

    //creating a date element
    let dateEl = document.createElement('time');
    dateEl.classList.add('publ__date');
        nametimeEl.appendChild(dateEl);
        let newDate = new Date(element.timestamp);
    dateEl.innerText = newDate.toLocaleDateString('en-US');
    // console.log(typeof(comment.date));

    //creating comment text element
    let comtextEl = document.createElement('p');
    comtextEl.classList.add('publ__text');
    contentEl.appendChild(comtextEl);
        comtextEl.innerText = element.comment;
        

        let likeDelIcons = document.createElement('div');
        likeDelIcons.classList.add('publ__likedel');
        // likeDelIcons.classList.add('fa-stack');
            contentEl.appendChild(likeDelIcons);
            // dont use ineerhtml
        likeDelIcons.innerHTML = '<i class="far  fa-trash-alt publ__del"></i><i class="far fa-heart publ__like"></i>';
        let likeEl = document.querySelector('.publ__like');
        console.log(likeEl);


            
        let delEl = document.createElement('image');
        delEl.classList.add('publ__delete');

        likeDelIcons.appendChild(delEl);

        // let delEl = document.createElement('i');
        // delEl.classList.add('publ__delete');
        // // delEl.classList.add('far fa-trash-alt');
        // likeDelIcons.appendChild(delEl);
        // delEl.innerHTML = '<i class="far fa-trash-alt"></i>';


        // let likeEl = document.createElement('i');
        // delEl.classList.add('publ__like');
        // likeDelIcons.appendChild(likeEl);

    });
        
    formEl.reset();
}
    
    
//display comment closure

    
    // like comment-

    // let likeEl = document.querySelector('.publ__like');
    // console.log(likeEl);
// likeEl.addEventListener("click", (event) => { console.log('clicked heart',event); }
//     );

// likeEl.OnClick(console.log("please work!"));
    //     event => {
    //     axios
    //         .get(`https://project-1-api.herokuapp.com/comments?api_key=2b9b5a96-ed1d-40a8-9268-fea0e31c8936`)
    //         .then((result => {
    //             console.log(result);
    //             // displayComment(result.data.);
    //         })
    //     );

    //     axios.put('https://project-1-api.herokuapp.com/comments/:id/like?api_key=2b9b5a96-ed1d-40a8-9268-fea0e31c8936')

    // })
// function likeComment() {
    
// }



// };//window onload closure