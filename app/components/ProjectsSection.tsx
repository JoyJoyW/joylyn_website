import Image from 'next/image';

const projects = [
  {
    title: "TaleMate: Conversational AI",
    description: "Helped improve the UI/UX for TalesMate: an AI-powered reading platform enhancing parent-child engagement. Uses REACT and Google API.",
    image: "/talemateproject.png",
    link: "https://github.com/JoyJoyW/spotify-analysis"
  },
  {
    title: "Twitter Sentiment/Volume Analysis and Stock Market Movement",
    description: "Analysis of Kaggle data to see if Tweet Sentiment/Volume can be a reliable predictor of stock movement.",
    image: "/twitterproject.png",
    link: "https://github.com/JoyJoyW"
  },
  {
    title: "Visualize Your Spotify Data",
    description: "See your top 10 most listened Spotify songs! Also displays each song's danceability, valence, and energy.",
    image: "/spotifyproject.png",
    link: "https://github.com/JoyJoyW"
  },
  {
    title: "Discord Bot",
    description: "My friend said I couldn't make a Discord bot, so I made one just to spite them (they're not mad, we are just joking).",
    image: "/botproject.png",
    link: "https://github.com/JoyJoyW"
  }
];

export default function ProjectsSection() {
	return (
		<section className="py-12 sm:py-20">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">Featured Projects</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
					{projects.map((project, index) => (
						<div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
							<div className="aspect-video bg-gray-100 relative">
								<Image src={project.image} alt={project.title} fill className="object-cover" />
							</div>
							<div className="p-4 sm:p-6">
								<h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">{project.title}</h3>
								<p className="text-sm sm:text-base text-gray-600 mb-4">{project.description}</p>
								<div className="flex gap-2">
									<a href={project.link} className="text-blue-600 hover:text-blue-800 font-medium text-sm sm:text-base">
										View Project →
									</a>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
