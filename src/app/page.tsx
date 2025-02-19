import Image from "next/image";
import styles from "./page.module.css";



export default function Home() {
  return (
      <main>
        <header className="header-bg">
          <div className="container pos-rel">
            <div className="row">
              <div className="pull-left col-3 col-sm-4 col-xs-6 brand-logo">
                <a href="#" className="goto-home logo-header">
                  <img src="images/logo.png" alt="Brand Logo" className="img-responsive" data-event-category="Header" data-event-action="Click" data-event-name="Logo" />
                </a>    
              </div>
              <div className="col-9 col-sm-8 col-xs-6 pull-right">          
                <div className="col-12 pull-right lower">                                 
                  <div className="pull-right enq-btn-wrapper">
                    <a href="#" className="enquire-btn dbro open-form theme-btn" data-event-category="Header" data-event-action="Click" data-event-name="Contact Us"><span>Start for FREE Now</span> <img alt="Arrow" src="images/cta-arrow.svg" /> </a>
                  </div>    
                </div>
              </div>
            </div>
          </div>    
        </header>
        <section className="slide pos-rel" id="home">
          <section className="banner-section">
            <div className="container">
                <div className="row">
                  <div className="banner-tagline text-center">
                    <h1 className="tag-1 text-bold"><span>1/2 your desk time,</span><br /> manual work and client management</h1>
                    <div className="tag-2">Get the all-in-one platform for coaching<br className="hidden-xs" /> - in-built Scheduling, Payments, Progress Tracking, Client Portal & more</div>
                    <div className="banner-img-wrapper">
                      <Image width="126" height="90" src="/images/software-advice.webp" alt="software-advice" className="img-responsive" />
                      <Image width="150" height="90" src="/images/Capterra-Badge.webp" alt="Capterra-Badge" className="img-responsive" />
                    </div>
                    <div className="cta-wrapper">
                      <a href="#" className="open-form theme-btn text-semiBold"><span>Start for FREE Now</span> <Image width="25" height="25"  src="/images/cta-arrow.svg" alt="Arrow" /></a>
                    </div>
                  </div>
                </div>
            </div>
          </section>
          <section className="banner-section-2 slide">
            <div className="container">
                <div className="row">
                  <div className="dashboard-img-1-wrapper">             
                    <Image width="1124" height="652" src="/images/dashboard-img-2.webp" className="img-responsive lazy" alt="Dashboard" />
                  </div>
                </div>
            </div>
          </section>
          <section className="banner-section-3">
            <div className="">
                <div className="row">
                  <div className="text-center tc-wrapper">
                    <h2 className="trusted-heading">TRUSTED BY OVER 561 COMPANIES GLOBALLY</h2>
                    <div className="c-slider-wrapper">
                      <div className="company-slider">
                        <div className="item">
                          <img src="/images/logo-1.svg" className="img-responsive lazy" alt="logo" />
                        </div>
                        <div className="item">
                          <img src="/images/logo-2.svg" className="img-responsive lazy" alt="logo" />
                        </div>
                        <div className="item">
                          <img src="/images/logo-3.svg" className="img-responsive lazy" alt="logo" />
                        </div>
                        <div className="item">
                          <img src="/images/logo-4.svg" className="img-responsive lazy" alt="logo" />
                        </div>
                        <div className="item">
                          <img src="/images/logo-5.svg" className="img-responsive lazy" alt="logo" />
                        </div>
                        <div className="item">
                          <img src="/images/logo-6.svg" className="img-responsive lazy" alt="logo" />
                        </div>
                        <div className="item">
                          <img src="/images/logo-7.svg" className="img-responsive lazy" alt="logo" />
                        </div>
                        <div className="item">
                          <img src="/images/logo-8.svg" className="img-responsive lazy" alt="logo" />
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
            </div>
          </section>
        </section>
      </main>
        );
}
