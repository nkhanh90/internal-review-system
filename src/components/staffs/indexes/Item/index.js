import React  from 'react';
import {Link} from 'react-router-dom'

import Twitter from 'react-icons/lib/fa/twitter';
import Linkedin from 'react-icons/lib/fa/linkedin';
import Facebook from 'react-icons/lib/fa/facebook';
import Mail from 'react-icons/lib/md/email';

import {Popover, OverlayTrigger} from 'react-bootstrap'

function Item({ userId, name, title, email, location, facebook, twitter, linkedin, img }) {
  return (
    <div className='col-md-2 col-xs-2 text-center m-h-md' key={ userId }>
      <img className='img-circle'
           src={ img } alt={ name } width='80' height='80'/>
      <div className='detail'>
        <div>
          <Link to={`/staff/${ userId }`}><strong>{name}</strong></Link>
        </div>
        <div>{ title }</div>
        <OverlayTrigger
          trigger='click'
          rootClose
          placement='top'
          overlay={
            <Popover id='popover-trigger-click-root-close'>
              <ul className='nav nav-pills'>
                { twitter &&
                <li>
                  <Link to={ twitter } target='_blank'><Twitter
                    className='m-v-xm'/></Link>
                </li>
                }
                { linkedin &&
                <li>
                  <Link to={ linkedin } target='_blank'><Linkedin className='m-v-xm'/></Link>
                </li>
                }
                { facebook &&
                <li>
                  <Link to={ facebook } target='_blank'><Facebook className='m-v-xm'/></Link>
                </li>
                }
                { email &&
                <li>
                  <Link to={ email } target='_blank'><Mail className='m-v-xm'/></Link>
                </li>
                }
              </ul>
            </Popover>
          }
        >
          <div className='text-blue contact-on'>Contact on</div>
        </OverlayTrigger>
      </div>
    </div>
  );
}

export default Item;
