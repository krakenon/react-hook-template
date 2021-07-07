import { Avatar, Checkbox } from 'antd';
import React from 'react';
import labels from 'routes/inBuiltApps/Mail/data/labels';

const MailListItem = ({ mail, onMailSelect, onMailChecked, onStartSelect }) => {
  return (
    <div className="kd-module-list-item kd-mail-cell">
      <div className="kd-module-list-icon">
        <Checkbox
          color="primary"
          className="kd-icon-btn"
          checked={mail.selected}
          onClick={(event) => {
            event.stopPropagation();
            onMailChecked(mail);
          }}
          value="SelectMail"
        />
        <div
          onClick={() => {
            onStartSelect(mail);
          }}
        >
          {mail.starred ? (
            <i className="kd-icon-btn icon icon-star" />
          ) : (
            <i className="kd-icon-btn icon icon-star-o" />
          )}
        </div>

        <div className="kd-ml-2">
          {mail.from.avatar === '' ? (
            <Avatar className="kd-avatar kd-bg-blue kd-size-40">
              {' '}
              {mail.from.name.charAt(0).toUpperCase()}
            </Avatar>
          ) : (
            <Avatar
              className="kd-size-40"
              alt="Alice Freeman"
              src={mail.from.avatar}
            />
          )}
        </div>
      </div>

      <div
        className="kd-mail-list-info"
        onClick={() => {
          onMailSelect(mail);
        }}
      >
        <div className="kd-module-list-content">
          <div className="kd-mail-user-des">
            <span className="kd-sender-name">{mail.from.name}</span>

            <span className="kd-toolbar-separator">&nbsp;</span>

            <span className="kd-d-inline-block kd-text-truncate kd-send-subject">
              {mail.subject}
            </span>

            {mail.hasAttachments && <i className="icon icon-attachment" />}

            <div className="kd-time">{mail.time}</div>
          </div>

          <div className="kd-message">
            <p className="kd-text-truncate"> {mail.message}</p>
          </div>
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
      </div>
    </div>
  );
};

export default MailListItem;
