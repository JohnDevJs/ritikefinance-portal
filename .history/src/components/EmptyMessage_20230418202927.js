import React from 'react'

function EmptyMessage() {
    return (
        <div className="container__zero__lenght">
            <p className="message__display">Oops, looks like there's no data to display!</p>
            <p className="message__display__small">Don't worry, though. You can try again later or check back with us soon.</p>
        </div>
    )
}

export default EmptyMessage