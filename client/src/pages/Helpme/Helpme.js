import React from 'react'
import "./helpme.css"

function Helpme() {
    return (
        
            <div class="container">
            <form >

                {/* <%if(msg){%>
                    <div class="alert alert-warning alert-dismissible fade show" role="alert">
                        <%=msg%>
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            <%=console.log(msg)%>
                    </div>
                    <%}%> */}
                        <label for="fname">First Name</label>
                        <input type="text" id="fname" name="fname" placeholder="Your name.." />

                        <label for="lname">Last Name</label>
                        <input type="text" id="lname" name="lname" placeholder="Your last name.." />

                        <label for="lname">Phone Number</label>
                        <input pattern="[7-9]{1}[0-9]{9}" type="text" id="phoneno" name="phoneno"
                            placeholder="Your Phone Number.." />

                        <label for="country">Country</label>
                        <input type="text" id="country" name="country" placeholder="Your County.." />

                        <label for="subject">Feedback</label>
                        <textarea id="subject" name="feedback" placeholder="Write something.."
                            style={{height:"200px"}}></textarea>

                        <input type="submit" value="Submit" />

            </form>
        </div>
        
    ) 
}

export default Helpme
