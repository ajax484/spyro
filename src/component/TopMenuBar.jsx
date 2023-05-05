import React from "react";

export default function TopMenuBar() {
  return (
    <div className="app-header header">
      <div className="container-fluid">
        <div className="d-flex">
          <a className="header-brand" href="https://test.spyro.ai">
            <img
              src="https://test.spyro.ai/img/brand/logo.png"
              className="header-brand-img desktop-lgo"
              alt="Polly logo"
            />
            <img
              src="https://test.spyro.ai/img/brand/favicon.png"
              className="header-brand-img mobile-logo"
              alt="Polly logo"
            />
          </a>
          <div
            className="app-sidebar__toggle nav-link icon"
            data-toggle="sidebar"
          >
            <a className="open-toggle" href="#">
              <span className="fa fa-align-left header-icon" />
            </a>
          </div>
          {/* SEARCH BAR */}
          <div id="search-bar">
            <div>
              <a className="nav-link icon">
                <form
                  id="search-field"
                  action="https://test.spyro.ai/user/search"
                  method="POST"
                  encType="multipart/form-data"
                >
                  <input
                    type="hidden"
                    name="_token"
                    defaultValue="beAyiS7BRFBdoBu0ya1JJWlmoizwVjtvhuvSC8yI"
                  />
                  <input type="search" name="keyword" />
                </form>
              </a>
            </div>
          </div>
          {/* END SEARCH BAR */}
          {/* MENU BAR */}
          <div className="d-flex order-lg-2 ml-auto">
            <div id="form-group">
              <select
                id="template-selection"
                name="template-selection"
                data-placeholder="Create AI Document"
                data-callback="changeTemplate"
                style={{ display: "none" }}
              >
                <option
                  data-id="WGKYP"
                  value="blog-titles"
                  data-icon='<i class="fa-solid fa-message-text blog-icon"></i>'
                >
                  Blog Titles
                </option>
                <option
                  data-id="EEKZF"
                  value="blog-section"
                  data-icon='<i class="fa-solid fa-message-lines blog-icon"></i>'
                >
                  Blog Section
                </option>
                <option
                  data-id="KDGOX"
                  value="blog-ideas"
                  data-icon='<i class="fa-solid fa-message-dots blog-icon"></i>'
                >
                  Blog Ideas
                </option>
                <option
                  data-id="TZTYR"
                  value="blog-intros"
                  data-icon='<i class="fa-solid fa-message-exclamation blog-icon"></i>'
                >
                  Blog Intros
                </option>
                <option
                  data-id="ZGUKM"
                  value="blog-conclusion"
                  data-icon='<i class="fa-solid fa-message-check blog-icon"></i>'
                >
                  Blog Conclusion
                </option>
                <option
                  data-id="RLXGB"
                  value="email-welcome"
                  data-icon='<i class="fa-solid fa-envelope-open-text email-icon"></i>'
                >
                  Welcome Email
                </option>
                <option
                  data-id="RDJEZ"
                  value="email-cold"
                  data-icon='<i class="fa-solid fa-mailbox email-icon"></i>'
                >
                  Cold Email
                </option>
                <option
                  data-id="XVNNQ"
                  value="email-follow-up"
                  data-icon='<i class="fa-solid fa-reply-all email-icon"></i>'
                >
                  Follow-Up Email
                </option>
                <option
                  data-id="WISTT"
                  value="amazon-product"
                  data-icon='<i class="fa-brands fa-amazon other-icon"></i>'
                >
                  Amazon Product Description
                </option>
                <option
                  data-id="CTMNI"
                  value="facebook-ads"
                  data-icon='<i class="fa-brands fa-facebook social-icon"></i>'
                >
                  Facebook Ads
                </option>
                <option
                  data-id="EOASR"
                  value="instagram-captions"
                  data-icon='<i class="fa-brands fa-instagram social-icon"></i>'
                >
                  Instagram Captions
                </option>
                <option
                  data-id="IEMBM"
                  value="instagram-hashtags"
                  data-icon='<i class="fa-brands fa-instagram social-icon"></i>'
                >
                  Instagram Hashtags Generator
                </option>
                <option
                  data-id="CKOHL"
                  value="social-post-personal"
                  data-icon='<i class="fa-solid fa-thumbs-up social-icon"></i>'
                >
                  Social Media Post (Personal)
                </option>
                <option
                  data-id="ABWGU"
                  value="social-post-business"
                  data-icon='<i class="fa-solid fa-thumbs-up social-icon"></i>'
                >
                  Social Media Post (Business)
                </option>
                <option
                  data-id="HJYJZ"
                  value="facebook-headlines"
                  data-icon='<i class="fa-brands fa-facebook social-icon"></i>'
                >
                  Facebook Headlines
                </option>
                <option
                  data-id="SGZTW"
                  value="google-headlines"
                  data-icon='<i class="fa-brands fa-google social-icon"></i>'
                >
                  Google Ads Headlines
                </option>
                <option
                  data-id="YQAFG"
                  value="google-ads"
                  data-icon='<i class="fa-brands fa-google social-icon"></i>'
                >
                  Google Ads Description
                </option>
                <option
                  data-id="KPAQQ"
                  value="article-generator"
                  data-icon='<i class="fa-solid fa-file-lines main-icon"></i>'
                >
                  Article Generator
                </option>
                <option
                  data-id="WCZGL"
                  value="content-rewriter"
                  data-icon='<i class="fa-solid fa-square-check main-icon"></i>'
                >
                  Content Rewriter
                </option>
                <option
                  data-id="JXRZB"
                  value="paragraph-generator"
                  data-icon='<i class="fa-solid fa-line-columns main-icon"></i>'
                >
                  Paragraph Generator
                </option>
                <option
                  data-id="VFWSQ"
                  value="talking-points"
                  data-icon='<i class="fa-solid fa-list-check main-icon"></i>'
                >
                  Talking Points
                </option>
                <option
                  data-id="OPYAB"
                  value="pros-and-cons"
                  data-icon='<i class="fa-solid fa-code-compare main-icon"></i>'
                >
                  Pros &amp; Cons
                </option>
                <option
                  data-id="OMMEI"
                  value="summarize-text"
                  data-icon='<i class="fa-solid fa-file-contract main-icon"></i>'
                >
                  Summarize Text
                </option>
                <option
                  data-id="HXLNA"
                  value="product-description"
                  data-icon='<i class="fa-solid fa-list-check main-icon"></i>'
                >
                  Product Description
                </option>
                <option
                  data-id="DJSVM"
                  value="startup-name-generator"
                  data-icon='<i class="fa-solid fa-lightbulb-on main-icon"></i>'
                >
                  Startup Name Generator
                </option>
                <option
                  data-id="IXKBE"
                  value="product-name-generator"
                  data-icon='<i class="fa-solid fa-box-circle-check main-icon"></i>'
                >
                  Product Name Generator
                </option>
                <option
                  data-id="SXQBT"
                  value="academic-essay"
                  data-icon='<i class="fa-solid fa-scroll-old main-icon"></i>'
                >
                  Academic Essay
                </option>
                <option
                  data-id="PAKMF"
                  value="creative-stories"
                  data-icon='<i class="fa-solid fa-books main-icon"></i>'
                >
                  Creative Stories
                </option>
                <option
                  data-id="OORHD"
                  value="grammar-checker"
                  data-icon='<i class="fa-solid fa-spell-check main-icon"></i>'
                >
                  Grammar Checker
                </option>
                <option
                  data-id="SGJLU"
                  value="2nd-grader"
                  data-icon='<i class="fa-solid fa-thought-bubble main-icon"></i>'
                >
                  Summarize for 2nd Grader
                </option>
                <option
                  data-id="ZLKSP"
                  value="video-descriptions"
                  data-icon='<i class="fa-brands fa-youtube video-icon"></i>'
                >
                  Video Descriptions
                </option>
                <option
                  data-id="OJIOV"
                  value="video-titles"
                  data-icon='<i class="fa-brands fa-youtube video-icon"></i>'
                >
                  Video Titles
                </option>
                <option
                  data-id="ECNVU"
                  value="youtube-tags-generator"
                  data-icon='<i class="fa-brands fa-youtube video-icon"></i>'
                >
                  Youtube Tags Generator
                </option>
                <option
                  data-id="WISHV"
                  value="video-scripts"
                  data-icon='<i class="fa-solid fa-film video-icon"></i>'
                >
                  Video Scripts
                </option>
                <option
                  data-id="JCDIK"
                  value="meta-description"
                  data-icon='<i class="fa-solid fa-memo-circle-info web-icon"></i>'
                >
                  Meta Description
                </option>
                <option
                  data-id="SZAUF"
                  value="faqs"
                  data-icon='<i class="fa-solid fa-message-question web-icon"></i>'
                >
                  FAQs
                </option>
                <option
                  data-id="BFENK"
                  value="faq-answers"
                  data-icon='<i class="fa-solid fa-messages-question web-icon"></i>'
                >
                  FAQ Answers
                </option>
                <option
                  data-id="XLGPP"
                  value="testimonials"
                  data-icon='<i class="fa-solid fa-star-sharp-half-stroke web-icon"></i>'
                >
                  Testimonials / Reviews
                </option>
                <option
                  data-id="BGXJE"
                  value="problem-agitate-solution"
                  data-icon='<i class="fa-solid fa-copyright web-icon"></i>'
                >
                  Problem-Agitate-Solution
                </option>
              </select>
              <div
                data-immersive="false"
                id="awselect_template-selection"
                data-select="template-selection"
                className="awselect"
              >
                <div style={{ background: "#fff" }} className="bg" />
                <div style={{ padding: "15px 40px" }} className="front_face">
                  <div style={{ background: "#e5e5e5" }} className="bg" />
                  <div
                    data-inactive-color="#000"
                    style={{ color: "#000" }}
                    className="content"
                  >
                    <span className="placeholder">Create AI Document</span>
                    <i className="icon">
                      <svg
                        style={{ fill: "#000" }}
                        version="1.1"
                        id="Chevron_thin_down"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 20 20"
                        enableBackground="new 0 0 20 20"
                        xmlSpace="preserve"
                      >
                        <path d="M17.418,6.109c0.272-0.268,0.709-0.268,0.979,0c0.27,0.268,0.271,0.701,0,0.969l-7.908,7.83c-0.27,0.268-0.707,0.268-0.979,0l-7.908-7.83c-0.27-0.268-0.27-0.701,0-0.969c0.271-0.268,0.709-0.268,0.979,0L10,13.25L17.418,6.109z"></path>
                      </svg>
                    </i>
                  </div>
                </div>
                <div style={{ padding: "15px 0" }} className="back_face">
                  <ul style={{ color: "#000" }}>
                    <li>
                      <a
                        className="undefined undefined undefined"
                        style={{ padding: "2px 40px" }}
                      >
                        <span className="awselect-icon-style mr-3">
                          <i className="fa-solid fa-message-text blog-icon" />
                        </span>
                        Blog Titles
                      </a>
                    </li>
                    <li>
                      <a
                        className="undefined undefined undefined"
                        style={{ padding: "2px 40px" }}
                      >
                        <span className="awselect-icon-style mr-3">
                          <i className="fa-solid fa-message-lines blog-icon" />
                        </span>
                        Blog Section
                      </a>
                    </li>
                    <li>
                      <a
                        className="undefined undefined undefined"
                        style={{ padding: "2px 40px" }}
                      >
                        <span className="awselect-icon-style mr-3">
                          <i className="fa-solid fa-message-dots blog-icon" />
                        </span>
                        Blog Ideas
                      </a>
                    </li>
                    <li>
                      <a
                        className="undefined undefined undefined"
                        style={{ padding: "2px 40px" }}
                      >
                        <span className="awselect-icon-style mr-3">
                          <i className="fa-solid fa-message-exclamation blog-icon" />
                        </span>
                        Blog Intros
                      </a>
                    </li>
                    <li>
                      <a
                        className="undefined undefined undefined"
                        style={{ padding: "2px 40px" }}
                      >
                        <span className="awselect-icon-style mr-3">
                          <i className="fa-solid fa-message-check blog-icon" />
                        </span>
                        Blog Conclusion
                      </a>
                    </li>
                    <li>
                      <a
                        className="undefined undefined undefined"
                        style={{ padding: "2px 40px" }}
                      >
                        <span className="awselect-icon-style mr-3">
                          <i className="fa-solid fa-envelope-open-text email-icon" />
                        </span>
                        Welcome Email
                      </a>
                    </li>
                    <li>
                      <a
                        className="undefined undefined undefined"
                        style={{ padding: "2px 40px" }}
                      >
                        <span className="awselect-icon-style mr-3">
                          <i className="fa-solid fa-mailbox email-icon" />
                        </span>
                        Cold Email
                      </a>
                    </li>
                    <li>
                      <a
                        className="undefined undefined undefined"
                        style={{ padding: "2px 40px" }}
                      >
                        <span className="awselect-icon-style mr-3">
                          <i className="fa-solid fa-reply-all email-icon" />
                        </span>
                        Follow-Up Email
                      </a>
                    </li>
                    <li>
                      <a
                        className="undefined undefined undefined"
                        style={{ padding: "2px 40px" }}
                      >
                        <span className="awselect-icon-style mr-3">
                          <i className="fa-brands fa-amazon other-icon" />
                        </span>
                        Amazon Product Description
                      </a>
                    </li>
                    <li>
                      <a
                        className="undefined undefined undefined"
                        style={{ padding: "2px 40px" }}
                      >
                        <span className="awselect-icon-style mr-3">
                          <i className="fa-brands fa-facebook social-icon" />
                        </span>
                        Facebook Ads
                      </a>
                    </li>
                    <li>
                      <a
                        className="undefined undefined undefined"
                        style={{ padding: "2px 40px" }}
                      >
                        <span className="awselect-icon-style mr-3">
                          <i className="fa-brands fa-instagram social-icon" />
                        </span>
                        Instagram Captions
                      </a>
                    </li>
                    <li>
                      <a
                        className="undefined undefined undefined"
                        style={{ padding: "2px 40px" }}
                      >
                        <span className="awselect-icon-style mr-3">
                          <i className="fa-brands fa-instagram social-icon" />
                        </span>
                        Instagram Hashtags Generator
                      </a>
                    </li>
                    <li>
                      <a
                        className="undefined undefined undefined"
                        style={{ padding: "2px 40px" }}
                      >
                        <span className="awselect-icon-style mr-3">
                          <i className="fa-solid fa-thumbs-up social-icon" />
                        </span>
                        Social Media Post (Personal)
                      </a>
                    </li>
                    <li>
                      <a
                        className="undefined undefined undefined"
                        style={{ padding: "2px 40px" }}
                      >
                        <span className="awselect-icon-style mr-3">
                          <i className="fa-solid fa-thumbs-up social-icon" />
                        </span>
                        Social Media Post (Business)
                      </a>
                    </li>
                    <li>
                      <a
                        className="undefined undefined undefined"
                        style={{ padding: "2px 40px" }}
                      >
                        <span className="awselect-icon-style mr-3">
                          <i className="fa-brands fa-facebook social-icon" />
                        </span>
                        Facebook Headlines
                      </a>
                    </li>
                    <li>
                      <a
                        className="undefined undefined undefined"
                        style={{ padding: "2px 40px" }}
                      >
                        <span className="awselect-icon-style mr-3">
                          <i className="fa-brands fa-google social-icon" />
                        </span>
                        Google Ads Headlines
                      </a>
                    </li>
                    <li>
                      <a
                        className="undefined undefined undefined"
                        style={{ padding: "2px 40px" }}
                      >
                        <span className="awselect-icon-style mr-3">
                          <i className="fa-brands fa-google social-icon" />
                        </span>
                        Google Ads Description
                      </a>
                    </li>
                    <li>
                      <a
                        className="undefined undefined undefined"
                        style={{ padding: "2px 40px" }}
                      >
                        <span className="awselect-icon-style mr-3">
                          <i className="fa-solid fa-file-lines main-icon" />
                        </span>
                        Article Generator
                      </a>
                    </li>
                    <li>
                      <a
                        className="undefined undefined undefined"
                        style={{ padding: "2px 40px" }}
                      >
                        <span className="awselect-icon-style mr-3">
                          <i className="fa-solid fa-square-check main-icon" />
                        </span>
                        Content Rewriter
                      </a>
                    </li>
                    <li>
                      <a
                        className="undefined undefined undefined"
                        style={{ padding: "2px 40px" }}
                      >
                        <span className="awselect-icon-style mr-3">
                          <i className="fa-solid fa-line-columns main-icon" />
                        </span>
                        Paragraph Generator
                      </a>
                    </li>
                    <li>
                      <a
                        className="undefined undefined undefined"
                        style={{ padding: "2px 40px" }}
                      >
                        <span className="awselect-icon-style mr-3">
                          <i className="fa-solid fa-list-check main-icon" />
                        </span>
                        Talking Points
                      </a>
                    </li>
                    <li>
                      <a
                        className="undefined undefined undefined"
                        style={{ padding: "2px 40px" }}
                      >
                        <span className="awselect-icon-style mr-3">
                          <i className="fa-solid fa-code-compare main-icon" />
                        </span>
                        Pros &amp; Cons
                      </a>
                    </li>
                    <li>
                      <a
                        className="undefined undefined undefined"
                        style={{ padding: "2px 40px" }}
                      >
                        <span className="awselect-icon-style mr-3">
                          <i className="fa-solid fa-file-contract main-icon" />
                        </span>
                        Summarize Text
                      </a>
                    </li>
                    <li>
                      <a
                        className="undefined undefined undefined"
                        style={{ padding: "2px 40px" }}
                      >
                        <span className="awselect-icon-style mr-3">
                          <i className="fa-solid fa-list-check main-icon" />
                        </span>
                        Product Description
                      </a>
                    </li>
                    <li>
                      <a
                        className="undefined undefined undefined"
                        style={{ padding: "2px 40px" }}
                      >
                        <span className="awselect-icon-style mr-3">
                          <i className="fa-solid fa-lightbulb-on main-icon" />
                        </span>
                        Startup Name Generator
                      </a>
                    </li>
                    <li>
                      <a
                        className="undefined undefined undefined"
                        style={{ padding: "2px 40px" }}
                      >
                        <span className="awselect-icon-style mr-3">
                          <i className="fa-solid fa-box-circle-check main-icon" />
                        </span>
                        Product Name Generator
                      </a>
                    </li>
                    <li>
                      <a
                        className="undefined undefined undefined"
                        style={{ padding: "2px 40px" }}
                      >
                        <span className="awselect-icon-style mr-3">
                          <i className="fa-solid fa-scroll-old main-icon" />
                        </span>
                        Academic Essay
                      </a>
                    </li>
                    <li>
                      <a
                        className="undefined undefined undefined"
                        style={{ padding: "2px 40px" }}
                      >
                        <span className="awselect-icon-style mr-3">
                          <i className="fa-solid fa-books main-icon" />
                        </span>
                        Creative Stories
                      </a>
                    </li>
                    <li>
                      <a
                        className="undefined undefined undefined"
                        style={{ padding: "2px 40px" }}
                      >
                        <span className="awselect-icon-style mr-3">
                          <i className="fa-solid fa-spell-check main-icon" />
                        </span>
                        Grammar Checker
                      </a>
                    </li>
                    <li>
                      <a
                        className="undefined undefined undefined"
                        style={{ padding: "2px 40px" }}
                      >
                        <span className="awselect-icon-style mr-3">
                          <i className="fa-solid fa-thought-bubble main-icon" />
                        </span>
                        Summarize for 2nd Grader
                      </a>
                    </li>
                    <li>
                      <a
                        className="undefined undefined undefined"
                        style={{ padding: "2px 40px" }}
                      >
                        <span className="awselect-icon-style mr-3">
                          <i className="fa-brands fa-youtube video-icon" />
                        </span>
                        Video Descriptions
                      </a>
                    </li>
                    <li>
                      <a
                        className="undefined undefined undefined"
                        style={{ padding: "2px 40px" }}
                      >
                        <span className="awselect-icon-style mr-3">
                          <i className="fa-brands fa-youtube video-icon" />
                        </span>
                        Video Titles
                      </a>
                    </li>
                    <li>
                      <a
                        className="undefined undefined undefined"
                        style={{ padding: "2px 40px" }}
                      >
                        <span className="awselect-icon-style mr-3">
                          <i className="fa-brands fa-youtube video-icon" />
                        </span>
                        Youtube Tags Generator
                      </a>
                    </li>
                    <li>
                      <a
                        className="undefined undefined undefined"
                        style={{ padding: "2px 40px" }}
                      >
                        <span className="awselect-icon-style mr-3">
                          <i className="fa-solid fa-film video-icon" />
                        </span>
                        Video Scripts
                      </a>
                    </li>
                    <li>
                      <a
                        className="undefined undefined undefined"
                        style={{ padding: "2px 40px" }}
                      >
                        <span className="awselect-icon-style mr-3">
                          <i className="fa-solid fa-memo-circle-info web-icon" />
                        </span>
                        Meta Description
                      </a>
                    </li>
                    <li>
                      <a
                        className="undefined undefined undefined"
                        style={{ padding: "2px 40px" }}
                      >
                        <span className="awselect-icon-style mr-3">
                          <i className="fa-solid fa-message-question web-icon" />
                        </span>
                        FAQs
                      </a>
                    </li>
                    <li>
                      <a
                        className="undefined undefined undefined"
                        style={{ padding: "2px 40px" }}
                      >
                        <span className="awselect-icon-style mr-3">
                          <i className="fa-solid fa-messages-question web-icon" />
                        </span>
                        FAQ Answers
                      </a>
                    </li>
                    <li>
                      <a
                        className="undefined undefined undefined"
                        style={{ padding: "2px 40px" }}
                      >
                        <span className="awselect-icon-style mr-3">
                          <i className="fa-solid fa-star-sharp-half-stroke web-icon" />
                        </span>
                        Testimonials / Reviews
                      </a>
                    </li>
                    <li>
                      <a
                        className="undefined undefined undefined"
                        style={{ padding: "2px 40px" }}
                      >
                        <span className="awselect-icon-style mr-3">
                          <i className="fa-solid fa-copyright web-icon" />
                        </span>
                        Problem-Agitate-Solution
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="dropdown header-notify">
              <a className="nav-link icon" data-bs-toggle="dropdown">
                <span className="header-icon fa-regular fa-bell pr-3" />
                <span className="pulse " />
              </a>
              <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow  animated">
                <div className="dropdown-header">
                  <h6 className="mb-0 fs-12 font-weight-bold">
                    <span id="total-notifications">6</span>{" "}
                    <span className="text-primary">New</span> Notification(s)
                  </h6>
                  <a
                    href="#"
                    className="mb-1 badge badge-primary ml-auto pl-3 pr-3 mark-read"
                    id="mark-all"
                  >
                    Mark All Read
                  </a>
                </div>
                <div className="notify-menu">
                  <div className="notify-menu-inner">
                    <div className="d-flex dropdown-item border-bottom pl-4 pr-4">
                      <div>
                        <a
                          href="https://test.spyro.ai/admin/notifications/system/4a5308cf-ec8d-4e4f-af04-c3bba3779aeb/show"
                          className="d-flex"
                        >
                          <div className="notifyimg bg-info-transparent text-info">
                            {" "}
                            <i className="fa-solid fa-user-check fs-18" />
                          </div>
                          <div className="mr-6">
                            <div className="font-weight-bold fs-12">
                              New User Registered
                            </div>
                            <div className="text-muted fs-10">
                              Name: Carue Main
                            </div>
                            <div className="small text-muted fs-10">
                              2 days ago
                            </div>
                          </div>
                        </a>
                      </div>
                      <div>
                        <a
                          href="#"
                          className="badge badge-primary mark-read mark-as-read"
                          data-id="4a5308cf-ec8d-4e4f-af04-c3bba3779aeb"
                        >
                          Mark as Read
                        </a>
                      </div>
                    </div>
                    <div className="d-flex dropdown-item border-bottom pl-4 pr-4">
                      <div>
                        <a
                          href="https://test.spyro.ai/admin/notifications/system/d77e0b3e-6998-4ea8-8c29-c897dbbbaba9/show"
                          className="d-flex"
                        >
                          <div className="notifyimg bg-info-transparent text-info">
                            {" "}
                            <i className="fa-solid fa-user-check fs-18" />
                          </div>
                          <div className="mr-6">
                            <div className="font-weight-bold fs-12">
                              New User Registered
                            </div>
                            <div className="text-muted fs-10">
                              Name: Jonathan Emmanuel
                            </div>
                            <div className="small text-muted fs-10">
                              1 month ago
                            </div>
                          </div>
                        </a>
                      </div>
                      <div>
                        <a
                          href="#"
                          className="badge badge-primary mark-read mark-as-read"
                          data-id="d77e0b3e-6998-4ea8-8c29-c897dbbbaba9"
                        >
                          Mark as Read
                        </a>
                      </div>
                    </div>
                    <div className="d-flex dropdown-item border-bottom pl-4 pr-4">
                      <div>
                        <a
                          href="https://test.spyro.ai/admin/notifications/system/dedf096e-3001-4567-a45b-2956ebe8eabb/show"
                          className="d-flex"
                        >
                          <div className="notifyimg bg-info-green">
                            {" "}
                            <i className="fa-solid fa-sack-dollar leading-loose" />
                          </div>
                          <div className="mr-4">
                            <div className="font-weight-bold fs-12">
                              New User Payment
                            </div>
                            <div className="text-muted fs-10">
                              From: Jonathan Emmanuel
                            </div>
                            <div className="small text-muted fs-10">
                              1 month ago
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="text-right">
                        <a
                          href="#"
                          className="badge badge-primary mark-read mark-as-read ml-5"
                          data-id="dedf096e-3001-4567-a45b-2956ebe8eabb"
                        >
                          Mark as Read
                        </a>
                      </div>
                    </div>
                    <div className="d-flex dropdown-item border-bottom pl-4 pr-4">
                      <div>
                        <a
                          href="https://test.spyro.ai/admin/notifications/system/8837be0d-a7af-4bd1-8bf8-90a24fc63366/show"
                          className="d-flex"
                        >
                          <div className="notifyimg bg-info-transparent text-info">
                            {" "}
                            <i className="fa-solid fa-user-check fs-18" />
                          </div>
                          <div className="mr-6">
                            <div className="font-weight-bold fs-12">
                              New User Registered
                            </div>
                            <div className="text-muted fs-10">
                              Name: Jonathan Emmanuel
                            </div>
                            <div className="small text-muted fs-10">
                              1 month ago
                            </div>
                          </div>
                        </a>
                      </div>
                      <div>
                        <a
                          href="#"
                          className="badge badge-primary mark-read mark-as-read"
                          data-id="8837be0d-a7af-4bd1-8bf8-90a24fc63366"
                        >
                          Mark as Read
                        </a>
                      </div>
                    </div>
                    <div className="d-flex dropdown-item border-bottom pl-4 pr-4">
                      <div>
                        <a
                          href="https://test.spyro.ai/admin/notifications/system/12128148-4e67-4975-b23b-af758ad92875/show"
                          className="d-flex"
                        >
                          <div className="notifyimg bg-info-transparent text-info">
                            {" "}
                            <i className="fa-solid fa-user-check fs-18" />
                          </div>
                          <div className="mr-6">
                            <div className="font-weight-bold fs-12">
                              New User Registered
                            </div>
                            <div className="text-muted fs-10">
                              Name: Vivian Agbata
                            </div>
                            <div className="small text-muted fs-10">
                              1 month ago
                            </div>
                          </div>
                        </a>
                      </div>
                      <div>
                        <a
                          href="#"
                          className="badge badge-primary mark-read mark-as-read"
                          data-id="12128148-4e67-4975-b23b-af758ad92875"
                        >
                          Mark as Read
                        </a>
                      </div>
                    </div>
                    <div className="d-flex dropdown-item border-bottom pl-4 pr-4">
                      <div>
                        <a
                          href="https://test.spyro.ai/admin/notifications/system/603262db-23d0-4409-aeeb-8e58c8c77a47/show"
                          className="d-flex"
                        >
                          <div className="notifyimg bg-info-transparent text-info">
                            {" "}
                            <i className="fa-solid fa-user-check fs-18" />
                          </div>
                          <div className="mr-6">
                            <div className="font-weight-bold fs-12">
                              New User Registered
                            </div>
                            <div className="text-muted fs-10">
                              Name: Jonathan Emmanuel
                            </div>
                            <div className="small text-muted fs-10">
                              1 month ago
                            </div>
                          </div>
                        </a>
                      </div>
                      <div>
                        <a
                          href="#"
                          className="badge badge-primary mark-read mark-as-read"
                          data-id="603262db-23d0-4409-aeeb-8e58c8c77a47"
                        >
                          Mark as Read
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="view-all-button text-center">
                  <a
                    href="https://test.spyro.ai/admin/notifications/sytem"
                    className="fs-12 font-weight-bold"
                  >
                    View All Notifications
                  </a>
                </div>
              </div>
            </div>
            <div className="dropdown header-expand">
              <a className="nav-link icon" id="fullscreen-button">
                <span
                  className="header-icon fa-solid fa-expand"
                  id="fullscreen-icon"
                />
              </a>
            </div>
            <div className="dropdown header-locale">
              <a className="nav-link icon" data-bs-toggle="dropdown">
                <span className="header-icon flag flag-us pr-1" />
                <span className="header-text fs-13 pr-5">EN</span>
              </a>
              <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow animated">
                <div className="local-menu">
                  <a
                    href="https://test.spyro.ai/locale/es"
                    className="dropdown-item d-flex pl-4"
                  >
                    <div className="text-info">
                      <i className="flag flag-es mr-4" />
                    </div>
                    <div>
                      <span className="font-weight-normal fs-12">Español</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="dropdown profile-dropdown">
              <a href="#" className="nav-link" data-bs-toggle="dropdown">
                <span className="float-right">
                  <img
                    src=" https://test.spyro.ai/img/users/avatar.jpg "
                    alt="img"
                    className="avatar avatar-md"
                  />
                </span>
              </a>
              <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow animated">
                <div className="text-center pt-2">
                  <span className="text-center user fs-12 pb-0 font-weight-bold">
                    Admin
                  </span>
                  <br />
                  <span className="text-center fs-12 text-muted">
                    Administrator
                  </span>
                  <div className="dropdown-divider mt-3" />
                </div>
                <a
                  className="dropdown-item d-flex"
                  href="https://test.spyro.ai/user/pricing/plans"
                >
                  <span className="profile-icon fa-solid fa-box-circle-check" />
                  <div className="fs-12">Pricing Plans</div>
                </a>
                <a
                  className="dropdown-item d-flex"
                  href="https://test.spyro.ai/user/templates"
                >
                  <span className="profile-icon fa-solid fa-microchip-ai" />
                  <div className="fs-12">Templates</div>
                </a>
                <a
                  className="dropdown-item d-flex"
                  href="https://test.spyro.ai/user/workbook"
                >
                  <span className="profile-icon fa-solid fa-folder-bookmark" />
                  <div className="fs-12">Workbooks</div>
                </a>
                <a
                  className="dropdown-item d-flex"
                  href="https://test.spyro.ai/user/purchases"
                >
                  <span className="profile-icon fa-solid fa-money-check-pen" />
                  <span className="fs-12">Transactions</span>
                </a>
                <a
                  className="dropdown-item d-flex"
                  href="https://test.spyro.ai/user/support"
                >
                  <span className="profile-icon fa-solid fa-messages-question" />
                  <div className="fs-12">Support Request</div>
                </a>
                <a
                  className="dropdown-item d-flex"
                  href="https://test.spyro.ai/user/notification"
                >
                  <span className="profile-icon fa-solid fa-message-exclamation" />
                  <div className="fs-12">Notifications</div>
                </a>
                <a
                  className="dropdown-item d-flex"
                  href="https://test.spyro.ai/user/profile"
                >
                  <span className="profile-icon fa-solid fa-id-badge" />
                  <span className="fs-12">My Profile</span>
                </a>
                <a
                  className="dropdown-item d-flex"
                  href="https://test.spyro.ai/user/profile/security"
                >
                  <span className="profile-icon fa-solid fa-lock-hashtag" />
                  <div className="fs-12">Change Password</div>
                </a>
                <a
                  className="dropdown-item d-flex"
                  href="https://test.spyro.ai/logout"
                  onClick={(event) => {
                    event.preventDefault();
                    document.getElementById("logout-form").submit();
                  }}
                >
                  <span className="profile-icon fa-solid fa-right-from-bracket" />
                  <div className="fs-12">Logout</div>
                </a>
                <form
                  id="logout-form"
                  action="https://test.spyro.ai/logout"
                  method="POST"
                  className="d-none"
                >
                  <input
                    type="hidden"
                    name="_token"
                    defaultValue="beAyiS7BRFBdoBu0ya1JJWlmoizwVjtvhuvSC8yI"
                  />
                </form>
              </div>
            </div>
          </div>
          {/* END MENU BAR */}
        </div>
      </div>
    </div>
  );
}
