type Work = { organization: string; role: string; period: string; description: string; logo: string };
type Education = { institution: string; degree: string; period: string; logo: string };

// Put your photo in public/ and set photo to its path, e.g. '/profile.webp'.
export const profile = {
  photo: '/interstellar-endurance.webp',
  photoAlt: 'The Endurance spacecraft beside Gargantua in Interstellar',
  about: 'tldr; i debug code to live.\nchronically online on twitter.survived jee and nit.\nright now, i build stuff and read books.',
  aboutNote: '',
  work: [
    { organization: 'Wells Fargo', role: 'software engineer | fulltime', period: 'August 2025 - Present', description: '', logo: '/wells-fargo.svg' },
    { organization: 'Wells Fargo', role: 'software engineer | intern', period: 'February 2025 - July 2025', description: '', logo: '/wells-fargo.svg' },
  ] as Work[],
  education: [{ institution: 'National Institute of Technology, Durgapur', degree: 'Electrical Engineering', period: '2021-25', logo: '/nit-durgapur.svg' }] as Education[],
  socials: { github: 'https://github.com/dev-Priyanshu07', linkedin: 'https://www.linkedin.com/in/priyanshu-mishra-62b349211/', email: 'mpriyanshu0000@gmail.com', twitter: 'https://x.com/coolsidepillo' },
  blog: '/blog',
};
