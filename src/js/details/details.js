import React from 'react';
import scss from './details.module.scss';

export function Details() {
    return (
        <div className={scss.detailsPanel}>
            <h2 className={scss.jobTitle}>Front-End Software Engineer<span className={scss.fullTime}>Full time</span></h2>
            <div className={scss.wrapper}>
                <span className={scss.icon}>schedule</span>
                <span className={scss.desc}>5 days ago</span>
            </div>
            <div className={scss.wrapper}>
                <div className={scss.img}></div>
                <div className={scss.companyDetails}>
                    <h3 className={scss.companyName}>Kasisto</h3>
                    <div>
                        <span className={scss.icon}>public</span>
                        <span className={scss.desc}>New York, Berlin</span>
                    </div>
                </div>
            </div>

            <p className={scss.description}>
                Humanizing Digital Experiences®
            </p>
            <p className={scss.description}>
                Kasisto’s Digital Experience Platform, KAI, is designed for financial
                institutions to deliver the industry’s most amazing Conversational AI powered intelligent virtual
                assistants to their customers. KAI is open and extensible, and also fluent in the language of banking
                and finance. From simple retail transactions to the complex demands of corporate banks and wealth
                management, financial institutions can deliver meaningful digital interactions with KAI that help build
                their digital brand.
            </p>
            <p className={scss.description}>
                Financial institutions around the world use KAI, including DBS Bank, J.P. Morgan,
                Mastercard, Standard Chartered, TD Bank, and Manulife Bank among others.
                They chose KAI for its proven track record to drive business results while improving customer
                experiences. The platform is used by millions of consumers around the world, all the time, across
                multiple channels, in different languages, and is optimized for performance, scalability, security, and
                compliance. This position We are looking for a Full-Stack, client side software engineer to help build
                and integrate responsive chat interfaces, analytics dashboards and reporting tools.
            </p>
            <p className={scss.description}>
                What you’ll be doing
                Working closely with clients and internal engineering, product and design teams to gather requirements
                Building and integrating front-end applications with CSS, HTML, Javascript, jQuery, Vue.js, Webpack,
                Handlebars.js,
                LESS, Backbone, Python, Django and Java Working to improve user experience and functionality for tools
                Writing testable code utilizing common
                front-end unit and BDD testing frameworks What you need for this position 3+ years in client-side web
                development with CSS, HTML, Javascript and jQuery Proven,
                full-stack front-end experience using Python and Django Other Modern Web Framework(s) experience is a
                plus (React, Vue, Angular, Ember) Experience working
                collaboratively to build scalable, modular, production software in an Agile environment Experience using
                RESTful json services Node.js and API development
                familiarity is plus D3.js is a plus What we offer: Competitive compensation package Ground floor
                opportunity within rapidly growing tech startup Great
                collaborative team environment Full Benefits Fun perks Location - NYC, Flatiron District We welcome your
                cover letter with a description of your previous
                complete experience and your resume. Applicants must be authorized to work in the US as we are unable to
                sponsor. Kasisto is an equal opportunity employer.
            </p>
        </div>
    )
}
