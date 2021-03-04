import React, { Component } from "react";
import PropTypes from "prop-types";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import css from "./contact.module.css";
import animation from "./animation.module.css";

import close from "../../img/close.png";

class Contact extends Component {
  // ToDo function
  handlefilter = (prop) => {
    const { filter, contacts } = prop;

    if (filter == "") {
      return contacts;
    } else {
      return contacts.filter((w) =>
        w.name.toLowerCase().includes(filter.toLowerCase()),
      );
    }
  };

  handleDelete = (e) => {
    this.props.deleteContact(e.target.parentNode.id);
  };

  // ToDo DOM tree
  render() {
    return (
      <TransitionGroup className={css.contactList}>
        {this.handlefilter(this.props.users).map((item) => {
          const { id, name, number } = item;
          return (
            <CSSTransition key={id} timeout={250} classNames={animation}>
              <li id={id}>
                <span>
                  {name}: {number}
                </span>

                <button id={id} onClick={this.handleDelete}>
                  {" "}
                  <img src={close} alt="Delete"></img>{" "}
                </button>
              </li>
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    );
  }
}

// ToDo props defoult & props type
Contact.defaultProps = {
  users: [{ id: "id-0", name: "your name", number: "your number" }],
  filter: "",
};

Contact.propTypes = {
  users: PropTypes.object,
};

export default Contact;
