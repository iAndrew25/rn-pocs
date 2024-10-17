import React from 'react';

import SelectableTag from './selectable-tag/selectable-tag';
import SelectableCard from './selectable-card/selectable-card';
import SelectableList from './selectable-list/selectable-list';

function Selection({
  Element,
  options,
  selected,
  onPress,
  keyExtractor = defaultKeyExtractor,
  labelExtractor = defaultLabelExtractor,
}) {
  return options.map(option => (
    <Element
      key={keyExtractor(option)}
      label={labelExtractor(option)}
      onPress={() => onPress(option)}
      isSelected={keyExtractor(option) === keyExtractor(selected)}
    />
  ));
}

const defaultLabelExtractor = option => option?.label;
const defaultKeyExtractor = option => option?.id;

Selection.SelectableTag = SelectableTag;
Selection.SelectableCard = SelectableCard;
Selection.SelectableList = SelectableList;

export default Selection;
