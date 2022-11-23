import React from "react";

import { GroupOption } from "./type";
import Item from "./Item";

interface GroupItemProps {
  item: GroupOption;
}

const GroupItem: React.FC<GroupItemProps> = ({ item }) => {
  return (
    <>
      {item.options.length > 0 && (
        <>
          <div
            className={`pr-2 py-2 cursor-default select-none truncate font-bold text-primary_white-600 dark:text-primary_dark-600`}
          >
            {item.label}
          </div>

          {item.options.map((item, index) => (
            <Item key={index} item={item} />
          ))}
        </>
      )}
    </>
  );
};

export default GroupItem;
