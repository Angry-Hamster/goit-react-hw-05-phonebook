import React, { Component } from "react";

import Contacts from "./components/Contacts/Contacts";
import Form from "./components/Form/Form";
import Filter from "./components/Filter/Filter";
import Logo from "./components/Logo/Logo";

class App extends Component {
  // ToDo contacts
  state = {
    contacts: [
      // ! Contacts
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  // ToDo methods
  addNewContact = (user) => {
    this.setState((prev) => ({ contacts: [...prev.contacts, user] }));
  };

  getFilter = (filter) => {
    this.setState({ filter: filter });
  };

  deleteContact = (id) => {
    const { contacts } = this.state;
    this.setState({ contacts: contacts.filter((w) => w.id != id) });
  };

  // ToDo livecicle

  componentDidMount() {
    // ? load JSON to localStorege
    window.addEventListener("beforeunload", () => {
      localStorage.clear();
      this.state.contacts.length &&
        localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    });

    // ? unload JSON of localStorege
    window.addEventListener("load", () => {
      if (localStorage.getItem("contacts") != null) {
        this.setState({
          contacts: JSON.parse(localStorage.getItem("contacts")),
        });
        console.log(
          "%c[Sistem call]%c[LocalStorage get key is successful]",
          "color: purple; font-size: 15px;",
          "color: green; font-size: 15px;",
        );
      } else {
        console.log(
          "%c[Sistem call]%c[LocalStorage is null]",
          "color: purple; font-size: 15px;",
          "color: red; font-size: 15px;",
        );
      }
    });
  }

  // ToDo DOM tree
  render() {
    return (
      <>
        <Logo />
        <Form addNewContact={this.addNewContact} users={this.state.contacts} />

        <Filter filter={this.getFilter} />
        <Contacts users={this.state} deleteContact={this.deleteContact} />
      </>
    );
  }
}

export default App;
