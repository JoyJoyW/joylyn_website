import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Joylyn Wang',
	description:
		'Welcome to my website! Just a girl passionate about making technology to help people.',
	keywords: [
		'Software Developer',
		'Web Developer',
		'Clean Code',
		'Simple Design',
		'JavaScript',
		'TypeScript',
		'React',
		'Next.js',
		'User Experience',
		'Problem Solving',
		'Effective Solutions',
		'Web Development',
		'Frontend Development',
		'Backend Development',
		'Joylyn Wang',
	],
	authors: [{ name: 'Joylyn Wang' }],
	creator: 'Joylyn Wang',
	openGraph: {
		title: 'Joylyn Wang',
		description: 'Welcome to my website! Just a girl passionate about making technology to help people.',
		url: 'https://joylynwang.com',
		siteName: 'Joylyn Wang',
		images: [
			{
				url: '/og-image.png',
				width: 1200,
				height: 630,
				alt: 'Joylyn Wang - Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Joylyn Wang',
		description: ' Just a girl passionate about creating technology to help people.',
		creator: '@itsjoyjoyy',
		images: ['/og-image.png'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
