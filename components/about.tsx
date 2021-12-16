import {SiAngular, SiCplusplus, SiJava, SiMongodb, SiNodedotjs, SiPython, SiReact, SiTypescript} from "react-icons/si";

function About() {
	return (
		<>
			<main id="about" className="max-w-7xl px-6 sm:px-6 lg:px-8 pt-36">
				<div className="text-left lg:max-w-2xl">
					<h3 className="text-lg text-base mono tracking-tight font-medium text-indigo-500 mb-20 md:text-lg">
						<span className="inline">About Me</span>
					</h3>
					<p className="mt-3 text-base text-gray-500 dark:text-gray-400 sm:mt-5 text-lg sm:max-w-xl md:mt-5 md:text-xl lg:mx-0">
						 Hello! My name is Ashwin and I enjoy creating and designing products. I am interested in all kinds of technologies and currently specialize in web techonologies. My interest in coding started back in my school days, when I started tinkering with my linux machine to customize it's feels and looks.
	<br/>
	<br/>
I am a CS student looking for opportunities to help develop, learn and explore more about creating user focused products that can help everyone. Currently, I am creating apps that I feel can help people around, Also I have been contributing to Open Source projects in my spare time

Here are a few technologies I’ve recently worked with 
					</p>
					<div className="mt-5 sm:mt-6 flex justify-start">
						<ul className="">
							<li className="mb-3 text-base font-medium text-indigo-500 text-md mono"><SiTypescript className="inline"/> Typescript</li>
							<li className="mb-3 text-base font-medium text-indigo-500 text-md mono"><SiJava className="inline"/> Java</li>
							<li className="mb-3 text-base font-medium text-indigo-500 text-md mono"><SiPython className="inline"/> Python</li>
							<li className="mb-3 text-base font-medium text-indigo-500 text-md mono"><SiCplusplus className="inline"/> C++</li>
						</ul>
						<ul className="ml-12">
							<li className="mb-3 text-base font-medium text-indigo-500 text-md mono"><SiReact className="inline"/> React</li>
							<li className="mb-3 text-base font-medium text-indigo-500 text-md mono"><SiNodedotjs className="inline"/> NodeJs</li>
							<li className="mb-3 text-base font-medium text-indigo-500 text-md mono"><SiAngular className="inline"/> Angular</li>
							<li className="mb-3 text-base font-medium text-indigo-500 text-md mono"><SiMongodb className="inline"/> MongoDB</li>
						</ul>
					</div>
				</div>
			</main>
		</>
	)
}

export default About;
