export const eventsCreatedByPromise = (email, accessToken)=>{
    return fetch(`${import.meta.env.VITE_API_URL}/manage-events?email=${email}`,{
        headers: {
            authorization: `Bearer ${accessToken}`
        }
    })
    .then(res => res.json())
}