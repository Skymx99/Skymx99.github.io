import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Avatar from '../images/avatar.jpg';

class LandingPage extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                    <img 
                    src={Avatar}
                    alt='avatar'
                    className='avatar-img'
                    />
                    <div className='banner-text'>
                        <h1>Full Stack Web Developer</h1>
                        <hr/>
                        <p>HTML/CSS | Bootstrap | JavaScript | React | React-Native | NodeJS | Express | My SQL</p>
                        <h1>Video Game Developer</h1>
                        <hr/>
                        <p>Unity | Blender | Substance Painter / Designer | Photoshop</p>
                        <div className='social-links'>
                        
                        {/* LinkedIn */}
                        <a href='http://google.com' rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-linkedin-square" aria-hidden="true" />
                        </a>

                           {/* GitHub */}
                           <a href='http://google.com' rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-github-square" aria-hidden="true" />
                        </a>

                           {/* Facebook */}
                           <a href='http://google.com' rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-facebook-square" aria-hidden="true" />
                        </a>

                           {/* FreeCODECamp */}
                           <a href='http://google.com' rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-free-code-camp" aria-hidden="true" />
                        </a>


                        </div>
                    </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default LandingPage;