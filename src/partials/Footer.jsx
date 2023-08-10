import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200">

          {/* Social links */}
          <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
            <li>
              <Link to="https://www.instagram.com/UNC_PMClub/" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Twitter">
              <svg className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="64" height="64" viewBox="0 0 72 72">
                <path d="M 35.75 14 C 15.579 14 14 15.579 14 35.75 L 14 36.25 C 14 56.421 15.579 58 35.75 58 L 36.25 58 C 56.421 58 58 56.421 58 36.25 L 58 35.75 C 58 15.579 56.421 14 36.25 14 L 35.75 14 z M 48.996094 22.5 C 49.825094 22.498 50.498 23.168094 50.5 23.996094 C 50.502 24.825094 49.832906 25.498 49.003906 25.5 C 48.174906 25.502 47.502 24.832906 47.5 24.003906 C 47.498 23.174906 48.167094 22.502 48.996094 22.5 z M 35.976562 26 C 41.498562 25.987 45.987 30.454563 46 35.976562 C 46.013 41.498562 41.545437 45.987 36.023438 46 C 30.501437 46.013 26.013 41.545437 26 36.023438 C 25.987 30.501437 30.454563 26.013 35.976562 26 z M 35.990234 32 C 33.781234 32.006 31.995 33.800766 32 36.009766 C 32.006 38.218766 33.800766 40.005 36.009766 40 C 38.218766 39.995 40.005 38.199234 40 35.990234 C 39.994 33.781234 38.199234 31.995 35.990234 32 z"></path>
              </svg>
              </Link>
            </li>
            <li className="ml-4">
              <Link to="https://www.linkedin.com/company/unc-product-management-club/" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Twitter">
              <svg className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="64" height="64" viewBox="0 0 72 72">
                <path d="M46.603,14C57.173,14,58,14.827,58,25.397v21.277C58,57.178,57.178,58,46.674,58H25.326C14.822,58,14,57.178,14,46.674	V25.326C14,14.822,14.822,14,25.326,14H46.603z M30.202,44.705V31.316h-4.161v13.389H30.202z M28.122,29.401	c1.337,0,2.425-1.088,2.425-2.426c0-1.337-1.088-2.425-2.425-2.425c-1.34,0-2.426,1.086-2.426,2.425S26.78,29.401,28.122,29.401z M45.812,44.705v-7.343c0-3.605-0.779-6.378-4.992-6.378c-2.024,0-3.381,1.11-3.937,2.162h-0.056v-1.829h-3.992v13.389h4.158v-6.624	c0-1.746,0.333-3.437,2.498-3.437c2.134,0,2.162,1.997,2.162,3.55v6.511H45.812z"></path>
              </svg>
              </Link>
            </li>
            <li className="ml-4">
              <Link to="https://github.com/unc-pmclub" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Github">
              <svg className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="64" height="64" viewBox="0 0 72 72">
                <path d="M36,12c13.255,0,24,10.745,24,24c0,10.656-6.948,19.685-16.559,22.818c0.003-0.009,0.007-0.022,0.007-0.022	s-1.62-0.759-1.586-2.114c0.038-1.491,0-4.971,0-6.248c0-2.193-1.388-3.747-1.388-3.747s10.884,0.122,10.884-11.491	c0-4.481-2.342-6.812-2.342-6.812s1.23-4.784-0.426-6.812c-1.856-0.2-5.18,1.774-6.6,2.697c0,0-2.25-0.922-5.991-0.922	c-3.742,0-5.991,0.922-5.991,0.922c-1.419-0.922-4.744-2.897-6.6-2.697c-1.656,2.029-0.426,6.812-0.426,6.812	s-2.342,2.332-2.342,6.812c0,11.613,10.884,11.491,10.884,11.491s-1.097,1.239-1.336,3.061c-0.76,0.258-1.877,0.576-2.78,0.576	c-2.362,0-4.159-2.296-4.817-3.358c-0.649-1.048-1.98-1.927-3.221-1.927c-0.817,0-1.216,0.409-1.216,0.876s1.146,0.793,1.902,1.659	c1.594,1.826,1.565,5.933,7.245,5.933c0.617,0,1.876-0.152,2.823-0.279c-0.006,1.293-0.007,2.657,0.013,3.454	c0.034,1.355-1.586,2.114-1.586,2.114s0.004,0.013,0.007,0.022C18.948,55.685,12,46.656,12,36C12,22.745,22.745,12,36,12z"></path>
              </svg>
              </Link>
            </li>
            <li className="ml-4">
              <Link to="https://www.facebook.com/UNCProductManagementClub/" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Facebook">
              <svg className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="64" height="64" viewBox="0 0 72 72">
                <path d="M45.049,14C57.06,14,58,14.94,58,26.951v18.098C58,57.06,57.06,58,45.049,58h-2.298V41.982h5.647l0.888-6.347h-6.535	c0,0-0.01-3.716,0-4.643c0.019-1.814,1.533-2.732,2.835-2.718c1.302,0.013,3.998,0.004,3.998,0.004v-5.849	c0,0-2.335-0.302-4.784-0.328c-2.058-0.021-4.331,0.535-6.165,2.384c-1.865,1.88-2.16,4.679-2.195,8.1c-0.01,0.989,0,3.049,0,3.049	h-5.526v6.347h5.526V58h-9.489C14.94,58,14,57.06,14,45.049V26.951C14,14.94,14.94,14,26.951,14H45.049z"></path>
              </svg>
              </Link>
            </li>
          </ul>

          {/* Copyrights note */}
          <div className="text-sm text-gray-600 mr-4">Made by UNC Product Management © 2023</div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;
