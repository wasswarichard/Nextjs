import React from "react";
import { withRouter } from "next/router";
import { connect } from "react-redux";
import SideDrawer from "./SideDrawer";
import SearchForm from "./SearchForm";
import Link from "next/link";

class Navbar extends React.Component {
  _isMounted = false;

  state = {
    drawer: false,
    searchForm: false,
    collapsed: true,
  };

  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  handleDrawer = () => {
    this.setState((prevState) => {
      return {
        drawer: !prevState.drawer,
      };
    });
  };

  handleSearchForm = () => {
    this.setState((prevState) => {
      return {
        searchForm: !prevState.searchForm,
      };
    });
  };

  componentDidMount() {
    this._isMounted = true;
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    let { pathname } = this.props.router;
    let { products } = this.props;

    let layOutCls = "";
    let logo = "/images/lystface_logo.png";
    if (pathname == "/digital-marketing") {
      layOutCls = "marketing-navbar";
      logo = "/images/logo2.png";
    }

    const { collapsed } = this.state;
    const classOne = collapsed
      ? "collapse navbar-collapse"
      : "collapse navbar-collapse show";
    const classTwo = collapsed
      ? "navbar-toggler navbar-toggler-right collapsed"
      : "navbar-toggler navbar-toggler-right";

    const { router } = this.props;

    return (
      <>
        <header id="header">
          <div id="navbar" className={`crake-nav ${layOutCls}`}>
            <div className="container">
              <nav className="navbar navbar-expand-md navbar-light">
                <Link href="/saas" className="navbar-brand">
                  <img src={logo} alt="logo" />
                </Link>

                {/*<button*/}
                {/*  onClick={this.toggleNavbar}*/}
                {/*  className={classTwo}*/}
                {/*  type="button"*/}
                {/*  data-toggle="collapse"*/}
                {/*  data-target="#navbarSupportedContent"*/}
                {/*  aria-controls="navbarSupportedContent"*/}
                {/*  aria-expanded="false"*/}
                {/*  aria-label="Toggle navigation"*/}
                {/*>*/}
                {/*  <span className="navbar-toggler-icon"></span>*/}
                {/*</button>*/}

                <div className={classOne} id="navbarSupportedContent">
                  <ul className="navbar-nav nav ms-auto">
                    <li className="nav-item">
                      <Link
                        href="/saas/"
                        className={`nav-link ${
                          router.pathname === "/" ? "active" : ""
                        }`}
                      >
                        Features
                      </Link>
                    </li>

                    <li className="nav-item">
                      <a href="/about-one/" className="nav-link">
                        Pricing
                      </a>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/portfolio-one"
                        className={`nav-link ${
                          router.pathname === "/portfolio-one" ? "active" : ""
                        }`}
                      >
                        Company
                      </Link>

                      <ul className="dropdown_menu">
                        <li>
                          <Link
                            href="/portfolio-one"
                            className={
                              router.pathname === "/portfolio-one"
                                ? "active"
                                : ""
                            }
                          >
                           Dropdown 1
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/blog-one/"
                        className={`nav-link ${
                          router.pathname === "/blog-one" ? "active" : ""
                        }`}
                      >
                        Blog
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/shop-one"
                        className={`nav-link ${
                          router.pathname === "/shop-one" ? "active" : ""
                        }`}
                      >
                        Demo
                      </Link>

                    </li>
                    <li className="nav-item">
                      <Link
                        href="/contact"
                        className={
                          router.pathname === "/contact" ? "active" : ""
                        }
                      >
                        Login
                      </Link>
                    </li>
                    <li className="nav-item">
                      <button type="button" className="btn btn-primary">Free Trial </button>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </header>

        {this.state.drawer ? <SideDrawer onClick={this.handleDrawer} /> : ""}
        {this.state.searchForm ? (
          <SearchForm onClick={this.handleSearchForm} />
        ) : (
          ""
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.addedItems,
  };
};

export default withRouter(connect(mapStateToProps)(Navbar));
