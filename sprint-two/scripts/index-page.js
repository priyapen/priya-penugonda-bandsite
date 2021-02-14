// let todate = new Date().toLocaleString('en-US');
// function scriptrun(){


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

const commentArr = [
    {
        image: '',
        name: 'Micahel Lyons',
        commentText: 'They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.',
        date: '12/18/2018',
    },
    {
        image: '',
        name: 'Gary Wong',
        commentText: 'Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!',
        date: '12/12/2018',
    },
    {
        image: '../assets/images/something.jpg',
        name: 'Theodore Duncan',
        commentText: 'How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He\'s definitely my favorite ever!',
        date: '11/15/2018',
    },
] 

let formEl = document.querySelector('.comment__form');
formEl.addEventListener('submit', (event)=>{
    // event.preventDefault();
    // event.stopPropagation();
    event.preventDefault();
    console.log("default behaviour prevented");
    pushcomment();
    formEl.reset();
});

displayComment(commentArr);

function pushcomment() {
    let dateReg = new Date().toLocaleDateString('en-US');
    let userimg = document.querySelector('.comment__img');
    console.log(userimg);
    console.log(userimg.src);
    
    commentArr.unshift(
        {
            img: './assets/images/Mohan-muruge.jpg',
            name: event.target.fname.value, commentText: event.target.comment.value, 
            date: dateReg,
            });
    
    console.log(commentArr[0].date);
    displayComment(commentArr);
}

pushcomment();
// create element function  here;

function displayComment(arr)
{
    let commentSectionEl = document.querySelector('.publ');
    commentSectionEl.textContent = '';

    arr.forEach(element => {

        arr.sort((x,y) => {
            let a = new Date(x.date);
            let b = new Date(y.date);
            return b - a;
        })
        
    // create article in comment section
    let articleEl = document.createElement('article');
    articleEl.classList.add('publ__comment');
    commentSectionEl.appendChild(articleEl);

    // creating an image block
    let imageblkEl = document.createElement('div');
    imageblkEl.classList.add('publ__imageblock');
    articleEl.appendChild(imageblkEl);

    //creating an image
    let imgEl = document.createElement('img');
    imgEl.classList.add('publ__img');
    imageblkEl.appendChild(imgEl);
    imgEl.setAttribute('src', element.img);

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
    dateEl.innerText = element.date;
    // console.log(typeof(comment.date));

    //creating comment text element
    let comtextEl = document.createElement('p');
    comtextEl.classList.add('publ__text');
    contentEl.appendChild(comtextEl);
    comtextEl.innerText = element.commentText;
    // commentArr.shift(comment);
        console.log(commentArr);
        
    });
}

// };//window onload closure