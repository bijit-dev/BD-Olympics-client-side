export const eventsCreatedByPromise = email =>{
    return fetch(`${import.meta.env.VITE_API_URL}/events?email=${email}`)
    .then(res => res.json())
}