import React, { useEffect, useState } from "react";

export default function SignUp() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    console.log({ fullName, email, country, password, confirmPassword });
  }, [fullName, email, country, password, confirmPassword]);

  const handleFullNameChange = (event) => setFullName(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handleCountryChange = (event) => setCountry(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);
  const handleConfirmPasswordChange = (event) =>
    setConfirmPassword(event.target.value);

  return (
    <div className="page">
      <div className="page-main">
        {/* App-Content */}
        <div className="main-content">
          <div className="side-app">
            <div className="container-fluid justify-content-center">
              <div className="row h-100vh align-items-center background-white">
                <div
                  className="col-md-7 col-sm-12 text-center background-special h-100 align-middle p-0"
                  id="login-background"
                >
                  <div className="login-bg" />
                </div>
                <div className="col-md-5 col-sm-12 h-100" id="login-responsive">
                  <div className="card-body pr-10 pl-10 pt-10">
                    <form method="POST" action="https://test.spyro.ai/register">
                      <input
                        type="hidden"
                        name="_token"
                        defaultValue="1dhV5Dh7pUf2B75spo4HLcTUKRcomSvoL5KgtxN3"
                      />
                      <h3 className="text-center font-weight-bold mb-8">
                        Sign Up to{" "}
                        <span className="text-info">
                          <a href="https://test.spyro.ai">Spyro</a>
                        </span>
                      </h3>
                      <div className="input-box mb-4">
                        <label
                          htmlFor="name"
                          className="fs-12 font-weight-bold text-md-right"
                        >
                          Full Name
                        </label>
                        <input
                          id="name"
                          type="name"
                          className="form-control "
                          name="name"
                          autoComplete="off"
                          autoFocus
                          placeholder="First and Last Names"
                          onChange={handleFullNameChange}
                          required
                        />
                      </div>
                      <div className="input-box mb-4">
                        <label
                          htmlFor="email"
                          className="fs-12 font-weight-bold text-md-right"
                        >
                          Email Address
                        </label>
                        <input
                          id="email"
                          type="email"
                          className="form-control "
                          name="email"
                          onChange={handleEmailChange}
                          autoComplete="off"
                          placeholder="Email Address"
                          required
                        />
                      </div>
                      <div className="input-box mb-4">
                        <label
                          htmlFor="country"
                          className="fs-12 font-weight-bold text-md-right"
                        >
                          Country
                        </label>
                        <select
                          id="user-country"
                          name="country"
                          data-placeholder="Select Your Country"
                          required
                          style={{ display: "none" }}
                          onChange={handleCountryChange}
                        >
                          <option value="Afganistan">Afganistan</option>
                          <option value="Albania">Albania</option>
                          <option value="Algeria">Algeria</option>
                          <option value="American Samoa">American Samoa</option>
                          <option value="Andorra">Andorra</option>
                          <option value="Angola">Angola</option>
                          <option value="Anguilla">Anguilla</option>
                          <option value="Antigua and Barbuda">
                            Antigua and Barbuda
                          </option>
                          <option value="Argentina">Argentina</option>
                          <option value="Armenia">Armenia</option>
                          <option value="Aruba">Aruba</option>
                          <option value="Australia">Australia</option>
                          <option value="Austria">Austria</option>
                          <option value="Azerbaijan">Azerbaijan</option>
                          <option value="Bahamas">Bahamas</option>
                          <option value="Bahrain">Bahrain</option>
                          <option value="Bangladesh">Bangladesh</option>
                          <option value="Barbados">Barbados</option>
                          <option value="Belarus">Belarus</option>
                          <option value="Belgium">Belgium</option>
                          <option value="Belize">Belize</option>
                          <option value="Benin">Benin</option>
                          <option value="Bermuda">Bermuda</option>
                          <option value="Bhutan">Bhutan</option>
                          <option value="Bolivia">Bolivia</option>
                          <option value="Bonaire">Bonaire</option>
                          <option value="Bosnia and Herzegovina">
                            Bosnia and Herzegovina
                          </option>
                          <option value="Botswana">Botswana</option>
                          <option value="Brazil">Brazil</option>
                          <option value="British Indian Ocean Territory">
                            British Indian Ocean Territory
                          </option>
                          <option value="Brunei">Brunei</option>
                          <option value="Bulgaria">Bulgaria</option>
                          <option value="Burkina Faso">Burkina Faso</option>
                          <option value="Burundi">Burundi</option>
                          <option value="Cambodia">Cambodia</option>
                          <option value="Cameroon">Cameroon</option>
                          <option value="Canada">Canada</option>
                          <option value="Canary Islands">Canary Islands</option>
                          <option value="Cape Verde">Cape Verde</option>
                          <option value="Cayman Islands">Cayman Islands</option>
                          <option value="Central African Republic">
                            Central African Republic
                          </option>
                          <option value="Chad">Chad</option>
                          <option value="Channel Islands">
                            Channel Islands
                          </option>
                          <option value="Chile">Chile</option>
                          <option value="China">China</option>
                          <option value="Christmas Island">
                            Christmas Island
                          </option>
                          <option value="Cocos Island">Cocos Island</option>
                          <option value="Colombia">Colombia</option>
                          <option value="Comoros">Comoros</option>
                          <option value="Congo">Congo</option>
                          <option value="Cook Islands">Cook Islands</option>
                          <option value="Costa Rica">Costa Rica</option>
                          <option value="Cote Divoire">Cote Divoire</option>
                          <option value="Croatia">Croatia</option>
                          <option value="Cuba">Cuba</option>
                          <option value="Curaco">Curaco</option>
                          <option value="Cyprus">Cyprus</option>
                          <option value="Czech Republic">Czech Republic</option>
                          <option value="Denmark">Denmark</option>
                          <option value="Djibouti">Djibouti</option>
                          <option value="Dominica">Dominica</option>
                          <option value="Dominican Republic">
                            Dominican Republic
                          </option>
                          <option value="East Timor">East Timor</option>
                          <option value="Ecuador">Ecuador</option>
                          <option value="Egypt">Egypt</option>
                          <option value="El Salvador">El Salvador</option>
                          <option value="Equatorial Guinea">
                            Equatorial Guinea
                          </option>
                          <option value="Eritrea">Eritrea</option>
                          <option value="Estonia">Estonia</option>
                          <option value="Ethiopia">Ethiopia</option>
                          <option value="Falkland Islands">
                            Falkland Islands
                          </option>
                          <option value="Faroe Islands">Faroe Islands</option>
                          <option value="Fiji">Fiji</option>
                          <option value="Finland">Finland</option>
                          <option value="France">France</option>
                          <option value="French Guiana">French Guiana</option>
                          <option value="French Polynesia">
                            French Polynesia
                          </option>
                          <option value="French Southern Territory">
                            French Southern Territory
                          </option>
                          <option value="Gabon">Gabon</option>
                          <option value="Gambia">Gambia</option>
                          <option value="Georgia">Georgia</option>
                          <option value="Germany">Germany</option>
                          <option value="Ghana">Ghana</option>
                          <option value="Gibraltar">Gibraltar</option>
                          <option value="Great Britain">Great Britain</option>
                          <option value="Greece">Greece</option>
                          <option value="Greenland">Greenland</option>
                          <option value="Grenada">Grenada</option>
                          <option value="Guadeloupe">Guadeloupe</option>
                          <option value="Guam">Guam</option>
                          <option value="Guatemala">Guatemala</option>
                          <option value="Guinea">Guinea</option>
                          <option value="Guyana">Guyana</option>
                          <option value="Haiti">Haiti</option>
                          <option value="Hawaii">Hawaii</option>
                          <option value="Honduras">Honduras</option>
                          <option value="Hong Kong">Hong Kong</option>
                          <option value="Hungary">Hungary</option>
                          <option value="Iceland">Iceland</option>
                          <option value="Indonesia">Indonesia</option>
                          <option value="India">India</option>
                          <option value="Iran">Iran</option>
                          <option value="Iraq">Iraq</option>
                          <option value="Ireland">Ireland</option>
                          <option value="Isle of Man">Isle of Man</option>
                          <option value="Israel">Israel</option>
                          <option value="Italy">Italy</option>
                          <option value="Jamaica">Jamaica</option>
                          <option value="Japan">Japan</option>
                          <option value="Jordan">Jordan</option>
                          <option value="Kazakhstan">Kazakhstan</option>
                          <option value="Kenya">Kenya</option>
                          <option value="Kiribati">Kiribati</option>
                          <option value="North Korea">North Korea</option>
                          <option value="South Korea">South Korea</option>
                          <option value="Kuwait">Kuwait</option>
                          <option value="Kyrgyzstan">Kyrgyzstan</option>
                          <option value="Laos">Laos</option>
                          <option value="Latvia">Latvia</option>
                          <option value="Lebanon">Lebanon</option>
                          <option value="Lesotho">Lesotho</option>
                          <option value="Liberia">Liberia</option>
                          <option value="Libya">Libya</option>
                          <option value="Liechtenstein">Liechtenstein</option>
                          <option value="Lithuania">Lithuania</option>
                          <option value="Luxembourg">Luxembourg</option>
                          <option value="Macau">Macau</option>
                          <option value="Macedonia">Macedonia</option>
                          <option value="Madagascar">Madagascar</option>
                          <option value="Malaysia">Malaysia</option>
                          <option value="Malawi">Malawi</option>
                          <option value="Maldives">Maldives</option>
                          <option value="Mali">Mali</option>
                          <option value="Malta">Malta</option>
                          <option value="Marshall Islands">
                            Marshall Islands
                          </option>
                          <option value="Martinique">Martinique</option>
                          <option value="Mauritania">Mauritania</option>
                          <option value="Mauritius">Mauritius</option>
                          <option value="Mayotte">Mayotte</option>
                          <option value="Mexico">Mexico</option>
                          <option value="Midway Islands">Midway Islands</option>
                          <option value="Moldova">Moldova</option>
                          <option value="Monaco">Monaco</option>
                          <option value="Mongolia">Mongolia</option>
                          <option value="Montserrat">Montserrat</option>
                          <option value="Morocco">Morocco</option>
                          <option value="Mozambique">Mozambique</option>
                          <option value="Myanmar">Myanmar</option>
                          <option value="Nambia">Nambia</option>
                          <option value="Nauru">Nauru</option>
                          <option value="Nepal">Nepal</option>
                          <option value="Netherland Antilles">
                            Netherland Antilles
                          </option>
                          <option value="Netherlands">Netherlands</option>
                          <option value="Nevis">Nevis</option>
                          <option value="New Caledonia">New Caledonia</option>
                          <option value="New Zealand">New Zealand</option>
                          <option value="Nicaragua">Nicaragua</option>
                          <option value="Niger">Niger</option>
                          <option value="Nigeria">Nigeria</option>
                          <option value="Niue">Niue</option>
                          <option value="Norfolk Island">Norfolk Island</option>
                          <option value="Norway">Norway</option>
                          <option value="Oman">Oman</option>
                          <option value="Pakistan">Pakistan</option>
                          <option value="Palau Island">Palau Island</option>
                          <option value="Palestine">Palestine</option>
                          <option value="Panama">Panama</option>
                          <option value="Papua New Guinea">
                            Papua New Guinea
                          </option>
                          <option value="Paraguay">Paraguay</option>
                          <option value="Peru">Peru</option>
                          <option value="Phillipines">Phillipines</option>
                          <option value="Pitcairn Island">
                            Pitcairn Island
                          </option>
                          <option value="Poland">Poland</option>
                          <option value="Portugal">Portugal</option>
                          <option value="Puerto Rico">Puerto Rico</option>
                          <option value="Qatar">Qatar</option>
                          <option value="Republic of Montenegro">
                            Republic of Montenegro
                          </option>
                          <option value="Republic of Serbia">
                            Republic of Serbia
                          </option>
                          <option value="Reunion">Reunion</option>
                          <option value="Romania">Romania</option>
                          <option value="Russia">Russia</option>
                          <option value="Rwanda">Rwanda</option>
                          <option value="St Barthelemy">St Barthelemy</option>
                          <option value="St Eustatius">St Eustatius</option>
                          <option value="St Helena">St Helena</option>
                          <option value="St Kitts-Nevis">St Kitts-Nevis</option>
                          <option value="St Lucia">St Lucia</option>
                          <option value="St Maarten">St Maarten</option>
                          <option value="St Pierre and Miquelon">
                            St Pierre and Miquelon
                          </option>
                          <option value="St Vincent and Grenadines">
                            St Vincent and Grenadines
                          </option>
                          <option value="Saipan">Saipan</option>
                          <option value="Samoa">Samoa</option>
                          <option value="American Samoa">American Samoa</option>
                          <option value="San Marino">San Marino</option>
                          <option value="Sao Tome and Principe">
                            Sao Tome and Principe
                          </option>
                          <option value="Saudi Arabia">Saudi Arabia</option>
                          <option value="Senegal">Senegal</option>
                          <option value="Seychelles">Seychelles</option>
                          <option value="Sierra Leone">Sierra Leone</option>
                          <option value="Singapore">Singapore</option>
                          <option value="Slovakia">Slovakia</option>
                          <option value="Slovenia">Slovenia</option>
                          <option value="Solomon Islands">
                            Solomon Islands
                          </option>
                          <option value="Somalia">Somalia</option>
                          <option value="South Africa">South Africa</option>
                          <option value="Spain" selected>
                            Spain
                          </option>
                          <option value="Sri Lanka">Sri Lanka</option>
                          <option value="Sudan">Sudan</option>
                          <option value="Suriname">Suriname</option>
                          <option value="Swaziland">Swaziland</option>
                          <option value="Sweden">Sweden</option>
                          <option value="Switzerland">Switzerland</option>
                          <option value="Syria">Syria</option>
                          <option value="Tahiti">Tahiti</option>
                          <option value="Taiwan">Taiwan</option>
                          <option value="Tajikistan">Tajikistan</option>
                          <option value="Tanzania">Tanzania</option>
                          <option value="Thailand">Thailand</option>
                          <option value="Togo">Togo</option>
                          <option value="Tokelau">Tokelau</option>
                          <option value="Tonga">Tonga</option>
                          <option value="Trinidad and Tobago">
                            Trinidad and Tobago
                          </option>
                          <option value="Tunisia">Tunisia</option>
                          <option value="Turkey">Turkey</option>
                          <option value="Turkmenistan">Turkmenistan</option>
                          <option value="Turks and Caicos Islands">
                            Turks and Caicos Islands
                          </option>
                          <option value="Tuvalu">Tuvalu</option>
                          <option value="Uganda">Uganda</option>
                          <option value="United Kingdom">United Kingdom</option>
                          <option value="Ukraine">Ukraine</option>
                          <option value="United Arab Erimates">
                            United Arab Erimates
                          </option>
                          <option value="United States">United States</option>
                          <option value="Uraguay">Uraguay</option>
                          <option value="Uzbekistan">Uzbekistan</option>
                          <option value="Vanuatu">Vanuatu</option>
                          <option value="Vatican City State">
                            Vatican City State
                          </option>
                          <option value="Venezuela">Venezuela</option>
                          <option value="Vietnam">Vietnam</option>
                          <option value="Virgin Islands (Britain)">
                            Virgin Islands (Britain)
                          </option>
                          <option value="Virgin Islands (USA)">
                            Virgin Islands (USA)
                          </option>
                          <option value="Wake Island">Wake Island</option>
                          <option value="Wallis and Futana Island">
                            Wallis and Futana Island
                          </option>
                          <option value="Yemen">Yemen</option>
                          <option value="Zaire">Zaire</option>
                          <option value="Zambia">Zambia</option>
                          <option value="Zimbabwe">Zimbabwe</option>
                        </select>
                        <div
                          data-immersive="false"
                          id="awselect_user-country"
                          data-select="user-country"
                          className="awselect hasValue"
                        >
                          <div style={{ background: "#fff" }} className="bg" />
                          <div
                            style={{ padding: "15px 40px" }}
                            className="front_face"
                          >
                            <div
                              style={{ background: "#e5e5e5" }}
                              className="bg"
                            />
                            <div
                              data-inactive-color="#000"
                              style={{ color: "#000" }}
                              className="content"
                            >
                              <span className="current_value">Spain</span>
                              <span className="placeholder">
                                Select Your Country
                              </span>
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
                                  <path d="M17.418,6.109c0.272-0.268,0.709-0.268,0.979,0c0.27,0.268,0.271,0.701,0,0.969l-7.908,7.83c-0.27,0.268-0.707,0.268-0.979,0l-7.908-7.83c-0.27-0.268-0.27-0.701,0-0.969c0.271-0.268,0.709-0.268,0.979,0L10,13.25L17.418,6.109z" />
                                </svg>
                              </i>
                            </div>
                          </div>
                          <div
                            style={{ padding: "15px 0" }}
                            className="back_face"
                          >
                            <ul style={{ color: "#000" }}>
                              <li>
                                <a style={{ padding: "2px 40px" }}>
                                  Afganistan
                                </a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Albania</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Algeria</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>
                                  American Samoa
                                </a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Andorra</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Angola</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Anguilla</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>
                                  Antigua and Barbuda
                                </a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Argentina</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Armenia</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Aruba</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Australia</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Austria</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>
                                  Azerbaijan
                                </a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Bahamas</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Bahrain</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>
                                  Bangladesh
                                </a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Barbados</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Belarus</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Belgium</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Belize</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Benin</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Bermuda</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Bhutan</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Bolivia</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Bonaire</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>
                                  Bosnia and Herzegovina
                                </a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Botswana</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Brazil</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>
                                  British Indian Ocean Territory
                                </a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Brunei</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Bulgaria</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>
                                  Burkina Faso
                                </a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Burundi</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Cambodia</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Cameroon</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Canada</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>
                                  Canary Islands
                                </a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>
                                  Cape Verde
                                </a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>
                                  Cayman Islands
                                </a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>
                                  Central African Republic
                                </a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Chad</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>
                                  Channel Islands
                                </a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Chile</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>China</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>
                                  Christmas Island
                                </a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>
                                  Cocos Island
                                </a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Colombia</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Comoros</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Congo</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>
                                  Cook Islands
                                </a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>
                                  Costa Rica
                                </a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>
                                  Cote Divoire
                                </a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Croatia</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Cuba</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Curaco</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Cyprus</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>
                                  Czech Republic
                                </a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Denmark</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Djibouti</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Dominica</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>
                                  Dominican Republic
                                </a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>
                                  East Timor
                                </a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Ecuador</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Egypt</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>
                                  El Salvador
                                </a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>
                                  Equatorial Guinea
                                </a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Eritrea</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Estonia</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Ethiopia</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>
                                  Falkland Islands
                                </a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>
                                  Faroe Islands
                                </a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Fiji</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Finland</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>France</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>
                                  French Guiana
                                </a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>
                                  French Polynesia
                                </a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>
                                  French Southern Territory
                                </a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Gabon</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Gambia</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Georgia</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Germany</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Ghana</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Gibraltar</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>
                                  Great Britain
                                </a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Greece</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Greenland</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Grenada</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>
                                  Guadeloupe
                                </a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Guam</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Guatemala</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Guinea</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Guyana</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Haiti</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Hawaii</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Honduras</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Hong Kong</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Hungary</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Iceland</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Indonesia</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>India</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Iran</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Iraq</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Ireland</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>
                                  Isle of Man
                                </a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Israel</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Italy</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Jamaica</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Japan</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Jordan</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>
                                  Kazakhstan
                                </a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Kenya</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Kiribati</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>
                                  North Korea
                                </a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>
                                  South Korea
                                </a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Kuwait</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>
                                  Kyrgyzstan
                                </a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Laos</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Latvia</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Lebanon</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Lesotho</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Liberia</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Libya</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>
                                  Liechtenstein
                                </a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Lithuania</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>
                                  Luxembourg
                                </a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Macau</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Macedonia</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>
                                  Madagascar
                                </a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Malaysia</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Malawi</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Maldives</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Mali</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Malta</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>
                                  Marshall Islands
                                </a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>
                                  Martinique
                                </a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>
                                  Mauritania
                                </a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Mauritius</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Mayotte</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Mexico</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>
                                  Midway Islands
                                </a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Moldova</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Monaco</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Mongolia</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>
                                  Montserrat
                                </a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Morocco</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>
                                  Mozambique
                                </a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Myanmar</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Nambia</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Nauru</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Nepal</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>
                                  Netherland Antilles
                                </a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>
                                  Netherlands
                                </a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Nevis</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>
                                  New Caledonia
                                </a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>
                                  New Zealand
                                </a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Nicaragua</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Niger</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Nigeria</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Niue</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>
                                  Norfolk Island
                                </a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Norway</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Oman</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Pakistan</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>
                                  Palau Island
                                </a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Palestine</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Panama</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>
                                  Papua New Guinea
                                </a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Paraguay</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Peru</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>
                                  Phillipines
                                </a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>
                                  Pitcairn Island
                                </a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Poland</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Portugal</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>
                                  Puerto Rico
                                </a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Qatar</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>
                                  Republic of Montenegro
                                </a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>
                                  Republic of Serbia
                                </a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Reunion</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Romania</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Russia</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Rwanda</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>
                                  St Barthelemy
                                </a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>
                                  St Eustatius
                                </a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>St Helena</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>
                                  St Kitts-Nevis
                                </a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>St Lucia</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>
                                  St Maarten
                                </a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>
                                  St Pierre and Miquelon
                                </a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>
                                  St Vincent and Grenadines
                                </a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Saipan</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Samoa</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>
                                  American Samoa
                                </a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>
                                  San Marino
                                </a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>
                                  Sao Tome and Principe
                                </a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>
                                  Saudi Arabia
                                </a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Senegal</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>
                                  Seychelles
                                </a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>
                                  Sierra Leone
                                </a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Singapore</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Slovakia</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Slovenia</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>
                                  Solomon Islands
                                </a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Somalia</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>
                                  South Africa
                                </a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Spain</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Sri Lanka</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Sudan</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Suriname</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Swaziland</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Sweden</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>
                                  Switzerland
                                </a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Syria</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Tahiti</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Taiwan</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>
                                  Tajikistan
                                </a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Tanzania</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Thailand</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Togo</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Tokelau</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Tonga</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>
                                  Trinidad and Tobago
                                </a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Tunisia</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Turkey</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>
                                  Turkmenistan
                                </a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>
                                  Turks and Caicos Islands
                                </a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Tuvalu</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Uganda</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>
                                  United Kingdom
                                </a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Ukraine</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>
                                  United Arab Erimates
                                </a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>
                                  United States
                                </a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Uraguay</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>
                                  Uzbekistan
                                </a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Vanuatu</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>
                                  Vatican City State
                                </a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Venezuela</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Vietnam</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>
                                  Virgin Islands (Britain)
                                </a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>
                                  Virgin Islands (USA)
                                </a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>
                                  Wake Island
                                </a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>
                                  Wallis and Futana Island
                                </a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Yemen</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Zaire</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Zambia</a>
                              </li>
                              <li>
                                <a style={{ padding: "2px 40px" }}>Zimbabwe</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="input-box">
                        <label
                          htmlFor="password-input"
                          className="fs-12 font-weight-bold text-md-right"
                        >
                          Password
                        </label>
                        <input
                          id="password-input"
                          type="password"
                          className="form-control "
                          name="password"
                          required
                          autoComplete="off"
                          placeholder="Password"
                          onChange={handlePasswordChange}
                        />
                      </div>
                      <div className="input-box">
                        <label
                          htmlFor="password-confirm"
                          className="fs-12 font-weight-bold text-md-right"
                        >
                          Confirm Password
                        </label>
                        <input
                          id="password-confirm"
                          type="password"
                          className="form-control"
                          name="password_confirmation"
                          required
                          autoComplete="off"
                          placeholder="Confirm Password"
                          onChange={handleConfirmPasswordChange}
                        />
                      </div>
                      <div className="form-group mb-3">
                        <div className="d-flex">
                          <label className="custom-switch">
                            <input
                              type="checkbox"
                              className="custom-switch-input"
                              name="agreement"
                              id="agreement"
                              required
                            />
                            <span className="custom-switch-indicator" />
                            <span className="custom-switch-description fs-10 text-muted">
                              By continuing, I agree with your{" "}
                              <a
                                href="https://test.spyro.ai/terms-and-conditions"
                                className="text-info"
                              >
                                Terms and Conditions
                              </a>{" "}
                              and{" "}
                              <a
                                href="https://test.spyro.ai/privacy-policy"
                                className="text-info"
                              >
                                Privacy Policies
                              </a>
                            </span>
                          </label>
                        </div>
                      </div>
                      <input
                        type="hidden"
                        name="recaptcha"
                        id="recaptcha"
                        defaultValue="03AL8dmw-xjVKRenOYCKzXSLrWCIVyCqMKUcpyfGKxHZcMDCGXVrHOZaNKAutOyfek4AP0bjKaoRp9xeGPp7VWQVkZHXla3naG-8vdIcCGOzK_k5oBThrMUG0vJv2wqXwcgV0ChC1oQWMhf9drJ6G589_V0g0tvkmz4whP-fkrnQ6PC4yxjLkUWEVE45eyYhp89YlF7m6HyQULfwH1YYUDfsJD2PTLM2n-wUDIWPBVrJUHktoIGbhdAbWdnAPs3kaLXOxvURQgqLPmqch59PiWXWCtWU7_T62nN4pJAoGICJHzDfBBbL0SXzL9U2kgzKiKnR7vibfjGSSbCLTda3gGPI7tMYVv5Zzx0aAr0bJkfE6YYrHhvmzx56Z9PsJf9kdQdaFyo0YaiSBG3o9uphVDx5kZSKUHTDbCqC3o5iu62hFqgI_gmdYhDKEe8UFkG7A7XxmAVScxUJyDr71bmavJTIMyeAqYxGTn7OyXIkN51ycH4zuOXfUj5N8sVv0ipLltDhGI2R-4miANTO4X1Hq__rx5NGx5Ym2J3w"
                      />
                      <div className="form-group mb-0">
                        <button type="submit" className="btn btn-primary mr-2">
                          Sign Up
                        </button>
                        <p className="fs-10 text-muted mt-2">
                          or{" "}
                          <a
                            className="text-info"
                            href="https://test.spyro.ai/login"
                          >
                            Login
                          </a>
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
