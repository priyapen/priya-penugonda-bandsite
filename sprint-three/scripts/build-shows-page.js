window.onload = function () {

    // Array containing list of shows:
    // let showArray = [{
    //     Date: 'Mon Dec 17 2018',
    //     Venue: 'Ronald Lane',
    //     Location: 'San Francisco, CA',
    //     button: 'link to button',
    // }, {
    //     Date: 'Tue Jul 18 2019',
    //     Venue: 'Pier 3 East',
    //     Location: 'San Francisco, CA',
    //     button: 'link to button',
    // },
    // {
    //     Date: 'Fri Jul 22 2019',
    //     Venue: 'View Loungue',
    //     Location: 'San Francisco, CA',
    //     button: 'link to button',
    // },
    // {
    //     Date: 'Sat Aug 12 2019',
    //     Venue: 'Hyatt Agency',
    //     Location: 'San Francisco, CA',
    //     button: 'link to button',
    // },
    // {
    //     Date: 'Fri Sep 05 2019',
    //     Venue: 'Moscow Center',
    //     Location: 'San Francisco, CA',
    //     button: 'link to button',
    // },
    // {
    //     Date: 'Wed Aug 11 2019',
    //     Venue: 'Pres Club',
    //     Location: 'San Francisco, CA',
    //     button: 'link to button',
    // },
    // ]

    function getResults() {
        axios
            .get(`https://project-1-api.herokuapp.com/showdates?api_key=2b9b5a96-ed1d-40a8-9268-fea0e31c8936`)
            .then((result => {
                console.log(result);
                createShowList(result.data);
            })
        );
    }
    
    getResults();

    const showDetails = document.querySelector('.show__details');

    // the following function creates a list of shows as they are entered in the array variable above.
    function createShowList(arr) {

        for (let i = 0; i <= arr.length - 1; i++) {
    
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
            dateEl.innerText = arr[i].date;

            // Venue Label
            const venueLabel = document.createElement('dt');
            venueLabel.classList.add('shows__venuelabel');
            showDefn.appendChild(venueLabel);
            venueLabel.innerText = 'Venue';

            //show venue element
            const venueEl = document.createElement('dd');
            venueEl.classList.add('shows__venue');
            showDefn.appendChild(venueEl);
            venueEl.innerText = arr[i].place;

            // location Label
            const locationLabel = document.createElement('dt');
            locationLabel.classList.add('shows__locationlabel');
            showDefn.appendChild(locationLabel);
            locationLabel.innerText = 'Location';
    
            //show location element
            const locationEl = document.createElement('dd');
            locationEl.classList.add('shows__location');
            showDefn.appendChild(locationEl);
            locationEl.innerText = arr[i].location;

            //show button element
            const buttonEl = document.createElement('button');
            buttonEl.classList.add('shows__button');

            // showDefn.appendChild(buttonEl);
            showCard.appendChild(buttonEl);
            buttonEl.innerText = 'Buy Tickets';
            buttonEl.setAttribute('https', arr[i].button);
        }
    }

    createShowList();

}