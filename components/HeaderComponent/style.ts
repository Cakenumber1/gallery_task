export const style = {
  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    p: '16px 24px',
    width: '100%',
    height: '400px',
    backgroundColor: '#28293E',
  },
  headerElements: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    '@media (min-width: 1040px)': {
      justifyContent: 'space-around',
    },
  },
  nav: {
    display: 'none',
    justifyContent: 'space-between',
    width: '30%',
    '& > *': {
      fontSize: '16px',
      color: '#FFFFFF !important',
    },
    '@media (min-width: 1040px)': {
      display: 'flex',
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
