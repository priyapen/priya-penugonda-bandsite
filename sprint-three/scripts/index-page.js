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
    // // console.log(commentSectionEl);
    // commentSectionEl.textContent = '';
    
    let articleEl = document.createElement('ul');
    articleEl.classList.add('publ__comment');
    articleEl.id = object.id;
    commentSectionEl.appendChild(articleEl);

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
    

     //creating a date element
     let dateEl = document.createElement('time');
    dateEl.classList.add('publ__date');
    dateEl.id = object.id;
    nametimeEl.appendChild(dateEl);
    

//creating comment text element

            let comtextEl = document.createElement('li');
    comtextEl.classList.add('publ__text');
    comtextEl.id = object.id;
    contentEl.appendChild(comtextEl);


  let likeDelIcons = document.createElement('li');
  likeDelIcons.classList.add('publ__likedel');
      contentEl.appendChild(likeDelIcons);
      
      
  let delEl = document.createElement('span');
    delEl.classList.add('material-icons', 'publ__delete');
    delEl.id = object.id;
    likeDelIcons.appendChild(delEl);
    
    let likeEl = document.createElement('span');
    likeEl.classList.add('material-icons', 'publ__like');
    likeEl.id = object.id;
    likeDelIcons.appendChild(likeEl);

    let likeCount = document.createElement('li');
    likeCount.classList.add('publ__likeCount');
    likeCount.id = object.id;
                likeDelIcons.appendChild(likeCount);
    
    return iterateArr;
}


//Iterate through each object in the array:
function iterateArr(arr) {
    // for (let i = 0; i < arr.length; i++)
    arr.forEach((element, i) => {
        console.log("creating for index", i);
        createElement(element);
        console.log("created element at index:", i);
        console.log("displaying for index", i);
        displayComment(element);
        console.log('completed display and back to iterateARR');
    })
//     // {
//     //     createElement(arr[i]);
//     //     // console.log("created element at index:", element);
//     //     displayComment(arr[i]);
//     // };

//     // let numEl = document.querySelectorAll('.publ__comment');
//     // for (let i = 0; i <= numEl.length - 1; i++) {
//     //     displayComment(element, i);
//     // }
//         // displayComment(arr[i]);
//         // console.log("displayed element at index:", i);
//     }

}






// Function created to display comments
function displayComment(element) {
    console.log("starting displayComments");

    
        // console.log(object);
    //     let commentSectionEl = document.querySelector('.publ');
    //     // console.log(commentSectionEl);
    // commentSectionEl.textContent = '';
    // createElement(arr);
        // arr.slice().reverse().forEach((element) => {
    
            // let nameText = document.querySelectorAll('.publ__name');
            // for (let i = 0; i < nameText.length; i++) {
                
            
                let elementId = element.id;
                console.log(elementId);
    

                // create article in comment section
                // let articleEl = document.createElement('article');
                // articleEl.classList.add('publ__comment');
                // commentSectionEl.appendChild(articleEl);
            
            
                // let articleEl = document.createElement('ul');
                // articleEl.classList.add('publ__comment');
                // commentSectionEl.appendChild(articleEl);

                // creating an image block


                //         let imageblkEl = document.createElement('li');
                // imageblkEl.classList.add('publ__imageblock');
                // articleEl.appendChild(imageblkEl);

                // creating an image
                // let imgEl = document.createElement('img');
                // imgEl.classList.add('publ__img');
                // imageblkEl.appendChild(imgEl);
                // imgEl.setAttribute('src', element.image);

                // creating a text block for content
                // let contentEl = document.createElement('div');
                //         let contentEl = document.createElement('li');
                // contentEl.classList.add('publ__content');
                // articleEl.appendChild(contentEl);
        
                // creating a div for name and date
                // let nametimeEl = document.createElement('div');
                //         let nametimeEl = document.createElement('li');
                // nametimeEl.classList.add('publ__nametime');
                // contentEl.appendChild(nametimeEl);

                //creating name element
                // let nameEl = document.createElement('p');
                //         let nameEl = document.createElement('li');
                // nameEl.classList.add('publ__name');
                // nametimeEl.appendChild(nameEl);
        // if (document.querySelectorAll('.publ__name') && document.querySelectorAll('.publ__name') === "") {
        //     let nameEl = document.querySelectorAll('.publ__name');
        // } else {
        //     let nameEl = "";
        //  }
                // console.log(nameText);
        let nameText = document.getElementById(`#${elementId}`).getElementsByClassName('.publ__name');
        console.log(nameText)
                // nameEl.innerText = element.name;
                    console.log(element.name);
                nameText['innerText'] = element.name;
        
                //creating a date element
                // let dateText = document.querySelectorAll('.publ__date');
                // // // dateEl.classList.add('publ__date');
                // // //     nametimeEl.appendChild(dateEl);
                // let newDate = new Date(element.timestamp);
                // dateText[i].innerText = newDate.toLocaleDateString('en-US');
                // // console.log(typeof (comment.date));

                // // //creating comment text element
                // // // let comtextEl = document.createElement('p');
                // let comtextEl = document.querySelectorAll('.publ__text');
                // // // comtextEl.classList.add('publ__text');
                // // // contentEl.appendChild(comtextEl);
                // comtextEl[i].innerText = element.comment;
        

                // // // let likeDelIcons = document.createElement('div');
                // // //     let likeDelIcons = document.createElement('li');
                // // // likeDelIcons.classList.add('publ__likedel');
                // // // contentEl.appendChild(likeDelIcons);
            
            
                // let delIcon = document.querySelectorAll('.publ__delete');
                // // // delEl.classList.add('material-icons','publ__delete');
                // // //     likeDelIcons.appendChild(delEl);
                // delIcon[i].innerText = 'delete_outline';

            
            
                // let likeIcon = document.querySelectorAll('.publ__like');
                // // // likeEl.classList.add('material-icons', 'publ__like');
                // // likeIcon.id = object.id;
                // // // likeDelIcons.appendChild(likeEl);
                // likeIcon[i].innerText = 'favorite';

                // // let likeCount = document.createElement('p');
                // let likeTotal = document.querySelectorAll('.publ__likeCount');
                // //     likeCount.classList.add('publ__likeCount');
                // //     likeDelIcons.appendChild(likeCount);
                // likeTotal.innerText = object.likes;
                // console.log(typeof (likeTotal.innerText));
           

                // likeEl.addEventListener('click', (e) => { 
                //     console.log(event.target);
                //     let id = event.target.id;
                //     console.log(id);
                //     let completeUrl = apiURL + '/comments/' + id + '/like' + apiKey;
                //     console.log(completeUrl);
                //     axios.put(completeUrl)
                //     .then(result => {
                //         console.log(result);
                //         likeEl.style.color = '#745669';
                //         // console.log(parseInt(likeCount.innerText) += 1);
                //     }
                //     ).then(result => {
                //         getResults();
                //         likeCount.innerText = element.likes;
                //         console.log(element.likes);
                //     })
                //  });

                // let likeCount = document.querySelector('p');
                // likeCount.classList.add('publ__likeCount');
                // likeDelIcons.appendChild(likeCount);
                // likeCount.innerText = element.likes;

                // let likedCommEl = document.querySelector('.publ__like');
                // console.log(likedCommEl);
                // likedCommEl.addEventListener("click", (event) => { console.log('clicked heart'); });


            // }
            // for loop closure

        // });
    // return iterateArr;
    formEl.reset();
}
    
    
//display comment closure

// };//window onload closure
