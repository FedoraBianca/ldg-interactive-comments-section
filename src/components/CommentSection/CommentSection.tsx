import React, { useState } from 'react';
import moment from 'moment';
import { IComment } from '../../interfaces/comment';
import CommentBox from '../CommentBox';
import ReplyBox from '../ReplyBox';
import { CommentSectionWrapper, SideLine } from "./CommentSection.style";

const generateId = (length: number): string => {
  let result = '';

  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
};

const CommentSection: React.FC = () => {
  const initialCommentList: IComment[] = [
    {
      id: 1,
      content: "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
      createdAt: "1 month ago",
      score: 12,
      user: {
        image: {
          "png": "./images/avatars/image-amyrobson.png",
          "webp": "./images/avatars/image-amyrobson.webp"
        },
        username: "amyrobson"
      },
      replies: [],
    },
    {
      id: 2,
      content: "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
      createdAt: "2 weeks ago",
      score: 5,
      user: {
        image: {
          png: "./images/avatars/image-maxblagun.png",
          webp: "./images/avatars/image-maxblagun.webp"
        },
        username: "maxblagun"
      },
      replies: [3, 4],
    },
    {
      id: 3,
      content: "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
      createdAt: "1 week ago",
      score: 4,
      replyingTo: "maxblagun",
      user: {
        image: {
          png: "./images/avatars/image-ramsesmiron.png",
          webp: "./images/avatars/image-ramsesmiron.webp"
        },
        username: "ramsesmiron"
      },
      replies: [],
    },
    {
      id: 4,
      content: "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
      createdAt: "2 days ago",
      score: 2,
      replyingTo: "ramsesmiron",
      user: {
        image: {
          png: "./images/avatars/image-juliusomo.png",
          webp: "./images/avatars/image-juliusomo.webp"
        },
        username: "juliusomo"
      },
      replies: [],
    }
  ];

  const [comments, setComments] = useState<IComment[]>(initialCommentList);

  const handleCommentChange = (value: IComment) => {
    const updatedComentList: IComment[] = comments.map((comment: IComment) => comment.id === value.id ? value : comment);
    setComments(updatedComentList);
  }

  const addNewComment = (value: string) => {
    const newComment: IComment = {
      id: Number(generateId(10)),
      content: value,
      createdAt: moment().format('DD-MM-YYYY'),
      score: 0,
      user: {
        image: {
          png: "./images/avatars/image-juliusomo.png",
          webp: "./images/avatars/image-juliusomo.webp"
        },
        username: "juliusomo"
      },
      replies: [],
    };
    setComments([...comments, newComment]);
  };

  return (
    <CommentSectionWrapper>
      {comments.map((comment: IComment) => typeof comment.replyingTo === 'undefined' && (
        <div key={comment.id} className='w-100 d-flex flex-column'>
          <CommentBox comment={comment} onChange={handleCommentChange} className='mb-3' />
          {comment.replies && (
            <div className='d-flex flex-row'>
              <SideLine />
              <div className='d-flex flex-column w-100'>
                {comment.replies.length > 0 && comments.map((item: IComment) => 
                  comment.replies.includes(item.id) &&
                  (<CommentBox key={item.id} comment={item} onChange={handleCommentChange} className='mb-3' />)
                )}
              </div>
            </div>
          )}
        </div>
      ))}
      <ReplyBox buttonText='Send' onSubmit={addNewComment} />
    </CommentSectionWrapper>
  );
};

export default CommentSection;