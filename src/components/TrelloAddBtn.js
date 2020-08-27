import React from "react";

import { connect } from "react-redux";
import { addList, addCard } from "../actions";

class TrelloAddBtn extends React.Component {
  state = {
    formOpen: false,
  };

  openForm = () => {
    this.setState({ formOpen: true });
  };

  closeForm = (e) => {
    this.setState({
      formOpen: false,
    });
  };

  handleChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  handleAddList = () => {
    const { dispatch } = this.props;
    const { text } = this.state;
    if (text) {
      this.setState({
        text: "",
      });
      dispatch(addList(text));
    }
    return;
  };

  handleAddCard = () => {
    const { dispatch, listID } = this.props;
    const { text } = this.state;

    if (text) {
      this.setState({
        text: "",
      });
      dispatch(addCard(listID, text));
    }
  };

  renderAddBtn = () => {
    const { list } = this.props;

    const btnText = list ? "Add Another Column" : "Add Job";

    return (
      <div onClick={this.openForm}>
        <button type="button" className="btn btn-primary">
          +
        </button>
        <p>{btnText}</p>
      </div>
    );
  };

  renderForm = () => {
    const { list } = this.props;

    const placeholder = list ? "enter column title" : "enter job title";

    const btnTitle = list ? "Add Column" : "Add Job";

    return (
      <div>
        <form>
          <div className="form-group">
            <input
              type="company"
              className="form-control"
              id="company"
              aria-describedby="company"
              placeholder="Company"
              autoFocus
              onBlur={this.closeForm}
              value={this.state.text}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <button
              onMouseDown={list ? this.handleAddList : this.handleAddCard}
              type="button"
              className="btn btn-success my-1"
            >
              {btnTitle}
            </button>
            <button type="button" className="btn btn-danger ml-1 my-1">
              X
            </button>
          </div>
        </form>
      </div>
    );
  };

  render() {
    return this.state.formOpen ? this.renderForm() : this.renderAddBtn();
  }
}

export default connect()(TrelloAddBtn);
