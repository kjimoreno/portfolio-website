const Skills = () => {
  const skills = [
    {
      category: 'Programming Languages',
      items: ['Python', 'C++', 'Javascript', 'SQL', 'C#', 'HTML/CSS']
    },
    {
      category: 'Libraries & Frameworks',
      items: ['Pandas', 'NumPy', 'Git', 'React', 'Streamlit', 'Dash']
    },
    {
      category: 'Software Development',
      items: ['Full-Stack Development', 'REST APIs', 'GIT', 'Debugging', 'Linux', 'Databases',]
    },
    {
      category: 'Quantitative Finance',
      items: ['Pricing & Risk Models', 'Derivatives', 'Financial Products', 'Investment Valuation', 'Market Microstructure', 'What-If Scenarios']
    }
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-text-primary mb-12 text-center">
          Skills & Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div key={skill.category} className="bg-tertiary p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-text-primary mb-4">
                {skill.category}
              </h3>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="text-text-secondary">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills 