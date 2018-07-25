import React from 'react';

import {connector} from "../store/utils/connector";
import {Button, Collapse, Card, CardBody, CardTitle, Container, Row, Col} from "reactstrap";

const Journal = ({state, dispatch}) =>
    (
        <Container fluid={true}>

            <Card>
                <CardBody>
                    <CardTitle
                        style={{margin: 0, cursor: 'pointer'}}
                        onClick={() => dispatch.changeJournalFilterCollapse(!state.journalReducer.collapse)}>
                        Фильтр
                    </CardTitle>
                    <Collapse isOpen={state.journalReducer.collapse}>
                        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A at aut consectetur cum
                            dicta dolorem eum ex iste maxime odio possimus, praesentium quae reiciendis sint totam
                            ut veniam vitae voluptatem!
                        </div>
                        <div>Consequatur facere id natus odio odit saepe sit unde. Aliquam aspernatur aut autem
                            consequatur dolore ea expedita id ipsam libero maiores molestiae natus necessitatibus
                            odit pariatur placeat, quisquam quo tempore.
                        </div>
                        <div>Consectetur incidunt quaerat repellendus vero vitae? Ab alias architecto blanditiis
                            consectetur corporis delectus eligendi id, illo impedit incidunt inventore maxime
                            numquam officia quaerat quas qui quia quibusdam recusandae temporibus voluptas!
                        </div>
                    </Collapse>
                </CardBody>
            </Card>

            <Row>
                <Col xs={8}>
                    <Card>
                        <CardBody>
                            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam autem deserunt,
                                eligendi
                                et fugiat magni recusandae repellat rerum sed voluptates. At corporis dolorem error
                                inventore necessitatibus nisi quidem quisquam sed.
                            </div>
                            <div>Amet culpa dolores labore possimus provident quidem unde veniam voluptates. Assumenda
                                consectetur consequuntur corporis doloremque est eum hic ipsa iusto, magni molestiae
                                necessitatibus, nemo perspiciatis, ratione reiciendis repellat rerum ullam.
                            </div>
                            <div>Asperiores atque blanditiis dolor eos eveniet. Adipisci aliquid aperiam asperiores at
                                beatae, consequuntur corporis delectus doloribus eum nam neque non praesentium quae quis
                                rem
                                ut velit veniam, vitae, voluptate voluptatem.
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <CardBody>
                            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium dolor error
                                excepturi
                                id quae! A atque enim eum, facilis iste laborum magnam maiores, mollitia natus quidem
                                quisquam, sit soluta totam.
                            </div>
                            <div>Adipisci alias atque consequatur doloremque eum eveniet fugit molestiae nemo nostrum
                                nulla
                                placeat praesentium qui quia quibusdam quo, repudiandae sapiente sed sit soluta tenetur
                                ut
                                velit veniam voluptatibus. Ipsum, praesentium.
                            </div>
                            <div>Adipisci aliquam atque, aut blanditiis cupiditate ea eligendi eos explicabo facere
                                facilis
                                fugiat hic, illum incidunt iste magni nesciunt nihil odit porro quae reiciendis sequi
                                sit
                                suscipit, totam voluptas voluptatum.
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>

    )

export default connector(Journal);