import { useState } from "react";

function Contact() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState ("");
    const [comments, setComments] = useState("");
    
    return (
        <div>
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

                <button>Submit</button>
        </div>
    );
}

export default Contact;