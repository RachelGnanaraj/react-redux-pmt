import React from 'react';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import ContentClearIcon from 'material-ui/svg-icons/content/clear';

import './Search.css';

export const Search = ({ value, onChange }) => (
  <div className="search-component">
    {value.length > 0 &&
      <IconButton onClick={() => onChange('')}>
        <ContentClearIcon/>
      </IconButton>
    }
    <TextField
      hintText="Search"
      value={value}
      onChange={(e, val) => onChange(val)}
    />
  </div>
);

export default Search;
