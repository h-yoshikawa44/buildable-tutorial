import React, { FC, ComponentProps } from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Color from 'color';
import theme from '../../theme';

type Argument = {
  style: React.CSSProperties;
  color: string;
  background: string;
};

const { colors } = theme;

// const borderStyle = {};

const useStyles = ({ style, color, background }: Argument) =>
  makeStyles(() => ({
    button: {
      textTransform: 'none',
      fontSize: theme.fontSizes.medium,
      fontWeight: 600,
      boxShadow: 'none',
      // borderRadius: borderStyle['border-radius'],
      color,
      background,
      '&:hover': {
        boxShadow: 'none',
        color:
          !background || background === 'transparent'
            ? Color(color)
                .darken(10 / 100)
                .hex()
            : color,
        background:
          background && background !== 'transparent'
            ? Color(background)
                .darken(5 / 100)
                .hex()
            : 'transparent',
      },
      '&:disabled': {
        background: colors['grey-3'],
        pointerEvents: 'all !important',
        '&:hover': {
          cursor: 'not-allowed !important',
          background: colors['grey-3'],
        },
      },
      ...style,
    },
  }))();

type Props = {
  color: string;
  background: string;
} & Omit<ComponentProps<typeof Button>, 'color'>;

const MatButton: FC<Props> = ({
  children,
  onClick = () => {},
  variant = 'text',
  color = colors.black,
  background = 'transparent',
  style = {},
  ...props
}) => {
  if (typeof children !== 'string') {
    throw new Error('MatButton received children that is not string');
  }
  const classes = useStyles({ style, color, background });
  return (
    <Button
      variant={variant}
      className={classes.button}
      onClick={onClick}
      {...props}
    >
      {children}
    </Button>
  );
};

export default MatButton;
