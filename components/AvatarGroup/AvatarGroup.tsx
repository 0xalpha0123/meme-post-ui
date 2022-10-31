import React from "react";
import Avatar from "../Avatar/Avatar";

import { AvatarGroupProps } from "../../Interfaces/AvatarGroup";

const AvatarGroup = (props: AvatarGroupProps) => {
  const space = props.space || "-space-x-8";
  const size = props.size || 48;
  const className = props.className || "";
  const users = props.users;

  return (
    <div className={`flex ${space} ${className}`}>
      {users.map((user, i) => (
        <Avatar
          key={i}
          size={size}
          style={user.style}
          type={user.type}
          avatar={user.avatar}
          username={user.username}
          status={user.status}
          className={user.className}
        />
      ))}
      {!!props.overflow && (
        <Avatar
          size={size}
          style={props.users[0].style}
          type="initials"
          username={props.overflow}
          className={props.users[0].className}
        />
      )}
    </div>
  );
};

export default AvatarGroup;
