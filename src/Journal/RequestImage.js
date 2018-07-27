import React from 'react';

import {connector} from "../store/utils/connector";
import Viewer from 'react-viewer';

const RequestImage = ({state, dispatch}) =>
    (
        <div>

            <Viewer
                visible={state.journalReducer.imageZoom}
                noNavbar={true}
                onClose={() => {
                    dispatch.changeZoomImageJournal(false);
                }}
                container={document.getElementById('imageContainer')}
                images={[{
                    src: 'data:image/jpeg;base64;charset=utf-8,' + state.journalReducer.imageData
                }]}
            />

            {
                state.journalReducer.imageProgress ?
                    <img className="img-thumbnail"
                         style={{width: '100%'}}
                         src={'resources/img/loaadimage.gif'}/> : (<div/>)
            }

            {
                !state.journalReducer.imageProgress && state.journalReducer.imageData ?
                    <img className="img-thumbnail"
                         style={{width: '100%', cursor: 'pointer'}}
                         onClick={() => {
                             dispatch.changeZoomImageJournal(true);
                         }}
                         src={'data:image/jpeg;base64;charset=utf-8,' + state.journalReducer.imageData}/> : (<div/>)
            }

            {
                !state.journalReducer.imageProgress && !state.journalReducer.imageData ?
                    <img className="img-thumbnail"
                         style={{width: '100%'}}
                         src={'resources/img/noimage.jpg'}/> : (<div/>)
            }

        </div>
    )

export default connector(RequestImage);