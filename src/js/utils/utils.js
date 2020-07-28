const dayInMiliseconds = 1000 * 60 * 60 * 24;

export function getDateAsFormattedString(dateAsString, separator) {
    if (validDate(dateAsString)) {
        const newDate = new Date(dateAsString);
        const year = new Intl.DateTimeFormat('en', {year: 'numeric'}).format(newDate);
        const month = new Intl.DateTimeFormat('en', {month: '2-digit'}).format(newDate);
        const day = new Intl.DateTimeFormat('en', {day: '2-digit'}).format(newDate);
        return `${year}${separator}${month}${separator}${day}`;
    }
}

export function dateAsString(dateString) {
    const today = new Date();
    let previousDate;
    if (validDate(dateString)) {
        previousDate = new Date(dateString);
        const diff = today.getTime() - previousDate.getTime();
        if (diff > 3 * dayInMiliseconds) {
            return (Math.round(diff/dayInMiliseconds) + ' days ago');

        } else {
            return getDateAsFormattedString(dateString, '-');
        }
    }
}

export function validDate(dateAsString) {
    return (dateAsString && !Number.isNaN(Date.parse(dateAsString)));
}

export function currentPositionFromGeolocation() {
    return new Promise((resolve, reject) => {
        if (navigator || navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const obj = {
                    lat: position.coords.latitude,
                    long: position.coords.longitude,
                };
                resolve(obj);
            }, (error) => {
                reject(error);
            });
        } else {
            reject(new Error('Navigator.geolocation does not exist'));
        }
    });
}

