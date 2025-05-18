import s from "./TariffSwitcher.module.sass";

const tariffs = [
  { label: "3 месяца" },
  { label: "6 месяцев" },
  { label: "12 месяцев" },
];

export default function TariffSwitcher({ active, onChange }) {
  return (
    <div className={s.switcher}>
      <div className={s.inner}>
        {tariffs.map((t, i) => (
          <button
            key={t.label}
            className={[
              s.btn,
              i === 0 ? s.left : "",
              i === tariffs.length - 1 ? s.right : "",
              active === i ? s.active : "",
            ].join(" ")}
            onClick={() => onChange(i)}
            type="button"
          >
            {t.label}
          </button>
        ))}
      </div>
    </div>
  );
}
