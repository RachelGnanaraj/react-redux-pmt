import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import FlatButton from 'material-ui/FlatButton';
import { ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import CircleCheckIcon from 'material-ui/svg-icons/action/check-circle';

class ItemsListItem extends React.PureComponent {
  static propTypes = {
    item: PropTypes.object.isRequired,
    onSelect: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
  };

  render() {
    const {
      type,
      item,
      onSelect,
      onEdit,
      onRemove,
    } = this.props;

    return (
      <React.Fragment key={item.id}>
        <ListItem
          primaryText={
            <div className={classnames('title', {
              complete: type === 'todos' && item.complete,
            })}>
              {item.title}
            </div>
          }
          onClick={() => onSelect(item)}
          rightIconButton={
            (type === 'todos' && item.complete) ?
              <div className="buttons-wrapper tick">
                <CircleCheckIcon/>
              </div>
              :
              <div className="buttons-wrapper">
                <FlatButton label="Edit" type="button" primary={true} onClick={() => onEdit(item)}/>
                <FlatButton label="Remove" type="button" secondary={true} onClick={() => onRemove(item)}/>
              </div>
          }
        />
        <Divider/>
      </React.Fragment>
    );
  }
}

export default ItemsListItem;
