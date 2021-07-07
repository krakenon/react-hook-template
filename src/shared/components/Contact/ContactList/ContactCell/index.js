import { Avatar, Checkbox, Dropdown, Menu } from 'antd';
import React from 'react';

import AddContact from '../../AddContact';

const options = ['Edit', 'Delete'];

class ContactCell extends React.Component {
  onContactClose = () => {
    this.setState({ addContactState: false });
  };
  onDeleteContact = (contact) => {
    this.setState({ addContactState: false });
    this.props.onDeleteContact(contact);
  };
  onEditContact = () => {
    this.setState({ addContactState: true });
  };
  menus = () => (
    <Menu
      onClick={(e) => {
        if (e.key === 'Edit') {
          this.onEditContact();
        } else {
          this.onDeleteContact(this.props.contact);
        }
      }}
    >
      {options.map((option) => (
        <Menu.Item key={option}>{option}</Menu.Item>
      ))}
    </Menu>
  );

  constructor() {
    super();
    this.state = {
      addContactState: false,
    };
  }

  render() {
    const { contact, addFavourite, onContactSelect, onSaveContact } =
      this.props;
    const { addContactState } = this.state;
    const { name, thumb, email, phone, designation, starred } = contact;

    return (
      <div className="kd-contact-item">
        <div className="kd-module-list-icon">
          <Checkbox
            className="kd-icon-btn"
            checked={contact.selected}
            value="checkedF"
            onClick={() => {
              onContactSelect(contact);
            }}
          />
          <div
            className="kd-d-none kd-d-sm-flex"
            onClick={() => {
              addFavourite(contact);
            }}
          >
            {starred ? (
              <i className="kd-icon-btn icon icon-star" />
            ) : (
              <i className="kd-icon-btn icon icon-star-o" />
            )}
          </div>
          <div className="kd-ml-2 kd-d-none kd-d-sm-flex">
            {thumb === null || thumb === '' ? (
              <Avatar size="large">{name.charAt(0).toUpperCase()}</Avatar>
            ) : (
              <Avatar size="large" alt={name} src={thumb} />
            )}
          </div>
        </div>

        <div className="kd-module-list-info kd-contact-list-info">
          <div className="kd-module-contact-content">
            <p className="kd-mb-1">
              <span className="kd-text-truncate kd-contact-name"> {name} </span>
              <span className="kd-toolbar-separator">&nbsp;</span>
              <span className="kd-text-truncate kd-job-title">
                {designation}
              </span>
            </p>

            <div className="kd-text-muted">
              <span className="kd-email kd-d-inline-block kd-mr-2">
                {email},
              </span>
              <span className="kd-phone kd-d-inline-block">{phone}</span>
            </div>
          </div>

          <div className="kd-module-contact-right">
            <Dropdown
              overlay={this.menus()}
              placement="bottomRight"
              trigger={['click']}
            >
              <i className="kd-icon-btn icon icon-ellipse-v" />
            </Dropdown>

            {addContactState && (
              <AddContact
                open={addContactState}
                contact={contact}
                onSaveContact={onSaveContact}
                onContactClose={this.onContactClose}
                onDeleteContact={this.onDeleteContact}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default ContactCell;
