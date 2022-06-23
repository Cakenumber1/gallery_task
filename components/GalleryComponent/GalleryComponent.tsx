import DeleteIcon from '@mui/icons-material/Delete';
import {
  Box, Button, CircularProgress, IconButton,
} from '@mui/material';
import { deletePost } from 'helpers/deletePost';
import { getData } from 'helpers/getData';
import React, { useState } from 'react';

import { style } from './style';

type IPost = {
  id: number,
  tag: string,
  name: string
};
type Props = {
  data: IPost[]
  loading: boolean
  next: boolean
  filter: string | undefined
  setFilter: React.Dispatch<React.SetStateAction<string>>
  setData: React.Dispatch<React.SetStateAction<IPost[]>>
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
  setNext: React.Dispatch<React.SetStateAction<boolean>>,
};

const GalleryComponent: React.FC<Props> = ({
  data,
  loading,
  next,
  filter,
  setFilter,
  setData,
  setNext,
  setLoading,
}) => {
  const [selected, setSelected] = useState<number>();
  const handleSelect = (index: number) => {
    if (selected === index) {
      setSelected(undefined);
    } else {
      setSelected(index);
    }
  };
  const handleTagClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    const f = (e.target as HTMLInputElement).innerText;
    if (f !== filter) {
      setFilter(f);
    }
  };
  const handleDelete = (e: React.MouseEvent<HTMLElement>, id: number) => {
    e.stopPropagation();
    deletePost(data, id, setData);
  };
  const handleLoadClick = () => {
    setLoading(true);
    getData(data, setData, setNext, filter).then(() => setLoading(false));
  };
  return (
    <Box sx={style.main}>
      <Box sx={style.gallery}>
        {(data)!.map((item: IPost) => (
          <Box
            onClick={() => handleSelect(item.id)}
            sx={selected !== item.id ? style.galleryItem : style.selectedItem}
            key={item.id}
          >
            {selected === item.id && (
              <IconButton
                onClick={(e) => handleDelete(e, item.id)}
                sx={{
                  position: 'absolute', top: '10px', right: '10px',
                }}
                aria-label="delete"
              >
                <DeleteIcon />
              </IconButton>
            )}
            <Box>
              <Button
                variant="contained"
                color="error"
                sx={style.tagButton}
                onClick={(e) => handleTagClick(e)}
              >{item.tag}
              </Button>
              <Box sx={style.name}>{item.name}</Box>
            </Box>
          </Box>
        ))}
      </Box>
      <Box>
        {loading ? <CircularProgress color="error" /> : (
          <Button
            disabled={!next}
            variant="contained"
            color="error"
            sx={style.loadMoreButton}
            onClick={handleLoadClick}
          >Load More
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default GalleryComponent;
