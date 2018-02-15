export function toLocaleString (date) {
    return new Date(date).toLocaleString( 'ru', {
        weekday: 'short',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    });
}
