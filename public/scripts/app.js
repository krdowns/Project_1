console.log("Sanity Check: JS is working!");
var $restaurantList;
var allrestaurant = [];
var rootUrl = "http://localhost:3000/"
$(document).ready(function () {

    // Get all 
    $.ajax({
        method: 'GET',
        url: rootUrl + 'restaurant',
        success: handleSuccess,
        error: handleError
    });

    //Success
    function handleSuccess(json) {
        var restaurants = json
        
        restaurants.forEach(restaurant => {
            // console.log(restaurant.image);
            // return a string built using a template literal, need to add properties:
            $('#restaurant').append(`
                <div class="col s12 m3 l2 push-l1">
                    <div class="card">
                        <div class="card-image">
                            <img src=/images/${restaurant.image}>
                            <span class="card-title" style="height:60%; width: 100%;">${restaurant.name}</span>
                        </div>
                        <article class="card-content">
                            <h6>${restaurant.type}</h6>
                            <p>Rating: ${restaurant.rating}</p>
                        </article>
                        <div class="card-action">
                        <a href="${restaurant.website}">${restaurant.name}
                        </div>
                    </div>
                </div>`
            );
        });
    }

    //Error
    function handleError(e) {
        console.log('error', e);
        $('#restaurantTarget').text('Failed to load.');
    }

// });

    // ON CLICK
    $('form').on('submit', function(e) {
        e.preventDefault();
        
        let recommend = {
            name: $('#restaurant-name').val(),
            type:$('#type').val(),
            rating: $('#rating').val(),
            img: $('#image').val(),
            website: $('#website').val()
        };

        // CREATE NEW RECOMMENDATION 
        $.ajax({
            method: 'POST',
            url: rootUrl + 'restaurant',
            data: recommend,
            success: handleSuccess,
            error: handleError
        });

        //Success
        function handleSuccess(json) {
            var restaurants = json
            console.log(recommend);
            
            restaurants.forEach(recommend => {
                // console.log(restaurant.image);
                // return a string built using a template literal, need to add properties:
                $('#restaurant').append(`
                    <div class="col s12 m3 l2 push-l1">
                        <div class="card">
                            <div class="card-image">
                                <img src=${img}>
                                <span class="card-title" style="height:60%; width: 100%;">${restaurant-name}</span>
                            </div>
                            <article class="card-content">
                                <h6>${type}</h6>
                                <p>Rating: ${rating}</p>
                            </article>
                            <div class="card-action">
                            <a href="${website}">${restaurant-name}
                            </div>
                        </div>
                    </div>`
                );
            });
        }

        //Error
        function handleError(e) {
            console.log('error', e);
            $('#restaurantTarget').text('Failed to load.');
        }
    })
});