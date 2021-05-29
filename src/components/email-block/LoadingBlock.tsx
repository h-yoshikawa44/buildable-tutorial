import React, { VFC } from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import { makeStyles } from '@material-ui/core';
import { Box } from 'grommet';

const useStyle = makeStyles({
  box: {
    borderRadius: '6px',
  },
});

const LoadingBlock: VFC = () => {
  const classes = useStyle();
  return (
    <Box gap="medium">
      <Skeleton
        variant="rect"
        width="100%"
        height={80}
        animation="wave"
        className={classes.box}
      />
      <Box gap="xsmall">
        {[...new Array(5)].map((value, key) => (
          <Skeleton
            key={`${value}-${key}`}
            variant="rect"
            width="100%"
            height={10}
            animation="wave"
            className={classes.box}
          />
        ))}
      </Box>
      <Skeleton
        variant="rect"
        width="100%"
        height={50}
        animation="wave"
        className={classes.box}
      />
      <Skeleton
        variant="rect"
        width="100%"
        height={50}
        animation="wave"
        className={classes.box}
      />
    </Box>
  );
};

export default LoadingBlock;
