import CustomScrollbars from '@kongd/components/CustomScrollbars';
import { Avatar, Badge, Col, DatePicker, Input, Menu, Row } from 'antd';
import Moment from 'moment';
import React from 'react';
import labels from 'routes/inBuiltApps/Todo/data/labels';
import users from 'routes/inBuiltApps/Todo/data/users';

import ConversationCell from './ConversationCell';

const { TextArea } = Input;

class ToDoDetail extends React.Component {
  handleLabelClick = (event) => {
    this.setState({ labelMenu: true, anchorEl: event.currentTarget });
  };
  handleUserClick = (event) => {
    this.setState({ userMenu: true, anchorEl: event.currentTarget });
  };
  handleRequestClose = () => {
    this.setState({ userMenu: false, labelMenu: false });
  };
  _handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.submitComment();
    }
  };
  handleEditTitle = () => {
    if (this.state.editTitle) {
      const todo = this.state.todo;
      todo.title = this.state.title;
      this.props.onToDoUpdate(todo);
    }
    this.setState({
      editTitle: !this.state.editTitle,
    });
  };
  handleEditNote = () => {
    if (this.state.note) {
      const todo = this.state.todo;
      todo.note = this.state.note;
      this.props.onToDoUpdate(todo);
    }
    this.setState({
      editNote: !this.state.editNote,
    });
  };
  handleDueDateChange = (date) => {
    this.setState({
      todo: { ...this.state.todo, dueDate: date },
    });
  };
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  optionMenu = () => {
    return (
      <Menu
        id="label-menu"
        onClick={this.handleRequestClose}
        onClose={this.handleRequestClose}
      >
        {users.map((user, index) => (
          <Menu.Item key={index} value={user.id}>
            <div className="kd-d-flex kd-user-name kd-align-items-center">
              <Avatar src={user.thumb} alt={user.name} />
              <h4>{user.name}</h4>
            </div>
          </Menu.Item>
        ))}
      </Menu>
    );
  };
  labelMenu = () => {
    return (
      <Menu id="label-menu" onClick={this.handleRequestClose()}>
        {labels.map((label) => (
          <Menu.Item key={label.id}>{label.title}</Menu.Item>
        ))}
      </Menu>
    );
  };

  constructor(props) {
    super(props);
    const { title, notes } = props.todo;
    const { conversation } = props;
    this.state = {
      todo: props.todo,
      title,
      notes,
      anchorEl: undefined,
      userMenu: false,
      labelMenu: false,
      editTitle: false,
      editNote: false,
      message: '',
      conversation,
    };
    this.handleRequestClose = this.handleRequestClose.bind(this);
  }

  submitComment() {
    if (this.state.message !== '') {
      const updatedConversation = this.state.conversation.concat({
        name: this.props.user.name,
        thumb: this.props.user.avatar,
        message: this.state.message,
        sentAt: Moment().format('ddd DD, YYYY, hh:mm:ss A'),
      });
      this.setState({
        conversation: updatedConversation,
        message: '',
      });
    }
  }

  updateMessageValue(evt) {
    this.setState({
      message: evt.target.value,
    });
  }

  render() {
    const { onToDoUpdate, onDeleteToDo } = this.props;
    const { todo, editNote, editTitle, title, notes, message, conversation } =
      this.state;
    let user = null;
    if (todo.user > 0) user = users.find((user) => user.id === todo.user);

    return (
      <div className="kd-module-detail kd-module-list">
        <CustomScrollbars className="kd-todo-detail-content-scroll">
          <div className="kd-module-detail-item kd-module-detail-header">
            <Row>
              <Col xs={24} sm={12} md={17} lg={12} xl={17}>
                <div className="kd-flex-row">
                  <div
                    className="kd-user-name kd-mr-md-4 kd-mr-2 kd-my-1"
                    onClick={this.handleUserClick}
                  >
                    {user === null ? (
                      <h4 className="kd-mb-0 kd-pointer">Assign User </h4>
                    ) : (
                      <div className="kd-flex-row kd-align-items-center kd-pointer">
                        <Avatar
                          className="kd-mr-2"
                          src={user.thumb}
                          alt={user.name}
                        />
                        <h4 className="kd-mb-0">{user.name}</h4>
                      </div>
                    )}
                  </div>
                  <DatePicker
                    className="kd-module-date kd-my-1"
                    defaultValue={
                      todo.dueDate !== null
                        ? Moment(todo.dueDate, 'dddd, MMMM DD, YYYY h:mm a')
                        : undefined
                    }
                    invalidLabel="Due Date"
                    format="MMMM DD, YYYY"
                    onChange={this.handleDueDateChange.bind(this)}
                    animateYearScrolling={false}
                  />
                </div>
              </Col>

              <Col xs={24} sm={12} md={7} lg={12} xl={7}>
                <div className="kd-flex-row kd-justify-content-between">
                  <i
                    className="kd-icon-btn icon icon-trash"
                    onClick={() => {
                      onDeleteToDo(todo);
                    }}
                  />

                  <span
                    className="kd-d-block"
                    onClick={() => {
                      todo.starred = !todo.starred;
                      onToDoUpdate(todo);
                    }}
                  >
                    {todo.starred ? (
                      <i className="kd-icon-btn icon icon-star" />
                    ) : (
                      <i className="kd-icon-btn icon icon-star-o" />
                    )}
                  </span>

                  <span
                    className="kd-d-block"
                    onClick={() => {
                      todo.important = !todo.important;
                      onToDoUpdate(todo);
                    }}
                  >
                    {todo.important ? (
                      <i className="kd-icon-btn icon icon-important" />
                    ) : (
                      <i className="kd-icon-btn icon icon-important-o" />
                    )}
                  </span>
                  <span className="kd-d-block" onClick={this.handleLabelClick}>
                    <i className="kd-icon-btn icon icon-tag" />
                  </span>
                </div>
              </Col>
            </Row>
          </div>

          <div className="kd-module-detail-item">
            <div className="kd-mb-md-4 kd-mb-2">
              {labels.map((label, index) => {
                return (
                  todo.labels.includes(label.id) && (
                    <Badge
                      key={index}
                      count={label.title}
                      style={{ backgroundColor: label.color }}
                    />
                  )
                );
              })}
            </div>

            <div className="kd-form-group kd-flex-row kd-align-items-center kd-mb-0 kd-flex-nowrap">
              <div
                onClick={(event) => {
                  todo.completed = !todo.completed;
                  onToDoUpdate(todo);
                }}
              >
                {todo.completed ? (
                  <span className="kd-border-2 kd-size-30 kd-rounded-circle kd-text-green kd-border-green kd-d-block kd-text-center kd-pointer">
                    <i className="icon icon-check" />
                  </span>
                ) : (
                  <span className="kd-border-2 kd-size-30 kd-rounded-circle kd-text-muted kd-border-grey kd-d-block kd-text-center kd-pointer">
                    <i className="icon icon-check" />
                  </span>
                )}
              </div>
              {editTitle ? (
                <div className="kd-flex-row kd-align-items-center kd-justify-content-between kd-flex-1 kd-flex-nowrap">
                  <div className="kd-col">
                    <Input
                      fullWidth
                      className="kd-task-title"
                      id="required"
                      placeholder="Title"
                      onChange={(event) =>
                        this.setState({ title: event.target.value })
                      }
                      defaultValue={title}
                    />
                  </div>

                  <span
                    className="kd-d-block kd-size-40 kd-text-center kd-pointer"
                    onClick={this.handleEditTitle}
                  >
                    <i className="kd-icon-btn icon icon-edit" />
                  </span>
                </div>
              ) : (
                <div className="kd-flex-row kd-align-items-center kd-justify-content-between kd-flex-1 kd-flex-nowrap">
                  <div className="kd-task-title kd-col">{title}</div>
                  <span
                    className="kd-d-block kd-size-40 kd-text-center kd-pointer"
                    onClick={this.handleEditTitle}
                  >
                    <i className="kd-icon-btn icon icon-edit" />
                  </span>
                </div>
              )}
            </div>
          </div>

          <div className="kd-module-detail-item kd-mb-md-4 kd-mb-2">
            {editNote ? (
              <div className="kd-flex-row kd-align-items-center kd-justify-content-between kd-flex-1 kd-flex-nowrap">
                <div className="kd-task-input kd-col">
                  <Input
                    fullWidth
                    id="required"
                    placeholder="Note"
                    onChange={(event) =>
                      this.setState({ notes: event.target.value })
                    }
                    defaultValue={notes}
                  />
                </div>

                <span
                  className="kd-d-block kd-size-40 kd-text-center kd-pointer"
                  onClick={this.handleEditNote}
                >
                  <i className="kd-icon-btn icon icon-edit" />
                </span>
              </div>
            ) : (
              <div className="kd-flex-row kd-align-items-center kd-justify-content-between kd-flex-1 kd-flex-nowrap">
                <div className="kd-task-des kd-col">
                  {notes === '' ? 'Add note here' : notes}
                </div>
                <span
                  className="kd-d-block kd-size-40 kd-text-center kd-pointer"
                  onClick={this.handleEditNote}
                >
                  <i className="kd-icon-btn icon icon-edit" />
                </span>
              </div>
            )}
          </div>
          <div className="kd-module-detail-item">
            <h3 className="kd-mb-0 kd-mb-sm-1">Comments</h3>
          </div>
          {conversation.map((conversation, index) => (
            <ConversationCell key={index} conversation={conversation} />
          ))}
        </CustomScrollbars>

        <div className="kd-chat-main-footer kd-todo-main-footer">
          <div className="kd-flex-row kd-align-items-center">
            <div className="kd-col">
              <div className="kd-form-group">
                <TextArea
                  className="kd-border-0 ant-input kd-chat-textarea"
                  id="required"
                  onKeyUp={this._handleKeyPress.bind(this)}
                  onChange={this.updateMessageValue.bind(this)}
                  value={message}
                  rows={2}
                  placeholder="Type and hit enter to send message"
                />
              </div>
            </div>

            <div
              className="kd-chat-sent"
              onClick={this.submitComment.bind(this)}
              aria-label="Send message"
            >
              <i className="kd-icon-btn icon icon-sent" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ToDoDetail;
