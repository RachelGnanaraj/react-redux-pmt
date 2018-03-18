import React from 'react';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';
import {ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import CircleAddIcon from 'material-ui/svg-icons/content/add-circle-outline';

class ItemsListItemEdit extends React.PureComponent {
  static propTypes = {
    type: PropTypes.string.isRequired,
    item: PropTypes.object.isRequired,
    onCancel: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
  };

  state = {
    title: '',
  };

  componentDidMount() {
    const { item } = this.props;
    this.setState({
      title: item.title || '',
    });
  }

  handleChange = (e, value) => {
    this.setState({
      title: value,
    });
  }

  handleKeyUp = e => {
    const keyCode = e.keyCode;
    if (keyCode === 13) {
      // enter
      this.handleSave();
    } else if (keyCode === 27) {
      // escape
      this.props.onCancel();
    }
  }

  handleSave = () => {
    if (this.state.title.trim().length > 0) {
      const { item } = this.props;
      this.props.onSave({
        ...item,
        title: this.state.title.trim(),
      });
      if (item.id === 'new') {
        this.setState({
          title: '',
        });
      }
    } else {
      this.props.onCancel();
    }
  }

  getHintText = () => {
    const { type, item } = this.props;
    if (item.id !== 'new') {
      return 'Title';
    }
    switch (type) {
    case 'projects':
      return 'Add project';
    case 'features':
      return 'Add feature';
    case 'todos':
      return 'Add todo';
    default:
      return 'Add item';
    }
  }

  render() {
    const {
      item,
      onCancel,
    } = this.props;

    return (
      <React.Fragment key={item.id}>
        <ListItem
          disabled
          primaryText={
            <div className="title">
              <TextField
                hintText={this.getHintText()}
                value={this.state.title}
                onChange={this.handleChange}
                onKeyUp={this.handleKeyUp}
                autoFocus={item.id !== 'new'}
              />
              {item.id === 'new' && this.state.title.trim().length > 0 &&
                <IconButton onClick={this.handleSave}>
                  <CircleAddIcon/>
                </IconButton>
              }
            </div>
          }
          rightIconButton={item.id !== 'new' ?
            <div className="buttons-wrapper">
              <FlatButton label="Cancel" type="button" onClick={onCancel}/>
              <FlatButton label="Save" type="button" primary={true} disabled={this.state.title.trim().length === 0} onClick={this.handleSave}/>
            </div>
            :
            null
          }
        />
        {item.id !== 'new' &&
          <Divider/>
        }
      </React.Fragment>
    );
  }
}

export default ItemsListItemEdit;
