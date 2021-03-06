import React, { Component, PropTypes } from "react";
import { Modal } from "react-bootstrap";
import BallotSideBar from "../Navigation/BallotSideBar";


export default class BallotSummaryModal extends Component {
  // This modal shows the ballot summary

  static propTypes = {
    show: PropTypes.bool,
    toggleFunction: PropTypes.func.isRequired,
  };

  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {
    return <Modal show={this.props.show}
                  onHide={this.props.toggleFunction} >
        <Modal.Header closeButton>
          <Modal.Title>Summary of Ballot Items</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <BallotSideBar displayTitle={false} displaySubtitles={false} onClick={this.props.toggleFunction} />
        </Modal.Body>
      </Modal>;
  }
}
