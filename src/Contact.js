import { useState } from "react";

function Contact() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState ("");
    const [comments, setComments] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you! Your message has been submitted.");

        setFirstName("");
        setLastName("");
        setEmail("");
        setComments("");
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <h1>Contact Us</h1>

             <input
               type="text"
               placeholder="First Name"
               value={firstName}
               onChange={(e) => setFirstName(e.target.value)}
               />

               <br /><br />

               <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                />

                <br /><br />

                <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />

                <br /><br />

                <textarea
                placeholder="Comments"
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                />

                <br /><br />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Contact;