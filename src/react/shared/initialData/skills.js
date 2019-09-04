/* eslint-disable max-len */
export const skills = [
    {
        '_id': {
            '$oid': '5d5c6c6b52b65ac348575067',
        },
        'id': 'php',
        'name': 'PHP',
        'panel': 'left',
        'version': '7',
        'logo': '/assets/skills/php.png',
        'order': '11',
        'description': 'PHP was my first language what I learned. Actually I started with C++, but it was a very long learning path and this is a different story. My first website was on PHP from scratch. And I learned this language from functional programming to OOP with Design Patterns. Also with PHP I learned WordPress Core, Laravel Framework and Symfony Framework.',
        'projects': [
            {
                'id': 'eandkphotography',
                'name': 'E&K Photography (PHP)',
                'companyName': 'E and K Photography',
                'website': 'https://eandkphoto.com',
                'github': 'https://github.com/evgeniypoznyak/eandkphoto.com',
                'logo': '',
                'dateCreated': '2013-06-18',
                'cardCover': 'https://data.eandkphoto.com/events/2015/09-september/newborn/large/EVG_73831.jpg',
                'images': [
                    {
                        'label': 'Front Page',
                        'path': '/assets/projects/eandkphoto.com/front.jpg',
                    },
                    {
                        'label': 'Grid',
                        'path': '/assets/projects/eandkphoto.com/grid.jpg',
                    },
                    {
                        'label': 'Contact Us',
                        'path': '/assets/projects/eandkphoto.com/contact-us.jpg',
                    },
                    {
                        'label': 'Social Page',
                        'path': '/assets/projects/eandkphoto.com/social.jpg',
                    },
                    {
                        'label': 'Portfolio Page',
                        'path': '/assets/projects/eandkphoto.com/portfolio.jpg',
                    },
                ],
                'shortDescription': 'In very beginning I created this website from scratch on vanilla PHP. Today this website is completely different.',
                'longDescription': [
                    {
                        'picture': '/assets/projects/eandkphoto.com/eandkphoto_php.jpg',
                        'description': 'Project was lived in Virtual Private Server (VPS), used Apache Server on Linux system. Filesystem is been used to display list of pictures by year, month and date. Contact Us form utilized Google API such as reCaptcha. User data was stored in MySQL.',
                    },
                ],
            },
            {
                'id': 'wp-holyskete',
                'name': 'Holy Skete',
                'companyName': 'The Hermitage Of The Holy Protection',
                'website': 'http://holyskete.com/',
                'github': '',
                'logo': '/assets/projects/wp-holyskete.com/logo.jpg',
                'dateCreated': '2013-05-29',
                'cardCover': '',
                'shortDescription': 'Multilingual mobile responsive web platform for displaying small business. Google API integrations for reCaptcha and Google Maps.',
                'images': [
                    {
                        'label': 'Front Page',
                        'path': '/assets/projects/wp-holyskete.com/front.jpg',
                    },
                    {
                        'label': 'History',
                        'path': '/assets/projects/wp-holyskete.com/history.jpg',
                    },
                    {
                        'label': 'Cemetery',
                        'path': '/assets/projects/wp-holyskete.com/cemetery.jpg',
                    },
                    {
                        'label': 'Directions',
                        'path': '/assets/projects/wp-holyskete.com/directions.jpg',
                    },
                    {
                        'label': 'Contact Us',
                        'path': '/assets/projects/wp-holyskete.com/contact-us.jpg',
                    },
                    {
                        'label': 'About Us',
                        'path': '/assets/projects/wp-holyskete.com/about-us.jpg',
                    },
                    {
                        'label': 'Cover Page',
                        'path': '/assets/projects/wp-holyskete.com/cover.jpg',
                    },
                ],
                'longDescription': [],
            },
            {
                'id': 'express-recoveries-v1',
                'name': 'Express Recoveries v1',
                'companyName': 'Cox Automotive',
                'website': '',
                'github': '',
                'logo': '',
                'dateCreated': '2013-06-18',
                'cardCover': '',
                'images': [],
                'shortDescription': 'Enterprise level application. Connect together high complexity API, workflows and different systems integrations.',
                'longDescription': [
                    {
                        'picture': '/assets/projects/express-recoveries-v1/express-recoveries-v1.jpg',
                        'description': 'Enterprise level application. Connect together high complexity API, different workflow and variant systems integrations.\nWith IP range protection layer, client can access to application via UI or sftp protocol. Some scripts are running daily with cron jobs. Frontend was build in pure HTML/CSS and pages being rendered on the PHP server.',
                    },
                ],
            },
            {
                'id': 'express-recoveries-v2',
                'name': 'Express Recoveries v2',
                'companyName': 'Cox Automotive',
                'website': '',
                'github': '',
                'logo': '',
                'dateCreated': '2013-06-18',
                'cardCover': '/assets/projects/express-recoveries-v2/microservices-application.jpg',
                'images': [],
                'shortDescription': 'Enterprise level application. Connect together high complexity API, workflows and different systems integrations.',
                'longDescription': [
                    {
                        'picture': '/assets/projects/express-recoveries-v2/express-recoveries-v2.jpg',
                        'description': 'Enterprise level application. Connect together high complexity API, workflows and different systems integrations. With IP range protection layer, client can access to application via UI, sftp protocol or via AWS Gateway and microservices. Some scripts are running daily with cron jobs. Frontend was build in AngularJS with Angular AgGrid.\nAlso by decoupling monolithic application we are introduced are microservices (C# with .Net Core) running in docker container and frontend for them in React.',
                    },
                ],
            },
            {
                'id': 'data.holyskete.com',
                'name': 'Holy Skete API Service',
                'companyName': 'The Hermitage Of The Holy Protection',
                'website': 'https://data.holyskete.com/rss?url=https://orthochristian.com/xml/rss.xml',
                'github': 'https://github.com/evgeniypoznyak/holy-skete-data',
                'logo': '/assets/projects/holyskete-api/logo.jpg',
                'dateCreated': '2013-05-29',
                'cardCover': '/assets/projects/holyskete-api/data.holyskete.com-cover.jpg',
                'shortDescription': 'Symfony 4 based API Service. Providing Email service and XML to JSON service.',
                'images': [],
                'longDescription': [
                    {
                        'picture': '/assets/projects/holyskete-api/data.holyskete.com.jpg',
                        'description': 'Symfony 4 based API Service. Providing Email service and XML to JSON service. Basically any potential XML news feed could be parsed into JSON format and returned back to UI with CORS headers for better UI integration. In this current scenario two types of XML news feeds is been transferred over to JSON format for React multi language application.',
                    },
                ],
            },
            {
                'id': 'service-group',
                'name': 'Service Group',
                'companyName': 'Cox Automotive',
                'website': '',
                'github': '',
                'logo': '',
                'dateCreated': '2013-05-29',
                'cardCover': '/assets/projects/service-group/service-group-cover.jpg',
                'images': [],
                'shortDescription': 'Symfony 4 project used twig templates with Vue widgets and Bootstrap 4',
                'longDescription': [
                    {
                        'picture': '/assets/projects/service-group/service-group.jpg',
                        'description': 'Symfony 4 project used twig templates with Vue widgets and Bootstrap 4. For backend was used Entities with Value Objects and Repositories.',
                    },
                ],
            },
            {
                'id': 'data.eandkphoto.com',
                'name': 'E&K Photo API Service',
                'companyName': 'E and K Photography',
                'website': 'https://data.eandkphoto.com/',
                'github': 'https://github.com/evgeniypoznyak/data.eandkphoto.com',
                'logo': '',
                'dateCreated': '2013-05-29',
                'cardCover': '/assets/projects/data-eandkphoto.com/data-eandkphoto.com-cover.jpg',
                'shortDescription': 'API Service build in Laravel. Utilized JWT for authentication/authorization purposes. Used Eloquent model as ORM, MySQL as database and filesystem.',
                'images': [],
                'longDescription': [
                    {
                        'picture': '/assets/projects/data-eandkphoto.com/data-eandkphoto.com.jpg',
                        'description': 'API Service build in Laravel. Used Eloquent model as ORM. Fully CRUD service with JWT protected sensitive routes. Receiving data as binary from Angular and passed into database and file systems according to business needs.\nService also taking care of emailing into Google Gmail API.',
                    },
                ],
            },
            {
                'id': 'evgeniy.poznyaks.com_v1',
                'name': 'Portfolio Website',
                'companyName': '',
                'website': 'https://evgeniy.poznyaks.com',
                'github': 'https://github.com/evgeniypoznyak/evgeniy.poznyaks.com',
                'logo': '/assets/projects/evgeniy.poznyaks.com_v1/logo.jpg',
                'dateCreated': '2013-05-29',
                'cardCover': '',
                'shortDescription': 'Portfolio Website Build on PHP Framework Laravel with Eloquent ORM. For frontend used Bootstrap 4.',
                'images': [
                    {
                        'label': 'Front Page',
                        'path': '/assets/projects/evgeniy.poznyaks.com_v1/front.jpg',
                    },
                    {
                        'label': 'Skills',
                        'path': '/assets/projects/evgeniy.poznyaks.com_v1/skills.jpg',
                    },
                    {
                        'label': 'Professional Experience',
                        'path': '/assets/projects/evgeniy.poznyaks.com_v1/prof-exp.jpg',
                    },
                    {
                        'label': 'Personal Experience',
                        'path': '/assets/projects/evgeniy.poznyaks.com_v1/pers-exp.jpg',
                    },
                    {
                        'label': 'Project Page',
                        'path': '/assets/projects/evgeniy.poznyaks.com_v1/project-page.jpg',
                    },
                    {
                        'label': 'Contact Us',
                        'path': '/assets/projects/evgeniy.poznyaks.com_v1/contact-us.jpg',
                    },
                ],
                'longDescription': [
                    {
                        'picture': '/assets/projects/evgeniy.poznyaks.com_v1/portfolio_website_v1.jpg',
                        'description': 'Application was on VPS with Apache server. Laravel was chosen as PHP framework and for front end was blade templates with Bootstrap and jQueryUI. Eloquent was used as ORM and MySQL as a storage unit.',
                    },
                ],
            },
            {
                'id': 'pacificnorthern',
                'name': 'Pacific Northern Company Website',
                'companyName': 'Pacific Northern Inc.',
                'website': 'https://www.pacificnorthern.com/',
                'github': '',
                'logo': '/assets/projects/pacificnerthern.com/logo.jpg',
                'dateCreated': '2013-05-29',
                'cardCover': '',
                'images': [
                    {
                        'label': 'Front Page',
                        'path': '/assets/projects/pacificnerthern.com/front-page.jpg',
                    },
                    {
                        'label': 'Portfolio Page',
                        'path': '/assets/projects/pacificnerthern.com/portfolio-page.jpg',
                    },
                    {
                        'label': 'Portfolio Item Page',
                        'path': '/assets/projects/pacificnerthern.com/portfolio-item-page.jpg',
                    },
                    {
                        'label': 'What We Do Page',
                        'path': '/assets/projects/pacificnerthern.com/what-we-do-page.jpg',
                    },
                    {
                        'label': 'Our Team Page',
                        'path': '/assets/projects/pacificnerthern.com/our-team-page.jpg',
                    },
                    {
                        'label': 'About Us Page',
                        'path': '/assets/projects/pacificnerthern.com/about-us-page.jpg',
                    },
                ],
                'shortDescription': 'Company presentation website for displaying company information and products. Website utilized WordPress technology.',
                'longDescription': [],
            },
            {
                'id': 'infocenter.pacificnorthern',
                'name': 'Internal Company’s Information Center',
                'companyName': 'Pacific Northern Inc.',
                'website': '',
                'github': '',
                'logo': '/assets/projects/infocenter.pacificnorthern.com/logo.jpg',
                'dateCreated': '2013-05-29',
                'cardCover': '',
                'shortDescription': 'This is company’s internal website build on WordPress and using Active Directory Integration.',
                'images': [
                    {
                        'label': 'Active Directory Cards View',
                        'path': '/assets/projects/infocenter.pacificnorthern.com/ad-cards.jpg',
                    },
                    {
                        'label': 'Front Page',
                        'path': '/assets/projects/infocenter.pacificnorthern.com/front.jpg',
                    },
                    {
                        'label': 'Active Directory List View',
                        'path': '/assets/projects/infocenter.pacificnorthern.com/ad-list.jpg',
                    },
                    {
                        'label': 'Active Directory Profile View',
                        'path': '/assets/projects/infocenter.pacificnorthern.com/profile.jpg',
                    },
                ],
                'longDescription': [
                    {
                        'picture': '/assets/projects/infocenter.pacificnorthern.com/infocenter.pacificnorthern.jpg',
                        'description': 'I created integration with windows active directory from Wordpress internal website. Cron job was kicking the script and script was updating and making record into database. After that WordPress custom build plugin pull these changes and reflect them into website.',
                    },
                ],
            },
            {
                'id': 'pndisplay.com',
                'name': 'PN Display, E-Commerce Website',
                'companyName': 'Pacific Northern Inc.',
                'website': '',
                'github': '',
                'logo': '/assets/projects/pndisplay.com/logo.jpg',
                'dateCreated': '2013-05-29',
                'cardCover': '',
                'shortDescription': 'E-Commerce Website. With custom more than 300 variations, fabrics and tiers for each product and platforms combos.',
                'images': [
                    {
                        'label': 'Front Page',
                        'path': '/assets/projects/pndisplay.com/front.jpg',
                    },
                    {
                        'label': 'Product List',
                        'path': '/assets/projects/pndisplay.com/product-list.jpg',
                    },
                    {
                        'label': 'Single Item',
                        'path': '/assets/projects/pndisplay.com/single-item.jpg',
                    },
                    {
                        'label': 'Multiple Custom Variations',
                        'path': '/assets/projects/pndisplay.com/variations.jpg',
                    },
                    {
                        'label': 'Backend Setup',
                        'path': '/assets/projects/pndisplay.com/backend-setup.jpg',
                    },
                ],
                'longDescription': [
                    {
                        'picture': '/assets/projects/pndisplay.com/pndisplay.com.jpg',
                        'description': 'Very complex WordPress/Woocomerce plugin. Plugin extends variant selections, by price tier, color, fabric and base made. Also admin can setup in custom made menu pages what exactly is going to be used by this plugin.',
                    },
                    {
                        'picture': '/assets/projects/pndisplay.com/pndisplay.com_email.jpg',
                        'description': 'Another plugin make multiple email blasts by chunks and specific time for that, witch can be configured in custom admin menu.',
                    },
                ],
            },
            {
                'id': 'video.pacificnorthern.com',
                'name': 'Internal Video Content System',
                'companyName': 'Pacific Northern Inc.',
                'website': '',
                'github': 'https://github.com/evgeniypoznyak/video.pacificnorthern.com',
                'logo': '/assets/projects/video.pacificnorthern.com/logo.jpg',
                'dateCreated': '2013-05-29',
                'cardCover': '',
                'shortDescription': 'Utilizing PHP Framework Laravel for backend and jQueryUI for frontend. A little similar to NETFLIX.',
                'images': [
                    {
                        'label': 'Folders',
                        'path': '/assets/projects/video.pacificnorthern.com/folders.jpg',
                    },
                    {
                        'label': 'Video List',
                        'path': '/assets/projects/video.pacificnorthern.com/video-list.jpg',
                    },
                    {
                        'label': 'Video Player',
                        'path': '/assets/projects/video.pacificnorthern.com/video.jpg',
                    },
                ],
                'longDescription': [
                    {
                        'picture': '/assets/projects/video.pacificnorthern.com/video.pacificnorthern.com.jpg',
                        'description': 'Laravel is handling filesystem and database connection. Also in top level user’s information passed by Active Directory. Front end build with bootstrap and jQuery UI.',
                    },
                ],
            },
            {
                'id': 'info.pndisplay.com',
                'name': 'Information for PN Display',
                'companyName': 'Pacific Northern Inc.',
                'website': 'http://info.pndisplay.com/',
                'github': '',
                'logo': '/assets/projects/info.pndisplay.com/logo.jpg',
                'dateCreated': '2013-05-29',
                'cardCover': '',
                'shortDescription': 'Simple website providing more information about E-Commerce PN Display website. Build on WordPress engine.',
                'images': [
                    {
                        'label': 'Front Page',
                        'path': '/assets/projects/info.pndisplay.com/front.jpg',
                    },
                    {
                        'label': 'List Page',
                        'path': '/assets/projects/info.pndisplay.com/list.jpg',
                    },
                    {
                        'label': 'Platforms Page',
                        'path': '/assets/projects/info.pndisplay.com/platforms.jpg',
                    },
                    {
                        'label': 'News Page',
                        'path': '/assets/projects/info.pndisplay.com/news.jpg',
                    },
                ],
                'longDescription': [],
            },
            {
                'id': 'namesday.info',
                'name': 'Names Day info',
                'companyName': 'Andrei Pervychine',
                'website': 'https://www.namesday.info/',
                'github': '',
                'logo': '',
                'dateCreated': '2013-05-29',
                'cardCover': '/assets/projects/namesday.info/cover.jpg',
                'shortDescription': 'This is was my first professional work. I worked as intern an helped with backend and frontend. Mostly my work done for frontend.',
                'images': [],
                'longDescription': [],
            },
            {
                'id': 'wordpress.poznyaks.com',
                'name': 'WordPress Plugins Website',
                'companyName': 'WordPress',
                'website': 'https://wordpress.poznyaks.com/',
                'github': 'https://github.com/evgeniypoznyak/poznyaks.com.wordpress',
                'logo': '',
                'dateCreated': '2017-03-24',
                'cardCover': '',
                'shortDescription': 'Information website for my WordPress plugins. Build in vanilla PHP with Object Oriented Design Model. And Google API for ReCaptcha.',
                'images': [
                    {
                        'label': 'Front Page',
                        'path': '/assets/projects/wordpress.poznyaks.com/front.jpg',
                    },
                    {
                        'label': 'Project Page',
                        'path': '/assets/projects/wordpress.poznyaks.com/project.jpg',
                    },
                    {
                        'label': 'Contact Us Page',
                        'path': '/assets/projects/wordpress.poznyaks.com/contact-us.jpg',
                    },
                ],
                'longDescription': [
                    {
                        'picture': '/assets/projects/wordpress.poznyaks.com/wordpress.poznyaks.com.jpg',
                        'description': 'Simple application with backend in Object Oriented Design in PHP and front end just HTML/CSS.',
                    },
                ],
            },
            {
                'id': 'wp-exclude-ips-from-google-analytics',
                'name': 'Exclude Ips',
                'companyName': 'WordPress',
                'website': 'https://wordpress.org/plugins/exclude-ips-from-google-analytics/',
                'github': 'https://github.com/evgeniypoznyak/exclude-ips-from-google-analytics',
                'logo': '',
                'dateCreated': '2017-06-01',
                'cardCover': '',
                'shortDescription': 'Plugin for excluding IP’s from Google Analytics, to not been tracked. Very helpful for companies with range of ips.',
                'images': [
                    {
                        'label': 'Plugin Information',
                        'path': '/assets/projects/wp-exclude-ips-from-google-analytics/plugin.jpg',
                    },
                    {
                        'label': 'Administrator menu',
                        'path': '/assets/projects/wp-exclude-ips-from-google-analytics/backend.jpg',
                    },
                ],
                'longDescription': [],
            },
            {
                'id': 'wp-plugin-google-recaptcha',
                'name': 'Authentication with Google',
                'companyName': 'WordPress',
                'website': 'https://wordpress.org/plugins/evg-google-recaptcha/',
                'github': 'https://github.com/evgeniypoznyak/evg-google-recaptcha',
                'logo': '',
                'dateCreated': '2017-06-01',
                'cardCover': '',
                'shortDescription': 'Plugin for Login With Google reCaptcha For WordPress And Woocomerce. Plugin utilize Google API.',
                'images': [
                    {
                        'label': 'Plugin Information',
                        'path': '/assets/projects/wp-plugin-google-recaptcha/plugin.jpg',
                    },
                    {
                        'label': 'Administrator menu',
                        'path': '/assets/projects/wp-plugin-google-recaptcha/setup.jpg',
                    },
                    {
                        'label': 'Login widget',
                        'path': '/assets/projects/wp-plugin-google-recaptcha/login-window.jpg',
                    },
                    {
                        'label': 'Login with failed ReCaptcha',
                        'path': '/assets/projects/wp-plugin-google-recaptcha/failure.jpg',
                    },
                ],
                'longDescription': [],
            },
            {
                'id': 'wp-user-information-in-email',
                'name': 'User Information In Email',
                'companyName': 'WordPress',
                'website': 'https://wordpress.org/plugins/user-info-in-email-for-contact-form-7/',
                'github': 'https://github.com/evgeniypoznyak/user-info-in-email-for-contact-form-7',
                'logo': '',
                'dateCreated': '2017-06-01',
                'cardCover': '',
                'shortDescription': 'Plugin is adding the user\'s internet provider information (based on IP address), to the body of the email.',
                'images': [
                    {
                        'label': 'Plugin Information',
                        'path': '/assets/projects/wp-user-information-in-email/plugin.jpg',
                    },
                    {
                        'label': 'Email setup',
                        'path': '/assets/projects/wp-user-information-in-email/email-setup.jpg',
                    },
                    {
                        'label': 'Example',
                        'path': '/assets/projects/wp-user-information-in-email/example.jpg',
                    },
                ],
                'longDescription': [],
            },
        ],
    },
    {
        '_id': {
            '$oid': '5d5c6c6b52b65ac348575068',
        },
        'id': 'c-sharp',
        'name': 'C#',
        'panel': 'left',
        'version': '2.2',
        'logo': '/assets/skills/c-sharp.png',
        'order': '22',
        'description': 'After gaining knowledge of TypeScript, transition to C# wasn’t hard, because they are same Microsoft family and syntax is very similar. C# was chosen as option for microservices, because it’s running compiled code and it’s very fast.',
        'projects': [
            {
                'id': 'express-recoveries-v2',
                'name': 'Express Recoveries v2',
                'companyName': 'Cox Automotive',
                'website': '',
                'github': '',
                'logo': '',
                'dateCreated': '2016-10-14',
                'cardCover': '/assets/projects/express-recoveries-v2/microservices-application.jpg',
                'images': [],
                'shortDescription': 'Enterprise level application. By decoupling a monolithic application we are used microservices  in C# .net core.',
                'longDescription': [
                    {
                        'picture': '/assets/projects/express-recoveries-v2/express-recoveries-v2.jpg',
                        'description': 'Decoupling monolith into microservices. Each service mostly running in C# .Net Core. Each container is independent and has a single responsibility, open for extension and close for modifications. Services have MVC structure and console application.',
                    },
                ],
            },
            {
                'id': 'skills-microservice',
                'name': 'Skills Microservice',
                'companyName': '',
                'website': '',
                'github': 'https://github.com/evgeniypoznyak/Skills',
                'logo': '',
                'dateCreated': '2013-05-29',
                'cardCover': '/assets/projects/skills-microservice/microservices.jpg',
                'images': [],
                'shortDescription': 'Running C# .Net Core Microservice in docker container. Service provide MVC API integration for MongoDB.',
                'longDescription': [
                    {
                        'picture': '/assets/projects/skills-microservice/skills-microservice.jpg',
                        'description': 'Containerized C# .Net Core microservice, API MVC controller accessing via repository entity, each entity have adapter dependency injected. And utilized MongoDB as data storage running in docker container also.',
                    },
                ],
            },
        ],
    },
    {
        '_id': {
            '$oid': '5d5c6c6b52b65ac348575069',
        },
        'id': 'reactjs',
        'name': 'ReactJS',
        'panel': 'right',
        'version': '16',
        'logo': '/assets/skills/reactjs.png',
        'order': '33',
        'description': 'What makes React so popular? Popular more than Angular? A big community? Maybe a isomorphic structure? Or maybe very short learning curve? Probably all of above. I started building my first professional project in 2017. Now I’m making React applications in enterprise world. I really like it because I can connect all my knowledge together now: Domain Driven Design, SOLID principles, DRY and many more.',
        'projects': [
            {
                'id': 'holyskete-react',
                'name': 'Holy Skete',
                'companyName': 'The Hermitage Of The Holy Protection',
                'website': 'http://holyskete.com/',
                'github': 'https://github.com/evgeniypoznyak/holy-skete',
                'logo': '/assets/projects/holyskete-react/logo.jpg',
                'dateCreated': '2013-05-29',
                'cardCover': '',
                'shortDescription': 'Complex multi-language application. Utilized React with Redux Sagas and custom UI elements. And API server for emailing, proxying and providing data.',
                'images': [
                    {
                        'label': 'Front Page',
                        'path': '/assets/projects/holyskete-react/home.jpg',
                    },
                    {
                        'label': 'Slideshow',
                        'path': '/assets/projects/holyskete-react/slideshow.jpg',
                    },
                    {
                        'label': 'Cemetery',
                        'path': '/assets/projects/holyskete-react/cemetery.jpg',
                    },
                    {
                        'label': 'Clergy',
                        'path': '/assets/projects/holyskete-react/clergy.jpg',
                    },
                    {
                        'label': 'Google Maps API',
                        'path': '/assets/projects/holyskete-react/google-maps.jpg',
                    },
                    {
                        'label': 'Contact Us',
                        'path': '/assets/projects/holyskete-react/contact-us.jpg',
                    },
                ],
                'longDescription': [
                    {
                        'picture': '/assets/projects/holyskete-react/holyskete-react-shema.jpg',
                        'description': 'Complex multi-language application. Utilized React with Redux Sagas and custom UI elements. And API server for emailing, proxying and providing data. Language changes by Redux Saga event. All side-effects handheld by Redux Saga.',
                    },
                ],
            },
            {
                'id': 'ssr-reactjs-for-portfolio',
                'name': 'SSR ReactJS for Portfolio',
                'companyName': '',
                'website': '',
                'github': 'https://github.com/evgeniypoznyak/ssr-evgeniy.poznyaks.com',
                'logo': '',
                'dateCreated': '2013-05-29',
                'cardCover': '/assets/projects/ssr-evgeniy.poznyaks.com/ssr-evgeniy.poznyaks.com.jpg',
                'images': [],
                'shortDescription': 'Dockerized Server Side Rendering ReactJS + NodeJS Single Page Application. In protected routes by JWT, application provides content management system. For UI perspective Application utilizing React Material Design.',
                'longDescription': [
                    {
                        'picture': '/assets/projects/ssr-evgeniy.poznyaks.com/ssr-evgeniy.poznyaks.com-shema.jpg',
                        'description': 'Dockerized Server Side Rendering ReactJS + NodeJS Single Page Application. Utilizing React Material Design with JWT for protected routes. ReactJS is been used in two ways - one for server side rendering and another for browser. All React components can be loaded without JavaScript support, this provide amazingSearch Engine Optimization and all routes will be fetched by NodeJS server. If browser JavaScript will be enabled, then all preloaded elements will be replaced by ReactJS and all routes dynamically will be fetched from browser. All sensitive routes protected by JWT in API Gateway server.',
                    },
                ],
            },
            {
                'id': 'express-recoveries-v2',
                'name': 'Express Recoveries v2',
                'companyName': 'Cox Automotive',
                'website': '',
                'github': '',
                'logo': '',
                'dateCreated': '2016-10-14',
                'cardCover': '/assets/projects/express-recoveries-v2/microservices-application.jpg',
                'images': [],
                'shortDescription': 'Enterprise level application. Decoupling monolithic AngularJS application into independently delayable React components.',
                'longDescription': [
                    {
                        'picture': '/assets/projects/express-recoveries-v2/express-recoveries-v2-react.jpg',
                        'description': 'Enterprise level application. Decoupling monolithic AngularJS application into independently delayable React components. Form elements have a custom UI design with attached validation logic.',
                    },
                ],
            },
        ],
    },
    {
        '_id': {
            '$oid': '5d5c6c6b52b65ac34857506a',
        },
        'id': 'angular',
        'name': 'Angular',
        'panel': 'right',
        'version': '8',
        'logo': '/assets/skills/angular.png',
        'order': '44',
        'description': 'As PHP developer with MVC frameworks background I find Angular very similar to them. Almost same structure with modules, services, components. Also I liked fact that heavy logic is separated from the html templates. In my opinion this separation is what React is really missing. Also TypeScript, which is been used in Angular since version 2, brought strong typing and self documented code into fronted framework, which is best, on my opinion, what can happened in JavaScript world. With TypeScript you also can have Interfaces and generics which is help developers create clean, protected code for future changes.',
        'projects': [
            {
                'id': 'eandkphotography',
                'name': 'E and K Photography',
                'companyName': 'E and K Photography',
                'website': 'https://eandkphoto.com',
                'github': 'https://github.com/evgeniypoznyak/eandkphoto.com',
                'logo': '',
                'dateCreated': '2013-06-18',
                'cardCover': 'https://data.eandkphoto.com/events/2015/09-september/newborn/large/EVG_73831.jpg',
                'images': [
                    {
                        'label': 'Front Page',
                        'path': '/assets/projects/eandkphoto.com/front.jpg',
                    },
                    {
                        'label': 'Grid',
                        'path': '/assets/projects/eandkphoto.com/grid.jpg',
                    },
                    {
                        'label': 'Contact Us',
                        'path': '/assets/projects/eandkphoto.com/contact-us.jpg',
                    },
                    {
                        'label': 'Social Page',
                        'path': '/assets/projects/eandkphoto.com/social.jpg',
                    },
                    {
                        'label': 'Portfolio Page',
                        'path': '/assets/projects/eandkphoto.com/portfolio.jpg',
                    },
                ],
                'shortDescription': 'Custom CMS on Angular with TypeScript. With protected routes by Laravel as API backend. As UI elements for frontend Angular utilized Bootstrap 4.',
                'longDescription': [
                    {
                        'picture': '/assets/projects/eandkphoto.com/eandkphoto_angular.jpg',
                        'description': 'Custom CMS on Angular. With protected routes by Laravel as API backend. On the front page I used custom menu with bootstrap 4 buttons. All photography events preloading as infinitive scroll. Authenticated user can manage pictures, events and portfolio.',
                    },
                ],
            },
            {
                'id': 'express-recoveries-v2',
                'name': 'Express Recoveries v2',
                'companyName': 'Cox Automotive',
                'website': '',
                'github': '',
                'logo': '',
                'dateCreated': '2016-10-14',
                'cardCover': '/assets/projects/express-recoveries-v2/microservices-application.jpg',
                'images': [],
                'shortDescription': 'A lot of prototypes, POC, and demo models build in Angular with TypeScript. For frontend Angular utilized Bootstrap 4 and Angular Material.',
                'longDescription': [],
            },
            {
                'id': 'express-digital-media',
                'name': 'Express Digital Media',
                'companyName': 'Cox Automotive',
                'website': '',
                'github': '',
                'logo': '',
                'dateCreated': '2016-10-14',
                'cardCover': '/assets/projects/express-digital-media/cover.jpg',
                'images': [],
                'shortDescription': 'Created as a demo application with Angular and TypeScript, Angular Material and API Interfaces with Abstract Factory Pattern.',
                'longDescription': [
                    {
                        'picture': '/assets/projects/express-digital-media/express-digital-media.jpg',
                        'description': 'Domain model was used for designing this application. All complex API responses layered into TypeScript Interfaces and Injected with Abstract Factory Pattern. Angular Material was used in many scenarios for steppers as “wizard”, for complex form elements with custom validators and custom UI errors.',
                    },
                ],
            },
        ],
    },
    {
        '_id': {
            '$oid': '5d5c6c6b52b65ac34857506b',
        },
        'id': 'nodejs',
        'name': 'NodeJS',
        'panel': 'left',
        'version': '10',
        'logo': '/assets/skills/nodejs.png',
        'order': '55',
        'description': 'I start used NodeJS many years ago. Probably same time when I start touching npm. NodeJS Application with Express is very fast to setup. Because NodeJS is using JavaScript syntax and JavaScript is most popular language in the world, this made NodeJS preferred choice as backend language for many projects.',
        'projects': [
            {
                'id': 'api-gateway-for-portfolio',
                'name': 'API Gateway for Portfolio',
                'companyName': '',
                'website': 'https://api.evgeniy.poznyaks.com/',
                'github': 'https://github.com/evgeniypoznyak/nodejs-gateway-typescript',
                'logo': '',
                'dateCreated': '2013-05-29',
                'cardCover': '/assets/projects/api-gateway-for-portfolio/cover.jpg',
                'images': [],
                'shortDescription': 'NodeJS API Gateway in docker. Used TypeScript with JWT and MongoDB for authorization and authentication.',
                'longDescription': [
                    {
                        'picture': '/assets/projects/api-gateway-for-portfolio/api-gateway-for-portfolio.jpg',
                        'description': 'Running in VPS via Apache server as a proxy to NodeJS. Application NodeJS API Gateway runs in docker. Utilizing JWT and MongoDB for authorization and authentication and logging. Also providing CORS support.',
                    },
                ],
            },
            {
                'id': 'express-recoveries-v2',
                'name': 'Express Recoveries v2',
                'companyName': 'Cox Automotive',
                'website': '',
                'github': '',
                'logo': '',
                'dateCreated': '2016-10-14',
                'cardCover': '/assets/projects/express-recoveries-v2/microservices-application.jpg',
                'images': [],
                'shortDescription': 'Enterprise level application. A simple parser for json configurations to variant formats. App utilize TypeScript and node IO library. Also some AWS serverless services using NodeJS.',
                'longDescription': [],
            },
            {
                'id': 'ssr-reactjs-for-portfolio',
                'name': 'SSR ReactJS for Portfolio',
                'companyName': '',
                'website': '',
                'github': 'https://github.com/evgeniypoznyak/ssr-evgeniy.poznyaks.com',
                'logo': '',
                'dateCreated': '2013-05-29',
                'cardCover': '/assets/projects/ssr-evgeniy.poznyaks.com/ssr-evgeniy.poznyaks.com.jpg',
                'images': [],
                'shortDescription': 'Running in docker Server Side Rendering ReactJS application with Material Design and logging into MongoDB.',
                'longDescription': [
                    {
                        'picture': '/assets/projects/ssr-evgeniy.poznyaks.com/ssr-evgeniy.poznyaks.com-shema.jpg',
                        'description': 'Running in VPS via Apache server as a proxy to NodeJS. Dockerized Server Side Rendering ReactJS application utilizing Material Design and logging into MongoDB. For storing simple files such as resume and biography application utilizing NodeJS IO library to store locally in the NodeJS server.',
                    },
                ],
            },
        ],
    },
    {
        '_id': {
            '$oid': '5d5c6c6b52b65ac34857507a',
        },
        'id': 'typescript',
        'name': 'TypeScript',
        'panel': 'right',
        'version': '3',
        'logo': '/assets/skills/typescript.jpg',
        'order': '66',
        'description': 'I think TypeScript is the best what happened in JavaScript world. Period.\nES6 provides classes, but TypeScript provides interfaces. With interfaces you can design your applications stronger and make it easy to change. Strong typing is hard in the beginning but down to the road it provides self documented code, which is amazing! Through Generics SOLID code became really shining.\nWith TypeScript I was involved in many Angular and NodeJS projects.',
        'projects': [
            {
                'id': 'eandkphotography',
                'name': 'E and K Photography',
                'companyName': 'E and K Photography',
                'website': 'https://eandkphoto.com',
                'github': 'https://github.com/evgeniypoznyak/eandkphoto.com',
                'logo': '',
                'dateCreated': '2013-06-18',
                'cardCover': 'https://data.eandkphoto.com/events/2015/09-september/newborn/large/EVG_73831.jpg',
                'images': [
                    {
                        'label': 'Front Page',
                        'path': '/assets/projects/eandkphoto.com/front.jpg',
                    },
                    {
                        'label': 'Grid',
                        'path': '/assets/projects/eandkphoto.com/grid.jpg',
                    },
                    {
                        'label': 'Contact Us',
                        'path': '/assets/projects/eandkphoto.com/contact-us.jpg',
                    },
                    {
                        'label': 'Social Page',
                        'path': '/assets/projects/eandkphoto.com/social.jpg',
                    },
                    {
                        'label': 'Portfolio Page',
                        'path': '/assets/projects/eandkphoto.com/portfolio.jpg',
                    },
                ],
                'shortDescription': 'Custom CMS on Angular with TypeScript. With protected routes by Laravel as API backend. As UI elements for frontend Angular utilized Bootstrap 4.',
                'longDescription': [
                    {
                        'picture': '/assets/projects/eandkphoto.com/eandkphoto_angular.jpg',
                        'description': 'Custom CMS on Angular. With protected routes by Laravel as API backend. On the front page I used custom menu with bootstrap 4 buttons. All photography events preloading as infinitive scroll. Authenticated user can manage pictures, events and portfolio.',
                    },
                ],
            },
            {
                'id': 'api-gateway-for-portfolio',
                'name': 'API Gateway for Portfolio',
                'companyName': '',
                'website': 'https://api.evgeniy.poznyaks.com/',
                'github': 'https://github.com/evgeniypoznyak/nodejs-gateway-typescript',
                'logo': '',
                'dateCreated': '2013-05-29',
                'cardCover': '/assets/projects/api-gateway-for-portfolio/cover.jpg',
                'images': [],
                'shortDescription': 'NodeJS API Gateway in docker. Used TypeScript with JWT and MongoDB for authorization and authentication.',
                'longDescription': [
                    {
                        'picture': '/assets/projects/api-gateway-for-portfolio/api-gateway-for-portfolio.jpg',
                        'description': 'Running in VPS via Apache server as a proxy to NodeJS. Application NodeJS API Gateway runs in docker. Utilizing JWT and MongoDB for authorization and authentication and logging. Also providing CORS support.',
                    },
                ],
            },
            {
                'id': 'express-recoveries-v2',
                'name': 'Express Recoveries v2',
                'companyName': 'Cox Automotive',
                'website': '',
                'github': '',
                'logo': '',
                'dateCreated': '2016-10-14',
                'cardCover': '/assets/projects/express-recoveries-v2/microservices-application.jpg',
                'images': [],
                'shortDescription': 'A lot of prototypes, POC, and demo models build in Angular with TypeScript. For frontend Angular utilized Bootstrap 4 and Angular Material.',
                'longDescription': [],
            },
            {
                'id': 'express-digital-media',
                'name': 'Express Digital Media',
                'companyName': 'Cox Automotive',
                'website': '',
                'github': '',
                'logo': '',
                'dateCreated': '2016-10-14',
                'cardCover': '/assets/projects/express-digital-media/cover.jpg',
                'images': [],
                'shortDescription': 'Created as a demo application with Angular and TypeScript, Angular Material and API Interfaces with Abstract Factory Pattern.',
                'longDescription': [
                    {
                        'picture': '/assets/projects/express-digital-media/express-digital-media.jpg',
                        'description': 'Domain model was used for designing this application. All complex API responses layered into TypeScript Interfaces and Injected with Abstract Factory Pattern. Angular Material was used in many scenarios for steppers as “wizard”, for complex form elements with custom validators and custom UI errors.',
                    },
                ],
            },
        ],
    },
    {
        '_id': {
            '$oid': '5d5c6c6b52b65ac348575078',
        },
        'id': 'symfony',
        'name': 'Symfony',
        'panel': 'left',
        'version': '4',
        'logo': '/assets/skills/symfony.png',
        'order': '77',
        'description': 'Some awesome description',
        'projects': [
            {
                'id': 'data.holyskete.com',
                'name': 'Holy Skete API Service',
                'companyName': 'The Hermitage Of The Holy Protection',
                'website': 'https://data.holyskete.com/rss?url=https://orthochristian.com/xml/rss.xml',
                'github': 'https://github.com/evgeniypoznyak/holy-skete-data',
                'logo': '/assets/projects/holyskete-api/logo.jpg',
                'dateCreated': '2013-05-29',
                'cardCover': '/assets/projects/holyskete-api/data.holyskete.com-cover.jpg',
                'shortDescription': 'Symfony 4 based API Service. Providing Email service and XML to JSON service.',
                'images': [],
                'longDescription': [
                    {
                        'picture': '/assets/projects/holyskete-api/data.holyskete.com.jpg',
                        'description': 'Symfony 4 based API Service. Providing Email service and XML to JSON service. Basically any potential XML news feed could be parsed into JSON format and returned back to UI with CORS headers for better UI integration. In this current scenario two types of XML news feeds is been transferred over to JSON format for React multi language application.',
                    },
                ],
            },
            {
                'id': 'service-group',
                'name': 'Service Group',
                'companyName': 'Cox Automotive',
                'website': '',
                'github': '',
                'logo': '',
                'dateCreated': '2013-05-29',
                'cardCover': '/assets/projects/service-group/service-group-cover.jpg',
                'images': [],
                'shortDescription': 'Symfony 4 project used twig templates with Vue widgets and Bootstrap 4',
                'longDescription': [
                    {
                        'picture': '/assets/projects/service-group/service-group.jpg',
                        'description': 'Symfony 4 project used twig templates with Vue widgets and Bootstrap 4. For backend was used Entities with Value Objects and Repositories.',
                    },
                ],
            },
        ],
    },
    {
        '_id': {
            '$oid': '5d5c6c6b52b65ac348575079',
        },
        'id': 'laravel',
        'name': 'Laravel',
        'panel': 'left',
        'version': '5',
        'logo': '/assets/skills/laravel.png',
        'order': '88',
        'description': 'Some awesome description',
        'projects': [
            {
                'id': 'video.pacificnorthern.com',
                'name': 'Internal Video Content System',
                'companyName': 'Pacific Northern Inc.',
                'website': '',
                'github': 'https://github.com/evgeniypoznyak/video.pacificnorthern.com',
                'logo': '/assets/projects/video.pacificnorthern.com/logo.jpg',
                'dateCreated': '2013-05-29',
                'cardCover': '',
                'shortDescription': 'Utilizing PHP Framework Laravel for backend and jQueryUI for frontend. A little similar to NETFLIX.',
                'images': [
                    {
                        'label': 'Folders',
                        'path': '/assets/projects/video.pacificnorthern.com/folders.jpg',
                    },
                    {
                        'label': 'Video List',
                        'path': '/assets/projects/video.pacificnorthern.com/video-list.jpg',
                    },
                    {
                        'label': 'Video Player',
                        'path': '/assets/projects/video.pacificnorthern.com/video.jpg',
                    },
                ],
                'longDescription': [
                    {
                        'picture': '/assets/projects/video.pacificnorthern.com/video.pacificnorthern.com.jpg',
                        'description': 'Laravel is handling filesystem and database connection. Also in top level user’s information passed by Active Directory. Front end build with bootstrap and jQuery UI.',
                    },
                ],
            },
            {
                'id': 'evgeniy.poznyaks.com_v1',
                'name': 'Portfolio Website',
                'companyName': '',
                'website': 'https://evgeniy.poznyaks.com',
                'github': 'https://github.com/evgeniypoznyak/evgeniy.poznyaks.com',
                'logo': '/assets/projects/evgeniy.poznyaks.com_v1/logo.jpg',
                'dateCreated': '2013-05-29',
                'cardCover': '',
                'shortDescription': 'Portfolio Website Build on PHP Framework Laravel with Eloquent ORM. For frontend used Bootstrap 4.',
                'images': [
                    {
                        'label': 'Front Page',
                        'path': '/assets/projects/evgeniy.poznyaks.com_v1/front.jpg',
                    },
                    {
                        'label': 'Skills',
                        'path': '/assets/projects/evgeniy.poznyaks.com_v1/skills.jpg',
                    },
                    {
                        'label': 'Professional Experience',
                        'path': '/assets/projects/evgeniy.poznyaks.com_v1/prof-exp.jpg',
                    },
                    {
                        'label': 'Personal Experience',
                        'path': '/assets/projects/evgeniy.poznyaks.com_v1/pers-exp.jpg',
                    },
                    {
                        'label': 'Project Page',
                        'path': '/assets/projects/evgeniy.poznyaks.com_v1/project-page.jpg',
                    },
                    {
                        'label': 'Contact Us',
                        'path': '/assets/projects/evgeniy.poznyaks.com_v1/contact-us.jpg',
                    },
                ],
                'longDescription': [
                    {
                        'picture': '/assets/projects/evgeniy.poznyaks.com_v1/portfolio_website_v1.jpg',
                        'description': 'Application was on VPS with Apache server. Laravel was chosen as PHP framework and for front end was blade templates with Bootstrap and jQueryUI. Eloquent was used as ORM and MySQL as a storage unit.',
                    },
                ],
            },
            {
                'id': 'data.eandkphoto.com',
                'name': 'E&K Photo API Service',
                'companyName': 'E and K Photography',
                'website': 'https://data.eandkphoto.com/',
                'github': 'https://github.com/evgeniypoznyak/data.eandkphoto.com',
                'logo': '',
                'dateCreated': '2013-05-29',
                'cardCover': '/assets/projects/data-eandkphoto.com/data-eandkphoto.com-cover.jpg',
                'shortDescription': 'API Service build in Laravel. Utilized JWT for authentication/authorization purposes. Used Eloquent model as ORM, MySQL as database and filesystem.',
                'images': [],
                'longDescription': [
                    {
                        'picture': '/assets/projects/data-eandkphoto.com/data-eandkphoto.com.jpg',
                        'description': 'API Service build in Laravel. Used Eloquent model as ORM. Fully CRUD service with JWT protected sensitive routes. Receiving data as binary from Angular and passed into database and file systems according to business needs.\nService also taking care of emailing into Google Gmail API.',
                    },
                ],
            },
        ],
    },
    {
        '_id': {
            '$oid': '5d5c6c6b52b65ac348575070',
        },
        'id': 'dotnet-core',
        'name': '.Net Core',
        'panel': 'left',
        'version': '2.2',
        'logo': '/assets/skills/aspnet-core.png',
        'order': '99',
        'description': 'After gaining knowledge of TypeScript, translation to C# with .Net Core wasn’t hard, because they are same Microsoft family as syntax is very similar. C# with .Net Core was choice as option for microservices, because it’s running compiled code and it’s very fast, also .Net Core have multi system support for Windows, Mac and Linux systems.',
        'projects': [
            {
                'id': 'express-recoveries-v2',
                'name': 'Express Recoveries v2',
                'companyName': 'Cox Automotive',
                'website': '',
                'github': '',
                'logo': '',
                'dateCreated': '2016-10-14',
                'cardCover': '/assets/projects/express-recoveries-v2/microservices-application.jpg',
                'images': [],
                'shortDescription': 'Enterprise level application. By decoupling a monolithic application we are used microservices  in C# .net core.',
                'longDescription': [
                    {
                        'picture': '/assets/projects/express-recoveries-v2/express-recoveries-v2.jpg',
                        'description': 'Decoupling monolith into microservices. Each service mostly running in C# .Net Core. Each container is independent and has a single responsibility, open for extension and close for modifications. Services have MVC structure and console application.',
                    },
                ],
            },
            {
                'id': 'skills-microservice',
                'name': 'Skills Microservice',
                'companyName': '',
                'website': '',
                'github': 'https://github.com/evgeniypoznyak/Skills',
                'logo': '',
                'dateCreated': '2013-05-29',
                'cardCover': '/assets/projects/skills-microservice/microservices.jpg',
                'images': [],
                'shortDescription': 'Running C# .Net Core Microservice in docker container. Service provide MVC API integration for MongoDB.',
                'longDescription': [
                    {
                        'picture': '/assets/projects/skills-microservice/skills-microservice.jpg',
                        'description': 'Containerized C# .Net Core microservice, API MVC controller accessing via repository entity, each entity have adapter dependency injected. And utilized MongoDB as data storage running in docker container also.',
                    },
                ],
            },
        ],
    },
    {
        '_id': {
            '$oid': '5d5c6c6b52b65ac34857506c',
        },
        'id': 'redux',
        'name': 'Redux',
        'panel': 'right',
        'version': '8',
        'logo': '/assets/skills/redux-saga.png',
        'order': '105',
        'description': 'Redux brings Command Pattern into event model of JavaScript/TypeScript. Redux makes asynchronous code with side effects easy to maintain. I have experience to setup complex Redux with Redux Sagas and also Redux with Angular by using RxJS Store.',
        'projects': [
            {
                'id': 'holyskete-react',
                'name': 'Holy Skete',
                'companyName': 'The Hermitage Of The Holy Protection',
                'website': 'http://holyskete.com/',
                'github': 'https://github.com/evgeniypoznyak/holy-skete',
                'logo': '/assets/projects/holyskete-react/logo.jpg',
                'dateCreated': '2013-05-29',
                'cardCover': '',
                'shortDescription': 'Complex multi-language application. Utilized React with Redux Sagas and custom UI elements. And API server for emailing, proxying and providing data.',
                'images': [
                    {
                        'label': 'Front Page',
                        'path': '/assets/projects/holyskete-react/home.jpg',
                    },
                    {
                        'label': 'Slideshow',
                        'path': '/assets/projects/holyskete-react/slideshow.jpg',
                    },
                    {
                        'label': 'Cemetery',
                        'path': '/assets/projects/holyskete-react/cemetery.jpg',
                    },
                    {
                        'label': 'Clergy',
                        'path': '/assets/projects/holyskete-react/clergy.jpg',
                    },
                    {
                        'label': 'Google Maps API',
                        'path': '/assets/projects/holyskete-react/google-maps.jpg',
                    },
                    {
                        'label': 'Contact Us',
                        'path': '/assets/projects/holyskete-react/contact-us.jpg',
                    },
                ],
                'longDescription': [
                    {
                        'picture': '/assets/projects/holyskete-react/holyskete-react-shema.jpg',
                        'description': 'Complex multi-language application. Utilized React with Redux Sagas and custom UI elements. And API server for emailing, proxying and providing data. Language changes by Redux Saga event. All side-effects handheld by Redux Saga.',
                    },
                ],
            },
        ],
    },
    {
        '_id': {
            '$oid': '5d5c6c6b52b65ac348575072',
        },
        'id': 'expressjs',
        'name': 'ExpressJS',
        'panel': 'left',
        'version': '5',
        'logo': '/assets/skills/expressjs.png',
        'order': '111',
        'description': 'Some awesome description',
        'projects': [
            {
                'id': 'api-gateway-for-portfolio',
                'name': 'API Gateway for Portfolio',
                'companyName': '',
                'website': 'https://api.evgeniy.poznyaks.com/',
                'github': 'https://github.com/evgeniypoznyak/nodejs-gateway-typescript',
                'logo': '',
                'dateCreated': '2013-05-29',
                'cardCover': '/assets/projects/api-gateway-for-portfolio/cover.jpg',
                'images': [],
                'shortDescription': 'NodeJS API Gateway in docker. Used TypeScript with JWT and MongoDB for authorization and authentication.',
                'longDescription': [
                    {
                        'picture': '/assets/projects/api-gateway-for-portfolio/api-gateway-for-portfolio.jpg',
                        'description': 'Running in VPS via Apache server as a proxy to NodeJS. Application NodeJS API Gateway runs in docker. Utilizing JWT and MongoDB for authorization and authentication and logging. Also providing CORS support.',
                    },
                ],
            },
            {
                'id': 'ssr-reactjs-for-portfolio',
                'name': 'SSR ReactJS for Portfolio',
                'companyName': '',
                'website': '',
                'github': 'https://github.com/evgeniypoznyak/ssr-evgeniy.poznyaks.com',
                'logo': '',
                'dateCreated': '2013-05-29',
                'cardCover': '/assets/projects/ssr-evgeniy.poznyaks.com/ssr-evgeniy.poznyaks.com.jpg',
                'images': [],
                'shortDescription': 'Running in docker Server Side Rendering ReactJS application with Material Design and logging into MongoDB.',
                'longDescription': [
                    {
                        'picture': '/assets/projects/ssr-evgeniy.poznyaks.com/ssr-evgeniy.poznyaks.com-shema.jpg',
                        'description': 'Running in VPS via Apache server as a proxy to NodeJS. Dockerized Server Side Rendering ReactJS application utilizing Material Design and logging into MongoDB. For storing simple files such as resume and biography application utilizing NodeJS IO library to store locally in the NodeJS server.',
                    },
                ],
            },
        ],
    },
    {
        '_id': {
            '$oid': '5d5c6c6b52b65ac348575071',
        },
        'id': 'mongodb',
        'name': 'MongoDB',
        'panel': 'left',
        'version': '5',
        'logo': '/assets/skills/mongo.png',
        'order': '122',
        'description': 'Some awesome description',
        'projects': [
            {
                'id': 'holyskete-react',
                'name': 'Holy Skete',
                'companyName': 'The Hermitage Of The Holy Protection',
                'website': 'http://holyskete.com/',
                'github': 'https://github.com/evgeniypoznyak/holy-skete',
                'logo': '/assets/projects/holyskete-react/logo.jpg',
                'dateCreated': '2013-05-29',
                'cardCover': '',
                'shortDescription': 'Complex multi-language application. Utilized React with Redux Sagas and custom UI elements. And API server for emailing, proxying and providing data.',
                'images': [
                    {
                        'label': 'Front Page',
                        'path': '/assets/projects/holyskete-react/home.jpg',
                    },
                    {
                        'label': 'Slideshow',
                        'path': '/assets/projects/holyskete-react/slideshow.jpg',
                    },
                    {
                        'label': 'Cemetery',
                        'path': '/assets/projects/holyskete-react/cemetery.jpg',
                    },
                    {
                        'label': 'Clergy',
                        'path': '/assets/projects/holyskete-react/clergy.jpg',
                    },
                    {
                        'label': 'Google Maps API',
                        'path': '/assets/projects/holyskete-react/google-maps.jpg',
                    },
                    {
                        'label': 'Contact Us',
                        'path': '/assets/projects/holyskete-react/contact-us.jpg',
                    },
                ],
                'longDescription': [
                    {
                        'picture': '/assets/projects/holyskete-react/holyskete-react-shema.jpg',
                        'description': 'Complex multi-language application. Utilized React with Redux Sagas and custom UI elements. And API server for emailing, proxying and providing data. Language changes by Redux Saga event. All side-effects handheld by Redux Saga.',
                    },
                ],
            },
            {
                'id': 'ssr-reactjs-for-portfolio',
                'name': 'SSR ReactJS for Portfolio',
                'companyName': '',
                'website': '',
                'github': 'https://github.com/evgeniypoznyak/ssr-evgeniy.poznyaks.com',
                'logo': '',
                'dateCreated': '2013-05-29',
                'cardCover': '/assets/projects/ssr-evgeniy.poznyaks.com/ssr-evgeniy.poznyaks.com.jpg',
                'images': [],
                'shortDescription': 'Dockerized Server Side Rendering ReactJS + NodeJS Single Page Application. In protected routes by JWT, application provides content management system. For UI perspective Application utilizing React Material Design.',
                'longDescription': [
                    {
                        'picture': '/assets/projects/ssr-evgeniy.poznyaks.com/ssr-evgeniy.poznyaks.com-shema.jpg',
                        'description': 'Dockerized Server Side Rendering ReactJS + NodeJS Single Page Application. Utilizing React Material Design with JWT for protected routes. ReactJS is been used in two ways - one for server side rendering and another for browser. All React components can be loaded without JavaScript support, this provide amazingSearch Engine Optimization and all routes will be fetched by NodeJS server. If browser JavaScript will be enabled, then all preloaded elements will be replaced by ReactJS and all routes dynamically will be fetched from browser. All sensitive routes protected by JWT in API Gateway server.',
                    },
                ],
            },
            {
                'id': 'api-gateway-for-portfolio',
                'name': 'API Gateway for Portfolio',
                'companyName': '',
                'website': 'https://api.evgeniy.poznyaks.com/',
                'github': 'https://github.com/evgeniypoznyak/nodejs-gateway-typescript',
                'logo': '',
                'dateCreated': '2013-05-29',
                'cardCover': '/assets/projects/api-gateway-for-portfolio/cover.jpg',
                'images': [],
                'shortDescription': 'NodeJS API Gateway in docker. Used TypeScript with JWT and MongoDB for authorization and authentication.',
                'longDescription': [
                    {
                        'picture': '/assets/projects/api-gateway-for-portfolio/api-gateway-for-portfolio.jpg',
                        'description': 'Running in VPS via Apache server as a proxy to NodeJS. Application NodeJS API Gateway runs in docker. Utilizing JWT and MongoDB for authorization and authentication and logging. Also providing CORS support.',
                    },
                ],
            },
            {
                'id': 'express-recoveries-v2',
                'name': 'Express Recoveries v2',
                'companyName': 'Cox Automotive',
                'website': '',
                'github': '',
                'logo': '',
                'dateCreated': '2016-10-14',
                'cardCover': '/assets/projects/express-recoveries-v2/microservices-application.jpg',
                'images': [],
                'shortDescription': 'Enterprise level application. Decoupling monolithic AngularJS application into independently delayable React components.',
                'longDescription': [
                    {
                        'picture': '/assets/projects/express-recoveries-v2/express-recoveries-v2-react.jpg',
                        'description': 'Enterprise level application. Decoupling monolithic AngularJS application into independently delayable React components. Form elements have a custom UI design with attached validation logic.',
                    },
                ],
            },
            {
                'id': 'skills-microservice',
                'name': 'Skills Microservice',
                'companyName': '',
                'website': '',
                'github': 'https://github.com/evgeniypoznyak/Skills',
                'logo': '',
                'dateCreated': '2013-05-29',
                'cardCover': '/assets/projects/skills-microservice/microservices.jpg',
                'images': [],
                'shortDescription': 'Running C# .Net Core Microservice in docker container. Service provide MVC API integration for MongoDB.',
                'longDescription': [
                    {
                        'picture': '/assets/projects/skills-microservice/skills-microservice.jpg',
                        'description': 'Containerized C# .Net Core microservice, API MVC controller accessing via repository entity, each entity have adapter dependency injected. And utilized MongoDB as data storage running in docker container also.',
                    },
                ],
            },
        ],
    },
    {
        '_id': {
            '$oid': '5d5c6c6b52b65ac34857506f',
        },
        'id': 'mysql',
        'name': 'MySQL',
        'panel': 'left',
        'version': '3',
        'logo': '/assets/skills/mysql.png',
        'order': '133',
        'description': 'I have a lot experience build and support MySQL projects. And I build a tons of projects with MySQL. But I really don’t see my career as full time heavily MySQL Engineer.',
        'projects': [
            {
                'id': 'eandkphotography',
                'name': 'E&K Photography (PHP)',
                'companyName': 'E and K Photography',
                'website': 'https://eandkphoto.com',
                'github': 'https://github.com/evgeniypoznyak/eandkphoto.com',
                'logo': '',
                'dateCreated': '2013-06-18',
                'cardCover': 'https://data.eandkphoto.com/events/2015/09-september/newborn/large/EVG_73831.jpg',
                'images': [
                    {
                        'label': 'Front Page',
                        'path': '/assets/projects/eandkphoto.com/front.jpg',
                    },
                    {
                        'label': 'Grid',
                        'path': '/assets/projects/eandkphoto.com/grid.jpg',
                    },
                    {
                        'label': 'Contact Us',
                        'path': '/assets/projects/eandkphoto.com/contact-us.jpg',
                    },
                    {
                        'label': 'Social Page',
                        'path': '/assets/projects/eandkphoto.com/social.jpg',
                    },
                    {
                        'label': 'Portfolio Page',
                        'path': '/assets/projects/eandkphoto.com/portfolio.jpg',
                    },
                ],
                'shortDescription': 'In very beginning I created this website from scratch on vanilla PHP. Today this website is completely different.',
                'longDescription': [
                    {
                        'picture': '/assets/projects/eandkphoto.com/eandkphoto_php.jpg',
                        'description': 'Project was lived in Virtual Private Server (VPS), used Apache Server on Linux system. Filesystem is been used to display list of pictures by year, month and date. Contact Us form utilized Google API such as reCaptcha. User data was stored in MySQL.',
                    },
                ],
            },
            {
                'id': 'wp-holyskete',
                'name': 'Holy Skete',
                'companyName': 'The Hermitage Of The Holy Protection',
                'website': 'http://holyskete.com/',
                'github': '',
                'logo': '/assets/projects/wp-holyskete.com/logo.jpg',
                'dateCreated': '2013-05-29',
                'cardCover': '',
                'shortDescription': 'Multilingual mobile responsive web platform for displaying small business. Google API integrations for reCaptcha and Google Maps.',
                'images': [
                    {
                        'label': 'Front Page',
                        'path': '/assets/projects/wp-holyskete.com/front.jpg',
                    },
                    {
                        'label': 'History',
                        'path': '/assets/projects/wp-holyskete.com/history.jpg',
                    },
                    {
                        'label': 'Cemetery',
                        'path': '/assets/projects/wp-holyskete.com/cemetery.jpg',
                    },
                    {
                        'label': 'Directions',
                        'path': '/assets/projects/wp-holyskete.com/directions.jpg',
                    },
                    {
                        'label': 'Contact Us',
                        'path': '/assets/projects/wp-holyskete.com/contact-us.jpg',
                    },
                    {
                        'label': 'About Us',
                        'path': '/assets/projects/wp-holyskete.com/about-us.jpg',
                    },
                    {
                        'label': 'Cover Page',
                        'path': '/assets/projects/wp-holyskete.com/cover.jpg',
                    },
                ],
                'longDescription': [],
            },
            {
                'id': 'express-recoveries-v1',
                'name': 'Express Recoveries v1',
                'companyName': 'Cox Automotive',
                'website': '',
                'github': '',
                'logo': '',
                'dateCreated': '2013-06-18',
                'cardCover': '',
                'images': [],
                'shortDescription': 'Enterprise level application. Connect together high complexity API, workflows and different systems integrations.',
                'longDescription': [
                    {
                        'picture': '/assets/projects/express-recoveries-v1/express-recoveries-v1.jpg',
                        'description': 'Enterprise level application. Connect together high complexity API, different workflow and variant systems integrations.\nWith IP range protection layer, client can access to application via UI or sftp protocol. Some scripts are running daily with cron jobs. Frontend was build in pure HTML/CSS and pages being rendered on the PHP server.',
                    },
                ],
            },
            {
                'id': 'express-recoveries-v2',
                'name': 'Express Recoveries v2',
                'companyName': 'Cox Automotive',
                'website': '',
                'github': '',
                'logo': '',
                'dateCreated': '2013-06-18',
                'cardCover': '/assets/projects/express-recoveries-v2/microservices-application.jpg',
                'images': [],
                'shortDescription': 'Enterprise level application. Connect together high complexity API, workflows and different systems integrations.',
                'longDescription': [
                    {
                        'picture': '/assets/projects/express-recoveries-v2/express-recoveries-v2.jpg',
                        'description': 'Enterprise level application. Connect together high complexity API, workflows and different systems integrations. With IP range protection layer, client can access to application via UI, sftp protocol or via AWS Gateway and microservices. Some scripts are running daily with cron jobs. Frontend was build in AngularJS with Angular AgGrid.\nAlso by decoupling monolithic application we are introduced are microservices (C# with .Net Core) running in docker container and frontend for them in React.',
                    },
                ],
            },
            {
                'id': 'data.eandkphoto.com',
                'name': 'E&K Photo API Service',
                'companyName': 'E and K Photography',
                'website': 'https://data.eandkphoto.com/',
                'github': 'https://github.com/evgeniypoznyak/data.eandkphoto.com',
                'logo': '',
                'dateCreated': '2013-05-29',
                'cardCover': '/assets/projects/data-eandkphoto.com/data-eandkphoto.com-cover.jpg',
                'shortDescription': 'API Service build in Laravel. Utilized JWT for authentication/authorization purposes. Used Eloquent model as ORM, MySQL as database and filesystem.',
                'images': [],
                'longDescription': [
                    {
                        'picture': '/assets/projects/data-eandkphoto.com/data-eandkphoto.com.jpg',
                        'description': 'API Service build in Laravel. Used Eloquent model as ORM. Fully CRUD service with JWT protected sensitive routes. Receiving data as binary from Angular and passed into database and file systems according to business needs.\nService also taking care of emailing into Google Gmail API.',
                    },
                ],
            },
            {
                'id': 'service-group',
                'name': 'Service Group',
                'companyName': 'Cox Automotive',
                'website': '',
                'github': '',
                'logo': '',
                'dateCreated': '2013-05-29',
                'cardCover': '/assets/projects/service-group/service-group-cover.jpg',
                'images': [],
                'shortDescription': 'Symfony 4 project used twig templates with Vue widgets and Bootstrap 4',
                'longDescription': [
                    {
                        'picture': '/assets/projects/service-group/service-group.jpg',
                        'description': 'Symfony 4 project used twig templates with Vue widgets and Bootstrap 4. For backend was used Entities with Value Objects and Repositories.',
                    },
                ],
            },
            {
                'id': 'evgeniy.poznyaks.com_v1',
                'name': 'Portfolio Website',
                'companyName': '',
                'website': 'https://evgeniy.poznyaks.com',
                'github': 'https://github.com/evgeniypoznyak/evgeniy.poznyaks.com',
                'logo': '/assets/projects/evgeniy.poznyaks.com_v1/logo.jpg',
                'dateCreated': '2013-05-29',
                'cardCover': '',
                'shortDescription': 'Portfolio Website Build on PHP Framework Laravel with Eloquent ORM. For frontend used Bootstrap 4.',
                'images': [
                    {
                        'label': 'Front Page',
                        'path': '/assets/projects/evgeniy.poznyaks.com_v1/front.jpg',
                    },
                    {
                        'label': 'Skills',
                        'path': '/assets/projects/evgeniy.poznyaks.com_v1/skills.jpg',
                    },
                    {
                        'label': 'Professional Experience',
                        'path': '/assets/projects/evgeniy.poznyaks.com_v1/prof-exp.jpg',
                    },
                    {
                        'label': 'Personal Experience',
                        'path': '/assets/projects/evgeniy.poznyaks.com_v1/pers-exp.jpg',
                    },
                    {
                        'label': 'Project Page',
                        'path': '/assets/projects/evgeniy.poznyaks.com_v1/project-page.jpg',
                    },
                    {
                        'label': 'Contact Us',
                        'path': '/assets/projects/evgeniy.poznyaks.com_v1/contact-us.jpg',
                    },
                ],
                'longDescription': [
                    {
                        'picture': '/assets/projects/evgeniy.poznyaks.com_v1/portfolio_website_v1.jpg',
                        'description': 'Application was on VPS with Apache server. Laravel was chosen as PHP framework and for front end was blade templates with Bootstrap and jQueryUI. Eloquent was used as ORM and MySQL as a storage unit.',
                    },
                ],
            },
            {
                'id': 'pacificnorthern',
                'name': 'Pacific Northern Company Website',
                'companyName': 'Pacific Northern Inc.',
                'website': 'https://www.pacificnorthern.com/',
                'github': '',
                'logo': '/assets/projects/pacificnerthern.com/logo.jpg',
                'dateCreated': '2013-05-29',
                'cardCover': '',
                'images': [
                    {
                        'label': 'Front Page',
                        'path': '/assets/projects/pacificnerthern.com/front-page.jpg',
                    },
                    {
                        'label': 'Portfolio Page',
                        'path': '/assets/projects/pacificnerthern.com/portfolio-page.jpg',
                    },
                    {
                        'label': 'Portfolio Item Page',
                        'path': '/assets/projects/pacificnerthern.com/portfolio-item-page.jpg',
                    },
                    {
                        'label': 'What We Do Page',
                        'path': '/assets/projects/pacificnerthern.com/what-we-do-page.jpg',
                    },
                    {
                        'label': 'Our Team Page',
                        'path': '/assets/projects/pacificnerthern.com/our-team-page.jpg',
                    },
                    {
                        'label': 'About Us Page',
                        'path': '/assets/projects/pacificnerthern.com/about-us-page.jpg',
                    },
                ],
                'shortDescription': 'Company presentation website for displaying company information and products. Website utilized WordPress technology.',
                'longDescription': [],
            },
            {
                'id': 'infocenter.pacificnorthern',
                'name': 'Internal Company’s Information Center',
                'companyName': 'Pacific Northern Inc.',
                'website': '',
                'github': '',
                'logo': '/assets/projects/infocenter.pacificnorthern.com/logo.jpg',
                'dateCreated': '2013-05-29',
                'cardCover': '',
                'shortDescription': 'This is company’s internal website build on WordPress and using Active Directory Integration.',
                'images': [
                    {
                        'label': 'Active Directory Cards View',
                        'path': '/assets/projects/infocenter.pacificnorthern.com/ad-cards.jpg',
                    },
                    {
                        'label': 'Front Page',
                        'path': '/assets/projects/infocenter.pacificnorthern.com/front.jpg',
                    },
                    {
                        'label': 'Active Directory List View',
                        'path': '/assets/projects/infocenter.pacificnorthern.com/ad-list.jpg',
                    },
                    {
                        'label': 'Active Directory Profile View',
                        'path': '/assets/projects/infocenter.pacificnorthern.com/profile.jpg',
                    },
                ],
                'longDescription': [
                    {
                        'picture': '/assets/projects/infocenter.pacificnorthern.com/infocenter.pacificnorthern.jpg',
                        'description': 'I created integration with windows active directory from Wordpress internal website. Cron job was kicking the script and script was updating and making record into database. After that WordPress custom build plugin pull these changes and reflect them into website.',
                    },
                ],
            },
            {
                'id': 'pndisplay.com',
                'name': 'PN Display, E-Commerce Website',
                'companyName': 'Pacific Northern Inc.',
                'website': '',
                'github': '',
                'logo': '/assets/projects/pndisplay.com/logo.jpg',
                'dateCreated': '2013-05-29',
                'cardCover': '',
                'shortDescription': 'E-Commerce Website. With custom more than 300 variations, fabrics and tiers for each product and platforms combos.',
                'images': [
                    {
                        'label': 'Front Page',
                        'path': '/assets/projects/pndisplay.com/front.jpg',
                    },
                    {
                        'label': 'Product List',
                        'path': '/assets/projects/pndisplay.com/product-list.jpg',
                    },
                    {
                        'label': 'Single Item',
                        'path': '/assets/projects/pndisplay.com/single-item.jpg',
                    },
                    {
                        'label': 'Multiple Custom Variations',
                        'path': '/assets/projects/pndisplay.com/variations.jpg',
                    },
                    {
                        'label': 'Backend Setup',
                        'path': '/assets/projects/pndisplay.com/backend-setup.jpg',
                    },
                ],
                'longDescription': [
                    {
                        'picture': '/assets/projects/pndisplay.com/pndisplay.com.jpg',
                        'description': 'Very complex WordPress/Woocomerce plugin. Plugin extends variant selections, by price tier, color, fabric and base made. Also admin can setup in custom made menu pages what exactly is going to be used by this plugin.',
                    },
                    {
                        'picture': '/assets/projects/pndisplay.com/pndisplay.com_email.jpg',
                        'description': 'Another plugin make multiple email blasts by chunks and specific time for that, witch can be configured in custom admin menu.',
                    },
                ],
            },
            {
                'id': 'video.pacificnorthern.com',
                'name': 'Internal Video Content System',
                'companyName': 'Pacific Northern Inc.',
                'website': '',
                'github': 'https://github.com/evgeniypoznyak/video.pacificnorthern.com',
                'logo': '/assets/projects/video.pacificnorthern.com/logo.jpg',
                'dateCreated': '2013-05-29',
                'cardCover': '',
                'shortDescription': 'Utilizing PHP Framework Laravel for backend and jQueryUI for frontend. A little similar to NETFLIX.',
                'images': [
                    {
                        'label': 'Folders',
                        'path': '/assets/projects/video.pacificnorthern.com/folders.jpg',
                    },
                    {
                        'label': 'Video List',
                        'path': '/assets/projects/video.pacificnorthern.com/video-list.jpg',
                    },
                    {
                        'label': 'Video Player',
                        'path': '/assets/projects/video.pacificnorthern.com/video.jpg',
                    },
                ],
                'longDescription': [
                    {
                        'picture': '/assets/projects/video.pacificnorthern.com/video.pacificnorthern.com.jpg',
                        'description': 'Laravel is handling filesystem and database connection. Also in top level user’s information passed by Active Directory. Front end build with bootstrap and jQuery UI.',
                    },
                ],
            },
            {
                'id': 'info.pndisplay.com',
                'name': 'Information for PN Display',
                'companyName': 'Pacific Northern Inc.',
                'website': 'http://info.pndisplay.com/',
                'github': '',
                'logo': '/assets/projects/info.pndisplay.com/logo.jpg',
                'dateCreated': '2013-05-29',
                'cardCover': '',
                'shortDescription': 'Simple website providing more information about E-Commerce PN Display website. Build on WordPress engine.',
                'images': [
                    {
                        'label': 'Front Page',
                        'path': '/assets/projects/info.pndisplay.com/front.jpg',
                    },
                    {
                        'label': 'List Page',
                        'path': '/assets/projects/info.pndisplay.com/list.jpg',
                    },
                    {
                        'label': 'Platforms Page',
                        'path': '/assets/projects/info.pndisplay.com/platforms.jpg',
                    },
                    {
                        'label': 'News Page',
                        'path': '/assets/projects/info.pndisplay.com/news.jpg',
                    },
                ],
                'longDescription': [],
            },
            {
                'id': 'namesday.info',
                'name': 'Names Day info',
                'companyName': 'Andrei Pervychine',
                'website': 'https://www.namesday.info/',
                'github': '',
                'logo': '',
                'dateCreated': '2013-05-29',
                'cardCover': '/assets/projects/namesday.info/cover.jpg',
                'shortDescription': 'This is was my first professional work. I worked as intern an helped with backend and frontend. Mostly my work done for frontend.',
                'images': [],
                'longDescription': [],
            },
            {
                'id': 'wordpress.poznyaks.com',
                'name': 'WordPress Plugins Website',
                'companyName': 'WordPress',
                'website': 'https://wordpress.poznyaks.com/',
                'github': 'https://github.com/evgeniypoznyak/poznyaks.com.wordpress',
                'logo': '',
                'dateCreated': '2017-03-24',
                'cardCover': '',
                'shortDescription': 'Information website for my WordPress plugins. Build in vanilla PHP with Object Oriented Design Model. And Google API for ReCaptcha.',
                'images': [
                    {
                        'label': 'Front Page',
                        'path': '/assets/projects/wordpress.poznyaks.com/front.jpg',
                    },
                    {
                        'label': 'Project Page',
                        'path': '/assets/projects/wordpress.poznyaks.com/project.jpg',
                    },
                    {
                        'label': 'Contact Us Page',
                        'path': '/assets/projects/wordpress.poznyaks.com/contact-us.jpg',
                    },
                ],
                'longDescription': [
                    {
                        'picture': '/assets/projects/wordpress.poznyaks.com/wordpress.poznyaks.com.jpg',
                        'description': 'Simple application with backend in Object Oriented Design in PHP and front end just HTML/CSS.',
                    },
                ],
            },
            {
                'id': 'wp-exclude-ips-from-google-analytics',
                'name': 'Exclude Ips',
                'companyName': 'WordPress',
                'website': 'https://wordpress.org/plugins/exclude-ips-from-google-analytics/',
                'github': 'https://github.com/evgeniypoznyak/exclude-ips-from-google-analytics',
                'logo': '',
                'dateCreated': '2017-06-01',
                'cardCover': '',
                'shortDescription': 'Plugin for excluding IP’s from Google Analytics, to not been tracked. Very helpful for companies with range of ips.',
                'images': [
                    {
                        'label': 'Plugin Information',
                        'path': '/assets/projects/wp-exclude-ips-from-google-analytics/plugin.jpg',
                    },
                    {
                        'label': 'Administrator menu',
                        'path': '/assets/projects/wp-exclude-ips-from-google-analytics/backend.jpg',
                    },
                ],
                'longDescription': [],
            },
            {
                'id': 'wp-plugin-google-recaptcha',
                'name': 'Authentication with Google',
                'companyName': 'WordPress',
                'website': 'https://wordpress.org/plugins/evg-google-recaptcha/',
                'github': 'https://github.com/evgeniypoznyak/evg-google-recaptcha',
                'logo': '',
                'dateCreated': '2017-06-01',
                'cardCover': '',
                'shortDescription': 'Plugin for Login With Google reCaptcha For WordPress And Woocomerce. Plugin utilize Google API.',
                'images': [
                    {
                        'label': 'Plugin Information',
                        'path': '/assets/projects/wp-plugin-google-recaptcha/plugin.jpg',
                    },
                    {
                        'label': 'Administrator menu',
                        'path': '/assets/projects/wp-plugin-google-recaptcha/setup.jpg',
                    },
                    {
                        'label': 'Login widget',
                        'path': '/assets/projects/wp-plugin-google-recaptcha/login-window.jpg',
                    },
                    {
                        'label': 'Login with failed ReCaptcha',
                        'path': '/assets/projects/wp-plugin-google-recaptcha/failure.jpg',
                    },
                ],
                'longDescription': [],
            },
            {
                'id': 'wp-user-information-in-email',
                'name': 'User Information In Email',
                'companyName': 'WordPress',
                'website': 'https://wordpress.org/plugins/user-info-in-email-for-contact-form-7/',
                'github': 'https://github.com/evgeniypoznyak/user-info-in-email-for-contact-form-7',
                'logo': '',
                'dateCreated': '2017-06-01',
                'cardCover': '',
                'shortDescription': 'Plugin is adding the user\'s internet provider information (based on IP address), to the body of the email.',
                'images': [
                    {
                        'label': 'Plugin Information',
                        'path': '/assets/projects/wp-user-information-in-email/plugin.jpg',
                    },
                    {
                        'label': 'Email setup',
                        'path': '/assets/projects/wp-user-information-in-email/email-setup.jpg',
                    },
                    {
                        'label': 'Example',
                        'path': '/assets/projects/wp-user-information-in-email/example.jpg',
                    },
                ],
                'longDescription': [],
            },
        ],
    },
    {
        '_id': {
            '$oid': '5d5c6c6b52b65ac348575073',
        },
        'id': 'docker',
        'name': 'Docker',
        'panel': 'left',
        'version': '0',
        'logo': '/assets/skills/docker.png',
        'order': '144',
        'description': 'Some awesome description',
        'projects': [
            {
                'id': 'express-recoveries-v2',
                'name': 'Express Recoveries v2',
                'companyName': 'Cox Automotive',
                'website': '',
                'github': '',
                'logo': '',
                'dateCreated': '2016-10-14',
                'cardCover': '/assets/projects/express-recoveries-v2/microservices-application.jpg',
                'images': [],
                'shortDescription': 'Enterprise level application. By decoupling a monolithic application we are used microservices  in C# .net core.',
                'longDescription': [
                    {
                        'picture': '/assets/projects/express-recoveries-v2/express-recoveries-v2.jpg',
                        'description': 'Decoupling monolith into microservices. Each service mostly running in C# .Net Core. Each container is independent and has a single responsibility, open for extension and close for modifications. Services have MVC structure and console application.',
                    },
                ],
            },
            {
                'id': 'skills-microservice',
                'name': 'Skills Microservice',
                'companyName': '',
                'website': '',
                'github': 'https://github.com/evgeniypoznyak/Skills',
                'logo': '',
                'dateCreated': '2013-05-29',
                'cardCover': '/assets/projects/skills-microservice/microservices.jpg',
                'images': [],
                'shortDescription': 'Running C# .Net Core Microservice in docker container. Service provide MVC API integration for MongoDB.',
                'longDescription': [
                    {
                        'picture': '/assets/projects/skills-microservice/skills-microservice.jpg',
                        'description': 'Containerized C# .Net Core microservice, API MVC controller accessing via repository entity, each entity have adapter dependency injected. And utilized MongoDB as data storage running in docker container also.',
                    },
                ],
            },
            {
                'id': 'ssr-reactjs-for-portfolio',
                'name': 'SSR ReactJS for Portfolio',
                'companyName': '',
                'website': '',
                'github': 'https://github.com/evgeniypoznyak/ssr-evgeniy.poznyaks.com',
                'logo': '',
                'dateCreated': '2013-05-29',
                'cardCover': '/assets/projects/ssr-evgeniy.poznyaks.com/ssr-evgeniy.poznyaks.com.jpg',
                'images': [],
                'shortDescription': 'Dockerized Server Side Rendering ReactJS + NodeJS Single Page Application. In protected routes by JWT, application provides content management system. For UI perspective Application utilizing React Material Design.',
                'longDescription': [
                    {
                        'picture': '/assets/projects/ssr-evgeniy.poznyaks.com/ssr-evgeniy.poznyaks.com-shema.jpg',
                        'description': 'Dockerized Server Side Rendering ReactJS + NodeJS Single Page Application. Utilizing React Material Design with JWT for protected routes. ReactJS is been used in two ways - one for server side rendering and another for browser. All React components can be loaded without JavaScript support, this provide amazingSearch Engine Optimization and all routes will be fetched by NodeJS server. If browser JavaScript will be enabled, then all preloaded elements will be replaced by ReactJS and all routes dynamically will be fetched from browser. All sensitive routes protected by JWT in API Gateway server.',
                    },
                ],
            },
            {
                'id': 'api-gateway-for-portfolio',
                'name': 'API Gateway for Portfolio',
                'companyName': '',
                'website': 'https://api.evgeniy.poznyaks.com/',
                'github': 'https://github.com/evgeniypoznyak/nodejs-gateway-typescript',
                'logo': '',
                'dateCreated': '2013-05-29',
                'cardCover': '/assets/projects/api-gateway-for-portfolio/cover.jpg',
                'images': [],
                'shortDescription': 'NodeJS API Gateway in docker. Used TypeScript with JWT and MongoDB for authorization and authentication.',
                'longDescription': [
                    {
                        'picture': '/assets/projects/api-gateway-for-portfolio/api-gateway-for-portfolio.jpg',
                        'description': 'Running in VPS via Apache server as a proxy to NodeJS. Application NodeJS API Gateway runs in docker. Utilizing JWT and MongoDB for authorization and authentication and logging. Also providing CORS support.',
                    },
                ],
            },
        ],
    },
    {
        '_id': {
            '$oid': '5d5c6c6b52b65ac348575074',
        },
        'id': 'microservices',
        'name': 'Microservices',
        'panel': 'left',
        'version': '0',
        'logo': '/assets/skills/microservices.png',
        'order': '155',
        'description': 'Some awesome description',
        'projects': [
            {
                'id': 'express-recoveries-v2',
                'name': 'Express Recoveries v2',
                'companyName': 'Cox Automotive',
                'website': '',
                'github': '',
                'logo': '',
                'dateCreated': '2016-10-14',
                'cardCover': '/assets/projects/express-recoveries-v2/microservices-application.jpg',
                'images': [],
                'shortDescription': 'Enterprise level application. By decoupling a monolithic application we are used microservices  in C# .net core.',
                'longDescription': [
                    {
                        'picture': '/assets/projects/express-recoveries-v2/express-recoveries-v2.jpg',
                        'description': 'Decoupling monolith into microservices. Each service mostly running in C# .Net Core. Each container is independent and has a single responsibility, open for extension and close for modifications. Services have MVC structure and console application.',
                    },
                ],
            },
            {
                'id': 'skills-microservice',
                'name': 'Skills Microservice',
                'companyName': '',
                'website': '',
                'github': 'https://github.com/evgeniypoznyak/Skills',
                'logo': '',
                'dateCreated': '2013-05-29',
                'cardCover': '/assets/projects/skills-microservice/microservices.jpg',
                'images': [],
                'shortDescription': 'Running C# .Net Core Microservice in docker container. Service provide MVC API integration for MongoDB.',
                'longDescription': [
                    {
                        'picture': '/assets/projects/skills-microservice/skills-microservice.jpg',
                        'description': 'Containerized C# .Net Core microservice, API MVC controller accessing via repository entity, each entity have adapter dependency injected. And utilized MongoDB as data storage running in docker container also.',
                    },
                ],
            },
            {
                'id': 'ssr-reactjs-for-portfolio',
                'name': 'SSR ReactJS for Portfolio',
                'companyName': '',
                'website': '',
                'github': 'https://github.com/evgeniypoznyak/ssr-evgeniy.poznyaks.com',
                'logo': '',
                'dateCreated': '2013-05-29',
                'cardCover': '/assets/projects/ssr-evgeniy.poznyaks.com/ssr-evgeniy.poznyaks.com.jpg',
                'images': [],
                'shortDescription': 'Dockerized Server Side Rendering ReactJS + NodeJS Single Page Application. In protected routes by JWT, application provides content management system. For UI perspective Application utilizing React Material Design.',
                'longDescription': [
                    {
                        'picture': '/assets/projects/ssr-evgeniy.poznyaks.com/ssr-evgeniy.poznyaks.com-shema.jpg',
                        'description': 'Dockerized Server Side Rendering ReactJS + NodeJS Single Page Application. Utilizing React Material Design with JWT for protected routes. ReactJS is been used in two ways - one for server side rendering and another for browser. All React components can be loaded without JavaScript support, this provide amazingSearch Engine Optimization and all routes will be fetched by NodeJS server. If browser JavaScript will be enabled, then all preloaded elements will be replaced by ReactJS and all routes dynamically will be fetched from browser. All sensitive routes protected by JWT in API Gateway server.',
                    },
                ],
            },
            {
                'id': 'api-gateway-for-portfolio',
                'name': 'API Gateway for Portfolio',
                'companyName': '',
                'website': 'https://api.evgeniy.poznyaks.com/',
                'github': 'https://github.com/evgeniypoznyak/nodejs-gateway-typescript',
                'logo': '',
                'dateCreated': '2013-05-29',
                'cardCover': '/assets/projects/api-gateway-for-portfolio/cover.jpg',
                'images': [],
                'shortDescription': 'NodeJS API Gateway in docker. Used TypeScript with JWT and MongoDB for authorization and authentication.',
                'longDescription': [
                    {
                        'picture': '/assets/projects/api-gateway-for-portfolio/api-gateway-for-portfolio.jpg',
                        'description': 'Running in VPS via Apache server as a proxy to NodeJS. Application NodeJS API Gateway runs in docker. Utilizing JWT and MongoDB for authorization and authentication and logging. Also providing CORS support.',
                    },
                ],
            },
        ],
    },
    {
        '_id': {
            '$oid': '5d5c6c6b52b65ac34857506d',
        },
        'id': 'vue',
        'name': 'VueJS',
        'panel': 'right',
        'version': '0',
        'logo': '/assets/skills/vue.png',
        'order': '166',
        'description': 'I think Vue have big future. It isomorphic same as React. Vue could be well structured same as Angular. I build a simple project with Vue as widgets. Project not a Singe Page Application with all complexity, but it does all bindings and form validations, what applications commonly uses.',
        'projects': [
            {
                'id': 'service-group',
                'name': 'Service Group',
                'companyName': 'Cox Automotive',
                'website': '',
                'github': '',
                'logo': '',
                'dateCreated': '2013-05-29',
                'cardCover': '/assets/projects/service-group/service-group-cover.jpg',
                'images': [],
                'shortDescription': 'Vue was used as widgets in twig templates from Symfony4.',
                'longDescription': [
                    {
                        'picture': '/assets/projects/service-group/service-group.jpg',
                        'description': 'Vue was used as widgets in twig templates from Symfony4. Vue utilizing Bootstrap 4 with CSS animations for UI.',
                    },
                ],
            },
        ],
    },
    {
        '_id': {
            '$oid': '5d5c6c6b52b65ac34857506e',
        },
        'id': 'python',
        'name': 'Python',
        'panel': 'left',
        'version': '3',
        'logo': '/assets/skills/python.png',
        'order': '177',
        'description': 'Some awesome description',
        'projects': [],
    },
    {
        '_id': {
            '$oid': '5d5c6c6b52b65ac34857507b',
        },
        'id': 'dynamodb',
        'name': 'DynamoDB',
        'panel': 'left',
        'version': '55',
        'logo': '/assets/skills/dynamodb.png',
        'order': '188',
        'description': 'I start using DynamoDB for microservices. Data base very similar to MongoDb, a lot of optimizations hidden under the hood.',
        'projects': [
            {
                'id': 'express-recoveries-v2',
                'name': 'Express Recoveries v2',
                'companyName': 'Cox Automotive',
                'website': '',
                'github': '',
                'logo': '',
                'dateCreated': '2016-10-14',
                'cardCover': '/assets/projects/express-recoveries-v2/microservices-application.jpg',
                'images': [],
                'shortDescription': 'Enterprise level application. By decoupling a monolithic application we are used microservices in C# .net core. With MongoDB and DynamoDB',
                'longDescription': [
                    {
                        'picture': '/assets/projects/express-recoveries-v2/express-recoveries-v2.jpg',
                        'description': 'Enterprise level application. Connect together high complexity API, workflows and different systems integrations. With IP range protection layer, client can access to application via UI, sftp protocol or via AWS Gateway and microservices. Some scripts are running daily with cron jobs. Frontend was build in AngularJS with Angular AgGrid. Also by decoupling monolithic application we are introduced are microservices (C# with .Net Core) with MongoDB and DynamoDB running in docker container and frontend for them in React.',
                    },
                ],
            },
        ],
    },
    {
        '_id': {
            '$oid': '5d5c6c6b52b65ac348575088',
        },
        'id': 'material-ui',
        'name': 'Material UI',
        'panel': 'right',
        'version': '0',
        'logo': '/assets/skills/material-ui.png',
        'order': '199',
        'description': 'Some awesome description',
        'projects': [
            {
                'id': 'express-digital-media',
                'name': 'Express Digital Media',
                'companyName': 'Cox Automotive',
                'website': '',
                'github': '',
                'logo': '',
                'dateCreated': '2016-10-14',
                'cardCover': '/assets/projects/express-digital-media/cover.jpg',
                'images': [],
                'shortDescription': 'Created as a demo application with Angular and TypeScript, Angular Material and API Interfaces with Abstract Factory Pattern.',
                'longDescription': [
                    {
                        'picture': '/assets/projects/express-digital-media/express-digital-media.jpg',
                        'description': 'Domain model was used for designing this application. All complex API responses layered into TypeScript Interfaces and Injected with Abstract Factory Pattern. Angular Material was used in many scenarios for steppers as “wizard”, for complex form elements with custom validators and custom UI errors.',
                    },
                ],
            },
            {
                'id': 'express-recoveries-v2',
                'name': 'Express Recoveries v2',
                'companyName': 'Cox Automotive',
                'website': '',
                'github': '',
                'logo': '',
                'dateCreated': '2016-10-14',
                'cardCover': '/assets/projects/express-recoveries-v2/microservices-application.jpg',
                'images': [],
                'shortDescription': 'A lot of prototypes, POC, and demo models build in Angular with TypeScript. For frontend Angular utilized Bootstrap 4 and Angular Material.',
                'longDescription': [],
            },
            {
                'id': 'ssr-reactjs-for-portfolio',
                'name': 'SSR ReactJS for Portfolio',
                'companyName': '',
                'website': '',
                'github': 'https://github.com/evgeniypoznyak/ssr-evgeniy.poznyaks.com',
                'logo': '',
                'dateCreated': '2013-05-29',
                'cardCover': '/assets/projects/ssr-evgeniy.poznyaks.com/ssr-evgeniy.poznyaks.com.jpg',
                'images': [],
                'shortDescription': 'Dockerized Server Side Rendering ReactJS + NodeJS Single Page Application. In protected routes by JWT, application provides content management system. For UI perspective Application utilizing React Material Design.',
                'longDescription': [
                    {
                        'picture': '/assets/projects/ssr-evgeniy.poznyaks.com/ssr-evgeniy.poznyaks.com-shema.jpg',
                        'description': 'Dockerized Server Side Rendering ReactJS + NodeJS Single Page Application. Utilizing React Material Design with JWT for protected routes. ReactJS is been used in two ways - one for server side rendering and another for browser. All React components can be loaded without JavaScript support, this provide amazingSearch Engine Optimization and all routes will be fetched by NodeJS server. If browser JavaScript will be enabled, then all preloaded elements will be replaced by ReactJS and all routes dynamically will be fetched from browser. All sensitive routes protected by JWT in API Gateway server.',
                    },
                ],
            },
        ],
    },
    {
        '_id': {
            '$oid': '5d5c6c6b52b65ac34857507c',
        },
        'id': 'design-patterns',
        'name': 'Design Patterns',
        'panel': 'right',
        'version': '',
        'logo': '/assets/skills/design-patterns.png',
        'order': '211',
        'description': 'Some awesome description',
        'projects': [
            {
                'id': 'express-recoveries-v2',
                'name': 'Express Recoveries v2',
                'companyName': 'Cox Automotive',
                'website': '',
                'github': '',
                'logo': '',
                'dateCreated': '2016-10-14',
                'cardCover': '/assets/projects/express-recoveries-v2/microservices-application.jpg',
                'images': [],
                'shortDescription': 'Enterprise level application. By decoupling a monolithic application we are used microservices  in C# .net core.',
                'longDescription': [
                    {
                        'picture': '/assets/projects/express-recoveries-v2/express-recoveries-v2.jpg',
                        'description': 'Decoupling monolith into microservices. Each service mostly running in C# .Net Core. Each container is independent and has a single responsibility, open for extension and close for modifications. Services have MVC structure and console application.',
                    },
                ],
            },
            {
                'id': 'skills-microservice',
                'name': 'Skills Microservice',
                'companyName': '',
                'website': '',
                'github': 'https://github.com/evgeniypoznyak/Skills',
                'logo': '',
                'dateCreated': '2013-05-29',
                'cardCover': '/assets/projects/skills-microservice/microservices.jpg',
                'images': [],
                'shortDescription': 'Running C# .Net Core Microservice in docker container. Service provide MVC API integration for MongoDB.',
                'longDescription': [
                    {
                        'picture': '/assets/projects/skills-microservice/skills-microservice.jpg',
                        'description': 'Containerized C# .Net Core microservice, API MVC controller accessing via repository entity, each entity have adapter dependency injected. And utilized MongoDB as data storage running in docker container also.',
                    },
                ],
            },
            {
                'id': 'express-digital-media',
                'name': 'Express Digital Media',
                'companyName': 'Cox Automotive',
                'website': '',
                'github': '',
                'logo': '',
                'dateCreated': '2016-10-14',
                'cardCover': '/assets/projects/express-digital-media/cover.jpg',
                'images': [],
                'shortDescription': 'Created as a demo application with Angular and TypeScript, Angular Material and API Interfaces with Abstract Factory Pattern.',
                'longDescription': [
                    {
                        'picture': '/assets/projects/express-digital-media/express-digital-media.jpg',
                        'description': 'Domain model was used for designing this application. All complex API responses layered into TypeScript Interfaces and Injected with Abstract Factory Pattern. Angular Material was used in many scenarios for steppers as “wizard”, for complex form elements with custom validators and custom UI errors.',
                    },
                ],
            },
            {
                'id': 'service-group',
                'name': 'Service Group',
                'companyName': 'Cox Automotive',
                'website': '',
                'github': '',
                'logo': '',
                'dateCreated': '2013-05-29',
                'cardCover': '/assets/projects/service-group/service-group-cover.jpg',
                'images': [],
                'shortDescription': 'Symfony 4 project used twig templates with Vue widgets and Bootstrap 4',
                'longDescription': [
                    {
                        'picture': '/assets/projects/service-group/service-group.jpg',
                        'description': 'Symfony 4 project used twig templates with Vue widgets and Bootstrap 4. For backend was used Entities with Value Objects and Repositories.',
                    },
                ],
            },
        ],
    },
    {
        '_id': {
            '$oid': '5d5c6c6b52b65ac34857507d',
        },
        'id': 'tdd',
        'name': 'TDD',
        'panel': 'right',
        'version': '0',
        'logo': '/assets/skills/tdd.png',
        'order': '222',
        'description': 'Some awesome description',
        'projects': [
            {
                'id': 'ssr-reactjs-for-portfolio',
                'name': 'SSR ReactJS for Portfolio',
                'companyName': '',
                'website': '',
                'github': 'https://github.com/evgeniypoznyak/ssr-evgeniy.poznyaks.com',
                'logo': '',
                'dateCreated': '2013-05-29',
                'cardCover': '/assets/projects/ssr-evgeniy.poznyaks.com/ssr-evgeniy.poznyaks.com.jpg',
                'images': [],
                'shortDescription': 'Dockerized Server Side Rendering ReactJS + NodeJS Single Page Application. In protected routes by JWT, application provides content management system. For UI perspective Application utilizing React Material Design.',
                'longDescription': [
                    {
                        'picture': '/assets/projects/ssr-evgeniy.poznyaks.com/ssr-evgeniy.poznyaks.com-shema.jpg',
                        'description': 'Dockerized Server Side Rendering ReactJS + NodeJS Single Page Application. Utilizing React Material Design with JWT for protected routes. ReactJS is been used in two ways - one for server side rendering and another for browser. All React components can be loaded without JavaScript support, this provide amazingSearch Engine Optimization and all routes will be fetched by NodeJS server. If browser JavaScript will be enabled, then all preloaded elements will be replaced by ReactJS and all routes dynamically will be fetched from browser. All sensitive routes protected by JWT in API Gateway server.',
                    },
                ],
            },
            {
                'id': 'express-recoveries-v2',
                'name': 'Express Recoveries v2',
                'companyName': 'Cox Automotive',
                'website': '',
                'github': '',
                'logo': '',
                'dateCreated': '2016-10-14',
                'cardCover': '/assets/projects/express-recoveries-v2/microservices-application.jpg',
                'images': [],
                'shortDescription': 'Enterprise level application. By decoupling a monolithic application we are used microservices  in C# .net core.',
                'longDescription': [
                    {
                        'picture': '/assets/projects/express-recoveries-v2/express-recoveries-v2.jpg',
                        'description': 'Decoupling monolith into microservices. Each service mostly running in C# .Net Core. Each container is independent and has a single responsibility, open for extension and close for modifications. Services have MVC structure and console application.',
                    },
                ],
            },
            {
                'id': 'skills-microservice',
                'name': 'Skills Microservice',
                'companyName': '',
                'website': '',
                'github': 'https://github.com/evgeniypoznyak/Skills',
                'logo': '',
                'dateCreated': '2013-05-29',
                'cardCover': '/assets/projects/skills-microservice/microservices.jpg',
                'images': [],
                'shortDescription': 'Running C# .Net Core Microservice in docker container. Service provide MVC API integration for MongoDB.',
                'longDescription': [
                    {
                        'picture': '/assets/projects/skills-microservice/skills-microservice.jpg',
                        'description': 'Containerized C# .Net Core microservice, API MVC controller accessing via repository entity, each entity have adapter dependency injected. And utilized MongoDB as data storage running in docker container also.',
                    },
                ],
            },
            {
                'id': 'service-group',
                'name': 'Service Group',
                'companyName': 'Cox Automotive',
                'website': '',
                'github': '',
                'logo': '',
                'dateCreated': '2013-05-29',
                'cardCover': '/assets/projects/service-group/service-group-cover.jpg',
                'images': [],
                'shortDescription': 'Symfony 4 project used twig templates with Vue widgets and Bootstrap 4',
                'longDescription': [
                    {
                        'picture': '/assets/projects/service-group/service-group.jpg',
                        'description': 'Symfony 4 project used twig templates with Vue widgets and Bootstrap 4. For backend was used Entities with Value Objects and Repositories.',
                    },
                ],
            },
        ],
    },
    {
        '_id': {
            '$oid': '5d5c6c6b52b65ac34857507e',
        },
        'id': 'solid',
        'name': 'SOLID',
        'panel': 'right',
        'version': '0',
        'logo': '/assets/skills/solid.png',
        'order': '233',
        'description': 'Some awesome description',
        'projects': [
            {
                'id': 'ssr-reactjs-for-portfolio',
                'name': 'SSR ReactJS for Portfolio',
                'companyName': '',
                'website': '',
                'github': 'https://github.com/evgeniypoznyak/ssr-evgeniy.poznyaks.com',
                'logo': '',
                'dateCreated': '2013-05-29',
                'cardCover': '/assets/projects/ssr-evgeniy.poznyaks.com/ssr-evgeniy.poznyaks.com.jpg',
                'images': [],
                'shortDescription': 'Dockerized Server Side Rendering ReactJS + NodeJS Single Page Application. In protected routes by JWT, application provides content management system. For UI perspective Application utilizing React Material Design.',
                'longDescription': [
                    {
                        'picture': '/assets/projects/ssr-evgeniy.poznyaks.com/ssr-evgeniy.poznyaks.com-shema.jpg',
                        'description': 'Dockerized Server Side Rendering ReactJS + NodeJS Single Page Application. Utilizing React Material Design with JWT for protected routes. ReactJS is been used in two ways - one for server side rendering and another for browser. All React components can be loaded without JavaScript support, this provide amazingSearch Engine Optimization and all routes will be fetched by NodeJS server. If browser JavaScript will be enabled, then all preloaded elements will be replaced by ReactJS and all routes dynamically will be fetched from browser. All sensitive routes protected by JWT in API Gateway server.',
                    },
                ],
            },
            {
                'id': 'express-recoveries-v2',
                'name': 'Express Recoveries v2',
                'companyName': 'Cox Automotive',
                'website': '',
                'github': '',
                'logo': '',
                'dateCreated': '2016-10-14',
                'cardCover': '/assets/projects/express-recoveries-v2/microservices-application.jpg',
                'images': [],
                'shortDescription': 'Enterprise level application. By decoupling a monolithic application we are used microservices  in C# .net core.',
                'longDescription': [
                    {
                        'picture': '/assets/projects/express-recoveries-v2/express-recoveries-v2.jpg',
                        'description': 'Decoupling monolith into microservices. Each service mostly running in C# .Net Core. Each container is independent and has a single responsibility, open for extension and close for modifications. Services have MVC structure and console application.',
                    },
                ],
            },
            {
                'id': 'skills-microservice',
                'name': 'Skills Microservice',
                'companyName': '',
                'website': '',
                'github': 'https://github.com/evgeniypoznyak/Skills',
                'logo': '',
                'dateCreated': '2013-05-29',
                'cardCover': '/assets/projects/skills-microservice/microservices.jpg',
                'images': [],
                'shortDescription': 'Running C# .Net Core Microservice in docker container. Service provide MVC API integration for MongoDB.',
                'longDescription': [
                    {
                        'picture': '/assets/projects/skills-microservice/skills-microservice.jpg',
                        'description': 'Containerized C# .Net Core microservice, API MVC controller accessing via repository entity, each entity have adapter dependency injected. And utilized MongoDB as data storage running in docker container also.',
                    },
                ],
            },
            {
                'id': 'service-group',
                'name': 'Service Group',
                'companyName': 'Cox Automotive',
                'website': '',
                'github': '',
                'logo': '',
                'dateCreated': '2013-05-29',
                'cardCover': '/assets/projects/service-group/service-group-cover.jpg',
                'images': [],
                'shortDescription': 'Symfony 4 project used twig templates with Vue widgets and Bootstrap 4',
                'longDescription': [
                    {
                        'picture': '/assets/projects/service-group/service-group.jpg',
                        'description': 'Symfony 4 project used twig templates with Vue widgets and Bootstrap 4. For backend was used Entities with Value Objects and Repositories.',
                    },
                ],
            },
            {
                'id': 'api-gateway-for-portfolio',
                'name': 'API Gateway for Portfolio',
                'companyName': '',
                'website': 'https://api.evgeniy.poznyaks.com/',
                'github': 'https://github.com/evgeniypoznyak/nodejs-gateway-typescript',
                'logo': '',
                'dateCreated': '2013-05-29',
                'cardCover': '/assets/projects/api-gateway-for-portfolio/cover.jpg',
                'images': [],
                'shortDescription': 'NodeJS API Gateway in docker. Used TypeScript with JWT and MongoDB for authorization and authentication.',
                'longDescription': [
                    {
                        'picture': '/assets/projects/api-gateway-for-portfolio/api-gateway-for-portfolio.jpg',
                        'description': 'Running in VPS via Apache server as a proxy to NodeJS. Application NodeJS API Gateway runs in docker. Utilizing JWT and MongoDB for authorization and authentication and logging. Also providing CORS support.',
                    },
                ],
            },
        ],
    },
    {
        '_id': {
            '$oid': '5d5c6c6b52b65ac34857507f',
        },
        'id': 'ddd',
        'name': 'DDD',
        'panel': 'right',
        'version': '0',
        'logo': '/assets/skills/ddd.gif',
        'order': '244',
        'description': 'Some awesome description',
        'projects': [
            {
                'id': 'ssr-reactjs-for-portfolio',
                'name': 'SSR ReactJS for Portfolio',
                'companyName': '',
                'website': '',
                'github': 'https://github.com/evgeniypoznyak/ssr-evgeniy.poznyaks.com',
                'logo': '',
                'dateCreated': '2013-05-29',
                'cardCover': '/assets/projects/ssr-evgeniy.poznyaks.com/ssr-evgeniy.poznyaks.com.jpg',
                'images': [],
                'shortDescription': 'Dockerized Server Side Rendering ReactJS + NodeJS Single Page Application. In protected routes by JWT, application provides content management system. For UI perspective Application utilizing React Material Design.',
                'longDescription': [
                    {
                        'picture': '/assets/projects/ssr-evgeniy.poznyaks.com/ssr-evgeniy.poznyaks.com-shema.jpg',
                        'description': 'Dockerized Server Side Rendering ReactJS + NodeJS Single Page Application. Utilizing React Material Design with JWT for protected routes. ReactJS is been used in two ways - one for server side rendering and another for browser. All React components can be loaded without JavaScript support, this provide amazingSearch Engine Optimization and all routes will be fetched by NodeJS server. If browser JavaScript will be enabled, then all preloaded elements will be replaced by ReactJS and all routes dynamically will be fetched from browser. All sensitive routes protected by JWT in API Gateway server.',
                    },
                ],
            },
            {
                'id': 'express-recoveries-v2',
                'name': 'Express Recoveries v2',
                'companyName': 'Cox Automotive',
                'website': '',
                'github': '',
                'logo': '',
                'dateCreated': '2016-10-14',
                'cardCover': '/assets/projects/express-recoveries-v2/microservices-application.jpg',
                'images': [],
                'shortDescription': 'Enterprise level application. By decoupling a monolithic application we are used microservices  in C# .net core.',
                'longDescription': [
                    {
                        'picture': '/assets/projects/express-recoveries-v2/express-recoveries-v2.jpg',
                        'description': 'Decoupling monolith into microservices. Each service mostly running in C# .Net Core. Each container is independent and has a single responsibility, open for extension and close for modifications. Services have MVC structure and console application.',
                    },
                ],
            },
            {
                'id': 'skills-microservice',
                'name': 'Skills Microservice',
                'companyName': '',
                'website': '',
                'github': 'https://github.com/evgeniypoznyak/Skills',
                'logo': '',
                'dateCreated': '2013-05-29',
                'cardCover': '/assets/projects/skills-microservice/microservices.jpg',
                'images': [],
                'shortDescription': 'Running C# .Net Core Microservice in docker container. Service provide MVC API integration for MongoDB.',
                'longDescription': [
                    {
                        'picture': '/assets/projects/skills-microservice/skills-microservice.jpg',
                        'description': 'Containerized C# .Net Core microservice, API MVC controller accessing via repository entity, each entity have adapter dependency injected. And utilized MongoDB as data storage running in docker container also.',
                    },
                ],
            },
            {
                'id': 'service-group',
                'name': 'Service Group',
                'companyName': 'Cox Automotive',
                'website': '',
                'github': '',
                'logo': '',
                'dateCreated': '2013-05-29',
                'cardCover': '/assets/projects/service-group/service-group-cover.jpg',
                'images': [],
                'shortDescription': 'Symfony 4 project used twig templates with Vue widgets and Bootstrap 4',
                'longDescription': [
                    {
                        'picture': '/assets/projects/service-group/service-group.jpg',
                        'description': 'Symfony 4 project used twig templates with Vue widgets and Bootstrap 4. For backend was used Entities with Value Objects and Repositories.',
                    },
                ],
            },
            {
                'id': 'api-gateway-for-portfolio',
                'name': 'API Gateway for Portfolio',
                'companyName': '',
                'website': 'https://api.evgeniy.poznyaks.com/',
                'github': 'https://github.com/evgeniypoznyak/nodejs-gateway-typescript',
                'logo': '',
                'dateCreated': '2013-05-29',
                'cardCover': '/assets/projects/api-gateway-for-portfolio/cover.jpg',
                'images': [],
                'shortDescription': 'NodeJS API Gateway in docker. Used TypeScript with JWT and MongoDB for authorization and authentication.',
                'longDescription': [
                    {
                        'picture': '/assets/projects/api-gateway-for-portfolio/api-gateway-for-portfolio.jpg',
                        'description': 'Running in VPS via Apache server as a proxy to NodeJS. Application NodeJS API Gateway runs in docker. Utilizing JWT and MongoDB for authorization and authentication and logging. Also providing CORS support.',
                    },
                ],
            },
        ],
    },
    {
        '_id': {
            '$oid': '5d5c6c6b52b65ac348575085',
        },
        'id': 'jquery',
        'name': 'jQuery',
        'panel': 'right',
        'version': '0',
        'logo': '/assets/skills/jquery.png',
        'order': '255',
        'description': 'Some awesome description',
        'projects': [
            {
                'id': 'eandkphotography',
                'name': 'E&K Photography (PHP)',
                'companyName': 'E and K Photography',
                'website': 'https://eandkphoto.com',
                'github': 'https://github.com/evgeniypoznyak/eandkphoto.com',
                'logo': '',
                'dateCreated': '2013-06-18',
                'cardCover': 'https://data.eandkphoto.com/events/2015/09-september/newborn/large/EVG_73831.jpg',
                'images': [
                    {
                        'label': 'Front Page',
                        'path': '/assets/projects/eandkphoto.com/front.jpg',
                    },
                    {
                        'label': 'Grid',
                        'path': '/assets/projects/eandkphoto.com/grid.jpg',
                    },
                    {
                        'label': 'Contact Us',
                        'path': '/assets/projects/eandkphoto.com/contact-us.jpg',
                    },
                    {
                        'label': 'Social Page',
                        'path': '/assets/projects/eandkphoto.com/social.jpg',
                    },
                    {
                        'label': 'Portfolio Page',
                        'path': '/assets/projects/eandkphoto.com/portfolio.jpg',
                    },
                ],
                'shortDescription': 'In very beginning I created this website from scratch on vanilla PHP. Today this website is completely different.',
                'longDescription': [
                    {
                        'picture': '/assets/projects/eandkphoto.com/eandkphoto_php.jpg',
                        'description': 'Project was lived in Virtual Private Server (VPS), used Apache Server on Linux system. Filesystem is been used to display list of pictures by year, month and date. Contact Us form utilized Google API such as reCaptcha. User data was stored in MySQL.',
                    },
                ],
            },
            {
                'id': 'evgeniy.poznyaks.com_v1',
                'name': 'Portfolio Website',
                'companyName': '',
                'website': 'https://evgeniy.poznyaks.com',
                'github': 'https://github.com/evgeniypoznyak/evgeniy.poznyaks.com',
                'logo': '/assets/projects/evgeniy.poznyaks.com_v1/logo.jpg',
                'dateCreated': '2013-05-29',
                'cardCover': '',
                'shortDescription': 'Portfolio Website Build on PHP Framework Laravel with Eloquent ORM. For frontend used Bootstrap 4.',
                'images': [
                    {
                        'label': 'Front Page',
                        'path': '/assets/projects/evgeniy.poznyaks.com_v1/front.jpg',
                    },
                    {
                        'label': 'Skills',
                        'path': '/assets/projects/evgeniy.poznyaks.com_v1/skills.jpg',
                    },
                    {
                        'label': 'Professional Experience',
                        'path': '/assets/projects/evgeniy.poznyaks.com_v1/prof-exp.jpg',
                    },
                    {
                        'label': 'Personal Experience',
                        'path': '/assets/projects/evgeniy.poznyaks.com_v1/pers-exp.jpg',
                    },
                    {
                        'label': 'Project Page',
                        'path': '/assets/projects/evgeniy.poznyaks.com_v1/project-page.jpg',
                    },
                    {
                        'label': 'Contact Us',
                        'path': '/assets/projects/evgeniy.poznyaks.com_v1/contact-us.jpg',
                    },
                ],
                'longDescription': [
                    {
                        'picture': '/assets/projects/evgeniy.poznyaks.com_v1/portfolio_website_v1.jpg',
                        'description': 'Application was on VPS with Apache server. Laravel was chosen as PHP framework and for front end was blade templates with Bootstrap and jQueryUI. Eloquent was used as ORM and MySQL as a storage unit.',
                    },
                ],
            },
            {
                'id': 'video.pacificnorthern.com',
                'name': 'Internal Video Content System',
                'companyName': 'Pacific Northern Inc.',
                'website': '',
                'github': 'https://github.com/evgeniypoznyak/video.pacificnorthern.com',
                'logo': '/assets/projects/video.pacificnorthern.com/logo.jpg',
                'dateCreated': '2013-05-29',
                'cardCover': '',
                'shortDescription': 'Utilizing PHP Framework Laravel for backend and jQueryUI for frontend. A little similar to NETFLIX.',
                'images': [
                    {
                        'label': 'Folders',
                        'path': '/assets/projects/video.pacificnorthern.com/folders.jpg',
                    },
                    {
                        'label': 'Video List',
                        'path': '/assets/projects/video.pacificnorthern.com/video-list.jpg',
                    },
                    {
                        'label': 'Video Player',
                        'path': '/assets/projects/video.pacificnorthern.com/video.jpg',
                    },
                ],
                'longDescription': [
                    {
                        'picture': '/assets/projects/video.pacificnorthern.com/video.pacificnorthern.com.jpg',
                        'description': 'Laravel is handling filesystem and database connection. Also in top level user’s information passed by Active Directory. Front end build with bootstrap and jQuery UI.',
                    },
                ],
            },
            {
                'id': 'info.pndisplay.com',
                'name': 'Information for PN Display',
                'companyName': 'Pacific Northern Inc.',
                'website': 'http://info.pndisplay.com/',
                'github': '',
                'logo': '/assets/projects/info.pndisplay.com/logo.jpg',
                'dateCreated': '2013-05-29',
                'cardCover': '',
                'shortDescription': 'Simple website providing more information about E-Commerce PN Display website. Build on WordPress engine.',
                'images': [
                    {
                        'label': 'Front Page',
                        'path': '/assets/projects/info.pndisplay.com/front.jpg',
                    },
                    {
                        'label': 'List Page',
                        'path': '/assets/projects/info.pndisplay.com/list.jpg',
                    },
                    {
                        'label': 'Platforms Page',
                        'path': '/assets/projects/info.pndisplay.com/platforms.jpg',
                    },
                    {
                        'label': 'News Page',
                        'path': '/assets/projects/info.pndisplay.com/news.jpg',
                    },
                ],
                'longDescription': [],
            },
            {
                'id': 'namesday.info',
                'name': 'Names Day info',
                'companyName': 'Andrei Pervychine',
                'website': 'https://www.namesday.info/',
                'github': '',
                'logo': '',
                'dateCreated': '2013-05-29',
                'cardCover': '/assets/projects/namesday.info/cover.jpg',
                'shortDescription': 'This is was my first professional work. I worked as intern an helped with backend and frontend. Mostly my work done for frontend.',
                'images': [],
                'longDescription': [],
            },
            {
                'id': 'pacificnorthern',
                'name': 'Pacific Northern Company Website',
                'companyName': 'Pacific Northern Inc.',
                'website': 'https://www.pacificnorthern.com/',
                'github': '',
                'logo': '/assets/projects/pacificnerthern.com/logo.jpg',
                'dateCreated': '2013-05-29',
                'cardCover': '',
                'images': [
                    {
                        'label': 'Front Page',
                        'path': '/assets/projects/pacificnerthern.com/front-page.jpg',
                    },
                    {
                        'label': 'Portfolio Page',
                        'path': '/assets/projects/pacificnerthern.com/portfolio-page.jpg',
                    },
                    {
                        'label': 'Portfolio Item Page',
                        'path': '/assets/projects/pacificnerthern.com/portfolio-item-page.jpg',
                    },
                    {
                        'label': 'What We Do Page',
                        'path': '/assets/projects/pacificnerthern.com/what-we-do-page.jpg',
                    },
                    {
                        'label': 'Our Team Page',
                        'path': '/assets/projects/pacificnerthern.com/our-team-page.jpg',
                    },
                    {
                        'label': 'About Us Page',
                        'path': '/assets/projects/pacificnerthern.com/about-us-page.jpg',
                    },
                ],
                'shortDescription': 'Company presentation website for displaying company information and products. Website utilized WordPress technology.',
                'longDescription': [],
            },
            {
                'id': 'infocenter.pacificnorthern',
                'name': 'Internal Company’s Information Center',
                'companyName': 'Pacific Northern Inc.',
                'website': '',
                'github': '',
                'logo': '/assets/projects/infocenter.pacificnorthern.com/logo.jpg',
                'dateCreated': '2013-05-29',
                'cardCover': '',
                'shortDescription': 'This is company’s internal website build on WordPress and using Active Directory Integration.',
                'images': [
                    {
                        'label': 'Active Directory Cards View',
                        'path': '/assets/projects/infocenter.pacificnorthern.com/ad-cards.jpg',
                    },
                    {
                        'label': 'Front Page',
                        'path': '/assets/projects/infocenter.pacificnorthern.com/front.jpg',
                    },
                    {
                        'label': 'Active Directory List View',
                        'path': '/assets/projects/infocenter.pacificnorthern.com/ad-list.jpg',
                    },
                    {
                        'label': 'Active Directory Profile View',
                        'path': '/assets/projects/infocenter.pacificnorthern.com/profile.jpg',
                    },
                ],
                'longDescription': [
                    {
                        'picture': '/assets/projects/infocenter.pacificnorthern.com/infocenter.pacificnorthern.jpg',
                        'description': 'I created integration with windows active directory from Wordpress internal website. Cron job was kicking the script and script was updating and making record into database. After that WordPress custom build plugin pull these changes and reflect them into website.',
                    },
                ],
            },
            {
                'id': 'pndisplay.com',
                'name': 'PN Display, E-Commerce Website',
                'companyName': 'Pacific Northern Inc.',
                'website': '',
                'github': '',
                'logo': '/assets/projects/pndisplay.com/logo.jpg',
                'dateCreated': '2013-05-29',
                'cardCover': '',
                'shortDescription': 'E-Commerce Website. With custom more than 300 variations, fabrics and tiers for each product and platforms combos.',
                'images': [
                    {
                        'label': 'Front Page',
                        'path': '/assets/projects/pndisplay.com/front.jpg',
                    },
                    {
                        'label': 'Product List',
                        'path': '/assets/projects/pndisplay.com/product-list.jpg',
                    },
                    {
                        'label': 'Single Item',
                        'path': '/assets/projects/pndisplay.com/single-item.jpg',
                    },
                    {
                        'label': 'Multiple Custom Variations',
                        'path': '/assets/projects/pndisplay.com/variations.jpg',
                    },
                    {
                        'label': 'Backend Setup',
                        'path': '/assets/projects/pndisplay.com/backend-setup.jpg',
                    },
                ],
                'longDescription': [
                    {
                        'picture': '/assets/projects/pndisplay.com/pndisplay.com.jpg',
                        'description': 'Very complex WordPress/Woocomerce plugin. Plugin extends variant selections, by price tier, color, fabric and base made. Also admin can setup in custom made menu pages what exactly is going to be used by this plugin.',
                    },
                    {
                        'picture': '/assets/projects/pndisplay.com/pndisplay.com_email.jpg',
                        'description': 'Another plugin make multiple email blasts by chunks and specific time for that, witch can be configured in custom admin menu.',
                    },
                ],
            },
        ],
    },
    {
        '_id': {
            '$oid': '5d5c6c6b52b65ac348575086',
        },
        'id': 'bootstrap',
        'name': 'Bootstrap 3-4',
        'panel': 'right',
        'version': '0',
        'logo': '/assets/skills/bootstrap.png',
        'order': '266',
        'description': 'Some awesome description',
        'projects': [
            {
                'id': 'eandkphotography',
                'name': 'E and K Photography',
                'companyName': 'E and K Photography',
                'website': 'https://eandkphoto.com',
                'github': 'https://github.com/evgeniypoznyak/eandkphoto.com',
                'logo': '',
                'dateCreated': '2013-06-18',
                'cardCover': 'https://data.eandkphoto.com/events/2015/09-september/newborn/large/EVG_73831.jpg',
                'images': [
                    {
                        'label': 'Front Page',
                        'path': '/assets/projects/eandkphoto.com/front.jpg',
                    },
                    {
                        'label': 'Grid',
                        'path': '/assets/projects/eandkphoto.com/grid.jpg',
                    },
                    {
                        'label': 'Contact Us',
                        'path': '/assets/projects/eandkphoto.com/contact-us.jpg',
                    },
                    {
                        'label': 'Social Page',
                        'path': '/assets/projects/eandkphoto.com/social.jpg',
                    },
                    {
                        'label': 'Portfolio Page',
                        'path': '/assets/projects/eandkphoto.com/portfolio.jpg',
                    },
                ],
                'shortDescription': 'Custom CMS on Angular with TypeScript. With protected routes by Laravel as API backend. As UI elements for frontend Angular utilized Bootstrap 4.',
                'longDescription': [
                    {
                        'picture': '/assets/projects/eandkphoto.com/eandkphoto_angular.jpg',
                        'description': 'Custom CMS on Angular. With protected routes by Laravel as API backend. On the front page I used custom menu with bootstrap 4 buttons. All photography events preloading as infinitive scroll. Authenticated user can manage pictures, events and portfolio.',
                    },
                ],
            },
            {
                'id': 'express-recoveries-v2',
                'name': 'Express Recoveries v2',
                'companyName': 'Cox Automotive',
                'website': '',
                'github': '',
                'logo': '',
                'dateCreated': '2016-10-14',
                'cardCover': '/assets/projects/express-recoveries-v2/microservices-application.jpg',
                'images': [],
                'shortDescription': 'A lot of prototypes, POC, and demo models build in Angular with TypeScript. For frontend Angular utilized Bootstrap 4 and Angular Material.',
                'longDescription': [],
            },
            {
                'id': 'holyskete-react',
                'name': 'Holy Skete',
                'companyName': 'The Hermitage Of The Holy Protection',
                'website': 'http://holyskete.com/',
                'github': 'https://github.com/evgeniypoznyak/holy-skete',
                'logo': '/assets/projects/holyskete-react/logo.jpg',
                'dateCreated': '2013-05-29',
                'cardCover': '',
                'shortDescription': 'Complex multi-language application. Utilized React with Redux Sagas and custom UI elements. And API server for emailing, proxying and providing data.',
                'images': [
                    {
                        'label': 'Front Page',
                        'path': '/assets/projects/holyskete-react/home.jpg',
                    },
                    {
                        'label': 'Slideshow',
                        'path': '/assets/projects/holyskete-react/slideshow.jpg',
                    },
                    {
                        'label': 'Cemetery',
                        'path': '/assets/projects/holyskete-react/cemetery.jpg',
                    },
                    {
                        'label': 'Clergy',
                        'path': '/assets/projects/holyskete-react/clergy.jpg',
                    },
                    {
                        'label': 'Google Maps API',
                        'path': '/assets/projects/holyskete-react/google-maps.jpg',
                    },
                    {
                        'label': 'Contact Us',
                        'path': '/assets/projects/holyskete-react/contact-us.jpg',
                    },
                ],
                'longDescription': [
                    {
                        'picture': '/assets/projects/holyskete-react/holyskete-react-shema.jpg',
                        'description': 'Complex multi-language application. Utilized React with Redux Sagas and custom UI elements. And API server for emailing, proxying and providing data. Language changes by Redux Saga event. All side-effects handheld by Redux Saga.',
                    },
                ],
            },
            {
                'id': 'evgeniy.poznyaks.com_v1',
                'name': 'Portfolio Website',
                'companyName': '',
                'website': 'https://evgeniy.poznyaks.com',
                'github': 'https://github.com/evgeniypoznyak/evgeniy.poznyaks.com',
                'logo': '/assets/projects/evgeniy.poznyaks.com_v1/logo.jpg',
                'dateCreated': '2013-05-29',
                'cardCover': '',
                'shortDescription': 'Portfolio Website Build on PHP Framework Laravel with Eloquent ORM. For frontend used Bootstrap 4.',
                'images': [
                    {
                        'label': 'Front Page',
                        'path': '/assets/projects/evgeniy.poznyaks.com_v1/front.jpg',
                    },
                    {
                        'label': 'Skills',
                        'path': '/assets/projects/evgeniy.poznyaks.com_v1/skills.jpg',
                    },
                    {
                        'label': 'Professional Experience',
                        'path': '/assets/projects/evgeniy.poznyaks.com_v1/prof-exp.jpg',
                    },
                    {
                        'label': 'Personal Experience',
                        'path': '/assets/projects/evgeniy.poznyaks.com_v1/pers-exp.jpg',
                    },
                    {
                        'label': 'Project Page',
                        'path': '/assets/projects/evgeniy.poznyaks.com_v1/project-page.jpg',
                    },
                    {
                        'label': 'Contact Us',
                        'path': '/assets/projects/evgeniy.poznyaks.com_v1/contact-us.jpg',
                    },
                ],
                'longDescription': [
                    {
                        'picture': '/assets/projects/evgeniy.poznyaks.com_v1/portfolio_website_v1.jpg',
                        'description': 'Application was on VPS with Apache server. Laravel was chosen as PHP framework and for front end was blade templates with Bootstrap and jQueryUI. Eloquent was used as ORM and MySQL as a storage unit.',
                    },
                ],
            },
            {
                'id': 'video.pacificnorthern.com',
                'name': 'Internal Video Content System',
                'companyName': 'Pacific Northern Inc.',
                'website': '',
                'github': 'https://github.com/evgeniypoznyak/video.pacificnorthern.com',
                'logo': '/assets/projects/video.pacificnorthern.com/logo.jpg',
                'dateCreated': '2013-05-29',
                'cardCover': '',
                'shortDescription': 'Utilizing PHP Framework Laravel for backend and jQueryUI for frontend. A little similar to NETFLIX.',
                'images': [
                    {
                        'label': 'Folders',
                        'path': '/assets/projects/video.pacificnorthern.com/folders.jpg',
                    },
                    {
                        'label': 'Video List',
                        'path': '/assets/projects/video.pacificnorthern.com/video-list.jpg',
                    },
                    {
                        'label': 'Video Player',
                        'path': '/assets/projects/video.pacificnorthern.com/video.jpg',
                    },
                ],
                'longDescription': [
                    {
                        'picture': '/assets/projects/video.pacificnorthern.com/video.pacificnorthern.com.jpg',
                        'description': 'Laravel is handling filesystem and database connection. Also in top level user’s information passed by Active Directory. Front end build with bootstrap and jQuery UI.',
                    },
                ],
            },
        ],
    },
    {
        '_id': {
            '$oid': '5d5c6c6b52b65ac348575087',
        },
        'id': 'css3-html5',
        'name': 'CSS3/HTML5',
        'panel': 'right',
        'version': '0',
        'logo': '/assets/skills/html5.png',
        'order': '277',
        'description': 'Some awesome description',
        'projects': [
            {
                'id': 'eandkphotography',
                'name': 'E&K Photography (PHP)',
                'companyName': 'E and K Photography',
                'website': 'https://eandkphoto.com',
                'github': 'https://github.com/evgeniypoznyak/eandkphoto.com',
                'logo': '',
                'dateCreated': '2013-06-18',
                'cardCover': 'https://data.eandkphoto.com/events/2015/09-september/newborn/large/EVG_73831.jpg',
                'images': [
                    {
                        'label': 'Front Page',
                        'path': '/assets/projects/eandkphoto.com/front.jpg',
                    },
                    {
                        'label': 'Grid',
                        'path': '/assets/projects/eandkphoto.com/grid.jpg',
                    },
                    {
                        'label': 'Contact Us',
                        'path': '/assets/projects/eandkphoto.com/contact-us.jpg',
                    },
                    {
                        'label': 'Social Page',
                        'path': '/assets/projects/eandkphoto.com/social.jpg',
                    },
                    {
                        'label': 'Portfolio Page',
                        'path': '/assets/projects/eandkphoto.com/portfolio.jpg',
                    },
                ],
                'shortDescription': 'In very beginning I created this website from scratch on vanilla PHP. Today this website is completely different.',
                'longDescription': [
                    {
                        'picture': '/assets/projects/eandkphoto.com/eandkphoto_php.jpg',
                        'description': 'Project was lived in Virtual Private Server (VPS), used Apache Server on Linux system. Filesystem is been used to display list of pictures by year, month and date. Contact Us form utilized Google API such as reCaptcha. User data was stored in MySQL.',
                    },
                ],
            },
            {
                'id': 'wp-holyskete',
                'name': 'Holy Skete',
                'companyName': 'The Hermitage Of The Holy Protection',
                'website': 'http://holyskete.com/',
                'github': '',
                'logo': '/assets/projects/wp-holyskete.com/logo.jpg',
                'dateCreated': '2013-05-29',
                'cardCover': '',
                'shortDescription': 'Multilingual mobile responsive web platform for displaying small business. Google API integrations for reCaptcha and Google Maps.',
                'images': [
                    {
                        'label': 'Front Page',
                        'path': '/assets/projects/wp-holyskete.com/front.jpg',
                    },
                    {
                        'label': 'History',
                        'path': '/assets/projects/wp-holyskete.com/history.jpg',
                    },
                    {
                        'label': 'Cemetery',
                        'path': '/assets/projects/wp-holyskete.com/cemetery.jpg',
                    },
                    {
                        'label': 'Directions',
                        'path': '/assets/projects/wp-holyskete.com/directions.jpg',
                    },
                    {
                        'label': 'Contact Us',
                        'path': '/assets/projects/wp-holyskete.com/contact-us.jpg',
                    },
                    {
                        'label': 'About Us',
                        'path': '/assets/projects/wp-holyskete.com/about-us.jpg',
                    },
                    {
                        'label': 'Cover Page',
                        'path': '/assets/projects/wp-holyskete.com/cover.jpg',
                    },
                ],
                'longDescription': [],
            },
            {
                'id': 'express-recoveries-v1',
                'name': 'Express Recoveries v1',
                'companyName': 'Cox Automotive',
                'website': '',
                'github': '',
                'logo': '',
                'dateCreated': '2013-06-18',
                'cardCover': '',
                'images': [],
                'shortDescription': 'Enterprise level application. Connect together high complexity API, workflows and different systems integrations.',
                'longDescription': [
                    {
                        'picture': '/assets/projects/express-recoveries-v1/express-recoveries-v1.jpg',
                        'description': 'Enterprise level application. Connect together high complexity API, different workflow and variant systems integrations.\nWith IP range protection layer, client can access to application via UI or sftp protocol. Some scripts are running daily with cron jobs. Frontend was build in pure HTML/CSS and pages being rendered on the PHP server.',
                    },
                ],
            },
            {
                'id': 'express-recoveries-v2',
                'name': 'Express Recoveries v2',
                'companyName': 'Cox Automotive',
                'website': '',
                'github': '',
                'logo': '',
                'dateCreated': '2013-06-18',
                'cardCover': '/assets/projects/express-recoveries-v2/microservices-application.jpg',
                'images': [],
                'shortDescription': 'Enterprise level application. Connect together high complexity API, workflows and different systems integrations.',
                'longDescription': [
                    {
                        'picture': '/assets/projects/express-recoveries-v2/express-recoveries-v2.jpg',
                        'description': 'Enterprise level application. Connect together high complexity API, workflows and different systems integrations. With IP range protection layer, client can access to application via UI, sftp protocol or via AWS Gateway and microservices. Some scripts are running daily with cron jobs. Frontend was build in AngularJS with Angular AgGrid.\nAlso by decoupling monolithic application we are introduced are microservices (C# with .Net Core) running in docker container and frontend for them in React.',
                    },
                ],
            },
            {
                'id': 'data.holyskete.com',
                'name': 'Holy Skete API Service',
                'companyName': 'The Hermitage Of The Holy Protection',
                'website': 'https://data.holyskete.com/rss?url=https://orthochristian.com/xml/rss.xml',
                'github': 'https://github.com/evgeniypoznyak/holy-skete-data',
                'logo': '/assets/projects/holyskete-api/logo.jpg',
                'dateCreated': '2013-05-29',
                'cardCover': '/assets/projects/holyskete-api/data.holyskete.com-cover.jpg',
                'shortDescription': 'Symfony 4 based API Service. Providing Email service and XML to JSON service.',
                'images': [],
                'longDescription': [
                    {
                        'picture': '/assets/projects/holyskete-api/data.holyskete.com.jpg',
                        'description': 'Symfony 4 based API Service. Providing Email service and XML to JSON service. Basically any potential XML news feed could be parsed into JSON format and returned back to UI with CORS headers for better UI integration. In this current scenario two types of XML news feeds is been transferred over to JSON format for React multi language application.',
                    },
                ],
            },
            {
                'id': 'service-group',
                'name': 'Service Group',
                'companyName': 'Cox Automotive',
                'website': '',
                'github': '',
                'logo': '',
                'dateCreated': '2013-05-29',
                'cardCover': '/assets/projects/service-group/service-group-cover.jpg',
                'images': [],
                'shortDescription': 'Symfony 4 project used twig templates with Vue widgets and Bootstrap 4',
                'longDescription': [
                    {
                        'picture': '/assets/projects/service-group/service-group.jpg',
                        'description': 'Symfony 4 project used twig templates with Vue widgets and Bootstrap 4. For backend was used Entities with Value Objects and Repositories.',
                    },
                ],
            },
            {
                'id': 'data.eandkphoto.com',
                'name': 'E&K Photo API Service',
                'companyName': 'E and K Photography',
                'website': 'https://data.eandkphoto.com/',
                'github': 'https://github.com/evgeniypoznyak/data.eandkphoto.com',
                'logo': '',
                'dateCreated': '2013-05-29',
                'cardCover': '/assets/projects/data-eandkphoto.com/data-eandkphoto.com-cover.jpg',
                'shortDescription': 'API Service build in Laravel. Utilized JWT for authentication/authorization purposes. Used Eloquent model as ORM, MySQL as database and filesystem.',
                'images': [],
                'longDescription': [
                    {
                        'picture': '/assets/projects/data-eandkphoto.com/data-eandkphoto.com.jpg',
                        'description': 'API Service build in Laravel. Used Eloquent model as ORM. Fully CRUD service with JWT protected sensitive routes. Receiving data as binary from Angular and passed into database and file systems according to business needs.\nService also taking care of emailing into Google Gmail API.',
                    },
                ],
            },
            {
                'id': 'evgeniy.poznyaks.com_v1',
                'name': 'Portfolio Website',
                'companyName': '',
                'website': 'https://evgeniy.poznyaks.com',
                'github': 'https://github.com/evgeniypoznyak/evgeniy.poznyaks.com',
                'logo': '/assets/projects/evgeniy.poznyaks.com_v1/logo.jpg',
                'dateCreated': '2013-05-29',
                'cardCover': '',
                'shortDescription': 'Portfolio Website Build on PHP Framework Laravel with Eloquent ORM. For frontend used Bootstrap 4.',
                'images': [
                    {
                        'label': 'Front Page',
                        'path': '/assets/projects/evgeniy.poznyaks.com_v1/front.jpg',
                    },
                    {
                        'label': 'Skills',
                        'path': '/assets/projects/evgeniy.poznyaks.com_v1/skills.jpg',
                    },
                    {
                        'label': 'Professional Experience',
                        'path': '/assets/projects/evgeniy.poznyaks.com_v1/prof-exp.jpg',
                    },
                    {
                        'label': 'Personal Experience',
                        'path': '/assets/projects/evgeniy.poznyaks.com_v1/pers-exp.jpg',
                    },
                    {
                        'label': 'Project Page',
                        'path': '/assets/projects/evgeniy.poznyaks.com_v1/project-page.jpg',
                    },
                    {
                        'label': 'Contact Us',
                        'path': '/assets/projects/evgeniy.poznyaks.com_v1/contact-us.jpg',
                    },
                ],
                'longDescription': [
                    {
                        'picture': '/assets/projects/evgeniy.poznyaks.com_v1/portfolio_website_v1.jpg',
                        'description': 'Application was on VPS with Apache server. Laravel was chosen as PHP framework and for front end was blade templates with Bootstrap and jQueryUI. Eloquent was used as ORM and MySQL as a storage unit.',
                    },
                ],
            },
            {
                'id': 'pacificnorthern',
                'name': 'Pacific Northern Company Website',
                'companyName': 'Pacific Northern Inc.',
                'website': 'https://www.pacificnorthern.com/',
                'github': '',
                'logo': '/assets/projects/pacificnerthern.com/logo.jpg',
                'dateCreated': '2013-05-29',
                'cardCover': '',
                'images': [
                    {
                        'label': 'Front Page',
                        'path': '/assets/projects/pacificnerthern.com/front-page.jpg',
                    },
                    {
                        'label': 'Portfolio Page',
                        'path': '/assets/projects/pacificnerthern.com/portfolio-page.jpg',
                    },
                    {
                        'label': 'Portfolio Item Page',
                        'path': '/assets/projects/pacificnerthern.com/portfolio-item-page.jpg',
                    },
                    {
                        'label': 'What We Do Page',
                        'path': '/assets/projects/pacificnerthern.com/what-we-do-page.jpg',
                    },
                    {
                        'label': 'Our Team Page',
                        'path': '/assets/projects/pacificnerthern.com/our-team-page.jpg',
                    },
                    {
                        'label': 'About Us Page',
                        'path': '/assets/projects/pacificnerthern.com/about-us-page.jpg',
                    },
                ],
                'shortDescription': 'Company presentation website for displaying company information and products. Website utilized WordPress technology.',
                'longDescription': [],
            },
            {
                'id': 'infocenter.pacificnorthern',
                'name': 'Internal Company’s Information Center',
                'companyName': 'Pacific Northern Inc.',
                'website': '',
                'github': '',
                'logo': '/assets/projects/infocenter.pacificnorthern.com/logo.jpg',
                'dateCreated': '2013-05-29',
                'cardCover': '',
                'shortDescription': 'This is company’s internal website build on WordPress and using Active Directory Integration.',
                'images': [
                    {
                        'label': 'Active Directory Cards View',
                        'path': '/assets/projects/infocenter.pacificnorthern.com/ad-cards.jpg',
                    },
                    {
                        'label': 'Front Page',
                        'path': '/assets/projects/infocenter.pacificnorthern.com/front.jpg',
                    },
                    {
                        'label': 'Active Directory List View',
                        'path': '/assets/projects/infocenter.pacificnorthern.com/ad-list.jpg',
                    },
                    {
                        'label': 'Active Directory Profile View',
                        'path': '/assets/projects/infocenter.pacificnorthern.com/profile.jpg',
                    },
                ],
                'longDescription': [
                    {
                        'picture': '/assets/projects/infocenter.pacificnorthern.com/infocenter.pacificnorthern.jpg',
                        'description': 'I created integration with windows active directory from Wordpress internal website. Cron job was kicking the script and script was updating and making record into database. After that WordPress custom build plugin pull these changes and reflect them into website.',
                    },
                ],
            },
            {
                'id': 'pndisplay.com',
                'name': 'PN Display, E-Commerce Website',
                'companyName': 'Pacific Northern Inc.',
                'website': '',
                'github': '',
                'logo': '/assets/projects/pndisplay.com/logo.jpg',
                'dateCreated': '2013-05-29',
                'cardCover': '',
                'shortDescription': 'E-Commerce Website. With custom more than 300 variations, fabrics and tiers for each product and platforms combos.',
                'images': [
                    {
                        'label': 'Front Page',
                        'path': '/assets/projects/pndisplay.com/front.jpg',
                    },
                    {
                        'label': 'Product List',
                        'path': '/assets/projects/pndisplay.com/product-list.jpg',
                    },
                    {
                        'label': 'Single Item',
                        'path': '/assets/projects/pndisplay.com/single-item.jpg',
                    },
                    {
                        'label': 'Multiple Custom Variations',
                        'path': '/assets/projects/pndisplay.com/variations.jpg',
                    },
                    {
                        'label': 'Backend Setup',
                        'path': '/assets/projects/pndisplay.com/backend-setup.jpg',
                    },
                ],
                'longDescription': [
                    {
                        'picture': '/assets/projects/pndisplay.com/pndisplay.com.jpg',
                        'description': 'Very complex WordPress/Woocomerce plugin. Plugin extends variant selections, by price tier, color, fabric and base made. Also admin can setup in custom made menu pages what exactly is going to be used by this plugin.',
                    },
                    {
                        'picture': '/assets/projects/pndisplay.com/pndisplay.com_email.jpg',
                        'description': 'Another plugin make multiple email blasts by chunks and specific time for that, witch can be configured in custom admin menu.',
                    },
                ],
            },
            {
                'id': 'video.pacificnorthern.com',
                'name': 'Internal Video Content System',
                'companyName': 'Pacific Northern Inc.',
                'website': '',
                'github': 'https://github.com/evgeniypoznyak/video.pacificnorthern.com',
                'logo': '/assets/projects/video.pacificnorthern.com/logo.jpg',
                'dateCreated': '2013-05-29',
                'cardCover': '',
                'shortDescription': 'Utilizing PHP Framework Laravel for backend and jQueryUI for frontend. A little similar to NETFLIX.',
                'images': [
                    {
                        'label': 'Folders',
                        'path': '/assets/projects/video.pacificnorthern.com/folders.jpg',
                    },
                    {
                        'label': 'Video List',
                        'path': '/assets/projects/video.pacificnorthern.com/video-list.jpg',
                    },
                    {
                        'label': 'Video Player',
                        'path': '/assets/projects/video.pacificnorthern.com/video.jpg',
                    },
                ],
                'longDescription': [
                    {
                        'picture': '/assets/projects/video.pacificnorthern.com/video.pacificnorthern.com.jpg',
                        'description': 'Laravel is handling filesystem and database connection. Also in top level user’s information passed by Active Directory. Front end build with bootstrap and jQuery UI.',
                    },
                ],
            },
            {
                'id': 'info.pndisplay.com',
                'name': 'Information for PN Display',
                'companyName': 'Pacific Northern Inc.',
                'website': 'http://info.pndisplay.com/',
                'github': '',
                'logo': '/assets/projects/info.pndisplay.com/logo.jpg',
                'dateCreated': '2013-05-29',
                'cardCover': '',
                'shortDescription': 'Simple website providing more information about E-Commerce PN Display website. Build on WordPress engine.',
                'images': [
                    {
                        'label': 'Front Page',
                        'path': '/assets/projects/info.pndisplay.com/front.jpg',
                    },
                    {
                        'label': 'List Page',
                        'path': '/assets/projects/info.pndisplay.com/list.jpg',
                    },
                    {
                        'label': 'Platforms Page',
                        'path': '/assets/projects/info.pndisplay.com/platforms.jpg',
                    },
                    {
                        'label': 'News Page',
                        'path': '/assets/projects/info.pndisplay.com/news.jpg',
                    },
                ],
                'longDescription': [],
            },
            {
                'id': 'namesday.info',
                'name': 'Names Day info',
                'companyName': 'Andrei Pervychine',
                'website': 'https://www.namesday.info/',
                'github': '',
                'logo': '',
                'dateCreated': '2013-05-29',
                'cardCover': '/assets/projects/namesday.info/cover.jpg',
                'shortDescription': 'This is was my first professional work. I worked as intern an helped with backend and frontend. Mostly my work done for frontend.',
                'images': [],
                'longDescription': [],
            },
            {
                'id': 'wordpress.poznyaks.com',
                'name': 'WordPress Plugins Website',
                'companyName': 'WordPress',
                'website': 'https://wordpress.poznyaks.com/',
                'github': 'https://github.com/evgeniypoznyak/poznyaks.com.wordpress',
                'logo': '',
                'dateCreated': '2017-03-24',
                'cardCover': '',
                'shortDescription': 'Information website for my WordPress plugins. Build in vanilla PHP with Object Oriented Design Model. And Google API for ReCaptcha.',
                'images': [
                    {
                        'label': 'Front Page',
                        'path': '/assets/projects/wordpress.poznyaks.com/front.jpg',
                    },
                    {
                        'label': 'Project Page',
                        'path': '/assets/projects/wordpress.poznyaks.com/project.jpg',
                    },
                    {
                        'label': 'Contact Us Page',
                        'path': '/assets/projects/wordpress.poznyaks.com/contact-us.jpg',
                    },
                ],
                'longDescription': [
                    {
                        'picture': '/assets/projects/wordpress.poznyaks.com/wordpress.poznyaks.com.jpg',
                        'description': 'Simple application with backend in Object Oriented Design in PHP and front end just HTML/CSS.',
                    },
                ],
            },
        ],
    },
    {
        '_id': {
            '$oid': '5d5c6c6b52b65ac348575089',
        },
        'id': 'seo',
        'name': 'SEO',
        'panel': 'right',
        'version': '0',
        'logo': '/assets/skills/seo.png',
        'order': '288',
        'description': 'Some awesome description',
        'projects': [
            {
                'id': 'ssr-reactjs-for-portfolio',
                'name': 'SSR ReactJS for Portfolio',
                'companyName': '',
                'website': '',
                'github': 'https://github.com/evgeniypoznyak/ssr-evgeniy.poznyaks.com',
                'logo': '',
                'dateCreated': '2013-05-29',
                'cardCover': '/assets/projects/ssr-evgeniy.poznyaks.com/ssr-evgeniy.poznyaks.com.jpg',
                'images': [],
                'shortDescription': 'Running in docker Server Side Rendering ReactJS application with Material Design and logging into MongoDB.',
                'longDescription': [
                    {
                        'picture': '/assets/projects/ssr-evgeniy.poznyaks.com/ssr-evgeniy.poznyaks.com-shema.jpg',
                        'description': 'Running in VPS via Apache server as a proxy to NodeJS. Dockerized Server Side Rendering ReactJS application utilizing Material Design and logging into MongoDB. For storing simple files such as resume and biography application utilizing NodeJS IO library to store locally in the NodeJS server.',
                    },
                ],
            },
            {
                'id': 'eandkphotography',
                'name': 'E&K Photography (PHP)',
                'companyName': 'E and K Photography',
                'website': 'https://eandkphoto.com',
                'github': 'https://github.com/evgeniypoznyak/eandkphoto.com',
                'logo': '',
                'dateCreated': '2013-06-18',
                'cardCover': 'https://data.eandkphoto.com/events/2015/09-september/newborn/large/EVG_73831.jpg',
                'images': [
                    {
                        'label': 'Front Page',
                        'path': '/assets/projects/eandkphoto.com/front.jpg',
                    },
                    {
                        'label': 'Grid',
                        'path': '/assets/projects/eandkphoto.com/grid.jpg',
                    },
                    {
                        'label': 'Contact Us',
                        'path': '/assets/projects/eandkphoto.com/contact-us.jpg',
                    },
                    {
                        'label': 'Social Page',
                        'path': '/assets/projects/eandkphoto.com/social.jpg',
                    },
                    {
                        'label': 'Portfolio Page',
                        'path': '/assets/projects/eandkphoto.com/portfolio.jpg',
                    },
                ],
                'shortDescription': 'In very beginning I created this website from scratch on vanilla PHP. Today this website is completely different.',
                'longDescription': [
                    {
                        'picture': '/assets/projects/eandkphoto.com/eandkphoto_php.jpg',
                        'description': 'Project was lived in Virtual Private Server (VPS), used Apache Server on Linux system. Filesystem is been used to display list of pictures by year, month and date. Contact Us form utilized Google API such as reCaptcha. User data was stored in MySQL.',
                    },
                ],
            },
            {
                'id': 'evgeniy.poznyaks.com_v1',
                'name': 'Portfolio Website',
                'companyName': '',
                'website': 'https://evgeniy.poznyaks.com',
                'github': 'https://github.com/evgeniypoznyak/evgeniy.poznyaks.com',
                'logo': '/assets/projects/evgeniy.poznyaks.com_v1/logo.jpg',
                'dateCreated': '2013-05-29',
                'cardCover': '',
                'shortDescription': 'Portfolio Website Build on PHP Framework Laravel with Eloquent ORM. For frontend used Bootstrap 4.',
                'images': [
                    {
                        'label': 'Front Page',
                        'path': '/assets/projects/evgeniy.poznyaks.com_v1/front.jpg',
                    },
                    {
                        'label': 'Skills',
                        'path': '/assets/projects/evgeniy.poznyaks.com_v1/skills.jpg',
                    },
                    {
                        'label': 'Professional Experience',
                        'path': '/assets/projects/evgeniy.poznyaks.com_v1/prof-exp.jpg',
                    },
                    {
                        'label': 'Personal Experience',
                        'path': '/assets/projects/evgeniy.poznyaks.com_v1/pers-exp.jpg',
                    },
                    {
                        'label': 'Project Page',
                        'path': '/assets/projects/evgeniy.poznyaks.com_v1/project-page.jpg',
                    },
                    {
                        'label': 'Contact Us',
                        'path': '/assets/projects/evgeniy.poznyaks.com_v1/contact-us.jpg',
                    },
                ],
                'longDescription': [
                    {
                        'picture': '/assets/projects/evgeniy.poznyaks.com_v1/portfolio_website_v1.jpg',
                        'description': 'Application was on VPS with Apache server. Laravel was chosen as PHP framework and for front end was blade templates with Bootstrap and jQueryUI. Eloquent was used as ORM and MySQL as a storage unit.',
                    },
                ],
            },
            {
                'id': 'pndisplay.com',
                'name': 'PN Display, E-Commerce Website',
                'companyName': 'Pacific Northern Inc.',
                'website': '',
                'github': '',
                'logo': '/assets/projects/pndisplay.com/logo.jpg',
                'dateCreated': '2013-05-29',
                'cardCover': '',
                'shortDescription': 'E-Commerce Website. With custom more than 300 variations, fabrics and tiers for each product and platforms combos.',
                'images': [
                    {
                        'label': 'Front Page',
                        'path': '/assets/projects/pndisplay.com/front.jpg',
                    },
                    {
                        'label': 'Product List',
                        'path': '/assets/projects/pndisplay.com/product-list.jpg',
                    },
                    {
                        'label': 'Single Item',
                        'path': '/assets/projects/pndisplay.com/single-item.jpg',
                    },
                    {
                        'label': 'Multiple Custom Variations',
                        'path': '/assets/projects/pndisplay.com/variations.jpg',
                    },
                    {
                        'label': 'Backend Setup',
                        'path': '/assets/projects/pndisplay.com/backend-setup.jpg',
                    },
                ],
                'longDescription': [
                    {
                        'picture': '/assets/projects/pndisplay.com/pndisplay.com.jpg',
                        'description': 'Very complex WordPress/Woocomerce plugin. Plugin extends variant selections, by price tier, color, fabric and base made. Also admin can setup in custom made menu pages what exactly is going to be used by this plugin.',
                    },
                    {
                        'picture': '/assets/projects/pndisplay.com/pndisplay.com_email.jpg',
                        'description': 'Another plugin make multiple email blasts by chunks and specific time for that, witch can be configured in custom admin menu.',
                    },
                ],
            },
            {
                'id': 'pacificnorthern',
                'name': 'Pacific Northern Company Website',
                'companyName': 'Pacific Northern Inc.',
                'website': 'https://www.pacificnorthern.com/',
                'github': '',
                'logo': '/assets/projects/pacificnerthern.com/logo.jpg',
                'dateCreated': '2013-05-29',
                'cardCover': '',
                'images': [
                    {
                        'label': 'Front Page',
                        'path': '/assets/projects/pacificnerthern.com/front-page.jpg',
                    },
                    {
                        'label': 'Portfolio Page',
                        'path': '/assets/projects/pacificnerthern.com/portfolio-page.jpg',
                    },
                    {
                        'label': 'Portfolio Item Page',
                        'path': '/assets/projects/pacificnerthern.com/portfolio-item-page.jpg',
                    },
                    {
                        'label': 'What We Do Page',
                        'path': '/assets/projects/pacificnerthern.com/what-we-do-page.jpg',
                    },
                    {
                        'label': 'Our Team Page',
                        'path': '/assets/projects/pacificnerthern.com/our-team-page.jpg',
                    },
                    {
                        'label': 'About Us Page',
                        'path': '/assets/projects/pacificnerthern.com/about-us-page.jpg',
                    },
                ],
                'shortDescription': 'Company presentation website for displaying company information and products. Website utilized WordPress technology.',
                'longDescription': [],
            },
            {
                'id': 'eandkphotography',
                'name': 'E and K Photography',
                'companyName': 'E and K Photography',
                'website': 'https://eandkphoto.com',
                'github': 'https://github.com/evgeniypoznyak/eandkphoto.com',
                'logo': '',
                'dateCreated': '2013-06-18',
                'cardCover': 'https://data.eandkphoto.com/events/2015/09-september/newborn/large/EVG_73831.jpg',
                'images': [
                    {
                        'label': 'Front Page',
                        'path': '/assets/projects/eandkphoto.com/front.jpg',
                    },
                    {
                        'label': 'Grid',
                        'path': '/assets/projects/eandkphoto.com/grid.jpg',
                    },
                    {
                        'label': 'Contact Us',
                        'path': '/assets/projects/eandkphoto.com/contact-us.jpg',
                    },
                    {
                        'label': 'Social Page',
                        'path': '/assets/projects/eandkphoto.com/social.jpg',
                    },
                    {
                        'label': 'Portfolio Page',
                        'path': '/assets/projects/eandkphoto.com/portfolio.jpg',
                    },
                ],
                'shortDescription': 'Custom CMS on Angular with TypeScript. With protected routes by Laravel as API backend. As UI elements for frontend Angular utilized Bootstrap 4.',
                'longDescription': [
                    {
                        'picture': '/assets/projects/eandkphoto.com/eandkphoto_angular.jpg',
                        'description': 'Custom CMS on Angular. With protected routes by Laravel as API backend. On the front page I used custom menu with bootstrap 4 buttons. All photography events preloading as infinitive scroll. Authenticated user can manage pictures, events and portfolio.',
                    },
                ],
            },
        ],
    },
    {
        '_id': {
            '$oid': '5d5c6c6b52b65ac34857508a',
        },
        'id': 'wordpress',
        'name': 'Wordpress Core',
        'panel': 'left',
        'version': '0',
        'logo': '/assets/skills/WordPress.png',
        'order': '299',
        'description': 'After learning basics PHP I dive into WordPress. I learned WordPress hooks and WordPress actions, how to create Asynchronous Ajax request into WordPress. I build a lot of custom plugins and themes. By this time WordPress really helped me to understand what framework is. Thank you, WordPress!!!',
        'projects': [
            {
                'id': 'wp-holyskete',
                'name': 'Holy Skete',
                'companyName': 'The Hermitage Of The Holy Protection',
                'website': 'http://holyskete.com/',
                'github': '',
                'logo': '/assets/projects/wp-holyskete.com/logo.jpg',
                'dateCreated': '2013-05-29',
                'cardCover': '',
                'shortDescription': 'Multilingual mobile responsive web platform for displaying small business. Google API integrations for reCaptcha and Google Maps.',
                'images': [
                    {
                        'label': 'Front Page',
                        'path': '/assets/projects/wp-holyskete.com/front.jpg',
                    },
                    {
                        'label': 'History',
                        'path': '/assets/projects/wp-holyskete.com/history.jpg',
                    },
                    {
                        'label': 'Cemetery',
                        'path': '/assets/projects/wp-holyskete.com/cemetery.jpg',
                    },
                    {
                        'label': 'Directions',
                        'path': '/assets/projects/wp-holyskete.com/directions.jpg',
                    },
                    {
                        'label': 'Contact Us',
                        'path': '/assets/projects/wp-holyskete.com/contact-us.jpg',
                    },
                    {
                        'label': 'About Us',
                        'path': '/assets/projects/wp-holyskete.com/about-us.jpg',
                    },
                    {
                        'label': 'Cover Page',
                        'path': '/assets/projects/wp-holyskete.com/cover.jpg',
                    },
                ],
                'longDescription': [],
            },
            {
                'id': 'pacificnorthern',
                'name': 'Pacific Northern Company Website',
                'companyName': 'Pacific Northern Inc.',
                'website': 'https://www.pacificnorthern.com/',
                'github': '',
                'logo': '/assets/projects/pacificnerthern.com/logo.jpg',
                'dateCreated': '2013-05-29',
                'cardCover': '',
                'images': [
                    {
                        'label': 'Front Page',
                        'path': '/assets/projects/pacificnerthern.com/front-page.jpg',
                    },
                    {
                        'label': 'Portfolio Page',
                        'path': '/assets/projects/pacificnerthern.com/portfolio-page.jpg',
                    },
                    {
                        'label': 'Portfolio Item Page',
                        'path': '/assets/projects/pacificnerthern.com/portfolio-item-page.jpg',
                    },
                    {
                        'label': 'What We Do Page',
                        'path': '/assets/projects/pacificnerthern.com/what-we-do-page.jpg',
                    },
                    {
                        'label': 'Our Team Page',
                        'path': '/assets/projects/pacificnerthern.com/our-team-page.jpg',
                    },
                    {
                        'label': 'About Us Page',
                        'path': '/assets/projects/pacificnerthern.com/about-us-page.jpg',
                    },
                ],
                'shortDescription': 'Company presentation website for displaying company information and products. Website utilized WordPress technology.',
                'longDescription': [],
            },
            {
                'id': 'infocenter.pacificnorthern',
                'name': 'Internal Company’s Information Center',
                'companyName': 'Pacific Northern Inc.',
                'website': '',
                'github': '',
                'logo': '/assets/projects/infocenter.pacificnorthern.com/logo.jpg',
                'dateCreated': '2013-05-29',
                'cardCover': '',
                'shortDescription': 'This is company’s internal website build on WordPress and using Active Directory Integration.',
                'images': [
                    {
                        'label': 'Active Directory Cards View',
                        'path': '/assets/projects/infocenter.pacificnorthern.com/ad-cards.jpg',
                    },
                    {
                        'label': 'Front Page',
                        'path': '/assets/projects/infocenter.pacificnorthern.com/front.jpg',
                    },
                    {
                        'label': 'Active Directory List View',
                        'path': '/assets/projects/infocenter.pacificnorthern.com/ad-list.jpg',
                    },
                    {
                        'label': 'Active Directory Profile View',
                        'path': '/assets/projects/infocenter.pacificnorthern.com/profile.jpg',
                    },
                ],
                'longDescription': [
                    {
                        'picture': '/assets/projects/infocenter.pacificnorthern.com/infocenter.pacificnorthern.jpg',
                        'description': 'I created integration with windows active directory from Wordpress internal website. Cron job was kicking the script and script was updating and making record into database. After that WordPress custom build plugin pull these changes and reflect them into website.',
                    },
                ],
            },
            {
                'id': 'pndisplay.com',
                'name': 'PN Display, E-Commerce Website',
                'companyName': 'Pacific Northern Inc.',
                'website': '',
                'github': '',
                'logo': '/assets/projects/pndisplay.com/logo.jpg',
                'dateCreated': '2013-05-29',
                'cardCover': '',
                'shortDescription': 'E-Commerce Website. With custom more than 300 variations, fabrics and tiers for each product and platforms combos.',
                'images': [
                    {
                        'label': 'Front Page',
                        'path': '/assets/projects/pndisplay.com/front.jpg',
                    },
                    {
                        'label': 'Product List',
                        'path': '/assets/projects/pndisplay.com/product-list.jpg',
                    },
                    {
                        'label': 'Single Item',
                        'path': '/assets/projects/pndisplay.com/single-item.jpg',
                    },
                    {
                        'label': 'Multiple Custom Variations',
                        'path': '/assets/projects/pndisplay.com/variations.jpg',
                    },
                    {
                        'label': 'Backend Setup',
                        'path': '/assets/projects/pndisplay.com/backend-setup.jpg',
                    },
                ],
                'longDescription': [
                    {
                        'picture': '/assets/projects/pndisplay.com/pndisplay.com.jpg',
                        'description': 'Very complex WordPress/Woocomerce plugin. Plugin extends variant selections, by price tier, color, fabric and base made. Also admin can setup in custom made menu pages what exactly is going to be used by this plugin.',
                    },
                    {
                        'picture': '/assets/projects/pndisplay.com/pndisplay.com_email.jpg',
                        'description': 'Another plugin make multiple email blasts by chunks and specific time for that, witch can be configured in custom admin menu.',
                    },
                ],
            },
            {
                'id': 'info.pndisplay.com',
                'name': 'Information for PN Display',
                'companyName': 'Pacific Northern Inc.',
                'website': 'http://info.pndisplay.com/',
                'github': '',
                'logo': '/assets/projects/info.pndisplay.com/logo.jpg',
                'dateCreated': '2013-05-29',
                'cardCover': '',
                'shortDescription': 'Simple website providing more information about E-Commerce PN Display website. Build on WordPress engine.',
                'images': [
                    {
                        'label': 'Front Page',
                        'path': '/assets/projects/info.pndisplay.com/front.jpg',
                    },
                    {
                        'label': 'List Page',
                        'path': '/assets/projects/info.pndisplay.com/list.jpg',
                    },
                    {
                        'label': 'Platforms Page',
                        'path': '/assets/projects/info.pndisplay.com/platforms.jpg',
                    },
                    {
                        'label': 'News Page',
                        'path': '/assets/projects/info.pndisplay.com/news.jpg',
                    },
                ],
                'longDescription': [],
            },
            {
                'id': 'wp-exclude-ips-from-google-analytics',
                'name': 'Exclude Ips',
                'companyName': 'WordPress',
                'website': 'https://wordpress.org/plugins/exclude-ips-from-google-analytics/',
                'github': 'https://github.com/evgeniypoznyak/exclude-ips-from-google-analytics',
                'logo': '',
                'dateCreated': '2017-06-01',
                'cardCover': '',
                'shortDescription': 'Plugin for excluding IP’s from Google Analytics, to not been tracked. Very helpful for companies with range of ips.',
                'images': [
                    {
                        'label': 'Plugin Information',
                        'path': '/assets/projects/wp-exclude-ips-from-google-analytics/plugin.jpg',
                    },
                    {
                        'label': 'Administrator menu',
                        'path': '/assets/projects/wp-exclude-ips-from-google-analytics/backend.jpg',
                    },
                ],
                'longDescription': [],
            },
            {
                'id': 'wp-plugin-google-recaptcha',
                'name': 'Authentication with Google',
                'companyName': 'WordPress',
                'website': 'https://wordpress.org/plugins/evg-google-recaptcha/',
                'github': 'https://github.com/evgeniypoznyak/evg-google-recaptcha',
                'logo': '',
                'dateCreated': '2017-06-01',
                'cardCover': '',
                'shortDescription': 'Plugin for Login With Google reCaptcha For WordPress And Woocomerce. Plugin utilize Google API.',
                'images': [
                    {
                        'label': 'Plugin Information',
                        'path': '/assets/projects/wp-plugin-google-recaptcha/plugin.jpg',
                    },
                    {
                        'label': 'Administrator menu',
                        'path': '/assets/projects/wp-plugin-google-recaptcha/setup.jpg',
                    },
                    {
                        'label': 'Login widget',
                        'path': '/assets/projects/wp-plugin-google-recaptcha/login-window.jpg',
                    },
                    {
                        'label': 'Login with failed ReCaptcha',
                        'path': '/assets/projects/wp-plugin-google-recaptcha/failure.jpg',
                    },
                ],
                'longDescription': [],
            },
            {
                'id': 'wp-user-information-in-email',
                'name': 'User Information In Email',
                'companyName': 'WordPress',
                'website': 'https://wordpress.org/plugins/user-info-in-email-for-contact-form-7/',
                'github': 'https://github.com/evgeniypoznyak/user-info-in-email-for-contact-form-7',
                'logo': '',
                'dateCreated': '2017-06-01',
                'cardCover': '',
                'shortDescription': 'Plugin is adding the user\'s internet provider information (based on IP address), to the body of the email.',
                'images': [
                    {
                        'label': 'Plugin Information',
                        'path': '/assets/projects/wp-user-information-in-email/plugin.jpg',
                    },
                    {
                        'label': 'Email setup',
                        'path': '/assets/projects/wp-user-information-in-email/email-setup.jpg',
                    },
                    {
                        'label': 'Example',
                        'path': '/assets/projects/wp-user-information-in-email/example.jpg',
                    },
                ],
                'longDescription': [],
            },
        ],
    },

];
