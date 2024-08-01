import Carousel from "./carousel";

const BentoGrid = ({ projects }) => {
    return (
      <div className="bento-grid">
        {projects.map((project, index) => (
          <div key={index} className="bento-grid-item">
            {project.images && project.images.length > 1 ? (
              <Carousel images={project.images} />
            ) : project.images && project.images.length === 1 ? (
              <img src={project.images[0]} alt={project.title} className="single-image" />
            ) : null}
            <div className="project-info">
              {project.title && <h3>{project.title}</h3>}
              {project.description && <p>{project.description}</p>}
            </div>
            {project.icons && project.icons.length > 0 && (
              <div className="icons-container">
                {project.icons.map((icon, iconIndex) => (
                  <a 
                    key={iconIndex} 
                    href={icon.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <img src={icon.src} alt={`icon-${iconIndex}`} className="icon-image" />
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };
  
  const projectsValidation = (props, propName, componentName) => {
    const projects = props[propName];
  
    if (!Array.isArray(projects)) {
      return new Error(`${propName} in ${componentName} must be an array`);
    }
  
    for (let i = 0; i < projects.length; i++) {
      const project = projects[i];
      if (!project.title || !project.description) {
        return new Error(
          `Each project in ${componentName} must have 'title' and 'description'`
        );
      }
      if (project.images && !Array.isArray(project.images)) {
        return new Error(
          `If provided, 'images' in ${componentName} must be an array of strings`
        );
      }
      if (project.icons && !Array.isArray(project.icons)) {
        return new Error(
          `If provided, 'icons' in ${componentName} must be an array of objects with 'src' and 'link' properties`
        );
      }
    }
  
    return null;
  };
  
  BentoGrid.propTypes = {
    projects: projectsValidation.isRequired,
  };
  
  export default BentoGrid; 