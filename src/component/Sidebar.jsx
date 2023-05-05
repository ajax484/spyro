import React from "react";

export default function Sidebar() {
  return (
    <>
      {/* SIDE MENU BAR */}
      <aside className="app-sidebar active ps ps--active-y">
        <div className="app-sidebar__logo">
          <a className="header-brand" href="https://test.spyro.ai">
            <img
              src="https://test.spyro.ai/img/brand/logo.png"
              className="header-brand-img desktop-lgo"
              alt="Admintro logo"
            />
            <img
              src="https://test.spyro.ai/img/brand/favicon.png"
              className="header-brand-img mobile-logo"
              alt="Admintro logo"
            />
          </a>
        </div>
        <ul className="side-menu app-sidebar3">
          <div className="side-progress-position mt-4">
            <div className="inline-flex w-100 text-center">
              <div className="flex w-100">
                <span
                  className="fs-12 font-weight-bold"
                  id="side-word-notification"
                >
                  <i className="fa-solid fa-scroll-old text-yellow mr-2" />
                  <span className="text-primary mr-1" id="available-words">
                    100,000
                  </span>{" "}
                  <span className="text-muted">words left</span>
                </span>
              </div>
              <a
                href="https://test.spyro.ai/user/pricing/plans"
                className="btn btn-cancel-upgrade mt-3 fs-12 pl-6 pr-6"
              >
                <i className="fa-solid fa-circle-bolt mr-3 fs-15 text-yellow vertical-align-middle" />
                Upgrade
              </a>
            </div>
          </div>
          <li className="slide">
            <a
              className="side-menu__item"
              href="https://test.spyro.ai/admin/dashboard"
            >
              <span className="side-menu__icon fa-solid fa-chart-tree-map" />
              <span className="side-menu__label">Dashboard</span>
            </a>
          </li>
          <li className="slide is-expanded">
            <a className="side-menu__item active" data-toggle="slide" href="#">
              <span className="side-menu__icon fa-solid fa-id-badge" />
              <span className="side-menu__label">User Management</span>
              <i className="angle fa fa-angle-right" />
            </a>
            <ul className="slide-menu">
              <li className="active">
                <a
                  href="https://test.spyro.ai/admin/users/dashboard"
                  className="slide-item active"
                >
                  User Dashboard
                </a>
              </li>
              <li>
                <a
                  href="https://test.spyro.ai/admin/users/list"
                  className="slide-item"
                >
                  User List
                </a>
              </li>
              <li>
                <a
                  href="https://test.spyro.ai/admin/users/activity"
                  className="slide-item"
                >
                  Activity Monitoring
                </a>
              </li>
            </ul>
          </li>
          <li className="slide">
            <a
              className="side-menu__item"
              href="https://test.spyro.ai/admin/support"
            >
              <span className="side-menu__icon fa-solid fa-message-question" />
              <span className="side-menu__label">Support Requests</span>
            </a>
          </li>
          <li className="slide">
            <a className="side-menu__item" data-toggle="slide" href="#">
              <span className="side-menu__icon fa-solid fa-message-exclamation" />
              <span className="side-menu__label">Notifications</span>
              <span className="badge badge-warning" id="total-notifications-a">
                6
              </span>
            </a>
            <ul className="slide-menu">
              <li>
                <a
                  href="https://test.spyro.ai/admin/notifications"
                  className="slide-item"
                >
                  Mass Notifications
                </a>
              </li>
              <li>
                <a
                  href="https://test.spyro.ai/admin/notifications/sytem"
                  className="slide-item"
                >
                  System Notifications
                  <span
                    className="badge badge-warning ml-5"
                    id="total-notifications-b"
                  >
                    6
                  </span>
                </a>
              </li>
            </ul>
          </li>
          <li className="slide">
            <a className="side-menu__item" data-toggle="slide" href="#">
              <span className="side-menu__icon fa-solid fa-earth-americas" />
              <span className="side-menu__label">Frontend Management</span>
              <i className="angle fa fa-angle-right" />
            </a>
            <ul className="slide-menu">
              <li>
                <a
                  href="https://test.spyro.ai/admin/settings/frontend"
                  className="slide-item"
                >
                  Frontend Settings
                </a>
              </li>
              <li>
                <a
                  href="https://test.spyro.ai/admin/settings/appearance"
                  className="slide-item"
                >
                  SEO &amp; Logos
                </a>
              </li>
              <li>
                <a
                  href="https://test.spyro.ai/admin/settings/blog"
                  className="slide-item"
                >
                  Blogs Manager
                </a>
              </li>
              <li>
                <a
                  href="https://test.spyro.ai/admin/settings/faq"
                  className="slide-item"
                >
                  FAQs Manager
                </a>
              </li>
              <li>
                <a
                  href="https://test.spyro.ai/admin/settings/review"
                  className="slide-item"
                >
                  Reviews Manager
                </a>
              </li>
              <li>
                <a
                  href="https://test.spyro.ai/admin/settings/terms"
                  className="slide-item"
                >
                  T&amp;C Pages Manager
                </a>
              </li>
              <li>
                <a
                  href="https://test.spyro.ai/admin/settings/adsense"
                  className="slide-item"
                >
                  Google Adsense
                </a>
              </li>
            </ul>
          </li>
          <li className="slide">
            <a className="side-menu__item" data-toggle="slide" href="#">
              <span className="side-menu__icon fa fa-sliders" />
              <span className="side-menu__label">General Settings</span>
              <i className="angle fa fa-angle-right" />
            </a>
            <ul className="slide-menu">
              <li>
                <a
                  href="https://test.spyro.ai/admin/settings/global"
                  className="slide-item"
                >
                  Global Settings
                </a>
              </li>
              <li>
                <a
                  href="https://test.spyro.ai/admin/settings/oauth"
                  className="slide-item"
                >
                  Auth Settings
                </a>
              </li>
              <li>
                <a
                  href="https://test.spyro.ai/admin/settings/registration"
                  className="slide-item"
                >
                  Registration Settings
                </a>
              </li>
              <li>
                <a
                  href="https://test.spyro.ai/admin/settings/smtp"
                  className="slide-item"
                >
                  SMTP Settings
                </a>
              </li>
              <li>
                <a
                  href="https://test.spyro.ai/admin/settings/backup"
                  className="slide-item"
                >
                  Database Backup
                </a>
              </li>
              <li>
                <a
                  href="https://test.spyro.ai/admin/settings/activation"
                  className="slide-item"
                >
                  Activation
                </a>
              </li>
              <li>
                <a
                  href="https://test.spyro.ai/admin/settings/upgrade"
                  className="slide-item"
                >
                  Upgrade Software
                </a>
              </li>
              <li>
                <a
                  href="https://test.spyro.ai/admin/settings/clear"
                  className="slide-item"
                >
                  Clear Cache
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <div className="ps__rail-x" style={{ left: 0, bottom: 0 }}>
          <div
            className="ps__thumb-x"
            tabIndex={0}
            style={{ left: 0, width: 0 }}
          />
        </div>
        <div className="ps__rail-y" style={{ top: 0, height: 609, right: 0 }}>
          <div
            className="ps__thumb-y"
            tabIndex={0}
            style={{ top: 0, height: 319 }}
          />
        </div>
      </aside>
      {/* END SIDE MENU BAR */}
    </>
  );
}
