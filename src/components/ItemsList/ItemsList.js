import React from 'react';
import PropTypes from 'prop-types';
import {List} from 'material-ui/List';

import ItemsListItem from './ItemsListItem/ItemsListItem';
import ItemsListItemEdit from './ItemsListItemEdit/ItemsListItemEdit';

import './ItemsList.css';

class ItemsList extends React.PureComponent {
  static propTypes = {
    type: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired,
    editingId: PropTypes.string,
    onSelect: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
  };

  render() {
    const {
      type,
      items,
      editingId,
      onSelect,
      onEdit,
      onSave,
      onCancel,
      onRemove,
    } = this.props;

    return (
      <div className="items-list-component">

        <List>
          {items.map(item =>
            item.id === editingId ?
              <ItemsListItemEdit
                key={item.id}
                type={type}
                item={item}
                onCancel={onCancel}
                onSave={onSave}
              />
              :
              <ItemsListItem
                key={item.id}
                type={type}
                item={item}
                onSelect={onSelect}
                onEdit={onEdit}
                onRemove={onRemove}
              />
          )}

          <ItemsListItemEdit
            type={type}
            item={{id: 'new', title: ''}}
            onCancel={onCancel}
            onSave={onSave}
          />
        </List>

      </div>
    );
  }
}

export default ItemsList;
