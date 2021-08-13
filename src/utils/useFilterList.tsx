import React from 'react'
import { MutatedEvent } from '../typings';
import _ from 'lodash'
const useFilterList = () => {
const [eventFilter, setEventFilter] = React.useState<string[]>([]);
const filterEvents = (e: MutatedEvent) => {
  if (eventFilter.length === 0 || !e.parent.eventTags) {
    return true;
  }

  let intersect: string[] = _.intersection(
    eventFilter,
    e.parent.eventTags as string[]
  );
  return intersect.length === eventFilter.length;
};

const handleFilter: React.MouseEventHandler = (
  e: React.MouseEvent<HTMLButtonElement>
) => {
  let currentFilter: string[] = eventFilter;
  const hasTag = currentFilter.indexOf(e.currentTarget.value) > -1;
  if (hasTag) {
    const newFilter = _.pull(currentFilter, e.currentTarget.value);
    setEventFilter([...newFilter]);
    return;
  }

  setEventFilter([e.currentTarget.value, ...eventFilter]);
};

const handleClear: React.MouseEventHandler = () => {
  setEventFilter([]);
};

return {
    list: eventFilter,
    setList: setEventFilter,
    clear: handleClear,
    filter: filterEvents,
    onFilter: handleFilter,
}
}

export default useFilterList



