import Link from "next/link";

export default function App() {
  return (
    <div className="brandslider container">
      <ul className="brand-list">
        <li>
          <div className="Cbo-item">
            <Link href="/view-more/outlets-products">
              <a className="brand-link">
                <img src="/images/outlet/ison.jpg" />
                <h2>lifeboy</h2>
              </a>
            </Link>
          </div>
          <div className="hover-details">
            <Link href="/view-more/outlets-products">
              <a>Let's Go <i className="icon-right"></i></a>
            </Link>
          </div>
        </li>
        <li>
          <div className="Cbo-item">
            <Link href="/view-more/outlets-products">
              <a className="brand-link">
                <img src="/images/outlet/rm.jpg" />
                <h2>RM Enterpise</h2>
              </a>
            </Link>
          </div>
          <div className="hover-details">
            <Link href="#">
              <a>Let's Go <i className="icon-right"></i></a>
            </Link>
          </div>
        </li>
        <li>
          <div className="Cbo-item">
            <a href="#" className="brand-link">
              <img src="/images/outlet/fesh.jpg" />
              <h2>Samsung</h2>
            </a>
          </div>
          <div className="hover-details">
            <Link href="#">
              <a>Let's Go <i className="icon-right"></i></a>
            </Link>
          </div>
        </li>
        <li>
          <div className="Cbo-item">
            <a href="#" className="brand-link">
              <img src="/images/outlet/sn.jpg" />
              <h2>Sn</h2>
            </a>
          </div>
          <div className="hover-details">
            <Link href="#">
              <a>Let's Go <i className="icon-right"></i></a>
            </Link>
          </div>
        </li>
        <li>
          <div className="Cbo-item">
            <a href="#" className="brand-link">
              <img src="/images/outlet/fesh.jpg" />
              <h2>Uniliver</h2>
            </a>
          </div>
          <div className="hover-details">
            <Link href="#">
              <a>Let's Go <i className="icon-right"></i></a>
            </Link>
          </div>
        </li>
        <li>
          <div className="Cbo-item">
            <a href="#" className="brand-link">
              <img src="/images/brand/lifeboy.jpg" />
              <h2>lifeboy</h2>
            </a>
          </div>
          <div className="hover-details">
            <Link href="#">
              <a>Let's Go <i className="icon-right"></i></a>
            </Link>
          </div>
        </li>
        <li>
          <div className="Cbo-item">
            <a href="#" className="brand-link">
              <img src="/images/outlet/rm.jpg" />
              <h2>Rm</h2>
            </a>
          </div>
          <div className="hover-details">
            <Link href="#">
              <a>Let's Go <i className="icon-right"></i></a>
            </Link>
          </div>
        </li>
        <li>
          <div className="Cbo-item">
            <a href="#" className="brand-link">
              <img src="/images/brand/samsung.jpg" />
              <h2>Samsung</h2>
            </a>
          </div>
          <div className="hover-details">
            <Link href="#">
              <a>Let's Go <i className="icon-right"></i></a>
            </Link>
          </div>
        </li>
        <li>
          <div className="Cbo-item">
            <a href="#" className="brand-link">
              <img src="/images/brand/sn.jpg" />
              <h2>Sn</h2>
            </a>
          </div>
          <div className="hover-details">
            <Link href="#">
              <a>Let's Go <i className="icon-right"></i></a>
            </Link>
          </div>
        </li>
        <li>
          <div className="Cbo-item">
            <a href="#" className="brand-link">
              <img src="/images/brand/unicef.jpg" />
              <h2>Uniliver</h2>
            </a>
          </div>
          <div className="hover-details">
            <Link href="#">
              <a>Let's Go <i className="icon-right"></i></a>
            </Link>
          </div>
        </li>
      </ul>
    </div>
  );
}
