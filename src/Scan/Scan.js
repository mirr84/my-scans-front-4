import React from 'react';

import {connector} from "../store/utils/connector";
import {Container, Row, Col, Card, CardBody, Button} from "reactstrap";

import RequestMain from "./RequestMain";
import RequestSender from "./RequestSender";
import RequestReceiver from "./RequestReceiver";
import RequestInformationAboutCargo from "./RequestInformationAboutCargo";
import RequestPaymentInformation from "./RequestPaymentInformation";
import RequestTotal from "./RequestTotal";
import RequestImage from "./RequestImage";
import {getRephotoReasons} from "../Journal/serviceJournal";
import Sticky from 'react-sticky-el';

const Scan = ({state, dispatch}) =>
    (
        <Container fluid={true}>
            <Row>
                <Col>
                    <RequestMain/>
                    <RequestPaymentInformation/>
                    <RequestTotal/>

                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, commodi delectus distinctio ducimus hic
                        incidunt ipsum iste laborum laudantium nemo nostrum odit, porro quod rerum voluptatem? Impedit ipsum
                        nemo nulla!
                    </div>
                    <div>Aspernatur, delectus fugit ipsa labore necessitatibus quidem sint sit ut velit veniam! Atque
                        dignissimos ea illo itaque non quae quidem reiciendis reprehenderit totam voluptatem. Animi
                        necessitatibus odit quos repudiandae totam!
                    </div>
                    <div>Beatae dolor doloremque dolores ducimus error facilis itaque, laborum odio placeat quos repellat sint
                        suscipit unde veniam vitae. A aliquid beatae delectus dolorum error esse ipsam molestias quae quo
                        tempore.
                    </div>
                    <div>Dolor est explicabo iste molestias natus non placeat quaerat tempora tempore vitae? Aperiam consequatur
                        cum dignissimos ea, facilis ipsum molestias neque pariatur, provident quisquam similique sint temporibus
                        totam vel voluptate?
                    </div>
                    <div>Blanditiis consectetur enim molestiae numquam perspiciatis saepe vel! Ab amet animi, atque dignissimos
                        eveniet excepturi ipsam iusto laboriosam magnam molestiae nostrum optio quae quisquam repellendus
                        tempore veniam voluptate! Aspernatur, quam!
                    </div>
                    <div>Ab commodi iste nostrum. Fuga necessitatibus sint voluptas voluptate. A asperiores aut cupiditate dolor
                        dolore, dolorum ea fuga fugit id illum neque perferendis suscipit voluptate. Illum inventore magni
                        veniam vero.
                    </div>
                    <div>A, asperiores at delectus ea eaque eveniet inventore laborum necessitatibus omnis pariatur quam quia
                        veritatis. Blanditiis explicabo, ipsa molestias nostrum, numquam odit porro quaerat quas, reiciendis vel
                        veniam voluptas voluptatum?
                    </div>
                    <div>A, architecto culpa cumque dicta dolorem doloremque explicabo fuga laborum libero magnam natus, neque,
                        officia porro quis repudiandae veniam voluptate voluptates voluptatum? Dicta distinctio eveniet,
                        necessitatibus nobis non optio veniam.
                    </div>
                    <div>Culpa eligendi excepturi fugit illum qui reprehenderit voluptas voluptatibus voluptatum? Atque eligendi
                        nobis saepe voluptatibus. Accusamus ducimus eligendi molestiae? Esse et eum laborum neque quo recusandae
                        reiciendis rerum sint tempora.
                    </div>
                    <div>Aliquam aspernatur ducimus eligendi enim esse in necessitatibus nemo officiis pariatur quae quis
                        repellat soluta, tempore, veniam voluptatibus? Corporis dicta laboriosam laborum molestiae natus,
                        praesentium qui quod reprehenderit sint vero?
                    </div>
                    <div>Aut blanditiis debitis deleniti inventore minima odio optio. A accusamus aliquid asperiores autem
                        cumque dicta dignissimos, facere, in laborum libero minus nam necessitatibus numquam praesentium rerum
                        unde voluptatem! Quae, repudiandae?
                    </div>
                    <div>Aliquam, assumenda deleniti. Consequuntur dolor doloremque dolores excepturi hic minima quibusdam
                        tempore! Accusantium aspernatur culpa deleniti dolore perspiciatis quidem repellendus sed vitae.
                        Accusamus aperiam cupiditate dolore eligendi, itaque nesciunt quo?
                    </div>
                    <div>A dignissimos eaque eius excepturi itaque nam perspiciatis quia saepe. Atque, consequuntur enim et fuga
                        illum, laboriosam nam nisi non optio, perferendis placeat quae quaerat reiciendis sapiente ut veritatis
                        voluptates!
                    </div>
                    <div>A aperiam autem deserunt facilis ipsa iste iure numquam possimus quasi quo ratione saepe sapiente sunt
                        unde, veritatis. Alias animi consectetur in nobis nostrum nulla officiis perspiciatis quae quam tempore.
                    </div>
                    <div>Accusamus autem corporis dolore doloribus facere, fuga labore maxime obcaecati perferendis quas quos
                        repudiandae sequi, soluta velit voluptate! Aliquam aliquid consequuntur cupiditate dolor eligendi itaque
                        quia quibusdam quod reprehenderit tempore.
                    </div>
                    <div>Ad adipisci animi atque consequuntur cupiditate debitis dolorum eaque esse excepturi expedita in, iusto
                        laborum, maiores maxime nemo quasi reiciendis saepe suscipit voluptates voluptatibus? Autem dicta fugit
                        labore repellendus repudiandae.
                    </div>
                    <div>Iure laboriosam laudantium, nobis omnis tempora voluptatem! Ab deserunt doloremque doloribus earum et
                        exercitationem explicabo iste laboriosam, molestiae molestias nemo nihil numquam quas ratione sequi sunt
                        tenetur, totam unde voluptate?
                    </div>
                    <div>Ab at atque dignissimos eius eos illo iusto labore molestias, mollitia repudiandae tempora veritatis.
                        Consequatur deleniti dignissimos omnis, quia quidem tenetur! Aut ex in ipsa non odio officia sed
                        similique!
                    </div>
                    <div>Aliquam assumenda cupiditate distinctio dolor enim esse eveniet explicabo, fuga fugit, iusto natus
                        numquam porro possimus quaerat quam quasi sequi, similique ullam veniam vitae. Aut eligendi fugit
                        impedit perspiciatis voluptates?
                    </div>
                    <div>Aperiam, autem culpa, dicta dolores, eaque excepturi facere fugit minima placeat praesentium provident
                        quam tenetur ut! Accusamus ad aliquid commodi ducimus est excepturi expedita facere harum odio ratione?
                        Consequatur, quibusdam?
                    </div>

                </Col>
                <Col>
                    <RequestSender/>
                    <RequestReceiver/>
                    <RequestInformationAboutCargo/>
                </Col>
                <Col>
                    <Sticky>
                        <div>
                        <div>
                            <Card>
                                <CardBody>
                                    {
                                        !state.scanReducer.isGetOrderFromWork ? (
                                            <Button color="success"
                                                    onClick={() => {
                                                    }}
                                            >
                                                Автоматический внос
                                            </Button>
                                        ) : (
                                            <div>
                                                <Button color="warning"
                                                        disabled={state.journalReducer.imageProgress}
                                                        onClick={
                                                            () => {
                                                                dispatch.changeIsShowRePhotographedModal(true);
                                                                dispatch.changeCleanRephotoReasons(true);
                                                                getRephotoReasons({state, dispatch});
                                                            }
                                                        }
                                                >
                                                    Возврат на перефото
                                                </Button>
                                                {' '}
                                                <Button color="warning"
                                                        onClick={() => {
                                                            if (state.scanReducer.movedFrom === 'journal') {
                                                                dispatch.changeIsStopGetOrderFromWorkModal(true);
                                                            } else {
                                                                dispatch.changeIsGetOrderFromWork(false);
                                                                dispatch.changeSetOrderData(null);
                                                            }
                                                        }}
                                                >
                                                    Стоп
                                                </Button>
                                            </div>
                                        )
                                    }
                                </CardBody>
                            </Card>
                        </div>
                        <RequestImage/>
                    </div>
                    </Sticky>
                </Col>
            </Row>
        </Container>
    )

export default connector(Scan);