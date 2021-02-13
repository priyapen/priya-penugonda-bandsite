let showObject = {
    Date: 'Mon Dec 17 2018',
    Venue: 'Ronald Lane',
    Location: 'San Francisco, CA',
    button: 'link to button',
}

let showArray = [{
    Date: 'Mon Dec 17 2018',
    Venue: 'Ronald Lane',
    Location: 'San Francisco, CA',
    button: 'link to button',
}, {
    Date: 'Tue Jul 18 2019',
    Venue: 'Pier 3 East',
    Location: 'San Francisco, CA',
    button: 'link to button',
    }, {
        Date: 'Tue Jul 18 2019',
        Venue: 'Pier 3 East',
        Location: 'San Francisco, CA',
        button: 'link to button',
        }]

const showDetails = document.querySelector('.show__details');

    for (let i = 0; i <= showArray.length - 1; i++) {
        // const event = showEvent(showArray[i]);
        // showSection.appendChild(event);
        // // return showEvent

        const showCard = document.createElement('article');
        // console.log(showCard);
        showCard.classList.add('shows__card');
        showDetails.appendChild(showCard);

        // list of shows
        const showDefn = document.createElement('dl');
        showDefn.classList.add('shows__defn');
        showCard.appendChild(showDefn);

        
            // Date Label
            const dateLabel = document.createElement('dt');
            dateLabel.classList.add('shows__datelabel');
            showDefn.appendChild(dateLabel);
        dateLabel.innerText = 'Date';
        


        // //show date element
        const dateEl = document.createElement('dd');
        dateEl.classList.add('shows__date');
        showDefn.appendChild(dateEl);
        dateEl.innerText = showArray[i].Date;

        // Venue Label
        const venueLabel = document.createElement('dt');
        venueLabel.classList.add('shows__venuelabel');
        showDefn.appendChild(venueLabel);
        venueLabel.innerText = 'Venue';

        //show venue element
        const venueEl = document.createElement('dd');
        venueEl.classList.add('shows__venue');
        showDefn.appendChild(venueEl);
        venueEl.innerText = showArray[i].Venue;
    

        // location Label
        const locationLabel = document.createElement('dt');
        locationLabel.classList.add('shows__locationlabel');
        showDefn.appendChild(locationLabel);
        locationLabel.innerText = 'Location';
    

        //show location element
        const locationEl = document.createElement('dd');
        locationEl.classList.add('shows__location');
        showDefn.appendChild(locationEl);
        locationEl.innerText = showArray[i].Location;

        //show button element
        const buttonEl = document.createElement('button');
        buttonEl.classList.add('shows__button');
        // showDefn.appendChild(buttonEl);
        showCard.appendChild(buttonEl);
        buttonEl.innerText = 'Buy Tickets';
        buttonEl.setAttribute('https', showArray[i].button);

        // horizontal line
        // if (i < showArray.length - 1) {
        //     const lineEl = document.createElement('hr');
        //     lineEl.classList.add("shows__line");
        //     showCard.appendChild(lineEl);
        // }
    }
// }

// function showEvent(showArray) {
//     //article element
//     const showCard = document.createElement('article');
//     // console.log(showCard);
//     showCard.classList.add('shows__card');
//     showSection.appendChild(showCard);

//     //show date element
//     showCard.createElement('p');
//     cont dateEl = showCard.classList.add('shows__date');
//     showCard.appendChild(dateEl);
    
// }

