import { h, Component } from 'preact';

const SearchBar = ({...props}) => {
  return (
    <input {...props} name="query" type="search"/>
  );
};

export default SearchBar;
