const Contact =()=>{
    return(
        <div>
            <h1>CONTACT US</h1>
            <form>
                <label >Name:</label>
                <input type="text" id="name" name="name" required/>
                <br/>
                <label >Email:</label>
                <input type="email" id="email" name="email" required/>
                <br/>
                <label >Phone:</label>
                <input type="tel" id="phone" name="phone" required/>
                <br/>
                <label >Message:</label>
                <textarea id="message" name="message" required/>
                <br/>
                <button type="submit">Submit</button>
    
            </form>
        </div>
    )
}
export default Contact;