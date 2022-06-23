import axios from 'axios';
import React from 'react';
import { IPost } from 'types';

export const getData = async (
  data: IPost[],
  setData: React.Dispatch<React.SetStateAction<IPost[]>>,
  setNext: React.Dispatch<React.SetStateAction<boolean>>,
  filter?: string,
) => {
  const res = await axios.get('/api/', { params: { offset: data.length, filter } });
  if (res.data.length > 12) {
    setNext(true);
  } else {
    setNext(false);
  }
  if (data) {
    setData([...data, ...res.data.slice(0, 12)]);
  } else {
    setData(res.data);
  }
};
