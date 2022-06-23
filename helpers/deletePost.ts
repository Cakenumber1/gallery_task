import axios from 'axios';
import React from 'react';
import { IPost } from 'types';

export const deletePost = async (
  data: IPost[],
  id: number,
  setData: React.Dispatch<React.SetStateAction<IPost[]>>,
) => {
  axios.delete(`api/${id}`).then(() => {
    setData(data.filter((el) => el.id !== id));
  });
};
