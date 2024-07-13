import { FC, useMemo } from 'react';
import { TConstructorIngredient } from '@utils-types';
import { BurgerConstructorUI } from '@ui';
import {
  resetOrder,
  selectOrderBurgerIsLoading,
  selectOrderBurger,
  sendOrderBurger
} from '../../services/orderBurger';
import { useDispatch, useSelector } from '../../services/store';
import {
  resetConstructor,
  selectSelectedBun,
  selectSelectedIngredients
} from '../../services/ingredientsConstructor';
import { useNavigate } from 'react-router-dom';
import { selectUser } from '../../services/user';

export const BurgerConstructor: FC = () => {
  /** TODO: взять переменные constructorItems, orderRequest и orderModalData из стора */
  // const constructorItems = {
  //   bun: {
  //     price: 0
  //   },
  //   ingredients: []
  // };

  // const orderRequest = false;

  // const orderModalData = null;

  const dispatch = useDispatch();
  const navigator = useNavigate();

  const selectedBun = useSelector(selectSelectedBun);
  const selectedIngredients = useSelector(selectSelectedIngredients);

  const user = useSelector(selectUser);

  const constructorItems = {
    bun: selectedBun,
    ingredients: selectedIngredients
  };

  const orderRequest = useSelector(selectOrderBurgerIsLoading);
  const orderModalData = useSelector(selectOrderBurger);
  console.log({ orderModalData });

  const onOrderClick = () => {
    if (!constructorItems.bun || orderRequest) return;

    if (!user) {
      navigator('/login');
      return;
    }
    const ingredientsIds = constructorItems.ingredients.map(
      (item: TConstructorIngredient) => item._id
    );

    dispatch(
      sendOrderBurger([...ingredientsIds, constructorItems.bun._id])
    ).then(() => {
      dispatch(resetConstructor());
    });
  };

  // const closeOrderModal = () => {};
  const closeOrderModal = () => {
    dispatch(resetOrder());
    navigator('/');
  };

  // TODO: было
  const price = useMemo(
    () =>
      (constructorItems.bun ? constructorItems.bun.price * 2 : 0) +
      constructorItems.ingredients.reduce(
        (s: number, v: TConstructorIngredient) => s + v.price,
        0
      ),
    [constructorItems]
  );

  // return null;

  return (
    <BurgerConstructorUI
      price={price}
      orderRequest={orderRequest}
      constructorItems={constructorItems}
      orderModalData={orderModalData}
      onOrderClick={onOrderClick}
      closeOrderModal={closeOrderModal}
    />
  );
};
