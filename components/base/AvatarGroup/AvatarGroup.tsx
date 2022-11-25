import React from "react";
import cx from "clsx";

import Avatar from "../Avatar";

import { DefaultProps } from "../../../helpers/utils";

interface AvatarGroupProps extends DefaultProps {
  size?: "28" | "24" | "20" | "16" | "14" | "12" | "8" | "6" | "4";
  limit?: number;
  users: AvatarGroupItemProps[];
  space?: string;
  rounded?: boolean;
  overflow?: string;
}

interface AvatarGroupItemProps extends DefaultProps {
  style: string;
  type: string;
  avatar?: string;
  username?: string;
  status?: string;
}

const AvatarGroup = (props: AvatarGroupProps) => {
  const space = props.space || "-space-x-8";
  const size = props.size;
  const className = props.className || "";
  const users = props.users;

  return (
    <div className={cx("flex transition duration-100", space, className)}>
      {users.map((user, i) => (
        <Avatar
          key={i}
          size={size}
          src={user.avatar}
          name={user.username}
          dot={user.status}
          className={user.className}
          rounded={props.rounded}
        />
      ))}
      {!!props.overflow && (
        <Avatar
          size={size}
          name={props.overflow}
          className={props.users[0].className}
          rounded={props.rounded}
        />
      )}
    </div>
  );
};

export default AvatarGroup;
