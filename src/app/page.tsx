import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <header id="header" className="header d-flex align-items-center">
        <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
          <a href="index.html" className="logo d-flex align-items-center">
            <img src="assets/img/logo.svg" alt="" />
            <h1>SOLARWAYZ TECHNOLOGIES</h1>
          </a>

          <i className="mobile-nav-toggle mobile-nav-show fa fa-list"></i>
          <i className="mobile-nav-toggle mobile-nav-hide d-none fa fa-times"></i>
          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <a href="index.html" className="active">
                  Home
                </a>
              </li>
              <li>
                <a href="about.html">About</a>
              </li>
              <li>
                <a href="services.html">Services</a>
              </li>

              <li>
                <a href="contact.html">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section id="hero" className="hero">
        <div className="info d-flex align-items-center">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 text-center">
                <h2 data-aos="fade-down">
                  Welcome to <span>SOLARWAYZ TECHNOLOGIES</span>
                </h2>
                <p className="heroPara" data-aos="fade-up">
                  SOLARWAYZ TECHNOLOGIES offers solar permit design and proposal
                  layout services to residential and commercial businesses in
                  the US, with a team of skilled engineers and designers to
                  assist in obtaining permits and deals.
                </p>
                <div className="actionBtn">
                  <a
                    data-aos="fade-up"
                    data-aos-delay="200"
                    href="#main"
                    className="btn-get-started"
                  >
                    More Info
                  </a>
                  <a
                    data-aos="fade-up"
                    data-aos-delay="200"
                    href="contact.html"
                    className="btn-action"
                  >
                    Contact us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="hero-carousel"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="5000"
        >
          <div
            className="carousel-item active"
            style={{
              backgroundImage:
                "url(assets/img/hero-carousel/hero-carousel-1.jpg)",
            }}
          ></div>
          <div
            className="carousel-item"
            style={{
              backgroundImage:
                "url(assets/img/hero-carousel/hero-carousel-2.jpg)",
            }}
          ></div>
          <div
            className="carousel-item"
            style={{
              backgroundImage:
                "url(assets/img/hero-carousel/hero-carousel-3.jpg)",
            }}
          ></div>
          <div
            className="carousel-item"
            style={{
              backgroundImage:
                "url(assets/img/hero-carousel/hero-carousel-4.jpg)",
            }}
          ></div>
          <div
            className="carousel-item"
            style={{
              backgroundImage:
                "url(assets/img/hero-carousel/hero-carousel-5.jpg)",
            }}
          ></div>

          <a
            className="carousel-control-prev"
            href="#hero-carousel"
            role="button"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon fa fa-chevron-left"
              aria-hidden="true"
            ></span>
          </a>

          <a
            className="carousel-control-next"
            href="#hero-carousel"
            role="button"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon fa fa-chevron-right"
              aria-hidden="true"
            ></span>
          </a>
        </div>
      </section>

      <main id="main">
        <div className="ourProcess" data-aos="fade-up">
          <center>
            <h2>Our Process</h2>
          </center>
          <div className="processAbt">
            At SOLARWAYZ, we understand that obtaining the necessary permits for
            your solar energy project can be a complex and time-consuming
            process. That's why we're here to help you navigate through the
            permitting requirements smoothly. Our experienced team of
            professionals will guide you every step of the way, ensuring that
            your solar installation meets all the necessary regulations and
            standards. Here's an overview of our solar permit process:
          </div>
          <div className="flowChartCont">
            <div className="flowChart">
              <div className="flowbox">
                <div className="semi"></div>
                <h1>01</h1>
                <span>SITE SURVEY ANALYSIS</span>
              </div>
              <div className="flowbox">
                <div className="semi rev"></div>
                <h1>02</h1>
                <span>PRELIMINARY DESIGNS</span>
              </div>
              <div className="flowbox">
                <div className="semi"></div>
                <h1>03</h1>
                <span>PERMIT DESIGN</span>
              </div>
              <div className="flowbox">
                <div className="semi rev"></div>
                <h1>04</h1>
                <span>STRUCTURAL & ELECTRICAL REVIEW</span>
              </div>
              <div className="flowbox">
                <div className="semi"></div>
                <h1>05</h1>
                <span>PERMIT PACKAGE DELIVERED</span>
              </div>
            </div>
          </div>

          <div className="space"></div>
          <div className="row1-container">
            <div className="box box-down cyan">
              <h3>Solar Permit Designs</h3>
              <p>
                Uses data from past projects to provide better delivery
                estimatesOur team handles permit documentation, including
                applications, engineering drawings, technical specifications,
                and supporting documents, utilizing our knowledge of local
                regulations to ensure accuracy and completeness.
              </p>
              <img
                src="https://assets.codepen.io/2301174/icon-supervisor.svg"
                alt=""
              />
            </div>

            <div className="box red">
              <h3>Solar Preliminary Designs</h3>
              <p>
                Experts evaluate property's solar potential, roof condition,
                shading, and more to create a tailored solar system design that
                maximizes energy production and complies with local codes.
              </p>
              <img
                src="https://assets.codepen.io/2301174/icon-karma.svg"
                alt=""
              />
            </div>

            <div className="box box-down blue">
              <h3>Professional Engineer (PE) Stamping</h3>
              <p>
                Uses data from past projects to provide better delivery
                estimatesOur team handles permit documentation, including
                applications, engineering drawings, technical specifications,
                and supporting documents, utilizing our knowledge of local
                regulations to ensure accuracy and completeness.
              </p>
              <img
                src="https://assets.codepen.io/2301174/icon-calculator.svg"
                alt=""
              />
            </div>
          </div>
          <div className="row2-container">
            <div className="box orange">
              <h3>PTO Application</h3>
              <p>
                Our PTO Application services encompass a comprehensive and
                streamlined approach to securing your solar permit and PE
                Stamping. With our expertise and attention to detail, we handle
                all aspects of the application process, ensuring compliance with
                regulations and expedited approvals. Trust us to navigate the
                complexities and deliver a hassle-free experience, allowing you
                to focus on your solar project's success.
              </p>
              <img
                src="https://assets.codepen.io/2301174/icon-team-builder.svg"
                alt=""
              />
            </div>
          </div>
          <div className="space"></div>
        </div>

        <section id="why-us" className="services section-bg">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h2>Why choose us</h2>
            </div>

            <div className="row gy-4">
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="fa-solid fa-mountain"></i>
                  </div>
                  <h3>Extensive Industry Knowledge</h3>
                  <p>
                    At Solarwayz, we possess in-depth knowledge and
                    understanding of the solar industry and engineering
                    standards. Our team consists of highly skilled professionals
                    with years of experience in solar permit acquisition and PE
                    Stamping. We stay updated with the latest regulations,
                    codes, and best practices to ensure your project complies
                    with all requirements..
                  </p>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="fa-solid fa-money-check"></i>
                  </div>
                  <h3>Customised Solutions</h3>
                  <p>
                    We recognize that every solar project is unique, with
                    specific requirements and challenges. With solarwayz, you
                    can expect personalised solutions tailored to your project's
                    needs. Whether you're installing solar panels for a
                    residential, commercial, or industrial property, we offer
                    individualised guidance and support to ensure your project's
                    success.
                  </p>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="fa-solid fa-compass-drafting"></i>
                  </div>
                  <h3>Compliance Assurance</h3>
                  <p>
                    Compliance with local building codes and regulations is
                    crucial for the long-term success and safety of your solar
                    installation. Our team of experts meticulously reviews your
                    project plans, ensuring they meet all relevant standards.
                    With our attention to detail and commitment to compliance,
                    you can have peace of mind knowing your project will be
                    completed without any setbacks or compliance issues.
                  </p>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="fa-solid fa-expand"></i>
                  </div>
                  <h3>Timely Delivery</h3>
                  <p>
                    We understand that time is of the essence when it comes to
                    solar projects. Delays in permit acquisition and engineering
                    approvals can impact project timelines and incur unnecessary
                    costs. At solarwayz, we prioritise efficient project
                    management and strive to deliver prompt results. Our
                    streamlined processes and proactive approach minimise
                    delays, allowing you to meet your project deadlines.
                  </p>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="fa-solid fa-square-poll-vertical"></i>
                  </div>
                  <h3>Professional Engineering Stamps</h3>
                  <p>
                    If your project requires professional engineering stamps,
                    our certified engineers are here to assist you. We offer
                    reliable PE Stamping services, ensuring your project designs
                    and calculations are reviewed and certified by qualified
                    professionals. Our stamped documents carry the mark of
                    credibility and demonstrate adherence to industry standards.
                  </p>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="fa-solid fa-square-pen"></i>
                  </div>
                  <h3>Excellent Customer Support</h3>
                  <p>
                    Customer satisfaction is our top priority. We believe in
                    building long-term relationships with our clients, based on
                    trust, transparency, and open communication. Our friendly
                    and knowledgeable team is always available to address your
                    queries, provide updates on your project's progress, and
                    offer guidance whenever you need it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="alt-services" className="alt-services">
          <div className="container" data-aos="fade-up">
            <div className="row justify-content-around gy-4">
              <div
                className="col-lg-6 img-bg"
                style={{
                  backgroundImage: "url(assets/img/alt-services-home.jpg)",
                }}
                data-aos="zoom-in"
                data-aos-delay="100"
              ></div>

              <div className="col-lg-5 d-flex flex-column justify-content-center">
                <h3>Our Services</h3>
                <p>
                  At SOLARWAYZ TECHNOLOGIES, we offer a range of solar permit
                  design and proposal layout services that are tailored to meet
                  the unique needs of your residential or commercial solar
                  energy project. Our team of experienced engineers, designers,
                  and proposal specialists is dedicated to helping you obtain
                  the necessary permits and win more projects for your solar
                  energy business.
                </p>

                <div
                  className="icon-box d-flex position-relative"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <i className="fa-solid fa-cube"></i>
                  <div>
                    <h4>
                      <a href="#" className="stretched-link">
                        Permit Documentation:
                      </a>
                    </h4>
                    <p>
                      We prepare all necessary permit documentation for your
                      solar energy project, ensuring that it meets all local and
                      state regulations. Our team is familiar with the permit
                      requirements in various jurisdictions across the United
                      States, and we work closely with the relevant authorities
                      to ensure a smooth permitting process.
                    </p>
                  </div>
                </div>

                <div
                  className="icon-box d-flex position-relative"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <i className="fa-solid fa-pen-ruler"></i>
                  <div>
                    <h4>
                      <a href="#" className="stretched-link">
                        Proposal Layout:
                      </a>
                    </h4>
                    <p>
                      We offer a range of proposal layout solutions that can
                      help you win more business. Our team specializes in
                      creating custom proposal layouts that are professionally
                      designed, expertly written, and eye-catching. We work with
                      you to ensure that your proposal meets your specific needs
                      and exceeds your expectations.
                    </p>
                  </div>
                </div>

                <div
                  className="icon-box d-flex position-relative"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <i className="fa-solid fa-sitemap"></i>
                  <div>
                    <h4>
                      <a href="#" className="stretched-link">
                        PE stamping:
                      </a>
                    </h4>
                    <p>
                      If your project requires professional engineering stamps,
                      our certified engineers are here to assist you. We offer
                      reliable PE Stamping services, ensuring your project
                      designs and calculations are reviewed and certified by
                      qualified professionals. Our stamped documents carry the
                      mark of credibility and demonstrate adherence to industry
                      standards.
                    </p>
                  </div>
                </div>

                <div
                  className="icon-box d-flex position-relative"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <i className="fa-solid fa-compass-drafting"></i>
                  <div>
                    <h4>
                      <a href="" className="stretched-link">
                        PTO Application services
                      </a>
                    </h4>
                    <p>
                      Our PTO Application services encompass a comprehensive and
                      streamlined approach to securing your solar permit and PE
                      Stamping. With our expertise and attention to detail, we
                      handle all aspects of the application process, ensuring
                      compliance with regulations and expedited approvals. Trust
                      us to navigate the complexities and deliver a hassle-free
                      experience, allowing you to focus on your solar project's
                      success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="footer" className="footer">
        <div className="footer-content position-relative">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-6">
                <div className="footer-info">
                  <h3>SOLARWAYZ TECHNOLOGIES</h3>
                  <p>
                    Office no-442, Barola Main Market, F-4, DT/5, C-1/19,
                    SECTOR-49,
                    <br />
                    NOIDA UTTARPRADESH, INDIA, 201301 <br />
                    <br />
                    <strong>Phone:</strong> +1 224-585-7342
                    <br />
                    <strong>Email:</strong> info@solarwayz.com
                    <br />
                  </p>
                  <div className="social-links d-flex mt-3">
                    <a
                      href="#"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a
                      href="#"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <i className="fab fa-facebook"></i>
                    </a>
                    <a
                      href="#"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a
                      href="#"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-2 col-md-3 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="about.html">About us</a>
                  </li>
                  <li>
                    <a href="services.html">Services</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact</a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-2 col-md-3 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li>
                    <a href="#alt-services">Permit Documentation</a>
                  </li>
                  <li>
                    <a href="#alt-services">Proposal Layout</a>
                  </li>
                  <li>
                    <a href="#alt-services">PE stamping</a>
                  </li>
                  <li>
                    <a href="#alt-services"> PTO application services</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-legal text-center position-relative">
          <div className="container">
            <div className="copyright">
              &copy; Copyright{" "}
              <strong>
                <span>SOLARWAYZ TECHNOLOGIES</span>
              </strong>
              . All Rights Reserved
            </div>
          </div>
        </div>
      </footer>

      <a
        href="#"
        className="scroll-top d-flex align-items-center justify-content-center"
      >
        <i className="fa fa-arrow-up text-white"></i>
      </a>

      <div id="preloader"></div>
    </>
  );
}
