import React from 'react';
import { toast } from 'react-toastify';

const Contact = () => {
    const handleContact=event=>{
        event.preventDefault()
        const email=event.target.email.value;
        const subject=event.target.subject.value;
        const message=event.target.message.value;
       const userMessage={email,subject,message};
       fetch('https://afternoon-hamlet-34240.herokuapp.com/contact',{
        method:"POST",
        headers:{
'content-type':'application/json'
        },
        body:JSON.stringify(userMessage)
       }).then(res=>res.json()).then(data=>{
        if(data.insertedId){
toast.success('Message send');

        }
        else{
            toast.error("message didn't send" )
        }
       })

    }
    return (
        <div>
        <div  className="contact-container bg-slate-400">
            <div   className="contact mx-auto py-16  w-full max-w-sm">
               <div className="contact-headings text-center mb-10 ">
               <h3 className="text-xl font-bold pb-3">Contact Us</h3>
               </div>
                <form onSubmit={handleContact} className='flex flex-col'>
                <input required type="text"className="input" name="email" id=""placeholder="Email address" />
                <input required className='input my-4' type="text" name="subject" id=""placeholder="Subject" />
                <textarea className='input' placeholder="Your message" name="message" id=""></textarea>
                <div className="form-control mt-6">
              <input type="submit" className="btn btn-secondary w-1/3 mx-auto mb-16" value="Send" />
              </div>
                </form>
            </div>
        </div>
    </div>
    );
};

export default Contact;