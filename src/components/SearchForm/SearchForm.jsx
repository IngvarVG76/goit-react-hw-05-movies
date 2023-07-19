import React from 'react';
import PropTypes from 'prop-types';

import { Form, Input, Button } from './SearchForm.styled';

const SearchForm = ({ value, onSubmit, onChange }) => {
  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        required
        placeholder="Search movies..."
        value={value}
        onChange={e => onChange(e.target.value)}
      />
      <Button type="submit">Search</Button>
    </Form>
  );
};

SearchForm.propTypes = {
  value: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchForm;
