import React, { Component, PropTypes } from 'react';


const Form = () => (
    <div>
        <form action="https://kitsch-scents.us16.list-manage.com/subscribe/post" method="POST">
            <input type="hidden" name="u" value="065cd8f9c86b909964d163de1"/>
            <input type="hidden" name="id" value="4567245c2d"/>

            <div className="avenir measure mb4">
                <label htmlFor="name" className="f6 db mb2">Email<span className="normal kitsch-brown"></span></label>
                <input id="name" name="MERGE0" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc"/>
                <small id="name-desc" className="i f6 black-60 db mb2">Nu iti trimited decat un singur mail, atunci cand suntem gata sa lansam.</small>
            </div>

            <input type="submit" className="ph4 pv3 input-reset ba b--white bg-darken-kitsch-brown white pointer f5 avenir" name="submit" value="Anunta-ma cand e gata" />
            
        </form>
    </div>   
)

export default Form

