import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import Avatar from '../images/avatar.jpg';

class Contact extends Component {
    render() {
        return (
            <div className='contact-body'>
                <Grid className='contact-grid'>
                    <Cell col={6}>
                        <h2>Alex Lewis</h2>
                        <img
                            src={Avatar}
                            alt='avatar'
                            style={{ height: '250px', borderRadius: '25px' }}
                        />
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em', }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt ornare massa, id vestibulum mi hendrerit ac.
                            In sagittis ligula justo. Cras nec pellentesque neque. Sed laoreet orci a nibh pellentesque tristique. Sed semper mi vitae interdum dignissim.
                            Phasellus vitae mi nec velit auctor facilisis. Nulla feugiat sagittis aliquet. Aenean cursus id augue rhoncus malesuada. Ut et odio et ipsum sollicitudin gravida.
                            Proin consectetur tristique elit ut gravida. Ut eu rhoncus mauris. Vestibulum posuere dolor a sagittis dignissim. Fusce blandit auctor orci, luctus luctus massa feugiat quis.
                            Proin tincidunt iaculis tortor, eu aliquam magna scelerisque quis. Morbi convallis magna non sem mattis, vel vehicula mi sollicitudin.</p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr />
                        <div className='contact-list'>
                        <List>
                            <ListItem>
                                <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton',}}>
                                    <i className='fa fa-phone-square' aria-hidden='true'/>
                                    (270) 799-5591
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton',}}>
                                    <i className='fa fa-envelope' aria-hidden='true'/>
                                    alex.lewis@gmail.com
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton',}}>
                                    <i className='fa fa-skype' aria-hidden='true'/>
                                    Skymx99
                                </ListItemContent>
                            </ListItem>
                        </List>
                        </div>
                    </Cell>
                </Grid>;
            </div>
        )
    };
}

export default Contact;;