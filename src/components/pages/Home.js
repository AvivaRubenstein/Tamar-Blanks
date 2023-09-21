import React from 'react';
import {Link} from 'react-router-dom';
const photo = require('../../Assets/Tamar_headshot.jpg');
const styles = {
    photo : {
        width: '25vw'
    }
}
export default function Home() {
    return (
<div className='container-fluid'>
<p>I am a mathematics PhD candidate and NSF Graduate Research Fellow at Rutgers University. My research is in algebra: I am interested in quadratic forms, fields, division algebras, and Lie algebras. 
My advisor is Danny Krashen. 
</p>
<p>Here's a video of me talking about 
<a href="https://youtu.be/4AU8raNO7jE"> cool generalizations of Schur's lemma.</a>
</p>     
<p>
I was a 2021  
<a href="https://www.aaas.org/programs/mass-media-fellowship/tamar-lichter-blanks"> AMS-AAAS Mass Media Fellow </a>
at <a href="https://theconversation.com/us"> The Conversation US</a>
. For more on that, see <Link className="navLink navbar-item" to='/Outreach'> Outreach. </Link>
</p>
<p>
My email address is tl548 at math.rutgers.edu.
</p>
        <img className="img-responsive" src={photo} alt="tamar-photo" style={styles.photo}></img>
        </div>
    )
}