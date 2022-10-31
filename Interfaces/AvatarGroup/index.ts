export interface AvatarGroupProps {
  size?: 64 | 48 | 40 | 36 | 32 | 28 | 24 | 20 | 16;
  limit?: number;
  users: AvatarGroupItemProps[];
  space?: string;
  className?: string;
  overflow?: string;
}

export interface AvatarGroupItemProps {
  style: string;
  type: string;
  avatar?: string;
  username?: string;
  status?: true | false;
  className?: string;
}
