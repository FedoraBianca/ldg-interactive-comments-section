import React, { useState } from 'react';
import Button from '../Button';
import { CommentFormWrapper } from "./CommentForm.style";

interface ICommentFormProps {
  content: string;
  onSubmit: (value: string) => void;
  buttonText?: string;
  layoutDirection?: 'row' | 'column';
  className?: string;
}


const CommentForm: React.FC<ICommentFormProps> = ({
  content,
  onSubmit,
  buttonText = 'Submit',
  layoutDirection = 'row',
  className = ''
}) => {
  const [value, setValue] = useState<string>(content);

  const handleValueChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = () => {
    onSubmit(value);
  };

  return (
    <CommentFormWrapper className={`d-flex flex-${layoutDirection} align-items-start ${className}`}>
      <textarea id="content" name="content" value={value} onChange={handleValueChange} />
      <Button
        type='button'
        onClick={handleSubmit}
        className={`ml-3 ${layoutDirection === 'column' && 'align-self-end mt-3'}`}>
        {buttonText}
      </Button>
    </CommentFormWrapper>
  );
};

export default CommentForm;