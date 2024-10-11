(function ($) {



    //skeleton loader
    $(window).on("load", function(){
        setTimeout(function(){
            $(".loading").addClass("off");
            setTimeout(function(){
                $(".loading").addClass("hide_element");
            }, 1000); 
        
        }, 1500);
    });

    // slider component
    $(".lv_auto_slider").slick({
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 700,
        arrows: false,
        fade: true,
    });

    //hub countdown timer
    $(".countdown").each(function () {
        var $data_date = $(this).data('date');
        $(this).countdown({
          date: $data_date
        });
    });




   
    // Image Lazy Load 
    document.addEventListener("DOMContentLoaded", function () {
        let lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

        if ("IntersectionObserver" in window) {
            let lazyImageObserver = new IntersectionObserver(function (entries, observer) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        let lazyImage = entry.target;
                        lazyImage.src = lazyImage.dataset.src;
                        lazyImage.classList.remove("lazy");
                        lazyImageObserver.unobserve(lazyImage);
                    }
                });
            });

            lazyImages.forEach(function (lazyImage) {
                lazyImageObserver.observe(lazyImage);
            });
        }
    });



    //stopwatch functionality
    document.querySelectorAll('.stopwElement').forEach(function (element) {
        const fontSize = element.getAttribute('data-progress');
        element.style.setProperty('--lapTime', fontSize);
    });


    //stopwatch timer
    
    // Set the starting time (10 minutes in milliseconds)
    let time = 10 * 60 * 1000;

    // Function to update the countdown display
    function updateCountdown() {
        const countdownElement = document.querySelector('.hub_countdown');
        const minutesElement = countdownElement.querySelector('.minutes');
        const secondsElement = countdownElement.querySelector('.seconds');
        
        // Calculate minutes and seconds
        let minutes = Math.floor(time / (1000 * 60));
        let seconds = Math.floor((time % (1000 * 60)) / 1000);

        // Display the minutes and seconds, pad with zero if needed
        minutesElement.textContent = minutes.toString().padStart(2, '0');
        secondsElement.textContent = seconds.toString().padStart(2, '0');
        
        // Decrease the time
        time -= 1000;
        
        // Stop the countdown when time reaches 0
        if (time < 0) {
            clearInterval(countdownInterval);
            minutesElement.textContent = "00";
            secondsElement.textContent = "00";
        }
    }

    // Update countdown every second
    const countdownInterval = setInterval(updateCountdown, 1000);


    $('.hbfonts-light-bulb, .hb_close').on('click', function() {
        $(this).addClass('focused');
    });

    $(document).on('click', function(event) {
        if (!$(event.target).closest('.hbfonts-light-bulb').length) {
            $('.hbfonts-light-bulb').removeClass('focused');
        }
    });

    $(document).on('click', function(event) {
        if (!$(event.target).closest('.hb_close').length) {
            $('.hb_close').removeClass('focused');
        }
    });
    

    





})(jQuery)