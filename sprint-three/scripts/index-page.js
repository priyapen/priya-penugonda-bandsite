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

let apiURL = 'https://project-1-api.herokuapp.com';
let apiKey = '?api_key=2b9b5a96-ed1d-40a8-9268-fea0e31c8936'
let route = "";
    
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


// function likeComment(id) {
//     axios.put('https://project-1-api.herokuapp.com/comments/:id/like?api_key=2b9b5a96-ed1d-40a8-9268-fea0e31c8936')
//         .then(
        

//     )
// }

// Function created to display comments
    function displayComment(arr) {
    formEl.reset();
        let commentSectionEl = document.querySelector('.publ');
        console.log(commentSectionEl);
    commentSectionEl.textContent = '';

        arr.slice().reverse().forEach(element => {
        
            let elementId = element.id;
            console.log(elementId);

    // create article in comment section
    // let articleEl = document.createElement('article');
    // articleEl.classList.add('publ__comment');
    // commentSectionEl.appendChild(articleEl);
    let articleEl = document.createElement('ul');
    articleEl.classList.add('publ__comment');
    commentSectionEl.appendChild(articleEl);

    // creating an image block
            // let imageblkEl = document.createElement('div');
            let imageblkEl = document.createElement('li');
    imageblkEl.classList.add('publ__imageblock');
    articleEl.appendChild(imageblkEl);

    //creating an image
    // let imgEl = document.createElement('img');
    // imgEl.classList.add('publ__img');
    // imageblkEl.appendChild(imgEl);
    // imgEl.setAttribute('src', element.image);

    // creating a text block for content
            // let contentEl = document.createElement('div');
            let contentEl = document.createElement('li');
    contentEl.classList.add('publ__content');
    articleEl.appendChild(contentEl);
        
    // creating a div for name and date
            // let nametimeEl = document.createElement('div');
            let nametimeEl = document.createElement('li');
    nametimeEl.classList.add('publ__nametime');
    contentEl.appendChild(nametimeEl);

    //creating name element
            // let nameEl = document.createElement('p');
            let nameEl = document.createElement('li');
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
            // let comtextEl = document.createElement('p');
            let comtextEl = document.createElement('li');
    comtextEl.classList.add('publ__text');
    contentEl.appendChild(comtextEl);
        comtextEl.innerText = element.comment;
        

            // let likeDelIcons = document.createElement('div');
            let likeDelIcons = document.createElement('li');
        likeDelIcons.classList.add('publ__likedel');
            contentEl.appendChild(likeDelIcons);
            
            
        let delEl = document.createElement('span');
        delEl.classList.add('material-icons','publ__delete');
            likeDelIcons.appendChild(delEl);
            delEl.innerText = 'delete_outline';

            
            
            let likeEl = document.createElement('span');
            likeEl.classList.add('material-icons', 'publ__like');
            likeEl.id = element.id;
            likeDelIcons.appendChild(likeEl);
            likeEl.innerText = 'favorite';

            // let likeCount = document.createElement('p');
            let likeCount = document.createElement('li');
                likeCount.classList.add('publ__likeCount');
                likeDelIcons.appendChild(likeCount);
                likeCount.innerText = element.likes;
                console.log(typeof (likeCount.innerText));
           

            likeEl.addEventListener('click', (e) => { 
                console.log(event.target);
                let id = event.target.id;
                console.log(id);
                let completeUrl = apiURL + '/comments/' + id + '/like' + apiKey;
                console.log(completeUrl);
                axios.put(completeUrl).then(result => {
                    console.log(result);
                    likeEl.style.color = '#745669';
                    // console.log(parseInt(likeCount.innerText) += 1);
                }
                ).then(result => {
                    getResults();
                    likeCount.innerText = element.likes;
                    console.log(element.likes);
                })
             });

            // let likeCount = document.createElement('p');
            // likeCount.classList.add('publ__likeCount');
            // likeDelIcons.appendChild(likeCount);
            // likeCount.innerText = element.likes;

            // let likedCommEl = document.querySelector('.publ__like');
            // console.log(likedCommEl);
            // likedCommEl.addEventListener("click", (event) => { console.log('clicked heart'); });




    });
        
    formEl.reset();
}
    
    
//display comment closure

// window.onload = function() {
//     // let likedCommEl = document.querySelector('.publ__like');
//     // console.log(likedCommEl);
//     document.querySelector('.publ__like').addEventListener('click', (event) => { console.log('clicked heart'); })
// }
    
    // like comment-

    // let likeEl = document.querySelector('.publ__like');
    // console.log(likeEl);
// 

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