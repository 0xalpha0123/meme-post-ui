export interface PostProps {
  avatar: string;
  className?: string;
}

export interface PostListProps {
  posts: Post[];
}

export interface Post {
  username?: string;
  avatar?: string;
  status?: true | false;
  contents: string;
  image?: string;
  commenters: User[];
  share_number: number;
}

export interface User {
  username?: string;
  avatar?: string;
}

export interface PostCommentProps {
  avatar: string;
}
