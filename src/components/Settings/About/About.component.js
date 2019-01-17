import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import messages from './About.messages';
import FullScreenDialog, {
  FullScreenDialogContent
} from '../../UI/FullScreenDialog';

import './About.css';

About.propTypes = {
  history: PropTypes.object.isRequired,
  onClose: PropTypes.func
};

function About({ history, onClose }) {
  return (
    <FullScreenDialog
      open
     
      onClose={history.goBack}
    >
      <Paper>
        <FullScreenDialogContent>
          

          
          <Typography variant="body1" headlineMapping={{ body1: 'div' }}>
            <ul>
              <li>
                <a href="">Cristhian Recalde</a>
              </li>
              <li>
                <a href="">Carolina Burbano</a>
              </li>
              <li>
                <a href="">Johanna Choez</a>
              </li>
              
            </ul>
          </Typography>
          
          
          
          
        </FullScreenDialogContent>
      </Paper>
    </FullScreenDialog>
  );
}

export default About;
