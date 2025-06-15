import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";

const UpdateEvent = () => {   
    const initialEvents = useLoaderData();
    const Navigate = useNavigate();

    const { _id, eventName, eventType, location, eventDate, imageURL, description, creatorEmail, creatorName } = initialEvents;
    const handleUpdateEvent = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const newEvent = Object.fromEntries(formData.entries())

        // send updated event to the db
        fetch(`${import.meta.env.VITE_API_URL}/Event/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newEvent)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Navigate("/manageEvents");
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Event updated successfully.",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })

    }
    return (
        <div className=' container mx-auto text-center px-5 my-14'>
            <h1 className='text-3xl mb-12 font-bold text-cyan-600'>Update Event Info</h1>
            

            <form onSubmit={handleUpdateEvent} className="bg-base-200 border-base-300 rounded-box border p-8 shadow-2xl">
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">

                    {/* Event Name */}
                    <fieldset className="fieldset bg-base-200 rounded-box p-4 text-xl">
                        <label
                            className="label font-medium text-ascent"
                        >Event Name :</label>
                        <input type="text" defaultValue={eventName} name='eventName' placeholder="Event Name" className="input w-full" required />
                    </fieldset>

                    {/* Event Type */}
                    <fieldset className="fieldset bg-base-200 rounded-box p-4 text-xl">
                        <label className="label font-medium text-ascent" >Event Type :</label>
                        <select className="select w-full" name="eventType" defaultValue={eventType} required>
                            <option >Swimming</option>
                            <option >Sprinting</option>
                            <option >Long Jump</option>
                            <option >High Jump</option>
                            <option >Hurdle race</option>
                            <option >100 meter runing</option>
                            <option >200 meter runing</option>
                            <option >400 meter runing</option>
                            <option >1600 meter runing</option>
                            <option >Badminton</option>
                            <option >Marathon</option>
                            <option >Chess</option>
                            <option >Football</option>
                            <option >Cricket</option>
                            <option >Wrestling</option>
                            <option >Basketball</option>
                            <option >Karate</option>
                            <option >etc</option>
                        </select>
                    </fieldset>

                    {/* Event Location */}
                    <fieldset className="fieldset bg-base-200 rounded-box p-4 text-xl">
                        <label
                            className="label font-medium text-ascent"
                        >Location :</label>
                        <input type="text" name='location' defaultValue={location} placeholder="Event Name" className="input w-full" required />
                    </fieldset>

                    {/* Event Date */}
                    <fieldset className="fieldset bg-base-200 rounded-box p-4 text-xl">
                        <label className="label font-medium text-ascent">Event Date :</label>
                        <input type="date" name='eventDate' defaultValue={eventDate} placeholder="Event Date" className="input w-full" required />
                    </fieldset>

                    {/* A Picture for the Event */}
                    <fieldset className="fieldset bg-base-200 rounded-box p-4 text-xl">
                        <label className="label font-medium text-ascent">A Picture for the Event :</label>
                        <input type="url" name='imageURL' defaultValue={imageURL} placeholder="Image URL" className="input w-full" required />
                    </fieldset>

                    {/* Creator Email */}
                    <fieldset className="fieldset bg-base-200 rounded-box p-4 text-xl">
                        <label className="label font-medium text-ascent">Creator Email :</label>
                        <input type="text" name='creatorEmail' className="input w-full" defaultValue={creatorEmail} readOnly />
                    </fieldset>

                    {/* Creator Name */}
                    <fieldset className="fieldset bg-base-200 rounded-box p-4 text-xl">
                        <label className="label font-medium text-ascent">Creator Name :</label>
                        <input type="text" name='creatorName' className="input w-full" defaultValue={creatorName} readOnly />
                    </fieldset>
                </div>

                {/* Description */}
                <fieldset className=" fieldset bg-base-200 rounded-box p-4 text-xl">
                    <label className="label">Description :</label>
                    <textarea className="textarea h-24 mb-3 w-full" placeholder="Description" name="description" defaultValue={description} required></textarea>
                </fieldset>

                <input type="submit" defaultValue="Create Event" className="btn btn-accent text-white" />
            </form>
        </div>
    );
};

export default UpdateEvent;
