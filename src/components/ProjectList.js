import '../css/ProjectList.css';

import React from 'react';

function ProjectList ({projectsView}) {
    return (
        projectsView.map((item) => (
            <div class='project__img'>
              <img src={item.img} alt='' />
            </div>
          ))
    )
}

export default ProjectList;
