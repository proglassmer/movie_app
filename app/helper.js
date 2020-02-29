
export const formatTime = (timeCreated) => {
  var periods = {
    month: 30 * 24 * 60 * 60 * 1000,
    week: 7 * 24 * 60 * 60 * 1000,
    day: 24 * 60 * 60 * 1000,
    hour: 60 * 60 * 1000,
    minute: 60 * 1000
  };
  var diff = Date.now() - timeCreated;
  if (diff > periods.month) {
    return formatDate(timeCreated)
  } else if (diff > periods.week) {
    return Math.floor(diff / periods.week) + "Weeks ago";
  } else if (diff > periods.day) {
    return Math.floor(diff / periods.day) + "Days ago";
  } else if (diff > periods.hour) {
    return Math.floor(diff / periods.hour) + "Hours ago";
  } else if (diff > periods.minute) {
    return Math.floor(diff / periods.minute) + "Minutes ago";
  }
  return "Just now";
}

export const formatDate = (timeCreated) => {
  var result = timeCreated.toLocaleDateString("en-GB", { // you can skip the first argument
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  return result;
}

export const priceFormat = (price) => {
  return price.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}
