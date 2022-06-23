import {
  Box,
} from '@mui/material';
import FilterComponent from 'components/FilterComponent';
import GalleryComponent from 'components/GalleryComponent';
import HeaderComponent from 'components/HeaderComponent';
import { getData } from 'helpers/getData';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { IPost } from 'types';

const Home: NextPage = () => {
  const router = useRouter();
  // Queries onload
  const filterQuery = router.query.filter ? String(router.query.filter) : undefined;
  const [filter, setFilter] = useState(filterQuery || 'Show All');
  const [data, setData] = useState<IPost[]>([]);
  const [next, setNext] = useState(true);
  const [loading, setLoading] = useState(true);

  // page refresh
  useEffect(() => {
    setFilter(filterQuery || 'Show All');
    setData([]);
  }, [filterQuery]);

  // filter change
  useEffect(() => {
    if (filter === 'Show All') {
      window.history.pushState(null, '', '/');
    } else {
      window.history.pushState(null, '', `/?filter=${filter}`);
    }
    getData([], setData, setNext, filter).then(() => setLoading(false));
  }, [filter]);

  return (
    <Box>
      <HeaderComponent />
      <FilterComponent filter={filter} setFilter={setFilter} />
      <GalleryComponent
        data={data}
        loading={loading}
        filter={filter}
        setFilter={setFilter}
        setData={setData}
        setLoading={setLoading}
        next={next}
        setNext={setNext}
      />
    </Box>
  );
};

export default Home;
