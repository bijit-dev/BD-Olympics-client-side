import { MdAddCall, MdLocationOn, MdMailOutline } from 'react-icons/md';

const Contact = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("send Message");

    }
    return (
        <section className="bg-gray-100 py-12 px-6 md:px-20">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">

                {/* Contact Info */}
                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Get in Touch</h2>
                    <p className="text-gray-600 mb-6">
                        Have questions or want to work with us? Feel free to reach out using the form or contact details below.
                    </p>
                    <div className="space-y-4 text-gray-700">
                        <div className="flex items-center space-x-3">
                            <span className="text-blue-600 text-xl"><MdLocationOn /></span>
                            <span>123 Main Street, Dhaka, Bangladesh</span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <span className="text-blue-600 text-xl"><MdMailOutline /></span>
                            <span>contact@eventexplorer.com</span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <span className="text-blue-600 text-xl"><MdAddCall /></span>
                            <span>+880 123 456 789</span>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <form className="bg-white shadow-lg rounded-lg p-6 space-y-4">
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Name</label>
                        <input
                            type="text"
                            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Your name"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Email</label>
                        <input
                            type="email"
                            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Your email"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Message</label>
                        <textarea
                            rows="4"
                            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Write your message..."
                            required
                        />
                    </div>
                    <button
                        onClick={handleSubmit}
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                    >
                        Send Message
                    </button>
                </form>

            </div>
        </section>
    );
};

export default Contact;