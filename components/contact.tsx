import { Fragment, useState, useEffect } from "react";
import { HiOutlineMail } from "react-icons/hi";
import {FiXOctagon, FiCheckCircle} from 'react-icons/fi';
import { BiPaperPlane } from "react-icons/bi";
import { Dialog, Transition } from "@headlessui/react";

function Contact() {
	const [isOpen, setIsOpen] = useState(false);
	const [inputs, setInputs] = useState({
		email: "",
		message: ""
	})
	const [serverState, setServerState] = useState({
    submitting: false,
    status: null
  });
	const [fieldErrors, setFieldErrors] = useState({});
	const validationRules = {
    email: val => val && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val),
    message: val => !!val // similar to "required"
  };
	const validate = () => {
    let errors = {};
    let hasErrors = 0;
    for (let key of Object.keys(inputs)) {
      errors[key] = !validationRules[key](inputs[key]);
      hasErrors |= errors[key];
    }
    setFieldErrors(prev => ({ ...prev, ...errors }));
    return !hasErrors;
  };
	const renderFieldError = field => {
    if (fieldErrors[field]) {
      return <p className="text-rose-500 mt-2">Please enter a valid {field}.</p>;
    }
  };
	const handleServerResponse = (ok, msg) => {
    setServerState({
      submitting: false,
      status: { ok, msg }
    });
    if (ok) {
			setFieldErrors({});
      setInputs({
        email: "",
        message: ""
      });
    }
  };
  const handleOnSubmit = event => {
    event.preventDefault();
		if (!validate()) {
      return;
    }
    setServerState({ submitting: true, status: serverState.status });
    fetch("https://formspree.io/f/mjvlvzya", {
      method: "POST",
      body: JSON.stringify(inputs)
    })
      .then(r => {
        	handleServerResponse(true, "Thanks!, your message has been sent");
      })
      .catch(r => {
        	handleServerResponse(false, "Error Occured!");
      });
		setIsOpen(false);
  };
	const handleOnChange = event => {
    event.persist();
    setInputs(prev => ({
      ...prev,
      [event.target.id]: event.target.value
    }));
  };

	useEffect(() => {
    // Only perform interactive validation after submit
    if (Object.keys(fieldErrors).length > 0) {
      validate();
    }
  }, [inputs]);

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
						{serverState.status?<>
							<div className={`py-2 mt-4 rounded-md px-3 flex items-center justify-center gap-x-2 ${serverState.status.ok?"bg-green-200 text-green-900":"bg-rose-200 text-rose-900"} font-bold`}>
								{serverState.status.ok?<FiCheckCircle size={16}/>:<FiXOctagon size={16}/>}{serverState.status.msg}
							</div>
						</>:""}
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
												<form onSubmit={handleOnSubmit} noValidate>
													<input
														id="email"
														name="email"
														type="email"
														onChange={handleOnChange}
														placeholder="Email Address"
														className={`text-sm w-full outline-2 dark:text-gray-900 bg-white outline-indigo-600 border-2 ${fieldErrors["email"]?"border-rose-500":""} rounded-lg px-2 py-2`}
													/>
													  {renderFieldError("email")}
													<textarea
														id="message"
														name="message"
														onChange={handleOnChange}
														rows={10}
														placeholder="Message"
														className="text-sm resize-none w-full mt-4 bg-white dark:text-gray-900 outline-2 outline-indigo-600 border-2 rounded-lg px-2 py-2"
													/>
													  {renderFieldError("message")}
												<button
													type="submit"
													disabled={serverState.submitting}
													className="inline-flex mr-3 justify-center mt-4 px-4 py-2 text-sm font-medium text-white bg-indigo-500 border border-transparent rounded-md hover:bg-indigo-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500"
												>
													Send
												</button>
												<button
													onClick={(e) => {
														setIsOpen(false);
													}}
													type="button"
													className="inline-flex justify-center mt-4 px-4 py-2 text-sm font-medium text-indigo-900 bg-indigo-100 border border-transparent rounded-md hover:bg-indigo-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500"
												>
													Cancel
												</button>
												</form>
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
