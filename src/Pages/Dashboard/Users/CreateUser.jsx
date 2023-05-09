import React from "react";
import ReactFlagsSelect from "react-flags-select";
import { country_codes } from "../../../utils/data";
import { useNavigate } from "react-router-dom";

export default function CreateUser() {
  const navigate = useNavigate();

  return (
    <div className="bg-white shadow-md rounded-xl border-gray-100 overflow-hidden border-[1px] space-y-4 w-2/3">
      <div className="border-b-[1px] border-gray-200 px-4 py-4">
        <h2 className="text-lg font-bold">Create New User</h2>
      </div>
      <form action="" className="p-4 space-y-10 divide-y-[1px] divide-gray-200">
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="flex-1 space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-right">
                Full Name <small className="text-gray-500">(Required)</small>
              </label>
              <br />
              <input
                id="name"
                type="name"
                className="bg-primary/5 rounded-lg px-4 py-2 w-full border border-gray-100 hover:border-sky-200 focus:outline-1 focus:outline-sky-200"
                name="name"
                autoComplete="off"
                autoFocus
                placeholder="First and Last Names"
                //   onChange={handleFullNameChange}
                required
              />
            </div>
            <div className="flex-1 space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-right">
                Email <small className="text-gray-500">(Required)</small>
              </label>
              <br />
              <input
                id="email"
                type="email"
                className="bg-primary/5 rounded-lg px-4 py-2 w-full border border-gray-100 hover:border-sky-200 focus:outline-1 focus:outline-sky-200"
                name="email"
                autoComplete="off"
                autoFocus
                placeholder="First and Last Names"
                //   onChange={handleFullNameChange}
                required
              />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-1 space-y-2">
              <label
                htmlFor="password"
                className="text-sm font-medium text-right"
              >
                Password <small className="text-gray-500">(Required)</small>
              </label>
              <br />
              <input
                id="password"
                type="password"
                className="bg-primary/5 rounded-lg px-4 py-2 w-full border border-gray-100 hover:border-sky-200 focus:outline-1 focus:outline-sky-200"
                name="password"
                autoComplete="off"
                autoFocus
                placeholder="password"
                //   onChange={handleFullNameChange}
                required
              />
            </div>
            <div className="flex-1 space-y-2">
              <label
                htmlFor="password"
                className="text-sm font-medium text-right"
              >
                Confirm Password <small className="text-gray-500">(Required)</small>
              </label>
              <br />
              <input
                id="confirmpassword"
                type="password"
                className="bg-primary/5 rounded-lg px-4 py-2 w-full border border-gray-100 hover:border-sky-200 focus:outline-1 focus:outline-sky-200"
                name="confirmpassword"
                autoComplete="off"
                autoFocus
                placeholder="confirm password"
                //   onChange={handleFullNameChange}
                required
              />
            </div>
          </div>
          <div className="space-y-2 w-1/2 pr-2">
            <label htmlFor="role" className="text-sm font-medium text-right">
              User Role
            </label>
            <select
              id="user-role"
              name="role"
              data-placeholder="Select User Role"
              className="bg-primary/5 rounded-lg px-4 py-2 w-full border border-gray-100 hover:border-sky-200 focus:outline-1 focus:outline-sky-200"
              required
              // onChange={handleCountryChange}
            >
              <option value="user">User</option>
              <option value="subscriber">Subscriber</option>
              <option value="admin">Admin</option>
            </select>
          </div>
        </div>
        <div className="space-y-6 pt-6">
          <div className="flex gap-4">
            <div className="flex-1 space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-right">
                Job Role <small className="text-gray-500">(optional)</small>
              </label>
              <br />
              <input
                id="jobrole"
                type="text"
                className="bg-primary/5 rounded-lg px-4 py-2 w-full border border-gray-100 hover:border-sky-200 focus:outline-1 focus:outline-sky-200"
                name="jobrole"
                autoComplete="off"
                autoFocus
                //   onChange={handleFullNameChange}
              />
            </div>
            <div className="flex-1 space-y-2">
              <label
                htmlFor="number"
                className="text-sm font-medium text-right"
              >
                Phone Number <small className="text-gray-500">(optional)</small>
              </label>
              <br />
              <div className="flex gap-2">
                <div className="flex-[40%]">
                  <select
                    id="country-code"
                    name="country-code"
                    className="bg-primary/5 rounded-lg px-4 py-2 w-full border border-gray-100 hover:border-sky-200 focus:outline-1 focus:outline-sky-200"
                    required
                    // onChange={handleCountryChange}
                  >
                    {country_codes.map((country) => (
                      <option value={country.value}>
                        <span className="font-semibold text-sm">
                          {country.code}
                          {" - "}
                        </span>
                        <span>{country.value}</span>
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex-[60%]">
                  <input
                    id="number"
                    type="number"
                    max={9}
                    className="bg-primary/5 rounded-lg px-4 py-2 w-full border border-gray-100 hover:border-sky-200 focus:outline-1 focus:outline-sky-200 appearance-none"
                    name="number"
                    autoComplete="off"
                    autoFocus
                    placeholder="First and Last Names"
                    //   onChange={handleFullNameChange}
                    required
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-1 space-y-2">
              <label
                htmlFor="company_name"
                className="text-sm font-medium text-right"
              >
                Company Name <small className="text-gray-500">(optional)</small>
              </label>
              <br />
              <input
                id="company_name"
                className="bg-primary/5 rounded-lg px-4 py-2 w-full border border-gray-100 hover:border-sky-200 focus:outline-1 focus:outline-sky-200"
                name="company_name"
                autoComplete="off"
                autoFocus
                //   onChange={handleFullNameChange}
                required
              />
            </div>
            <div className="flex-1 space-y-2">
              <label
                htmlFor="company_website"
                className="text-sm font-medium text-right"
              >
                Company Website <small className="text-gray-500">(optional)</small>
              </label>
              <br />
              <input
                id="company_website"
                className="bg-primary/5 rounded-lg px-4 py-2 w-full border border-gray-100 hover:border-sky-200 focus:outline-1 focus:outline-sky-200"
                name="company_website"
                autoComplete="off"
                autoFocus
                //   onChange={handleFullNameChange}
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <label
              htmlFor="addressline"
              className="text-sm font-bold text-right"
            >
              Address Line <small className="text-gray-500">(optional)</small>
            </label>
            <br />
            <input
              id="addressline"
              className="bg-primary/5 rounded-lg px-4 py-2 w-full border border-gray-100 hover:border-sky-200 focus:outline-1 focus:outline-sky-200"
              name="addressline"
              //   onChange={handleEmailChange}
              autoComplete="off"
            />
          </div>
          <div className="flex gap-4">
            <div className="flex-[33%]">
              <label htmlFor="city" className="text-sm font-bold text-right">
                City <small className="text-gray-500">(optional)</small>
              </label>
              <br />
              <input
                id="city"
                className="bg-primary/5 rounded-lg px-4 py-2 w-full border border-gray-100 hover:border-sky-200 focus:outline-1 focus:outline-sky-200"
                name="city"
                //   onChange={handleEmailChange}
                autoComplete="off"
              />
            </div>
            <div className="flex-[33%]">
              <label
                htmlFor="postalcode"
                className="text-sm font-bold text-right"
              >
                Postal Code <small className="text-gray-500">(optional)</small>
              </label>
              <br />
              <input
                id="postalcode"
                className="bg-primary/5 rounded-lg px-4 py-2 w-full border border-gray-100 hover:border-sky-200 focus:outline-1 focus:outline-sky-200"
                name="postalcode"
                //   onChange={handleEmailChange}
                autoComplete="off"
              />
            </div>
            <div className="flex-[33%]">
              <label
                htmlFor="postalcode"
                className="text-sm font-bold text-right"
              >
                Country <small className="text-gray-500">(optional)</small>
              </label>
              <br />
              <select
                id="user-country"
                name="country"
                className="bg-primary/5 rounded-lg px-4 py-2 w-full border border-gray-100 hover:border-sky-200 focus:outline-1 focus:outline-sky-200"
                required
                // onChange={handleCountryChange}
              >
                <option value="Afganistan">Afganistan</option>
                <option value="Albania">Albania</option>
                <option value="Algeria">Algeria</option>
                <option value="American Samoa">American Samoa</option>
                <option value="Andorra">Andorra</option>
                <option value="Angola">Angola</option>
                <option value="Anguilla">Anguilla</option>
                <option value="Antigua and Barbuda">Antigua and Barbuda</option>
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
                <option value="Channel Islands">Channel Islands</option>
                <option value="Chile">Chile</option>
                <option value="China">China</option>
                <option value="Christmas Island">Christmas Island</option>
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
                <option value="Dominican Republic">Dominican Republic</option>
                <option value="East Timor">East Timor</option>
                <option value="Ecuador">Ecuador</option>
                <option value="Egypt">Egypt</option>
                <option value="El Salvador">El Salvador</option>
                <option value="Equatorial Guinea">Equatorial Guinea</option>
                <option value="Eritrea">Eritrea</option>
                <option value="Estonia">Estonia</option>
                <option value="Ethiopia">Ethiopia</option>
                <option value="Falkland Islands">Falkland Islands</option>
                <option value="Faroe Islands">Faroe Islands</option>
                <option value="Fiji">Fiji</option>
                <option value="Finland">Finland</option>
                <option value="France">France</option>
                <option value="French Guiana">French Guiana</option>
                <option value="French Polynesia">French Polynesia</option>
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
                <option value="Marshall Islands">Marshall Islands</option>
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
                <option value="Netherland Antilles">Netherland Antilles</option>
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
                <option value="Papua New Guinea">Papua New Guinea</option>
                <option value="Paraguay">Paraguay</option>
                <option value="Peru">Peru</option>
                <option value="Phillipines">Phillipines</option>
                <option value="Pitcairn Island">Pitcairn Island</option>
                <option value="Poland">Poland</option>
                <option value="Portugal">Portugal</option>
                <option value="Puerto Rico">Puerto Rico</option>
                <option value="Qatar">Qatar</option>
                <option value="Republic of Montenegro">
                  Republic of Montenegro
                </option>
                <option value="Republic of Serbia">Republic of Serbia</option>
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
                <option value="Solomon Islands">Solomon Islands</option>
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
                <option value="Trinidad and Tobago">Trinidad and Tobago</option>
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
                <option value="Vatican City State">Vatican City State</option>
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
            </div>
          </div>
        </div>
        <div className="py-4 flex justify-end gap-4 mr-4">
          <button
            type="submit"
            className="bg-black rounded-lg py-2 px-3 text-white font-semibold border border-black hover:bg-white hover:text-black transition-colors duration-150"
            onClick={() => navigate("/admin/users/list")}
          >
            Return
          </button>
          <button
            type="submit"
            className="bg-primary rounded-lg py-2 px-3 text-white font-semibold border border-primary hover:bg-white hover:text-primary transition-colors duration-150"
            onClick={() => navigate("/admin/users/create")}
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
}
