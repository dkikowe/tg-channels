import s from "./Catalog.module.sass";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const categories = [
  { id: 1, title: "Новости и СМИ", img: "/images/main/card.png" },
  { id: 2, title: "Развлечения и Юмор", img: "/images/main/card.png" },
  { id: 3, title: "Познавательное", img: "/images/main/card.png" },
];

export default function Catalog() {
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [activeSort, setActiveSort] = useState("По кол. подписчиков");
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const filtered = categories.filter((cat) =>
    cat.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={s.container}>
      <div className={s.header}>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_42_1976)">
            <path
              d="M15.1869 5.86358L14.5836 4.87388L14.1447 5.94667C13.7508 6.90951 13.1866 7.4617 12.5967 7.46173C11.4729 7.46177 10.9521 6.03378 10.8185 5.12069C10.6261 3.80597 10.971 2.45838 11.5439 1.2788C11.544 1.27868 12.1651 0 12.1651 0L10.8235 0.470153C8.42716 1.30988 6.41891 2.94942 5.01575 5.21151C3.64723 7.41785 2.92687 10.0939 2.93253 12.9493C2.93253 15.1189 3.70115 16.9471 5.15522 18.2363C6.43804 19.3736 8.1586 20 9.99998 20C11.8413 20 13.5619 19.3736 14.8447 18.2363C16.2988 16.9471 17.0674 15.1189 17.0674 12.9493C17.0674 10.1076 16.5226 8.05477 15.1869 5.86358Z"
              fill="#FF4F19"
            />
            <path
              d="M5.01575 5.21148C3.64723 7.41781 2.92687 10.0939 2.93253 12.9493C2.93253 15.1189 3.70115 16.9471 5.15522 18.2363C6.43804 19.3736 8.1586 20 9.99998 20V0.797363C7.96634 1.7019 6.25495 3.21369 5.01575 5.21148Z"
              fill="#FF7800"
            />
            <path
              d="M13.04 11.7148L12.6864 11.1348L12.4292 11.7635C12.1983 12.3278 11.8676 12.6515 11.5219 12.6515C10.8633 12.6515 10.558 11.8146 10.4797 11.2794C10.367 10.5089 10.5691 9.71904 10.9049 9.02769C10.905 9.02761 11.2689 8.2782 11.2689 8.2782L10.4826 8.55375C9.07819 9.04588 7.90115 10.0068 7.0788 11.3326C6.27672 12.6257 5.85451 14.1942 5.85787 15.8677C5.85787 17.1393 6.30834 18.2108 7.16056 18.9663C7.91239 19.6329 8.92083 20 10 20C11.0793 20 12.0877 19.6329 12.8395 18.9663C13.6917 18.2108 14.1422 17.1393 14.1422 15.8677C14.1421 14.2022 13.8228 12.999 13.04 11.7148Z"
              fill="#FF7800"
            />
            <path
              d="M7.07874 11.3326C6.27665 12.6257 5.85445 14.1941 5.85781 15.8676C5.85781 17.1392 6.30828 18.2107 7.1605 18.9663C7.91233 19.6329 8.92073 20 9.99997 20V8.74548C8.80809 9.27561 7.80503 10.1617 7.07874 11.3326Z"
              fill="#FF9900"
            />
          </g>
          <defs>
            <clipPath id="clip0_42_1976">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <p className={s.title}>Подборка недели</p>
      </div>
      <div className={s.main}>
        <div className={s.mainHeader}>
          <p className={s.mainHeaderTitle}>Новости и СМИ</p>
        </div>
        <div className={s.controls}>
          <div className={s.searchContainer}>
            <input
              className={s.searchInput}
              type="text"
              placeholder="Поиск"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className={s.containers}>
            <div
              className={s.sortContainer}
              onClick={() => setIsSortOpen(!isSortOpen)}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.35423 3.75C4.76844 3.75 5.10423 4.08579 5.10423 4.5V11.7802L6.80715 10.1992C7.1107 9.91733 7.58525 9.93494 7.86708 10.2385C8.14891 10.542 8.1313 11.0166 7.82775 11.2984L4.86453 14.0496C4.57282 14.3205 4.12033 14.3162 3.83374 14.04L0.979506 11.2888C0.68128 11.0013 0.672553 10.5265 0.960015 10.2283C1.24748 9.93007 1.72227 9.92135 2.0205 10.2088L3.60423 11.7354V4.5C3.60423 4.08579 3.94002 3.75 4.35423 3.75ZM9.3311 4.97049C9.3311 4.55628 9.66689 4.22049 10.0811 4.22049H16.5C16.9142 4.22049 17.25 4.55628 17.25 4.97049C17.25 5.3847 16.9142 5.72049 16.5 5.72049H10.0811C9.66689 5.72049 9.3311 5.3847 9.3311 4.97049ZM9.3311 8.58157C9.3311 8.16736 9.66689 7.83157 10.0811 7.83157H14.666C15.0802 7.83157 15.416 8.16736 15.416 8.58157C15.416 8.99579 15.0802 9.33157 14.666 9.33157H10.0811C9.66689 9.33157 9.3311 8.99579 9.3311 8.58157ZM9.3311 12.1927C9.3311 11.7784 9.66689 11.4427 10.0811 11.4427H12.8321C13.2463 11.4427 13.5821 11.7784 13.5821 12.1927C13.5821 12.6069 13.2463 12.9427 12.8321 12.9427H10.0811C9.66689 12.9427 9.3311 12.6069 9.3311 12.1927Z"
                  fill="url(#paint0_linear_2003_5101)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2003_5101"
                    x1="-1.26094"
                    y1="9"
                    x2="21.0656"
                    y2="9"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#F29D4E" />
                    <stop offset="0.427885" stop-color="#E0524E" />
                    <stop offset="1" stop-color="#AF407A" />
                  </linearGradient>
                </defs>
              </svg>
              <p className={s.sortText}>{activeSort}</p>
              {isSortOpen && (
                <div className={s.sortDropdown}>
                  <div
                    className={`${s.sortOption} ${
                      activeSort === "По кол. подписчиков" ? s.active : ""
                    }`}
                    onClick={() => {
                      setActiveSort("По кол. подписчиков");
                      setIsSortOpen(false);
                    }}
                  >
                    <span>По кол. подписчиков</span>
                  </div>
                  <div
                    className={`${s.sortOption} ${
                      activeSort === "По алфавитному порядку" ? s.active : ""
                    }`}
                    onClick={() => {
                      setActiveSort("По алф. порядку");
                      setIsSortOpen(false);
                    }}
                  >
                    <span>По алфавитному порядку</span>
                  </div>
                </div>
              )}
            </div>
            <div
              className={s.filterContainer}
              onClick={() => navigate("/filter")}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.25 4.5H15.75M4.5 9H13.5M6.75 13.5H11.25"
                  stroke="url(#paint0_linear_106_785)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_106_785"
                    x1="2.25"
                    y1="4.5"
                    x2="15.75"
                    y2="13.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#F29D4E" />
                    <stop offset="0.427885" stopColor="#E0524E" />
                    <stop offset="1" stopColor="#AF406A" />
                  </linearGradient>
                </defs>
              </svg>
              <p className={s.filterText}>Фильтры</p>
            </div>
          </div>
        </div>
        <div className={s.cards} onClick={() => navigate("/channel")}>
          {filtered.length === 0 ? (
            <div
              style={{
                fontFamily: "Rubik, sans-serif",
                fontWeight: 400,
                fontSize: 16,
                lineHeight: "110%",
                letterSpacing: "-0.01em",
                color: "#fff",
                marginTop: 10,
                textAlign: "center",
                width: "100%",
              }}
            >
              По вашему запросу ничего не найдено
            </div>
          ) : (
            filtered.map((cat) => (
              <img
                key={cat.id}
                src={cat.img}
                onClick={() => navigate("/channel")}
                width={358}
                alt=""
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
