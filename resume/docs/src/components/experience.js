import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Experience extends Component {
    render() {
        return(
           <Grid>
               <Cell col={4}>
                <p>{this.props.startYear} - {this.props.endYear}</p>
               </Cell>
               <Cell col={8}>
               <h4 style={{marginTop: '0px'}}>{this.props.jobName}</h4>
               <ul>
                   <li>{this.props.bullet1}</li>
                   <li>{this.props.bullet2}</li>
                   <li>{this.props.bullet3}</li>
                   <li>{this.props.bullet4}</li>
                   <li>{this.props.bullet5}</li>
                   <li>{this.props.bullet6}</li>
               </ul>
               {/* <p>{this.props.jobDescription}</p> */}
               </Cell>
           </Grid> 
        )
    }
}

export default Experience;