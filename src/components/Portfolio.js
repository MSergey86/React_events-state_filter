import '../css/Portfolio.css';

import React, { useState } from 'react';
import ProjectList from './ProjectList';
import Toolbar from './Toolbar';


function Portfolio({ projects }) {
const filters = ["All", "Websites", "Flayers", "Business Cards"];
const [selected, SetSelected] = useState("All");
const [filteredProjects, SetFilteredProjects] = useState(projects);

const filter = (e) => {
    const buttons = document.querySelectorAll('button');
    buttons.forEach((item) => item.classList.remove('active'));

    const select = e.target.textContent;
    if (select === "All") {
        SetFilteredProjects(projects)
    }
    else {
        SetFilteredProjects(projects.filter(item => item.category === select))
    }
    SetSelected(select);
}

    return (
        <div class='container'>          
            <div class = "Toolbar__">
            <Toolbar 
                filters={filters}
                selected={selected}
                onSelectFilter={filter}
            />
            </div>
            <div class='gallery'>
                <ProjectList projectsView={filteredProjects} /> 
            </div>
        </div>
        );
    }

export default Portfolio;