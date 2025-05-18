import s from "./Header.module.sass";

export default function Header() {
  return (
    <div className={s.container}>
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
