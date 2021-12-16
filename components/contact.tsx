import {HiOutlineMail} from "react-icons/hi";

function Contact() {
	return (
						<main id="contact" className="relative mx-auto max-w-7xl px-6 sm:px-6 lg:px-8 flex justify-center items-center">
							<div className="text-center md:max-w-2xl my-[200px]">
								<h1 className="text-4xl text-base tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
									<span className="block xl:inline leading-normal">Get in touch</span>{" "}
								</h1>
								<p className="mt-3 text-lg text-gray-500 dark:text-gray-400 sm:mt-5 sm:text-lg leading-normal sm:max-w-xl sm:mx-0 md:mt-5 md:text-xl lg:mx-0">
								Currently, I am searching for internships and I am also open to collaborate in a project. Be it a query or chat, feel free to send me a mail, They will be read as they reach.
								</p>
								<div className="mt-5 sm:mt-8 flex justify-center">
									<div className="rounded-md shadow w-[250px]">
										<a
											href="mailto:ashwin200113@gmail.com"
											className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
										>
											<HiOutlineMail className="mr-2 text-white" size={24}/>
											Hit me up
										</a>
									</div>
								</div>
							</div>
						</main>

	)
}

export default Contact;
