    function create12HourTimer(elementId, startHour, startMinute) {
      let hours = startHour;
      let minutes = startMinute;

      function padMinutes(min) {
        return min.toString().padStart(2, '0');
      }

      function updateTimer() {
        minutes++;
        if (minutes >= 60) { // if min uequal or greater than 60 that reset min to 0 and put 1 extra hour
          minutes = 0;
          hours++;
        }
        if (hours > 12) { // if hour greater than 12 reset the hour to 1
          hours = 1;
        }

        document.getElementById(elementId).textContent = `${hours}:${padMinutes(minutes)}`; 
        // if hour 1:1 it will pad basicacly adding a zero like 1:01 and it will keep the hour as it is
      }

      // Show the starting time
      document.getElementById(elementId).textContent = `${hours}:${padMinutes(minutes)}`;
      // this updates / shows the starting number 

      // Start the timer (every minute = 60000 ms, for demo use 1000 ms)
      setInterval(updateTimer, 2000); // every 2,000 ms = 2 second
    }

    // Create two independent timers
    create12HourTimer("timer1", 12, 59);
    create12HourTimer("timer2", 12, 59);