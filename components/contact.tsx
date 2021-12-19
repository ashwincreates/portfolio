import { Fragment, useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { BiPaperPlane } from "react-icons/bi";
import { useForm, ValidationError } from "@formspree/react";
import { Dialog, Transition } from "@headlessui/react";

function Contact() {
	const [isOpen, setIsOpen] = useState(false);
	const [state, handleSubmit] = useForm("mjvlvzya");
	return (
		<main
			id="contact"
			className="relative opacity-0 [animation-delay:100ms] mx-auto max-w-7xl px-6 sm:px-6 lg:px-8 flex justify-center items-center"
		>
			<div className="text-center md:max-w-2xl my-[200px]">
				<h1 className="text-4xl text-base tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
					<span className="block xl:inline leading-normal">Get in touch</span>{" "}
				</h1>
				<p className="mt-3 text-lg text-gray-500 dark:text-gray-400 sm:mt-5 sm:text-lg leading-normal sm:max-w-xl sm:mx-0 md:mt-5 md:text-xl lg:mx-0">
					Currently, I am searching for internships and I am also open to
					collaborate in a project. Be it a query or chat, feel free to send me
					a mail, They will be read as they reach.
				</p>
				<div className="mt-5 sm:mt-8 flex justify-center">
					<div className="rounded-md shadow w-[250px]">
						<a
							href="mailto:ashwin200113@gmail.com"
							className="flex mb-4 items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
						>
							<HiOutlineMail className="mr-2 text-white" size={24} />
							Drop me a mail
						</a>
						<a
							className="flex cursor-pointer items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
							onClick={(e) => setIsOpen(true)}
						>
							<BiPaperPlane className="mr-2 text-white" size={24} />
							Pin me up!
						</a>
						<Transition appear show={isOpen} as={Fragment}>
							<Dialog
								as="div"
								className="fixed inset-0 z-10 overflow-y-auto"
								onClose={() => setIsOpen(false)}
							>
								<div className="min-h-screen px-4 text-center">
									<Transition.Child
										as={Fragment}
										enter="ease-out duration-300"
										enterFrom="opacity-0"
										enterTo="opacity-100"
										leave="ease-in duration-200"
										leaveFrom="opacity-100"
										leaveTo="opacity-0"
									>
										<Dialog.Overlay className="bg-opacity-30 transition-opacity bg-black fixed inset-0" />
									</Transition.Child>
									<span
										className="inline-block h-screen align-middle"
										aria-hidden="true"
									>
										&#8203;
									</span>
									<Transition.Child
										as={Fragment}
										enter="ease-out duration-300"
										enterFrom="opacity-0 scale-95"
										enterTo="opacity-100 scale-100"
										leave="ease-in duration-200"
										leaveFrom="opacity-100 scale-100"
										leaveTo="opacity-0 scale-95"
									>
										<div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white dark:bg-gray-900 shadow-xl rounded-2xl">
											<Dialog.Title
												as="h3"
												className="text-lg font-medium leading-6 text-gray-900 dark:text-white"
											>
												Quick Message
											</Dialog.Title>
											<div className="mt-4">
												<form onSubmit={handleSubmit}>
													<input
														id="email"
														name="email"
														type="email"
														placeholder="Email Address"
														className="text-sm w-full outline-2 mb-4 bg-white outline-indigo-600 border-2 rounded-lg px-2 py-2"
													/>
													<ValidationError
														prefix="Email"
														field="email"
														errors={state.errors}
													/>
													<textarea
														id="message"
														name="message"
														rows={10}
														placeholder="Message"
														className="text-sm resize-none w-full mb-4 bg-white outline-2 outline-indigo-600 border-2 rounded-lg px-2 py-2"
													/>
												</form>
												<ValidationError
													prefix="Message"
													field="message"
													errors={state.errors}
												/>
												<button
													type="submit"
													disabled={state.submitting}
													className="inline-flex mr-3 justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-500 border border-transparent rounded-md hover:bg-indigo-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500"
												>
													Send
												</button>
												<button
													onClick={(e) => {
														setIsOpen(false);
													}}
													type="button"
													className="inline-flex justify-center px-4 py-2 text-sm font-medium text-indigo-900 bg-indigo-100 border border-transparent rounded-md hover:bg-indigo-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500"
												>
													Cancel
												</button>
											</div>
										</div>
									</Transition.Child>
								</div>
							</Dialog>
						</Transition>
					</div>
				</div>
			</div>
		</main>
	);
}

export default Contact;
