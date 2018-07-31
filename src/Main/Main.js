import React from 'react';

import {connector} from "../store/utils/connector";
import lifecycle from 'react-pure-lifecycle';

import {ToastContainer, toast} from "react-toastify";

import {checkLogin} from "../Login/serviceLogin";

import Menu from "../Menu/Menu";
import Login from "../Login/Login";
import Journal from "../Journal/Journal";
import Scan from "../Scan/Scan";
import {operationRephoto} from "../Journal/serviceJournal";
import {
    Button,
    Card,
    CardBody,
    CardTitle,
    FormGroup,
    Input,
    Label,
    ListGroup,
    ListGroupItem,
    Modal,
    ModalBody, Progress
} from "reactstrap";
import {operationStop} from "../Scan/serviceScan";

const methods = {
    componentDidMount(props) {
        checkLogin(props);

    }
}

const Main = ({state, dispatch}) =>
    (
        <div>

            <ToastContainer autoClose={8000} position={toast.POSITION.TOP_RIGHT}/>
            <Login />

            {
                state.loginReducer.isAuth ?
                    (
                        <div>
                            <Menu />
                            { state.menuReducer.item === 'scan'? (<Scan />) : <div/> }
                            { state.menuReducer.item === 'journal'? (<Journal />) : <div/> }
                        </div>
                    )
                    :
                    (
                        <div />
                    )
            }

            {/*возврат на перефото*/}
            <Modal isOpen={state.journalReducer.isShowModal}>
                <ModalBody>
                    <Card>
                        <CardBody>
                            <CardTitle>Причина возврата на перефото</CardTitle>

                            <ListGroup>
                                {
                                    state.journalReducer.reasonsList.map(
                                        item => (
                                            <ListGroupItem key={item.code}>
                                                <FormGroup check>
                                                    <Label check>
                                                        <Input checked={ state.journalReducer.selectReasonCode.filter( a => a === item.code ).length > 0 }
                                                               value={item.code}
                                                               onChange={ (e) => dispatch.changeReasonsItem(e.target.value) }
                                                               type="checkbox"/> {item.name}
                                                    </Label>
                                                </FormGroup>
                                            </ListGroupItem>
                                        )
                                    )
                                }
                                <ListGroupItem>
                                    <Label style={ {width: '100%'} }>
                                        Другая:
                                        <Input type="textarea"
                                               value={state.journalReducer.otherReason}
                                               onChange={ (e) => dispatch.changeOtherReason(e.target.value) }
                                        />
                                    </Label>
                                </ListGroupItem>
                            </ListGroup>

                            <br/>

                            <div style={{float: 'right'}}>
                                <Button color="success"
                                        disabled={ state.journalReducer.selectReasonCode.length === 0 && !state.journalReducer.otherReason }
                                        onClick={() => {
                                            operationRephoto({state, dispatch});
                                        }}>
                                    Отправить
                                </Button>
                                {' '}
                                <Button color="warning"
                                        onClick={() => dispatch.changeIsShowRePhotographedModal(false)}>
                                    Отмена
                                </Button>
                            </div>

                        </CardBody>
                    </Card>
                </ModalBody>
            </Modal>

            {/*получение данных журнала*/}
            <Modal isOpen={state.journalReducer.isProgressFilter}>
                <ModalBody>
                    <Card>
                        <Progress animated color="success" value="100"> Получение данных </Progress>
                    </Card>
                </ModalBody>
            </Modal>

            {/*получение заявки*/}
            <Modal isOpen={state.scanReducer.isProgressGetTaskByKey}>
                <ModalBody>
                    <Card>
                        <Progress animated color="success" value="100"> Получение данных задания </Progress>
                    </Card>
                </ModalBody>
            </Modal>

            {/*остановка вноса*/}
            <Modal isOpen={state.scanReducer.isStopGetOrderFromWorkModal}>
                <ModalBody>
                    <Card>
                        <CardBody>
                            <CardTitle>Остановать текущий внос{ state.scanReducer.movedFrom === 'journal'? ' и перейти в журнал':'' }?</CardTitle>
                            <div style={{float: 'right'}}>
                                <Button color="warning"
                                        onClick={
                                            () => operationStop({state, dispatch})
                                        }
                                >
                                    Да
                                </Button>
                                {' '}
                                <Button color="success"
                                        onClick={() => dispatch.changeIsStopGetOrderFromWorkModal(false)}
                                >
                                    Нет
                                </Button>
                            </div>
                        </CardBody>
                    </Card>
                </ModalBody>
            </Modal>

        </div>
    )

export default connector(lifecycle(methods)(Main));