const About = () => {
  return (
    <section id="about" className="py-20 bg-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-textPrimary mb-8 text-center">
          About Me
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <p className="text-textSecondary">
              I'm a quantitative developer and software engineer with a passion for building efficient and scalable solutions. My expertise lies in developing trading systems, financial models, data-driven solutions, and full-stack applications.
            </p>
            <p className="text-textSecondary">
              With a strong foundation in programming, finance, and math, I combine analytical thinking with technical skills to develop creative solutions that solve complex problems, and focus on improving my craft day by day. 
            </p>
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-textPrimary mb-4">Education</h3>
              <ul className="space-y-2">
                <li className="text-textSecondary">
                  <span className="font-semibold">University of Nevada, Reno</span> - Degree in Computer Science | Minor in Mathematics with a focus on Data Science 
                </li>
              </ul>
            </div>
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-textPrimary mb-4">Experience</h3>
              <ul className="space-y-2">
                <li className="text-textSecondary">
                  <span className="font-semibold">Markzware</span> - Software Engineer Intern
                </li>
                <li className="text-textSecondary">
                  <span className="font-semibold">Clarity Markets</span> - Equities Analyst Intern
                </li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-primary/10 p-4 rounded-lg">
              <h4 className="text-xl font-semibold text-textPrimary mb-2">2+</h4>
              <p className="text-textSecondary">Stacks</p>
            </div>
            <div className="bg-primary/10 p-4 rounded-lg">
              <h4 className="text-xl font-semibold text-textPrimary mb-2">8+</h4>
              <p className="text-textSecondary">Projects Completed</p>
            </div>
            <div className="bg-primary/10 p-4 rounded-lg">
              <h4 className="text-xl font-semibold text-textPrimary mb-2">5+</h4>
              <p className="text-textSecondary">Programming Languages</p>
            </div>
            <div className="bg-primary/10 p-4 rounded-lg">
              <h4 className="text-xl font-semibold text-textPrimary mb-2">4+</h4>
              <p className="text-textSecondary">Strategies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 