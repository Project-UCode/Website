import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
    const [state, handleSubmit] = useForm("xqazqwgo");
    if (state.succeeded) {
        return <p>Thanks for your response! We will try to get back as soon as we can.</p>;
    }
    return (
        <form onSubmit={handleSubmit} className='contact_form'>
            <div className='full_form'>
                <div className='text-left'>
                    <label htmlFor="name" className='text-white cont-section'>
                        Full Name
                    </label>
                    <input
                        id="name"
                        type="name"
                        name="name"
                        className='w-full'
                    />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                </div>
                <div className='text-left'>
                    <label htmlFor="email" className='text-white'>
                        Email Address
                    </label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        className='w-full'
                    />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                </div>
            </div>
            <div className='text-left message_txt'>
            <label htmlFor="message" className='text-white cont-section'>
                Message
            </label>
            <textarea
                id="message"
                name="message"
                className='w-full message_box'
            />
            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
            />
            </div>
            <button type="submit" disabled={state.submitting} className='submit-button'>
                <span>Submit</span>
            </button>
        </form>
    );
}

function App() {
    return (
        <ContactForm />
    );
}

export default App;