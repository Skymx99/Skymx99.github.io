import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Avatar from '../images/avatar.jpg';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{ textAlign: 'center', }}>
                            <img
                                src={Avatar}
                                alt='avatar'
                                style={{ height: '200px', borderRadius: '100%   ' }}
                            />

                        </div>
                        <h2 style={{ paddingTop: '2em', }}>Alex Lewis</h2>
                        <h4 style={{ color: 'grey', }}>Full Stack Developer</h4>
                        <hr style={{ borderTop: '3px solid #605C3C', width: '50%', }} />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam volutpat mauris
                             ac enim hendrerit, a convallis lectus sollicitudin. Morbi aliquam diam nec cursus dapibus.
                             Quisque viverra dictum nisl in tempus. Aenean sem quam, sollicitudin sed velit id, mattis
                             iaculis tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
                             Etiam eu diam tristique, tincidunt urna ut, vestibulum nulla. Duis lobortis malesuada diam ac scelerisque.
                             Nulla egestas ultricies odio nec finibus. Vivamus dignissim nibh ut faucibus malesuada. Aenean auctor
                             sapien eu sem tempus, non varius purus finibus. Praesent pellentesque risus a sapien finibus pulvinar.
                             Aliquam elementum nunc diam, ac ultrices ex ullamcorper et. Fusce ultrices diam eu nisl lobortis tincidunt.
                             Vestibulum nec nunc nec nibh commodo ultrices in non justo. Cras tincidunt ac orci ornare euismod.</p>

                        <hr style={{ borderTop: '3px solid #605C3C', width: '50%', }} />

                        <h5>Address</h5>
                        <p>1641 Patterson Rd. Smiths Grove, KY 42171</p>
                        <h5>Phone</h5>
                        <p>(270) 799-5591</p>
                        <h5>Email</h5>
                        <p>alex.lewis@gmail.com</p>
                        <h5>Web</h5>
                        <p>www.alexlewis.com</p>

                        <hr style={{ borderTop: '3px solid #605C3C', width: '50%', }} />
                    </Cell>
                    <Cell className='resume-right-col' col={8}>
                        <h2>Education</h2>

                        <Education
                            startYear={2004}
                            endYear={2010}
                            schoolName='Western Kentucky University'
                            schoolDescription='B.S. Systems Management'
                        />

                        <Education
                            startYear='Jan. 2018'
                            endYear='Mar. 2018'
                            schoolName='Covalence Coding Bootcamp'
                            schoolDescription='Full Stack Development Certification Experience building web applications, mobile apps, databases, and backend APIs'
                            />

                        <hr style={{ borderTop: '3px solid #605C3C',}} />

                        <h2>Experience</h2>

                        <Experience 
                        startYear={2016}
                        endYear={2017}
                        jobName='Associate Product Engineer (Fruit of the Loom / Russell Athletic)'
                        bullet1='Assist in development for wide range of safety equipment and appare'
                        bullet2='Utilize SolidWorks CAD software in development of new products'
                        bullet3='Maintain Database of all garments style info and decoration placements'
                        bullet4='Organize and schedule fit sessions to ensure proper fit and make changes when necessary'
                        />

                        <Experience 
                        startYear={2014}
                        endYear={2015}
                        jobName='Merchandising Systems Associate (Fruit of the Loom / Russell Athletic)'
                        bullet1='Transform production artwork into product mock-ups for Uniform Builder website for 4 design cycles'
                        bullet2='Contribute to meetings between Design, Merchandising, and Marketing Teams'
                        bullet3='Collaborate with Programming Team on a daily basis to expand Russell Athletic’s online presence'
                        bullet4='Create easy to understand technical documents to assist salespeople with the placement of custom orders'
                        bullet5='Create program-specific documents containing product information, units ordered, and deadlines for the production facility'
                        bullet6='Spearheaded the development for dynamic 3D product representations giving the salesperson and customer the ability to tailor the product to his or her desire through use of the Uniform Builder website or iPad app'
                        />

                        <Experience 
                        startYear={2008}
                        endYear={2014}
                        jobName='Lab Manager (AllStar Photography)'
                        bullet1='Responsible for inventory, product design, staff responsibilities, equipment maintenance, and training'
                        bullet2='Designed all products for 28 design cycles including, but not limited to, plaques, posters, and sublimated products'
                        bullet3='Supervised a team of event coordinators, photographers, and photographer assistants for over 500 Picture Days'
                        bullet4='Ensured a consistent and exceptional client experience through the execution of policies and procedures by all team members'
                        bullet5='Implemented QR Code scanning for an order entry system'
                        bullet6='Designed and produced laser cut and engraved products'
                        />

                        <Experience 
                        startYear='Apr. 2006'
                        endYear='Dec. 2006'
                        jobName='Associate Level Designer (THQ / Rainbow Studios)'
                        bullet1='Created 3D terrains and race tracks based on input from the design team and beta testers'
                        bullet2='Participated in brainstorming meetings, blueprints, design, beta testing, and final handoff to the environment team'
                        bullet3='Served as model motocross rider for various audio recordings'
                        bullet4='Moderated company message board to provide consumers with technical support and product information'
                        />

                        <hr style={{ borderTop: '3px solid #605C3C',}} />

                        <h2>Skills</h2>

                        <Skills 
                        skill="JavaScript"
                        progress={75}
                        />

                        <Skills 
                        skill="HTML/CSS"
                        progress={85}
                        />

                        <Skills 
                        skill="BootStrap"
                        progress={90}
                        />

                        <Skills 
                        skill="React"
                        progress={60}
                        />

                        <Skills 
                        skill="NodeJS"
                        progress={55}
                        />

                        <Skills 
                        skill="MySQL"
                        progress={70}
                        />

                        <Skills 
                        skill="Photoshop"
                        progress={100}
                        />

                        

                        

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;