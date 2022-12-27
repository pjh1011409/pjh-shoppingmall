import { checkedCartState } from "../../recoils/cart";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { useState } from "react";
import { useRecoilState } from "recoil";
import WillPay from "../willPay";
import PaymentModal from "./modal";
import { graphqlFetcher } from "../../queryClient";
import { EXECUTE_PAY } from "../../graphql/payment";

type PaymentInfos = string[];

const Payment = () => {
  const navigate = useNavigate();
  const [checkedCartData, setCheckedCartData] =
    useRecoilState(checkedCartState);
  const [modalShow, setModalShow] = useState(false);
  const { mutate: executePay } = useMutation((ids: PaymentInfos) =>
    graphqlFetcher(EXECUTE_PAY, ids)
  );

  const showModal = () => {
    setModalShow(true);
  };

  const proceed = () => {
    const ids = checkedCartData.map(({ id }) => id);
    executePay(ids, {
      onSuccess: () => {
        setCheckedCartData([]);
        alert("결제 완료되었습니다.");
        navigate("/products", { replace: true });
      },
    });
  };

  const cancel = () => {
    setModalShow(false);
  };

  return (
    <div>
      <WillPay submitTitle="결제하기" handleSubmit={showModal} />
      <PaymentModal show={modalShow} proceed={proceed} cancel={cancel} />
    </div>
  );
};

export default Payment;
