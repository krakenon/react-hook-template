import CustomScrollbars from '@kongd/components/CustomScrollbars';
import { Avatar, Dropdown, Menu } from 'antd';
import React from 'react';
import labels from 'routes/inBuiltApps/Mail/data/labels';

const options = ['Reply', 'Forward', 'Print'];

class MailDetail extends React.Component {
  state = {
    showDetail: false,
  };

  optionMenu = () => {
    return (
      <Menu id="long-menu">
        {options.map((option) => (
          <Menu.Item key={option}>{option}</Menu.Item>
        ))}
      </Menu>
    );
  };

  render() {
    const { mail, onStartSelect, onImportantSelect } = this.props;

    return (
      <div className="kd-module-detail kd-mail-detail">
        <CustomScrollbars className="kd-module-content-scroll">
          <div className="kd-mail-detail-inner">
            <div className="kd-mail-header">
              <div className="kd-mail-header-content kd-col kd-pl-0">
                <div className="kd-subject">{mail.subject}</div>

                <div className="kd-labels">
                  {labels.map((label, index) => {
                    return (
                      mail.labels.includes(label.id) && (
                        <div
                          key={index}
                          className={`kd-badge kd-text-white kd-bg-${label.color}`}
                        >
                          {label.title}
                        </div>
                      )
                    );
                  })}
                </div>
              </div>

              <div className="kd-mail-header-actions">
                <div
                  onClick={() => {
                    onStartSelect(mail);
                  }}
                >
                  {mail.starred ? (
                    <i className="icon icon-star kd-icon-btn" />
                  ) : (
                    <i className="icon icon-star-o kd-icon-btn" />
                  )}
                </div>
                <div
                  onClick={() => {
                    onImportantSelect(mail);
                  }}
                >
                  {mail.important ? (
                    <i className="icon icon-important kd-icon-btn" />
                  ) : (
                    <i className="icon icon-important-o kd-icon-btn" />
                  )}
                </div>
              </div>
            </div>
            <hr />

            <div className="kd-mail-user-info kd-ml-0 kd-mb-3">
              {mail.from.avatar === '' ? (
                <Avatar className="kd-avatar kd-bg-blue kd-size-40 kd-mr-3">
                  {' '}
                  {mail.from.name.charAt(0).toUpperCase()}
                </Avatar>
              ) : (
                <Avatar
                  className="kd-size-40 kd-mr-3"
                  alt="Alice Freeman"
                  src={mail.from.avatar}
                />
              )}

              <div className="kd-sender-name">
                {mail.from.name}
                <div className="kd-send-to kd-text-grey">to me</div>
              </div>

              <Dropdown trigger={['click']} overlay={this.optionMenu()}>
                <span className="kd-ml-auto">
                  <i className="icon icon-ellipse-v kd-icon-btn" />
                </span>
              </Dropdown>
            </div>

            <div
              className="kd-show-link"
              onClick={() => {
                this.setState({ showDetail: !this.state.showDetail });
              }}
            >
              {this.state.showDetail ? 'Hide Detail' : 'Show Detail'}
            </div>
            {this.state.showDetail && (
              <div className="kd-show-detail">
                <div>
                  <strong>From: </strong>
                  {mail.from.email}
                </div>
                <div>
                  <strong> To: </strong>
                  {mail.to.map((to, index) => (
                    <span>
                      {index > 0 && ', '} {to.email}
                    </span>
                  ))}
                </div>
                <div>
                  <strong>Date: </strong>
                  {mail.time}{' '}
                </div>
              </div>
            )}

            <p>{mail.message}</p>

            {mail.hasAttachments && (
              <div className="kd-attachment-block">
                <h3>Attachments ({mail.attachments.length})</h3>
                <div className="kd-attachment-row">
                  {mail.attachments.map((attachment, index) => (
                    <div className="kd-attachment-col" key={index}>
                      <img src={attachment.preview} alt={attachment.fileName} />
                      <div className="size">{attachment.size}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </CustomScrollbars>
      </div>
    );
  }
}

export default MailDetail;
