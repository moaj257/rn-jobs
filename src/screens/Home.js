import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Dimensions, ImageBackground } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import { colors } from '../utils/colors';

const {width} = Dimensions.get('window');

const jobs = [
    {
      "id": "0d290ab5-e308-48ff-a66a-ae0f768f0cab",
      "type": "Full Time",
      "url": "https://jobs.github.com/positions/0d290ab5-e308-48ff-a66a-ae0f768f0cab",
      "created_at": "Thu Jan 14 16:09:30 UTC 2021",
      "company": "Pensa Systems",
      "company_url": "http://www.pensasystems.com",
      "location": "Remote",
      "title": "Python Backend Developer (Cloud)",
      "description": "<p>About Pensa Systems</p>\n<p>Pensa is an Austin-headquartered tech company and a leading innovator in autonomous perception systems for retail inventory visibility. Our system uses breakthrough technology including artificial intelligence, autonomous drones and computer vision to understand what is on store shelves. We are building really cool things that are disrupting the multi-trillion-dollar global retail industry. Our in-store inventory data-as-a-service is used by both very large consumer-packaged goods manufacturers and their retailer partners.</p>\n<p>Today we practice social distancing and mostly work remotely, but when we are in the office we have snacks in the kitchen, beer in the fridge and flexible work hours.  We appreciate diversity of all stripes and are an equal opportunity employer. If you would like to know more about us, please visit <a href=\"http://www.pensasystems.com\">www.pensasystems.com</a> and stay connected via Twitter and LinkedIn.</p>\n<p>Job Description</p>\n<p>Pensa builds highly scalable cloud-based services in support of our machine learning and data subscription business.  We value collaboration, continuous testing, and iterative development models.  Our software runs is runs in several IaaS cloud services for production scalability.  We use Python as our primary development language, and appreciate a good microservice-based REST architecture.</p>\n<p>Our Cloud Application Developers are responsible for:</p>\n<ol>\n<li>Designing and building efficient, scalable, and resilient RESTFul and batch based services that run in an IaaS provider such as AWS or Azure.  Our developers are responsible for understanding the full scope of a feature, how it will be realized in our UI, used by our customers, and how our system will perform and scale.</li>\n<li>Committing tested, documented, and reviewed code on a frequent basis, ideally daily.  Code reviews and automated testing are core to our quality approach.  Task decomposition and continuous iterative delivery are a way of life at Pensa.</li>\n<li>Collaborating with Product Management, UX, and other engineers to clarify requirements and design, and accurately estimating scope.  A clear understanding of our customers needs, and how to make large amounts of data easy to consume is instrumental in this process.</li>\n<li>Deep architectural understanding of good SaaS deployment patterns, and the technical options available from the various IaaS providers such as AWS or Azure.\n5)Actively supporting our continuous journey of applying good architecture and design patterns so that we can do our best work every day.  Strong opinions are encouraged.</li>\n</ol>\n<p>Requirements</p>\n<ol>\n<li>5 or more years building production software, ideally in a commercial environment with experience supporting a shipping product</li>\n<li>3 or more years of experience building and delivering SaaS based products, ideally in AWS or Azure</li>\n<li>2 or more years of recent experience with Python</li>\n<li>Bachelor's degree in a technical field</li>\n<li>Direct experience building RESTful services</li>\n<li>Direct experience writing efficient SQL and familiarity with ORM packages</li>\n<li>Experience with Python unit and integration test frameworks</li>\n<li>Experience with Python web frameworks, ideally Flask</li>\n<li>Understanding of client side coding in Javascript, ideally with the Vue framework is a plus</li>\n<li>Experience with a current ML framework such as Tensorflow or PyTorch is a strong positive</li>\n<li>Experience with current CV and/or Data Science libraries such as OpenCV, PIL, Numpy, SciPy is a strong positive</li>\n<li>Position is ideally based in Austin, Texas but not required</li>\n</ol>\n",
      "how_to_apply": "<p>Email CV to <a href=\"mailto:hr@pensasystems.com\">hr@pensasystems.com</a> with subject \"Github - Python Backend Developer\"</p>\n",
      "company_logo": "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbkNWIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--b3ab086151f1ec4f116e29055e1befcc189d9fc6/Copy%20of%20Pensa_logo_boxed.jpg"
    },
    {
      "id": "0443c998-b07a-43f7-8b4d-2679116ab3c0",
      "type": "Full Time",
      "url": "https://jobs.github.com/positions/0443c998-b07a-43f7-8b4d-2679116ab3c0",
      "created_at": "Thu Jan 14 16:03:43 UTC 2021",
      "company": "AVA & MAY",
      "company_url": "https://www.ava-may.de/",
      "location": "Berlin",
      "title": "Shopify Senior Frontend Developer (m/f/x) - Berlin",
      "description": "<p><strong>Description</strong></p>\n<p><strong>Hashtag You</strong> is a young, ambitious and fast growing technology-enabled brand builder in the field of direct-to-consumer e-commerce. Founded by an experienced team with a track record of launching and scaling DTC brands, we set ourselves apart with state of the art technology &amp; operations, best in class marketing, creative content and a strong community of loving customers. All these provide the backbone to the fast growth of our brand portfolio.</p>\n<p><strong>AVA &amp; MAY</strong> is the first brand incubated in the vertical of home &amp; wellness and is one of the fastest growing DTC brands in Europe. We are just about to launch the next chapter of our journey - with new categories, products, collaborations and manifold growth opportunities!</p>\n<p>We are searching for a <strong>Senior Frontend Developer</strong> (m/f/x) who gets excited about building products and designing features for social media driven consumer brands.</p>\n<p><strong>Your tasks</strong></p>\n<ul>\n<li>Deliver a high quality application from designing and iterating new features into production</li>\n<li>Ensure technical feasibility of UI/UX designs and their translation into user-friendly features</li>\n<li>Work closely with all engineering teams to ensure seamless UX and scalable architecture</li>\n<li>Conduct A/B test and web optimization to drive sales</li>\n<li>Ownership of the website front-end in a multisite environment</li>\n<li>Test, optimize and troubleshoot features before and after deployment</li>\n</ul>\n<p><strong>Your profile</strong></p>\n<ul>\n<li>4+ years experience building modern front end applications (with minimum 2 years on Shopify)</li>\n<li>Experience of building custom themes / and or plugins for ShopifyPlus, WordPress or any other popular CMS</li>\n<li>Experience creating responsive, modern user interfaces with JavaScript ES6, HTML5, Liquid and CSS3</li>\n<li>Proficient with the React / Redux stack</li>\n<li>Experience working with GraphQL, Shopify APIs or willingness to learn</li>\n<li>Experience working Git, CI/CD</li>\n<li>Passionate about quality, testing and code reviews</li>\n</ul>\n<p><strong>Benefits</strong></p>\n<ul>\n<li>Solve technical problems unique to social media driven e-commerce</li>\n<li>See the real time impact of your work in a business critical, high traffic environment</li>\n<li>Become part of an ambitious, international team in the heart of Berlin</li>\n<li>Obtain high degree of responsibility and freedom from day one</li>\n<li>Profit from clear development paths, trainings and salary possibilities</li>\n<li>Your own Macbook, public transport ticket, office drinks &amp; snacks</li>\n<li>Sounds like a fit? We can’t wait to meet you!</li>\n</ul>\n<p><img src=\"https://camo.githubusercontent.com/95b096102ab7ca680d8f3f8d5ff942cc9b73a4c2/68747470733a2f2f742e676f686972696e672e636f6d2f682f32653535366334333830373838336361626665663238356663333038373964366530353565316631303531353339313937383932643664303231373037303335\"></p>\n",
      "how_to_apply": "<p><a href=\"https://t.gohiring.com/h/0a88e4f5889cebc79560e9aa8425c63f221d6c9dfc5f28804dc48cc3e1989955\">application form</a></p>\n",
      "company_logo": "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbTZWIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--b33cdbeb7cde3022cf88bea57ae91d8d4b933c53/AVA%20&%20MAY.png"
    },
    {
      "id": "c7b1822a-61f8-44c6-9afb-6e841f7fe8e1",
      "type": "Full Time",
      "url": "https://jobs.github.com/positions/c7b1822a-61f8-44c6-9afb-6e841f7fe8e1",
      "created_at": "Thu Jan 14 15:01:13 UTC 2021",
      "company": "COMPASS Pathways",
      "company_url": "https://compasspathways.com/",
      "location": "London, UK or New York",
      "title": "Machine Learning Scientist ",
      "description": "<p><strong>Job overview</strong></p>\n<p>The Machine Learning Scientist will support a diverse set of initiatives to improve patient selection, treatment and follow-up via the development of novel machine learning &amp; AI algorithms. You will partner with internal and external stakeholders to develop insights and models to advance discoveries in mental health care.</p>\n<p>COMPASS Pathways is a mental health care company dedicated to accelerating patient access to evidence-based innovation in mental health (<a href=\"https://compasspathways.com\">https://compasspathways.com</a>). Our focus is on improving the lives of those who are suffering with mental health challenges and who are not helped by current treatments. We are pioneering the development of a new model of psilocybin therapy, in which our proprietary formulation of synthetic psilocybin, COMP360, is administered in conjunction with psychological support.</p>\n<p><strong>Roles and responsibilities</strong></p>\n<ul>\n<li>Provide expertise company-wide on a variety of Machine Learning and AI topics in order to improve the patient journey and provide mission-critical applications as COMPASS grows</li>\n<li>Develop algorithms &amp; methodologies that incorporate digital and traditional biomarkers (voice, vision, smart device, etc.) in order to improve the treatment process</li>\n<li>Work collaboratively with engineering (back-end/front-end/UI+UX/ and others) to deploy these algorithms in a highly scalable and distributed infrastructure to help patients in real time</li>\n<li>Communicate insights with stakeholders with the ability to extract therapeutic intelligence by leveraging external and internal data sources</li>\n<li>Work closely with stakeholders to identify quantitative and technological needs for various COMPASS projects</li>\n</ul>\n<p><strong>Detailed responsibilities/accountabilities</strong></p>\n<ul>\n<li>The position reports to the VP of Digital Health Research</li>\n</ul>\n<p><strong>Profile</strong></p>\n<ul>\n<li>Substantial experience in the field either through industry and/or academia. Biotech &amp; start-up experience a strong plus (Degree in: Statistics, Computer Science, Neuroscience, Engineering, Mathematics, Physics or related)</li>\n<li>Strong analytical, project management, written and verbal communication skills</li>\n<li>Proficient in Python (scikit-learn, numpy, pandas, matplotlib, scipy) and experience with Tensorflow/Keras and/or Pytorch</li>\n<li>Deep experience with at least one of the following: Computer Vision, Natural Language Processing, time-series signal processing, audio signal processing.</li>\n<li>Understanding of at least 2-3 common machine learning &amp; AI architectures (convolutional neural nets, reinforcement learning, attention &amp; transformer-based networks, graph neural nets, generative adversarial networks, etc.)</li>\n<li>Comfortable with Linux and the AWS cloud environment</li>\n<li>Ability to operate independently and in cross-functional teams in an entrepreneurial and rapid growth-oriented environment</li>\n<li>Strong alignment with core company mission and values; Compassionate, Bold, Rigorous, and Inclusive</li>\n<li>Ability to work in the UK or US</li>\n</ul>\n<p><strong>Additional qualifications - preferred</strong></p>\n<ul>\n<li>A PhD in a computational field (Degree in Statistics, Computer Science, Neuroscience, Engineering, Mathematics, Physics or related)</li>\n<li>Industry experience in a machine learning or AI role within a digital health organisation, pharma, or biotech</li>\n<li>Experience in R (tidyr, dplyr, ggplot2, Rstudio)</li>\n<li>Background in EEG, fMRI, and other brain measurement technologies a strong plus</li>\n<li>Familiar with R Shiny and/or other app development technologies such as Django/Angular/Clojure</li>\n</ul>\n<p><strong>How to apply</strong></p>\n<p>If interested, please send your CV and statement of interest to <a href=\"mailto:hiring@compasspathways.com\">hiring@compasspathways.com</a></p>\n<p>Note that we are not able to sponsor employment visas at this time, and therefore can only accept applications from people who have employment rights in the US or UK.</p>\n<p><strong>Equal opportunities</strong></p>\n<p><strong>US applicants</strong></p>\n<p>COMPASS Pathways is proud to be an equal opportunity employer. All employment decisions are based on business needs, job requirements, and individual qualifications, without regard to race, religion, color, national origin, sex (including pregnancy, childbirth, and related medical conditions), ethnicity, age, disability, sexual orientation, gender identity, gender expression, military service, genetic information, familial or marital status, or any other status, category, or characteristic protected by applicable law.</p>\n<p><strong>UK applicants</strong></p>\n<p>We are proud of our commitment to diversity and equality (pursuant to the Equality Act 2010). We do not discriminate based upon race, religion or belief, colour, nationality, ethnic or national origin, gender, pregnancy or maternity, marital or civil partner status, sexual orientation, gender reassignment, age or disability.</p>\n",
      "how_to_apply": "<p>If interested, please send your CV and statement of interest to <a href=\"mailto:hiring@compasspathways.com\">hiring@compasspathways.com</a></p>\n<p>Note that we are not able to sponsor employment visas at this time, and therefore can only accept applications from people who have employment rights in the US or UK.</p>\n",
      "company_logo": "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbXFWIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--50f2b5c49e938cfe97f4701dc1290d0a82cd0783/5e7a01fc6ed7b90015809a872f3de85ebd.jpeg"
    },
    {
      "id": "ced5b561-e6f7-47fd-a342-cf3649d5a999",
      "type": "Full Time",
      "url": "https://jobs.github.com/positions/ced5b561-e6f7-47fd-a342-cf3649d5a999",
      "created_at": "Thu Jan 14 14:58:38 UTC 2021",
      "company": "COMPASS Pathways",
      "company_url": "https://compasspathways.com/",
      "location": "London, UK or New York",
      "title": "Software Engineering and IT Project Manager ",
      "description": "<p><strong>Job overview</strong></p>\n<p>The Software Engineering and IT Project Manager will support a diverse set of initiatives to  improve patient selection, treatment and follow-up by coordinating and driving the various AI &amp; machine learning development efforts under way at COMPASS.</p>\n<p>COMPASS Pathways is a mental health care company dedicated to accelerating patient access to evidence-based innovation in mental health (<a href=\"https://compasspathways.com\">https://compasspathways.com</a>). Our focus is on improving the lives of those who are suffering with mental health challenges and who are not helped by current treatments. We are pioneering the development of a new model of psilocybin therapy, in which our proprietary formulation of synthetic psilocybin, COMP360, is administered in conjunction with psychological support.</p>\n<p><strong>Roles and responsibilities</strong></p>\n<ul>\n<li>Manage and facilitate the overall project management process from inception to design to implementation and value follow up</li>\n<li>Work closely with the product manager to ensure each project is integrated into the broader strategic vision of COMPASS and help define metrics of project success</li>\n<li>Facilitate the creation and adherence to project plans and timelines (both for internal and external stakeholders) by:</li>\n</ul>\n<ul>\n<li>Enabling discussions to generate requirements, cross-functional interdependencies, and required resources which lead to measurable KPIs and OKRs</li>\n<li>Organizing projects into distinct, measurable objectives and activities and bringing together the correct stakeholders to execute on agreed upon objectives</li>\n<li>Manage and coordinate tasks, schedules, issues, risks and status to ensure timely delivery of ongoing development work</li>\n<li>Maintain a regular reporting cadence both within the project team as well as to management and additional stake holders in terms of project/program scope, time, resourcing and costs to ensure changes are appropriate and agreed upon</li>\n<li>Monitor and apply appropriate governance policies to projects and data</li>\n</ul>\n<ul>\n<li>Work very closely with data and machine learning scientists, engineering (back-end/front-end/ data/UI+UX/ and others) and IT to successfully deliver on ongoing project</li>\n<li>Enable transparency in terms of deliverables to all internal and external stakeholders</li>\n<li>Work closely with stakeholders to identify quantitative and technological needs for various COMPASS projects</li>\n<li>Write various project documentations to inform and update internal and external stakeholders</li>\n</ul>\n<p><strong>Detailed responsibilities/accountabilities</strong></p>\n<ul>\n<li>Supporting Data Science, Engineering and IT teams</li>\n</ul>\n<p><strong>Profile</strong></p>\n<ul>\n<li>Bachelor’s degree in Business, IT, Engineering or other relevant academic discipline</li>\n<li>Project management experience</li>\n<li>Experience with Scrum/Agile/Kanban/Waterfall project management methods</li>\n<li>Leadership and executive presence combined with fantastic interpersonal skills and relationship management skills</li>\n<li>Ability to influence direction and processes without direct authority</li>\n<li>Strong oral, written and analytical abilities</li>\n<li>Strong alignment with core company mission and values Compassionate, Bold, Rigorous, and Inclusive</li>\n<li>Ability to work in the UK or US</li>\n</ul>\n<p><strong>Additional qualifications - preferred</strong></p>\n<ul>\n<li>Advanced degree (Master’s/MBA) in relevant academic discipline</li>\n<li>Familiarity with AI &amp; Machine learning algorithms a strong plus</li>\n<li>Experience in the Biotech and/or Health tech fields a strong plus</li>\n</ul>\n<p><strong>How to apply</strong></p>\n<p>If interested, please send your CV and statement of interest to <a href=\"mailto:hiring@compasspathways.com\">hiring@compasspathways.com</a></p>\n<p>Note that we are not able to sponsor employment visas at this time, and therefore can only accept applications from people who have employment rights in the US or UK.</p>\n<p><strong>Equal opportunities</strong></p>\n<p><strong>US applicants</strong></p>\n<p>COMPASS Pathways is proud to be an equal opportunity employer. All employment decisions are based on business needs, job requirements, and individual qualifications, without regard to race, religion, color, national origin, sex (including pregnancy, childbirth, and related medical conditions), ethnicity, age, disability, sexual orientation, gender identity, gender expression, military service, genetic information, familial or marital status, or any other status, category, or characteristic protected by applicable law.</p>\n<p><strong>UK applicants</strong>\nWe are proud of our commitment to diversity and equality (pursuant to the Equality Act 2010). We do not discriminate based upon race, religion or belief, colour, nationality, ethnic or national origin, gender, pregnancy or maternity, marital or civil partner status, sexual orientation, gender reassignment, age or disability.</p>\n",
      "how_to_apply": "<p>If interested, please send your CV and statement of interest to <a href=\"mailto:hiring@compasspathways.com\">hiring@compasspathways.com</a></p>\n<p>Note that we are not able to sponsor employment visas at this time, and therefore can only accept applications from people who have employment rights in the US or UK.</p>\n",
      "company_logo": "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbWlWIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--24deb237ec79429ca2b0d9f58741a047247ddfc1/5e7a01fc6ed7b90015809a872f3de85ebd.jpeg"
    }
];

const Header = () => (
    <View style={[styles.row, styles.fw, styles.jsb, styles.ph10, styles.pv20]}>
        <View style={[styles.col]}>
            <View style={[styles.row]}>
                <Text style={[styles.fm500, styles.fs24]}>Hey</Text>
                <Text style={[styles.fm800, styles.fs24, styles.ml5]}>Jayson</Text>
            </View>
            <Text style={[styles.fm500, styles.fs24]}>Looking for a job ?</Text>
        </View>
        <View style={[styles.row, styles.ac]}>
            <TouchableOpacity style={[styles.btn, styles.pbtn, styles.ac, styles.jc]}>
                <Icon name="search" size={24} color={`${colors.dark}95`} />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btn, styles.ac, styles.jc, styles.ml5]}>
                <Icon name="sliders" size={24} />
            </TouchableOpacity>
        </View>
    </View>
);

const Jobs = ({jobs}) => (
    <View>
        {jobs.map((job, i) => (
            <Job key={`job-${i}`} {...{job}} />
        ))}
    </View>
);

const Job = ({job}) => (
    <View style={[styles.jsb, styles.afs, styles.row, styles.job, styles.bgWhite]}>
        <ImageBackground source={{uri: job.company_logo}} style={[styles.thumbnail]} resizeMode={'cover'}  />
        <View style={[styles.ml5, styles.col]}>
            <View style={[styles.row, styles.afs]}>
                <Text style={[styles.fm500, styles.fs18]}>{job.title}</Text>
            </View>
            <View style={[styles.row]}>
                <View style={[styles.row]}>
                    <Icon name="map-pin" size={20} color={`${colors.dark}60`} />
                    <Text ellipsizeMode={'tail'} style={[styles.fs14, styles.ml5, styles.fm800, styles.cgray]}>{job.location}</Text>
                </View>
                <View style={[styles.row, styles.ml8]}>
                    <Icon name="globe" size={20} color={`${colors.dark}60`} />
                    <Text ellipsizeMode={'tail'} style={[styles.fs14, styles.ml5, styles.fm800, styles.cgray]}>{job.company}</Text>
                </View>
            </View>
        </View>
    </View>
);

export default class Home extends React.Component {
    render() {
        return (
            <View style={[styles.flex, styles.ac, styles.bgGray]}>
                <Header />
                <Jobs {...{jobs}} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    flex: {flex: 1},
    bgGray: {backgroundColor: `${colors.dark}09`},
    bgWhite: {backgroundColor: colors.light},
    fwrap: {flexWrap: 'wrap'},
    jc: {justifyContent: 'center'},
    jsb: {justifyContent: 'space-between'},
    ac: {alignItems: 'center'},
    afs: {alignItems: 'flex-start'},
    row: {flexDirection: 'row'},
    col: {flexDirection: 'column'},
    pv10: {paddingVertical: 10},
    ph10: {paddingHorizontal: 10},
    ph20: {paddingHorizontal: 20},
    pv20: {paddingVertical: 20},
    ml5: {marginLeft: 5},
    ml8: {marginLeft: 8},
    fw: {width: width},
    fs14: {fontSize: 14},
    fs18: {fontSize: 18},
    fs24: {fontSize: 24},
    fm500: {fontFamily: 'Poppins_500Medium'},
    fm800: {fontFamily: 'Poppins_800ExtraBold'},
    cgray: {color: `${colors.dark}60`},
    btn: {paddingVertical: 0, paddingHorizontal: 12, borderRadius: 10, height: 50},
    pbtn: {backgroundColor: colors.warning},
    thumbnail: {width: 50, height: 50, borderRadius: 5, overflow: 'hidden'},
    job: {width: width - 20, overflow: 'hidden', borderRadius: 10, padding: 15, shadowOffset: {
        width: 0, height: 0
    }, shadowRadius: 50, shadowColor: `${colors.dark}`, shadowOpacity: 0.85, marginBottom: 10}
})