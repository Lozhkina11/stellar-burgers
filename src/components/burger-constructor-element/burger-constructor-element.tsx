import { FC, memo } from 'react';
import { BurgerConstructorElementUI } from '@ui';
import { BurgerConstructorElementProps } from './type';
import {
  moveDownSelectedIngredient,
  moveUpSelectedIngredient,
  removeSelectedIngredient
} from '../../services/ingredientsConstructor';
import { useDispatch } from 'react-redux';

export const BurgerConstructorElement: FC<BurgerConstructorElementProps> = memo(
  ({ ingredient, index, totalItems }) => {
    const dispatch = useDispatch();

    const handleMoveDown = () => {
      dispatch(moveDownSelectedIngredient(ingredient));
    };

    const handleMoveUp = () => dispatch(moveUpSelectedIngredient(ingredient));

    const handleClose = () => dispatch(removeSelectedIngredient(ingredient));

    // const handleMoveDown = () => {};
    // const handleMoveUp = () => {};
    // const handleClose = () => {};

    return (
      <BurgerConstructorElementUI
        ingredient={ingredient}
        index={index}
        totalItems={totalItems}
        handleMoveUp={handleMoveUp}
        handleMoveDown={handleMoveDown}
        handleClose={handleClose}
      />
    );
  }
);
