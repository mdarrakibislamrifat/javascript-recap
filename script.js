function timer(n) {
    console.log('Start Timer');

    for (var i = 0; i <= n; i++){
        setTimeout(function() {
            console.log(i);
        }, i * 1000);
    }




    console.log('End Timer');
}

timer(3)