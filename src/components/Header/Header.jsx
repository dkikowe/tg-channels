import s from "./Header.module.sass";
import { useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const isShowHeader =
    location.pathname === "/filter" ||
    location.pathname === "/premium" ||
    location.pathname === "/recommend";
  return (
    <div className={`${s.container} ${isShowHeader ? s.noshow : ""}`}>
      <div className={s.logo}>
        <img
          src="/images/header/share.png"
          width={159}
          height={56}
          alt="logo"
        />
        <img
          src="/images/header/pro.png"
          width={156}
          className={s.pro}
          alt="logo"
          onClick={() => navigate("/premium")}
        />
      </div>
    </div>
  );
}
