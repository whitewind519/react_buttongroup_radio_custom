import React from 'react';
import { Row, Col, ButtonGroup, Button } from 'react-bootstrap';
import './SegmentedControl.scss';
  

class SegmentControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pay_client: 0,
            pay_valassis: 1,
            gen_all: 0,
            gen_female: 1,
            gen_male: 0,
        }
    }
    // get the button variant string from the indexes
    getVariant = num => {
        switch(num) {
            case 1:
                return "primary";
            case 0:
                return "light";
            default:
                return 'default';
        }
    }
    // Choosen client button, make active itself
    activePayClient = () => {
        if (this.state.pay_client === 0) {
            this.setState({
                pay_client: 1,
                pay_valassis: 0
            })
        }
    }
    // Choosen valassis button, make active itself
    activePayValassis = () => {
        if (this.state.pay_valassis === 0) {
            this.setState({
                pay_client: 0,
                pay_valassis: 1
            })
        }
    }
    // Choosen gender all button, make active itself
    activeGenAll = () => {
        if (this.state.gen_all === 0) {
            this.setState({
                gen_all: 1,
                gen_female: 0,
                gen_male: 0
            })
        }
    }
    // Choosen gender female button, make active itself
    activeGenFemale = () => {
        if (this.state.gen_female === 0) {
            this.setState({
                gen_all: 0,
                gen_female: 1,
                gen_male: 0
            })
        }
    }
    // Choosen gender male button, make active itself
    activeGenMale = () => {
        if (this.state.gen_male === 0) {
            this.setState({
                gen_all: 0,
                gen_female: 0,
                gen_male: 1
            })
        }
    }

    render() {
        const { pay_client, pay_valassis, gen_all, gen_female, gen_male } = this.state;
        return (
            <div className="seg-area">
                <Row>
                    <Col xs={12} sm={6}>
                        <p>Paid for by</p>
                        <ButtonGroup className="btn-group mb-3">
                            <Button variant={this.getVariant(pay_client)} onClick={this.activePayClient}>Client</Button>
                            <Button variant={this.getVariant(pay_valassis)} onClick={this.activePayValassis}>Valassis Digital</Button>
                        </ButtonGroup>
                    </Col>
                    <Col xs={12} sm={6}>
                        <p>Gender</p>
                        <ButtonGroup className="btn-group mb-3">
                            <Button variant={this.getVariant(gen_all)} onClick={this.activeGenAll} >All</Button>
                            <Button variant={this.getVariant(gen_female)} onClick={this.activeGenFemale} >Female</Button>
                            <Button variant={this.getVariant(gen_male)} onClick={this.activeGenMale} >Male</Button>
                        </ButtonGroup>
                    </Col>
                </Row>
            </div>
        );
    }
}
export default SegmentControl;