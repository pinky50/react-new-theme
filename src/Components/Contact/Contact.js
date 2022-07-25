import React from "react";
import Heading from "../Heading/Heading";
import RoundBtn from "../RoundBtn/RoundBtn";
import PageHeader from "../PageHeader/PageHeader";
import "./Contact.css";

export default function Contact() {
  return (
    <>
      <PageHeader title="Contact Us" />
      <div id="contact" className="cd-section section-padding">
        <div className="container">
          <div className="contact-form">
            <div className="row">
              <Heading content="Kaz soft limited established in 2004. It is one of the leading custom software companies in Bangladesh in order to create ordinary software.">
                <h1>
                  Get <span>in touch</span>
                </h1>
              </Heading>
              <div className="col-md-7 mt-4">
                <form className="form-horizontal">
                  <div className="form-group row">
                    <div className="col-sm-6 mb-3">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Name *"
                        required=""
                      />
                    </div>
                    <div className="col-sm-6">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email *"
                        required=""
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div className="col-sm-12 mb-3">
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="form-control"
                        placeholder="Subject"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-sm-12 mb-3">
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="form-control"
                        placeholder="Message..."
                        required=""
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="form-group row text-center">
                    <div className="col-sm-12">
                      <RoundBtn content="Submit" />
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-md-5">
                <div className="row">
                  <div className="col-md-12">
                    <div className="contact-info">
                      <a href="tel:+123456789">
                        <div className="contact-icon">
                          <i className=" fa fa-phone" />
                        </div>
                        <div className="contact-text">
                          <div>Our Contact</div>
                          <div>01876555556</div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="contact-info">
                      <a href="mailto:info@gmail.com">
                        <div className="contact-icon">
                          <i className="fa fa-envelope" />
                        </div>
                        <div className="contact-text">
                          <div>Our Mail</div>
                          <div>info@sarosit.com</div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="contact-info">
                      <div className="contact-icon">
                        <i className="fa fa-map-marker" />
                      </div>
                      <div className="contact-text">
                        <div>Our Address</div>
                        <div>112/24,Gulshan.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid" style={{ padding: "0px" }}>
          <div className="col-md-12 mt-3">
            <div className="contact-map">
              <iframe
                title="my address tracker"
                style={{ width: "100%" }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.279909073!2d-74.25987368715491!3d40.69767006458873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1658302261116!5m2!1sen!2sbd"
                height={500}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
