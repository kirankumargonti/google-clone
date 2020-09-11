import React from 'react';
import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <div className="not-found">
            <Link  to="/">
                <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt=""/>
            </Link>
            <h4>404. That’s an error.</h4>
            <p>
            The requested URL  was not found on this server. <br/> That’s all we know.
            </p>
        </div>
    )
}

export default NotFound
