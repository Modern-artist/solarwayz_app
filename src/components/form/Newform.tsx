import React from 'react'
import "./newform.scss"
const newform = () => {
    return (
        <>
            <div className='newform'>

                <div className='intakeForm'>
                    <h2>Design Intake Form</h2>
                    <form action="">
                        <div className="inp">
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" />
                        </div>
                        <div className="inp">
                            <label htmlFor="email">Email Address:</label>
                            <input type="email" id="email" name="email"></input>
                        </div>
                        <div className="inp">
                            <label htmlFor="phone-number">Phone Number:</label>
                            <input type="tel" id="phone-number" ></input>
                        </div>
                        <div className="inp">
                            <p>Please select your favorite Web language:</p>
                            <div>
                                <input type="radio" id="html" name="fav_language" value="HTML" />
                                <label htmlFor="html">HTML</label></div>
                            <div>
                                <input type="radio" id="css" name="fav_language" value="CSS" />
                                <label htmlFor="css">CSS</label></div>
                            <div>
                                <input type="radio" id="javascript" name="fav_language" value="JavaScript" />
                                <label htmlFor="javascript">JavaScript</label>
                            </div>

                        </div>
                        <div className="inp">
                            <p>Please select your favorite Web language:</p>
                            <div>
                                <input type="radio" id="html" name="fav_language" value="HTML" />
                                <label htmlFor="html">HTML</label></div>
                            <div>
                                <input type="radio" id="css" name="fav_language" value="CSS" />
                                <label htmlFor="css">CSS</label></div>
                            <div>
                                <input type="radio" id="javascript" name="fav_language" value="JavaScript" />
                                <label htmlFor="javascript">JavaScript</label>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default newform