import React from 'react'

export default function LandingPage() {
	return (
		<main className="flex-1 container mx-auto px-6 py-12">
			<section className="max-w-3xl mx-auto text-center">
				<h1 className="text-4xl font-bold mb-4 text-primary">Welcome</h1>
				<p className="text-lg text-slate-600 dark:text-slate-300">
					Welcome to the app — this is the landing page.
				</p>
				<div className="mt-8">
					<a href="#features" className="inline-block px-6 py-3 bg-primary text-white rounded-lg shadow hover:bg-primary-dark">Get started</a>
				</div>
			</section>
		</main>
	)
}
