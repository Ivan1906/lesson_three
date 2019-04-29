import React from 'react';

export const Filters = ({onChange, onSelect}) => {
  let inputRef = React.createRef();
  let selectRef = React.createRef();

  let onChangeText = () => onChange(inputRef.current.value);
  let onSelectShort = () => onSelect(selectRef.current.value);

  return (
    <div className="center">
      <input
        type="text"
        placeholder="Search post by Name"
        ref={inputRef}
        onChange={onChangeText}/>

      <select onChange={onSelectShort} ref={selectRef}>
        <option value="none">None short</option>
        <option value="title">Short by title post</option>
        <option value="date">Short by date post</option >
      </select>
    </div>
  );
};
