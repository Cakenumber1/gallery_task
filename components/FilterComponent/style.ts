export const style = {
  main: {
    p: '23px',
  },
  filterDesc: {
    display: 'none',
    width: '100%',
    color: '#707070',
    justifyContent: 'space-evenly',
    '@media (min-width: 1040px)': {
      display: 'flex',
    },
  },
  filterButton: {
    fontSize: '16px',
    color: '#707070',
  },
  filterCurButton: {
    fontSize: '16px',
    color: '#16CD53',
  },
  filterMob: {
    pr: '0px',
    display: 'block',
    backgroundColor: 'white',
    '@media (min-width: 1040px)': {
      display: 'none',
    },
    '& > *': {
      width: 'auto !important',
    },
  },
  contact: {
    display: 'none',
    fontSize: '14px',
    color: '#FFFFFF',
    border: '2px solid #707070',
    borderRadius: '15px',
    p: '15px 35px',
    '@media (min-width: 1040px)': {
      display: 'flex',
    },
  },
  logo: {
    display: 'flex',
    width: '148px',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoImg: {
    width: '47px',
    height: '47px',
  },
  logoText: {
    fontSize: '24px',
    fontWeight: 700,
  },
  title: {
    pt: '80px',
    pb: '40px',
    fontWeight: 800,
    fontSize: '56px',
    '@media (min-width: 1040px)': {
      fontSize: '72px',
    },
  },
  desc: {
    color: '#707070',
    textAlign: 'center',
  },
};
