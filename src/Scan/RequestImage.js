import React from 'react';
import Viewer from 'react-viewer';

import {connector} from "../store/utils/connector";

const RequestImage = ({state, dispatch}) =>
    (
        <div id='imageContainer' style={{height: '500px'}}>
            <Viewer
                visible={true}
                noClose={true}
                noNavbar={true}
                container={document.getElementById('imageContainer')}
                images={[{
                    src: 'data:image/jpeg;base64;charset=utf-8,' + state.journalReducer.imageData
                }]}
            />
        </div>
    )

export default connector(RequestImage);