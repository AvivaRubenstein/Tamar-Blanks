import React from 'react';
const photo = require('../../Assets/Tamar_headshot.jpg');
const styles = {
    photo : {
        width: '25vw'
    }
}
export default function Home() {
    return (
        <div>
        <p>I am a mathematics PhD candidate and NSF Graduate Research Fellow at Rutgers University. My research is in algebra: I am interested in quadratic forms, fields, division algebras, and Lie algebras. My advisor is Danny Krashen.
        <p>Here's a video of me talking about <a href="https://youtu.be/4AU8raNO7jE">cool generalizations of Schur's lemma.</a></p>
        

I was a 2021 AMS-AAAS Mass Media Fellow at The Conversation US. For more on that, see Outreach.

My email address is tl548 at math.rutgers.edu.</p>
        <img src={photo} alt="photo" style={styles.photo}></img>
        </div>
    )
}