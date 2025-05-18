import s from "./Header.module.sass";
import { useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  const isShowHeader = location.pathname === "/filter";
  return (
    <div className={`${s.container} ${isShowHeader ? s.noshow : ""}`}>
      <div className={s.logo}>
        <img
          src="/images/header/share.svg"
          width={159}
          height={56}
          alt="logo"
        />
        <img
          src="/images/header/pro.svg"
          width={156}
          height={44}
          className={s.pro}
          alt="logo"
        />
      </div>
    </div>
  );
}
