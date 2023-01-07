import { FaGithub, FaInstagram, FaLinkedin, FaSpotify } from 'react-icons/fa';



const Content = ({ title }) => (
  <div>
  <section className="py-2 px-4">
    <div className="w-full px-2 rounded-2xl">
      <div className="relative p-4 text-center bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded-2xl shadow-xl">    
        <img className="block object-cover shadow-lg mx-auto mb-5 h-[156px]" src="./images/mbay-round.png" alt="Me" />
        <h4 className="text-xl text-white font-bold mb-2">Carson H. Franklin</h4>
        <div className='mb'>
        <span className="inline-block px-4 py-1 mb-1 text-xs text-green-500 font-medium bg-teal-900 rounded-full">IT Manager / Managed Services Executive</span></div>
        <div>
        <span className="inline-block px-2 py-1 mb-4 text-xs text-blue-400 font-medium bg-blue-900 rounded-full">Gen-X / Millenial Day-Walker</span></div>
        <div>
          <div className="inline-block items-center">
            <div className="px-2 mb-2 sm:mb-0">
              <div className="flex px-10 py-3 items-center bg-gray-800 text-gray-100 text-xl rounded-xl"> 
                <a className="inline-block mr-3 lg:mr-10" href="#">
                  <FaLinkedin />
                </a>
                <a className="inline-block mr-3 lg:mr-10" href="#">
                  <FaGithub />
                </a>
                <a className="inline-block mr-3 lg:mr-10" href="#">
                  <FaInstagram />
                </a>
                <a className="inline-block" href="#">
                  <FaSpotify />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="py-4 px-4 flex">
    <div className="flex rounded-2xl w-1/2 pr-1">
      <div className="p-1 w-full text-center bg-gray-800 rounded-2xl shadow-xl">
        <p className='mb-5 text-gray-100 text-md font-semibold'>Expertise</p>
        <div className='m-2 mb-2 flex flex-wrap'>
        <div className="mr-1 px-3 py-1 mb-1  text-xs text-gray-200 font-medium bg-gray-700 rounded-full">IT Operations</div>
        <div className="mr-1 px-3 py-1 mb-1 text-xs text-gray-200 font-medium bg-gray-700 rounded-full">Service Delivery</div>
        <div className="mr-1 px-3 py-1 mb-1 text-xs text-gray-200 font-medium bg-gray-700 rounded-full">IT Strategy</div>
        <div className="mr-1 px-3 py-1 mb-1 text-xs text-gray-200 font-medium bg-gray-700 rounded-full">vCIO</div>
        <div className="mr-1 px-3 py-1 mb-1 text-xs text-gray-200 font-medium bg-gray-700 rounded-full">Consulting</div>
        <div className="mr-1 px-3 py-1 mb-1 text-xs text-gray-200 font-medium bg-gray-700 rounded-full">Cloud Computing</div>
        <div className="mr-1 px-3 py-1 mb-1 text-xs text-gray-200 font-medium bg-gray-700 rounded-full">InfoSec</div>
        <div className="px-3 mr-1 py-1 mb-1 text-xs text-gray-200 font-medium bg-gray-700 rounded-full">DevOps</div>
        <div className="px-3 mr-1 py-1 mb-1 text-xs text-gray-200 font-medium bg-gray-700 rounded-full">Change Management</div>
        <div className="px-3 mr-1 py-1 mb-1 text-xs text-gray-200 font-medium bg-gray-700 rounded-full">Project Management</div>
        <div className="px-3 mr-1 py-1 mb-1 text-xs text-gray-200 font-medium bg-gray-700 rounded-full">Professional Services</div>
        <div className="px-3 mr-1 py-1 mb-1 text-xs text-gray-200 font-medium bg-gray-700 rounded-full">DR / Business Continuity</div>
        <div className="px-3 mr-1 py-1 mb-1 text-xs text-gray-200 font-medium bg-gray-700 rounded-full">Start-Up Formation</div>
        <div className="px-3 mr-1 py-1 mb-1 text-xs text-gray-200 font-medium bg-gray-700 rounded-full">VoIP</div>
        <div className="px-3 mr-1 py-1 mb-1 text-xs text-gray-200 font-medium bg-gray-700 rounded-full">ITIL</div>
      </div>
      </div>
      
    </div>
    <div className="flex rounded-2xl w-1/2 pl-1">
      <div className="p-1 w-full text-center  bg-gray-800 rounded-2xl shadow-xl">
        <p className='mb-5 text-gray-100 text-md font-semibold'>Technologies & Platforms</p>
        <div className='m-2 mb-2 flex flex-wrap'>
        <div className="mr-2 px-3 py-1 mb-1 text-xs text-blue-800 font-medium bg-blue-400 rounded-full">Microsoft 365</div>
        <div className="mr-2 px-3 py-1 mb-1 text-xs text-gray-200 font-medium bg-orange-700 rounded-full">Amazon Web Services</div>
        <div className="mr-2 px-3 py-1 mb-1 text-xs text-gray-200 font-medium bg-blue-800 rounded-full">Docker</div>
        <div className="mr-2 px-3 py-1 mb-1 text-xs text-gray-900 font-medium bg-gray-100 rounded-full">Citrix</div>
        <div className="mr-2 px-3 py-1 mb-1 text-xs text-gray-100 font-medium bg-teal-800 rounded-full">Cisco / Meraki</div>
        <div className="px-3 mr-2 py-1 mb-1 text-xs text-gray-100 font-medium bg-blue-800 rounded-full">Microsoft Azure</div>
        <div className="px-3 mr-2 py-1 mb-1 text-xs text-orange-500 font-medium bg-blue-700 rounded-full">Nutanix</div>
        <div className="px-3 mr-2 py-1 mb-1 text-xs text-gray-100 font-medium bg-blue-800 rounded-full">Google Cloud Platform</div>
        <div className="px-3 mr-2 py-1 mb-1 text-xs text-gray-900 font-medium bg-gray-200 rounded-full">VMWare</div>
        <div className="px-3 mr-2 py-1 mb-1 text-xs text-gray-200 font-medium bg-red-700 rounded-full">Ansible</div>
        <div className="px-3 mr-2 py-1 mb-1 text-xs text-gray-800 font-medium bg-gray-200 rounded-full">ServiceNow</div>
        <div className="px-3 mr-2 py-1 mb-1 text-xs text-gray-100 font-medium bg-orange-600 rounded-full">BMC</div>
        <div className="px-3 mr-2 py-1 mb-1 text-xs text-gray-100 font-medium bg-blue-700 rounded-full">Atlassian</div>
      </div>
      </div>
    </div>
  </section>
  <section className="py-2 px-4">
    <div className="w-full rounded-2xl">
      <div className="relative p-6 text-center bg-gray-800 rounded-2xl shadow-xl">
      <div className="text-xs text-gray-300 font-light"> © 2023  Carson H. Franklin</div>
      </div>
      </div>
      </section>
  </div>
  
);

export default Content;
