import React, { Component, PropTypes } from 'react';


const Form = () => (
    <div>
        <form action="https://kitsch-scents.us16.list-manage.com/subscribe/post" method="POST">
            <input type="hidden" name="u" value="065cd8f9c86b909964d163de1"/>
            <input type="hidden" name="id" value="4567245c2d"/>

            <div className="avenir measure mb4">
                <p className="f5 db mb4">Mai avem niste detalii de pus la punct si te vom anunța când suntem gata.</p>
                <label htmlFor="name" className="f5 db b mb2">Email<span className="normal kitsch-brown"></span></label>
                <input id="name" name="MERGE0" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc"/>
            </div>

            <input type="submit" className="ph4 pv3 input-reset ba b--white bg-darken-kitsch-brown white pointer f5 avenir" name="submit" value="Anunță-mă" />
            
        </form>
    </div>   
)

export default Form

