import { useParams } from "react-router-dom";

export default function BlogDetail() {
  const urlParams = useParams();
  return (
    <>
      <h1>BlogDetail</h1>
      <p>Halo ini detail {urlParams.slug}</p>
    </>
  );
}
