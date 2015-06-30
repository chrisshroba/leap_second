/**
 * Created by chrisshroba on 6/30/15.
 */

leap_second = new Date(Date.UTC(2015,5,30,23,59,60,0));

function now() {
    return new Date();
}

function timeDifference(first, second) {
    var t1 = first.getTime();
    var t2 = second.getTime();
    var d = t2 - t1;
    var millis = d % 1000;
    d -= millis;
    d /= 1000;
    var seconds = d % 60;
    d -= seconds;
    d /= 60;
    var minutes = d % 60;
    d -= minutes;
    d /= 60;
    var hours = d % 24;
    return {
        hours: hours,
        minutes: minutes,
        seconds: seconds,
        millis: millis
    }
}