'use client';

import Image from 'next/image';

export default function HeroSection() {
	return (
		<section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
			<div className="text-center">
				<div className="mb-6 sm:mb-8">
					<Image src="/portrait.jpg" alt="Profile Picture" width={220} height={220} className="rounded-full mx-auto border-4 border-gray-50 shadow-lg" />
				</div>
				<h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Joylyn Wang</h1>
				<p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8">Passionate CS student @ VT!</p>
				<p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base px-4">
					Enthusiatic about developing software and using data to help people! 
					Currently, I do research related to human-computer interaction because to make
					technology for the people, you need to understand how people interact with it and the potential implications. 
					Open to data analytic and software developer internships.
				</p>
			</div>
		</section>
	);
}
