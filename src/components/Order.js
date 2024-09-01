import { useNavigate } from "react-router-dom";

export default function Order() {
  const navigate = useNavigate;
  function changeToOrder() {
    navigate("/");
  }
  return (
    <div>
      <button onClick={changeToOrder}>Order</button>
    </div>
  );
}
