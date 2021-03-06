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
                'shortDescription': 'When I originally created this website, it was created from scratch on vanilla PHP. Today this website is entirely different.',
                'longDescription': [
                    {
                        'picture': '/assets/projects/eandkphoto.com/eandkphoto_php.jpg',
                        'description': 'This website was located in a Virtual Private Server (VPS), using Apache Server on the Linux system. The file system has been used to display a list of pictures by year, month, and date. The Contact Us form utilized Google API such as reCaptcha, and user data was stored in MySQL.',
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
                'shortDescription': 'This website was created on a multilingual mobile responsive web platform, for the purpose to display a small business. The application implements Google API integrations for reCaptcha and Google Maps.',
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
                'dateCreated': '2017-10-01',
                'cardCover': '',
                'images': [],
                'shortDescription': 'This enterprise-level application connects high complexity API, workflows and different system integrations.',
                'longDescription': [
                    {
                        'picture': '/assets/projects/express-recoveries-v1/express-recoveries-v1.jpg',
                        'description': 'This is an enterprise-level application. It connects high complexity API, workflows and different systems integrations. With the IP range protection layer, the client can access the application via the UI or FTP protocol. Some scripts are running daily with cron jobs. Frontend was built in pure HTML/CSS and pages are being rendered on the PHP server.',
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
                'dateCreated': '2017-10-01',
                'cardCover': '/assets/projects/express-recoveries-v2/microservices-application.jpg',
                'images': [],
                'shortDescription': 'This is an enterprise-level application with connection to high complexity API, workflows and different systems integrations.',
                'longDescription': [
                    {
                        'picture': '/assets/projects/express-recoveries-v2/express-recoveries-v2.jpg',
                        'description': 'This is an enterprise-level application with connection to high complexity API, workflows and different systems integrations. With the IP range protection layer, the client can access the application via UI, SFTP protocol or via AWS Gateway and microservices. Some scripts are running daily with cron jobs. Frontend was built in AngularJS with AgGrid. Also by decoupling monolithic applications, we are creating microservices (C# with .Net Core and frontend on React) that are running in the Docker container.',
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
                'dateCreated': '2017-10-01',
                'cardCover': '/assets/projects/service-group/service-group-cover.jpg',
                'images': [],
                'shortDescription': 'This is a Symfony 4 project using twig templates with Vue widgets and Bootstrap 4.',
                'longDescription': [
                    {
                        'picture': '/assets/projects/service-group/service-group.jpg',
                        'description': 'This is a Symfony 4 project using twig templates with Vue widgets and Bootstrap 4. Entities with Value Objects and Repositories were used for the backend segment of the site.',
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
                'dateCreated': '2017-10-01',
                'cardCover': '/assets/projects/holyskete-api/data.holyskete.com-cover.jpg',
                'shortDescription': 'This is a Symfony 4 based API Service. It provides an email service and XML to JSON service.',
                'images': [],
                'longDescription': [
                    {
                        'picture': '/assets/projects/holyskete-api/data.holyskete.com.jpg',
                        'description': 'This is a Symfony 4 based API Service. It provides an email service and XML to JSON service. Any potential XML news feed could be parsed into JSON format and returned back to UI with CORS headers for better UI integration. API service provides two types of XML news feeds and they have been transferred over to JSON format for a React multi-language application.',
                    },
                ],
            },
            {
                'id': 'evgeniy.poznyaks.com_v1',
                'name': 'Portfolio Website v1',
                'companyName': '',
                'website': 'https://evgeniy.poznyaks.com',
                'github': 'https://github.com/evgeniypoznyak/evgeniy.poznyaks.com',
                'logo': '/assets/projects/evgeniy.poznyaks.com_v1/logo.jpg',
                'dateCreated': '2015-02-01',
                'cardCover': '',
                'shortDescription': 'This is my portfolio website. It was originally built on the PHP framework Laravel. It utilizes the Eloquent ORM and MySQL database. \nNow my portfolio application is running in Docker containers with frontend server-side rendered React, with API Gateway running in NodeJS and C# with .Net Core.',
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
                        'description': 'The application was originally on a VPS with the Apache server. Laravel was then chosen as the PHP framework and the front end was created with blade templates with Bootstrap and jQueryUI. Eloquent was also used as ORM and MySQL as a storage unit.',
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
                'dateCreated': '2015-02-01',
                'cardCover': '/assets/projects/data-eandkphoto.com/data-eandkphoto.com-cover.jpg',
                'shortDescription': 'I build this API Service with PHP framework Laravel. The service utilizes Jayson Web Token for authentication/authorization purposes. For database connection, the application uses the Eloquent ORM and MySQL as a database type.',
                'images': [],
                'longDescription': [
                    {
                        'picture': '/assets/projects/data-eandkphoto.com/data-eandkphoto.com.jpg',
                        'description': 'This API Service was created with PHP framework Laravel. It uses the Eloquent model as ORM. All endpoints are run under CRUD operations with JWT protected sensitive routes. It receives data as a binary from Angular and then passed into the database. The service manipulates file systems according to business needs and takes care of emailing through Google Gmail API.',
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
                'dateCreated': '2015-02-01',
                'cardCover': '',
                'shortDescription': 'This site utilizes PHP Framework Laravel for backend and jQueryUI for frontend. A little similar to NETFLIX.',
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
                        'description': 'Laravel is handling the file system and database connection. The user’s information is being passed on from the Active Directory. Front end was built with Bootstrap and jQuery UI.',
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
                'dateCreated': '2015-02-01',
                'cardCover': '',
                'shortDescription': 'This is an E-Commerce Website. It is custom made with more than 300 variations. It has many variation combos for fabrics and tiers for each product and platform.',
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
                        'description': 'This website was created with a complex WordPress/Woocomerce plugin. The plugin extends variant selections, by price tier, color, fabric, and type of base. Admin can set up exactly what is going to be used by this plugin.',
                    },
                    {
                        'picture': '/assets/projects/pndisplay.com/pndisplay.com_email.jpg',
                        'description': 'In addition, I created another plugin that makes multiple email blasts by chunks with a specified time for that, which can be configured in the custom admin menu.',
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
                'dateCreated': '2015-02-01',
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
                'shortDescription': 'This project is a company presentation website for displaying business information and products. The website utilizes WordPress technology.',
                'longDescription': [],
            },
            {
                'id': 'infocenter.pacificnorthern',
                'name': 'Internal Company’s Information Center',
                'companyName': 'Pacific Northern Inc.',
                'website': '',
                'github': '',
                'logo': '/assets/projects/infocenter.pacificnorthern.com/logo.jpg',
                'dateCreated': '2015-02-01',
                'cardCover': '',
                'shortDescription': 'This is the company’s internal website build on WordPress and uses Active Directory Integration.',
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
                        'description': 'I created this integration with the windows active directory from the WordPress internal website. Cron job was kicking the script, and the script was running updates for active directory employees, and then making records into the database. After all cron jobs are done, the plugin takes data and reflects it into corporate a website.',
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
                'dateCreated': '2015-02-01',
                'cardCover': '',
                'shortDescription': 'This is a simple website providing more information about the E-Commerce PN Display website. It was built on the WordPress engine.',
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
                'dateCreated': '2012-01-01',
                'cardCover': '/assets/projects/namesday.info/cover.jpg',
                'shortDescription': 'This is was my first professional project. I worked as an intern and helped with the backend and frontend. My work was mostly concentrated on the frontend part.',
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
                'dateCreated': '2015-02-01',
                'cardCover': '',
                'shortDescription': 'This is an information website for my WordPress plugins. It has built-in vanilla PHP with an Object-Oriented Design Model. In addition, it also uses Google API for ReCaptcha.',
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
                        'description': 'This is a simple application with backend in Object-Oriented Design in PHP and front end just utilizing HTML/CSS.',
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
                'dateCreated': '2015-02-01',
                'cardCover': '',
                'shortDescription': 'This is a plugin for excluding IPs from Google Analytics, so they are not to be tracked. It is very helpful for companies with a range of IPs.',
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
                'dateCreated': '2015-02-01',
                'cardCover': '',
                'shortDescription': 'This is a plugin for Login with Google reCaptcha For WordPress and Woocommerce. This plugin utilizes Google API.',
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
                'dateCreated': '2015-02-01',
                'cardCover': '',
                'shortDescription': 'This plugin was created to adds the user\'s internet provider information (based on IP address), to the body of the email.',
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
                'dateCreated': '2017-10-01',
                'cardCover': '/assets/projects/express-recoveries-v2/microservices-application.jpg',
                'images': [],
                'shortDescription': 'This is an enterprise-level application with connection to high complexity API, workflows and different systems integrations. By decoupling monolithic applications, we are creating microservices (C# with .Net Core and frontend on React) that are running in the Docker container.',
                'longDescription': [
                    {
                        'picture': '/assets/projects/express-recoveries-v2/express-recoveries-v2.jpg',
                        'description': 'By decoupling monolithic applications, we are creating microservices (C# with .Net Core and frontend on React) that are running in the Docker containers. Each container is independent and it has a single responsibility, it’s open for extension and closed for modifications. Mostly all services have an MVC structure.',
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
                'dateCreated': '2019-01-01',
                'cardCover': '/assets/projects/skills-microservice/microservices.jpg',
                'images': [],
                'shortDescription': 'This application is running in C# .Net Core docker container. It also provides API integration for different databases (MongoDB in this case).',
                'longDescription': [
                    {
                        'picture': '/assets/projects/skills-microservice/skills-microservice.jpg',
                        'description': 'This application is containerized with C# .Net Core microservice. The API MVC controller is being accessed via the repository entity. Each entity has an adapter which is dependency injected. As a data storage microservice, it utilizes MongoDB in the docker container also.',
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
        'description': 'What makes React so popular? Popular more than Angular? A big community? Maybe a isomorphic structure? Or maybe very short learning curve? Probably all of above. I started building my first professional project in 2016. Now I’m making React applications in enterprise world. I really like it because I can connect all my knowledge together now: Domain Driven Design, SOLID principles, DRY and many more.',
        'projects': [
            {
                'id': 'holyskete-react',
                'name': 'Holy Skete (React)',
                'companyName': 'The Hermitage Of The Holy Protection',
                'website': 'http://holyskete.com/',
                'github': 'https://github.com/evgeniypoznyak/holy-skete',
                'logo': '/assets/projects/holyskete-react/logo.jpg',
                'dateCreated': '2017-10-01',
                'cardCover': '',
                'shortDescription': 'This is a complex multi-language application. It utilizes React with Redux Sagas and custom UI elements. The application is using an API server for emailing and transferring XML to JSON.',
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
                        'description': 'This complex multi-language application utilizes React with Redux Sagas and custom UI elements. The application uses an API server for emailing and transferring XML to JSON. Language changes and all side effects are handled by Redux Saga.',
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
                'dateCreated': '2019-01-01',
                'cardCover': '/assets/projects/ssr-evgeniy.poznyaks.com/ssr-evgeniy.poznyaks.com.jpg',
                'images': [],
                'shortDescription': 'This is a server-side rendered React with Material UI application.  The application is pre-rendered in the Node server into pure HTML without any JavaScript for better SEO support. The application lives in a docker container and has routing with protected routes by API Gateway and JWT.',
                'longDescription': [
                    {
                        'picture': '/assets/projects/ssr-evgeniy.poznyaks.com/ssr-evgeniy.poznyaks.com-shema.jpg',
                        'description': 'ReactJS is being used in two manners here. It is used for the server-side rendering and also for the browser. All React components can be loaded without JavaScript support; this provides amazing Search Engine Optimization. If browser JavaScript will be enabled, then all preloaded HTML elements will be replaced by React and all routes dynamically will be fetched from browser.',
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
                'dateCreated': '2017-10-01',
                'cardCover': '/assets/projects/express-recoveries-v2/microservices-application.jpg',
                'images': [],
                'shortDescription': 'This is an enterprise-level application with connection to high complexity API, workflows and different system integrations. By decoupling monolithic applications, we are creating microservices (C# with .Net Core and frontend on React).',
                'longDescription': [
                    {
                        'picture': '/assets/projects/express-recoveries-v2/express-recoveries-v2-react.jpg',
                        'description': 'This is an enterprise-level application with connection to high complexity API, workflows and different systems integrations.\nWith the IP range protection layer, the client can access the application via UI, SFTP protocol or via AWS Gateway and microservices. Some scripts are running daily with cron jobs. Frontend was built in AngularJS with AgGrid.\nBy decoupling monolithic applications, we are creating microservices (C# with .Net Core and frontend on React) that are running in the Docker container. React form elements have a custom UI design with attached validation logic to them.',
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
                'dateCreated': '2015-02-01',
                'cardCover': '',
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
                'shortDescription': 'This site was built with custom CMS on Angular with TypeScript. For frontend, Angular was used with Bootstrap 4. Routes for this application are protected by JWT in the API Service, which is on Laravel.',
                'longDescription': [
                    {
                        'picture': '/assets/projects/eandkphoto.com/eandkphoto_angular.jpg',
                        'description': 'This site was built with custom CMS on Angular with TypeScript. For frontend, Angular was used with Bootstrap 4. Routes for this application are protected by JWT in the API Service, which is on Laravel. On the front page I created a custom menu with bootstrap 4 buttons. All photography events preload as an infinitive scroll on front page. If user is authenticated, then the user can manage pictures, events and portfolio.',
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
                'dateCreated': '2017-10-01',
                'cardCover': '/assets/projects/express-recoveries-v2/microservices-application.jpg',
                'images': [],
                'shortDescription': 'For this business, I built a lot of prototypes, POC, and demo models built in Angular with TypeScript. For the frontend, Angular utilized Bootstrap 4 and Angular Material.',
                'longDescription': [],
            },
            {
                'id': 'express-digital-media',
                'name': 'Express Digital Media',
                'companyName': 'Cox Automotive',
                'website': '',
                'github': '',
                'logo': '',
                'dateCreated': '2017-10-01',
                'cardCover': '/assets/projects/express-digital-media/cover.jpg',
                'images': [
                    {
                        'label': 'Front Page',
                        'path': '/assets/projects/express-digital-media/front-page.jpg',
                    },
                    {
                        'label': 'Product Selection Car',
                        'path': '/assets/projects/express-digital-media/product-selection-car.jpg',
                    },
                    {
                        'label': 'Product Selection Top',
                        'path': '/assets/projects/express-digital-media/product-selection-top.jpg',
                    },
                    {
                        'label': 'Product Selection Bottom',
                        'path': '/assets/projects/express-digital-media/product-selection-bottom.jpg',
                    },
                    {
                        'label': 'Circuit Breaker pattern with "Try again" buttons',
                        'path': '/assets/projects/express-digital-media/circuit-breaker-pattern.jpg',
                    },
                ],
                'shortDescription': 'I created this as a demo application for the NADA presentation. Application is running on Angular with TypeScript, and for the UI elements I used Angular Material. For the backend and backend integration, I created API Interfaces with Abstract Factory Pattern.',
                'longDescription': [
                    {
                        'picture': '/assets/projects/express-digital-media/express-digital-media.jpg',
                        'description': 'A domain model was used for designing this application. API responses were layered into TypeScript Interfaces and Injected with Abstract Factory Pattern. Angular Material was used in many scenarios for steppers as a “wizard”, for complex form elements with custom validators and for displaying custom UI errors.',
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
                'dateCreated': '2019-01-01',
                'cardCover': '/assets/projects/api-gateway-for-portfolio/cover.jpg',
                'images': [],
                'shortDescription': 'This API Gateway application utilizes NodeJS in the docker container. As far as language, I chose TypeScript. For authorization and authentication, JWT with MongoDB was used.',
                'longDescription': [
                    {
                        'picture': '/assets/projects/api-gateway-for-portfolio/api-gateway-for-portfolio.jpg',
                        'description': 'This is an API Gateway application built on NodeJS with TypeScript.  Because my virtual private server by default utilizes the Apache server, I created a proxy into the NodeJS Docker Container.  For authorization and authentication purposes Jayson Web Token system was used with MongoDB as a database. For better UI integration API Gateway Application, service provides CORS support. For emailing purposes node uses nodemailer with sendgrid libraries.',
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
                'dateCreated': '2017-10-01',
                'cardCover': '/assets/projects/express-recoveries-v2/microservices-application.jpg',
                'images': [],
                'shortDescription': 'This is an Enterprise level application. I created a simple parser for json configurations that converts it into different formats.  The application utilizes TypeScript and node IO library.  In this  project we also use some AWS serverless services using NodeJS.',
                'longDescription': [],
            },
            {
                'id': 'ssr-reactjs-for-portfolio',
                'name': 'SSR ReactJS for Portfolio',
                'companyName': '',
                'website': '',
                'github': 'https://github.com/evgeniypoznyak/ssr-evgeniy.poznyaks.com',
                'logo': '',
                'dateCreated': '2019-01-01',
                'cardCover': '/assets/projects/ssr-evgeniy.poznyaks.com/ssr-evgeniy.poznyaks.com.jpg',
                'images': [],
                'shortDescription': 'This is a server-side rendered React with Material UI application.  The application is pre-rendered in the Node server into pure HTML without any JavaScript for better SEO support. The application lives in a docker container and has routing with protected routes by API Gateway and JWT.',
                'longDescription': [
                    {
                        'picture': '/assets/projects/ssr-evgeniy.poznyaks.com/ssr-evgeniy.poznyaks.com-shema.jpg',
                        'description': 'ReactJS is being used in two manners here. It is used for the server-side rendering and also for the browser. All React components can be loaded without JavaScript support; this provides amazing Search Engine Optimization. If browser JavaScript will be enabled, then all preloaded HTML elements will be replaced by React and all routes dynamically will be fetched from browser.',
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
        'description': 'I think TypeScript is the best what happened in JavaScript world. Period. ES6 provides classes, but TypeScript provides interfaces. With interfaces you can design your applications stronger and make it easy to change. Strong typing is hard in the beginning but down to the road it provides self documented code, which is amazing! Through Generics SOLID code became really shining.\nWith TypeScript I was involved in many Angular and NodeJS projects.',
        'projects': [
            {
                'id': 'eandkphotography',
                'name': 'E and K Photography',
                'companyName': 'E and K Photography',
                'website': 'https://eandkphoto.com',
                'github': 'https://github.com/evgeniypoznyak/eandkphoto.com',
                'logo': '',
                'dateCreated': '2015-02-01',
                'cardCover': '',
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
                'shortDescription': 'This site was built with custom CMS on Angular with TypeScript. For frontend, Angular was used with Bootstrap 4. Routes for this application are protected by JWT in the API Service, which is on Laravel.',
                'longDescription': [
                    {
                        'picture': '/assets/projects/eandkphoto.com/eandkphoto_angular.jpg',
                        'description': 'This site was built with custom CMS on Angular with TypeScript. For frontend, Angular was used with Bootstrap 4. Routes for this application are protected by JWT in the API Service, which is on Laravel. On the front page I created a custom menu with bootstrap 4 buttons. All photography events preload as an infinitive scroll on front page. If user is authenticated, then the user can manage pictures, events and portfolio.',
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
                'dateCreated': '2019-01-01',
                'cardCover': '/assets/projects/api-gateway-for-portfolio/cover.jpg',
                'images': [],
                'shortDescription': 'This API Gateway application utilizes NodeJS in the docker container. As far as language, I chose TypeScript. For authorization and authentication, JWT with MongoDB was used.',
                'longDescription': [
                    {
                        'picture': '/assets/projects/api-gateway-for-portfolio/api-gateway-for-portfolio.jpg',
                        'description': 'This is an API Gateway application built on NodeJS with TypeScript.  Because my virtual private server by default utilizes the Apache server, I created a proxy into the NodeJS Docker Container.  For authorization and authentication purposes Jayson Web Token system was used with MongoDB as a database. For better UI integration API Gateway Application, service provides CORS support. For emailing purposes node uses nodemailer with sendgrid libraries.',
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
                'dateCreated': '2017-10-01',
                'cardCover': '/assets/projects/express-recoveries-v2/microservices-application.jpg',
                'images': [],
                'shortDescription': 'For this business, I built a lot of prototypes, POC, and demo models built in Angular with TypeScript. For the frontend, Angular utilized Bootstrap 4 and Angular Material.',
                'longDescription': [],
            },
            {
                'id': 'express-digital-media',
                'name': 'Express Digital Media',
                'companyName': 'Cox Automotive',
                'website': '',
                'github': '',
                'logo': '',
                'dateCreated': '2017-10-01',
                'cardCover': '/assets/projects/express-digital-media/cover.jpg',
                'images': [
                    {
                        'label': 'Front Page',
                        'path': '/assets/projects/express-digital-media/front-page.jpg',
                    },
                    {
                        'label': 'Product Selection Car',
                        'path': '/assets/projects/express-digital-media/product-selection-car.jpg',
                    },
                    {
                        'label': 'Product Selection Top',
                        'path': '/assets/projects/express-digital-media/product-selection-top.jpg',
                    },
                    {
                        'label': 'Product Selection Bottom',
                        'path': '/assets/projects/express-digital-media/product-selection-bottom.jpg',
                    },
                    {
                        'label': 'Circuit Breaker pattern with "Try again" buttons',
                        'path': '/assets/projects/express-digital-media/circuit-breaker-pattern.jpg',
                    },
                ],
                'shortDescription': 'I created this as a demo application for the NADA presentation. Application is running on Angular with TypeScript, and for the UI elements I used Angular Material. For the backend and backend integration, I created API Interfaces with Abstract Factory Pattern.',
                'longDescription': [
                    {
                        'picture': '/assets/projects/express-digital-media/express-digital-media.jpg',
                        'description': 'A domain model was used for designing this application. API responses were layered into TypeScript Interfaces and Injected with Abstract Factory Pattern. Angular Material was used in many scenarios for steppers as a “wizard”, for complex form elements with custom validators and for displaying custom UI errors.',
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
        'description': 'Where can you see a SOLID design in PHP? The answer is probably Symfony framework. All four acronyms shine through when they follow Symfony’s documentation and follow community guides. Symfony is very similar to .Net Core MVC framework. I built and support several projects with Symfony and API service for React support.',
        'projects': [
            {
                'id': 'data.holyskete.com',
                'name': 'Holy Skete API Service',
                'companyName': 'The Hermitage Of The Holy Protection',
                'website': 'https://data.holyskete.com/rss?url=https://orthochristian.com/xml/rss.xml',
                'github': 'https://github.com/evgeniypoznyak/holy-skete-data',
                'logo': '/assets/projects/holyskete-api/logo.jpg',
                'dateCreated': '2017-10-01',
                'cardCover': '/assets/projects/holyskete-api/data.holyskete.com-cover.jpg',
                'shortDescription': 'This is a Symfony 4 based API Service. It provides an email service and XML to JSON service.',
                'images': [],
                'longDescription': [
                    {
                        'picture': '/assets/projects/holyskete-api/data.holyskete.com.jpg',
                        'description': 'This is a Symfony 4 based API Service. It provides an email service and XML to JSON service. Any potential XML news feed could be parsed into JSON format and returned back to UI with CORS headers for better UI integration. API service provides two types of XML news feeds and they have been transferred over to JSON format for a React multi-language application.',
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
                'dateCreated': '2017-10-01',
                'cardCover': '/assets/projects/service-group/service-group-cover.jpg',
                'images': [],
                'shortDescription': 'This is a Symfony 4 project using twig templates with Vue widgets and Bootstrap 4.',
                'longDescription': [
                    {
                        'picture': '/assets/projects/service-group/service-group.jpg',
                        'description': 'This is a Symfony 4 project using twig templates with Vue widgets and Bootstrap 4. Entities with Value Objects and Repositories were used for the backend segment of the site.',
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
        'description': 'Laravel is the most popular PHP framework in the US market. Laravel is built on top of Symfony framework with huge community support and amazing Laracast videos from PHP superstar Jeffrey Way. All of this makes Laravel a number one choice for PHP framework around the world. I built several websites in Laravel as well, and created API service for Angular support.',
        'projects': [
            {
                'id': 'data.eandkphoto.com',
                'name': 'E&K Photo API Service',
                'companyName': 'E and K Photography',
                'website': 'https://data.eandkphoto.com/',
                'github': 'https://github.com/evgeniypoznyak/data.eandkphoto.com',
                'logo': '',
                'dateCreated': '2015-02-01',
                'cardCover': '/assets/projects/data-eandkphoto.com/data-eandkphoto.com-cover.jpg',
                'shortDescription': 'I build this API Service with PHP framework Laravel. The service utilizes Jayson Web Token for authentication/authorization purposes. For database connection, the application uses the Eloquent ORM and MySQL as a database type.',
                'images': [],
                'longDescription': [
                    {
                        'picture': '/assets/projects/data-eandkphoto.com/data-eandkphoto.com.jpg',
                        'description': 'This API Service was created with PHP framework Laravel. It uses the Eloquent model as ORM. All endpoints are run under CRUD operations with JWT protected sensitive routes. It receives data as a binary from Angular and then passed into the database. The service manipulates file systems according to business needs and takes care of emailing through Google Gmail API.',
                    },
                ],
            },
            {
                'id': 'evgeniy.poznyaks.com_v1',
                'name': 'Portfolio Website v1',
                'companyName': '',
                'website': 'https://evgeniy.poznyaks.com',
                'github': 'https://github.com/evgeniypoznyak/evgeniy.poznyaks.com',
                'logo': '/assets/projects/evgeniy.poznyaks.com_v1/logo.jpg',
                'dateCreated': '2015-02-01',
                'cardCover': '',
                'shortDescription': 'This is my portfolio website. It was originally built on the PHP framework Laravel. It utilizes the Eloquent ORM and MySQL database. \nNow my portfolio application is running in Docker containers with frontend server-side rendered React, with API Gateway running in NodeJS and C# with .Net Core.',
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
                        'description': 'The application was originally on a VPS with the Apache server. Laravel was then chosen as the PHP framework and the front end was created with blade templates with Bootstrap and jQueryUI. Eloquent was also used as ORM and MySQL as a storage unit.',
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
                'dateCreated': '2015-02-01',
                'cardCover': '',
                'shortDescription': 'This site utilizes PHP Framework Laravel for backend and jQueryUI for frontend. A little similar to NETFLIX.',
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
                        'description': 'Laravel is handling the file system and database connection. The user’s information is being passed on from the Active Directory. Front end was built with Bootstrap and jQuery UI.',
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
                'dateCreated': '2017-10-01',
                'cardCover': '/assets/projects/express-recoveries-v2/microservices-application.jpg',
                'images': [],
                'shortDescription': 'This is an enterprise-level application with connection to high complexity API, workflows and different systems integrations. By decoupling monolithic applications, we are creating microservices (C# with .Net Core and frontend on React) that are running in the Docker container.',
                'longDescription': [
                    {
                        'picture': '/assets/projects/express-recoveries-v2/express-recoveries-v2.jpg',
                        'description': 'By decoupling monolithic applications, we are creating microservices (C# with .Net Core and frontend on React) that are running in the Docker containers. Each container is independent and it has a single responsibility, it’s open for extension and closed for modifications. Mostly all services have an MVC structure.',
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
                'dateCreated': '2019-01-01',
                'cardCover': '/assets/projects/skills-microservice/microservices.jpg',
                'images': [],
                'shortDescription': 'This application is running in C# .Net Core docker container. It also provides API integration for different databases (MongoDB in this case).',
                'longDescription': [
                    {
                        'picture': '/assets/projects/skills-microservice/skills-microservice.jpg',
                        'description': 'This application is containerized with C# .Net Core microservice. The API MVC controller is being accessed via the repository entity. Each entity has an adapter which is dependency injected. As a data storage microservice, it utilizes MongoDB in the docker container also.',
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
                'name': 'Holy Skete (React)',
                'companyName': 'The Hermitage Of The Holy Protection',
                'website': 'http://holyskete.com/',
                'github': 'https://github.com/evgeniypoznyak/holy-skete',
                'logo': '/assets/projects/holyskete-react/logo.jpg',
                'dateCreated': '2017-10-01',
                'cardCover': '',
                'shortDescription': 'This is a complex multi-language application. It utilizes React with Redux Sagas and custom UI elements. The application is using an API server for emailing and transferring XML to JSON.',
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
                        'description': 'This complex multi-language application utilizes React with Redux Sagas and custom UI elements. The application uses an API server for emailing and transferring XML to JSON. Language changes and all side effects are handled by Redux Saga.',
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
        'description': 'Build server with NodeJS and Express is very fast and simple. It’s like one, two, three and “bam!” Everything is ready for use. ExpressJS supposed by big community and it’s been used very wildly in all level projects from small apps to enterprise level. I have experience to build NodeJS + Express projects. Please feel free to discover them.',
        'projects': [
            {
                'id': 'api-gateway-for-portfolio',
                'name': 'API Gateway for Portfolio',
                'companyName': '',
                'website': 'https://api.evgeniy.poznyaks.com/',
                'github': 'https://github.com/evgeniypoznyak/nodejs-gateway-typescript',
                'logo': '',
                'dateCreated': '2019-01-01',
                'cardCover': '/assets/projects/api-gateway-for-portfolio/cover.jpg',
                'images': [],
                'shortDescription': 'This API Gateway application utilizes NodeJS in the docker container. As far as language, I chose TypeScript. For authorization and authentication, JWT with MongoDB was used.',
                'longDescription': [
                    {
                        'picture': '/assets/projects/api-gateway-for-portfolio/api-gateway-for-portfolio.jpg',
                        'description': 'This is an API Gateway application built on NodeJS with TypeScript.  Because my virtual private server by default utilizes the Apache server, I created a proxy into the NodeJS Docker Container.  For authorization and authentication purposes Jayson Web Token system was used with MongoDB as a database. For better UI integration API Gateway Application, service provides CORS support. For emailing purposes node uses nodemailer with sendgrid libraries.',
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
                'dateCreated': '2019-01-01',
                'cardCover': '/assets/projects/ssr-evgeniy.poznyaks.com/ssr-evgeniy.poznyaks.com.jpg',
                'images': [],
                'shortDescription': 'This is a server-side rendered React with Material UI application.  The application is pre-rendered in the Node server into pure HTML without any JavaScript for better SEO support. The application lives in a docker container and has routing with protected routes by API Gateway and JWT.',
                'longDescription': [
                    {
                        'picture': '/assets/projects/ssr-evgeniy.poznyaks.com/ssr-evgeniy.poznyaks.com-shema.jpg',
                        'description': 'ReactJS is being used in two manners here. It is used for the server-side rendering and also for the browser. All React components can be loaded without JavaScript support; this provides amazing Search Engine Optimization. If browser JavaScript will be enabled, then all preloaded HTML elements will',
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
        'description': 'With MongoDB I created a few projects on NodeJS (JavaScript/TypeScript) and C# .Net Core. I really enjoining using NoSQL databases. They are easy to change, not strict structure and they are easily support JavaScript. This made they choice number one for JavaScript developers.',
        'projects': [
            {
                'id': 'holyskete-react',
                'name': 'Holy Skete (React)',
                'companyName': 'The Hermitage Of The Holy Protection',
                'website': 'http://holyskete.com/',
                'github': 'https://github.com/evgeniypoznyak/holy-skete',
                'logo': '/assets/projects/holyskete-react/logo.jpg',
                'dateCreated': '2017-10-01',
                'cardCover': '',
                'shortDescription': 'This is a complex multi-language application. It utilizes React with Redux Sagas and custom UI elements. The application is using an API server for emailing and transferring XML to JSON.',
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
                        'description': 'This complex multi-language application utilizes React with Redux Sagas and custom UI elements. The application uses an API server for emailing and transferring XML to JSON. Language changes and all side effects are handled by Redux Saga.',
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
                'dateCreated': '2019-01-01',
                'cardCover': '/assets/projects/ssr-evgeniy.poznyaks.com/ssr-evgeniy.poznyaks.com.jpg',
                'images': [],
                'shortDescription': 'This is a server-side rendered React with Material UI application.  The application is pre-rendered in the Node server into pure HTML without any JavaScript for better SEO support. The application lives in a docker container and has routing with protected routes by API Gateway and JWT.',
                'longDescription': [
                    {
                        'picture': '/assets/projects/ssr-evgeniy.poznyaks.com/ssr-evgeniy.poznyaks.com-shema.jpg',
                        'description': 'ReactJS is being used in two manners here. It is used for the server-side rendering and also for the browser. All React components can be loaded without JavaScript support; this provides amazing Search Engine Optimization. If browser JavaScript will be enabled, then all preloaded HTML elements will be replaced by React and all routes dynamically will be fetched from browser.',
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
                'dateCreated': '2019-01-01',
                'cardCover': '/assets/projects/api-gateway-for-portfolio/cover.jpg',
                'images': [],
                'shortDescription': 'This API Gateway application utilizes NodeJS in the docker container. As far as language, I chose TypeScript. For authorization and authentication, JWT with MongoDB was used.',
                'longDescription': [
                    {
                        'picture': '/assets/projects/api-gateway-for-portfolio/api-gateway-for-portfolio.jpg',
                        'description': 'This is an API Gateway application built on NodeJS with TypeScript.  Because my virtual private server by default utilizes the Apache server, I created a proxy into the NodeJS Docker Container.  For authorization and authentication purposes Jayson Web Token system was used with MongoDB as a database. For better UI integration API Gateway Application, service provides CORS support. For emailing purposes node uses nodemailer with sendgrid libraries.',
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
                'dateCreated': '2017-10-01',
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
            {
                'id': 'skills-microservice',
                'name': 'Skills Microservice',
                'companyName': '',
                'website': '',
                'github': 'https://github.com/evgeniypoznyak/Skills',
                'logo': '',
                'dateCreated': '2019-01-01',
                'cardCover': '/assets/projects/skills-microservice/microservices.jpg',
                'images': [],
                'shortDescription': 'This application is running in C# .Net Core docker container. It also provides API integration for different databases (MongoDB in this case).',
                'longDescription': [
                    {
                        'picture': '/assets/projects/skills-microservice/skills-microservice.jpg',
                        'description': 'This application is containerized with C# .Net Core microservice. The API MVC controller is being accessed via the repository entity. Each entity has an adapter which is dependency injected. As a data storage microservice, it utilizes MongoDB in the docker container also.',
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
        'description': 'I have a lot of experience building and supporting MySQL projects. In addition, I built a lot of projects with MySQL. However, I really do not see my career as a full time MySQL Engineer.',
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
                'shortDescription': 'When I originally created this website, it was created from scratch on vanilla PHP. Today this website is entirely different.',
                'longDescription': [
                    {
                        'picture': '/assets/projects/eandkphoto.com/eandkphoto_php.jpg',
                        'description': 'This website was located in a Virtual Private Server (VPS), using Apache Server on the Linux system. The file system has been used to display a list of pictures by year, month, and date. The Contact Us form utilized Google API such as reCaptcha, and user data was stored in MySQL.',
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
                'dateCreated': '2015-02-01',
                'cardCover': '',
                'shortDescription': 'This website was created on a multilingual mobile responsive web platform, for the purpose to display a small business. The application implements Google API integrations for reCaptcha and Google Maps.',
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
                'dateCreated': '2017-10-01',
                'cardCover': '',
                'images': [],
                'shortDescription': 'This enterprise-level application connects high complexity API, workflows and different system integrations.',
                'longDescription': [
                    {
                        'picture': '/assets/projects/express-recoveries-v1/express-recoveries-v1.jpg',
                        'description': 'This is an enterprise-level application. It connects high complexity API, workflows and different systems integrations. With the IP range protection layer, the client can access the application via the UI or FTP protocol. Some scripts are running daily with cron jobs. Frontend was built in pure HTML/CSS and pages are being rendered on the PHP server.',
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
                'dateCreated': '2017-10-01',
                'cardCover': '/assets/projects/express-recoveries-v2/microservices-application.jpg',
                'images': [],
                'shortDescription': 'This is an enterprise-level application with connection to high complexity API, workflows and different systems integrations.',
                'longDescription': [
                    {
                        'picture': '/assets/projects/express-recoveries-v2/express-recoveries-v2.jpg',
                        'description': 'This is an enterprise-level application with connection to high complexity API, workflows and different systems integrations. With the IP range protection layer, the client can access the application via UI, SFTP protocol or via AWS Gateway and microservices. Some scripts are running daily with cron jobs. Frontend was built in AngularJS with AgGrid. Also by decoupling monolithic applications, we are creating microservices (C# with .Net Core and frontend on React) that are running in the Docker container.',
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
                'dateCreated': '2017-10-01',
                'cardCover': '/assets/projects/service-group/service-group-cover.jpg',
                'images': [],
                'shortDescription': 'This is a Symfony 4 project using twig templates with Vue widgets and Bootstrap 4.',
                'longDescription': [
                    {
                        'picture': '/assets/projects/service-group/service-group.jpg',
                        'description': 'This is a Symfony 4 project using twig templates with Vue widgets and Bootstrap 4. Entities with Value Objects and Repositories were used for the backend segment of the site.',
                    },
                ],
            },
            {
                'id': 'evgeniy.poznyaks.com_v1',
                'name': 'Portfolio Website v1',
                'companyName': '',
                'website': 'https://evgeniy.poznyaks.com',
                'github': 'https://github.com/evgeniypoznyak/evgeniy.poznyaks.com',
                'logo': '/assets/projects/evgeniy.poznyaks.com_v1/logo.jpg',
                'dateCreated': '2015-02-01',
                'cardCover': '',
                'shortDescription': 'This is my portfolio website. It was originally built on the PHP framework Laravel. It utilizes the Eloquent ORM and MySQL database. \nNow my portfolio application is running in Docker containers with frontend server-side rendered React, with API Gateway running in NodeJS and C# with .Net Core.',
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
                        'description': 'The application was originally on a VPS with the Apache server. Laravel was then chosen as the PHP framework and the front end was created with blade templates with Bootstrap and jQueryUI. Eloquent was also used as ORM and MySQL as a storage unit.',
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
                'dateCreated': '2015-02-01',
                'cardCover': '/assets/projects/data-eandkphoto.com/data-eandkphoto.com-cover.jpg',
                'shortDescription': 'I build this API Service with PHP framework Laravel. The service utilizes Jayson Web Token for authentication/authorization purposes. For database connection, the application uses the Eloquent ORM and MySQL as a database type.',
                'images': [],
                'longDescription': [
                    {
                        'picture': '/assets/projects/data-eandkphoto.com/data-eandkphoto.com.jpg',
                        'description': 'This API Service was created with PHP framework Laravel. It uses the Eloquent model as ORM. All endpoints are run under CRUD operations with JWT protected sensitive routes. It receives data as a binary from Angular and then passed into the database. The service manipulates file systems according to business needs and takes care of emailing through Google Gmail API.',
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
                'dateCreated': '2015-02-01',
                'cardCover': '',
                'shortDescription': 'This site utilizes PHP Framework Laravel for backend and jQueryUI for frontend. A little similar to NETFLIX.',
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
                        'description': 'Laravel is handling the file system and database connection. The user’s information is being passed on from the Active Directory. Front end was built with Bootstrap and jQuery UI.',
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
                'dateCreated': '2015-02-01',
                'cardCover': '',
                'shortDescription': 'This is an E-Commerce Website. It is custom made with more than 300 variations. It has many variation combos for fabrics and tiers for each product and platform.',
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
                        'description': 'This website was created with a complex WordPress/Woocomerce plugin. The plugin extends variant selections, by price tier, color, fabric, and type of base. Admin can set up exactly what is going to be used by this plugin.',
                    },
                    {
                        'picture': '/assets/projects/pndisplay.com/pndisplay.com_email.jpg',
                        'description': 'In addition, I created another plugin that makes multiple email blasts by chunks with a specified time for that, which can be configured in the custom admin menu.',
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
                'dateCreated': '2015-02-01',
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
                'shortDescription': 'This project is a company presentation website for displaying business information and products. The website utilizes WordPress technology.',
                'longDescription': [],
            },
            {
                'id': 'infocenter.pacificnorthern',
                'name': 'Internal Company’s Information Center',
                'companyName': 'Pacific Northern Inc.',
                'website': '',
                'github': '',
                'logo': '/assets/projects/infocenter.pacificnorthern.com/logo.jpg',
                'dateCreated': '2015-02-01',
                'cardCover': '',
                'shortDescription': 'This is the company’s internal website build on WordPress and uses Active Directory Integration.',
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
                        'description': 'I created this integration with the windows active directory from the WordPress internal website. Cron job was kicking the script, and the script was running updates for active directory employees, and then making records into the database. After all cron jobs are done, the plugin takes data and reflects it into corporate a website.',
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
                'dateCreated': '2015-02-01',
                'cardCover': '',
                'shortDescription': 'This is a simple website providing more information about the E-Commerce PN Display website. It was built on the WordPress engine.',
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
                'dateCreated': '2012-01-01',
                'cardCover': '/assets/projects/namesday.info/cover.jpg',
                'shortDescription': 'This is was my first professional project. I worked as an intern and helped with the backend and frontend. My work was mostly concentrated on the frontend part.',
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
                'dateCreated': '2015-02-01',
                'cardCover': '',
                'shortDescription': 'This is an information website for my WordPress plugins. It has built-in vanilla PHP with an Object-Oriented Design Model. In addition, it also uses Google API for ReCaptcha.',
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
                        'description': 'This is a simple application with backend in Object-Oriented Design in PHP and front end just utilizing HTML/CSS.',
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
                'dateCreated': '2015-02-01',
                'cardCover': '',
                'shortDescription': 'This is a plugin for excluding IPs from Google Analytics, so they are not to be tracked. It is very helpful for companies with a range of IPs.',
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
                'dateCreated': '2015-02-01',
                'cardCover': '',
                'shortDescription': 'This is a plugin for Login with Google reCaptcha For WordPress and Woocommerce. This plugin utilizes Google API.',
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
                'dateCreated': '2015-02-01',
                'cardCover': '',
                'shortDescription': 'This plugin was created to adds the user\'s internet provider information (based on IP address), to the body of the email.',
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
        'description': 'I keep asking myself this question all the time: Why I don’t use docker before? It’s simple, easy to setup, docker use isolated environment. You can build with docker combine together all your complex applications like a Lego blocks. Using docker is always fun and I find it very useful and productive. Currently I build small microservices system with docker containers. Before it was hard to do all deployments, now it’s just a managing artifacts.',
        'projects': [
            {
                'id': 'express-recoveries-v2',
                'name': 'Express Recoveries v2',
                'companyName': 'Cox Automotive',
                'website': '',
                'github': '',
                'logo': '',
                'dateCreated': '2017-10-01',
                'cardCover': '/assets/projects/express-recoveries-v2/microservices-application.jpg',
                'images': [],
                'shortDescription': 'This is an enterprise-level application with connection to high complexity API, workflows and different system integrations. By decoupling monolithic applications, we are creating microservices (C# with .Net Core and frontend on React).',
                'longDescription': [
                    {
                        'picture': '/assets/projects/express-recoveries-v2/express-recoveries-v2.jpg',
                        'description': 'This is an enterprise-level application with connection to high complexity API, workflows and different systems integrations. With the IP range protection layer, the client can access the application via UI, SFTP protocol or via AWS Gateway and microservices. Some scripts are running daily with cron jobs. Frontend was built in AngularJS with AgGrid. By decoupling monolithic applications, we are creating microservices (C# with .Net Core and frontend on React) that are running in the Docker container. React form elements have a custom UI design with attached validation logic to them.',
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
                'dateCreated': '2019-01-01',
                'cardCover': '/assets/projects/skills-microservice/microservices.jpg',
                'images': [],
                'shortDescription': 'This application is running in C# .Net Core docker container. It also provides API integration for different databases (MongoDB in this case).',
                'longDescription': [
                    {
                        'picture': '/assets/projects/skills-microservice/skills-microservice.jpg',
                        'description': 'This application is containerized with C# .Net Core microservice. The API MVC controller is being accessed via the repository entity. Each entity has an adapter which is dependency injected. As a data storage microservice, it utilizes MongoDB in the docker container also.',
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
                'dateCreated': '2019-01-01',
                'cardCover': '/assets/projects/ssr-evgeniy.poznyaks.com/ssr-evgeniy.poznyaks.com.jpg',
                'images': [],
                'shortDescription': 'This is a server-side rendered React with Material UI application.  The application is pre-rendered in the Node server into pure HTML without any JavaScript for better SEO support. The application lives in a docker container and has routing with protected routes by API Gateway and JWT.',
                'longDescription': [
                    {
                        'picture': '/assets/projects/ssr-evgeniy.poznyaks.com/ssr-evgeniy.poznyaks.com-shema.jpg',
                        'description': 'ReactJS is being used in two manners here. It is used for the server-side rendering and also for the browser. All React components can be loaded without JavaScript support; this provides amazing Search Engine Optimization. If browser JavaScript will be enabled, then all preloaded HTML elements will be replaced by React and all routes dynamically will be fetched from browser.',
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
                'dateCreated': '2019-01-01',
                'cardCover': '/assets/projects/api-gateway-for-portfolio/cover.jpg',
                'images': [],
                'shortDescription': 'This API Gateway application utilizes NodeJS in the docker container. As far as language, I chose TypeScript. For authorization and authentication, JWT with MongoDB was used.',
                'longDescription': [
                    {
                        'picture': '/assets/projects/api-gateway-for-portfolio/api-gateway-for-portfolio.jpg',
                        'description': 'This is an API Gateway application built on NodeJS with TypeScript.  Because my virtual private server by default utilizes the Apache server, I created a proxy into the NodeJS Docker Container.  For authorization and authentication purposes Jayson Web Token system was used with MongoDB as a database. For better UI integration API Gateway Application, service provides CORS support. For emailing purposes node uses nodemailer with sendgrid libraries.',
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
        'description': 'Why microservices became so popular? Higher complexity of enterprise applications push engineering mind towards this direction. With right design microservice architecture you can protect your application for any sort of future changes. Also for each microservices same rules are been applied: SOLID, DRY, Rule of Thumb. Only with clean architecture microservices can help, otherwise it will be unnecessary step towards more complexity and it will bring more problems into already problematic code. Here microservices projects where I been involved as engineer.',
        'projects': [
            {
                'id': 'express-recoveries-v2',
                'name': 'Express Recoveries v2',
                'companyName': 'Cox Automotive',
                'website': '',
                'github': '',
                'logo': '',
                'dateCreated': '2017-10-01',
                'cardCover': '/assets/projects/express-recoveries-v2/microservices-application.jpg',
                'images': [],
                'shortDescription': 'This is an enterprise-level application with connection to high complexity API, workflows and different system integrations. By decoupling monolithic applications, we are creating microservices (C# with .Net Core and frontend on React).',
                'longDescription': [
                    {
                        'picture': '/assets/projects/express-recoveries-v2/express-recoveries-v2.jpg',
                        'description': 'This is an enterprise-level application with connection to high complexity API, workflows and different systems integrations. With the IP range protection layer, the client can access the application via UI, SFTP protocol or via AWS Gateway and microservices. Some scripts are running daily with cron jobs. Frontend was built in AngularJS with AgGrid. By decoupling monolithic applications, we are creating microservices (C# with .Net Core and frontend on React) that are running in the Docker container. React form elements have a custom UI design with attached validation logic to them.',
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
                'dateCreated': '2019-01-01',
                'cardCover': '/assets/projects/skills-microservice/microservices.jpg',
                'images': [],
                'shortDescription': 'This application is running in C# .Net Core docker container. It also provides API integration for different databases (MongoDB in this case).',
                'longDescription': [
                    {
                        'picture': '/assets/projects/skills-microservice/skills-microservice.jpg',
                        'description': 'This application is containerized with C# .Net Core microservice. The API MVC controller is being accessed via the repository entity. Each entity has an adapter which is dependency injected. As a data storage microservice, it utilizes MongoDB in the docker container also.',
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
                'dateCreated': '2019-01-01',
                'cardCover': '/assets/projects/ssr-evgeniy.poznyaks.com/ssr-evgeniy.poznyaks.com.jpg',
                'images': [],
                'shortDescription': 'This is a server-side rendered React with Material UI application.  The application is pre-rendered in the Node server into pure HTML without any JavaScript for better SEO support. The application lives in a docker container and has routing with protected routes by API Gateway and JWT.',
                'longDescription': [
                    {
                        'picture': '/assets/projects/ssr-evgeniy.poznyaks.com/ssr-evgeniy.poznyaks.com-shema.jpg',
                        'description': 'ReactJS is being used in two manners here. It is used for the server-side rendering and also for the browser. All React components can be loaded without JavaScript support; this provides amazing Search Engine Optimization. If browser JavaScript will be enabled, then all preloaded HTML elements will be replaced by React and all routes dynamically will be fetched from browser.',
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
                'dateCreated': '2019-01-01',
                'cardCover': '/assets/projects/api-gateway-for-portfolio/cover.jpg',
                'images': [],
                'shortDescription': 'This API Gateway application utilizes NodeJS in the docker container. As far as language, I chose TypeScript. For authorization and authentication, JWT with MongoDB was used.',
                'longDescription': [
                    {
                        'picture': '/assets/projects/api-gateway-for-portfolio/api-gateway-for-portfolio.jpg',
                        'description': 'This is an API Gateway application built on NodeJS with TypeScript.  Because my virtual private server by default utilizes the Apache server, I created a proxy into the NodeJS Docker Container.  For authorization and authentication purposes Jayson Web Token system was used with MongoDB as a database. For better UI integration API Gateway Application, service provides CORS support. For emailing purposes node uses nodemailer with sendgrid libraries.',
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
        'description': 'Vue could be structured the same way as Angular. I created a simple project with Vue, and it was designed as a widget. This is not a simple page application, but it has all commonly used Vue parts.',
        'projects': [
            {
                'id': 'service-group',
                'name': 'Service Group',
                'companyName': 'Cox Automotive',
                'website': '',
                'github': '',
                'logo': '',
                'dateCreated': '2017-10-01',
                'cardCover': '/assets/projects/service-group/service-group-cover.jpg',
                'images': [],
                'shortDescription': 'This is a Symfony 4 project using twig templates with Vue widgets and Bootstrap 4.',
                'longDescription': [
                    {
                        'picture': '/assets/projects/service-group/service-group.jpg',
                        'description': 'This is a Symfony 4 project using twig templates with Vue widgets and Bootstrap 4. Entities with Value Objects and Repositories were used for the backend segment of the site.',
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
        'description': 'As I get bored I decided to learn something new. My choice dropped on Python. I start learning from very basic to OOP with design patterns. I really like Python’s conditioning on the fly for dictionaries, tuples and lists. I didn’t create any professional application on Python, but I think this is going to be happen soon or later.',
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
                'dateCreated': '2017-10-01',
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
        'id': 'material-design',
        'name': 'Material Design',
        'panel': 'right',
        'version': '0',
        'logo': '/assets/skills/material-ui.png',
        'order': '199',
        'description': 'As long I use Material Design as more I like it. With all elements, grid system, typography, flexible color base and UI looking like Android or Google apps. This makes Material Design UI framework without competitions. Here is my work where Material Design is been used.',
        'projects': [
            {
                'id': 'express-digital-media',
                'name': 'Express Digital Media',
                'companyName': 'Cox Automotive',
                'website': '',
                'github': '',
                'logo': '',
                'dateCreated': '2017-10-01',
                'cardCover': '/assets/projects/express-digital-media/cover.jpg',
                'images': [
                    {
                        'label': 'Front Page',
                        'path': '/assets/projects/express-digital-media/front-page.jpg',
                    },
                    {
                        'label': 'Product Selection Car',
                        'path': '/assets/projects/express-digital-media/product-selection-car.jpg',
                    },
                    {
                        'label': 'Product Selection Top',
                        'path': '/assets/projects/express-digital-media/product-selection-top.jpg',
                    },
                    {
                        'label': 'Product Selection Bottom',
                        'path': '/assets/projects/express-digital-media/product-selection-bottom.jpg',
                    },
                    {
                        'label': 'Circuit Breaker pattern with "Try again" buttons',
                        'path': '/assets/projects/express-digital-media/circuit-breaker-pattern.jpg',
                    },
                ],
                'shortDescription': 'I created this as a demo application for the NADA presentation. Application is running on Angular with TypeScript, and for the UI elements I used Angular Material. For the backend and backend integration, I created API Interfaces with Abstract Factory Pattern.',
                'longDescription': [
                    {
                        'picture': '/assets/projects/express-digital-media/express-digital-media.jpg',
                        'description': 'A domain model was used for designing this application. API responses were layered into TypeScript Interfaces and Injected with Abstract Factory Pattern. Angular Material was used in many scenarios for steppers as a “wizard”, for complex form elements with custom validators and for displaying custom UI errors.',
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
                'dateCreated': '2017-10-01',
                'cardCover': '/assets/projects/express-recoveries-v2/microservices-application.jpg',
                'images': [],
                'shortDescription': 'For this business, I built a lot of prototypes, POC, and demo models built in Angular with TypeScript. For the frontend, Angular utilized Bootstrap 4 and Angular Material.',
                'longDescription': [],
            },
            {
                'id': 'ssr-reactjs-for-portfolio',
                'name': 'SSR ReactJS for Portfolio',
                'companyName': '',
                'website': '',
                'github': 'https://github.com/evgeniypoznyak/ssr-evgeniy.poznyaks.com',
                'logo': '',
                'dateCreated': '2019-01-01',
                'cardCover': '/assets/projects/ssr-evgeniy.poznyaks.com/ssr-evgeniy.poznyaks.com.jpg',
                'images': [],
                'shortDescription': 'This is a server-side rendered React with Material UI application.  The application is pre-rendered in the Node server into pure HTML without any JavaScript for better SEO support. The application lives in a docker container and has routing with protected routes by API Gateway and JWT.',
                'longDescription': [
                    {
                        'picture': '/assets/projects/ssr-evgeniy.poznyaks.com/ssr-evgeniy.poznyaks.com-shema.jpg',
                        'description': 'ReactJS is being used in two manners here. It is used for the server-side rendering and also for the browser. All React components can be loaded without JavaScript support; this provides amazing Search Engine Optimization. If browser JavaScript will be enabled, then all preloaded HTML elements will be replaced by React and all routes dynamically will be fetched from browser.',
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
        'description': 'Design Patterns in Software is solution for commonly happening problems, they are not final code, it’s just a skeleton for future implementations. Whey are helpful because of by implementation of them you put protection layer into your application which can protect for future changes. Also Design Pattern provide into complex code more organizing design looking, so any potential coming developers can easily understand code and start executing on code. Very commonly used design patterns are Singleton, Facade, Abstract Method/Factory, Observer, Strategy and Decorator.',
        'projects': [
            {
                'id': 'express-recoveries-v1',
                'name': 'Express Recoveries v1',
                'companyName': 'Cox Automotive',
                'website': '',
                'github': '',
                'logo': '',
                'dateCreated': '2017-10-01',
                'cardCover': '',
                'images': [],
                'shortDescription': 'This enterprise-level application connects high complexity API, workflows and different system integrations.',
                'longDescription': [
                    {
                        'picture': '/assets/projects/express-recoveries-v1/express-recoveries-v1.jpg',
                        'description': 'This is an enterprise-level application. It connects high complexity API, workflows and different systems integrations. With the IP range protection layer, the client can access the application via the UI or FTP protocol. Some scripts are running daily with cron jobs. Frontend was built in pure HTML/CSS and pages are being rendered on the PHP server.',
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
                'dateCreated': '2017-10-01',
                'cardCover': '/assets/projects/express-recoveries-v2/microservices-application.jpg',
                'images': [],
                'shortDescription': 'This is an enterprise-level application with connection to high complexity API, workflows and different systems integrations.',
                'longDescription': [
                    {
                        'picture': '/assets/projects/express-recoveries-v2/express-recoveries-v2.jpg',
                        'description': 'This is an enterprise-level application with connection to high complexity API, workflows and different systems integrations. With the IP range protection layer, the client can access the application via UI, SFTP protocol or via AWS Gateway and microservices. Some scripts are running daily with cron jobs. Frontend was built in AngularJS with AgGrid. Also by decoupling monolithic applications, we are creating microservices (C# with .Net Core and frontend on React) that are running in the Docker container.',
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
                'dateCreated': '2017-10-01',
                'cardCover': '/assets/projects/service-group/service-group-cover.jpg',
                'images': [],
                'shortDescription': 'This is a Symfony 4 project using twig templates with Vue widgets and Bootstrap 4.',
                'longDescription': [
                    {
                        'picture': '/assets/projects/service-group/service-group.jpg',
                        'description': 'This is a Symfony 4 project using twig templates with Vue widgets and Bootstrap 4. Entities with Value Objects and Repositories were used for the backend segment of the site.',
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
                'dateCreated': '2017-10-01',
                'cardCover': '/assets/projects/express-digital-media/cover.jpg',
                'images': [
                    {
                        'label': 'Front Page',
                        'path': '/assets/projects/express-digital-media/front-page.jpg',
                    },
                    {
                        'label': 'Product Selection Car',
                        'path': '/assets/projects/express-digital-media/product-selection-car.jpg',
                    },
                    {
                        'label': 'Product Selection Top',
                        'path': '/assets/projects/express-digital-media/product-selection-top.jpg',
                    },
                    {
                        'label': 'Product Selection Bottom',
                        'path': '/assets/projects/express-digital-media/product-selection-bottom.jpg',
                    },
                    {
                        'label': 'Circuit Breaker pattern with "Try again" buttons',
                        'path': '/assets/projects/express-digital-media/circuit-breaker-pattern.jpg',
                    },
                ],
                'shortDescription': 'I created this as a demo application for the NADA presentation. Application is running on Angular with TypeScript, and for the UI elements I used Angular Material. For the backend and backend integration, I created API Interfaces with Abstract Factory Pattern.',
                'longDescription': [
                    {
                        'picture': '/assets/projects/express-digital-media/express-digital-media.jpg',
                        'description': 'A domain model was used for designing this application. API responses were layered into TypeScript Interfaces and Injected with Abstract Factory Pattern. Angular Material was used in many scenarios for steppers as a “wizard”, for complex form elements with custom validators and for displaying custom UI errors.',
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
                'dateCreated': '2019-01-01',
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
                'id': 'data.holyskete.com',
                'name': 'Holy Skete API Service',
                'companyName': 'The Hermitage Of The Holy Protection',
                'website': 'https://data.holyskete.com/rss?url=https://orthochristian.com/xml/rss.xml',
                'github': 'https://github.com/evgeniypoznyak/holy-skete-data',
                'logo': '/assets/projects/holyskete-api/logo.jpg',
                'dateCreated': '2017-10-01',
                'cardCover': '/assets/projects/holyskete-api/data.holyskete.com-cover.jpg',
                'shortDescription': 'This is a Symfony 4 based API Service. It provides an email service and XML to JSON service.',
                'images': [],
                'longDescription': [
                    {
                        'picture': '/assets/projects/holyskete-api/data.holyskete.com.jpg',
                        'description': 'This is a Symfony 4 based API Service. It provides an email service and XML to JSON service. Any potential XML news feed could be parsed into JSON format and returned back to UI with CORS headers for better UI integration. API service provides two types of XML news feeds and they have been transferred over to JSON format for a React multi-language application.',
                    },
                ],
            },
            {
                'id': 'evgeniy.poznyaks.com_v1',
                'name': 'Portfolio Website v1',
                'companyName': '',
                'website': 'https://evgeniy.poznyaks.com',
                'github': 'https://github.com/evgeniypoznyak/evgeniy.poznyaks.com',
                'logo': '/assets/projects/evgeniy.poznyaks.com_v1/logo.jpg',
                'dateCreated': '2015-02-01',
                'cardCover': '',
                'shortDescription': 'This is my portfolio website. It was originally built on the PHP framework Laravel. It utilizes the Eloquent ORM and MySQL database. \nNow my portfolio application is running in Docker containers with frontend server-side rendered React, with API Gateway running in NodeJS and C# with .Net Core.',
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
                        'description': 'The application was originally on a VPS with the Apache server. Laravel was then chosen as the PHP framework and the front end was created with blade templates with Bootstrap and jQueryUI. Eloquent was also used as ORM and MySQL as a storage unit.',
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
                'dateCreated': '2015-02-01',
                'cardCover': '/assets/projects/data-eandkphoto.com/data-eandkphoto.com-cover.jpg',
                'shortDescription': 'I build this API Service with PHP framework Laravel. The service utilizes Jayson Web Token for authentication/authorization purposes. For database connection, the application uses the Eloquent ORM and MySQL as a database type.',
                'images': [],
                'longDescription': [
                    {
                        'picture': '/assets/projects/data-eandkphoto.com/data-eandkphoto.com.jpg',
                        'description': 'This API Service was created with PHP framework Laravel. It uses the Eloquent model as ORM. All endpoints are run under CRUD operations with JWT protected sensitive routes. It receives data as a binary from Angular and then passed into the database. The service manipulates file systems according to business needs and takes care of emailing through Google Gmail API.',
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
        'description': 'Test Driven Development (TDD) is way of protect application by implementing repeatable practice into code. TDD cycle starts with small steps: In very beginning engineer create failing test and start implementing code for test not being falling, after that implementing that engineer starts refactoring by modifying tests and code to be more clean and DRY. And this is basically it. This TDD cycle will be implemented all time until story/software bug will be solved. By end of this engineering team got fully testable and coverable code. Later, down to the road, if engineers will be asked for implementing new feature or refactor existing code, then they are easily start writing code and just check their self by running these tests and implementing new one by TDD cycle. I was involved in a few project by implementing TDD practices. In the beginning it was very annoying and confusing, but later everything became so-so easy and clear.',
        'projects': [
            {
                'id': 'ssr-reactjs-for-portfolio',
                'name': 'SSR ReactJS for Portfolio',
                'companyName': '',
                'website': '',
                'github': 'https://github.com/evgeniypoznyak/ssr-evgeniy.poznyaks.com',
                'logo': '',
                'dateCreated': '2019-01-01',
                'cardCover': '/assets/projects/ssr-evgeniy.poznyaks.com/ssr-evgeniy.poznyaks.com.jpg',
                'images': [],
                'shortDescription': 'This is a server-side rendered React with Material UI application.  The application is pre-rendered in the Node server into pure HTML without any JavaScript for better SEO support. The application lives in a docker container and has routing with protected routes by API Gateway and JWT.',
                'longDescription': [
                    {
                        'picture': '/assets/projects/ssr-evgeniy.poznyaks.com/ssr-evgeniy.poznyaks.com-shema.jpg',
                        'description': 'ReactJS is being used in two manners here. It is used for the server-side rendering and also for the browser. All React components can be loaded without JavaScript support; this provides amazing Search Engine Optimization. If browser JavaScript will be enabled, then all preloaded HTML elements will be replaced by React and all routes dynamically will be fetched from browser.',
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
                'dateCreated': '2019-01-01',
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
                'dateCreated': '2017-10-01',
                'cardCover': '/assets/projects/express-recoveries-v2/microservices-application.jpg',
                'images': [],
                'shortDescription': 'This is an enterprise-level application with connection to high complexity API, workflows and different system integrations. By decoupling monolithic applications, we are creating microservices (C# with .Net Core and frontend on React).',
                'longDescription': [
                    {
                        'picture': '/assets/projects/express-recoveries-v2/express-recoveries-v2-react.jpg',
                        'description': 'This is an enterprise-level application with connection to high complexity API, workflows and different systems integrations.\nWith the IP range protection layer, the client can access the application via UI, SFTP protocol or via AWS Gateway and microservices. Some scripts are running daily with cron jobs. Frontend was built in AngularJS with AgGrid.\nBy decoupling monolithic applications, we are creating microservices (C# with .Net Core and frontend on React) that are running in the Docker container. React form elements have a custom UI design with attached validation logic to them.',
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
                'dateCreated': '2019-01-01',
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
                'dateCreated': '2017-10-01',
                'cardCover': '/assets/projects/service-group/service-group-cover.jpg',
                'images': [],
                'shortDescription': 'This is a Symfony 4 project using twig templates with Vue widgets and Bootstrap 4.',
                'longDescription': [
                    {
                        'picture': '/assets/projects/service-group/service-group.jpg',
                        'description': 'This is a Symfony 4 project using twig templates with Vue widgets and Bootstrap 4. Entities with Value Objects and Repositories were used for the backend segment of the site.',
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
        'description': 'SOLID principles appears after Robert Martin book ”Clean Code” is being published, this was a result, or, if you prefer, engineering word answer on this incredible book. SOLID is an acronym. It is stand for: “S” for Single Responsibility Principle, “O” for Open/Closed Principle, “L” for Liskov Substitution, Principle, “I” for Interface Segregation Principle, “D” for Dependency Inversion Principle. All these principles are helping developers write clean easily supported code. I use these principles a lot and always trying to catch my self if I’m violating of one of these principles? Also, SOLID could be implemented not only in code, but in the design software also. For example, in microservices.',
        'projects': [
            {
                'id': 'ssr-reactjs-for-portfolio',
                'name': 'SSR ReactJS for Portfolio',
                'companyName': '',
                'website': '',
                'github': 'https://github.com/evgeniypoznyak/ssr-evgeniy.poznyaks.com',
                'logo': '',
                'dateCreated': '2019-01-01',
                'cardCover': '/assets/projects/ssr-evgeniy.poznyaks.com/ssr-evgeniy.poznyaks.com.jpg',
                'images': [],
                'shortDescription': 'This is a server-side rendered React with Material UI application.  The application is pre-rendered in the Node server into pure HTML without any JavaScript for better SEO support. The application lives in a docker container and has routing with protected routes by API Gateway and JWT.',
                'longDescription': [
                    {
                        'picture': '/assets/projects/ssr-evgeniy.poznyaks.com/ssr-evgeniy.poznyaks.com-shema.jpg',
                        'description': 'ReactJS is being used in two manners here. It is used for the server-side rendering and also for the browser. All React components can be loaded without JavaScript support; this provides amazing Search Engine Optimization. If browser JavaScript will be enabled, then all preloaded HTML elements will be replaced by React and all routes dynamically will be fetched from browser.',
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
                'dateCreated': '2017-10-01',
                'cardCover': '/assets/projects/express-recoveries-v2/microservices-application.jpg',
                'images': [],
                'shortDescription': 'This is an enterprise-level application with connection to high complexity API, workflows and different system integrations. By decoupling monolithic applications, we are creating microservices (C# with .Net Core and frontend on React).',
                'longDescription': [
                    {
                        'picture': '/assets/projects/express-recoveries-v2/express-recoveries-v2-react.jpg',
                        'description': 'This is an enterprise-level application with connection to high complexity API, workflows and different systems integrations.\nWith the IP range protection layer, the client can access the application via UI, SFTP protocol or via AWS Gateway and microservices. Some scripts are running daily with cron jobs. Frontend was built in AngularJS with AgGrid.\nBy decoupling monolithic applications, we are creating microservices (C# with .Net Core and frontend on React) that are running in the Docker container. React form elements have a custom UI design with attached validation logic to them.',
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
                'dateCreated': '2019-01-01',
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
                'dateCreated': '2017-10-01',
                'cardCover': '/assets/projects/service-group/service-group-cover.jpg',
                'images': [],
                'shortDescription': 'This is a Symfony 4 project using twig templates with Vue widgets and Bootstrap 4.',
                'longDescription': [
                    {
                        'picture': '/assets/projects/service-group/service-group.jpg',
                        'description': 'This is a Symfony 4 project using twig templates with Vue widgets and Bootstrap 4. Entities with Value Objects and Repositories were used for the backend segment of the site.',
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
        'description': 'DDD is acronym and is stand for Domain Driven Design, this coming from Eric Evans book: “Domain-Driven Design: Tackling Complexity in the Heart of Software”. This principle of designing and writing software commonly used in enterprise level applications. Domain is a main source where engineering team is gaining all information about business, and good resource on that is usually clients, operation teams and product managers. The whole team, from top manager to very low level of implementing code by engineers is speaking in ubiquitous language, they are defining scope (bonded context) for each business domain. Inside of this domain each word has specific meaning for the entire team. I was involved into this type of software processes, but before that was a lot of meetings with product team, white boarding, design sessions and design documents.',
        'projects': [
            {
                'id': 'ssr-reactjs-for-portfolio',
                'name': 'SSR ReactJS for Portfolio',
                'companyName': '',
                'website': '',
                'github': 'https://github.com/evgeniypoznyak/ssr-evgeniy.poznyaks.com',
                'logo': '',
                'dateCreated': '2019-01-01',
                'cardCover': '/assets/projects/ssr-evgeniy.poznyaks.com/ssr-evgeniy.poznyaks.com.jpg',
                'images': [],
                'shortDescription': 'This is a server-side rendered React with Material UI application.  The application is pre-rendered in the Node server into pure HTML without any JavaScript for better SEO support. The application lives in a docker container and has routing with protected routes by API Gateway and JWT.',
                'longDescription': [
                    {
                        'picture': '/assets/projects/ssr-evgeniy.poznyaks.com/ssr-evgeniy.poznyaks.com-shema.jpg',
                        'description': 'ReactJS is being used in two manners here. It is used for the server-side rendering and also for the browser. All React components can be loaded without JavaScript support; this provides amazing Search Engine Optimization. If browser JavaScript will be enabled, then all preloaded HTML elements will be replaced by React and all routes dynamically will be fetched from browser.',
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
                'dateCreated': '2019-01-01',
                'cardCover': '/assets/projects/api-gateway-for-portfolio/cover.jpg',
                'images': [],
                'shortDescription': 'This API Gateway application utilizes NodeJS in the docker container. As far as language, I chose TypeScript. For authorization and authentication, JWT with MongoDB was used.',
                'longDescription': [
                    {
                        'picture': '/assets/projects/api-gateway-for-portfolio/api-gateway-for-portfolio.jpg',
                        'description': 'This is an API Gateway application built on NodeJS with TypeScript.  Because my virtual private server by default utilizes the Apache server, I created a proxy into the NodeJS Docker Container.  For authorization and authentication purposes Jayson Web Token system was used with MongoDB as a database. For better UI integration API Gateway Application, service provides CORS support. For emailing purposes node uses nodemailer with sendgrid libraries.',
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
                'dateCreated': '2017-10-01',
                'cardCover': '/assets/projects/express-recoveries-v2/microservices-application.jpg',
                'images': [],
                'shortDescription': 'This is an enterprise-level application with connection to high complexity API, workflows and different system integrations. By decoupling monolithic applications, we are creating microservices (C# with .Net Core and frontend on React).',
                'longDescription': [
                    {
                        'picture': '/assets/projects/express-recoveries-v2/express-recoveries-v2-react.jpg',
                        'description': 'This is an enterprise-level application with connection to high complexity API, workflows and different systems integrations.\nWith the IP range protection layer, the client can access the application via UI, SFTP protocol or via AWS Gateway and microservices. Some scripts are running daily with cron jobs. Frontend was built in AngularJS with AgGrid.\nBy decoupling monolithic applications, we are creating microservices (C# with .Net Core and frontend on React) that are running in the Docker container. React form elements have a custom UI design with attached validation logic to them.',
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
                'dateCreated': '2019-01-01',
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
                'dateCreated': '2017-10-01',
                'cardCover': '/assets/projects/service-group/service-group-cover.jpg',
                'images': [],
                'shortDescription': 'This is a Symfony 4 project using twig templates with Vue widgets and Bootstrap 4.',
                'longDescription': [
                    {
                        'picture': '/assets/projects/service-group/service-group.jpg',
                        'description': 'This is a Symfony 4 project using twig templates with Vue widgets and Bootstrap 4. Entities with Value Objects and Repositories were used for the backend segment of the site.',
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
                'dateCreated': '2017-10-01',
                'cardCover': '/assets/projects/express-digital-media/cover.jpg',
                'images': [
                    {
                        'label': 'Front Page',
                        'path': '/assets/projects/express-digital-media/front-page.jpg',
                    },
                    {
                        'label': 'Product Selection Car',
                        'path': '/assets/projects/express-digital-media/product-selection-car.jpg',
                    },
                    {
                        'label': 'Product Selection Top',
                        'path': '/assets/projects/express-digital-media/product-selection-top.jpg',
                    },
                    {
                        'label': 'Product Selection Bottom',
                        'path': '/assets/projects/express-digital-media/product-selection-bottom.jpg',
                    },
                    {
                        'label': 'Circuit Breaker pattern with "Try again" buttons',
                        'path': '/assets/projects/express-digital-media/circuit-breaker-pattern.jpg',
                    },
                ],
                'shortDescription': 'I created this as a demo application for the NADA presentation. Application is running on Angular with TypeScript, and for the UI elements I used Angular Material. For the backend and backend integration, I created API Interfaces with Abstract Factory Pattern.',
                'longDescription': [
                    {
                        'picture': '/assets/projects/express-digital-media/express-digital-media.jpg',
                        'description': 'A domain model was used for designing this application. API responses were layered into TypeScript Interfaces and Injected with Abstract Factory Pattern. Angular Material was used in many scenarios for steppers as a “wizard”, for complex form elements with custom validators and for displaying custom UI errors.',
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
        'version': '4',
        'logo': '/assets/skills/bootstrap.png',
        'order': '266',
        'description': 'Bootstrap still popular and it’s been wildly used. After fourth version is been released with flexboxes this placed Bootstrap into new level of frontend framework. I created a lot projects where Bootstrap is been used.',
        'projects': [
            {
                'id': 'eandkphotography',
                'name': 'E and K Photography',
                'companyName': 'E and K Photography',
                'website': 'https://eandkphoto.com',
                'github': 'https://github.com/evgeniypoznyak/eandkphoto.com',
                'logo': '',
                'dateCreated': '2015-02-01',
                'cardCover': '',
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
                'shortDescription': 'This site was built with custom CMS on Angular with TypeScript. For frontend, Angular was used with Bootstrap 4. Routes for this application are protected by JWT in the API Service, which is on Laravel.',
                'longDescription': [
                    {
                        'picture': '/assets/projects/eandkphoto.com/eandkphoto_angular.jpg',
                        'description': 'This site was built with custom CMS on Angular with TypeScript. For frontend, Angular was used with Bootstrap 4. Routes for this application are protected by JWT in the API Service, which is on Laravel. On the front page I created a custom menu with bootstrap 4 buttons. All photography events preload as an infinitive scroll on front page. If user is authenticated, then the user can manage pictures, events and portfolio.',
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
                'dateCreated': '2017-10-01',
                'cardCover': '/assets/projects/express-recoveries-v2/microservices-application.jpg',
                'images': [],
                'shortDescription': 'This is an enterprise-level application with connection to high complexity API, workflows and different systems integrations.',
                'longDescription': [
                    {
                        'picture': '/assets/projects/express-recoveries-v2/express-recoveries-v2.jpg',
                        'description': 'This is an enterprise-level application with connection to high complexity API, workflows and different systems integrations. With the IP range protection layer, the client can access the application via UI, SFTP protocol or via AWS Gateway and microservices. Some scripts are running daily with cron jobs. Frontend was built in AngularJS with AgGrid. Also by decoupling monolithic applications, we are creating microservices (C# with .Net Core and frontend on React) that are running in the Docker container.',
                    },
                ],
            },
            {
                'id': 'holyskete-react',
                'name': 'Holy Skete (React)',
                'companyName': 'The Hermitage Of The Holy Protection',
                'website': 'http://holyskete.com/',
                'github': 'https://github.com/evgeniypoznyak/holy-skete',
                'logo': '/assets/projects/holyskete-react/logo.jpg',
                'dateCreated': '2017-10-01',
                'cardCover': '',
                'shortDescription': 'This is a complex multi-language application. It utilizes React with Redux Sagas and custom UI elements. The application is using an API server for emailing and transferring XML to JSON.',
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
                        'description': 'This complex multi-language application utilizes React with Redux Sagas and custom UI elements. The application uses an API server for emailing and transferring XML to JSON. Language changes and all side effects are handled by Redux Saga.',
                    },
                ],
            },
            {
                'id': 'evgeniy.poznyaks.com_v1',
                'name': 'Portfolio Website v1',
                'companyName': '',
                'website': 'https://evgeniy.poznyaks.com',
                'github': 'https://github.com/evgeniypoznyak/evgeniy.poznyaks.com',
                'logo': '/assets/projects/evgeniy.poznyaks.com_v1/logo.jpg',
                'dateCreated': '2015-02-01',
                'cardCover': '',
                'shortDescription': 'This is my portfolio website. It was originally built on the PHP framework Laravel. It utilizes the Eloquent ORM and MySQL database. \nNow my portfolio application is running in Docker containers with frontend server-side rendered React, with API Gateway running in NodeJS and C# with .Net Core.',
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
                        'description': 'The application was originally on a VPS with the Apache server. Laravel was then chosen as the PHP framework and the front end was created with blade templates with Bootstrap and jQueryUI. Eloquent was also used as ORM and MySQL as a storage unit.',
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
                'dateCreated': '2015-02-01',
                'cardCover': '',
                'shortDescription': 'This site utilizes PHP Framework Laravel for backend and jQueryUI for frontend. A little similar to NETFLIX.',
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
                        'description': 'Laravel is handling the file system and database connection. The user’s information is being passed on from the Active Directory. Front end was built with Bootstrap and jQuery UI.',
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
        'description': 'Knowledge of how keywords works. How unique content works. Why is organic search is more important than referral and direct searches. Why React and Angular has a problem with CEO and why Server Side Rendering is coming in a rescue. All these and a little more detailed answers is important for public application. I build a several applications with SEO support.',
        'projects': [
            {
                'id': 'ssr-reactjs-for-portfolio',
                'name': 'SSR ReactJS for Portfolio',
                'companyName': '',
                'website': '',
                'github': 'https://github.com/evgeniypoznyak/ssr-evgeniy.poznyaks.com',
                'logo': '',
                'dateCreated': '2019-01-01',
                'cardCover': '/assets/projects/ssr-evgeniy.poznyaks.com/ssr-evgeniy.poznyaks.com.jpg',
                'images': [],
                'shortDescription': 'This is a server-side rendered React with Material UI application.  The application is pre-rendered in the Node server into pure HTML without any JavaScript for better SEO support. The application lives in a docker container and has routing with protected routes by API Gateway and JWT.',
                'longDescription': [
                    {
                        'picture': '/assets/projects/ssr-evgeniy.poznyaks.com/ssr-evgeniy.poznyaks.com-shema.jpg',
                        'description': 'ReactJS is being used in two manners here. It is used for the server-side rendering and also for the browser. All React components can be loaded without JavaScript support; this provides amazing Search Engine Optimization. If browser JavaScript will be enabled, then all preloaded HTML elements will be replaced by React and all routes dynamically will be fetched from browser.',
                    },
                ],
            },
            {
                'id': 'evgeniy.poznyaks.com_v1',
                'name': 'Portfolio Website v1',
                'companyName': '',
                'website': 'https://evgeniy.poznyaks.com',
                'github': 'https://github.com/evgeniypoznyak/evgeniy.poznyaks.com',
                'logo': '/assets/projects/evgeniy.poznyaks.com_v1/logo.jpg',
                'dateCreated': '2015-02-01',
                'cardCover': '',
                'shortDescription': 'This is my portfolio website. It was originally built on the PHP framework Laravel. It utilizes the Eloquent ORM and MySQL database. \nNow my portfolio application is running in Docker containers with frontend server-side rendered React, with API Gateway running in NodeJS and C# with .Net Core.',
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
                        'description': 'The application was originally on a VPS with the Apache server. Laravel was then chosen as the PHP framework and the front end was created with blade templates with Bootstrap and jQueryUI. Eloquent was also used as ORM and MySQL as a storage unit.',
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
                'id': 'wp-holyskete',
                'name': 'Holy Skete',
                'companyName': 'The Hermitage Of The Holy Protection',
                'website': 'http://holyskete.com/',
                'github': '',
                'logo': '/assets/projects/wp-holyskete.com/logo.jpg',
                'dateCreated': '2015-02-01',
                'cardCover': '',
                'shortDescription': 'This website was created on a multilingual mobile responsive web platform, for the purpose to display a small business. The application implements Google API integrations for reCaptcha and Google Maps.',
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
                'id': 'pndisplay.com',
                'name': 'PN Display, E-Commerce Website',
                'companyName': 'Pacific Northern Inc.',
                'website': '',
                'github': '',
                'logo': '/assets/projects/pndisplay.com/logo.jpg',
                'dateCreated': '2015-02-01',
                'cardCover': '',
                'shortDescription': 'This is an E-Commerce Website. It is custom made with more than 300 variations. It has many variation combos for fabrics and tiers for each product and platform.',
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
                        'description': 'This website was created with a complex WordPress/Woocomerce plugin. The plugin extends variant selections, by price tier, color, fabric, and type of base. Admin can set up exactly what is going to be used by this plugin.',
                    },
                    {
                        'picture': '/assets/projects/pndisplay.com/pndisplay.com_email.jpg',
                        'description': 'In addition, I created another plugin that makes multiple email blasts by chunks with a specified time for that, which can be configured in the custom admin menu.',
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
                'dateCreated': '2015-02-01',
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
                'shortDescription': 'This project is a company presentation website for displaying business information and products. The website utilizes WordPress technology.',
                'longDescription': [],
            },
            {
                'id': 'namesday.info',
                'name': 'Names Day info',
                'companyName': 'Andrei Pervychine',
                'website': 'https://www.namesday.info/',
                'github': '',
                'logo': '',
                'dateCreated': '2012-01-01',
                'cardCover': '/assets/projects/namesday.info/cover.jpg',
                'shortDescription': 'This is was my first professional project. I worked as an intern and helped with the backend and frontend. My work was mostly concentrated on the frontend part.',
                'images': [],
                'longDescription': [],
            },
        ],
    },
    {
        '_id': {
            '$oid': '5d5c6c6b52b65ac34857508a',
        },
        'id': 'wordpress',
        'name': 'Wordpress Core',
        'panel': 'right',
        'version': '0',
        'logo': '/assets/skills/WordPress.png',
        'order': '299',
        'description': 'After learning the basics of PHP, I dove into WordPress. I learned WordPress hooks and WordPress actions, and how to create an Asynchronous Ajax request into WordPress. I built a lot of custom plugins and themes. By this time, WordPress really helped me understand what a framework is. Thank you, WordPress!',
        'projects': [
            {
                'id': 'wp-holyskete',
                'name': 'Holy Skete',
                'companyName': 'The Hermitage Of The Holy Protection',
                'website': 'http://holyskete.com/',
                'github': '',
                'logo': '/assets/projects/wp-holyskete.com/logo.jpg',
                'dateCreated': '2015-02-01',
                'cardCover': '',
                'shortDescription': 'This website was created on a multilingual mobile responsive web platform, for the purpose to display a small business. The application implements Google API integrations for reCaptcha and Google Maps.',
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
                'id': 'pndisplay.com',
                'name': 'PN Display, E-Commerce Website',
                'companyName': 'Pacific Northern Inc.',
                'website': '',
                'github': '',
                'logo': '/assets/projects/pndisplay.com/logo.jpg',
                'dateCreated': '2015-02-01',
                'cardCover': '',
                'shortDescription': 'This is an E-Commerce Website. It is custom made with more than 300 variations. It has many variation combos for fabrics and tiers for each product and platform.',
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
                        'description': 'This website was created with a complex WordPress/Woocomerce plugin. The plugin extends variant selections, by price tier, color, fabric, and type of base. Admin can set up exactly what is going to be used by this plugin.',
                    },
                    {
                        'picture': '/assets/projects/pndisplay.com/pndisplay.com_email.jpg',
                        'description': 'In addition, I created another plugin that makes multiple email blasts by chunks with a specified time for that, which can be configured in the custom admin menu.',
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
                'dateCreated': '2015-02-01',
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
                'shortDescription': 'This project is a company presentation website for displaying business information and products. The website utilizes WordPress technology.',
                'longDescription': [],
            },
            {
                'id': 'infocenter.pacificnorthern',
                'name': 'Internal Company’s Information Center',
                'companyName': 'Pacific Northern Inc.',
                'website': '',
                'github': '',
                'logo': '/assets/projects/infocenter.pacificnorthern.com/logo.jpg',
                'dateCreated': '2015-02-01',
                'cardCover': '',
                'shortDescription': 'This is the company’s internal website build on WordPress and uses Active Directory Integration.',
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
                        'description': 'I created this integration with the windows active directory from the WordPress internal website. Cron job was kicking the script, and the script was running updates for active directory employees, and then making records into the database. After all cron jobs are done, the plugin takes data and reflects it into corporate a website.',
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
                'dateCreated': '2015-02-01',
                'cardCover': '',
                'shortDescription': 'This is a simple website providing more information about the E-Commerce PN Display website. It was built on the WordPress engine.',
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
                'dateCreated': '2015-02-01',
                'cardCover': '',
                'shortDescription': 'This is a plugin for excluding IPs from Google Analytics, so they are not to be tracked. It is very helpful for companies with a range of IPs.',
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
                'dateCreated': '2015-02-01',
                'cardCover': '',
                'shortDescription': 'This is a plugin for Login with Google reCaptcha For WordPress and Woocommerce. This plugin utilizes Google API.',
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
                'dateCreated': '2015-02-01',
                'cardCover': '',
                'shortDescription': 'This plugin was created to adds the user\'s internet provider information (based on IP address), to the body of the email.',
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
