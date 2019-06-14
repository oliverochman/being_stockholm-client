import React, { Component } from 'react';
import { Grid, Icon, Header } from 'semantic-ui-react';

class Footer extends Component {
  render() {
    return (
      <Grid id='footer' celled='internally'>
        <Grid.Row>
          <Grid.Column textAlign='center' width={3}>
            <Icon name="bars" color="orange"
            onClick={this.props.handleAnimationChange('overlay')}/>
          </Grid.Column>
          <Grid.Column textAlign='center' width={10}>
            <Header color="orange" id="footer-logo" as='h3'>Being Stockholm</Header>
          </Grid.Column>
          <Grid.Column textAlign='center' width={3}>
            <Icon circular
              name='user'
              color='orange' />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default Footer;
