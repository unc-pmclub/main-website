import React from 'react';

import Team1 from '../images/Headshots/22.png';
import Team2 from '../images/Headshots/21.jpg';
import Team3 from '../images/Headshots/18.jpg';
import Team4 from '../images/Headshots/19.jpg';
import Team5 from '../images/Headshots/23.jpg';
import Team6 from '../images/Headshots/24.jpg';
import Team7 from '../images/Headshots/25.jpg';
import Team8 from '../images/Headshots/26.jpeg';
import Team9 from '../images/Headshots/27.jpeg';

function Team() {
    return(
    <section id="team" class="overflow-hidden flex items-center justify-center bg-gray-900">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12 md:pt-20 mb-16">
            <div class="text-center pb-12">
                <h1 class="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-neutral-50">
                    Our Amazing Team
                </h1>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6" data-aos="zoom-y-out">
                {/* <div class="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
                    <div class="mb-8">
                        <img class="object-center object-cover rounded-full h-36 w-36" src={Team1} alt="photo"/>
                    </div>
                    <div class="text-center">
                        <p class="text-xl text-gray-700 font-bold mb-2">Noah Davis</p>
                        <p class="text-base text-gray-400 font-normal mb-2">President</p>
                        <a href="https://www.linkedin.com/in/noahidavis/">
                            <i class="fa-brands fa-linkedin fa-2x text-gray-900 hover:text-red-500 duration-500"></i>
                        </a>
                    </div>
                </div> */}
                {/* <div class="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
                    <div class="mb-8">
                        <img class="object-center object-cover rounded-full h-36 w-36" src={Team2} alt="photo"/>
                    </div>
                    <div class="text-center">
                        <p class="text-xl text-gray-700 font-bold mb-2">Rohan Venkatraman</p>
                        <p class="text-base text-gray-400 font-normal mb-2">VP of External Relations</p>
                        <a href="https://www.linkedin.com/in/rohan-venkatraman/">
                            <i class="fa-brands fa-linkedin fa-2x text-gray-900 hover:text-red-500 duration-500"></i>
                        </a>
                    </div>
                </div> */}
                <div class="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
                    <div class="mb-8">
                        <img class="object-center object-cover rounded-full h-36 w-36" src={Team4} alt="photo"/>
                    </div>
                    <div class="text-center">
                        <p class="text-xl text-gray-700 font-bold mb-2">Bernie Chen</p>
                        <p class="text-base text-gray-400 font-normal mb-2">Co-President</p>
                        <a href="https://www.linkedin.com/in/berniechen/">
                            <i class="fa-brands fa-linkedin fa-2x text-gray-900 hover:text-red-500 duration-500"></i>
                        </a>
                    </div>
                </div>
                <div class="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
                    <div class="mb-8">
                        <img class="object-center object-cover rounded-full h-36 w-36" src={Team3} alt="photo"/>
                    </div>
                    <div class="text-center">
                        <p class="text-xl text-gray-700 font-bold mb-2">Cade Viney</p>
                        <p class="text-base text-gray-400 font-normal mb-2">Co-President</p>
                        <a href="https://www.linkedin.com/in/cade-viney/">
                            <i class="fa-brands fa-linkedin fa-2x text-gray-900 hover:text-red-500 duration-500"></i>
                        </a>
                    </div>
                </div>
                <div class="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
                    <div class="mb-8">
                        <img class="object-center object-cover rounded-full h-36 w-36" src={Team2} alt="photo"/>
                    </div>
                    <div class="text-center">
                        <p class="text-xl text-gray-700 font-bold mb-2">Daniel Lee</p>
                        <p class="text-base text-gray-400 font-normal mb-2">VP of Marketing</p>
                        <a href="https://www.linkedin.com/in/ddlee1/">
                            <i class="fa-brands fa-linkedin fa-2x text-gray-900 hover:text-red-500 duration-500"></i>
                        </a>
                    </div>
                </div>
                <div class="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
                    <div class="mb-8">
                        <img class="object-center object-cover rounded-full h-36 w-36" src={Team1} alt="photo"/>
                    </div>
                    <div class="text-center">
                        <p class="text-xl text-gray-700 font-bold mb-2">Tracy Gonsalves</p>
                        <p class="text-base text-gray-400 font-normal mb-2">VP of External Affairs</p>
                        <a href="https://www.linkedin.com/in/tracygonsalves">
                            <i class="fa-brands fa-linkedin fa-2x text-gray-900 hover:text-red-500 duration-500"></i>
                        </a>
                    </div>
                </div>
                <div class="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
                    <div class="mb-8">
                        <img class="object-center object-cover rounded-full h-36 w-36" src={Team8} alt="photo"/>
                    </div>
                    <div class="text-center">
                        <p class="text-xl text-gray-700 font-bold mb-2">Keegan Burr</p>
                        <p class="text-base text-gray-400 font-normal mb-2">VP External Relations</p>
                        <a href="https://www.linkedin.com/in/keegan-burr">
                            <i class="fa-brands fa-linkedin fa-2x text-gray-900 hover:text-red-500 duration-500"></i>
                        </a>
                    </div>
                </div>
                <div class="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
                    <div class="mb-8">
                        <img class="object-center object-cover rounded-full h-36 w-36" src={Team6} alt="photo"/>
                    </div>
                    <div class="text-center">
                        <p class="text-xl text-gray-700 font-bold mb-2">Tejas Chandra</p>
                        <p class="text-base text-gray-400 font-normal mb-2">Director of Labs</p>
                        <a href="https://www.linkedin.com/in/tejaschandra/">
                            <i class="fa-brands fa-linkedin fa-2x text-gray-900 hover:text-red-500 duration-500"></i>
                        </a>
                    </div>
                </div>
                <div class="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
                    <div class="mb-8">
                        <img class="object-center object-cover rounded-full h-36 w-36" src={Team9} alt="photo"/>
                    </div>
                    <div class="text-center">
                        <p class="text-xl text-gray-700 font-bold mb-2">Isabella Ukariwo</p>
                        <p class="text-base text-gray-400 font-normal mb-2">Director of Labs</p>
                        <a href="https://www.linkedin.com/in/isabella-ukariwo-a8a28b229">
                            <i class="fa-brands fa-linkedin fa-2x text-gray-900 hover:text-red-500 duration-500"></i>
                        </a>
                    </div>
                </div>
                <div class="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
                    <div class="mb-8">
                        <img class="object-center object-cover rounded-full h-36 w-36" src={Team7} alt="photo"/>
                    </div>
                    <div class="text-center">
                        <p class="text-xl text-gray-700 font-bold mb-2">Arya Salian</p>
                        <p class="text-base text-gray-400 font-normal mb-2">Technical Leader</p>
                        <a href="https://www.linkedin.com/in/arya-salian-462a9421b/">
                            <i class="fa-brands fa-linkedin fa-2x text-gray-900 hover:text-red-500 duration-500"></i>
                        </a>
                    </div>
                </div>
                <div class="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
                    <div class="mb-8">
                        <img class="object-center object-cover rounded-full h-36 w-36" src={Team5} alt="photo"/>
                    </div>
                    <div class="text-center">
                        <p class="text-xl text-gray-700 font-bold mb-2">Jennifer Lee</p>
                        <p class="text-base text-gray-400 font-normal mb-2">Web Developer</p>
                        <a href="https://www.linkedin.com/in/jennifer-lee-817316292/">
                            <i class="fa-brands fa-linkedin fa-2x text-gray-900 hover:text-red-500 duration-500"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default Team;