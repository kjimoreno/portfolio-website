const projects = [
  {
    title: 'End To End Equities Trading System',
    description: 'Built an end-to-end trading system featuring custom backtester with execution simulation.',
    technologies: ['System Design', 'Strategy Implementation', 'Backtesting Engine', 'Trade Simulation'],
    link: 'https://kjimoreno-end-to-end-trading-system-dashboardapp-2obsw8.streamlit.app/',
  },
  {
    title: 'Portfolio Optimization Dashboard',
    description: 'Created optimization platform incorporating modern portfolio theory and risk models.',
    technologies: ['Modern Portfolio Theory', 'Data Wrangling', 'Risk & Return Metrics', 'REST APIs'],
    link: 'https://kjimoreno-portfolio-optimization-dashboard-app-hscyb9.streamlit.app/',
  },
  {
    title: 'Options Pricing Model',
    description: 'Developed user-friendly interface for pricing options models and backtesting strategies.',
    technologies: ['Derivatives', 'Pricing Models', 'Numerical Methods', 'Greeks Calculation'],
    link: 'https://kjimoreno-options-pricing-model-app-xfhz6w.streamlit.app/',
  },
  {
    title: 'Volatility Forecasting Model',
    description: 'Engineered interactive dashboard for real-time model visualization to evaluate volatility.',
    technologies: ['Volatility Forecast', 'GARCH', 'EWMA'],
    link: 'https://github.com/kjimoreno/Volatility-Forecast',
  },
  {
    title: 'CFA Institute Research Report',
    description: 'Conducted in-depth quantitative methods for an analysyis on stock Dolby Laboratories.',
    technologies: ['Sensitivity Analysis', 'Financial Modeling', 'Risk Management', 'Data Analysis'],
    link: 'https://jmp.sh/Sh1Weak7',
  },
]

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-text-primary mb-12 text-center">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="bg-tertiary p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-text-primary mb-2">
                {project.title}
              </h3>
              <p className="text-text-secondary mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-accent transition-colors duration-300"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects 