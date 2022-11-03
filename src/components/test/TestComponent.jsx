import React, { Fragment } from "react";
import "./TestComponent.css";
import Counter from "./counter/Counter";
import Form from "./form/FormTest";
import Clock from "./clock/Clock";
import styled from "styled-components";
import WhoAmI from "./whoAmI/WhoAmI";
import BootstrapTest from "./bootstrap/BootstrapTest";
import DynamicGreating from "./dynamicGreating/DynamicGreating";
import Carousel from "./carousel/CarouselTest";
import HelloGreating from "./helloGreating/HelloGreating";
import ReactDOM from "react-dom";

const Wrapper = styled.div`
    width: 800px;
    margin: 80px auto 0 auto;
    padding: 10px;
    background-color: #3d5a80;
    color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 24px rgba(0, 0, 0, 0.8);
`;

const Item = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Header = styled.h2`
    font-size: 22px;
    color: darkorchid;
    font-size: 24px;
    margin: 10px auto;
    text-shadow: 5px 5px 10px rgba(134, 4, 4, 0.7);
`;

class TestComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: this.props.counter,
        };
    }

    static onLog = () => {
        console.log("Log");
    };

    static logged = "On";

    render() {
        return (
            <div className="pt-5 pb-5 mb-5 bg-success" style={{ position: "relative", overflow: "hidden" }}>
                <Fragment>
                    <Counter count={0} />
                    <Clock />
                </Fragment>
                <Wrapper>
                    <h1>Styled components</h1>
                    <Item>
                        <Header>
                            <WhoAmI name="Иван" surname="Иванов" years={27} />
                        </Header>
                        <Header>
                            <WhoAmI name="Иван" surname="Иванов" years={27} />
                        </Header>
                    </Item>
                    <Clock />
                    <hr className="mt-5" />
                    <div className="mt-5">
                        <h2 className="mb-5">Bootstrap 5</h2>
                        <BootstrapTest left={<Form />} right={<Carousel />} />
                    </div>
                    <DynamicGreating color="primary">
                        <h2>This wel was hard</h2>
                        <h2>Hello World!</h2>
                    </DynamicGreating>
                    <HelloGreating />
                    <hr className="mt-5 mb-5" />
                </Wrapper>
                <Portal>
                    <Message />
                </Portal>
            </div>
        );
    }
}

const Portal = (props) => {
    const node = document.createElement("div");
    document.body.append(node);
    return ReactDOM.createPortal(props.children, node);
};

const Message = () => {
    return (
        <div
            style={{
                width: "500px",
                height: "150px",
                backgroundColor: "red",
                position: "absolute",
                right: "0",
                bottom: "0",
            }}>
            Hello
        </div>
    );
};

export default TestComponent;
