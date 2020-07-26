import React, {useRef, useEffect} from 'react';
import scss from './details.module.scss';
import PropTypes from 'prop-types';
import {dateAsString} from '../../utils/utils';

export function Details(props) {

    const descriptionRef = useRef();

    useEffect(() => {
        descriptionRef.current.innerHTML = props.item.description;
    }, []);


    return (
        <div className={scss.detailsPanel}>
            <h2 className={scss.jobTitle}>{props.item.title} {props.item.type === 'Full Time' &&
            <span className={scss.fullTime}>{props.item.type}</span>}</h2>
            <div className={scss.wrapper}>
                <span className={scss.icon}>schedule</span>
                <span className={scss.desc}>{dateAsString(props.item.created_at)}</span>
            </div>
            <div className={scss.wrapper}>
                <div className={scss.img}>
                    {props.item.company_logo && <img src={props.item.company_logo} alt={props.item.company}/>}
                </div>
                <div className={scss.companyDetails}>
                    <h3 className={scss.companyName}>{props.item.company}</h3>
                    <div>
                        <span className={scss.icon}>public</span>
                        <span className={scss.desc}>{props.item.location}</span>
                    </div>
                </div>
            </div>

            <div className={scss.description} ref={descriptionRef}>
            </div>
        </div>
    )
}

Details.propTypes = {
    item: PropTypes.object
}

// company: "General Atomics"
// company_logo: "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcVdHIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--ca16fc6ca0984aa1e4bffa254e095306a9272767/GA%20icon%20logo.png"
// company_url: "https://www.ga-careers.com/"
// created_at: "Fri Jul 24 19:18:10 UTC 2020"
// description: "<p>General Atomics (GA), and its affiliated companies, is one of the world’s leading resources for high-technology systems development ranging from the nuclear fuel cycle to remotely piloted aircraft, airborne sensors, and advanced electric, electronic, wireless and laser technologies.</p>↵<p>General Atomics Electromagnetic Systems (GA-EMS) designs and manufactures first-of-a-kind electromagnetic and electric power generation systems. GA-EMS’ expanding portfolio of specialized products and integrated system solutions support critical fleet, space systems and satellites, missile defense, power and energy, and process and monitoring applications for defense, industrial, and commercial customers worldwide.</p>↵<p>We currently have an exciting opportunity for a Satellite Fault Detection, Isolation and Recovery Engineer working on satellite systems to join our team located in Centennial, CO.</p>↵<p>DUTIES AND RESPONSIBILITIES:</p>↵<ul>↵<li>Provide proactive and pragmatic Fault Detection, Isolation and Recovery (FDIR) engineering support as part of an integrated satellite project team.</li>↵<li>Support projects to ensure that they are delivering to contractual availability requirements and applicable plans.</li>↵<li>Collect, document and present, as required, FDIR related information.</li>↵<li>Support project teams in management of discrepancies and bugs, working with the integrated satellite project team to address and close.</li>↵<li>Support project teams in the management of engineering changes.</li>↵<li>Manage and process requests for waiver and deviation of requirements in conjunction with the satellite system engineers, and wider project team.</li>↵<li>Support mandatory inspection points as needed, involving review of documentation and general verification of the status.</li>↵<li>Liaise with all levels of project team and engineering staff on FDIR related matters and support other teams / disciplines as necessary.</li>↵<li>Apply technical knowledge to analyze, investigate and resolve engineering problems.</li>↵<li>Perform other duties as assigned or required.↵We recognize and appreciate the value and contributions of individuals with diverse backgrounds and experiences and welcome all qualified individuals to apply.</li>↵</ul>↵<p>JOB QUALIFICATIONS:</p>↵<ul>↵<li>Typically requires a bachelors degree, masters degree or PhD in engineering or a related technical discipline from an accredited institution and progressive engineering experience as follows; six or more years of experience with a bachelors degree, four or more years of experience with a masters degree, or two or more years with a PhD. May substitute equivalent engineering experience in lieu of education.</li>↵<li>Technical background working in an environment in which mission assurance is a major consideration.</li>↵<li>Experience with Failure Detection Isolation and Recovery (FDIR) analysis and testing.</li>↵<li>Experience in space technologies or similar engineering background would be preferable.</li>↵<li>Experience in a project led design and development environment.</li>↵<li>A working understanding of some of the following technologies/disciplines would be an advantage: analogue / digital electronics and components, satellite integration and test</li>↵<li>Familiarity with the satellite system life cycle, including launch, commissioning and operations.</li>↵<li>Must possess the ability to understand new concepts quickly and apply them accurately and organize work assignments to meet established timetables.</li>↵<li>Strong communication, computer, documentation, presentation, and interpersonal skills are required, as well as the ability to work both independently and as part of a team.</li>↵<li>Must be able to work extended hours as required.</li>↵<li>US citizenship is required.</li>↵<li>Ability to obtain and maintain a DoD Security Clearance is required.</li>↵<li>Travel Percentage Required 0% - 25%</li>↵<li>US Citizenship Required? Yes</li>↵<li>Clearance Required? No</li>↵</ul>↵"
// how_to_apply: "<p><a href="https://bit.ly/2WQ81fm">https://bit.ly/2WQ81fm</a></p>↵"
//     id: "bdf6c777-8b70-4aa7-92cf-8a12bf2e5124"
// location: "Centennial, CO"
// title: "Space Systems Engineer- Fault Management"
// type: "Full Time"
// url: "https://jobs.github.com/positions/bdf6c777-8b70-4aa7-92cf-8a12bf2e5124"
