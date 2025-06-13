export const eventsCreatedByPromise = email =>{
    return fetch(`http://localhost:3000/events?email=${email}`)
    .then(res => res.json())
}