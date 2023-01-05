import { createRef, SyntheticEvent, useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { CartType } from "../../graphql/cart";
import { checkedCartState } from "../../recoils/cart";
import CartItem from "./item";
import WillPay from "../willPay";
import { useNavigate } from "react-router-dom";
import React from "react";

const CartList = ({ items }: { items: CartType[] }) => {
  const navigate = useNavigate();
  const [checkedCartData, setCheckedCartData] =
    useRecoilState(checkedCartState);
  const formRef = useRef<HTMLFormElement>(null);
  const checkboxRefs = items.map(() => createRef<HTMLInputElement>());
  const [formData, setFormData] = useState<FormData>();

  const enabledItems = items.filter((item) => item.product.createdAt);

  const setAllCheckedFromItems = () => {
    // 개별아이템 선택시
    if (!formRef.current) return;
    const data = new FormData(formRef.current);
    const selectedCount = data.getAll("select-item").length;
    const allChecked = selectedCount === enabledItems.length;
    formRef.current.querySelector<HTMLInputElement>(".select-all")!.checked =
      allChecked;
  };

  const setItemsCheckedFromAll = (targetInput: HTMLInputElement) => {
    const allChecked = targetInput.checked;
    checkboxRefs
      .filter((inputElem) => {
        return !inputElem.current!.disabled;
      })
      .forEach((inputElem) => {
        inputElem.current!.checked = allChecked;
      });
  };

  const handleCheckboxChanged = (e?: SyntheticEvent) => {
    if (!formRef.current) return;
    const targetInput = e?.target as HTMLInputElement;
    if (targetInput && targetInput.classList.contains("select-all")) {
      setItemsCheckedFromAll(targetInput);
    } else {
      setAllCheckedFromItems();
    }
    const data = new FormData(formRef.current);
    setFormData(data);
  };

  const handleSubmit = () => {
    if (checkedCartData.length) {
      navigate("/payment");
    } else {
      alert("결제할 대상이 없어요");
    }
  };

  useEffect(() => {
    checkedCartData.forEach((item) => {
      const itemRef = checkboxRefs.find(
        (ref) => ref.current!.dataset.id === item.id
      );
      if (itemRef) itemRef.current!.checked = true;
    });
    setAllCheckedFromItems();
  }, []);

  useEffect(() => {
    const checkedItems = checkboxRefs.reduce<CartType[]>((res, ref, i) => {
      if (ref.current!.checked) res.push(items[i]);
      return res;
    }, []);
    setCheckedCartData(checkedItems);
  }, [items, formData]);

  return (
    <div className="cartLayout">
      <div className="cartTitle">장바구니</div>
      <form ref={formRef} onChange={handleCheckboxChanged}>
        <label>
          <div className="toggleBtn1">
            <span style={{ fontWeight: "bold", paddingBottom: "30px" }}>
              ALL
            </span>
            <input
              className="select-all"
              name="select-all"
              type="checkbox"
              role="switch"
            />
          </div>
        </label>
        <ul className="cart">
          {items.map((item, i) => (
            <CartItem {...item} key={item.id} ref={checkboxRefs[i]} />
          ))}
        </ul>
      </form>
      <WillPay submitTitle="Payment" handleSubmit={handleSubmit} />
    </div>
  );
};

export default CartList;
