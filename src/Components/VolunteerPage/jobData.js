const jobData = [
  
  {
    id: 1,
    title: 'Parish Leader',
    date: '',
    type: 'Volunteer',
    location: 'Belleville, NJ',
    tag: '',
    bgColor: '#eaf4ff',
    details: {
      timeType: '',
      workType: '',
      experience: '',
      about: `Under the direction of the Beyond Baptism Team, you will learn how to quickly build a team of 3- 6 Parish Ministers from the Parish. Your primary responsibilities are: 1) lead your Ministers in the distribution of Beyond Baptism educational material, and 2) help run several pre-designed events in your parish. Your team will work together to successfully implement the Beyond Baptism Ministry with the goal of bringing Catholics to a deeper personal relationship with Christ and an unwavering commitment to the Eucharist.`,
      // qualifications: ['Experience with community leadership', 'Strong communication skills'],
      // responsibilities: ['Lead parish group sessions', 'Plan events', 'Coordinate volunteers'],
      qualifications: [
         'Able to approach and engage various parish ministries with confidence and purpose',
        'Open to leadership training',
        'Fully committed to attending all scheduled training sessions, key dates, and retreats',
        'Attention to detail and strong problem-solving skills',
        'Passion for the truth that Jesus is truly present in the Eucharist',
        'Belief in succession and desire to empower others to lead'
      ],
      responsibilities: [
        'Committed to a 2-year term of dedicated service',
        'Work closely with the Pastor to implement and support parish outreach efforts',
        'Motivate and educate Parish Ministers to assist in all activities',
        'Ensure the team is engaged and prepared for events throughout the liturgical year',
        'Help create a warm and welcoming environment at Masses and parish gatherings',
        'Oversee distribution and follow-up of monthly newsletters and bulletin announcements',
        'Help keep the parish community informed and connected'        
      ],
      timeCommitment:[
        'Term – Two years',
        'Weekly - This would typically require approximately 120 minutes a week',
        'Events – Approximately 2 – 3 hours assisting with the set up and delivery of events; 3 – 4 times a year',
        'Training and Team Meetings – Initial training is virtual and consists of three 1 ½ hour sessions.',
        'Meetings with the Diocesan Leader would occur a couple of times per month to check in and plan for events and gatherings.'
      ],
      // salary: 'Volunteer',
      workHours: 'Average 2 hours per week',
    }
  },

  {
    id: 2,
    title: 'Parish Minister',
    date: '',
    type: 'Volunteer',
    location: 'Belleville, NJ',
    tag: '',
    bgColor: '#e6e2fc',
    details: {
      timeType: '',
      workType: '',
      experience: '',
      about: `As a Parish Minister with Beyond Baptism, you will begin by receiving training from our dedicated team. Once trained, you’ll collaborate with your parish leader to identify and offer your unique talents in support of events and initiatives throughout the liturgical calendar year.\n
      In addition to event involvement, you will assist in the distribution of monthly newsletters and parish communications at Mass, helping to keep the community informed and engaged.\n
      Your commitment will play a vital role in fostering Eucharist-centered renewal and discipleship within your parish.`,
      qualifications: [
        'Comfortable engaging parishioners in faith-filled conversations',
        'Deep belief and passion for the Real Presence of Jesus in the Eucharist',
        'Thrives in a collaborative team environment',
        'Offers support and encouragement to fellow ministers'
      ],
      responsibilities: [
          'Actively engage in all required Beyond Baptism training sessions',
          'Be present at designated Mass to support distribution of monthly newsletters',
          'Participate in Beyond Baptism events throughout the Liturgical Calendar Year',
          'Work collaboratively with fellow ministers to foster a welcoming environment',
          'Help educate the parish community through Beyond Baptism principles and practices',
          'Contribute to the spiritual growth of the congregation by sharing knowledge and love of the Catholic faith',
          'Participate in regular team meetings scheduled by the Parish Leader',
          'Assist in identifying future ministers to support leadership succession and long-term ministry growth'
      ],
      timeCommitment: [
        'Term – Two years',
        'Weekly – This would typically require approximately 90 minutes a week during Mass',
        'Events – Approximately 2–3 hours assisting with the setup and delivery of events, 3–4 times a year',
        'Training and Team Meetings – Initial training is virtual and consists of three 1½ hour sessions',
        'Meetings with the Parish Leader'
      ],
      // salary: '',
      workHours: 'Average 1½ hours per week',
    }
  },

   {
    id: 3,
    title: 'Diocesan Leader',
    date: '',
    type: 'Volunteer',
    location: 'Belleville, NJ',
    tag: '',
    bgColor: '#eaf4ff',
    details: {
      timeType: '',
      workType: '',
      experience: '',
      about: `Once trained by Beyond Baptism, the Diocesan Leader serves as a vital link between the ministry and parish leaders across the diocese. Your primary responsibility is to maintain open and consistent communication with each parish leader, ensuring they are supported and equipped to carry out their roles effectively.\n
      You will follow up on the training and development of both parish leaders and their ministry teams, offering guidance and encouragement as needed. In addition, you will assist parish leaders in planning and executing Beyond Baptism events, helping them make full use of the program manual and resources.\n
      A key part of your role includes promoting the regular distribution of Beyond Baptism newsletters and bulletin announcements, encouraging parish leaders to keep their communities informed and engaged. Your leadership will help ensure that the mission of Beyond Baptism flourishes throughout the diocese.`,
      qualifications: [
          'Willing to receive comprehensive training to confidently support Parish Leaders',
          'Able to provide regular follow-up to ensure Parish Leaders are well-trained, motivated, and competent',
          'Maintains open lines of communication and offers consistent encouragement',
          'Keeps leaders aligned with the mission of Beyond Baptism',
          'Possesses a positive and solution-focused attitude, especially when addressing parish-level challenges',
          'Demonstrates steady support and leadership to strengthen the ministry across the diocese'
      ],
      responsibilities: [
          'Committed to a 2-year term of service',
          'Support and strengthen parish-level leadership across the diocese',
          'Encourage Parish Leaders to actively recruit and develop their ministry teams',
          'Ensure each Parish Leader meets with their Pastor to plan the annual Beyond Baptism event and set a budget',
          'Maintain regular communication with Parish Leaders, Executive Leadership, and Pastors',
          'Provide guidance, monitor progress, and foster collaboration',
          'Keep the marketing department informed of all scheduled events for effective promotion and outreach',
          'Report progress and share best practices with Executive Leadership',
          'Attend all scheduled team meetings to stay aligned with the mission and goals of Beyond Baptism'
      ],
      timeCommitment: [
        'Term – Two years',
        'Weekly – This would typically require approximately 180 minutes a week'
      ],
      // salary: '',
      workHours: '3 hours per week',
    }
  },

   {
    id: 4,
    title: 'IT Coordinator',
    date: '',
    type: 'Paid',
    location: 'Belleville, NJ',
    tag: '',
    bgColor: '#dff6f2',
    details: {
      timeType: '',
      workType: '',
      experience: '',
      about: `Beyond Baptism is seeking a skilled and experienced IT Coordinator to oversee the technology infrastructure and operations of our Catholic ministry. The IT Coordinator will be responsible for managing all aspects of information technology, including systems administration, maintenance of hardware and software, cybersecurity, and technical support. This role is critical in ensuring the reliability, security, and efficiency of our IT systems to support the mission and operations of our ministry.`,
      qualifications: [
          "Bachelor's degree in information technology, computer science, or a related field; relevant certifications (e.g., CompTIA, Cisco, Microsoft) are a plus",
          'Proven experience in IT management',
          'Strong technical skills in systems administration, network management, cybersecurity, and cloud computing',
          'Experience with cloud-based collaboration and productivity tools, such as Google Workspace, Microsoft Office 365, or similar platforms',
          'Excellent problem-solving and troubleshooting abilities, with a customer-focused approach to IT support',
          'Strong project management skills, with the ability to manage multiple initiatives and priorities simultaneously',
          'Effective communication and interpersonal skills, with the ability to collaborate with diverse stakeholders',
          'Commitment to the mission and values of our Catholic ministry, with sensitivity to the religious and cultural context of our work'
      ],
      responsibilities: [
          'Develop and implement IT strategies, policies, and procedures aligned with the goals and objectives of our Catholic ministry',
          'Evaluate and implement cloud-based solutions, such as Google Workspace or other alternatives, to enhance collaboration, communication, and productivity',
          'Manage and maintain the organization\'s IT infrastructure',
          'Oversee systems administration tasks, such as user account management, access control, and data backup and recovery',
          'Monitor network performance, security, and availability, and implement measures to ensure optimal performance and protection against cyber threats',
          'Provide technical support and troubleshooting assistance to staff and volunteers, resolving IT-related issues in a timely and efficient manner',
          'Collaborate with external vendors, consultants, and service providers to procure and maintain IT equipment, software licenses, and support services',
          'Conduct regular security audits and assessments to identify vulnerabilities and implement security best practices and protocols',
          'Develop and maintain disaster recovery and business continuity plans to minimize downtime and data loss in the event of a system failure or cyber-attack',
          'Stay informed about developments in IT technology, trends, and best practices, and make recommendations for technology upgrades and improvements',
          'Manage the IT budget, including forecasting expenses, tracking spending, and ensuring cost-effectiveness in technology investments'
      ],
      timeCommitment: [],
      salary: '$12,000 annually',
      workHours: '10 hours per week',
    }
  },

  //  {
  //   id: 5,
  //   title: 'Training Coordinator ',
  //   date: '',
  //   type: 'Paid',
  //   location: 'Belleville, NJ',
  //   tag: '',
  //   bgColor: '#dfe8e5',
  //   details: {
  //     timeType: '',
  //     workType: '',
  //     experience: '',
  //     about: `Beyond Baptism is seeking a dedicated and knowledgeable Training Coordinator to join our Catholic ministry team. The Training Coordinator will be responsible for designing, implementing, and evaluating training programs for volunteers within our ministry. This person will also assist in the onboarding of new volunteers. This role is crucial in ensuring that our volunteer team members are equipped with the knowledge, skills, and resources needed to effectively serve our community and fulfill our mission of training and utilizing laity to catechize and help in the faith formation of Catholics.`,
  //     qualifications: [],
  //     responsibilities: [],
  //     timeCommitment: [],
  //     salary: 'This position will start as a volunteer role with the goal of transitioning to a paid position with an annual salary to be determined once funding is secured.',
  //     workHours: '12 hours per week',
  //   }
  // },

   {
    id: 5,
    title: 'Content Creator',
    date: '',
    type: 'Volunteer',
    location: 'Belleville, NJ',
    tag: '',
    bgColor: '#f7e0cf',
    details: {
      timeType: '',
      workType: '',
      experience: '',
      about: `We are seeking a passionate Content Creator to join our team and assist in generating engaging and informative content for our organization. The Content Creator will work closely with our marketing team to develop content for various platforms, including social media, blogs, newsletters, and website updates. This role offers the opportunity to showcase your creativity and writing skills while making a positive impact in our community.`,
      qualifications: [
        'Strong writing and communication skills',
        'Creative mindset with a passion for storytelling that reflects the beauty and truth of the Catholic faith',
        'Ability to work independently and collaborate effectively with team members',
        'Familiarity with social media platforms to reach and inspire a wide audience',
        'Proficiency in Canva for creating visually appealing graphics and promotional materials is highly valued',
        'Previous experience in content creation or marketing is preferred but not required',
        'Strong Catholic belief and a desire to share the faith in a compelling and authentic way'
      ],
      responsibilities: [
          'Develop meaningful and faith-centered content across various platforms to support the mission of Beyond Baptism',
          'Collaborate with a team of content creators to ensure a unified and inspiring message',
          'Generate original content ideas aligned with organizational goals',
          'Craft clear, concise, and compelling copy for newsletters, website updates, social media posts, blog articles, and other media materials',
          'Collaborate with marketing, website development, and social media teams to brainstorm content themes and campaigns',
          'Stay current on relevant topics and trends, and conduct research to provide valuable insights',
          'Plan and schedule content to ensure consistent and timely delivery',
          'Proofread and edit content for accuracy, grammar, and style',
          'Engage with online audience by responding to comments and inquiries',
          'Monitor content performance metrics and identify areas for improvement',
          'Support the creation of digital and print media to inspire, inform, and evangelize in alignment with the Catholic mission'
      ],
      timeCommitment: ['This position requires 60 minutes per week of the volunteer’s time'],
      // salary: '',
      workHours: '1 or more hours per week depending on availability',
    }
  },

   {
    id: 6,
    title: 'Graphic Designer',
    date: '',
    type: 'Volunteer',
    location: 'Belleville, NJ',
    tag: '',
    bgColor: '#e6e2fc',
    details: {
      timeType: '',
      workType: '',
      experience: '',
      about: `We are seeking a talented and creative Graphic Designers with expertise in Canva to join our dynamic team. As a Graphic Designer, you will play a crucial role in translating ideas into visually appealing designs that resonate with our target Catholic audience. Your primary responsibility will be to utilize your advanced skills in Canva to design captivating graphics for various digital and print materials.`,
      qualifications: [
         'Proven experience in graphic design with a strong portfolio demonstrating expertise in Canva',
        'Excellent understanding of design principles, typography, and color theory',
        'Strong communication and interpersonal skills for effective collaboration with cross-functional teams',
        'Keen eye for detail and aesthetics',
        'Ability to work independently with minimal supervision and take full ownership of projects'
      ],
      responsibilities: [
          'Collaborate closely with the marketing team to understand project requirements, goals, and messaging',
          'Use Canva to create visually compelling graphics for marketing materials, social media posts, website banners, email newsletters, and presentations',
          'Develop design concepts and layouts that align with Beyond Baptism’s brand guidelines and project briefs',
          'Ensure all visual content clearly communicates the mission and values of Beyond Baptism',
          'Optimize graphics for both web and print, focusing on resolution, file size, and color accuracy',
          'Incorporate feedback and revisions from stakeholders to refine and finalize designs',
          'Maintain proper file management and documentation for all design assets',
          'Bring the ministry’s message to life through creative and detail-oriented visual design that engages Catholic audiences across platforms'
      ],
      timeCommitment: [
        'This position requires only 60 minutes per week of the volunteer’s time'
      ],
      // salary: '',
      workHours: '1-2 hours per week',
    }
  },

   {
    id: 7,
    title: 'Event Coordinator',
    date: '',
    type: 'Volunteer',
    location: 'Belleville, NJ',
    tag: '',
    bgColor: '#dff6f2',
    details: {
      timeType: '',
      workType: '',
      experience: '',
      about: `We are looking for an enthusiastic Event Coordinator to help us plan and execute successful events for our organization. The Event Coordinator will play a key role in coordinating logistics, managing volunteers, and ensuring that events run smoothly. This is a great opportunity for someone who enjoys event planning and wants to contribute to meaningful community initiatives.`,
      qualifications: [
          'Excellent organizational and multitasking abilities with strong attention to detail',
          'Commitment to delivering high-quality, well-executed events',
          'Strong interpersonal and communication skills for effective coordination with team members, volunteers, and vendors',
          'Ability to create meaningful and memorable experiences that reflect the mission and spirit of Beyond Baptism',
          'Previous experience in event planning or coordination is desirable but not required',
          'Genuine passion for Beyond Baptism’s mission and dedication to creating impactful, mission-driven events'
      ],
      responsibilities: [
          'Assist in the planning and execution of events such as workshops, fundraisers, and community gatherings that reflect the mission and values of Beyond Baptism',
          'Coordinate all event logistics, including venue selection, catering, equipment rentals, transportation, and other essential details',
          'Manage event timelines and schedules to ensure prompt and efficient execution of all components',
          'Communicate clearly with participants, volunteers, and stakeholders before, during, and after events to maintain alignment and engagement',
          'Evaluate the success of each event by gathering feedback and identifying areas for improvement',
          'Plan all events within the allotted budget while maintaining focus on the event’s theme, purpose, and messaging to create a cohesive and impactful experience'
      ],
      timeCommitment: [
        'This position requires only 60 minutes per week of the volunteer’s time'
      ],
      // salary: '',
      workHours: '1 hour per week',
    }
  },

  {
    id: 8,
    title: 'Marketing Director',
    date: '',
    type: 'Paid',
    location: 'Belleville, NJ',
    tag: '',
    bgColor: '#eaf4ff',
    details: {
      timeType: '',
      workType: '',
      experience: '',
      about: `The Communications and Outreach Coordinator is responsible for overseeing the development and execution of the organization's communication and marketing strategies. This role will manage and coordinate the efforts of graphic designers and content creators, and lead outreach initiatives to donors, volunteers, parish pastors, and website members. The ideal candidate will support the mission of the organization by enhancing its visibility, engaging the community, and promoting faith formation activities.`,
      qualifications: [
        'Bachelor’s degree in Communications, Marketing, Public Relations, or a related field',
        'Minimum of 5 years of experience in communications, public relations, or a similar role',
        'Experience in a non-profit organization, preferably within the faith-based sector',
        'Strong leadership and team management skills',
        'Excellent written and verbal communication skills',
        'Proficiency in using digital communication tools and platforms (e.g., social media, email marketing, website)',
        'Creative thinking and problem-solving abilities',
        'Strong organizational and project management skills',
        'Ability to work collaboratively and build relationships with diverse stakeholders',
        'Commitment to the mission of the organization',
        'High level of integrity and professionalism',
        'Ability to work independently and take initiative',
        'Flexibility and adaptability in a dynamic environment',
        'Experience with graphic design software (Canva) is preferred',
        'Knowledge of Catholic faith and teachings is preferred'
      ],
      responsibilities: [
        'Recruit, lead, motivate, and manage a team of graphic designers and content creators',
        'Ensure alignment of the team\'s work with the organization\'s mission and goals',
        'Facilitate regular team meetings and performance reviews',
        'Develop and implement comprehensive communication plans',
        'Create and oversee the production of engaging content across social media, newsletters, weekly bulletin announcements, and the organization\'s website',
        'Maintain consistent branding and messaging across all platforms',
        'Organize and coordinate outreach programs to engage donors, volunteers, parishes, and website members',
        'Develop strategies to increase donor support and volunteer participation',
        'Plan and design events, workshops, and webinars to promote the organization\'s mission',
        'Build and maintain relationships with key stakeholders, including parishes, donors, members, and media outlets',
        'Work closely with the CEO and other departments to ensure cohesive and effective communication',
        'Track and analyze the effectiveness of communication and outreach efforts',
        'Prepare regular reports for the CEO and board of directors',
        'Use data to make informed decisions and improve communication strategies',
        'Develop and manage the communications and outreach budget',
        'Ensure cost-effective strategies and monitor expenses'
      ],
      timeCommitment: [],
      salary: 'This position will start as a volunteer role with the goal of transitioning to a paid position with an annual salary to be determined once funding is secured.',
      workHours: '20 hours per week',
    }
  },

  // {
  //   id: 10,
  //   title: 'Print Coordinator',
  //   date: '',
  //   type: 'Volunteer',
  //   location: 'Belleville, NJ',
  //   tag: '',
  //   bgColor: '#fcecff',
  //   details: {
  //     timeType: '',
  //     workType: '',
  //     experience: '',
  //     about: `We are seeking a dedicated and reliable Volunteer Print Coordinator to facilitate communication and coordination between our ministry and a third-party printer. The Print Liaison will play a crucial role in ensuring that our print materials are produced accurately, efficiently, and in accordance with our ministry’s needs and specifications. This volunteer opportunity offers an exciting chance to support our mission and enhance our outreach efforts.`,
  //     qualifications: [
  //       'Strong organizational and communication skills, with the ability to effectively coordinate and manage print projects from start to finish',
  //       'Attention to detail and accuracy, with the ability to review and assess print materials for quality and consistency',
  //       'Familiarity with print production processes, terminology, and best practices is preferred but not required',
  //       'Proficiency in using email, phone, and other communication tools to facilitate interactions with the printer and ministry team',
  //       'Commitment to the mission and values of our ministry, with a desire to contribute your time and skills to support our outreach efforts'
  //     ],
  //     responsibilities: [
  //       'Serve as the primary point of contact between our ministry and the third-party printer, facilitating communication and maintaining positive relationships',
  //       'Collaborate with ministry staff to gather print requirements, including quantity, specifications, deadlines, and budget',
  //       'Communicate print job details and specifications to the printer, ensuring clear understanding and agreement on project scope and expectations',
  //       'Obtain price quotes and estimates from the printer for proposed print jobs, comparing options and negotiating pricing as needed to ensure cost-effectiveness',
  //       'Coordinate the submission of print files and artwork to the printer, ensuring accuracy, completeness, and adherence to printing specifications',
  //       'Communicate feedback and revisions to the printer as necessary, facilitating revisions and approvals until final sign-off is obtained',
  //       'Monitor the progress of print jobs, tracking production timelines, and addressing any delays or issues that may arise',
  //       'Coordinate logistics for print delivery or pickup, including scheduling, shipping arrangements, and distribution to appropriate locations',
  //       'Maintain organized records of print projects, including job specifications, quotes, proofs, approvals, and delivery receipts',
  //       'Provide regular updates and reports to ministry staff on the status of print projects, including progress, costs, and any issues or concerns',
  //       'Serve as an advocate for the ministry’s interests and priorities in all interactions with the printer, ensuring that our needs are met and our expectations are fulfilled'
  //     ],
  //     timeCommitment: [
  //       'This position requires only 60 minutes per week of the volunteer’s time'
  //     ],
  //     // salary: '',
  //     workHours: '1 hour per week',
  //   }
  // },

  {
    id: 9,
    title: 'Social Media Manager',
    date: '',
    type: 'Paid',
    location: 'Belleville, NJ',
    tag: '',
    bgColor: '#dfe8e5',
    details: {
      timeType: '',
      workType: '',
      experience: '',
      about: `We are seeking a creative, strategic, and mission-aligned Social Media Manager to lead and grow our digital presence across multiple platforms. This individual will play a key role in sharing the message and mission of Beyond Baptism, inspiring engagement, and expanding our reach to catholic parishes and lapsed Catholics.\n
      As Social Media Manager, you will be responsible for developing and executing a cohesive content strategy that reflects our values, educates our audience, and fosters meaningful online interactions. You will work closely with our marketing, content, and ministry teams to ensure messaging is consistent, engaging, and rooted in our Catholic identity.
`,
      qualifications: [
         'Proven experience managing social media accounts for a brand, organization, or ministry (portfolio or examples required)',
        'Excellent writing, communication, and storytelling skills',
        'Proficiency in content creation tools like Canva, Meta Business Suite, and scheduling platforms (e.g., Buffer, Later, Hootsuite)',
        'Strong understanding of Catholic teachings and a personal commitment to the mission of Beyond Baptism',
        'Ability to work independently, manage deadlines, and adapt quickly to feedback or shifting priorities',
        'Creativity, empathy, and a heart for digital evangelization'
      ],
      responsibilities: [
          'Develop and manage a comprehensive social media strategy across platforms such as Facebook, Instagram, YouTube, and others',
          'Create, curate, and schedule original content including graphics, videos, quotes, and articles that align with Beyond Baptism’s mission',
          'Collaborate with content creators, graphic designers, and ministry leaders to plan campaigns and support event promotion',
          'Monitor social media channels, engage with followers, and respond to comments and messages in a timely and respectful manner',
          'Track analytics, generate performance reports, and provide recommendations to increase reach and engagement',
          'Stay current on social media trends, best practices, and opportunities for mission-oriented growth'
      ],
      timeCommitment: [
        ''
      ],
      salary: 'This position will start as a volunteer role with the goal of transitioning to a paid position with an annual salary to be discussed and determined once funding is secured.',
      workHours: 'minimum 5 hours per week',
    }
  },


  // Add more jobInfo
];

export default jobData;
