import { Fragment, useEffect, useState } from "react";
import { Popover, Transition, Switch } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import About from "../components/about";
import Projects from "../components/projects";
import Contact from "../components/contact";
import { GitHub, Linkedin } from "react-feather";
import { useTheme } from "next-themes";
import { MdLightMode, MdNightlight } from "react-icons/md";

const navigation = [
	{ name: "About Me", href: "about" },
	{ name: "Work", href: "work" },
	{ name: "Contact", href: "contact" },
];

let lastScrollTop: number = 0;

function nav(event: any) {
	let _a: any, _b: any;
	event.preventDefault();
	var st = window.pageYOffset;
	if (st > lastScrollTop) {
		(_a = document.getElementById("nav")) === null || _a === void 0
			? void 0
			: _a.classList.add("top-[-5rem]");
	} else {
		(_b = document.getElementById("nav")) === null || _b === void 0
			? void 0
			: _b.classList.remove("top-[-5rem]");
	}
	lastScrollTop = st;
}

export default function Example() {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();
	const [enabled, setEnabled] = useState(false);

	const navclick = (e: any) => {
		let parent = e.target.parentNode;
		let targetIndex = Array.prototype.indexOf.call(parent.children, e.target);
		parent.childNodes.forEach((node, index) => {
			if (index < navigation.length) {
				if (index === targetIndex) {
					node.classList.add("nav-active");
				} else {
					node.classList.remove("nav-active");
				}
			}
		});
	};

	useEffect(() => {
		document.addEventListener("scroll", nav);
		setMounted(true);
		if (theme === "dark") setEnabled(true);
	}, []);

	return (
		<>
			<div className="relative bg-white dark:bg-gray-900 overflow-hidden">
				<div className="max-w-7xl mx-auto">
					<div className="relative w-full">
						<Popover>
							<div
								id="nav"
								className="fixed bg-white dark:bg-gray-900 transition-all ease-in-out top-0 left-0 z-10 py-6 px-4 sm:px-6 lg:px-8 w-full"
							>
								<nav
									className="relative flex px-4 sm:px-6 lg:px-8 items-center mx-auto justify-between sm:h-10 max-w-7xl"
									aria-label="Global"
								>
									<div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
										<div className="flex items-center justify-between w-full md:w-auto">
											<a href="#">
												<span className="sr-only">Workflow</span>
												<svg
													width="500"
													className="h-10 w-10 animate-fadeIn"
													height="500"
													viewBox="0 0 500 500"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														className="fill-gray-800 dark:fill-white"
														id="path1"
														d="M199.023 423.711C212.363 400.605 229.875 370.239 237.939 356.231C246.002 342.223 252.898 330.771 253.261 330.782C253.625 330.793 271.394 361.158 292.748 398.262L331.573 465.723H414.859H498.144L497.824 465.344C495.789 461.485 472.455 420.954 390.607 279.106C353.864 215.427 316.158 150.051 306.815 133.825C297.473 117.6 289.369 104.798 288.806 105.377C288.244 105.956 282.17 116.233 275.308 128.215L262.833 150L269.097 160.633C272.541 166.481 290.98 198.358 310.072 231.471C356.622 312.208 392.546 374.471 407.409 400.177L418.4 418.749L388.519 419.105C372.085 419.302 358.201 419.004 357.666 418.444C357.131 417.884 346.763 400.158 334.625 379.053C306.465 330.088 294.715 309.727 263.799 256.328C258.427 247.049 253.643 239.457 253.167 239.457C252.691 239.457 247.939 247.049 242.605 256.328C237.272 265.607 222.415 291.359 209.59 313.556C196.765 335.752 177.762 368.65 167.361 386.662L148.451 419.411H114.849C96.3678 419.411 81.247 419.019 81.247 418.54C81.247 418.061 85.9559 409.576 91.7113 399.685C118.49 353.661 235.117 151.29 235.66 149.904C236.102 148.777 213.052 106.596 210.276 103.452C209.945 103.077 200.284 119.706 113.587 269.89C14.6671 441.25 1.85571 463.579 1.85571 464.629C1.85571 465.23 40.761 465.722 88.3119 465.722H174.768L199.023 423.711Z"
														fill="white"
													></path>
													<path
														className="fill-gray-800 dark:fill-white"
														id="path2"
														d="M249.604 34.2773L236.184 57.5645L222.764 80.8516L235.547 103.295C242.578 115.64 248.492 125.574 248.687 125.371C248.884 125.168 255.018 116.403 262.318 103.834L275.592 80.9824L262.598 58.4727L249.604 34.2773Z"
														fill="white"
													></path>
												</svg>
											</a>
											<div className="-mr-2 flex items-center md:hidden">
												<Popover.Button className="bg-white dark:bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
													<span className="sr-only">Open main menu</span>
													<MenuIcon className="h-8 w-8" aria-hidden="true" />
												</Popover.Button>
											</div>
										</div>
									</div>
									<div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
										{navigation.map((item) => (
											<a
												key={item.name}
												href={"#" + item.href}
												onClick={(e) => navclick(e)}
												className="mono font-medium text-gray-500 dark:text-white hover:text-indigo-500 focus:text-indigo-500"
											>
												:{item.name}
											</a>
										))}
										<a
											href="#"
											className="relative mono font-medium text-indigo-500 focus:text-indigo-500"
										>
											<HiOutlineDocumentDownload
												className="inline-block mr-1"
												size={18}
											/>
											Resume
										</a>

										{mounted ? (
											<Switch
												checked={enabled}
												onChange={(bool: boolean) => {
													setEnabled(bool);
													bool ? setTheme("dark") : setTheme("light");
												}}
												className={`${
													enabled ? "bg-blue-600" : "bg-gray-200"
												} relative inline-flex items-center h-6 rounded-full w-11`}
											>
												<span className="sr-only">Enable notifications</span>
												<span
													className={`${
														enabled ? "translate-x-6" : "translate-x-1"
													} inline-block w-4 h-4 transform transition-all ease-in-out bg-white rounded-full`}
												/>
												{enabled ? (
													<MdNightlight className="transform translate-x-[-0.857rem] text-white" />
												) : (
													<MdLightMode className="transform translate-x-[0.400rem]" />
												)}
											</Switch>
										) : (
											""
										)}
									</div>
								</nav>
							</div>

							<Transition
								as={Fragment}
								enter="duration-150 ease-out"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="duration-100 ease-in"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95"
							>
								<Popover.Panel
									focus
									className="fixed z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
								>
									<div className="rounded-lg shadow-md bg-white dark:bg-gray-900 ring-1 ring-black ring-opacity-5 overflow-hidden">
										<div className="px-5 pt-4 flex items-center justify-between">
											<div>
												<svg
													width="500"
													className="h-10 w-10"
													height="500"
													viewBox="0 0 500 500"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														className="fill-gray-800 dark:fill-white"
														id="path1"
														d="M199.023 423.711C212.363 400.605 229.875 370.239 237.939 356.231C246.002 342.223 252.898 330.771 253.261 330.782C253.625 330.793 271.394 361.158 292.748 398.262L331.573 465.723H414.859H498.144L497.824 465.344C495.789 461.485 472.455 420.954 390.607 279.106C353.864 215.427 316.158 150.051 306.815 133.825C297.473 117.6 289.369 104.798 288.806 105.377C288.244 105.956 282.17 116.233 275.308 128.215L262.833 150L269.097 160.633C272.541 166.481 290.98 198.358 310.072 231.471C356.622 312.208 392.546 374.471 407.409 400.177L418.4 418.749L388.519 419.105C372.085 419.302 358.201 419.004 357.666 418.444C357.131 417.884 346.763 400.158 334.625 379.053C306.465 330.088 294.715 309.727 263.799 256.328C258.427 247.049 253.643 239.457 253.167 239.457C252.691 239.457 247.939 247.049 242.605 256.328C237.272 265.607 222.415 291.359 209.59 313.556C196.765 335.752 177.762 368.65 167.361 386.662L148.451 419.411H114.849C96.3678 419.411 81.247 419.019 81.247 418.54C81.247 418.061 85.9559 409.576 91.7113 399.685C118.49 353.661 235.117 151.29 235.66 149.904C236.102 148.777 213.052 106.596 210.276 103.452C209.945 103.077 200.284 119.706 113.587 269.89C14.6671 441.25 1.85571 463.579 1.85571 464.629C1.85571 465.23 40.761 465.722 88.3119 465.722H174.768L199.023 423.711Z"
														fill="white"
													></path>
													<path
														className="fill-gray-800 dark:fill-white"
														id="path2"
														d="M249.604 34.2773L236.184 57.5645L222.764 80.8516L235.547 103.295C242.578 115.64 248.492 125.574 248.687 125.371C248.884 125.168 255.018 116.403 262.318 103.834L275.592 80.9824L262.598 58.4727L249.604 34.2773Z"
														fill="white"
													></path>
												</svg>
											</div>
											<div className="-mr-2">
												{mounted ? (
													<Switch
														checked={enabled}
														onChange={(bool: boolean) => {
															setEnabled(bool);
															bool ? setTheme("dark") : setTheme("light");
														}}
														className={`${
															enabled ? "bg-blue-600" : "bg-gray-200"
														} relative inline-flex items-center h-6 rounded-full w-11 mr-2`}
													>
														<span className="sr-only">
															Enable notifications
														</span>
														<span
															className={`${
																enabled ? "translate-x-6" : "translate-x-1"
															} inline-block w-4 h-4 transform transition-all ease-in-out bg-white rounded-full`}
														/>
														{enabled ? (
															<MdNightlight className="transform translate-x-[-0.857rem] text-white" />
														) : (
															<MdLightMode className="transform translate-x-[0.400rem]" />
														)}
													</Switch>
												) : (
													""
												)}
												<Popover.Button className="bg-white dark:bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
													<span className="sr-only">Close main menu</span>
													<XIcon className="h-6 w-6" aria-hidden="true" />
												</Popover.Button>
											</div>
										</div>
										<div className="px-2 pt-2 mt-8 pb-3 space-y-1">
											{navigation.map((item) => (
												<a
													key={item.name}
													href={"#" + item.href}
													onClick={(e) => navclick(e)}
													className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-white hover:text-gray-900 hover:bg-gray-50"
												>
													{item.name}
												</a>
											))}
											<a className="block px-3 py-2 rounded-md text-base font-medium text-indigo-500">
												<HiOutlineDocumentDownload
													className="inline-block mr-1"
													size={18}
												/>
												Resume
											</a>
										</div>
									</div>
								</Popover.Panel>
							</Transition>
						</Popover>

						<main className="relative mx-auto max-w-7xl px-6 sm:px-6 lg:px-8 h-screen flex flex-col md:justify-center">
							<div className="text-left md:max-w-2xl mt-48 md:mt-0">
								<h5 className="mono mb-1 text-base text-lg text-gray-500 dark:text-gray-400 sm:max-w-xl md:mb-2 sm:mx-0 md:text-xl lg:mx-0">
									Hello, I am
								</h5>
								<h1 className="text-4xl text-base tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
									<span className="block xl:inline leading-normal">
										Ashwin Kr. Sharma
									</span>{" "}
									<span className="block text-indigo-500">
										I <span className="line-through">build</span> engineer
										things for the web
									</span>
								</h1>
								<p className="mt-3 text-lg text-gray-500 sm:mt-5 sm:text-lg dark:text-gray-400 leading-normal sm:max-w-xl sm:mx-0 md:mt-5 md:text-xl lg:mx-0">
									I’m a software engineer, keen in developing & designing
									exceptional and efficient digital products. Currently, I’m
									looking for internship opportunities
								</p>
								<div className="mt-16 sm:mt-8 sm:flex justify-start">
									<div className="rounded-md shadow w-[200px]">
										<a
											href="#"
											className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
										>
											Get in touch
										</a>
									</div>
								</div>
							</div>
						</main>
						<About />
						<Projects />
						<Contact />
						<footer className="flex flex-col align-center">
							<div className="flex gap-x-4 justify-center mb-4 lg:fixed md:bottom-24 lg:right-24 lg:flex-col lg:gap-x-0 lg:gap-y-10">
								<a
									href="https://github.com/ashwincreates"
									target="_blank"
									rel="noopener noreferrer"
								>
									<GitHub className="dark:text-white hover:animate-bounce transition-all ease-in-out" />
								</a>
								<a
									href="https://www.linkedin.com/in/ashwin-sharma-77496a17a/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<Linkedin className="dark:text-white hover:animate-bounce transition-all" />
								</a>
							</div>
							<p className="my-3 text-sm md:text-md text-gray-500 dark:text-gray-400 mono sm:my-5 text-center">
								Designed & Developed by Ashwin Kr. Sharma
							</p>
						</footer>
					</div>
				</div>
			</div>
		</>
	);
}
