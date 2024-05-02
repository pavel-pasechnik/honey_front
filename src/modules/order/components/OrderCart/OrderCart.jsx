import { useSelector } from 'react-redux';
import { selectProducts } from '@redux/cart/cartSlice';
import GoBackButton from 'shared/components/GoBackButton/GoBackButton';
import OrderTitle from '../shared/OrderTitle/OrderTitle';
import OrderCartItem from '../OrderCartItem/OrderCartItem';
import s from './OrderCart.module.scss';

const OrderCart = () => {
  const productList = useSelector(selectProducts);
  const totalPrice =
    productList.reduce((acc, { price }) => {
      return acc + price;
    }, 0) + 'грн';

  return (
    <div className={s.orderCartWrapper}>
      <GoBackButton
        id="arrow-link"
        title="Повернутися до покупок"
        className={s.orderGoBack}
      />
      <OrderTitle className={s.orderCartTitle}>Ваше замовлення:</OrderTitle>
      <ul className={s.orderCartList}>
        {productList.map((product) => {
          return (
            <li className={s.orderCartItem} key={product.id}>
              <OrderCartItem product={product} />
            </li>
          );
        })}
      </ul>
      <OrderTitle className={s.price}>
        <span>Вартість</span>
        {totalPrice}
      </OrderTitle>
    </div>
  );
};

export default OrderCart;
