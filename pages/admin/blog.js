export default function Blog() {
    return (
      <div className="h-full bg-gray-900 rounded-2xl">
          <section className="py-4 px-4">
            <div className="flex flex-row rounded-2xl bg-gray-900">      
                <div className="w-1/3 px-2">
                    <div className="p-6 bg-gray-800 rounded-2xl">
                        <div className="relative h-40">
                            <span className="absolute top-0 right-0 mt-4 mr-4 text-xs px-2 py-1 bg-gray-50 rounded uppercase text-gray-500 font-semibold">Development</span>
                            <img className="w-full h-full object-cover rounded-2xl" src="../images/laser.jpg" alt="" />
                        </div>
                        <span className="inline-block text-xs font-bold text-gray-100">10 jun 2020 19:40</span>
                        <h2 className="mb-2 text-2xl font-bold font-heading">Laser Stuff</h2>
                        <p className="mb-4 text-sm text-gray-100">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque massa nibh, pulvinar vitae aliquet nec, accumsan aliquet orci.</p>
                        <a className="flex items-center text-md font-bold text-gray-700 hover:text-gray-800" href="#">
                            <span>Read More</span>
                            <span>
                                <svg className="ml-1 w-5 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></span>
                        </a>
                    </div>
                </div>                
            <div className="w-1/3 px-2">
                <div className="p-6 bg-gray-800 rounded-2xl">
                    <div className="relative h-40">
                        <span className="absolute top-0 right-0 mt-4 mr-4 text-xs px-2 py-1 bg-gray-50 rounded uppercase text-gray-500 font-semibold">Development</span>
                        <img className="w-full h-full object-cover rounded-2xl" src="../images/automation.png" alt="" />
                    </div>
                    <span className="inline-block text-xs font-bold text-gray-100">10 jun 2020 19:40</span>
                    <h2 className="mb-2 text-2xl font-bold font-heading">Automations</h2>
                    <p className="mb-4 text-md text-gray-100 leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque massa nibh, pulvinar vitae aliquet nec, accumsan aliquet orci.</p>
                    <a className="flex items-center text-md font-bold text-gray-700 hover:text-gray-800" href="#">
                        <span>Read More</span>
                        <span>
                            <svg className="ml-1 w-5 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></span>
                    </a>
                </div>
            </div>


            <div className="w-1/3 px-2">
                <div className="p-6 bg-gray-800 rounded-2xl">
                    <div className="relative h-40">
                        <span className="absolute top-0 right-0 mt-4 mr-4 text-xs px-2 py-1 bg-gray-50 rounded uppercase text-gray-500 font-semibold">Development</span>
                        <img className="w-full h-full object-cover rounded-2xl" src="../images/ps.jpg" alt="" />
                    </div>
                    <span className="inline-block text-xs font-bold text-gray-100">10 jun 2020 19:40</span>
                    <h2 className="mb-2 text-2xl font-bold font-heading">Misc Projects</h2>
                    <p className="mb-4 text-md text-gray-100 leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque massa nibh, pulvinar vitae aliquet nec, accumsan aliquet orci.</p>
                    <a className="flex items-center text-md font-bold text-gray-700 hover:text-gray-800" href="#">
                        <span>Read More</span>
                        <span>
                            <svg className="ml-1 w-5 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></span>
                    </a>
                </div>
            </div>
        </div>
</section>
</div>
    );
  }