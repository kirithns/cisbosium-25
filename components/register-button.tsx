"use client"

import { Button } from "@/components/ui/button"

interface RegisterButtonProps {
	registrationLink: string
}

export function RegisterButton({ registrationLink }: RegisterButtonProps) {
	return (
		<a href={registrationLink} target="_blank" rel="noopener noreferrer">
			<Button className="bg-violet-700 hover:bg-violet-800 dark:bg-violet-600 dark:hover:bg-violet-700 text-white shadow-lg hover:shadow-violet-300/50 dark:hover:shadow-violet-900/50 transition-all duration-300">
				Register
			</Button>
		</a>
	)
}