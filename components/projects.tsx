function Projects() {
	return (
		<>
			<main id="work" className="px-6 [animation-delay:100ms] opacity-0 sm:px-6 lg:px-8 pt-36">
				<div className="text-left">
					<h3 className="text-lg text-base mono tracking-tight font-medium text-indigo-500 mb-12 md:text-lg">
						<span className="inline">Featured Projects</span>
					</h3>
					<div className="mt-10 sm:mt-24">
						<section className="relative flex-col sm:flex-row flex justify-between max-w-5xl">
							<div className="max-w-[500px] mr-auto sm:pr-8">
									<a href="https://sristspace.herokuapp.com" target="_blank" rel="noopener noreferrer"><img src="/portfolio/srist.png" height="278" width="500"/></a>
							</div>
							<div className="sm:w-2/6 mt-10 sm:mt-0">
								<a href="https://sristspace.herokuapp.com" target="_blank" rel="noopener noreferrer"><h3 className="text-2xl font-regular sm:font-medium text-gray-900 dark:text-white">SRIST space 1.0</h3></a>
								<p className="mt-3 text-gray-500 dark:text-gray-400 sm:mt-5 text-md sm:max-w-xl md:mt-5 md:text-md lg:mx-0">
									A web app, which serves as a platform for students and professors to share ideas and notes. 
									Students can view notes specifically added by their professors. 
									Students and professors can add articles, host events and add notifications. 
								</p>
							</div>
						</section>
					</div>
				</div>
			</main>
		</>
	)
}

export default Projects;
