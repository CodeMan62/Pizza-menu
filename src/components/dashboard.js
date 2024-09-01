import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate;
  function changeToDashboard() {
    navigate("/");
  }
  return <div>Hello</div>;
}
