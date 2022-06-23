import {
  Box,
  Button,
  MenuItem,
  Select, SelectChangeEvent,
} from '@mui/material/';
import React from 'react';

import { style } from './style';

const filters = ['Show All', 'Design', 'Branding', 'Illustration', 'Motion'];

type Props = {
  filter: string | undefined
  setFilter: React.Dispatch<React.SetStateAction<string>>
};

const FilterComponent: React.FC<Props> = ({
  filter, setFilter,
}) => {
  const handleChange = (event: SelectChangeEvent) => {
    const f = event.target.value as string;
    if (f !== filter) setFilter(f);
  };

  return (
    <Box sx={style.main}>
      <Box sx={style.filterDesc}>
        {filters.map((f) => (
          <Button
            key={f}
            sx={f !== filter ? style.filterButton : style.filterCurButton}
            onClick={() => { if (f !== filter) setFilter(f); }}
          >
            {f}
          </Button>
        ))}
      </Box>
      <Select
        sx={style.filterMob}
        defaultValue="Show All"
        value={filter}
        fullWidth
        onChange={handleChange}
      >
        {filters.map((f) => <MenuItem key={f} value={f}>{f}</MenuItem>)}
      </Select>
    </Box>
  );
};

export default FilterComponent;
