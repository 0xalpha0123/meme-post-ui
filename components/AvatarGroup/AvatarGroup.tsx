import React from "react";
import Avatar from "../Avatar/Avatar";

interface AvatarGroupProps {
  size?: 64 | 48 | 40 | 36 | 32 | 28 | 24 | 20 | 16;
  limit?: number;
  users: AvatarGroupItemProps[];
  space?: string;
  className?: string;
  overflow?: string;
}

interface AvatarGroupItemProps {
  style: string;
  type: string;
  avatar?: string;
  username?: string;
  status?: true | false;
  className?: string;
}

const AvatarGroup = (props: AvatarGroupProps) => {
  const space = props.space || "-space-x-8";
  const size = props.size || 48;
  const className = props.className || "";
  const users = props.users;

  return (
    <div className={`flex animate duration-300 ${space} ${className}`}>
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
