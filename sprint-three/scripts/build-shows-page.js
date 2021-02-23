window.onload = function () {
    getResults();
}

    function getResults() {
        axios
            .get(`https://project-1-api.herokuapp.com/showdates?api_key=2b9b5a96-ed1d-40a8-9268-fea0e31c8936`)
            .then((result => {
                console.log(result);
                createShowList(result.data);
            })
        );
    }
    
    
    const showDetails = document.querySelector('.show__details');

    // the following function creates a list of shows as they are entered in the array variable above.
    function createShowList(arr) {

        for (let i = 0; i <= arr.length - 1; i++) {
    
            const showCard = document.createElement('ul');
            showCard.classList.add('shows__card');
            showDetails.appendChild(showCard);

            // list of shows
            const showDefn = document.createElement('li');
            showDefn.classList.add('shows__defn');
            showCard.appendChild(showDefn);
        
            // Date Label
            const dateLabel = document.createElement('li');
            dateLabel.classList.add('shows__datelabel');
            showDefn.appendChild(dateLabel);
            dateLabel.innerText = 'Date';
        
            // //show date element
            const dateEl = document.createElement('li');
            dateEl.classList.add('shows__date');
            showDefn.appendChild(dateEl);
            dateEl.innerText = arr[i].date;

            // Venue Label
            const venueLabel = document.createElement('li');
            venueLabel.classList.add('shows__venuelabel');
            showDefn.appendChild(venueLabel);
            venueLabel.innerText = 'Venue';

            //show venue element
            const venueEl = document.createElement('li');
            venueEl.classList.add('shows__venue');
            showDefn.appendChild(venueEl);
            venueEl.innerText = arr[i].place;

            // location Label
            const locationLabel = document.createElement('li');
            locationLabel.classList.add('shows__locationlabel');
            showDefn.appendChild(locationLabel);
            locationLabel.innerText = 'Location';
    
            //show location element
            const locationEl = document.createElement('li');
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
