const showTime = (timestamp) => {
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let now = new Date(timestamp);

    let weekDay = days[now.getDay()];
    let hour = now.getHours();
    if (hour < 10) {
      hour = `0${hour}`;
    }
    let minute = now.getMinutes();
    if (minute < 10) {
      minute = `0${minute}`;
    }

    return `${weekDay} ${hour}:${minute}`;
  };