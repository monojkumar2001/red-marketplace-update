import style from "../../styles/section/PageBanner.module.css";
import Link from "next/link";
const PageBanner = ({ title, linkTitle }) => {
  return (
    <>
      <div className={style.page_banner}>
        <div className="container">
          <div className={style.page_banner_content}>
            <div className={style.banner_inner}>
              <h2>{title}</h2>
              <div className={style.page_route}>
                <Link href="/">Home</Link>
                <p>/ {linkTitle} / {title} </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageBanner;
